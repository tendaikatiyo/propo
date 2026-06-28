import json
import re
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional

from analytics.price_utils import reconcile_classifieds_rent_price, reconcile_rent_price

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
RAW_SALES_PATH = DATA_DIR / "sales.json"
RAW_RENTS_PATH = DATA_DIR / "rentals.json"
CLEAN_SALES_PATH = DATA_DIR / "clean_sales.json"
CLEAN_RENTS_PATH = DATA_DIR / "clean_rentals.json"

PROPERTY_TYPE_MAP = {
    "house": "house",
    "home": "house",
    "flat": "flat",
    "apartment": "apartment",
    "room": "room",
    "townhouse": "townhouse",
    "cluster": "townhouse",
    "cottage": "cottage",
    "commercial": "commercial",
    "shop": "commercial",
    "office": "commercial",
    "residential_land": "residential_land",
    "residential land": "residential_land",
    "residential stand": "residential_land",
    "land": "residential_land",
    "stand": "residential_land",
}

CITY_NORMALIZATION = {
    "harare north": "Harare",
    "harare south": "Harare",
    "harare east": "Harare",
    "harare west": "Harare",
    "harare": "Harare",
    "bulawayo": "Bulawayo",
    "gweru": "Gweru",
    "mutare": "Mutare",
    "masvingo": "Masvingo",
    "ruwa": "Ruwa",
    "chitungwiza": "Chitungwiza",
    "kadoma": "Kadoma",
    "kwekwe": "Kwekwe",
    "marondera": "Marondera",
    "chipinge": "Chipinge",
    "goromonzi": "Goromonzi",
}


def slugify(value: str) -> str:
    value = str(value or "").strip().lower()
    value = re.sub(r"[^a-z0-9]+", "_", value)
    value = re.sub(r"_+", "_", value)
    return value.strip("_")


def normalize_text(value: Any) -> str:
    if value is None:
        return ""
    text = str(value).strip()
    text = re.sub(r"\s+", " ", text)
    return text.title()


def normalize_city(value: Any) -> str:
    text = normalize_text(value)
    key = text.strip().lower()
    return CITY_NORMALIZATION.get(key, text)


def normalize_suburb(value: Any) -> str:
    text = normalize_text(value)
    return text


def normalize_property_type(value: Any) -> str:
    if value is None:
        return "unknown"
    text = str(value).strip().lower()
    if text in PROPERTY_TYPE_MAP:
        return PROPERTY_TYPE_MAP[text]
    for token, normalized in PROPERTY_TYPE_MAP.items():
        if token in text:
            return normalized
    return "unknown"


def optional_int(value: Any) -> Optional[int]:
    if value is None:
        return None
    try:
        return int(value)
    except (TypeError, ValueError):
        return None


def optional_float(value: Any) -> Optional[float]:
    if value is None:
        return None
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def parse_price(value: Any) -> Optional[int]:
    if value is None:
        return None
    if isinstance(value, (int, float)):
        return int(value)
    text = str(value)
    digits = re.findall(r"[0-9]+(?:[.,][0-9]+)?", text.replace(",", ""))
    if not digits:
        return None
    try:
        return int(float(digits[0]))
    except ValueError:
        return None


def load_json(path: Path) -> List[Dict[str, Any]]:
    if not path.exists():
        raise FileNotFoundError(f"Data file not found: {path}")
    with path.open("r", encoding="utf-8") as fh:
        return json.load(fh)


def normalize_listing_record(
    record: Dict[str, Any],
    source: str,
    listing_type: str,
) -> Optional[Dict[str, Any]]:
    listing_url = str(record.get("listing_url", "")).strip()
    if not listing_url:
        return None

    city = normalize_city(record.get("city"))
    suburb = normalize_suburb(record.get("suburb"))
    price = parse_price(record.get("price"))

    title = normalize_text(record.get("title"))
    location = str(record.get("location", "")).strip()
    location = re.sub(r"\s+", " ", location)
    description = str(record.get("description", "")).strip()
    description = re.sub(r"\s+", " ", description)

    if listing_type == "rent":
        if source == "classifieds":
            price = reconcile_classifieds_rent_price(price, description)
        else:
            price = reconcile_rent_price(price, description)

    if not suburb or not city:
        return None
    if price is None or price <= 0:
        return None

    property_type = normalize_property_type(record.get("property_type") or title)
    if property_type == "unknown" and listing_type == "sale":
        property_type = normalize_property_type(title)

    city = normalize_city(city)
    suburb = normalize_suburb(suburb)
    market_id = f"{slugify(city)}_{slugify(suburb)}"
    original_price = parse_price(record.get("price"))
    price_raw = str(record.get("price_raw", "")).strip()
    if listing_type == "rent" and price != original_price:
        price_raw = f"USD {price:,}/pm"
    elif not price_raw:
        price_raw = f"USD {price:,}/pm" if listing_type == "rent" else f"USD {price:,}"

    return {
        "listing_url": listing_url,
        "source": source,
        "listing_type": listing_type,
        "market_id": market_id,
        "city": city,
        "suburb": suburb,
        "title": title,
        "price_raw": price_raw,
        "price": price,
        "location": location,
        "property_type": property_type,
        "description": description,
        "bedrooms": optional_int(record.get("bedrooms")),
        "bathrooms": optional_int(record.get("bathrooms")),
        "lounges": optional_int(record.get("lounges")),
        "land_size": optional_float(record.get("land_size")),
        "land_size_unit": str(record.get("land_size_unit") or "").strip() or None,
        "agency_name": str(record.get("agency_name") or "").strip(),
        "agency_logo": str(record.get("agency_logo") or "").strip(),
    }


def clean_records(
    records: Iterable[Dict[str, Any]],
    listing_type: str = "rent",
    source: str = "propertybook",
) -> List[Dict[str, Any]]:
    seen_urls = set()
    cleaned: List[Dict[str, Any]] = []

    for record in records:
        normalized = normalize_listing_record(record, source, listing_type)
        if not normalized or normalized["listing_url"] in seen_urls:
            continue

        cleaned.append(
            {
                "market_id": normalized["market_id"],
                "city": normalized["city"],
                "suburb": normalized["suburb"],
                "title": normalized["title"],
                "listing_url": normalized["listing_url"],
                "price_raw": normalized["price_raw"],
                "price": normalized["price"],
                "location": normalized["location"],
                "property_type": normalized["property_type"],
                "description": normalized["description"],
                "bedrooms": normalized["bedrooms"] or 0,
                "bathrooms": normalized["bathrooms"] or 0,
                "lounges": normalized["lounges"] or 0,
            }
        )
        seen_urls.add(normalized["listing_url"])

    return cleaned


def save_json(records: List[Dict[str, Any]], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as fh:
        json.dump(records, fh, indent=2, ensure_ascii=False)
    print(f"Saved {len(records)} records to {path}")


def main() -> None:
    sales = load_json(RAW_SALES_PATH)
    rentals = load_json(RAW_RENTS_PATH)

    clean_sales = clean_records(sales, listing_type="sale")
    clean_rentals = clean_records(rentals, listing_type="rent")

    save_json(clean_sales, CLEAN_SALES_PATH)
    save_json(clean_rentals, CLEAN_RENTS_PATH)


if __name__ == "__main__":
    main()
