import shutil
import subprocess
import time
from pathlib import Path

from analytics.daily_metrics import build_daily_market_snapshots
from analytics.land_daily_metrics import build_land_daily_snapshots
from analytics.ingest import export_current_json, ingest_all
from analytics.ingest_supabase import ingest_all_supabase
from analytics.supabase_db import SupabaseHistoryDatabase
from analytics.sync_dashboard import sync_dashboard
from analytics.telegram_notify import (
    format_duration_minutes,
    format_ingest_stats,
    send_telegram,
)

PROJECT_ROOT = Path(__file__).resolve().parents[1]


def run_analytics_build() -> None:
    npm = shutil.which("npm")
    if not npm:
        raise SystemExit("npm not found in PATH. Install Node.js to run analytics:build.")

    result = subprocess.run(
        [npm, "run", "analytics:build:db"],
        cwd=PROJECT_ROOT,
        check=False,
    )
    if result.returncode != 0:
        raise SystemExit("analytics:build:db failed")


def main() -> None:
    analytics_started = time.monotonic()
    send_telegram("propo analytics started")

    print("=== Local historical ingest (SQLite) ===")
    ingest_all()

    print("\n=== Daily market snapshots (SQLite) ===")
    build_daily_market_snapshots()

    print("\n=== Daily land snapshots (SQLite) ===")
    build_land_daily_snapshots()

    print("\n=== Export current JSON for legacy analytics ===")
    export_current_json()

    print("\n=== Analytics build ===")
    run_analytics_build()

    send_telegram(
        f"propo analytics complete ({format_duration_minutes(time.monotonic() - analytics_started)})"
    )

    ingest_started = time.monotonic()
    send_telegram("propo ingest started")

    print("\n=== Supabase historical ingest ===")
    ingest_stats = ingest_all_supabase()

    print("\n=== Supabase dashboard sync ===")
    sync_dashboard()

    quality = SupabaseHistoryDatabase().fetch_data_quality_summary()
    duration = format_duration_minutes(time.monotonic() - ingest_started)
    send_telegram(f"{format_ingest_stats(ingest_stats, quality)}\n• Duration: {duration}")

    print("\nCloud pipeline complete.")


if __name__ == "__main__":
    main()
