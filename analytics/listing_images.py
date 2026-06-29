"""Resolve listing thumbnail URLs vs agency branding logos."""

from __future__ import annotations

import re
from typing import Optional

_AGENCY_LOGO_MARKERS = (
    "/agency-logos/",
    "/thumb/",
    "logo",
    "private-lister-logo",
)


def is_agency_branding_url(url: Optional[str]) -> bool:
    if not url:
        return False
    lowered = str(url).lower()
    if "classifieds.co.zw" in lowered and "/medium/" in lowered:
        return False
    if "propertybook.co.zw" in lowered and "/agency-logos/" not in lowered:
        return False
    return any(marker in lowered for marker in _AGENCY_LOGO_MARKERS)


def resolve_listing_image_url(
    image_url: Optional[str],
    agency_logo: Optional[str] = None,
) -> Optional[str]:
    if image_url and not is_agency_branding_url(image_url):
        return image_url
    if agency_logo and not is_agency_branding_url(agency_logo):
        return agency_logo
    return None


def extract_classifieds_carousel_image(raw_images: str) -> str:
    if not raw_images:
        return ""

    for match in re.finditer(r'src=\\"([^"\\]+)\\"', raw_images):
        src = match.group(1).replace("\\/", "/")
        if "/medium/" in src.lower() or "/large/" in src.lower():
            return src

    for match in re.finditer(r'src="([^"]+)"', raw_images):
        src = match.group(1)
        if "/medium/" in src.lower() or "/large/" in src.lower():
            return src

    return ""
