import json
from pathlib import Path
from typing import Any, Dict, List

from supabase import Client, create_client

from analytics.supabase_config import get_service_role_key, get_supabase_url

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
MARKET_METRICS_PATH = DATA_DIR / "market_metrics.json"
LAND_METRICS_PATH = DATA_DIR / "land_metrics.json"
CITIES_PATH = DATA_DIR / "cities.json"
RANKINGS_PATH = DATA_DIR / "rankings.json"

BATCH_SIZE = 500

CITY_ROW_KEYS = (
    "city",
    "suburb_count",
    "rental_count",
    "sale_count",
    "land_count",
    "median_rent",
    "median_sale_price",
    "average_yield",
    "average_opportunity_score",
    "average_days_on_market_rent",
    "average_days_on_market_sale",
)


def get_client() -> Client:
    return create_client(get_supabase_url(), get_service_role_key())


def load_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def chunked(items: List[Dict[str, Any]], size: int) -> List[List[Dict[str, Any]]]:
    return [items[i : i + size] for i in range(0, len(items), size)]


def sync_market_metrics(client: Client) -> int:
    if not MARKET_METRICS_PATH.exists():
        raise FileNotFoundError(f"Missing {MARKET_METRICS_PATH}. Run npm run analytics:build first.")

    rows = load_json(MARKET_METRICS_PATH)
    client.table("market_metrics").delete().neq("market_id", "__keep__").execute()

    count = 0
    for batch in chunked(rows, BATCH_SIZE):
        client.table("market_metrics").upsert(batch).execute()
        count += len(batch)

    print(f"Synced {count} market_metrics rows to Supabase")
    return count


def sanitize_city_row(row: Dict[str, Any]) -> Dict[str, Any]:
    sanitized = {key: row.get(key) for key in CITY_ROW_KEYS if key in row}
    sanitized["city"] = row["city"]
    for key in ("suburb_count", "rental_count", "sale_count", "land_count"):
        if sanitized.get(key) is None:
            sanitized[key] = 0
    if sanitized.get("average_opportunity_score") is None:
        sanitized["average_opportunity_score"] = 0
    return sanitized


def sync_cities(client: Client) -> int:
    if not CITIES_PATH.exists():
        raise FileNotFoundError(f"Missing {CITIES_PATH}. Run npm run analytics:build first.")

    rows = [sanitize_city_row(row) for row in load_json(CITIES_PATH)]
    current_cities = {row["city"] for row in rows}

    count = 0
    for batch in chunked(rows, BATCH_SIZE):
        client.table("cities").upsert(batch).execute()
        count += len(batch)

    existing = client.table("cities").select("city").execute()
    stale = [row["city"] for row in (existing.data or []) if row["city"] not in current_cities]
    for city in stale:
        client.table("cities").delete().eq("city", city).execute()

    print(f"Synced {count} cities rows to Supabase")
    return count


def sync_land_metrics(client: Client) -> int:
    if not LAND_METRICS_PATH.exists():
        raise FileNotFoundError(f"Missing {LAND_METRICS_PATH}. Run npm run analytics:land first.")

    rows = load_json(LAND_METRICS_PATH)
    client.table("land_metrics").delete().neq("market_id", "__keep__").execute()

    count = 0
    for batch in chunked(rows, BATCH_SIZE):
        client.table("land_metrics").upsert(batch).execute()
        count += len(batch)

    print(f"Synced {count} land_metrics rows to Supabase")
    return count


def sync_rankings(client: Client) -> int:
    if not RANKINGS_PATH.exists():
        raise FileNotFoundError(f"Missing {RANKINGS_PATH}. Run npm run analytics:build first.")

    payload = load_json(RANKINGS_PATH)
    client.table("rankings").upsert(
        {"id": "current", "payload": payload},
        on_conflict="id",
    ).execute()
    print("Synced rankings payload to Supabase")
    return 1


def sync_land_metrics_optional(client: Client) -> int:
    try:
        return sync_land_metrics(client)
    except FileNotFoundError as error:
        print(f"Skipping land_metrics sync: {error}")
        return 0
    except Exception as error:
        print(f"land_metrics sync failed (non-fatal): {error}")
        return 0


def sync_dashboard(client: Client | None = None) -> Dict[str, int]:
    supabase = client or get_client()
    stats = {
        "market_metrics": sync_market_metrics(supabase),
        "cities": sync_cities(supabase),
        "rankings": sync_rankings(supabase),
        "land_metrics": sync_land_metrics_optional(supabase),
    }
    print(f"Dashboard sync complete: {stats}")
    return stats


def main() -> None:
    sync_dashboard()


if __name__ == "__main__":
    main()
