from contextlib import contextmanager
from datetime import datetime, timezone
from typing import Any, Dict, Iterator, List, Optional

import psycopg2
import psycopg2.extras

from analytics.supabase_config import get_db_url


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def utc_date_iso() -> str:
    return datetime.now(timezone.utc).date().isoformat()


LISTING_UPSERT_SQL = """
INSERT INTO listings (
    listing_url, source, listing_type, property_type, market_id,
    title, price, price_raw, city, suburb, location, description,
    bedrooms, bathrooms, lounges, land_size, land_size_unit,
    agency_name, agency_logo, first_seen_at, last_seen_at, is_active
) VALUES (
    %(listing_url)s, %(source)s, %(listing_type)s, %(property_type)s, %(market_id)s,
    %(title)s, %(price)s, %(price_raw)s, %(city)s, %(suburb)s, %(location)s, %(description)s,
    %(bedrooms)s, %(bathrooms)s, %(lounges)s, %(land_size)s, %(land_size_unit)s,
    %(agency_name)s, %(agency_logo)s, %(first_seen_at)s::timestamptz, %(last_seen_at)s::timestamptz, true
)
ON CONFLICT (listing_url) DO UPDATE SET
    source = EXCLUDED.source,
    listing_type = EXCLUDED.listing_type,
    property_type = EXCLUDED.property_type,
    market_id = EXCLUDED.market_id,
    title = EXCLUDED.title,
    price = EXCLUDED.price,
    price_raw = EXCLUDED.price_raw,
    city = EXCLUDED.city,
    suburb = EXCLUDED.suburb,
    location = EXCLUDED.location,
    description = EXCLUDED.description,
    bedrooms = EXCLUDED.bedrooms,
    bathrooms = EXCLUDED.bathrooms,
    lounges = EXCLUDED.lounges,
    land_size = EXCLUDED.land_size,
    land_size_unit = EXCLUDED.land_size_unit,
    agency_name = EXCLUDED.agency_name,
    agency_logo = EXCLUDED.agency_logo,
    last_seen_at = EXCLUDED.last_seen_at,
    is_active = true
"""

SNAPSHOT_INSERT_SQL = """
INSERT INTO listing_snapshots (
    listing_url, scraped_at, price, price_raw, property_type,
    bedrooms, bathrooms, lounges, land_size, land_size_unit, is_active
) VALUES (
    %(listing_url)s, %(scraped_at)s::timestamptz, %(price)s, %(price_raw)s, %(property_type)s,
    %(bedrooms)s, %(bathrooms)s, %(lounges)s, %(land_size)s, %(land_size_unit)s, true
)
ON CONFLICT (listing_url, scraped_at) DO NOTHING
"""

MARKET_SNAPSHOT_UPSERT_SQL = """
INSERT INTO market_snapshots_daily (
    snapshot_date, city, suburb, listing_type, property_type,
    listing_count, median_price, avg_price, min_price, max_price,
    median_days_on_market, avg_days_on_market
) VALUES (
    %(snapshot_date)s::date, %(city)s, %(suburb)s, %(listing_type)s, %(property_type)s,
    %(listing_count)s, %(median_price)s, %(avg_price)s, %(min_price)s, %(max_price)s,
    %(median_days_on_market)s, %(avg_days_on_market)s
)
ON CONFLICT (snapshot_date, city, suburb, listing_type, property_type)
DO UPDATE SET
    listing_count = EXCLUDED.listing_count,
    median_price = EXCLUDED.median_price,
    avg_price = EXCLUDED.avg_price,
    min_price = EXCLUDED.min_price,
    max_price = EXCLUDED.max_price,
    median_days_on_market = EXCLUDED.median_days_on_market,
    avg_days_on_market = EXCLUDED.avg_days_on_market
"""


class SupabaseHistoryDatabase:
    def __init__(self, db_url: Optional[str] = None) -> None:
        self.db_url = db_url or get_db_url()

    @contextmanager
    def connect(self) -> Iterator[psycopg2.extensions.connection]:
        conn = psycopg2.connect(self.db_url)
        conn.autocommit = False
        # Supabase defaults to a short statement_timeout; bulk ingest needs longer.
        with conn.cursor() as cur:
            cur.execute("SET statement_timeout = '0'")
        try:
            yield conn
            conn.commit()
        except Exception:
            conn.rollback()
            raise
        finally:
            conn.close()

    def init_schema(self) -> None:
        pass

    def start_ingest_run(self, sources: List[str]) -> int:
        with self.connect() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO ingest_runs (started_at, sources_ingested)
                    VALUES (%s::timestamptz, %s)
                    RETURNING id
                    """,
                    (utc_now_iso(), ",".join(sorted(sources))),
                )
                row = cur.fetchone()
                return int(row[0])

    def finish_ingest_run(
        self,
        run_id: int,
        listings_processed: int,
        snapshots_added: int,
        listings_deactivated: int,
    ) -> None:
        with self.connect() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    UPDATE ingest_runs
                    SET completed_at = %s::timestamptz,
                        listings_processed = %s,
                        snapshots_added = %s,
                        listings_deactivated = %s
                    WHERE id = %s
                    """,
                    (
                        utc_now_iso(),
                        listings_processed,
                        snapshots_added,
                        listings_deactivated,
                        run_id,
                    ),
                )

    def upsert_listing(
        self,
        conn: psycopg2.extensions.connection,
        record: Dict[str, Any],
        seen_at: str,
    ) -> None:
        payload = {
            **record,
            "first_seen_at": seen_at,
            "last_seen_at": seen_at,
        }
        with conn.cursor() as cur:
            cur.execute(LISTING_UPSERT_SQL, payload)

    def insert_snapshot(
        self,
        conn: psycopg2.extensions.connection,
        record: Dict[str, Any],
        scraped_at: str,
    ) -> bool:
        payload = {
            "listing_url": record["listing_url"],
            "scraped_at": scraped_at,
            "price": record.get("price"),
            "price_raw": record.get("price_raw"),
            "property_type": record.get("property_type"),
            "bedrooms": record.get("bedrooms"),
            "bathrooms": record.get("bathrooms"),
            "lounges": record.get("lounges"),
            "land_size": record.get("land_size"),
            "land_size_unit": record.get("land_size_unit"),
        }
        with conn.cursor() as cur:
            cur.execute(SNAPSHOT_INSERT_SQL, payload)
            return cur.rowcount > 0

    def deactivate_stale_listings(
        self,
        conn: psycopg2.extensions.connection,
        sources: List[str],
        run_started_at: str,
    ) -> int:
        with conn.cursor() as cur:
            cur.execute(
                """
                UPDATE listings
                SET is_active = false
                WHERE source = ANY(%s)
                  AND last_seen_at < %s::timestamptz
                  AND is_active = true
                """,
                (sources, run_started_at),
            )
            return cur.rowcount

    def insert_market_snapshot(
        self,
        conn: psycopg2.extensions.connection,
        row: Dict[str, Any],
    ) -> None:
        with conn.cursor() as cur:
            cur.execute(MARKET_SNAPSHOT_UPSERT_SQL, row)

    def count_snapshots(self) -> int:
        with self.connect() as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT COUNT(*) FROM listing_snapshots")
                return int(cur.fetchone()[0])

    def count_listings(self, active_only: bool = False) -> int:
        with self.connect() as conn:
            with conn.cursor() as cur:
                if active_only:
                    cur.execute("SELECT COUNT(*) FROM listings WHERE is_active = true")
                else:
                    cur.execute("SELECT COUNT(*) FROM listings")
                return int(cur.fetchone()[0])

    def fetch_active_listings(
        self,
        listing_type: Optional[str] = None,
        exclude_property_types: Optional[List[str]] = None,
    ) -> List[Dict[str, Any]]:
        clauses = ["is_active = true"]
        params: List[Any] = []

        if listing_type:
            clauses.append("listing_type = %s")
            params.append(listing_type)

        if exclude_property_types:
            clauses.append("property_type <> ALL(%s)")
            params.append(exclude_property_types)

        query = f"""
            SELECT *
            FROM listings
            WHERE {' AND '.join(clauses)}
            ORDER BY city, suburb, price
        """

        with self.connect() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
                cur.execute(query, params)
                return [dict(row) for row in cur.fetchall()]
