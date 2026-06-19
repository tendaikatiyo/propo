# Session Handover — 2026-06-17

## Project vision

**propo** — RentCast-style property intelligence for Zimbabwe: multi-source listings that compound over time, ingested into Supabase, with automated daily runs and Telegram notifications.

---

## Workspace


| Item             | Value                                   |
| ---------------- | --------------------------------------- |
| Repo             | `https://github.com/tendaikatiyo/propo` |
| VM hostname      | `n8npropo` (GCP)                        |
| VM install path  | `/opt/propo`                            |
| n8n domain       | `https://super.propo.fyi/`              |
| n8n compose dir  | `~/n8n-external`                        |
| Supabase project | `uscnuatdvjjzudnzsojz`                  |
| Handover folder  | `prompts/handovers/`                    |


---

## What this session covered

No new scraper or analytics code was merged. Work was **infrastructure and operations**: VM bootstrap, Supabase wiring, n8n external task runners, and diagnosing scrape failures on the GCP IP.

---

## Current architecture (target)

```
cron or n8n (scheduler)
    → /opt/propo/scripts/daily_pipeline.sh
        → scrape_all (8 scrapers)
        → run_pipeline (SQLite history)
        → analytics:build
        → ingest_supabase + sync_dashboard
    → Supabase (Postgres)
    → Telegram (success / partial / failure)
```

**Recommended scheduler (as of this session):** `cron` + bash wrapper with Telegram `curl` alerts — simpler and more reliable than n8n Code nodes for scraping.

---

## VM setup — completed / in progress

### Bootstrap steps that worked

```bash
sudo apt update
sudo apt install -y python3 python3-venv python3-pip git nodejs npm docker.io docker-compose

sudo mkdir -p /opt
sudo git clone https://github.com/tendaikatiyo/propo /opt/propo
sudo chown -R $USER:$USER /opt/propo

cd /opt/propo
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
npm install
```

### Legacy path env vars

Scripts still use `EASISHOP_DIR` / `/opt/easishop` as defaults. Override when running:

```bash
EASISHOP_DIR=/opt/propo bash /opt/propo/scripts/daily_pipeline.sh
```

**TODO:** Rename `EASISHOP_`* → `PROPO_*` and `/opt/easishop` → `/opt/propo` in `scripts/setup_vm.sh`, `scripts/daily_pipeline.sh`, `scripts/n8n-workflow.md`.

### `.env` on VM (required)

File: `/opt/propo/.env`


| Variable                    | Purpose                                                                        |
| --------------------------- | ------------------------------------------------------------------------------ |
| `SUPABASE_URL`              | Project API URL                                                                |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-side key for `sync_dashboard` (NOT publishable/anon key)                |
| `SUPABASE_DB_URL`           | Postgres URI for bulk ingest (`ingest_supabase`) — prefer **pooler port 6543** |


**Error seen and fixed:** `SUPABASE_DB_URL is not set in .env` — local `.env` existed but VM copy was missing or incomplete.

**Smoke test (no scrape):**

```bash
cd /opt/propo && source .venv/bin/activate
python -m analytics.run_pipeline_cloud
```

**Full pipeline:**

```bash
EASISHOP_DIR=/opt/propo bash /opt/propo/scripts/daily_pipelinmane.sh
```

Logs: `/opt/propo/logs/daily_pipeline_YYYYMMDD_HHMMSS.log`

---

## Supabase

### Migrations (both required)

1. `supabase/migrations/001_history.sql` — `listings`, `listing_snapshots`, `market_snapshots_daily`, `ingest_runs`
2. `supabase/migrations/002_dashboard_metrics.sql` — `market_metrics`, `cities`, `rankings`

### Ingest path (already in repo)


| Step                 | Module                                   |
| -------------------- | ---------------------------------------- |
| Bulk history         | `python -m analytics.ingest_supabase`    |
| Dashboard JSON sync  | `python -m analytics.sync_dashboard`     |
| Combined (no scrape) | `python -m analytics.run_pipeline_cloud` |


`ingest_supabase` uses direct Postgres (`SUPABASE_DB_URL`). `sync_dashboard` uses REST + service role key.

---

## n8n setup — external task runners

### Compose stack (`~/n8n-external`)

- **n8n:** `n8nio/n8n:1.121.0` — container `n8n-main`, port `5678`
- **runners:** `n8nio/runners:1.121.0` — container `n8n-runners`

Key env vars (both containers share `N8N_RUNNERS_AUTH_TOKEN`):

```env
# n8n-main
N8N_RUNNERS_ENABLED=true
N8N_RUNNERS_MODE=external
N8N_RUNNERS_BROKER_LISTEN_ADDRESS=0.0.0.0
N8N_NATIVE_PYTHON_RUNNER=true
N8N_HOST=super.propo.fyi
N8N_PROTOCOL=https
WEBHOOK_URL=https://super.propo.fyi/
N8N_EDITOR_BASE_URL=https://super.propo.fyi/
N8N_PROXY_HOPS=1

# n8n-runners
N8N_RUNNERS_TASK_BROKER_URI=http://n8n-main:5679
N8N_RUNNERS_AUTO_SHUTDOWN_TIMEOUT=15
```

Docs: [n8n task runners — external mode](https://docs.n8n.io/hosting/configuration/task-runners/#external-mode)

### Issues encountered


| Issue                                                                                              | Resolution                                                                                    |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `docker compose` not found                                                                         | Install `docker-compose` package; use `docker-compose` (hyphen)                               |
| Port 5678 already allocated                                                                        | Old standalone `n8n` container was running; `docker stop n8n && docker rm n8n`                |
| `docker-compose logs n8n --tail=200` failed                                                        | Legacy syntax: `docker-compose logs --tail=200 n8n` (flags before service name)               |
| Python (Native) Beta Code node: "Security violations" / "Failed to read result from child process" | Expected for repo scraper code; sandbox blocks local imports (`scraper.*`, `requests`, `bs4`) |
| Default Python Code node works                                                                     | Simple `_items` transform works; not suitable for full scrapers                               |


### n8n verdict for scraping

**Do not run scraper modules inside n8n Code nodes.** Use **Execute Command** to shell out to the VM venv:

```bash
cd /opt/propo && source .venv/bin/activate && python -m scraper.classifieds_rentals
```

Or the full pipeline script. n8n is optional; **cron is the recommended orchestrator** until scrape reliability is solved.

---

## Scraper 403 errors (blocker)

Running scrapers on the GCP VM returns **403 Forbidden** from target sites:

- `classifieds.co.zw` — confirmed on page 1
- `property.co.zw` — confirmed (`houses-for-rent`)

This is almost certainly **datacenter IP reputation / WAF**, not a code bug. The scrapers already send browser-like User-Agent headers.

### Diagnose

```bash
# On VM
curl -I "https://www.property.co.zw/houses-for-rent"
curl -I "https://www.classifieds.co.zw/zimbabwe-rooms-for-rent"

# Compare from home/local ISP
```

If VM = 403 and local = 200/301 → IP-level block.

### Mitigation options (not implemented)

1. **Different egress** — residential proxy or scrape from non-GCP machine
2. **Partial-success pipeline** — run sources separately; ingest what succeeded; Telegram warning for failed sources
3. **Browser automation** — Playwright/Selenium (may still fail if IP is blocked)

### Split scrape commands (for partial-success n8n/cron)

**Step A — non-classifieds (PropertyBook + Property.co.zw):**

```bash
cd /opt/propo && source .venv/bin/activate && \
python -m scraper.propertybook_rentals && \
python -m scraper.propertybook_sales && \
python -m scraper.propertybook_land_for_sale && \
python -m scraper.property_co_rentals && \
python -m scraper.property_co_sales && \
python -m scraper.property_co_land_for_sale
```

**Step B / C — classifieds (allow fail):**

```bash
python -m scraper.classifieds_rentals
python -m scraper.classifieds_sales
```

**Step D — ingest + Supabase:**

```bash
python -m analytics.run_pipeline_cloud
```

Note: `scrape_all.py` currently fails fast on first scraper error (`raise SystemExit`). Partial-success needs per-scraper error handling or separate cron steps.

---

## Telegram notifications

Planned channel: Telegram Bot API.

- Chat ID was configured in n8n during session (store in env, not in repo)
- Bot token must be in n8n credentials or shell env — **rotate if ever pasted in chat**

**Cron-friendly pattern (not yet in repo):**

```bash
# After pipeline
if [ $? -eq 0 ]; then MSG="propo pipeline OK"; else MSG="propo pipeline FAILED"; fi
curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
  -d chat_id="${TELEGRAM_CHAT_ID}" -d text="$MSG"
```

---

## Secrets hygiene

During this session, credentials were discussed in chat (Telegram bot token, Supabase keys, DB password). **Rotate:**

- Telegram bot token (BotFather → `/revoke`)
- Supabase service role key (if exposed)
- Database password (if exposed)

Never commit `.env`. Publishable Supabase key is for frontend only.

---

## Interim manual operations plan (active)

**Decision:** Scrape manually **daily** on local machine (where IPs are not blocked). Push to Supabase **daily** after each scrape/ingest. VM/n8n automation paused until scrape egress is solved.

**One-line summary:** Daily scrape → local SQLite history → full Supabase sync (listings + dashboard).

### Which command populates which Supabase tables

| Command | Tables updated |
|---|---|
| `python -m analytics.ingest_supabase` | `listings`, `listing_snapshots`, `market_snapshots_daily`, `ingest_runs` |
| `python -m analytics.sync_dashboard` | `market_metrics`, `cities`, `rankings` **only** |
| `python -m analytics.run_pipeline_cloud` | **All of the above** (after local SQLite ingest + analytics build) |

If you only ran `sync_dashboard`, dashboard tables populate but **listing history tables stay empty**. Run `ingest_supabase` or `run_pipeline_cloud` to fill `listings` / `listing_snapshots`.

### Layer split

| Layer | Where | Frequency | Purpose |
|---|---|---|---|
| Raw scrape JSON | `data/*.json` | Daily | Fresh listings from 8 sources |
| Local history | `data/easishop.db` (SQLite) | Daily | Local snapshots + offline analysis |
| Cloud DB | Supabase | Daily | Live listings history + dashboard metrics |

### Daily routine (full)

From project root on **local machine** (PowerShell):

```powershell
cd C:\Users\Katiyo\Documents\GitHub\propo
.\.venv\Scripts\Activate.ps1
```

**Step 1 — Scrape (~30–45 min)**

```powershell
python -m scraper.scrape_all
```

**Step 2 — Ingest + Supabase push (~10–20 min)**

One command (recommended):

```powershell
python -m analytics.run_pipeline_cloud
```

This runs: local SQLite ingest → daily metrics → export → `analytics:build` → `ingest_supabase` → `sync_dashboard`.

**Step 3 — Verify in Supabase Table Editor**

- `listings` — ~14k active rows
- `listing_snapshots` — grows each daily run
- `ingest_runs` — latest row with today's timestamp
- `market_snapshots_daily` — suburb aggregates for today
- `market_metrics`, `cities`, `rankings` — dashboard tables

**Step 4 — Quick local check (optional)**

```powershell
python -c "import sqlite3; c=sqlite3.connect('data/easishop.db'); print('active:', c.execute('select count(*) from listings where is_active=1').fetchone()[0]); print('snapshots:', c.execute('select count(*) from listing_snapshots').fetchone()[0])"
```

### Split commands (if needed)

**Ingest only (no scrape, e.g. re-push after fixing `.env`):**

```powershell
python -m analytics.ingest_supabase
python -m analytics.sync_dashboard
```

**Local SQLite only (no Supabase):**

```powershell
python -m analytics.run_pipeline
```

Per-source scrape if one portal fails — see scraper list in [2026-06-14 handover](./2026-06-14-scrapers-history-compounding.md).

### Data flow

```
Daily (local → cloud)
  scrape_all → data/*.json
      → run_pipeline_cloud
          → data/easishop.db (local)
          → Supabase: listings, listing_snapshots, market_snapshots_daily, ingest_runs
          → Supabase: market_metrics, cities, rankings
```

### Daily checklist

- [ ] `python -m scraper.scrape_all` (or per-source)
- [ ] `python -m analytics.run_pipeline_cloud`
- [ ] Verify `ingest_runs` + `listings` count in Supabase (not just dashboard tables)
- [ ] Note failed sources (date, URL, error)

### `.env` requirements (all three)

| Variable | Used by |
|---|---|
| `SUPABASE_URL` | `sync_dashboard` (REST) |
| `SUPABASE_SERVICE_ROLE_KEY` | `sync_dashboard` — must be **service_role secret**, not publishable |
| `SUPABASE_DB_URL` | `ingest_supabase` (direct Postgres) |

### Windows notes (2026-06-17)

- Run modules with `-m` from project root: `python -m analytics.run_pipeline_cloud` (not `python analytics/run_pipeline.py`)
- Recreate `.venv` if pip points at old `easishop prototype` path
- `run_pipeline_cloud` uses `shutil.which("npm")` for Windows compatibility

### Paused for now

- n8n / Zapier / Make orchestration
- GCP VM scraping (403 blocked)
- Automated Telegram alerts

### When ready to automate again

1. Fix scrape egress (local cron, residential proxy, or non-datacenter IP).
2. Daily: `scrape_all` + `run_pipeline_cloud` on that machine.

---

## Suggested next steps (priority order)

1. **Follow interim manual plan** — daily scrape + `run_pipeline_cloud` (full Supabase sync)
2. **Fix scrape egress** — test from local machine; if works, add proxy or move scrape worker off GCP datacenter IP
3. **Finish VM `.env`** — all three Supabase vars on `/opt/propo/.env` (for when automation resumes)
4. **Partial-success scrape** — don't let one 403 kill entire run; ingest available sources
5. **Rename easishop → propo** in scripts and docs
6. **Automate with cron** — once egress is solved: daily scrape + ingest, weekly or daily Supabase
7. **n8n / Zapier / Make (optional)** — scheduler + notifications only; execution stays on VM/local

---

## Quick reference commands

```bash
# Local machine (interim manual plan)
cd /path/to/propo && source .venv/bin/activate
python -m scraper.scrape_all
python -m analytics.run_pipeline
python -m analytics.run_pipeline_cloud   # daily full Supabase push (listings + dashboard)

# VM activate
cd /opt/propo && source .venv/bin/activate

# Ingest only (uses existing JSON)
python -m analytics.run_pipeline_cloud

# Single scraper
python -m scraper.classifieds_rentals

# Full daily run
EASISHOP_DIR=/opt/propo bash /opt/propo/scripts/daily_pipeline.sh

# n8n compose
cd ~/n8n-external && docker-compose ps && docker-compose logs --tail=200 n8n task-runners

# Supabase connectivity test
python -c "from analytics.supabase_db import SupabaseHistoryDatabase; db=SupabaseHistoryDatabase(); \
  exec('with db.connect() as c: cur=c.cursor(); cur.execute(\"SELECT COUNT(*) FROM listings\"); print(cur.fetchone())')"
```

---

## Related files


| File                              | Role                                                  |
| --------------------------------- | ----------------------------------------------------- |
| `scripts/daily_pipeline.sh`       | Full scrape → ingest → Supabase                       |
| `scripts/setup_vm.sh`             | One-time VM bootstrap                                 |
| `scripts/n8n-workflow.md`         | n8n Execute Command guide (still says easishop paths) |
| `analytics/run_pipeline_cloud.py` | Ingest + analytics + Supabase (no scrape)             |
| `analytics/ingest_supabase.py`    | Postgres bulk upsert                                  |
| `analytics/sync_dashboard.py`     | REST sync of metrics JSON                             |
| `.env.example`                    | Required env var template                             |


---

## Prior session context

See [2026-06-14-scrapers-history-compounding.md](./2026-06-14-scrapers-history-compounding.md) for scraper inventory, SQLite compounding design, and data file map.

---

Generated: 2026-06-17