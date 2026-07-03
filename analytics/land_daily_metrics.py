"""Daily land suburb snapshots (median $/sqm) for trend charts."""

from collections import defaultdict
from statistics import mean, median
from typing import Any, Dict, List, Optional

from analytics.history_db import HistoryDatabase, utc_date_iso
from analytics.land_utils import enrich_land_listing, is_sane_price_per_sqm
from analytics.listing_utils import days_on_market_from_row, normalize_property_type


def safe_median(numbers: List[float]) -> Optional[int]:
    values = [float(x) for x in numbers if x is not None]
    if not values:
        return None
    return int(round(median(values)))


def safe_mean(numbers: List[float]) -> Optional[int]:
    values = [float(x) for x in numbers if x is not None]
    if not values:
        return None
    return int(round(mean(values)))


def build_land_daily_rows(
    listings: List[Dict[str, Any]], snapshot_date: str
) -> List[Dict[str, Any]]:
    pps_groups: Dict[tuple, List[float]] = defaultdict(list)
    dom_groups: Dict[tuple, List[int]] = defaultdict(list)
    total_counts: Dict[tuple, int] = defaultdict(int)
    meta: Dict[tuple, Dict[str, str]] = {}

    for row in listings:
        if normalize_property_type(row.get("property_type")) != "residential_land":
            continue
        if row.get("listing_type") != "sale":
            continue

        city = row.get("city", "")
        suburb = row.get("suburb", "")
        if not city or not suburb:
            continue

        key = (city, suburb)
        total_counts[key] += 1
        meta[key] = {"city": city, "suburb": suburb}

        enriched = enrich_land_listing(row)
        pps = enriched.get("price_per_sqm")
        if pps is not None and is_sane_price_per_sqm(pps):
            pps_groups[key].append(float(pps))
            dom_groups[key].append(days_on_market_from_row(row))

    output: List[Dict[str, Any]] = []
    for key in sorted(meta):
        info = meta[key]
        pps_values = pps_groups.get(key, [])
        dom_values = dom_groups.get(key, [])
        output.append(
            {
                "snapshot_date": snapshot_date,
                "city": info["city"],
                "suburb": info["suburb"],
                "land_count": total_counts[key],
                "priced_land_count": len(pps_values),
                "median_price_per_sqm": safe_median(pps_values),
                "avg_price_per_sqm": safe_mean(pps_values),
                "min_price_per_sqm": int(round(min(pps_values))) if pps_values else None,
                "max_price_per_sqm": int(round(max(pps_values))) if pps_values else None,
                "median_days_on_market": safe_median(dom_values),
                "avg_days_on_market": safe_mean(dom_values),
            }
        )
    return output


def build_land_daily_snapshots(
    db: Optional[HistoryDatabase] = None,
    snapshot_date: Optional[str] = None,
) -> int:
    database = db or HistoryDatabase()
    database.init_schema()
    snapshot_date = snapshot_date or utc_date_iso()

    active_listings = database.fetch_active_listings(listing_type="sale")
    rows = build_land_daily_rows(active_listings, snapshot_date)

    with database.connect() as conn:
        for row in rows:
            database.insert_land_snapshot(conn, row)

    print(f"Saved {len(rows)} daily land snapshots for {snapshot_date}")
    return len(rows)


def main() -> None:
    build_land_daily_snapshots()


if __name__ == "__main__":
    main()
