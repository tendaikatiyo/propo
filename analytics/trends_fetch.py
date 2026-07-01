"""Fetch market snapshot trends from local SQLite (CLI + library)."""

from __future__ import annotations

import argparse
import json
import sys
from collections import defaultdict
from statistics import median
from typing import Any, Dict, List, Optional

from analytics.history_db import HistoryDatabase
from analytics.price_utils import sanitize_snapshot_rent_price

MAX_MOVER_PCT = 200
MIN_MOVER_SNAPSHOTS = 4
MIN_MOVER_LISTINGS = 5
MOVER_WINDOW = 3


def _sanitize_row(row: Dict[str, Any], listing_type: str) -> Optional[int]:
    if listing_type != "rent":
        return row.get("median_price")
    return sanitize_snapshot_rent_price(
        row.get("median_price"),
        row.get("min_price"),
        row.get("max_price"),
    )


def aggregate_by_date(rows: List[Dict[str, Any]], listing_type: str) -> List[Dict[str, Any]]:
    by_date: Dict[str, Dict[str, Any]] = defaultdict(
        lambda: {
            "weighted_sum": 0,
            "total_weight": 0,
            "listing_count": 0,
            "dom_values": [],
        }
    )

    for row in rows:
        date = row["snapshot_date"]
        by_date[date]["listing_count"] += int(row.get("listing_count") or 0)
        clean = _sanitize_row(row, listing_type)
        weight = int(row.get("listing_count") or 0)
        if clean is not None and weight > 0:
            by_date[date]["weighted_sum"] += clean * weight
            by_date[date]["total_weight"] += weight
        dom = row.get("median_days_on_market")
        if dom is not None and int(dom) > 0:
            by_date[date]["dom_values"].append(int(dom))

    points: List[Dict[str, Any]] = []
    for date in sorted(by_date):
        bucket = by_date[date]
        total_weight = bucket["total_weight"]
        dom_values = bucket["dom_values"]
        points.append(
            {
                "date": date,
                "median_price": int(round(bucket["weighted_sum"] / total_weight))
                if total_weight
                else None,
                "listing_count": bucket["listing_count"],
                "median_days_on_market": int(median(dom_values)) if dom_values else None,
            }
        )
    return points


def _pct_change(first: Optional[int], last: Optional[int]) -> Optional[float]:
    if first is None or last is None or first == 0:
        return None
    return round((last - first) / first * 100, 1)


def _window_stats(
    median_points: List[Dict[str, Any]], from_start: bool
) -> tuple[Optional[int], int]:
    slice_points = median_points[:MOVER_WINDOW] if from_start else median_points[-MOVER_WINDOW:]
    prices = [p["median_price"] for p in slice_points if p.get("median_price") is not None]
    listing_count = sum(int(p.get("listing_count") or 0) for p in slice_points)
    return (int(median(prices)) if prices else None, listing_count)


def _window_listing_stats(
    points: List[Dict[str, Any]], from_start: bool
) -> int:
    slice_points = points[:MOVER_WINDOW] if from_start else points[-MOVER_WINDOW:]
    counts = [int(p.get("listing_count") or 0) for p in slice_points]
    return int(round(sum(counts) / len(counts))) if counts else 0


def _window_dom_stats(
    points: List[Dict[str, Any]], from_start: bool
) -> tuple[Optional[int], int]:
    slice_points = points[:MOVER_WINDOW] if from_start else points[-MOVER_WINDOW:]
    dom_values = [
        int(p["median_days_on_market"])
        for p in slice_points
        if p.get("median_days_on_market") is not None
    ]
    listing_count = sum(int(p.get("listing_count") or 0) for p in slice_points)
    return (int(median(dom_values)) if dom_values else None, listing_count)


def _is_plausible_mover(
    change: float, median_points: List[Dict[str, Any]], listing_type: str
) -> bool:
    if len(median_points) < MIN_MOVER_SNAPSHOTS:
        return False
    if abs(change) > MAX_MOVER_PCT:
        return False
    if listing_type == "rent":
        last = median_points[-1].get("median_price")
        if last is not None and last > 6000:
            return False
    return True


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


def _series_key(city: str, suburb: str) -> str:
    return f"{city}|{suburb}"


def _compute_price_movers(
    series_by_key: Dict[str, List[Dict[str, Any]]],
    market_lookup: Dict[str, Dict[str, str]],
    listing_type: str,
) -> List[Dict[str, Any]]:
    movers: List[Dict[str, Any]] = []
    for key, points in series_by_key.items():
        lookup = market_lookup.get(key)
        if not lookup:
            continue
        median_points = [p for p in points if p.get("median_price") is not None]
        if len(median_points) < MIN_MOVER_SNAPSHOTS:
            continue
        start_price, start_count = _window_stats(median_points, True)
        end_price, end_count = _window_stats(median_points, False)
        if start_count < MIN_MOVER_LISTINGS or end_count < MIN_MOVER_LISTINGS:
            continue
        change = _pct_change(start_price, end_price)
        if change is None or not _is_plausible_mover(change, median_points, listing_type):
            continue
        movers.append(
            {
                "market_id": lookup["market_id"],
                "city": lookup["city"],
                "suburb": lookup["suburb"],
                "pct_change_median": change,
                "median_price": end_price,
            }
        )
    return movers


def _compute_supply_movers(
    series_by_key: Dict[str, List[Dict[str, Any]]],
    market_lookup: Dict[str, Dict[str, str]],
) -> List[Dict[str, Any]]:
    movers: List[Dict[str, Any]] = []
    for key, points in series_by_key.items():
        lookup = market_lookup.get(key)
        if not lookup or len(points) < MIN_MOVER_SNAPSHOTS:
            continue
        start_count = _window_listing_stats(points, True)
        end_count = _window_listing_stats(points, False)
        if start_count < MIN_MOVER_LISTINGS or end_count < MIN_MOVER_LISTINGS:
            continue
        change = _pct_change(start_count, end_count)
        if change is None or abs(change) > MAX_MOVER_PCT:
            continue
        movers.append(
            {
                "market_id": lookup["market_id"],
                "city": lookup["city"],
                "suburb": lookup["suburb"],
                "pct_change_median": change,
                "median_price": None,
                "listing_count": end_count,
            }
        )
    return movers


def _compute_dom_movers(
    series_by_key: Dict[str, List[Dict[str, Any]]],
    market_lookup: Dict[str, Dict[str, str]],
) -> List[Dict[str, Any]]:
    movers: List[Dict[str, Any]] = []
    for key, points in series_by_key.items():
        lookup = market_lookup.get(key)
        if not lookup:
            continue
        dom_points = [p for p in points if p.get("median_days_on_market") is not None]
        if len(dom_points) < MIN_MOVER_SNAPSHOTS:
            continue
        start_dom, start_count = _window_dom_stats(dom_points, True)
        end_dom, end_count = _window_dom_stats(dom_points, False)
        if (
            start_dom is None
            or end_dom is None
            or start_count < MIN_MOVER_LISTINGS
            or end_count < MIN_MOVER_LISTINGS
        ):
            continue
        change = _pct_change(start_dom, end_dom)
        if change is None or abs(change) > MAX_MOVER_PCT:
            continue
        movers.append(
            {
                "market_id": lookup["market_id"],
                "city": lookup["city"],
                "suburb": lookup["suburb"],
                "pct_change_median": change,
                "median_price": None,
                "median_days_on_market": end_dom,
            }
        )
    return movers


def _top_movers(movers: List[Dict[str, Any]], direction: str, limit: int) -> List[Dict[str, Any]]:
    if direction == "up":
        filtered = [m for m in movers if m["pct_change_median"] > 0]
        return sorted(filtered, key=lambda m: m["pct_change_median"], reverse=True)[:limit]
    filtered = [m for m in movers if m["pct_change_median"] < 0]
    return sorted(filtered, key=lambda m: m["pct_change_median"])[:limit]


def _top_by_magnitude(movers: List[Dict[str, Any]], limit: int) -> List[Dict[str, Any]]:
    return sorted(movers, key=lambda m: abs(m["pct_change_median"]), reverse=True)[:limit]


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
            SELECT snapshot_date, median_price, listing_count, min_price, max_price
            FROM market_snapshots_daily
            WHERE city = ? AND suburb = ? AND listing_type = ? AND snapshot_date >= ?
            ORDER BY snapshot_date ASC
            """,
            (city, suburb, listing_type, start_date),
        )
        rows = [dict(row) for row in cursor.fetchall()]

    return build_payload(aggregate_by_date(rows, listing_type))


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
            SELECT snapshot_date, suburb, median_price, listing_count, min_price, max_price
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

    market_lookup = {
        _series_key(city, suburb): {
            "market_id": market_id,
            "city": city,
            "suburb": suburb,
        }
        for suburb, market_id in market_ids.items()
        if market_id
    }
    series_by_key = {
        _series_key(city, suburb): aggregate_by_date(suburb_rows, listing_type)
        for suburb, suburb_rows in by_suburb.items()
    }
    movers = _compute_price_movers(series_by_key, market_lookup, listing_type)
    return {
        "risers": _top_movers(movers, "up", limit),
        "fallers": _top_movers(movers, "down", limit),
    }


def fetch_national_movers(
    start_date: str,
    market_lookup: Dict[str, Dict[str, str]],
    limit: int = 10,
    trend_range: str = "90d",
) -> Dict[str, Any]:
    database = HistoryDatabase()
    with database.connect() as conn:
        cursor = conn.execute(
            """
            SELECT snapshot_date, city, suburb, listing_type, median_price, listing_count,
                   min_price, max_price, median_days_on_market
            FROM market_snapshots_daily
            WHERE snapshot_date >= ?
            ORDER BY city ASC, suburb ASC, snapshot_date ASC
            """,
            (start_date,),
        )
        rows = [dict(row) for row in cursor.fetchall()]

    rent_grouped: Dict[str, List[Dict[str, Any]]] = defaultdict(list)
    sale_grouped: Dict[str, List[Dict[str, Any]]] = defaultdict(list)
    for row in rows:
        city = row.get("city") or ""
        suburb = row.get("suburb") or ""
        if not city or not suburb:
            continue
        key = _series_key(city, suburb)
        if row.get("listing_type") == "rent":
            rent_grouped[key].append(row)
        elif row.get("listing_type") == "sale":
            sale_grouped[key].append(row)

    rent_series = {
        key: aggregate_by_date(suburb_rows, "rent") for key, suburb_rows in rent_grouped.items()
    }
    sale_series = {
        key: aggregate_by_date(suburb_rows, "sale") for key, suburb_rows in sale_grouped.items()
    }

    supply_series: Dict[str, List[Dict[str, Any]]] = {}
    for key, points in rent_series.items():
        supply_series[key] = [dict(point) for point in points]
    for key, points in sale_series.items():
        merged = supply_series.get(key, [])
        by_date = {point["date"]: dict(point) for point in merged}
        for point in points:
            if point["date"] in by_date:
                by_date[point["date"]]["listing_count"] += point["listing_count"]
            else:
                by_date[point["date"]] = dict(point)
        supply_series[key] = [by_date[date] for date in sorted(by_date)]

    rent_movers = _compute_price_movers(rent_series, market_lookup, "rent")
    sale_movers = _compute_price_movers(sale_series, market_lookup, "sale")
    supply_movers = _compute_supply_movers(supply_series, market_lookup)
    dom_movers = _compute_dom_movers(rent_series, market_lookup)

    return {
        "range": trend_range,
        "rent_risers": _top_movers(rent_movers, "up", limit),
        "rent_fallers": _top_movers(rent_movers, "down", limit),
        "sale_risers": _top_movers(sale_movers, "up", limit),
        "sale_fallers": _top_movers(sale_movers, "down", limit),
        "supply_surge": _top_movers(supply_movers, "up", limit),
        "dom_shift": _top_by_magnitude(dom_movers, limit),
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Fetch market trends from local SQLite")
    parser.add_argument("command", choices=["market", "city-movers", "national-movers"])
    parser.add_argument("--city", default="")
    parser.add_argument("--suburb", default="")
    parser.add_argument("--listing-type", default="rent")
    parser.add_argument("--start-date", required=True)
    parser.add_argument("--market-ids-json", default="{}")
    parser.add_argument("--market-lookup-json", default="{}")
    parser.add_argument("--limit", type=int, default=3)
    parser.add_argument("--range", default="90d")
    args = parser.parse_args()

    if args.command == "market":
        if not args.city or not args.suburb:
            print("city and suburb are required for market command", file=sys.stderr)
            sys.exit(1)
        payload = fetch_market_trends(args.city, args.suburb, args.listing_type, args.start_date)
    elif args.command == "city-movers":
        if not args.city:
            print("city is required for city-movers command", file=sys.stderr)
            sys.exit(1)
        market_ids = json.loads(args.market_ids_json)
        payload = fetch_city_movers(
            args.city,
            args.listing_type,
            args.start_date,
            market_ids,
            args.limit,
        )
    else:
        market_lookup = json.loads(args.market_lookup_json)
        payload = fetch_national_movers(
            args.start_date,
            market_lookup,
            args.limit,
            args.range,
        )

    print(json.dumps(payload))


if __name__ == "__main__":
    main()
