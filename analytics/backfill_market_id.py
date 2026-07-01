"""Backfill listings.market_id using the same city/suburb normalization as ingest."""

from __future__ import annotations

import argparse
from typing import Dict, Optional

from analytics.clean_data import normalize_city, normalize_suburb
from analytics.history_db import HistoryDatabase
from analytics.listing_utils import build_market_id
from analytics.supabase_db import SupabaseHistoryDatabase


def market_id_for_row(city: Optional[str], suburb: Optional[str]) -> Optional[str]:
    if not city or not suburb:
        return None
    normalized_city = normalize_city(city)
    normalized_suburb = normalize_suburb(suburb)
    if not normalized_city or not normalized_suburb:
        return None
    return build_market_id(normalized_city, normalized_suburb)


def backfill_sqlite(db: HistoryDatabase) -> int:
    updated = 0
    with db.connect() as conn:
        cur = conn.cursor()
        cur.execute(
            """
            SELECT listing_url, city, suburb, market_id
            FROM listings
            WHERE is_active = 1
            """
        )
        rows = cur.fetchall()
        for listing_url, city, suburb, current_market_id in rows:
            market_id = market_id_for_row(city, suburb)
            if not market_id or market_id == current_market_id:
                continue
            cur.execute(
                "UPDATE listings SET market_id = ? WHERE listing_url = ?",
                (market_id, listing_url),
            )
            updated += 1
        conn.commit()
    return updated


def backfill_supabase(db: SupabaseHistoryDatabase) -> int:
    updated = 0
    with db.connect() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT listing_url, city, suburb, market_id
                FROM listings
                WHERE is_active = true
                """
            )
            rows = cur.fetchall()
            for listing_url, city, suburb, current_market_id in rows:
                market_id = market_id_for_row(city, suburb)
                if not market_id or market_id == current_market_id:
                    continue
                cur.execute(
                    """
                    UPDATE listings
                    SET market_id = %s
                    WHERE listing_url = %s
                    """,
                    (market_id, listing_url),
                )
                updated += 1
    return updated


def main() -> None:
    parser = argparse.ArgumentParser(description="Backfill listings.market_id")
    parser.add_argument(
        "--target",
        choices=("sqlite", "supabase", "all"),
        default="all",
        help="Database to update (default: all)",
    )
    args = parser.parse_args()

    stats: Dict[str, int] = {}

    if args.target in ("sqlite", "all"):
        stats["sqlite"] = backfill_sqlite(HistoryDatabase())
        print(f"SQLite: updated {stats['sqlite']} listings")

    if args.target in ("supabase", "all"):
        try:
            stats["supabase"] = backfill_supabase(SupabaseHistoryDatabase())
            print(f"Supabase: updated {stats['supabase']} listings")
        except Exception as exc:
            print(f"Supabase backfill skipped: {exc}")


if __name__ == "__main__":
    main()
