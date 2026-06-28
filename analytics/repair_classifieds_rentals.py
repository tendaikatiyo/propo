"""Repair mis-scraped ZIG rent prices in classifieds JSON exports."""

from __future__ import annotations

import json
from pathlib import Path

from analytics.price_utils import reconcile_classifieds_rent_price

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
CLASSIFIEDS_RENTALS = DATA_DIR / "classifieds_rentals.json"


def repair_records(records: list[dict]) -> tuple[list[dict], int, int, int]:
    repaired: list[dict] = []
    fixed = 0
    dropped = 0
    unchanged = 0

    for record in records:
        original = record.get("price")
        description = str(record.get("description") or "")
        corrected = reconcile_classifieds_rent_price(original, description)

        if corrected is None:
            dropped += 1
            continue

        if corrected != original:
            record = {**record, "price": corrected, "price_raw": f"USD {corrected:,}/pm"}
            fixed += 1
        else:
            unchanged += 1

        repaired.append(record)

    return repaired, fixed, dropped, unchanged


def main() -> None:
    if not CLASSIFIEDS_RENTALS.exists():
        raise SystemExit(f"Missing {CLASSIFIEDS_RENTALS}")

    records = json.loads(CLASSIFIEDS_RENTALS.read_text(encoding="utf-8"))
    repaired, fixed, dropped, unchanged = repair_records(records)

    CLASSIFIEDS_RENTALS.write_text(
        json.dumps(repaired, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )

    print(
        f"Repaired {CLASSIFIEDS_RENTALS.name}: "
        f"{fixed} prices corrected, {dropped} removed, {unchanged} unchanged, "
        f"{len(repaired)} total kept (was {len(records)})"
    )


if __name__ == "__main__":
    main()
