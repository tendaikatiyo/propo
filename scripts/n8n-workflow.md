# n8n Daily Pipeline Workflow

Use this guide to wire n8n on your GCP VM to run the Easishop pipeline once per day.

## Prerequisites

1. Run [`setup_vm.sh`](setup_vm.sh) on the VM.
2. Apply Supabase migrations:
   - [`supabase/migrations/001_history.sql`](../supabase/migrations/001_history.sql)
   - [`supabase/migrations/002_dashboard_metrics.sql`](../supabase/migrations/002_dashboard_metrics.sql)
3. Fill in `/opt/easishop/.env` with `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, and `SUPABASE_DB_URL`.

## Recommended n8n workflow

| Step | Node type | Configuration |
|------|-----------|---------------|
| 1 | **Schedule Trigger** | Daily at 02:00 UTC (adjust for your timezone) |
| 2 | **Execute Command** | See command below |
| 3 | **IF** (on failure) | `$json.exitCode !== 0` or use error output |
| 4 | **Email / Slack** | Send alert with log path and stderr |

### Execute Command node

```bash
bash /opt/easishop/scripts/daily_pipeline.sh
```

**Important settings:**

- **Timeout:** at least **3600 seconds** (60 minutes). Full scrape can take 30–45 minutes.
- **Working directory:** `/opt/easishop` (optional if using absolute script path).
- Run as the user that owns the repo and `.venv`.

## Logs

Each run writes a timestamped log under:

```text
/opt/easishop/logs/daily_pipeline_YYYYMMDD_HHMMSS.log
```

Point failure notifications at the latest log file for debugging.

## Manual smoke test (no n8n)

```bash
cd /opt/easishop
source .venv/bin/activate

# Pipeline without scrape (uses existing JSON)
python -m analytics.run_pipeline
npm run analytics:build
python -m analytics.ingest_supabase
python -m analytics.sync_dashboard
```

Full run including scrape:

```bash
bash /opt/easishop/scripts/daily_pipeline.sh
```

## Optional: split scrape and sync

If you prefer separate n8n branches or retries:

1. `python -m scraper.scrape_all` (long step)
2. `python -m analytics.run_pipeline && npm run analytics:build`
3. `python -m analytics.ingest_supabase && python -m analytics.sync_dashboard`

## Success notification (optional)

After the command node succeeds, add a node that reads the log tail or queries Supabase:

```sql
SELECT COUNT(*) AS active_listings FROM listings WHERE is_active = true;
```

Include the count in a Slack/email summary.
