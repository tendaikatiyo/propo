import json
from collections import defaultdict
from pathlib import Path
from typing import Any, Dict, List, Optional

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
MARKET_METRICS_PATH = DATA_DIR / "market_metrics.json"
CITIES_PATH = DATA_DIR / "cities.json"
RANKINGS_PATH = DATA_DIR / "rankings.json"


def load_json(path: Path) -> List[Dict[str, Any]]:
    with path.open("r", encoding="utf-8") as fh:
        return json.load(fh)


def top_n(items: List[Dict[str, Any]], key: str, reverse: bool = True, n: int = 10) -> List[Dict[str, Any]]:
    filtered = [item for item in items if item.get(key) is not None]
    return sorted(filtered, key=lambda item: item[key], reverse=reverse)[:n]


def market_summary(market: Dict[str, Any], metric: str) -> Dict[str, Any]:
    return {
        "market_id": market["market_id"],
        "city": market["city"],
        "suburb": market["suburb"],
        metric: market.get(metric),
    }


def build_rankings(markets: List[Dict[str, Any]], cities: List[Dict[str, Any]]) -> Dict[str, Any]:
    national = {
        "top_yield_markets": [market_summary(m, "yield_percent") for m in top_n(markets, "yield_percent")],
        "top_opportunity_markets": [market_summary(m, "opportunity_score") for m in top_n(markets, "opportunity_score")],
        "most_expensive_markets": [market_summary(m, "median_sale_price") for m in top_n(markets, "median_sale_price")],
        "cheapest_markets": [market_summary(m, "median_sale_price") for m in top_n(markets, "median_sale_price", reverse=False)],
        "longest_on_market_rentals": [
            market_summary(m, "average_days_on_market_rent")
            for m in top_n(markets, "average_days_on_market_rent")
        ],
        "longest_on_market_sales": [
            market_summary(m, "average_days_on_market_sale")
            for m in top_n(markets, "average_days_on_market_sale")
        ],
    }

    per_city: Dict[str, Dict[str, List[Dict[str, Any]]]] = {}
    markets_by_city: Dict[str, List[Dict[str, Any]]] = defaultdict(list)
    for market in markets:
        markets_by_city[market["city"]].append(market)

    for city, city_markets in sorted(markets_by_city.items()):
        per_city[city] = {
            "highest_yield_suburbs": [market_summary(m, "yield_percent") for m in top_n(city_markets, "yield_percent")],
            "highest_rent_suburbs": [market_summary(m, "median_rent") for m in top_n(city_markets, "median_rent")],
            "highest_sale_price_suburbs": [market_summary(m, "median_sale_price") for m in top_n(city_markets, "median_sale_price")],
            "best_opportunity_suburbs": [market_summary(m, "opportunity_score") for m in top_n(city_markets, "opportunity_score")],
            "longest_on_market_rental_suburbs": [
                market_summary(m, "average_days_on_market_rent")
                for m in top_n(city_markets, "average_days_on_market_rent")
            ],
            "longest_on_market_sale_suburbs": [
                market_summary(m, "average_days_on_market_sale")
                for m in top_n(city_markets, "average_days_on_market_sale")
            ],
        }

    return {
        "national": national,
        "per_city": per_city,
    }


def save_json(data: Dict[str, Any], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as fh:
        json.dump(data, fh, indent=2, ensure_ascii=False)
    print(f"Saved rankings to {path}")


def main() -> None:
    markets = load_json(MARKET_METRICS_PATH)
    cities = load_json(CITIES_PATH)
    rankings = build_rankings(markets, cities)
    save_json(rankings, RANKINGS_PATH)


if __name__ == "__main__":
    main()
