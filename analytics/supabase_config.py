import os
from pathlib import Path

from dotenv import load_dotenv

PROJECT_ROOT = Path(__file__).resolve().parents[1]
load_dotenv(PROJECT_ROOT / ".env")


def get_supabase_url() -> str:
    url = os.environ.get("SUPABASE_URL", "").strip()
    if not url:
        raise RuntimeError(
            "SUPABASE_URL is not set. Add it to .env locally or as a GitHub Actions repository secret."
        )
    return url.rstrip("/")


def get_service_role_key() -> str:
    key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY", "").strip()
    if not key:
        raise RuntimeError(
            "SUPABASE_SERVICE_ROLE_KEY is not set. Add it to .env locally or as a GitHub Actions repository secret."
        )
    if "publishable" in key or key.startswith("sb_publishable_"):
        raise RuntimeError(
            "SUPABASE_SERVICE_ROLE_KEY looks like a publishable (anon) key. "
            "Use the service_role secret from Supabase Dashboard → Project Settings → API."
        )
    return key


def get_db_url() -> str:
    url = os.environ.get("SUPABASE_DB_URL", "").strip()
    if not url:
        raise RuntimeError(
            "SUPABASE_DB_URL is not set. Add it to .env locally or as a GitHub Actions repository secret. "
            "Copy the Postgres connection string from Supabase Dashboard → Project Settings → Database "
            "(Transaction pooler, port 6543, recommended)."
        )
    return url
