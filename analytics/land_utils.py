"""Land size normalization and price-per-sqm helpers for land metrics."""

from typing import Any, Dict, Optional, Tuple

ACRE_TO_SQM = 4046.8564224
HA_TO_SQM = 10_000.0

MIN_LAND_SIZE_SQM = 50.0
MAX_LAND_SIZE_SQM = 50_000.0
MIN_PRICE_PER_SQM = 1.0
MAX_PRICE_PER_SQM = 500.0


def normalize_land_unit(unit: Any) -> str:
    if unit is None:
        return "sqm"
    text = str(unit).strip().lower()
    if not text:
        return "sqm"
    return text


def normalize_land_size_sqm(size: Any, unit: Any = None) -> Optional[float]:
    """Convert land_size + unit to square metres. Unknown units return None."""
    try:
        value = float(size)
    except (TypeError, ValueError):
        return None
    if value <= 0:
        return None

    unit_norm = normalize_land_unit(unit)
    if unit_norm in ("sqm", "m2", "m²", "square metre", "square metres", "square meter", "square meters"):
        return value
    if unit_norm in ("acre", "acres"):
        return value * ACRE_TO_SQM
    if unit_norm in ("ha", "hectare", "hectares"):
        return value * HA_TO_SQM
    return None


def price_per_sqm(price: Any, land_size_sqm: Optional[float]) -> Optional[float]:
    if land_size_sqm is None or land_size_sqm <= 0:
        return None
    try:
        amount = float(price)
    except (TypeError, ValueError):
        return None
    if amount <= 0:
        return None
    return amount / land_size_sqm


def is_sane_land_size_sqm(land_size_sqm: Optional[float]) -> bool:
    if land_size_sqm is None:
        return False
    return MIN_LAND_SIZE_SQM <= land_size_sqm <= MAX_LAND_SIZE_SQM


def is_sane_price_per_sqm(value: Optional[float]) -> bool:
    if value is None:
        return False
    return MIN_PRICE_PER_SQM <= value <= MAX_PRICE_PER_SQM


def enrich_land_listing(record: Dict[str, Any]) -> Dict[str, Any]:
    """Attach normalized sqm and price_per_sqm fields to a clean_land row."""
    land_size_sqm = normalize_land_size_sqm(record.get("land_size"), record.get("land_size_unit"))
    pps = price_per_sqm(record.get("price"), land_size_sqm)
    valid_pps = (
        is_sane_land_size_sqm(land_size_sqm)
        and pps is not None
        and is_sane_price_per_sqm(pps)
    )
    return {
        **record,
        "land_size_sqm": round(land_size_sqm, 2) if land_size_sqm is not None else None,
        "price_per_sqm": round(pps, 2) if pps is not None else None,
        "has_valid_price_per_sqm": valid_pps,
    }


def valid_price_per_sqm_for_listing(record: Dict[str, Any]) -> Tuple[Optional[float], Optional[float]]:
    """Return (land_size_sqm, price_per_sqm) when the listing passes sanity checks."""
    enriched = enrich_land_listing(record)
    if not enriched["has_valid_price_per_sqm"]:
        return None, None
    return enriched["land_size_sqm"], enriched["price_per_sqm"]
