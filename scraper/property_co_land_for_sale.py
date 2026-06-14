import json
import re
import time
from pathlib import Path
from typing import Dict, List, Optional, Tuple

import requests
from bs4 import BeautifulSoup
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

from property_co_common import normalize_city

BASE_URL = "https://www.property.co.zw/residential-land-stands-for-sale"
SITE_ORIGIN = "https://www.property.co.zw"
OUTPUT_PATH = Path(__file__).resolve().parents[1] / "data" / "property_co_land_for_sale.json"
USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/124.0.0.0 Safari/537.36"
)
REQUEST_DELAY = 2.0
MAX_PAGES = 100
SAVE_EVERY_PAGE = True


def build_session() -> requests.Session:
    session = requests.Session()
    session.headers.update({
        "User-Agent": USER_AGENT,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
    })

    retry_strategy = Retry(
        total=5,
        backoff_factor=1,
        status_forcelist=[429, 500, 502, 503, 504],
        allowed_methods=frozenset(["GET"]),
        raise_on_status=False,
    )
    adapter = HTTPAdapter(max_retries=retry_strategy)
    session.mount("https://", adapter)
    session.mount("http://", adapter)
    return session


def fetch_page(session: requests.Session, page: int) -> str:
    url = BASE_URL if page <= 1 else f"{BASE_URL}?page={page}"
    response = session.get(url, timeout=15)
    response.raise_for_status()
    return response.text


def parse_price(raw_price: Optional[str]) -> Optional[int]:
    if not raw_price:
        return None

    match = re.search(r"([0-9]+(?:[.,][0-9]+)?)", str(raw_price).replace(",", ""))
    if not match:
        return None

    try:
        return int(float(match.group(1)))
    except ValueError:
        return None


def parse_float(raw_value: Optional[str]) -> Optional[float]:
    if raw_value is None:
        return None

    numeric = re.sub(r"[^0-9.,]+", "", str(raw_value))
    if not numeric:
        return None

    try:
        return float(numeric.replace(",", ""))
    except ValueError:
        return None


def absolute_url(url: Optional[str]) -> str:
    if not url:
        return ""
    url = url.strip()
    if url.startswith("//"):
        return f"https:{url}"
    if url.startswith("/"):
        return f"{SITE_ORIGIN}{url}"
    return url


def parse_land_size_and_unit(raw_text: Optional[str]) -> Tuple[Optional[float], Optional[str]]:
    if not raw_text:
        return None, None

    text = str(raw_text).strip().lower()
    compact = re.sub(r"\s+", "", text)

    unit_map = {
        "m2": "sqm",
        "m²": "sqm",
        "sq.m": "sqm",
        "sqm": "sqm",
        "acres": "acre",
        "ac": "acre",
        "acre": "acre",
        "hectares": "ha",
        "hectare": "ha",
        "ha": "ha",
    }

    patterns = [
        r"([0-9]+(?:[.,][0-9]+)?)\s*(?:sq\.?\s*m|square\s*met(?:re|er)s?)",
        r"([0-9]+(?:[.,][0-9]+)?)-?(sqm|m2|m²|ha|hectare|hectares|acre|acres|ac)\b",
        r"([0-9]+(?:[.,][0-9]+)?)(sqm|m2|m²|ha|hectare|hectares|acre|acres|ac)\b",
        r"([0-9]+(?:[.,][0-9]+)?)m2\b",
        r"([0-9]+(?:[.,][0-9]+)?)m²\b",
        r"([0-9]+(?:[.,][0-9]+)?)\s*m\s+stand\b",
        r"([0-9]+(?:[.,][0-9]+)?)\s*m\s+residential\b",
        r"([0-9]+(?:[.,][0-9]+)?)\s*m\b",
    ]

    for pattern in patterns:
        match = re.search(pattern, text, flags=re.IGNORECASE)
        if match:
            size = parse_float(match.group(1))
            unit = unit_map.get(match.group(2).lower(), "sqm") if match.lastindex and match.lastindex >= 2 else "sqm"
            if size:
                return size, unit

    for pattern in (
        r"^([0-9]+(?:[.,][0-9]+)?)-?(sqm|m2|m²|ha|hectare|hectares|acre|acres|ac)$",
        r"^([0-9]+(?:[.,][0-9]+)?)(sqm|m2|m²|ha|hectare|hectares|acre|acres|ac)$",
    ):
        match = re.match(pattern, compact, flags=re.IGNORECASE)
        if match:
            size = parse_float(match.group(1))
            unit = unit_map.get(match.group(2).lower(), "sqm")
            if size:
                return size, unit

    return None, None


def extract_land_size_from_card(card) -> Tuple[Optional[float], Optional[str]]:
    land_node = card.select_one("span.land-size")
    if land_node:
        size, unit = parse_land_size_and_unit(land_node.get_text(" ", strip=True))
        if size:
            return size, unit
    return None, None


def extract_land_size_from_fields(listing_url: str, title: str, description: str) -> Tuple[Optional[float], Optional[str]]:
    slug = listing_url.rstrip("/").split("/")[-1]
    for part in slug.split("-"):
        if re.match(r"^[0-9]", part):
            size, unit = parse_land_size_and_unit(part)
            if size:
                return size, unit

    for text in (title, description):
        size, unit = parse_land_size_and_unit(text)
        if size:
            return size, unit

    return None, None


def extract_land_size(listing_url: str, title: str, description: str, card) -> Tuple[Optional[float], Optional[str]]:
    size, unit = extract_land_size_from_card(card)
    if size:
        return size, unit
    return extract_land_size_from_fields(listing_url, title, description)


def parse_jsonld_script(script_tag) -> Optional[Dict]:
    if not script_tag or not script_tag.string:
        return None

    try:
        data = json.loads(script_tag.string.strip())
    except json.JSONDecodeError:
        return None

    if data.get("@type") == "RealEstateListing":
        return data
    return None


def build_location(suburb: str, city: str, country: str = "") -> str:
    parts = [part.strip() for part in (suburb, city, country) if part and part.strip()]
    return ", ".join(parts)


def format_price_raw(price: Optional[str], currency: str = "USD") -> str:
    if not price:
        return ""
    currency = currency or "USD"
    numeric = parse_price(str(price))
    if numeric is None:
        return f"{currency} {price}"
    return f"{currency} {numeric:,}"


def is_land_sale_listing(listing_url: str, offers: Dict) -> bool:
    if "/for-rent/" in listing_url:
        return False
    offer_type = str(offers.get("@type") or "")
    if "Lease" in offer_type:
        return False
    return "/for-sale/residential-land" in listing_url


def jsonld_to_record(listing: Dict) -> Optional[Dict]:
    about = listing.get("about") or {}
    address = about.get("address") or {}
    offers = listing.get("offers") or {}
    author = listing.get("author") or {}
    seller = offers.get("seller") or {}

    listing_url = absolute_url(listing.get("url"))
    if not is_land_sale_listing(listing_url, offers):
        return None

    suburb = str(address.get("addressLocality") or "").strip()
    region = str(address.get("addressRegion") or "").strip()
    country = str(address.get("addressCountry") or "").strip()
    city = normalize_city(region)

    title = str(listing.get("name") or "").strip()
    description = str(listing.get("description") or "").strip()
    description = re.sub(r"\r\n", "\n", description)

    currency = str(offers.get("priceCurrency") or "USD").strip()
    price_value = offers.get("price")
    price_raw = format_price_raw(str(price_value) if price_value is not None else "", currency)

    agency_name = str(author.get("name") or seller.get("name") or "").strip()
    agency_logo = absolute_url(author.get("logo") or seller.get("logo"))

    location = build_location(suburb, city, country)

    return {
        "title": title,
        "listing_url": listing_url,
        "price_raw": price_raw,
        "price": parse_price(str(price_value) if price_value is not None else ""),
        "location": location,
        "suburb": suburb,
        "city": city,
        "property_type": "residential_land",
        "description": description,
        "agency_name": agency_name,
        "agency_logo": agency_logo,
    }


def parse_result_card(card) -> Optional[Dict]:
    script = card.select_one('script[type="application/ld+json"]')
    listing = parse_jsonld_script(script)
    if not listing:
        return None

    record = jsonld_to_record(listing)
    if not record or not record.get("listing_url"):
        return None

    land_size, land_size_unit = extract_land_size(
        record["listing_url"],
        record["title"],
        record["description"],
        card,
    )
    record["land_size"] = land_size
    record["land_size_unit"] = land_size_unit

    return record


def page_has_next(soup: BeautifulSoup) -> bool:
    next_link = soup.select_one('link[rel="next"]')
    return bool(next_link and next_link.get("href"))


def scrape_page(session: requests.Session, page: int, seen_urls: set) -> List[Dict]:
    html = fetch_page(session, page)
    soup = BeautifulSoup(html, "html.parser")
    cards = soup.select("div.ResultCardItem")
    if not cards:
        return []

    results = []
    for card in cards:
        parsed = parse_result_card(card)
        if not parsed:
            continue
        if parsed["listing_url"] in seen_urls:
            continue
        seen_urls.add(parsed["listing_url"])
        results.append(parsed)

    return results


def save_json(listings: List[Dict]) -> None:
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT_PATH.open("w", encoding="utf-8") as outfile:
        json.dump(listings, outfile, indent=2, ensure_ascii=False)
    print(f"Saved {len(listings)} residential land listings to {OUTPUT_PATH}")


def main() -> None:
    session = build_session()
    seen_urls = set()
    collected: List[Dict] = []
    page = 1

    while page <= MAX_PAGES:
        print(f"Scraping page {page}...")
        try:
            html = fetch_page(session, page)
        except requests.RequestException as error:
            print(f"Request failed for page {page}: {error}")
            print(f"Waiting {REQUEST_DELAY} seconds before retrying...")
            time.sleep(REQUEST_DELAY)
            continue

        soup = BeautifulSoup(html, "html.parser")
        new_listings = []
        for card in soup.select("div.ResultCardItem"):
            parsed = parse_result_card(card)
            if not parsed or not parsed["listing_url"]:
                continue
            if parsed["listing_url"] in seen_urls:
                continue
            seen_urls.add(parsed["listing_url"])
            new_listings.append(parsed)

        if not new_listings:
            print(f"No new listings found on page {page}. Stopping.")
            break

        collected.extend(new_listings)
        print(f"Page {page}: discovered {len(new_listings)} new listings (total {len(collected)})")

        if SAVE_EVERY_PAGE:
            save_json(collected)

        if not page_has_next(soup):
            print("No next page link found. Finished scraping.")
            break

        page += 1
        time.sleep(REQUEST_DELAY)

    if collected:
        save_json(collected)
    else:
        print("No residential land listings were collected.")


if __name__ == "__main__":
    main()
