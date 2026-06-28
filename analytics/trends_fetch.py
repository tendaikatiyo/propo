"""Fetch market snapshot trends from local SQLite (CLI + library)."""

from __future__ import annotations

import argparse
import json
import sys
from collections import defaultdict
from typing import Any, Dict, List, Optional, Tuple

from analytics.history_db import HistoryDatabase


def _weighted_median_approx(items: List[Tuple[int, int]]) -> Optional[int]:
    if not items:
        return None
    total = sum(count for _, count in items)
    if total <= 0:
        return None
    weighted = sum(price * count for price, count in items)
    return int(round(weighted / total))


def aggregate_by_date(rows: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    by_date: Dict[str, Dict[str, Any]] = defaultdict(lambda: {"prices": [], "listing_count": 0})

    for row in rows:
        date = row["snapshot_date"]
        by_date[date]["listing_count"] += int(row["listing_count"] or 0)
        if row.get("median_price") is not None and int(row.get("listing_count") or 0) > 0:
            by_date[date]["prices"].append((int(row["median_price"]), int(row["listing_count"])))

    points: List[Dict[str, Any]] = []
    for date in sorted(by_date):
        bucket = by_date[date]
        points.append(
            {
                "date": date,
                "median_price": _weighted_median_approx(bucket["prices"]),
                "listing_count": bucket["listing_count"],
            }
        )
    return points


def _pct_change(first: Optional[int], last: Optional[int]) -> Optional[float]:
    if first is None or last is None or first == 0:
        return None
    return round((last - first) / first * 100, 1)


def build_payload(points: List[Dict[str, Any]]) -> Dict[str, Any]:
    median_points = [p for p in points if p.get("median_price") is not None]
    first_median = median_points[0]["median_price"] if median_points else None
    last_median = median_points[-1]["median_price"] if median_points else None
    first_listings = points[0]["listing_count"] if points else None
    last_listings = points[-1]["listing_count"] if points else None
    return {
        "points": points,
        "pct_change_median": _pct_change(first_median, last_median),
        "pct_change_listings": _pct_change(first_listings, last_listings),
    }


def fetch_market_trends(
    city: str,
    suburb: str,
    listing_type: str,
    start_date: str,
) -> Dict[str, Any]:
    database = HistoryDatabase()
    with database.connect() as conn:
        cursor = conn.execute(
            """
            SELECT snapshot_date, median_price, listing_count
            FROM market_snapshots_daily
            WHERE city = ? AND suburb = ? AND listing_type = ? AND snapshot_date >= ?
            ORDER BY snapshot_date ASC
            """,
            (city, suburb, listing_type, start_date),
        )
        rows = [dict(row) for row in cursor.fetchall()]

    return build_payload(aggregate_by_date(rows))


def fetch_city_movers(
    city: str,
    listing_type: str,
    start_date: str,
    market_ids: Dict[str, str],
    limit: int = 3,
) -> Dict[str, Any]:
    database = HistoryDatabase()
    with database.connect() as conn:
        cursor = conn.execute(
            """
            SELECT snapshot_date, suburb, median_price, listing_count
            FROM market_snapshots_daily
            WHERE city = ? AND listing_type = ? AND snapshot_date >= ?
            ORDER BY suburb ASC, snapshot_date ASC
            """,
            (city, listing_type, start_date),
        )
        rows = [dict(row) for row in cursor.fetchall()]

    by_suburb: Dict[str, List[Dict[str, Any]]] = defaultdict(list)
    for row in rows:
        by_suburb[row["suburb"]].append(row)

    movers: List[Dict[str, Any]] = []
    for suburb, suburb_rows in by_suburb.items():
        points = aggregate_by_date(suburb_rows)
        median_points = [p for p in points if p.get("median_price") is not None]
        if len(median_points) < 2:
            continue
        change = _pct_change(median_points[0]["median_price"], median_points[-1]["median_price"])
        if change is None:
            continue
        market_id = market_ids.get(suburb)
        if not market_id:
            continue
        movers.append(
            {
                "market_id": market_id,
                "suburb": suburb,
                "pct_change_median": change,
                "median_price": median_points[-1]["median_price"],
            }
        )

    risers = sorted([m for m in movers if m["pct_change_median"] > 0], key=lambda m: m["pct_change_median"], reverse=True)[:limit]
    fallers = sorted([m for m in movers if m["pct_change_median"] < 0], key=lambda m: m["pct_change_median"])[:limit]
    return {"risers": risers, "fallers": fallers}


def main() -> None:
    parser = argparse.ArgumentParser(description="Fetch market trends from local SQLite")
    parser.add_argument("command", choices=["market", "city-movers"])
    parser.add_argument("--city", required=True)
    parser.add_argument("--suburb", default="")
    parser.add_argument("--listing-type", default="rent")
    parser.add_argument("--start-date", required=True)
    parser.add_argument("--market-ids-json", default="{}")
    parser.add_argument("--limit", type=int, default=3)
    args = parser.parse_args()

    if args.command == "market":
        if not args.suburb:
            print("suburb is required for market command", file=sys.stderr)
            sys.exit(1)
        payload = fetch_market_trends(args.city, args.suburb, args.listing_type, args.start_date)
    else:
        market_ids = json.loads(args.market_ids_json)
        payload = fetch_city_movers(
            args.city,
            args.listing_type,
            args.start_date,
            market_ids,
            args.limit,
        )

    print(json.dumps(payload))


if __name__ == "__main__":
    main()
