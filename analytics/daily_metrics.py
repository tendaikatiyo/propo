from collections import defaultdict
from statistics import mean, median
from typing import Any, Dict, Iterable, List, Optional

from analytics.history_db import HistoryDatabase, utc_date_iso
from analytics.listing_utils import days_on_market_from_row, normalize_property_type
from analytics.price_utils import sanitize_listing_rent_price


def safe_median(numbers: Iterable[int]) -> Optional[int]:
    values = [int(x) for x in numbers if x is not None]
    if not values:
        return None
    return int(median(values))


def safe_mean(numbers: Iterable[int]) -> Optional[int]:
    values = [int(x) for x in numbers if x is not None]
    if not values:
        return None
    return int(round(mean(values)))


def build_daily_market_rows(listings: List[Dict[str, Any]], snapshot_date: str) -> List[Dict[str, Any]]:
    groups: Dict[tuple, List[int]] = defaultdict(list)
    dom_groups: Dict[tuple, List[int]] = defaultdict(list)
    meta: Dict[tuple, Dict[str, str]] = {}

    for row in listings:
        property_type = normalize_property_type(row.get("property_type"))
        key = (
            row.get("city", ""),
            row.get("suburb", ""),
            row.get("listing_type", ""),
            property_type,
        )
        if not all(key):
            continue

        if row.get("listing_type") == "rent":
            price = sanitize_listing_rent_price(row)
            if price is None:
                continue
        else:
            price = int(row["price"])

        groups[key].append(price)
        dom_groups[key].append(days_on_market_from_row(row))
        meta[key] = {
            "city": key[0],
            "suburb": key[1],
            "listing_type": key[2],
            "property_type": key[3],
        }

    output: List[Dict[str, Any]] = []
    for key, prices in sorted(groups.items()):
        if not prices:
            continue
        info = meta[key]
        days_on_market = dom_groups[key]
        output.append(
            {
                "snapshot_date": snapshot_date,
                "city": info["city"],
                "suburb": info["suburb"],
                "listing_type": info["listing_type"],
                "property_type": info["property_type"],
                "listing_count": len(prices),
                "median_price": safe_median(prices),
                "avg_price": safe_mean(prices),
                "min_price": min(prices),
                "max_price": max(prices),
                "median_days_on_market": safe_median(days_on_market),
                "avg_days_on_market": safe_mean(days_on_market),
            }
        )
    return output


def build_daily_market_snapshots(
    db: HistoryDatabase | None = None,
    snapshot_date: Optional[str] = None,
) -> int:
    database = db or HistoryDatabase()
    database.init_schema()
    snapshot_date = snapshot_date or utc_date_iso()

    active_listings = database.fetch_active_listings()
    rows = build_daily_market_rows(active_listings, snapshot_date)

    with database.connect() as conn:
        for row in rows:
            database.insert_market_snapshot(conn, row)

    print(f"Saved {len(rows)} daily market snapshots for {snapshot_date}")
    return len(rows)


def main() -> None:
    build_daily_market_snapshots()


if __name__ == "__main__":
    main()
