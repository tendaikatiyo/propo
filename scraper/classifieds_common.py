import html
import json
import re
import sys
import time
from pathlib import Path
from typing import Dict, List, Optional, Tuple

import requests
from bs4 import BeautifulSoup
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

_root = Path(__file__).resolve().parents[1]
if str(_root) not in sys.path:
    sys.path.insert(0, str(_root))

from scraper.property_co_common import normalize_city

try:
    from analytics.price_utils import reconcile_classifieds_rent_price
except ImportError:
    reconcile_classifieds_rent_price = None  # type: ignore[misc, assignment]

SITE_ORIGIN = "https://www.classifieds.co.zw"
USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/124.0.0.0 Safari/537.36"
)
REQUEST_DELAY = 2.0


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


def fetch_page(session: requests.Session, base_url: str, page: int) -> str:
    url = base_url if page <= 1 else f"{base_url}?page={page}"
    response = session.get(url, timeout=15)
    response.raise_for_status()
    return response.text


def absolute_url(url: Optional[str]) -> str:
    if not url:
        return ""
    url = url.strip()
    if url.startswith("//"):
        return f"https:{url}"
    if url.startswith("/"):
        return f"{SITE_ORIGIN}{url}"
    return url


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


def parse_property_type(title: str, listing_url: str = "") -> str:
    combined = f"{title} {listing_url}".lower()
    if "cottage" in combined or "garden flat" in combined:
        return "cottage"
    if "townhouse" in combined or "cluster" in combined:
        return "townhouse"
    if "flat" in combined or "apartment" in combined:
        return "flat"
    if "house" in combined:
        return "house"
    if "room" in combined:
        return "room"
    return "unknown"


def resolve_property_type(title: str, listing_url: str, feed_type: str) -> str:
    inferred = parse_property_type(title, listing_url)
    if inferred != "unknown":
        return inferred
    return feed_type


def is_residential_land(title: str) -> bool:
    lowered = title.lower()
    excluded = ("farm", "agricultural", "commercial land", "industrial", "plot for")
    if any(term in lowered for term in excluded):
        return False
    return True


def build_location(suburb: str, city: str, country: str = "Zimbabwe") -> str:
    parts = [part.strip() for part in (suburb, city, country) if part and part.strip()]
    return ", ".join(parts)


def parse_suburb_from_title(title: str) -> str:
    if " - " in title:
        return title.split(" - ", 1)[0].strip()
    return title.strip()


def parse_property_chips(card) -> Tuple[Optional[int], Optional[int], Optional[float], Optional[str], str]:
    bedrooms = None
    bathrooms = None
    land_size = None
    land_size_unit = None
    region = ""

    for li in card.select("li.property"):
        text = li.get_text(" ", strip=True)
        lowered = text.lower()

        bed_match = re.search(r"(\d+)\s*bed", lowered)
        if bed_match:
            bedrooms = int(bed_match.group(1))
            continue

        bath_match = re.search(r"(\d+)\s*bath", lowered)
        if bath_match:
            bathrooms = int(bath_match.group(1))
            continue

        size_match = re.search(r"([\d,]+(?:\.\d+)?)\s*m", lowered)
        if size_match:
            land_size = parse_float(size_match.group(1))
            land_size_unit = "sqm"
            continue

        acre_match = re.search(r"([\d,]+(?:\.\d+)?)\s*acre", lowered)
        if acre_match:
            land_size = parse_float(acre_match.group(1))
            land_size_unit = "acre"
            continue

        if not re.search(r"\d", lowered):
            region = text

    return bedrooms, bathrooms, land_size, land_size_unit, region


def decode_carousel_text(raw_text: str) -> str:
    text = html.unescape(raw_text)
    text = text.replace("\\r\\n", "\n").replace("\\n", "\n").replace("\\/", "/")
    text = re.sub(
        r"\\u([0-9a-fA-F]{4})",
        lambda match: chr(int(match.group(1), 16)),
        text,
    )
    text = BeautifulSoup(text, "html.parser").get_text("\n", strip=True)
    return re.sub(r"\r\n", "\n", text)


def extract_description_from_carousel(card) -> str:
    carousel = card.select_one("div.carousel[data-images]")
    if not carousel:
        return ""

    raw = html.unescape(carousel.get("data-images", ""))
    match = re.search(
        r"descrip['\"][^>]*>(.+?)(?:</div>|<\\/div>|&lt;/div&gt;)",
        raw,
        flags=re.DOTALL | re.IGNORECASE,
    )
    if not match:
        return ""

    return decode_carousel_text(match.group(1))


def extract_card_description(card) -> str:
    full = extract_description_from_carousel(card)
    if full:
        return full

    snippet = card.select_one(".line-clamp-3 p")
    if snippet:
        return snippet.get_text(" ", strip=True)
    return ""


def extract_agency(card) -> Tuple[str, str]:
    logo_link = card.select_one(".store-logo a")
    if not logo_link:
        return "", ""

    img = logo_link.select_one("img")
    agency_logo = absolute_url(img.get("src") if img else "")

    span = logo_link.select_one("span")
    if span:
        agency_name = span.get_text(strip=True)
    elif img:
        agency_name = re.sub(r"\s+logo\s*$", "", img.get("alt", ""), flags=re.IGNORECASE).strip()
    else:
        agency_name = ""

    return agency_name, agency_logo


def is_rental_card(card) -> bool:
    flavour = card.select_one(".flavour")
    if flavour and "month" in flavour.get_text(" ", strip=True).lower():
        return True
    return False


def format_price_raw(price: Optional[int], listing_kind: str) -> str:
    if price is None:
        return ""
    if listing_kind == "rental":
        return f"USD {price:,}/pm"
    return f"USD {price:,}"


def extract_card_price(card, listing_kind: str) -> tuple[Optional[int], str]:
    """Read listing price from card markup.

    Prefer the visible `.price` node (includes /month for rentals). The
    `.usd-price-tooltip` sibling can contain a ZIG amount mislabeled as USD.
    """
    for node in card.select(".pull-left.price, .price.pull-left"):
        text = node.get_text(" ", strip=True)
        if not text:
            continue
        if listing_kind == "rental" and "month" not in text.lower():
            continue
        price = parse_price(text)
        if price is not None:
            return price, text

    tooltip = card.select_one(".usd-price-tooltip")
    if tooltip:
        text = tooltip.get_text(strip=True)
        price = parse_price(text)
        if price is not None:
            return price, text

    return None, ""


def parse_listing_card(card, feed_type: str, listing_kind: str) -> Optional[Dict]:
    listing_id = card.get("data-id")
    if not listing_id:
        return None

    title_link = card.select_one("h5.listing-title a")
    if not title_link:
        return None

    title = title_link.get_text(" ", strip=True)
    listing_url = absolute_url(title_link.get("href"))

    if listing_kind == "rental" and not is_rental_card(card):
        return None
    if listing_kind == "sale" and is_rental_card(card):
        return None

    if feed_type == "residential_land" and not is_residential_land(title):
        return None

    price, _price_text = extract_card_price(card, listing_kind)

    suburb = parse_suburb_from_title(title)
    bedrooms, bathrooms, land_size, land_size_unit, region = parse_property_chips(card)
    city = normalize_city(region)
    location = build_location(suburb, city)
    description = extract_card_description(card)
    agency_name, agency_logo = extract_agency(card)

    if listing_kind == "rental" and reconcile_classifieds_rent_price is not None:
        price = reconcile_classifieds_rent_price(price, description)
        if price is None:
            return None

    record = {
        "title": title,
        "listing_url": listing_url,
        "listing_id": listing_id,
        "price_raw": format_price_raw(price, listing_kind),
        "price": price,
        "location": location,
        "suburb": suburb,
        "city": city,
        "property_type": resolve_property_type(title, listing_url, feed_type),
        "description": description,
        "agency_name": agency_name,
        "agency_logo": agency_logo,
    }

    if feed_type == "residential_land":
        record["property_type"] = "residential_land"
    else:
        record["bedrooms"] = bedrooms if bedrooms is not None else 0
        record["bathrooms"] = bathrooms if bathrooms is not None else 0
        record["lounges"] = 0

    if land_size is not None:
        record["land_size"] = land_size
        record["land_size_unit"] = land_size_unit or "sqm"

    return record


def page_has_next(soup: BeautifulSoup) -> bool:
    next_link = soup.select_one('link[rel="next"]')
    return bool(next_link and next_link.get("href"))


def scrape_feed(
    session: requests.Session,
    base_url: str,
    feed_type: str,
    seen_ids: set,
    listing_kind: str,
    max_pages: int,
) -> List[Dict]:
    collected: List[Dict] = []
    page = 1

    while page <= max_pages:
        print(f"Scraping {feed_type} page {page} ({base_url})...")
        try:
            html_text = fetch_page(session, base_url, page)
        except requests.RequestException as error:
            print(f"Request failed for {base_url} page {page}: {error}")
            time.sleep(REQUEST_DELAY)
            continue

        soup = BeautifulSoup(html_text, "html.parser")
        new_listings = []

        for card in soup.select("div.listing.panel-listing"):
            parsed = parse_listing_card(card, feed_type, listing_kind)
            if not parsed:
                continue
            if parsed["listing_id"] in seen_ids:
                continue
            seen_ids.add(parsed["listing_id"])
            new_listings.append(parsed)

        if not new_listings:
            print(f"No new listings on page {page}. Stopping feed.")
            break

        collected.extend(new_listings)
        print(f"  Page {page}: {len(new_listings)} new (feed total {len(collected)})")

        if not page_has_next(soup):
            print(f"  No next page for {feed_type}.")
            break

        page += 1
        time.sleep(REQUEST_DELAY)

    return collected


def save_json(listings: List[Dict], output_path: Path, label: str) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    payload = [{key: value for key, value in item.items() if key != "listing_id"} for item in listings]
    with output_path.open("w", encoding="utf-8") as outfile:
        json.dump(payload, outfile, indent=2, ensure_ascii=False)
    print(f"Saved {len(payload)} {label} listings to {output_path}")


def run_scraper(
    feeds: List[Tuple[str, str]],
    output_path: Path,
    listing_kind: str,
    max_pages: int,
    label: str,
    save_every_page: bool = True,
) -> None:
    session = build_session()
    seen_ids = set()
    collected: List[Dict] = []

    for base_url, feed_type in feeds:
        print(f"\n=== Scraping {feed_type} {label} listings ===")
        feed_listings = scrape_feed(
            session,
            base_url,
            feed_type,
            seen_ids,
            listing_kind=listing_kind,
            max_pages=max_pages,
        )
        collected.extend(feed_listings)
        print(f"Feed complete: {len(feed_listings)} {feed_type} listings")
        if save_every_page:
            save_json(collected, output_path, label)
        time.sleep(REQUEST_DELAY)

    if collected:
        save_json(collected, output_path, label)
    else:
        print(f"No {label} listings were collected.")
