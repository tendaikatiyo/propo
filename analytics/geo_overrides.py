"""Suburb → city corrections when listing portals mislabel locations."""

from __future__ import annotations

from typing import Dict

# Keys are lower-case suburb names after title-casing normalization.
SUBURB_CITY_OVERRIDES: Dict[str, str] = {
    "zimre park": "Ruwa",
}


def resolve_city_for_suburb(suburb: str, city: str) -> str:
    """Return canonical city for a suburb when portals assign the wrong municipality."""
    key = str(suburb or "").strip().lower()
    if not key:
        return city
    return SUBURB_CITY_OVERRIDES.get(key, city)
