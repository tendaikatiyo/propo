"""Daily propo workflow: scrape all sources, then ingest + Supabase sync."""

import subprocess
import sys
import time
from pathlib import Path

from analytics.run_pipeline_cloud import main as run_cloud_pipeline
from analytics.telegram_notify import format_duration_minutes, send_telegram

PROJECT_ROOT = Path(__file__).resolve().parents[1]


def run_scrape_all() -> None:
    print("=== Step 1/2: scrape_all ===")
    result = subprocess.run(
        [sys.executable, "-m", "scraper.scrape_all"],
        cwd=PROJECT_ROOT,
        check=False,
    )
    if result.returncode != 0:
        raise SystemExit(f"scrape_all failed (exit {result.returncode})")


def main() -> None:
    scrape_started = time.monotonic()
    send_telegram("propo scrape started")
    try:
        run_scrape_all()
    except SystemExit:
        send_telegram("propo scrape FAILED")
        raise

    send_telegram(
        f"propo scrape complete ({format_duration_minutes(time.monotonic() - scrape_started)})"
    )

    print("\n=== Step 2/2: run_pipeline_cloud ===")
    run_cloud_pipeline()
    print("\nDaily workflow complete.")
    send_telegram("propo daily pipeline complete")


if __name__ == "__main__":
    main()
