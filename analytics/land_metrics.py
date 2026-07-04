import json
from collections import defaultdict
from pathlib import Path
from statistics import mean, median
from typing import Any, Dict, Iterable, List, Optional

from analytics.land_utils import valid_price_per_sqm_for_listing
from analytics.market_metrics import confidence_points, safe_median

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
CLEAN_LAND_PATH = DATA_DIR / "clean_land.json"
LAND_METRICS_PATH = DATA_DIR / "land_metrics.json"


def load_json(path: Path) -> List[Dict[str, Any]]:
    with path.open("r", encoding="utf-8") as fh:
        return json.load(fh)


def safe_mean_float(numbers: Iterable[float]) -> Optional[float]:
    values = [float(x) for x in numbers if x is not None]
    if not values:
        return None
    return float(mean(values))


def round_price_per_sqm(value: Optional[float]) -> Optional[float]:
    if value is None:
        return None
    return round(value, 2)


def build_land_metrics(land_listings: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    markets: Dict[str, Dict[str, Any]] = defaultdict(
        lambda: {
            "land_count": 0,
            "price_per_sqm_values": [],
            "days_on_market": [],
            "city": "",
            "suburb": "",
        }
    )

    for record in land_listings:
        market_id = record.get("market_id")
        if not market_id:
            continue

        market = markets[market_id]
        market["city"] = record.get("city", "")
        market["suburb"] = record.get("suburb", "")
        market["land_count"] += 1

        _, pps = valid_price_per_sqm_for_listing(record)
        if pps is not None:
            market["price_per_sqm_values"].append(pps)

        dom = record.get("days_on_market")
        if dom is not None:
            try:
                market["days_on_market"].append(int(dom))
            except (TypeError, ValueError):
                pass

    output: List[Dict[str, Any]] = []
    for market_id, market in sorted(markets.items(), key=lambda item: (item[1]["city"], item[1]["suburb"])):
        pps_values = market["price_per_sqm_values"]
        dom_values = market["days_on_market"]
        land_count = market["land_count"]
        priced_land_count = len(pps_values)

        median_pps = round_price_per_sqm(float(median(pps_values))) if pps_values else None
        average_pps = round_price_per_sqm(safe_mean_float(pps_values))
        minimum_pps = round_price_per_sqm(min(pps_values)) if pps_values else None
        maximum_pps = round_price_per_sqm(max(pps_values)) if pps_values else None

        median_dom = safe_median(dom_values)
        avg_dom_float = safe_mean_float(dom_values)
        average_dom = int(round(avg_dom_float)) if avg_dom_float is not None else None

        # Mirror rent+buy (rental_count + sale_count): total stands + priced stands.
        confidence_score = min(
            100, confidence_points(land_count) + confidence_points(priced_land_count)
        )

        output.append(
            {
                "market_id": market_id,
                "city": market["city"],
                "suburb": market["suburb"],
                "land_count": land_count,
                "priced_land_count": priced_land_count,
                "median_price_per_sqm": median_pps,
                "average_price_per_sqm": average_pps,
                "minimum_price_per_sqm": minimum_pps,
                "maximum_price_per_sqm": maximum_pps,
                "median_days_on_market_land": median_dom,
                "average_days_on_market_land": average_dom,
                "confidence_score": confidence_score,
            }
        )

    return output


def save_json(records: List[Dict[str, Any]], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as fh:
        json.dump(records, fh, indent=2, ensure_ascii=False)
    print(f"Saved {len(records)} land market records to {path}")


def main() -> None:
    if not CLEAN_LAND_PATH.exists():
        raise FileNotFoundError(
            f"Missing {CLEAN_LAND_PATH}. Run pipeline ingest / export_current_json first."
        )

    land = load_json(CLEAN_LAND_PATH)
    metrics = build_land_metrics(land)
    save_json(metrics, LAND_METRICS_PATH)

    priced = sum(row["priced_land_count"] for row in metrics)
    print(
        f"Land metrics: {len(metrics)} suburbs, "
        f"{sum(row['land_count'] for row in metrics)} listings, "
        f"{priced} with valid $/sqm"
    )


if __name__ == "__main__":
    main()
