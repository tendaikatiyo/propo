import json
from pathlib import Path
from typing import Any, Dict, List

from supabase import Client, create_client

from analytics.supabase_config import get_service_role_key, get_supabase_url

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
MARKET_METRICS_PATH = DATA_DIR / "market_metrics.json"
CITIES_PATH = DATA_DIR / "cities.json"
RANKINGS_PATH = DATA_DIR / "rankings.json"

BATCH_SIZE = 500


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


def sync_cities(client: Client) -> int:
    if not CITIES_PATH.exists():
        raise FileNotFoundError(f"Missing {CITIES_PATH}. Run npm run analytics:build first.")

    rows = load_json(CITIES_PATH)
    client.table("cities").delete().neq("city", "__keep__").execute()

    count = 0
    for batch in chunked(rows, BATCH_SIZE):
        client.table("cities").upsert(batch).execute()
        count += len(batch)

    print(f"Synced {count} cities rows to Supabase")
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


def sync_dashboard(client: Client | None = None) -> Dict[str, int]:
    supabase = client or get_client()
    stats = {
        "market_metrics": sync_market_metrics(supabase),
        "cities": sync_cities(supabase),
        "rankings": sync_rankings(supabase),
    }
    print(f"Dashboard sync complete: {stats}")
    return stats


def main() -> None:
    sync_dashboard()


if __name__ == "__main__":
    main()
