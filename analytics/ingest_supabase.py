from typing import Dict, Optional

from analytics.clean_data import normalize_listing_record
from analytics.data_sources import SOURCE_FILES
from analytics.daily_metrics import build_daily_market_rows
from analytics.history_db import utc_date_iso
from analytics.ingest import load_source_records
from analytics.supabase_db import SupabaseHistoryDatabase, utc_now_iso


def ingest_all_supabase(db: Optional[SupabaseHistoryDatabase] = None) -> Dict[str, int]:
    database = db or SupabaseHistoryDatabase()

    run_started_at = utc_now_iso()
    sources_to_ingest = sorted({source for _, source, _ in SOURCE_FILES})
    run_id = database.start_ingest_run(sources_to_ingest)

    listings_processed = 0
    snapshots_added = 0

    with database.connect() as conn:
        for path, source, listing_type in SOURCE_FILES:
            raw_records = load_source_records(path)
            if not raw_records:
                continue

            print(
                f"Supabase ingest: {len(raw_records)} records from "
                f"{path.name} ({source}/{listing_type})..."
            )
            for raw in raw_records:
                normalized = normalize_listing_record(raw, source, listing_type)
                if not normalized:
                    continue

                database.upsert_listing(conn, normalized, run_started_at)
                if database.insert_snapshot(conn, normalized, run_started_at):
                    snapshots_added += 1
                listings_processed += 1

        deactivated = database.deactivate_stale_listings(
            conn, sources_to_ingest, run_started_at
        )

    database.finish_ingest_run(run_id, listings_processed, snapshots_added, deactivated)

    snapshot_date = utc_date_iso()
    active_listings = database.fetch_active_listings()
    daily_rows = build_daily_market_rows(active_listings, snapshot_date)
    with database.connect() as conn:
        for row in daily_rows:
            database.insert_market_snapshot(conn, row)

    stats = {
        "listings_processed": listings_processed,
        "snapshots_added": snapshots_added,
        "listings_deactivated": deactivated,
        "active_listings": database.count_listings(active_only=True),
        "total_snapshots": database.count_snapshots(),
        "daily_market_rows": len(daily_rows),
    }

    print(
        "Supabase ingest complete: "
        f"{stats['listings_processed']} processed, "
        f"{stats['snapshots_added']} snapshots added, "
        f"{stats['listings_deactivated']} deactivated, "
        f"{stats['active_listings']} active listings, "
        f"{stats['total_snapshots']} total snapshots, "
        f"{stats['daily_market_rows']} daily market rows"
    )
    return stats


def main() -> None:
    ingest_all_supabase()


if __name__ == "__main__":
    main()
