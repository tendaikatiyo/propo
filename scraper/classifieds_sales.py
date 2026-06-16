import sys
from pathlib import Path

_root = Path(__file__).resolve().parents[1]
if str(_root) not in sys.path:
    sys.path.insert(0, str(_root))

from scraper.classifieds_common import run_scraper

OUTPUT_PATH = Path(__file__).resolve().parents[1] / "data" / "classifieds_sales.json"
MAX_PAGES = 160
SAVE_EVERY_PAGE = True

SALE_FEEDS = [
    ("https://www.classifieds.co.zw/zimbabwe-land-for-sale", "residential_land"),
    ("https://www.classifieds.co.zw/zimbabwe-houses-for-sale", "house"),
    ("https://www.classifieds.co.zw/zimbabwe-flats-apartments-for-sale", "flat"),
]


def main() -> None:
    run_scraper(
        feeds=SALE_FEEDS,
        output_path=OUTPUT_PATH,
        listing_kind="sale",
        max_pages=MAX_PAGES,
        label="sale",
        save_every_page=SAVE_EVERY_PAGE,
    )


if __name__ == "__main__":
    main()
