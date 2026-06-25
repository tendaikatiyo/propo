import sqlite3
from pathlib import Path

db = Path(__file__).resolve().parents[1] / "data" / "easishop.db"
conn = sqlite3.connect(db)
conn.row_factory = sqlite3.Row
cur = conn.cursor()

print("=== LISTINGS BREAKDOWN ===")
rows = cur.execute(
    """
    SELECT
        listing_type,
        source,
        is_active,
        COUNT(*) AS cnt
    FROM listings
    GROUP BY listing_type, source, is_active
    ORDER BY listing_type, source, is_active
    """
).fetchall()
for r in rows:
    active = "active" if r["is_active"] else "inactive"
    print(f"  {r['listing_type']:5} | {r['source']:12} | {active:8} | {r['cnt']:,}")

print("\n=== TOP CITIES (active listings) ===")
for r in cur.execute(
    """
    SELECT city, COUNT(*) AS cnt
    FROM listings WHERE is_active = 1
    GROUP BY city ORDER BY cnt DESC LIMIT 10
    """
):
    print(f"  {r['city']}: {r['cnt']:,}")

print("\n=== DATE RANGE ===")
r = cur.execute(
    """
    SELECT
        MIN(first_seen_at) AS first_earliest,
        MAX(first_seen_at) AS first_latest,
        MIN(last_seen_at) AS last_earliest,
        MAX(last_seen_at) AS last_latest
    FROM listings
    """
).fetchone()
for k in r.keys():
    print(f"  {k}: {r[k]}")

print("\n=== DAYS ON MARKET (from view, active) ===")
r = cur.execute(
    """
    SELECT
        MIN(days_on_market) AS min_dom,
        CAST(AVG(days_on_market) AS INTEGER) AS avg_dom,
        MAX(days_on_market) AS max_dom
    FROM listings_with_days_on_market
    WHERE is_active = 1
    """
).fetchone()
print(f"  min: {r['min_dom']} days, avg: {r['avg_dom']} days, max: {r['max_dom']} days")

print("\n=== INGEST RUNS ===")
for r in cur.execute(
    """
    SELECT id, started_at, completed_at, sources_ingested,
           listings_processed, snapshots_added, listings_deactivated
    FROM ingest_runs ORDER BY id DESC LIMIT 5
    """
):
    print(
        f"  run {r['id']}: {r['started_at']} -> {r['completed_at']} | "
        f"processed={r['listings_processed']}, snapshots={r['snapshots_added']}, "
        f"deactivated={r['listings_deactivated']}"
    )

print("\n=== MARKET SNAPSHOTS DAILY ===")
r = cur.execute(
    """
    SELECT COUNT(*) AS total,
           COUNT(DISTINCT snapshot_date) AS dates,
           MIN(snapshot_date) AS min_date,
           MAX(snapshot_date) AS max_date
    FROM market_snapshots_daily
    """
).fetchone()
print(f"  {r['total']:,} rows across {r['dates']} dates ({r['min_date']} to {r['max_date']})")

print("\n=== LISTING SNAPSHOTS ===")
r = cur.execute(
    """
    SELECT COUNT(*) AS total,
           COUNT(DISTINCT listing_url) AS unique_listings,
           MIN(scraped_at) AS earliest,
           MAX(scraped_at) AS latest
    FROM listing_snapshots
    """
).fetchone()
print(f"  {r['total']:,} snapshots for {r['unique_listings']:,} listings")
print(f"  range: {r['earliest']} to {r['latest']}")

conn.close()
