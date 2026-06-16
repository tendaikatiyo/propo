#!/usr/bin/env bash
# One-time GCP VM setup for Easishop pipeline + n8n.
# Run as root or a deploy user with sudo.
set -euo pipefail

INSTALL_DIR="${EASISHOP_DIR:-/opt/easishop}"
REPO_URL="${EASISHOP_REPO_URL:-https://github.com/YOUR_USER/easishop-prototype.git}"
PYTHON="${PYTHON:-python3}"

echo "=== Easishop VM setup ==="
echo "Install directory: $INSTALL_DIR"

if ! command -v "$PYTHON" >/dev/null 2>&1; then
  echo "Python 3 not found. Install python3 and python3-venv first."
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js not found. Install Node.js 18+ (e.g. via NodeSource or nvm)."
  exit 1
fi

if [ ! -d "$INSTALL_DIR/.git" ]; then
  sudo mkdir -p "$(dirname "$INSTALL_DIR")"
  sudo git clone "$REPO_URL" "$INSTALL_DIR"
  sudo chown -R "$USER:$USER" "$INSTALL_DIR"
fi

cd "$INSTALL_DIR"

if [ ! -d .venv ]; then
  "$PYTHON" -m venv .venv
fi

# shellcheck disable=SC1091
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt

if [ ! -d node_modules ]; then
  npm install
fi

if [ ! -f .env ]; then
  cp .env.example .env
  echo ""
  echo "Created .env from .env.example — edit it with your Supabase credentials before running the pipeline."
fi

mkdir -p data logs

echo ""
echo "=== Setup complete ==="
echo "Next steps:"
echo "  1. Edit $INSTALL_DIR/.env with SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_DB_URL"
echo "  2. Apply Supabase migrations (001_history.sql, 002_dashboard_metrics.sql)"
echo "  3. Smoke test: cd $INSTALL_DIR && source .venv/bin/activate && python -m analytics.run_pipeline_cloud"
echo "  4. Point n8n at: $INSTALL_DIR/scripts/daily_pipeline.sh"
