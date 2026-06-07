import json
import re
import time
from pathlib import Path
from typing import Dict, List, Optional

import requests
from bs4 import BeautifulSoup
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

BASE_URL = "https://www.propertybook.co.zw/residential/for-sale"
OUTPUT_PATH = Path(__file__).resolve().parents[1] / "data" / "sales.json"
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
    url = f"{BASE_URL}?page={page}"
    response = session.get(url, timeout=15)
    response.raise_for_status()
    return response.text


def parse_int(raw_value: Optional[str]) -> Optional[int]:
    if raw_value is None:
        return None

    numeric = re.sub(r"[^0-9.]+", "", str(raw_value))
    if not numeric:
        return None

    try:
        value = float(numeric)
        return int(value)
    except ValueError:
        return None


def parse_price(raw_price: str) -> Optional[int]:
    if not raw_price:
        return None

    match = re.search(r"([0-9]+(?:[.,][0-9]+)?)", raw_price.replace(",", ""))
    if not match:
        return None

    try:
        return int(float(match.group(1)))
    except ValueError:
        return None


def parse_property_type(title: str) -> str:
    normalized = title.lower()
    if "cottage" in normalized or "garden flat" in normalized:
        return "cottage"
    if "townhouse" in normalized or "cluster" in normalized:
        return "townhouse"
    if "flat" in normalized or "apartment" in normalized:
        return "flat"
    if "house" in normalized:
        return "house"
    if "room" in normalized:
        return "room"
    return "unknown"


def parse_location(location: str) -> Dict[str, str]:
    parts = [segment.strip() for segment in location.split(",") if segment.strip()]
    return {
        "suburb": parts[0] if parts else "",
        "city": parts[-1] if parts else "",
    }


def extract_feature(listing, icon_class: str) -> Optional[int]:
    for span in listing.select("span"):
        icon = span.find("i", class_=icon_class)
        if icon:
            return parse_int(span.get_text())
    return None


def parse_listing(listing) -> Optional[Dict]:
    title_node = listing.select_one("div.listingTitle") or listing.select_one("div.standard.listingTitle")
    if not title_node:
        return None

    title = title_node.get_text(" ", strip=True)

    listing_url = ""
    if title_node.name == "a" and title_node.has_attr("href"):
        listing_url = title_node["href"].strip()
    else:
        link = title_node.find("a", href=True)
        if link:
            listing_url = link["href"].strip()

    if not listing_url:
        for anchor in listing.select("a[href]"):
            href = anchor["href"].strip()
            if "/listings/for-sale/" in href and "/listed-agencies/" not in href:
                listing_url = href
                break

    if listing_url.startswith("/"):
        listing_url = f"https://www.propertybook.co.zw{listing_url}"

    price_node = listing.select_one(
        "div.price a, div.standard.price a, div.priority-price a, .priority-header .priority-price a, .priority-price a"
    )
    # If price is not inside the listingDetails, check ancestor blocks (priority listings)
    if not price_node:
        for anc in listing.find_parents('div', limit=5):
            price_node = anc.select_one("div.priority-price a, .priority-header .priority-price a, .priority-price a")
            if price_node:
                break

    price_raw = price_node.get_text(" ", strip=True) if price_node else ""
    location_node = listing.select_one("div.locationDetail")
    location_text = location_node.get_text(" ", strip=True) if location_node else ""

    description_node = listing.select_one("p.text-justify") or listing.select_one("p")
    description = description_node.get_text(" ", strip=True) if description_node else ""

    bedrooms = extract_feature(listing, "fa-bed") or 0
    bathrooms = extract_feature(listing, "fa-bath") or 0
    lounges = extract_feature(listing, "fa-couch") or 0

    agency_img = listing.select_one("img[alt][src]")
    # Priority listings place the agency image in a sibling/ancestor block
    if not agency_img:
        for anc in listing.find_parents('div', limit=5):
            agency_img = anc.select_one("img[alt][src]")
            if agency_img:
                break

    agency_name = agency_img["alt"].strip() if agency_img and agency_img.has_attr("alt") else ""
    agency_logo = agency_img["src"].strip() if agency_img and agency_img.has_attr("src") else ""
    if agency_logo.startswith("//"):
        agency_logo = f"https:{agency_logo}"

    location_parts = parse_location(location_text)
    return {
        "title": title,
        "listing_url": listing_url,
        "price_raw": price_raw,
        "price": parse_price(price_raw),
        "location": location_text,
        "suburb": location_parts["suburb"],
        "city": location_parts["city"],
        "property_type": parse_property_type(title),
        "description": description,
        "bedrooms": bedrooms,
        "bathrooms": bathrooms,
        "lounges": lounges,
        "agency_name": agency_name,
        "agency_logo": agency_logo,
    }


def scrape_page(session: requests.Session, page: int, seen_urls: set) -> List[Dict]:
    html = fetch_page(session, page)
    soup = BeautifulSoup(html, "html.parser")
    containers = soup.select("div.listingDetails")
    if not containers:
        return []

    results = []
    for container in containers:
        parsed = parse_listing(container)
        if not parsed or not parsed["listing_url"]:
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
    print(f"Saved {len(listings)} sales listings to {OUTPUT_PATH}")


def main() -> None:
    session = build_session()
    seen_urls = set()
    collected = []
    page = 1

    while page <= MAX_PAGES:
        print(f"Scraping page {page}...")
        try:
            new_listings = scrape_page(session, page, seen_urls)
        except requests.RequestException as error:
            print(f"Request failed for page {page}: {error}")
            print(f"Waiting {REQUEST_DELAY} seconds before retrying...")
            time.sleep(REQUEST_DELAY)
            continue

        if not new_listings:
            print(f"No new listings found on page {page}. Stopping.")
            break

        collected.extend(new_listings)
        print(f"Page {page}: discovered {len(new_listings)} new listings (total {len(collected)})")

        if SAVE_EVERY_PAGE:
            save_json(collected)

        page += 1
        time.sleep(REQUEST_DELAY)

    if collected:
        save_json(collected)
    else:
        print("No sales listings were collected.")


if __name__ == "__main__":
    main()
