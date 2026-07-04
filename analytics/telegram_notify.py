"""Optional Telegram alerts for pipeline stages (GitHub Actions / cron)."""

from __future__ import annotations

import os
import urllib.error
import urllib.parse
import urllib.request
from typing import Any, Mapping, Optional


def telegram_configured() -> bool:
    return bool(
        os.environ.get("TELEGRAM_BOT_TOKEN", "").strip()
        and os.environ.get("TELEGRAM_CHAT_ID", "").strip()
    )


def send_telegram(text: str) -> None:
    token = os.environ.get("TELEGRAM_BOT_TOKEN", "").strip()
    chat_id = os.environ.get("TELEGRAM_CHAT_ID", "").strip()
    if not token or not chat_id:
        return

    payload = urllib.parse.urlencode({"chat_id": chat_id, "text": text}).encode("utf-8")
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    try:
        with urllib.request.urlopen(url, data=payload, timeout=20) as response:
            if response.status >= 400:
                print(f"Telegram notify HTTP {response.status}")
    except urllib.error.URLError as exc:
        print(f"Telegram notify failed: {exc}")


def format_duration_minutes(seconds: float) -> str:
    if seconds < 60:
        return f"{int(round(seconds))}s"
    return f"{seconds / 60:.1f} min"


def _coverage_pct(part: int, total: int) -> int:
    if total <= 0:
        return 0
    return round(100 * part / total)


def format_ingest_stats(
    stats: Mapping[str, Any],
    quality: Optional[Mapping[str, int]] = None,
) -> str:
    lines = [
        "propo ingest complete",
        f"• Listings processed: {stats.get('listings_processed', 0):,}",
        f"• Snapshots added: {stats.get('snapshots_added', 0):,}",
        f"• Deactivated: {stats.get('listings_deactivated', 0):,}",
        f"• Active listings: {stats.get('active_listings', 0):,}",
        f"• Daily market rows: {stats.get('daily_market_rows', 0):,}",
        f"• Daily land rows: {stats.get('daily_land_rows', 0):,}",
    ]

    if quality:
        active = quality.get("active_listings", 0)
        lines.extend(
            [
                "",
                "Data quality (today)",
                f"• market_id: {quality.get('with_market_id', 0):,} ({_coverage_pct(quality.get('with_market_id', 0), active)}%)",
                f"• image_url: {quality.get('with_image_url', 0):,} ({_coverage_pct(quality.get('with_image_url', 0), active)}%)",
                f"• suspect rent > $6k: {quality.get('suspect_rent_over_6k', 0):,}",
                f"• low-confidence suburbs: {quality.get('low_confidence_metrics', 0):,}",
                f"• snapshot days tracked: {quality.get('snapshot_days', 0):,}",
            ]
        )

    return "\n".join(lines)
