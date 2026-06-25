import json
from collections import defaultdict
from pathlib import Path
from statistics import mean, median
from typing import Any, Dict, List, Optional

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
CLEAN_SALES_PATH = DATA_DIR / "clean_sales.json"
CLEAN_RENTS_PATH = DATA_DIR / "clean_rentals.json"
MARKET_METRICS_PATH = DATA_DIR / "market_metrics.json"
CITIES_PATH = DATA_DIR / "cities.json"


def load_json(path: Path) -> List[Dict[str, Any]]:
    with path.open("r", encoding="utf-8") as fh:
        return json.load(fh)


def safe_median(numbers: List[float]) -> Optional[float]:
    if not numbers:
        return None
    return float(median(numbers))


def safe_mean(numbers: List[float]) -> Optional[float]:
    if not numbers:
        return None
    return float(mean(numbers))


def save_json(records: List[Dict[str, Any]], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as fh:
        json.dump(records, fh, indent=2, ensure_ascii=False)
    print(f"Saved {len(records)} cities to {path}")


def build_city_metrics(
    sales: List[Dict[str, Any]],
    rentals: List[Dict[str, Any]],
    markets: List[Dict[str, Any]],
) -> List[Dict[str, Any]]:
    sales_by_city: Dict[str, List[int]] = defaultdict(list)
    rentals_by_city: Dict[str, List[int]] = defaultdict(list)
    markets_by_city: Dict[str, List[Dict[str, Any]]] = defaultdict(list)

    for sale in sales:
        sales_by_city[sale["city"]].append(int(sale["price"]))

    for rent in rentals:
        rentals_by_city[rent["city"]].append(int(rent["price"]))

    for market in markets:
        city_name = market["city"]
        markets_by_city[city_name].append(market)

    city_metrics: List[Dict[str, Any]] = []
    for city, market_list in sorted(markets_by_city.items()):
        suburb_count = len({market["suburb"] for market in market_list})
        rental_count = sum(market.get("rental_count", 0) for market in market_list)
        sale_count = sum(market.get("sale_count", 0) for market in market_list)

        median_rent = safe_median(rentals_by_city.get(city, []))
        median_sale_price = safe_median(sales_by_city.get(city, []))
        average_yield = safe_mean(
            [market["yield_percent"] for market in market_list if market.get("yield_percent") is not None]
        )
        average_opportunity_score = safe_mean(
            [market["opportunity_score"] for market in market_list if market.get("opportunity_score") is not None]
        )
        average_days_on_market_rent = safe_mean(
            [
                market["average_days_on_market_rent"]
                for market in market_list
                if market.get("average_days_on_market_rent") is not None
            ]
        )
        average_days_on_market_sale = safe_mean(
            [
                market["average_days_on_market_sale"]
                for market in market_list
                if market.get("average_days_on_market_sale") is not None
            ]
        )

        city_metrics.append(
            {
                "city": city,
                "suburb_count": suburb_count,
                "rental_count": rental_count,
                "sale_count": sale_count,
                "median_rent": int(median_rent) if median_rent is not None else None,
                "median_sale_price": int(median_sale_price) if median_sale_price is not None else None,
                "average_yield": round(average_yield, 2) if average_yield is not None else None,
                "average_opportunity_score": round(average_opportunity_score, 2)
                if average_opportunity_score is not None
                else None,
                "average_days_on_market_rent": int(round(average_days_on_market_rent))
                if average_days_on_market_rent is not None
                else None,
                "average_days_on_market_sale": int(round(average_days_on_market_sale))
                if average_days_on_market_sale is not None
                else None,
            }
        )

    return city_metrics


def main() -> None:
    sales = load_json(CLEAN_SALES_PATH)
    rentals = load_json(CLEAN_RENTS_PATH)
    markets = load_json(MARKET_METRICS_PATH)
    city_metrics = build_city_metrics(sales, rentals, markets)
    save_json(city_metrics, CITIES_PATH)


if __name__ == "__main__":
    main()
