import subprocess
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]

SCRAPERS = [
    "scraper.propertybook_rentals",
    "scraper.propertybook_sales",
    "scraper.propertybook_land_for_sale",
    "scraper.property_co_rentals",
    "scraper.property_co_sales",
    "scraper.property_co_land_for_sale",
    "scraper.classifieds_rentals",
    "scraper.classifieds_sales",
]


def run_module(module_name: str) -> None:
    print(f"\n=== Running {module_name} ===")
    result = subprocess.run(
        [sys.executable, "-m", module_name],
        cwd=PROJECT_ROOT,
        check=False,
    )
    if result.returncode != 0:
        raise SystemExit(f"Scraper failed: {module_name} (exit {result.returncode})")


def main() -> None:
    for module_name in SCRAPERS:
        run_module(module_name)
    print("\nAll scrapers completed.")


if __name__ == "__main__":
    main()
