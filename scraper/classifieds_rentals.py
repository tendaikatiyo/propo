from pathlib import Path

from scraper.classifieds_common import run_scraper

OUTPUT_PATH = Path(__file__).resolve().parents[1] / "data" / "classifieds_rentals.json"
MAX_PAGES = 50
SAVE_EVERY_PAGE = True

RENTAL_FEEDS = [
    ("https://www.classifieds.co.zw/zimbabwe-rooms-for-rent", "room"),
    ("https://www.classifieds.co.zw/zimbabwe-houses-to-rent", "house"),
    ("https://www.classifieds.co.zw/zimbabwe-flats-apartments-for-rent", "flat"),
]


def main() -> None:
    run_scraper(
        feeds=RENTAL_FEEDS,
        output_path=OUTPUT_PATH,
        listing_kind="rental",
        max_pages=MAX_PAGES,
        label="rental",
        save_every_page=SAVE_EVERY_PAGE,
    )


if __name__ == "__main__":
    main()
