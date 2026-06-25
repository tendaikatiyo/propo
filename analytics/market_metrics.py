import json
import math
from collections import Counter
from pathlib import Path
from statistics import mean, median
from typing import Any, Dict, Iterable, List, Optional

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
CLEAN_SALES_PATH = DATA_DIR / "clean_sales.json"
CLEAN_RENTS_PATH = DATA_DIR / "clean_rentals.json"
MARKET_METRICS_PATH = DATA_DIR / "market_metrics.json"

PROPERTY_TYPE_BUCKETS = ["house", "apartment", "flat", "room", "townhouse", "commercial"]
BEDROOM_BUCKETS = ["1", "2", "3", "4_plus"]


def load_json(path: Path) -> List[Dict[str, Any]]:
    with path.open("r", encoding="utf-8") as fh:
        return json.load(fh)


def safe_median(numbers: Iterable[int]) -> Optional[int]:
    values = [int(x) for x in numbers if x is not None]
    if not values:
        return None
    return int(median(values))


def safe_mean(numbers: Iterable[int]) -> Optional[float]:
    values = [float(x) for x in numbers if x is not None]
    if not values:
        return None
    return float(mean(values))


def round_optional(value: Optional[float], decimals: int = 2) -> Optional[float]:
    if value is None:
        return None
    return round(value, decimals)


def confidence_points(count: int) -> int:
    if count >= 50:
        return 50
    if count >= 20:
        return 30
    if count > 0:
        return 10
    return 0


def normalize_type(value: str) -> str:
    text = str(value or "").lower()
    if "house" in text:
        return "house"
    if "townhouse" in text or "cluster" in text:
        return "townhouse"
    if "apartment" in text:
        return "apartment"
    if "flat" in text:
        return "flat"
    if "room" in text:
        return "room"
    if "commercial" in text or "shop" in text or "office" in text:
        return "commercial"
    return "unknown"


def normalize_bedroom_bucket(value: Any) -> Optional[str]:
    if value is None:
        return None
    try:
        beds = int(value)
    except (TypeError, ValueError):
        return None
    if beds <= 0:
        return None
    if beds == 1:
        return "1"
    if beds == 2:
        return "2"
    if beds == 3:
        return "3"
    return "4_plus"


def score_opportunity(
    yield_percent: Optional[float],
    rental_count: int,
    sale_count: int,
    confidence_score: int,
) -> int:
    yield_percent = float(yield_percent or 0)
    rental_count = max(0, rental_count)
    sale_count = max(0, sale_count)

    yield_score = min(yield_percent, 15.0) / 15.0 * 40.0
    size_score = min(rental_count + sale_count, 100) / 100.0 * 25.0
    balance_score = 15.0 if rental_count > 0 and sale_count > 0 else 0.0
    confidence_bonus = confidence_score / 100.0 * 20.0
    missing_penalty = -20.0 if rental_count == 0 or sale_count == 0 else 0.0

    total = yield_score + size_score + balance_score + confidence_bonus + missing_penalty
    total = max(0.0, min(100.0, total))
    return int(round(total))


def build_market_key(record: Dict[str, Any]) -> str:
    return record.get("market_id", "")


def build_market_metrics(sales: List[Dict[str, Any]], rentals: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    markets: Dict[str, Dict[str, Any]] = {}

    def ensure_market(record: Dict[str, Any]) -> Dict[str, Any]:
        market_id = build_market_key(record)
        if market_id not in markets:
            markets[market_id] = {
                "market_id": market_id,
                "city": record.get("city", ""),
                "suburb": record.get("suburb", ""),
                "rental_prices": [],
                "sale_prices": [],
                "rental_days_on_market": [],
                "sale_days_on_market": [],
                "property_types": [],
                "bedroom_buckets": [],
                "rental_count": 0,
                "sale_count": 0,
            }
        return markets[market_id]

    for rent in rentals:
        market = ensure_market(rent)
        market["rental_prices"].append(int(rent["price"]))
        market["property_types"].append(normalize_type(rent.get("property_type", "unknown")))
        bedroom_bucket = normalize_bedroom_bucket(rent.get("bedrooms"))
        if bedroom_bucket:
            market["bedroom_buckets"].append(bedroom_bucket)
        market["rental_count"] += 1
        dom = rent.get("days_on_market")
        if dom is not None:
            market["rental_days_on_market"].append(int(dom))

    for sale in sales:
        market = ensure_market(sale)
        market["sale_prices"].append(int(sale["price"]))
        market["property_types"].append(normalize_type(sale.get("property_type", "unknown")))
        bedroom_bucket = normalize_bedroom_bucket(sale.get("bedrooms"))
        if bedroom_bucket:
            market["bedroom_buckets"].append(bedroom_bucket)
        market["sale_count"] += 1
        dom = sale.get("days_on_market")
        if dom is not None:
            market["sale_days_on_market"].append(int(dom))

    output: List[Dict[str, Any]] = []
    for market_id, market in markets.items():
        rental_prices = market["rental_prices"]
        sale_prices = market["sale_prices"]
        rental_days = market["rental_days_on_market"]
        sale_days = market["sale_days_on_market"]
        rental_count = market["rental_count"]
        sale_count = market["sale_count"]

        median_rent = safe_median(rental_prices)
        average_rent = safe_mean(rental_prices)
        minimum_rent = min(rental_prices) if rental_prices else None
        maximum_rent = max(rental_prices) if rental_prices else None

        median_sale_price = safe_median(sale_prices)
        average_sale_price = safe_mean(sale_prices)
        minimum_sale_price = min(sale_prices) if sale_prices else None
        maximum_sale_price = max(sale_prices) if sale_prices else None

        yield_percent = None
        price_to_rent_ratio = None
        affordability_ratio = None
        if median_rent and median_sale_price and median_rent > 0:
            yield_percent = round_optional((median_rent * 12.0 / median_sale_price) * 100.0, 2)
            price_to_rent_ratio = round_optional(median_sale_price / (median_rent * 12.0), 2)
            affordability_ratio = round_optional(median_sale_price / float(median_rent), 2)

        confidence_score = confidence_points(rental_count) + confidence_points(sale_count)
        confidence_score = min(100, confidence_score)

        property_type_counter = Counter(market["property_types"])
        bedroom_counter = Counter(market["bedroom_buckets"])
        output.append(
            {
                "market_id": market_id,
                "city": market["city"],
                "suburb": market["suburb"],
                "rental_count": rental_count,
                "sale_count": sale_count,
                "median_rent": median_rent,
                "average_rent": int(round(average_rent)) if average_rent is not None else None,
                "minimum_rent": minimum_rent,
                "maximum_rent": maximum_rent,
                "median_sale_price": median_sale_price,
                "average_sale_price": int(round(average_sale_price)) if average_sale_price is not None else None,
                "minimum_sale_price": minimum_sale_price,
                "maximum_sale_price": maximum_sale_price,
                "house_count": property_type_counter.get("house", 0),
                "apartment_count": property_type_counter.get("apartment", 0),
                "flat_count": property_type_counter.get("flat", 0),
                "room_count": property_type_counter.get("room", 0),
                "townhouse_count": property_type_counter.get("townhouse", 0),
                "commercial_count": property_type_counter.get("commercial", 0),
                "beds_1_count": bedroom_counter.get("1", 0),
                "beds_2_count": bedroom_counter.get("2", 0),
                "beds_3_count": bedroom_counter.get("3", 0),
                "beds_4_plus_count": bedroom_counter.get("4_plus", 0),
                "median_days_on_market_rent": safe_median(rental_days),
                "average_days_on_market_rent": int(round(safe_mean(rental_days)))
                if safe_mean(rental_days) is not None
                else None,
                "median_days_on_market_sale": safe_median(sale_days),
                "average_days_on_market_sale": int(round(safe_mean(sale_days)))
                if safe_mean(sale_days) is not None
                else None,
                "yield_percent": yield_percent,
                "price_to_rent_ratio": price_to_rent_ratio,
                "affordability_ratio": affordability_ratio,
                "confidence_score": confidence_score,
                "opportunity_score": score_opportunity(
                    yield_percent, rental_count, sale_count, confidence_score
                ),
            }
        )

    return sorted(output, key=lambda item: (item["city"], item["suburb"]))


def save_json(records: List[Dict[str, Any]], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as fh:
        json.dump(records, fh, indent=2, ensure_ascii=False)
    print(f"Saved {len(records)} market records to {path}")


def main() -> None:
    sales = load_json(CLEAN_SALES_PATH)
    rentals = load_json(CLEAN_RENTS_PATH)
    market_metrics = build_market_metrics(sales, rentals)
    save_json(market_metrics, MARKET_METRICS_PATH)


if __name__ == "__main__":
    main()
