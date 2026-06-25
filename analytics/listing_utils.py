from datetime import datetime, timezone
from typing import Any, Dict


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
