from datetime import datetime, timezone
from typing import Any, Dict, Optional


def normalize_property_type(value: Optional[Any]) -> str:
    """Map raw property_type strings to canonical buckets.

    Townhouse/cluster must be checked before house — "townhouse" contains "house".
    """
    text = str(value or "unknown").strip().lower()
    if text == "residential_land":
        return "residential_land"
    if "townhouse" in text or "cluster" in text:
        return "townhouse"
    if "house" in text or text == "home":
        return "house"
    if "cottage" in text:
        return "cottage"
    if "flat" in text:
        return "flat"
    if "apartment" in text:
        return "apartment"
    if "room" in text:
        return "room"
    if "commercial" in text or "shop" in text or "office" in text:
        return "commercial"
    return "unknown"


def _parse_timestamp(value: str) -> datetime:
    text = str(value).strip()
    if text.endswith("Z"):
        text = text[:-1] + "+00:00"
    parsed = datetime.fromisoformat(text)
    if parsed.tzinfo is None:
        return parsed.replace(tzinfo=timezone.utc)
    return parsed


def compute_days_on_market(first_seen_at: str, last_seen_at: str) -> int:
    """Days between first seen and last seen (matches DB generated column)."""
    first = _parse_timestamp(first_seen_at)
    end = _parse_timestamp(last_seen_at)
    return max(0, (end - first).days)


def days_on_market_from_row(row: Dict[str, Any]) -> int:
    stored = row.get("days_on_market")
    if stored is not None:
        return int(stored)
    return compute_days_on_market(row["first_seen_at"], row["last_seen_at"])
