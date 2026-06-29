import sqlite3
from contextlib import contextmanager
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, Iterator, List, Optional

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
DEFAULT_DB_PATH = DATA_DIR / "easishop.db"

SCHEMA_SQL = """
CREATE TABLE IF NOT EXISTS listings (
    listing_url TEXT PRIMARY KEY,
    source TEXT NOT NULL,
    listing_type TEXT NOT NULL,
    property_type TEXT,
    market_id TEXT,
    title TEXT,
    price INTEGER,
    price_raw TEXT,
    city TEXT,
    suburb TEXT,
    location TEXT,
    description TEXT,
    bedrooms INTEGER,
    bathrooms INTEGER,
    lounges INTEGER,
    land_size REAL,
    land_size_unit TEXT,
    agency_name TEXT,
    agency_logo TEXT,
    image_url TEXT,
    first_seen_at TEXT NOT NULL,
    last_seen_at TEXT NOT NULL,
    is_active INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS listing_snapshots (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    listing_url TEXT NOT NULL,
    scraped_at TEXT NOT NULL,
    price INTEGER,
    price_raw TEXT,
    property_type TEXT,
    bedrooms INTEGER,
    bathrooms INTEGER,
    lounges INTEGER,
    land_size REAL,
    land_size_unit TEXT,
    is_active INTEGER NOT NULL DEFAULT 1,
    FOREIGN KEY (listing_url) REFERENCES listings(listing_url),
    UNIQUE (listing_url, scraped_at)
);

CREATE TABLE IF NOT EXISTS market_snapshots_daily (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    snapshot_date TEXT NOT NULL,
    city TEXT NOT NULL,
    suburb TEXT NOT NULL,
    listing_type TEXT NOT NULL,
    property_type TEXT NOT NULL,
    listing_count INTEGER NOT NULL,
    median_price INTEGER,
    avg_price INTEGER,
    min_price INTEGER,
    max_price INTEGER,
    median_days_on_market INTEGER,
    avg_days_on_market INTEGER,
    UNIQUE (snapshot_date, city, suburb, listing_type, property_type)
);

CREATE TABLE IF NOT EXISTS ingest_runs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    started_at TEXT NOT NULL,
    completed_at TEXT,
    sources_ingested TEXT,
    listings_processed INTEGER DEFAULT 0,
    snapshots_added INTEGER DEFAULT 0,
    listings_deactivated INTEGER DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_listings_source_active
    ON listings(source, is_active);
CREATE INDEX IF NOT EXISTS idx_listings_market
    ON listings(city, suburb, listing_type, property_type);
CREATE INDEX IF NOT EXISTS idx_snapshots_scraped_at
    ON listing_snapshots(scraped_at);
CREATE INDEX IF NOT EXISTS idx_snapshots_listing_url
    ON listing_snapshots(listing_url);
CREATE INDEX IF NOT EXISTS idx_market_snapshots_date
    ON market_snapshots_daily(snapshot_date);
"""


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def utc_date_iso() -> str:
    return datetime.now(timezone.utc).date().isoformat()


class HistoryDatabase:
    def __init__(self, db_path: Path = DEFAULT_DB_PATH) -> None:
        self.db_path = db_path
        self.db_path.parent.mkdir(parents=True, exist_ok=True)

    @contextmanager
    def connect(self) -> Iterator[sqlite3.Connection]:
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row
        conn.execute("PRAGMA foreign_keys = ON")
        try:
            yield conn
            conn.commit()
        except Exception:
            conn.rollback()
            raise
        finally:
            conn.close()

    def init_schema(self) -> None:
        with self.connect() as conn:
            conn.executescript(SCHEMA_SQL)
            self._migrate_schema(conn)

    def _migrate_schema(self, conn: sqlite3.Connection) -> None:
        listing_columns = {
            row["name"] for row in conn.execute("PRAGMA table_info(listings)").fetchall()
        }
        if "image_url" not in listing_columns:
            conn.execute("ALTER TABLE listings ADD COLUMN image_url TEXT")

        conn.execute("DROP VIEW IF EXISTS listings_with_days_on_market")
        conn.execute(
            """
            CREATE VIEW listings_with_days_on_market AS
            SELECT
                listing_url, source, listing_type, property_type, market_id,
                title, price, price_raw, city, suburb, location, description,
                bedrooms, bathrooms, lounges, land_size, land_size_unit,
                agency_name, agency_logo, image_url, first_seen_at, last_seen_at, is_active,
                CAST(
                    MAX(0, CAST(julianday(last_seen_at) - julianday(first_seen_at) AS INTEGER))
                AS INTEGER) AS days_on_market
            FROM listings
            """
        )

        columns = {
            row["name"]
            for row in conn.execute("PRAGMA table_info(market_snapshots_daily)").fetchall()
        }
        if "median_days_on_market" not in columns:
            conn.execute(
                "ALTER TABLE market_snapshots_daily ADD COLUMN median_days_on_market INTEGER"
            )
        if "avg_days_on_market" not in columns:
            conn.execute(
                "ALTER TABLE market_snapshots_daily ADD COLUMN avg_days_on_market INTEGER"
            )

    def start_ingest_run(self, sources: List[str]) -> int:
        with self.connect() as conn:
            cursor = conn.execute(
                """
                INSERT INTO ingest_runs (started_at, sources_ingested)
                VALUES (?, ?)
                """,
                (utc_now_iso(), ",".join(sorted(sources))),
            )
            return int(cursor.lastrowid)

    def finish_ingest_run(
        self,
        run_id: int,
        listings_processed: int,
        snapshots_added: int,
        listings_deactivated: int,
    ) -> None:
        with self.connect() as conn:
            conn.execute(
                """
                UPDATE ingest_runs
                SET completed_at = ?,
                    listings_processed = ?,
                    snapshots_added = ?,
                    listings_deactivated = ?
                WHERE id = ?
                """,
                (
                    utc_now_iso(),
                    listings_processed,
                    snapshots_added,
                    listings_deactivated,
                    run_id,
                ),
            )

    def upsert_listing(self, conn: sqlite3.Connection, record: Dict[str, Any], seen_at: str) -> None:
        conn.execute(
            """
            INSERT INTO listings (
                listing_url, source, listing_type, property_type, market_id,
                title, price, price_raw, city, suburb, location, description,
                bedrooms, bathrooms, lounges, land_size, land_size_unit,
                agency_name, agency_logo, image_url, first_seen_at, last_seen_at, is_active
            ) VALUES (
                ?, ?, ?, ?, ?,
                ?, ?, ?, ?, ?, ?, ?,
                ?, ?, ?, ?, ?,
                ?, ?, ?, ?, ?, 1
            )
            ON CONFLICT(listing_url) DO UPDATE SET
                source = excluded.source,
                listing_type = excluded.listing_type,
                property_type = excluded.property_type,
                market_id = excluded.market_id,
                title = excluded.title,
                price = excluded.price,
                price_raw = excluded.price_raw,
                city = excluded.city,
                suburb = excluded.suburb,
                location = excluded.location,
                description = excluded.description,
                bedrooms = excluded.bedrooms,
                bathrooms = excluded.bathrooms,
                lounges = excluded.lounges,
                land_size = excluded.land_size,
                land_size_unit = excluded.land_size_unit,
                agency_name = excluded.agency_name,
                agency_logo = excluded.agency_logo,
                image_url = excluded.image_url,
                last_seen_at = excluded.last_seen_at,
                is_active = 1
            """,
            (
                record["listing_url"],
                record["source"],
                record["listing_type"],
                record["property_type"],
                record["market_id"],
                record["title"],
                record["price"],
                record["price_raw"],
                record["city"],
                record["suburb"],
                record["location"],
                record["description"],
                record["bedrooms"],
                record["bathrooms"],
                record["lounges"],
                record["land_size"],
                record["land_size_unit"],
                record["agency_name"],
                record["agency_logo"],
                record.get("image_url") or "",
                seen_at,
                seen_at,
            ),
        )

    def insert_snapshot(
        self,
        conn: sqlite3.Connection,
        record: Dict[str, Any],
        scraped_at: str,
    ) -> bool:
        cursor = conn.execute(
            """
            INSERT OR IGNORE INTO listing_snapshots (
                listing_url, scraped_at, price, price_raw, property_type,
                bedrooms, bathrooms, lounges, land_size, land_size_unit, is_active
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
            """,
            (
                record["listing_url"],
                scraped_at,
                record["price"],
                record["price_raw"],
                record["property_type"],
                record["bedrooms"],
                record["bathrooms"],
                record["lounges"],
                record["land_size"],
                record["land_size_unit"],
            ),
        )
        return cursor.rowcount > 0

    def deactivate_stale_listings(
        self,
        conn: sqlite3.Connection,
        sources: List[str],
        run_started_at: str,
    ) -> int:
        placeholders = ",".join("?" for _ in sources)
        cursor = conn.execute(
            f"""
            UPDATE listings
            SET is_active = 0
            WHERE source IN ({placeholders})
              AND last_seen_at < ?
              AND is_active = 1
            """,
            (*sources, run_started_at),
        )
        return cursor.rowcount

    def insert_market_snapshot(
        self,
        conn: sqlite3.Connection,
        row: Dict[str, Any],
    ) -> None:
        conn.execute(
            """
            INSERT INTO market_snapshots_daily (
                snapshot_date, city, suburb, listing_type, property_type,
                listing_count, median_price, avg_price, min_price, max_price,
                median_days_on_market, avg_days_on_market
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(snapshot_date, city, suburb, listing_type, property_type)
            DO UPDATE SET
                listing_count = excluded.listing_count,
                median_price = excluded.median_price,
                avg_price = excluded.avg_price,
                min_price = excluded.min_price,
                max_price = excluded.max_price,
                median_days_on_market = excluded.median_days_on_market,
                avg_days_on_market = excluded.avg_days_on_market
            """,
            (
                row["snapshot_date"],
                row["city"],
                row["suburb"],
                row["listing_type"],
                row["property_type"],
                row["listing_count"],
                row["median_price"],
                row["avg_price"],
                row["min_price"],
                row["max_price"],
                row.get("median_days_on_market"),
                row.get("avg_days_on_market"),
            ),
        )

    def count_snapshots(self) -> int:
        with self.connect() as conn:
            row = conn.execute("SELECT COUNT(*) AS c FROM listing_snapshots").fetchone()
            return int(row["c"])

    def count_listings(self, active_only: bool = False) -> int:
        with self.connect() as conn:
            if active_only:
                row = conn.execute(
                    "SELECT COUNT(*) AS c FROM listings WHERE is_active = 1"
                ).fetchone()
            else:
                row = conn.execute("SELECT COUNT(*) AS c FROM listings").fetchone()
            return int(row["c"])

    def fetch_active_listings(
        self,
        listing_type: Optional[str] = None,
        exclude_property_types: Optional[List[str]] = None,
    ) -> List[Dict[str, Any]]:
        clauses = ["is_active = 1"]
        params: List[Any] = []

        if listing_type:
            clauses.append("listing_type = ?")
            params.append(listing_type)

        if exclude_property_types:
            placeholders = ",".join("?" for _ in exclude_property_types)
            clauses.append(f"property_type NOT IN ({placeholders})")
            params.extend(exclude_property_types)

        query = f"""
            SELECT *
            FROM listings_with_days_on_market
            WHERE {' AND '.join(clauses)}
            ORDER BY city, suburb, price
        """

        with self.connect() as conn:
            rows = conn.execute(query, params).fetchall()
            return [dict(row) for row in rows]

    def fetch_snapshots_for_date(self, snapshot_date: str) -> List[Dict[str, Any]]:
        with self.connect() as conn:
            rows = conn.execute(
                """
                SELECT s.*, l.city, l.suburb, l.listing_type, l.source
                FROM listing_snapshots s
                JOIN listings l ON l.listing_url = s.listing_url
                WHERE substr(s.scraped_at, 1, 10) = ?
                """,
                (snapshot_date,),
            ).fetchall()
            return [dict(row) for row in rows]
