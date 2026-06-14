# Session Handover — 2026-06-14

## Project vision

Build a **RentCast-style property intelligence tool for Zimbabwe**: multi-source listing data that **compounds over time** (historical rents, sale prices, land prices) to power market analytics and eventually estimates/comps.

---

## Workspace

- **Repo:** `easishop prototype`
- **Handover folder:** `prompts/handovers/` (this file)
- **Source HTML samples:** `source codes/classifieds/`, `source codes/prop_co/`
- **Live data:** `data/`
- **Historical DB:** `data/easishop.db` (gitignored; regenerate via pipeline)
- **Supabase schema (future):** `supabase/migrations/001_history.sql`

---

## What was built this session

### 1. Classifieds.co.zw scrapers

Three separate rental feeds and three sale feeds (no combined portal page). Shared parser in `scraper/classifieds_common.py`.

| Scraper | URL base | Output |
|---|---|---|
| `classifieds_rentals.py` | rooms / houses / flats **for rent** | `data/classifieds_rentals.json` |
| `classifieds_sales.py` | land / houses / flats **for sale** | `data/classifieds_sales.json` |

- Parses `div.listing.panel-listing` HTML cards (not JSON-LD alone — JSON-LD only lists ~12 items per page).
- Full descriptions from carousel `data-images` attribute.
- Rentals: ~853 listings last full run.
- Sales: ~4,574 listings last full run (~25 min scrape).
- Land sales filter out farm/agricultural titles via `is_residential_land()`.

Run:

```bash
python -m scraper.classifieds_rentals
python -m scraper.classifieds_sales
```

### 2. Property.co.zw land scraper (prior in session)

- `scraper/property_co_land_for_sale.py` → `data/property_co_land_for_sale.json`
- Same JSON-LD + card pattern as PCO rentals/sales.

### 3. Historical compounding (main architectural change)

**Problem:** Scrapers overwrote JSON each run — no history.

**Solution:** SQLite database with append-only snapshots.

| Module | Role |
|---|---|
| `analytics/history_db.py` | Schema + DB operations |
| `analytics/data_sources.py` | Maps all 8 JSON files → `source` + `listing_type` |
| `analytics/ingest.py` | Upsert listings, append snapshots, deactivate stale |
| `analytics/daily_metrics.py` | Daily suburb aggregates → `market_snapshots_daily` |
| `analytics/run_pipeline.py` | Ingest → daily metrics → export legacy JSON |

**Tables in `data/easishop.db`:**

| Table | Purpose |
|---|---|
| `listings` | Current state per `listing_url`; `first_seen_at`, `last_seen_at`, `is_active` |
| `listing_snapshots` | One row per listing **per ingest run** (history) |
| `market_snapshots_daily` | Suburb medians by date, listing_type, property_type |
| `ingest_runs` | Run metadata and counts |

After two ingest runs on existing JSON: **14,381 active listings**, **28,762 snapshots** (compounding verified).

Run:

```bash
python -m analytics.run_pipeline      # ingest + daily metrics + export
python -m analytics.ingest              # ingest + export only
python -m analytics.daily_metrics       # suburb snapshots only
```

### 4. Full scrape orchestrator

```bash
python -m scraper.scrape_all
```

Runs all 8 Python scrapers in sequence (PropertyBook ×3, Property.co.zw ×3, Classifieds ×2). Use from project root with `-m` so imports resolve.

**Recommended daily flow (for n8n / cron later):**

```bash
python -m scraper.scrape_all
python -m analytics.run_pipeline
npm run analytics:build    # optional: market_metrics, cities, rankings
```

### 5. Normalization updates

- `analytics/clean_data.py` — added `normalize_listing_record()` with `source`, land fields, `residential_land` type; shared by ingest.
- `scraper/property_co_common.py` — `normalize_city()` for Harare/Bulawayo regions (used by PCO + Classifieds).

### 6. Supabase migration (not wired yet)

- `supabase/migrations/001_history.sql` — Postgres equivalent of SQLite schema + public read RLS policies.
- Ready for future sync from ingest or direct Postgres writes on Oracle VM / Supabase.

---

## Data inventory (all sources)

| File | Source | Type | Notes |
|---|---|---|---|
| `rentals.json` | PropertyBook | rent | |
| `sales.json` | PropertyBook | sale | houses/flats |
| `land_for_sale.json` | PropertyBook | sale | residential land |
| `property_co_rentals.json` | Property.co.zw | rent | |
| `property_co_sales.json` | Property.co.zw | sale | |
| `property_co_land_for_sale.json` | Property.co.zw | sale | land |
| `classifieds_rentals.json` | Classifieds | rent | rooms + houses + flats |
| `classifieds_sales.json` | Classifieds | sale | land + houses + flats |

**Pipeline exports (from DB, for legacy analytics):**

- `clean_rentals.json`, `clean_sales.json`, `clean_land.json`
- `market_metrics.json`, `cities.json`, `rankings.json`

---

## Architecture decisions discussed (not implemented)

1. **Combined scraper** — orchestrator exists (`scrape_all.py`); merge into one JSON optional.
2. **n8n on Oracle Cloud VM** — schedule scrape + ingest; notifications per pipeline step.
3. **Supabase** — store normalized data + serve site via REST/`supabase-js` (preferred over self-hosted Postgres for API).
4. **PocketBase** — alternative self-hosted backend; not chosen.
5. **RentCast product path** — Phase 2 (history) started; Phase 3 (estimates/comps) needs months of daily snapshots.

---

## Legacy / deprecated (do not use)

| File | Status |
|---|---|
| `scraper/normalize.js` | **Obsolete** — expects flat `data/listings.json` array; current file is nested Firecrawl shape |
| `scraper/aggregate.js` | **Obsolete** — writes `suburbs.json`; superseded by Python analytics |
| `scraper/scrape.js` | **Missing** — `npm run scrape` / `npm run build` will fail |
| `data/listings.json` | Old Firecrawl sample; not part of current pipeline |
| `data/suburbs.json` | Empty `[]`; `public/app.js` still references it — needs wiring to new metrics |

---

## npm scripts (package.json)

| Script | Command |
|---|---|
| `scrape:all` | All Python scrapers |
| `pipeline:run` | Historical ingest pipeline |
| `pipeline:ingest` | Ingest only |
| `pipeline:daily` | Daily market snapshots only |
| `analytics:build` | clean → metrics → cities → rankings |
| ~~`build`~~ | Broken (references missing `scrape.js` + legacy JS) |

---

## Known issues / gaps

1. **`public/app.js`** reads `data/suburbs.json` — not populated by new pipeline; use `market_metrics.json` or export from `market_snapshots_daily`.
2. **`analytics/clean_data.py` main()** still only reads PropertyBook `rentals.json` + `sales.json` — full multi-source clean happens in `ingest.py`.
3. **42 Classifieds sales** had null price (POA/negotiable) — skipped by ingest normalization.
4. **Cross-source duplicates** — same property on two portals remains two rows (dedupe by URL only, per source).
5. **Git:** scrapers should run as `python -m scraper.*` from project root (avoids `scraper/scraper.py` import shadowing if present).
6. **Historical backfill** — first ingest sets `first_seen_at` to run date; true history starts from **second daily run** onward.

---

## Suggested next steps

1. **Daily automation** — n8n on Oracle VM: `scrape_all` → `run_pipeline` → Slack/email notifications.
2. **Supabase** — apply `001_history.sql`, add `ingest_supabase.py` mirroring SQLite ingest.
3. **Frontend** — point dashboard at `market_metrics.json` or Supabase; remove dependency on `suburbs.json`.
4. **Cleanup** — remove or archive `normalize.js`, `aggregate.js`; fix `package.json` `build` script.
5. **Price change analytics** — query `listing_snapshots` for trails and time-on-market once daily runs accumulate.
6. **Optional:** export `market_snapshots_daily` to JSON for static charts without DB access.

---

## Quick verification commands

```bash
# Scraper smoke test (page 1)
python -c "from scraper.classifieds_common import build_session, fetch_page, parse_listing_card; ..."

# Full pipeline on existing JSON (no scrape)
python -m analytics.run_pipeline

# DB stats
python -c "import sqlite3; c=sqlite3.connect('data/easishop.db'); print(c.execute('select count(*) from listing_snapshots').fetchone())"
```

---

Generated: 2026-06-14
