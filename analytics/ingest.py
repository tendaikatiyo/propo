import json
from pathlib import Path
from typing import Dict, List, Set, Tuple

from analytics.clean_data import normalize_listing_record, save_json
from analytics.data_sources import SOURCE_FILES
from analytics.history_db import HistoryDatabase, utc_now_iso
from analytics.listing_utils import days_on_market_from_row

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
CLEAN_SALES_PATH = DATA_DIR / "clean_sales.json"
CLEAN_RENTS_PATH = DATA_DIR / "clean_rentals.json"
CLEAN_LAND_PATH = DATA_DIR / "clean_land.json"


def load_source_records(path: Path) -> List[Dict]:
    if not path.exists():
        print(f"Skipping missing source file: {path}")
        return []
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def ingest_all(db: HistoryDatabase | None = None) -> Dict[str, int]:
    database = db or HistoryDatabase()
    database.init_schema()

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

            print(f"Ingesting {len(raw_records)} records from {path.name} ({source}/{listing_type})...")
            for raw in raw_records:
                normalized = normalize_listing_record(raw, source, listing_type)
                if not normalized:
                    continue

                database.upsert_listing(conn, normalized, run_started_at)
                if database.insert_snapshot(conn, normalized, run_started_at):
                    snapshots_added += 1
                listings_processed += 1

        deactivated = database.deactivate_stale_listings(conn, sources_to_ingest, run_started_at)

    database.finish_ingest_run(run_id, listings_processed, snapshots_added, deactivated)

    stats = {
        "listings_processed": listings_processed,
        "snapshots_added": snapshots_added,
        "listings_deactivated": deactivated,
        "active_listings": database.count_listings(active_only=True),
        "total_snapshots": database.count_snapshots(),
    }

    print(
        "Ingest complete: "
        f"{stats['listings_processed']} processed, "
        f"{stats['snapshots_added']} snapshots added, "
        f"{stats['listings_deactivated']} deactivated, "
        f"{stats['active_listings']} active listings, "
        f"{stats['total_snapshots']} total snapshots"
    )
    return stats


def export_current_json(db: HistoryDatabase | None = None) -> Tuple[int, int, int]:
    database = db or HistoryDatabase()

    rentals = []
    sales = []
    land = []

    for row in database.fetch_active_listings(listing_type="rent"):
        rentals.append(_to_clean_shape(row))

    for row in database.fetch_active_listings(
        listing_type="sale",
        exclude_property_types=["residential_land"],
    ):
        sales.append(_to_clean_shape(row))

    for row in database.fetch_active_listings(listing_type="sale"):
        if row.get("property_type") == "residential_land":
            land.append(_to_land_shape(row))

    save_json(rentals, CLEAN_RENTS_PATH)
    save_json(sales, CLEAN_SALES_PATH)
    save_json(land, CLEAN_LAND_PATH)

    print(
        f"Exported current active listings: "
        f"{len(rentals)} rentals, {len(sales)} sales, {len(land)} land"
    )
    return len(rentals), len(sales), len(land)


def _to_clean_shape(row: Dict) -> Dict:
    return {
        "market_id": row.get("market_id"),
        "city": row.get("city"),
        "suburb": row.get("suburb"),
        "title": row.get("title"),
        "listing_url": row.get("listing_url"),
        "price_raw": row.get("price_raw"),
        "price": row.get("price"),
        "location": row.get("location"),
        "property_type": row.get("property_type"),
        "description": row.get("description"),
        "bedrooms": row.get("bedrooms") or 0,
        "bathrooms": row.get("bathrooms") or 0,
        "lounges": row.get("lounges") or 0,
        "source": row.get("source"),
        "listing_type": row.get("listing_type"),
        "days_on_market": days_on_market_from_row(row),
    }


def _to_land_shape(row: Dict) -> Dict:
    return {
        "market_id": row.get("market_id"),
        "city": row.get("city"),
        "suburb": row.get("suburb"),
        "title": row.get("title"),
        "listing_url": row.get("listing_url"),
        "price_raw": row.get("price_raw"),
        "price": row.get("price"),
        "location": row.get("location"),
        "property_type": row.get("property_type"),
        "description": row.get("description"),
        "land_size": row.get("land_size"),
        "land_size_unit": row.get("land_size_unit"),
        "agency_name": row.get("agency_name"),
        "agency_logo": row.get("agency_logo"),
        "source": row.get("source"),
        "listing_type": row.get("listing_type"),
    }


def main() -> None:
    ingest_all()
    export_current_json()


if __name__ == "__main__":
    main()
