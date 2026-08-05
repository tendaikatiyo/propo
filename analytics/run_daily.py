"""Daily propo workflow: scrape all sources, then ingest + Supabase sync.

Stages (optional argv):
  all     — scrape then cloud (default; local / legacy)
  scrape  — portals only
  cloud   — SQLite ingest, analytics, Supabase sync
"""

import subprocess
import sys
import time
from pathlib import Path

from analytics.run_pipeline_cloud import main as run_cloud_pipeline
from analytics.telegram_notify import format_duration_minutes, send_telegram

PROJECT_ROOT = Path(__file__).resolve().parents[1]
VALID_STAGES = frozenset({"all", "scrape", "cloud"})


def run_scrape_all() -> None:
    print("=== Step 1/2: scrape_all ===")
    result = subprocess.run(
        [sys.executable, "-m", "scraper.scrape_all"],
        cwd=PROJECT_ROOT,
        check=False,
    )
    if result.returncode != 0:
        raise SystemExit(f"scrape_all failed (exit {result.returncode})")


def run_scrape_stage() -> None:
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


def run_cloud_stage() -> None:
    print("\n=== Step 2/2: run_pipeline_cloud ===")
    run_cloud_pipeline()
    print("\nDaily workflow complete.")
    send_telegram("propo daily pipeline complete")


def main(argv: list[str] | None = None) -> None:
    args = list(sys.argv[1:] if argv is None else argv)
    stage = args[0] if args else "all"
    if stage not in VALID_STAGES:
        raise SystemExit(f"Unknown stage {stage!r}; use all|scrape|cloud")

    if stage in {"all", "scrape"}:
        run_scrape_stage()
    if stage in {"all", "cloud"}:
        run_cloud_stage()


if __name__ == "__main__":
    main()
