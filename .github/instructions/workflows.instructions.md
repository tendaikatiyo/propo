---
applyTo: ".github/workflows/**"
---

# GitHub Actions

## Daily pipeline

- Workflow: `daily-pipeline.yml`
- **Status:** fully automated and **reliable in production since 2026-07-05** (scheduled runs succeeding daily)
- Schedule: `cron: "17 4 * * *"` + `timezone: "Africa/Harare"` (local 04:17 CAT)
- Also set `env.TZ: Africa/Harare` for log `date` output — **schedule timezone ≠ job TZ**; both are intentional
- Secrets via Environment **`production`**
- Telegram alerts per stage when tokens present

## Healthcheck

- `pipeline-schedule-healthcheck.yml` — `45 7 * * *` Africa/Harare
- Alerts if no successful scheduled daily run in the lookback window
- GitHub may delay scheduled jobs 3–60+ minutes — do not “fix” cron solely because runs appear ~08:xx

## Other

- `pipeline-cloud.yml` / `pipeline-ingest-only.yml` — manual recovery paths
- `test-telegram.yml` — Telegram smoke test
- `web-ci.yml` — web build checks

When changing schedules, prefer **IANA `timezone:`** on the schedule entry and write cron in **local** Harare time. Do not rely on job `TZ` alone to shift when cron fires.
