#!/usr/bin/env python3
"""Verify Supabase connectivity and row counts after pipeline sync."""

from analytics.supabase_config import get_db_url, get_service_role_key, get_supabase_url
from analytics.supabase_db import SupabaseHistoryDatabase
from supabase import create_client


def main() -> None:
    print("Supabase URL:", get_supabase_url())
    print("Service role key:", "set" if get_service_role_key() else "missing")
    print("DB URL:", "set" if get_db_url() else "missing")

    db = SupabaseHistoryDatabase()
    active = db.count_listings(active_only=True)
    snapshots = db.count_snapshots()
    print(f"Active listings: {active}")
    print(f"Total snapshots: {snapshots}")

    client = create_client(get_supabase_url(), get_service_role_key())
    metrics = client.table("market_metrics").select("market_id", count="exact").limit(1).execute()
    cities = client.table("cities").select("city", count="exact").limit(1).execute()
    rankings = client.table("rankings").select("id").eq("id", "current").execute()

    print(f"market_metrics rows: {metrics.count}")
    print(f"cities rows: {cities.count}")
    print(f"rankings current row: {'yes' if rankings.data else 'no'}")

    if active == 0 or not metrics.count or not cities.count or not rankings.data:
        print("\nWARNING: Some tables look empty. Run the full pipeline and sync first.")
        raise SystemExit(1)

    print("\nSupabase verification passed.")


if __name__ == "__main__":
    main()
