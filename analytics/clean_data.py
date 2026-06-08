import json
import re
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional

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
    for token, normalized in PROPERTY_TYPE_MAP.items():
        if token in text:
            return normalized
    return "unknown"


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


def clean_records(records: Iterable[Dict[str, Any]]) -> List[Dict[str, Any]]:
    seen_urls = set()
    cleaned: List[Dict[str, Any]] = []

    for record in records:
        listing_url = str(record.get("listing_url", "")).strip()
        if not listing_url or listing_url in seen_urls:
            continue

        city = normalize_city(record.get("city"))
        suburb = normalize_suburb(record.get("suburb"))
        price = parse_price(record.get("price"))

        if not listing_url:
            continue
        if not suburb:
            continue
        if not city:
            continue
        if price is None or price <= 0:
            continue

        title = normalize_text(record.get("title"))
        location = str(record.get("location", "")).strip()
        location = re.sub(r"\s+", " ", location)
        description = str(record.get("description", "")).strip()
        description = re.sub(r"\s+", " ", description)
        property_type = normalize_property_type(record.get("property_type") or title)

        city = normalize_city(city)
        suburb = normalize_suburb(suburb)
        market_id = f"{slugify(city)}_{slugify(suburb)}"

        cleaned.append(
            {
                "market_id": market_id,
                "city": city,
                "suburb": suburb,
                "title": title,
                "listing_url": listing_url,
                "price_raw": str(record.get("price_raw", "")).strip(),
                "price": price,
                "location": location,
                "property_type": property_type,
                "description": description,
                "bedrooms": int(record.get("bedrooms") or 0),
                "bathrooms": int(record.get("bathrooms") or 0),
                "lounges": int(record.get("lounges") or 0),
            }
        )
        seen_urls.add(listing_url)

    return cleaned


def save_json(records: List[Dict[str, Any]], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as fh:
        json.dump(records, fh, indent=2, ensure_ascii=False)
    print(f"Saved {len(records)} records to {path}")


def main() -> None:
    sales = load_json(RAW_SALES_PATH)
    rentals = load_json(RAW_RENTS_PATH)

    clean_sales = clean_records(sales)
    clean_rentals = clean_records(rentals)

    save_json(clean_sales, CLEAN_SALES_PATH)
    save_json(clean_rentals, CLEAN_RENTS_PATH)


if __name__ == "__main__":
    main()
