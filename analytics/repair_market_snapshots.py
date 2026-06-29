"""Sanitize and repair ZIG-inflated rows in market_snapshots_daily."""

from __future__ import annotations

from statistics import median
from typing import Any, Dict, List, Optional, Tuple

from analytics.history_db import HistoryDatabase
from analytics.price_utils import sanitize_snapshot_rent_price


def _recompute_suburb_day(
    rows: List[Dict[str, Any]],
) -> Tuple[Optional[int], Optional[int], Optional[int], Optional[int]]:
    sanitized: List[int] = []
    listing_count = 0
    mins: List[int] = []
    maxs: List[int] = []

    for row in rows:
        listing_count += int(row.get("listing_count") or 0)
        clean = sanitize_snapshot_rent_price(
            row.get("median_price"),
            row.get("min_price"),
            row.get("max_price"),
        )
        if clean is not None:
            sanitized.append(clean)
        if row.get("min_price") is not None:
            mins.append(int(row["min_price"]))
        if row.get("max_price") is not None:
            maxs.append(int(row["max_price"]))

    if not sanitized:
        return None, None, None, listing_count or None

    return (
        int(median(sanitized)),
        min(mins) if mins else None,
        max(maxs) if maxs else None,
        listing_count,
    )


def repair_rent_snapshots(db: HistoryDatabase | None = None) -> Dict[str, int]:
    database = db or HistoryDatabase()
    updated_segments = 0
    updated_days = 0

    with database.connect() as conn:
        rent_rows = conn.execute(
            """
            SELECT id, snapshot_date, city, suburb, listing_type, property_type,
                   median_price, min_price, max_price, listing_count
            FROM market_snapshots_daily
            WHERE listing_type = 'rent'
            ORDER BY snapshot_date, city, suburb, property_type
            """
        ).fetchall()

        for row in rent_rows:
            record = dict(row)
            clean = sanitize_snapshot_rent_price(
                record.get("median_price"),
                record.get("min_price"),
                record.get("max_price"),
            )
            if clean == record.get("median_price"):
                continue

            if clean is None:
                conn.execute("DELETE FROM market_snapshots_daily WHERE id = ?", (record["id"],))
                updated_segments += 1
                continue

            conn.execute(
                """
                UPDATE market_snapshots_daily
                SET median_price = ?, min_price = ?, max_price = ?
                WHERE id = ?
                """,
                (
                    clean,
                    min(clean, record.get("min_price") or clean),
                    max(clean, record.get("max_price") or clean),
                    record["id"],
                ),
            )
            updated_segments += 1

        # Recompute suburb-day rows that still have multiple segments with mixed quality
        groups: Dict[Tuple[str, str, str, str], List[Dict[str, Any]]] = {}
        for row in conn.execute(
            """
            SELECT snapshot_date, city, suburb, listing_type, property_type,
                   median_price, min_price, max_price, listing_count
            FROM market_snapshots_daily
            WHERE listing_type = 'rent'
            """
        ).fetchall():
            record = dict(row)
            key = (
                record["snapshot_date"],
                record["city"],
                record["suburb"],
                record["listing_type"],
            )
            groups.setdefault(key, []).append(record)

        for (snapshot_date, city, suburb, listing_type), segment_rows in groups.items():
            med, min_p, max_p, count = _recompute_suburb_day(segment_rows)
            if med is None:
                continue
            # No separate suburb rollup table — segment rows are aggregated at read time.
            # updated_days tracks groups inspected for logging only.
            updated_days += 1

    return {
        "segments_updated": updated_segments,
        "suburb_days_checked": updated_days,
    }


def main() -> None:
    stats = repair_rent_snapshots()
    print(
        "Repaired market_snapshots_daily: "
        f"{stats['segments_updated']} segment rows updated/removed, "
        f"{stats['suburb_days_checked']} suburb-days checked"
    )


if __name__ == "__main__":
    main()
