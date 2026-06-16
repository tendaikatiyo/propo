#!/usr/bin/env bash
# Daily Easishop pipeline for n8n / cron on GCP VM.
# Expects repo at /opt/easishop (override with EASISHOP_DIR).
set -euo pipefail

INSTALL_DIR="${EASISHOP_DIR:-/opt/easishop}"
LOG_DIR="${EASISHOP_LOG_DIR:-$INSTALL_DIR/logs}"
LOG_FILE="$LOG_DIR/daily_pipeline_$(date -u +%Y%m%d_%H%M%S).log"

mkdir -p "$LOG_DIR"
cd "$INSTALL_DIR"

exec > >(tee -a "$LOG_FILE") 2>&1

echo "=== Easishop daily pipeline started at $(date -u +%Y-%m-%dT%H:%M:%SZ) ==="
echo "Working directory: $(pwd)"
echo "Log file: $LOG_FILE"

if [ ! -d .venv ]; then
  echo "ERROR: Python venv not found at $INSTALL_DIR/.venv"
  echo "Run scripts/setup_vm.sh first."
  exit 1
fi

# shellcheck disable=SC1091
source .venv/bin/activate

if [ ! -f .env ]; then
  echo "ERROR: .env not found. Add Supabase credentials before running the pipeline."
  exit 1
fi

echo ""
echo "--- Step 1/4: scrape_all ---"
python -m scraper.scrape_all

echo ""
echo "--- Step 2/4: local ingest + daily metrics + export ---"
python -m analytics.run_pipeline

echo ""
echo "--- Step 3/4: analytics build ---"
npm run analytics:build

echo ""
echo "--- Step 4/4: Supabase sync ---"
python -m analytics.ingest_supabase
python -m analytics.sync_dashboard

echo ""
echo "=== Easishop daily pipeline completed at $(date -u +%Y-%m-%dT%H:%M:%SZ) ==="
