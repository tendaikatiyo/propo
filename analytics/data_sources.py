from pathlib import Path
from typing import List, Tuple

DATA_DIR = Path(__file__).resolve().parents[1] / "data"

# (json_path, source, listing_type)
SOURCE_FILES: List[Tuple[Path, str, str]] = [
    (DATA_DIR / "rentals.json", "propertybook", "rent"),
    (DATA_DIR / "sales.json", "propertybook", "sale"),
    (DATA_DIR / "land_for_sale.json", "propertybook", "sale"),
    (DATA_DIR / "property_co_rentals.json", "property_co", "rent"),
    (DATA_DIR / "property_co_sales.json", "property_co", "sale"),
    (DATA_DIR / "property_co_land_for_sale.json", "property_co", "sale"),
    (DATA_DIR / "classifieds_rentals.json", "classifieds", "rent"),
    (DATA_DIR / "classifieds_sales.json", "classifieds", "sale"),
]
