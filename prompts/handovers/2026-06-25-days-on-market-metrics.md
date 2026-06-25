# Session Handover — 2026-06-25

## Project vision (unchanged)

Build a **RentCast-style property intelligence tool for Zimbabwe**: multi-source listing data that **compounds over time** to power market analytics (yields, suburb rankings, time on market, etc.).

---

## Workspace

- **Repo:** `https://github.com/tendaikatiyo/propo`
- **Handover folder:** `prompts/handovers/` (this file)
- **Historical DB:** `data/easishop.db` (gitignored; regenerate via pipeline)
- **Supabase migrations:** `supabase/migrations/001_history.sql` … `004_listings_days_on_market.sql`

---

## What was built this session

### 1. Days on market (DOM) — per listing

**Definition:** `days_on_market = days between first_seen_at and last_seen_at` (≥ 0).

- Active listings: `last_seen_at` is refreshed on every ingest, so DOM grows with each scrape run.
- Inactive listings: `last_seen_at` freezes when the listing drops off → final DOM.

**Implementation:**

| Layer | File / object | Notes |
|---|---|---|
| Shared helper | `analytics/listing_utils.py` | `compute_days_on_market()`, `days_on_market_from_row()` |
| SQLite | View `listings_with_days_on_market` | Created in `history_db._migrate_schema()` — SQLite cannot `ALTER TABLE ADD` a stored generated column on existing tables |
| SQLite reads | `history_db.fetch_active_listings()` | Queries the view (not raw `listings`) so exports include `days_on_market` |
| Postgres / Supabase | `listings.days_on_market` | **Generated column** in `004_listings_days_on_market.sql`; also added to `001_history.sql` for fresh installs |
| JSON export | `analytics/ingest.py` → `clean_rentals.json`, `clean_sales.json` | Each listing row now has `days_on_market` |

**Not used:** `now() - first_seen_at` for active listings between scrapes. DOM is scrape-aligned (last_seen − first_seen), not calendar-live between runs.

### 2. Days on market — rolled up to metrics

DOM propagates through the analytics stack:

```
listings (first_seen_at, last_seen_at)
    → days_on_market (per listing)
    → market_metrics (per suburb)
    → cities (per city)
    → rankings (leaderboards)
    → market_snapshots_daily (per suburb × date × type)
```

| Output | New fields |
|---|---|
| `market_metrics.json` / Supabase `market_metrics` | `median_days_on_market_rent`, `average_days_on_market_rent`, `median_days_on_market_sale`, `average_days_on_market_sale` |
| `cities.json` / Supabase `cities` | `average_days_on_market_rent`, `average_days_on_market_sale` |
| `rankings.json` | `longest_on_market_rentals`, `longest_on_market_sales` (national); `longest_on_market_rental_suburbs`, `longest_on_market_sale_suburbs` (per city) |
| `market_snapshots_daily` | `median_days_on_market`, `avg_days_on_market` |

**Modules touched:** `market_metrics.py`, `city_metrics.py`, `daily_metrics.py`, `rankings.py`, `supabase_db.py`.

### 3. Supabase migrations (apply in order)

| Migration | Purpose |
|---|---|
| `003_days_on_market.sql` | DOM columns on `market_metrics`, `cities`, `market_snapshots_daily` |
| `004_listings_days_on_market.sql` | Generated `days_on_market` on `listings` |

**Status:** Migrations written in repo; **must be applied manually** on Supabase before dashboard sync will include new columns.

### 4. Pipeline fix — DB export no longer overwritten

**Problem:** `run_pipeline_cloud` ran `export_current_json()` (DB → clean JSON with all sources + DOM), then `npm run analytics:build` which ran `clean_data.py` first — overwriting exports with PropertyBook-only raw JSON **without** `days_on_market`.

**Fix:** New script `analytics:build:db` (metrics → cities → rankings only). Cloud pipeline uses this.

```json
"analytics:build:db": "npm run analytics:metrics && npm run analytics:cities && npm run analytics:rankings"
```

`analytics:build` (with `clean_data`) remains for legacy PropertyBook-only local workflow.

### 5. DB inspection scripts (optional utilities)

| Script | Purpose |
|---|---|
| `scripts/inspect_db.py` | Tables, views, row counts, schemas |
| `scripts/inspect_db_stats.py` | Listings breakdown, cities, DOM stats, ingest runs |

---

## Current state of `data/easishop.db` (as of session end)

| Object | Rows | Purpose |
|---|---|---|
| `listings` | 17,680 | One row per `listing_url`; 13,645 active, 4,035 inactive |
| `listing_snapshots` | 310,155 | Append-only price/detail history per ingest |
| `market_snapshots_daily` | 13,035 | Daily suburb aggregates (11 dates: 2026-06-14 → 2026-06-25) |
| `ingest_runs` | 22 | Pipeline audit log |
| `listings_with_days_on_market` (view) | 17,680 | `listings` + computed `days_on_market` |

**Sources (active):** propertybook, property_co, classifieds — rent + sale.

**Top cities (active):** Harare (~9,856), Bulawayo (~1,167), Ruwa (~544).

**DOM note:** Tracking started 2026-06-14, so active listings show **0–10 days** DOM — not a market signal yet; needs weeks/months of daily runs.

**Harare example (metrics build):** ~9 days average DOM rent/sale across suburbs.

---

## Architecture — DOM data flow

```
scrape_all → 8 JSON files
       ↓
ingest.py → listings + listing_snapshots (+ deactivate stale)
       ↓
daily_metrics.py → market_snapshots_daily (incl. avg/median DOM)
       ↓
export_current_json → clean_*.json (incl. days_on_market per listing)
       ↓
analytics:build:db → market_metrics.json, cities.json, rankings.json
       ↓
ingest_supabase + sync_dashboard → Supabase
```

---

## npm scripts (updated)

| Script | Command |
|---|---|
| `analytics:build` | `clean` → metrics → cities → rankings (PropertyBook raw JSON path) |
| `analytics:build:db` | metrics → cities → rankings **only** (use after DB export) |
| `pipeline:cloud` | Full cloud pipeline (uses `analytics:build:db`) |
| `pipeline:run` | Local: ingest → daily metrics → export (no Supabase) |

---

## Example queries

**SQLite — longest on market (active Harare rentals):**

```sql
SELECT suburb, title, price, days_on_market
FROM listings_with_days_on_market
WHERE city = 'Harare' AND listing_type = 'rent' AND is_active = 1
ORDER BY days_on_market DESC
LIMIT 10;
```

**SQLite — suburb DOM from daily snapshots:**

```sql
SELECT city, suburb, listing_type, avg_days_on_market, listing_count
FROM market_snapshots_daily
WHERE snapshot_date = '2026-06-25'
ORDER BY avg_days_on_market DESC;
```

**Supabase (after migrations):**

```sql
SELECT suburb, average_days_on_market_rent, average_days_on_market_sale
FROM market_metrics
WHERE city = 'Harare'
ORDER BY average_days_on_market_rent DESC NULLS LAST;
```

---

## Known issues / gaps

1. **DOM is young** — only ~11 days of history; averages will stabilize after more daily ingests.
2. **Supabase migrations 003 + 004** — not auto-applied; run before next `sync_dashboard`.
3. **`analytics:clean` still PropertyBook-only** — do not run between DB export and metrics in cloud flow (use `analytics:build:db`).
4. **SQLite vs Postgres parity** — SQLite uses a **view** for listing DOM; Postgres uses a **generated column** on the table. Same formula, different mechanism.
5. **Inactive listings** — included in `listings` / view but **excluded** from `export_current_json` and thus from current `market_metrics` (active-only export).
6. **Frontend** — `public/app.js` still not wired to DOM fields; dashboard JSON / Supabase have the data.

---

## Suggested next steps

1. **Apply Supabase migrations** `003` and `004`, then run `pipeline:cloud` or `pipeline:supabase`.
2. **Wire dashboard UI** — suburb table column for avg days on market; “stale listings” filter.
3. **Inactive listing analytics** — optional metrics for sold/removed properties (final DOM from inactive rows).
4. **DOM by property type** — extend `market_metrics` beyond rent/sale split if needed.
5. **Automate migration apply** — Supabase CLI `db push` in VM cron or CI.

---

## Quick verification commands

```bash
# Ingest + export (adds days_on_market to clean JSON)
python -m analytics.ingest

# Build metrics from DB export (not raw clean)
npm run analytics:build:db

# Inspect local DB
python scripts/inspect_db.py
python scripts/inspect_db_stats.py

# Sample DOM in export
python -c "import json; r=json.load(open('data/clean_rentals.json')); print(r[0].get('days_on_market'), r[0].get('suburb'))"

# Sample suburb metric
python -c "import json; m=json.load(open('data/market_metrics.json')); h=[x for x in m if x['city']=='Harare' and x.get('average_days_on_market_rent')]; print(sorted(h, key=lambda x: -x['average_days_on_market_rent'])[:5])"
```

---

## Files created or modified this session

| Path | Change |
|---|---|
| `analytics/listing_utils.py` | **New** — DOM computation |
| `analytics/ingest.py` | Export `days_on_market` |
| `analytics/history_db.py` | View, daily snapshot DOM columns, fetch from view |
| `analytics/market_metrics.py` | Suburb DOM aggregates |
| `analytics/city_metrics.py` | City DOM aggregates |
| `analytics/daily_metrics.py` | Daily snapshot DOM |
| `analytics/rankings.py` | Longest-on-market leaderboards |
| `analytics/supabase_db.py` | Daily snapshot upsert DOM fields |
| `analytics/run_pipeline_cloud.py` | Uses `analytics:build:db` |
| `package.json` | `analytics:build:db` script |
| `supabase/migrations/003_days_on_market.sql` | **New** — dashboard table DOM columns |
| `supabase/migrations/004_listings_days_on_market.sql` | **New** — listings generated column |
| `supabase/migrations/001_history.sql` | `days_on_market` on fresh `listings` DDL |
| `scripts/inspect_db.py` | **New** — schema inspector |
| `scripts/inspect_db_stats.py` | **New** — stats inspector |

---

## Prior handovers

- [2026-06-14 — Scrapers & history compounding](./2026-06-14-scrapers-history-compounding.md)
- [2026-06-17 — VM, Supabase, n8n automation](./2026-06-17-vm-supabase-n8n-automation.md)
