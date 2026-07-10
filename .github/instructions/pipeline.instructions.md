---
applyTo: "{analytics,scraper,scripts}/**"
---

# Data pipeline (Python)

ETL for Propo’s Zimbabwe property dataset: scrape → SQLite warehouse → analytics rollups → Supabase sync.

## Read first

- Root [`AGENTS.md`](../../AGENTS.md)
- Latest pipeline/ops handovers under `prompts/handovers/` (e.g. GHA automation, Telegram, ingest)
- [`prompts/PROOF_OF_WORK.md`](../../prompts/PROOF_OF_WORK.md) — dataset framing

## Layout

| Path | Role |
| ---- | ---- |
| `scraper/` | Portal-specific ingest modules |
| `analytics/` | Clean, market_metrics, land_metrics, cities, rankings, ingest, sync_dashboard, run_pipeline |
| `data/` | JSON outputs consumed by web fallback / ops |
| Root `package.json` scripts | `pipeline:run`, `analytics:build:db`, `pipeline:supabase`, etc. |

## Rules

- Preserve **land vs residential** separation (`land_metrics` / land snapshots vs residential `market_metrics`).
- Zimbabwe-specific normalization (currency, geo, property types) is load-bearing — don’t “simplify” without checking existing helpers.
- `cottage_count` / cottage segments live in analytics after migration **017** — rebuild with `npm run analytics:build:db` (or full pipeline) after related changes.
- Community report tables are **web/Supabase** concerns; do not mix community prices into scraped median rollups.
- Prefer extending existing modules over new parallel pipelines.
- Secrets via env / GitHub Environments (`production`) — never hardcode.

## Automation

- `.github/workflows/daily-pipeline.yml` — **live since 2026-07-05**; cron `17 4 * * *` with `timezone: "Africa/Harare"`
- Healthcheck ~`07:45` Harare — alerts if scheduled daily run missing/failed
- Telegram stage alerts on collect / analytics / ingest

## Commands

```bash
npm run pipeline:run          # full daily-style run
npm run analytics:build:db    # metrics from DB without full scrape
npm run pipeline:supabase     # ingest + sync_dashboard
```

Root `npm run build` is **not** the web app — it is legacy scrape/normalize/aggregate.
