"""Rent/sale price parsing and reconciliation helpers."""

from __future__ import annotations

import re
from typing import Optional

MAX_MONTHLY_RENT_USD = 20_000
CLASSIFIEDS_ZIG_USD_RATE = 27.5
ZIG_SCRAPE_MIN = 8_000
ZIG_CORRECTED_RENT_MIN = 150
ZIG_CORRECTED_RENT_MAX = 6_000

_MONTHLY_USD_PATTERNS = (
    r"USD\s*([\d,]+(?:\.\d+)?)\s*(?:per month|/pm|p/m)",
    r"\$\s*([\d,]+(?:\.\d+)?)\s*(?:per month|/pm|p/m)",
    r"(?<![\d.])([\d,]+(?:\.\d+)?)\s+per month",
)


def parse_price_amount(value: object) -> Optional[int]:
    if value is None:
        return None
    if isinstance(value, (int, float)):
        return int(value)
    text = str(value).replace(",", "")
    match = re.search(r"([0-9]+(?:\.\d+)?)", text)
    if not match:
        return None
    try:
        return int(float(match.group(1)))
    except ValueError:
        return None


def extract_monthly_usd_from_text(text: str) -> Optional[int]:
    if not text:
        return None
    for pattern in _MONTHLY_USD_PATTERNS:
        match = re.search(pattern, text, flags=re.IGNORECASE)
        if not match:
            continue
        price = parse_price_amount(match.group(1))
        if price and price > 0:
            return price
    return None


def looks_like_zig_mislabeled_as_usd(scraped_price: int, reference_price: int) -> bool:
    if reference_price <= 0 or scraped_price <= reference_price:
        return False
    ratio = scraped_price / reference_price
    return 15 <= ratio <= 50


def infer_usd_from_zig_scrape(scraped_price: int) -> Optional[int]:
    """When classifieds stores ZIG in a USD field, recover USD if amount is an exact ZIG multiple."""
    if scraped_price < ZIG_SCRAPE_MIN:
        return None

    usd = round(scraped_price / CLASSIFIEDS_ZIG_USD_RATE)
    if usd <= 0:
        return None

    if abs(usd * CLASSIFIEDS_ZIG_USD_RATE - scraped_price) > 1.0:
        return None

    if ZIG_CORRECTED_RENT_MIN <= usd <= ZIG_CORRECTED_RENT_MAX:
        return usd
    return None


def reconcile_rent_price(
    scraped_price: Optional[int],
    description: str,
    *,
    max_rent: int = MAX_MONTHLY_RENT_USD,
) -> Optional[int]:
    """Prefer USD monthly rent; correct obvious ZIG/description mismatches."""
    desc_price = extract_monthly_usd_from_text(description)

    if scraped_price is None:
        return desc_price if desc_price and desc_price <= max_rent else None

    if desc_price and looks_like_zig_mislabeled_as_usd(scraped_price, desc_price):
        return desc_price

    if scraped_price > max_rent:
        if desc_price and desc_price <= max_rent:
            return desc_price
        return None

    return scraped_price


def reconcile_classifieds_rent_price(
    scraped_price: Optional[int],
    description: str,
    *,
    max_rent: int = MAX_MONTHLY_RENT_USD,
) -> Optional[int]:
    """Classifieds-specific rent reconciliation (ZIG in USD fields is common)."""
    desc_price = extract_monthly_usd_from_text(description)

    if scraped_price is None:
        return desc_price if desc_price and desc_price <= max_rent else None

    if desc_price and looks_like_zig_mislabeled_as_usd(scraped_price, desc_price):
        return desc_price

    if scraped_price <= max_rent:
        zig_usd = infer_usd_from_zig_scrape(scraped_price)
        if zig_usd is not None and zig_usd != scraped_price:
            return zig_usd
        if not desc_price or scraped_price <= desc_price * 2:
            return scraped_price

    zig_usd = infer_usd_from_zig_scrape(scraped_price)
    if zig_usd is not None:
        return zig_usd

    if desc_price and desc_price <= max_rent:
        return desc_price

    return None
