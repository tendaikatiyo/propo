import shutil
import subprocess
import sys
from pathlib import Path

from analytics.daily_metrics import build_daily_market_snapshots
from analytics.ingest import export_current_json, ingest_all
from analytics.ingest_supabase import ingest_all_supabase
from analytics.sync_dashboard import sync_dashboard

PROJECT_ROOT = Path(__file__).resolve().parents[1]


def run_analytics_build() -> None:
    npm = shutil.which("npm")
    if not npm:
        raise SystemExit("npm not found in PATH. Install Node.js to run analytics:build.")

    result = subprocess.run(
        [npm, "run", "analytics:build"],
        cwd=PROJECT_ROOT,
        check=False,
    )
    if result.returncode != 0:
        raise SystemExit("analytics:build failed")


def main() -> None:
    print("=== Local historical ingest (SQLite) ===")
    ingest_all()

    print("\n=== Daily market snapshots (SQLite) ===")
    build_daily_market_snapshots()

    print("\n=== Export current JSON for legacy analytics ===")
    export_current_json()

    print("\n=== Analytics build ===")
    run_analytics_build()

    print("\n=== Supabase historical ingest ===")
    ingest_all_supabase()

    print("\n=== Supabase dashboard sync ===")
    sync_dashboard()

    print("\nCloud pipeline complete.")


if __name__ == "__main__":
    main()
