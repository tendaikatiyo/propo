import os
from pathlib import Path

from dotenv import load_dotenv

PROJECT_ROOT = Path(__file__).resolve().parents[1]
load_dotenv(PROJECT_ROOT / ".env")


def get_supabase_url() -> str:
    url = os.environ.get("SUPABASE_URL", "").strip()
    if not url:
        raise RuntimeError("SUPABASE_URL is not set in .env")
    return url.rstrip("/")


def get_service_role_key() -> str:
    key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY", "").strip()
    if not key:
        raise RuntimeError("SUPABASE_SERVICE_ROLE_KEY is not set in .env")
    return key


def get_db_url() -> str:
    url = os.environ.get("SUPABASE_DB_URL", "").strip()
    if not url:
        raise RuntimeError(
            "SUPABASE_DB_URL is not set in .env. "
            "Copy the Postgres connection string from Supabase Dashboard → Database."
        )
    return url
