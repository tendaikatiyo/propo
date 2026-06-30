# Session Handover — 2026-06-30 (Full pipeline run + scraper/migration fixes)

## Goal

Run the **full daily pipeline** (scrape → local SQLite ingest → analytics build → Supabase ingest + dashboard sync) to backfill **`image_url`** and refresh metrics after the 2026-06-29 listing-thumbnails work.

**Parent:** [2026-06-29-listing-thumbnails-image-url.md](./2026-06-29-listing-thumbnails-image-url.md)  
**Prior feature work:** [2026-06-29-f3-fair-value-movers-seo.md](./2026-06-29-f3-fair-value-movers-seo.md)

---

## Ship status

| Item | Status |
| ---- | ------ |
| Full scrape (`scrape:all`) | ✅ Completed |
| Local ingest + analytics build | ✅ Completed |
| Supabase ingest + dashboard sync | ✅ Completed (after migration apply) |
| **`normalize_city` import fix** (`classifieds_rentals`) | ✅ Fixed locally — **uncommitted** |
| Migration `007_listing_image_url.sql` on prod Supabase | ✅ Applied this session |

---

## What happened

### 1. Classifieds rentals scraper crash

**Symptom:** `npm run daily` / `scrape:all` failed on `scraper.classifieds_rentals`:

```
NameError: name 'normalize_city' is not defined
  File scraper/classifieds_common.py, line 313, in parse_listing_card
    city = normalize_city(region)
```

**Cause:** `parse_listing_card()` calls `normalize_city(region)` (added with carousel/`image_url` work in f3) but the import was missing. Property Co scrapers already import from `property_co_common`.

**Fix:**

```python
from scraper.property_co_common import normalize_city
```

**File:** `scraper/classifieds_common.py` (line ~19)

After fix, classifieds rentals scrape completed → **790** rows in `data/classifieds_rentals.json`; classifieds sales → **4154** rows.

---

### 2. Supabase ingest blocked on `image_url`

**Symptom:** `run_pipeline_cloud` / `pipeline:supabase` failed on first rentals batch:

```
psycopg2.errors.UndefinedColumn: column "image_url" of relation "listings" does not exist
```

**Cause:** Code from f3 (`analytics/supabase_db.py`, `analytics/clean_data.py`) writes `image_url`, and migration `supabase/migrations/007_listing_image_url.sql` exists in repo, but **remote Supabase had not run migration 007** yet.

**Fix:** Apply migration in Supabase SQL editor (or `supabase db push`):

```sql
alter table listings
    add column if not exists image_url text;
```

**Note:** Local SQLite auto-migrates via `history_db.py` (`ALTER TABLE listings ADD COLUMN image_url TEXT`) — only Postgres needed manual apply.

Second `npm run pipeline:supabase` run succeeded.

---

## Pipeline end state (2026-06-30)

| Stage | Result |
| ----- | ------ |
| Raw ingest sources | propertybook + property_co + classifieds (13,575 records processed) |
| Active listings (SQLite + Supabase) | **13,575** |
| Clean exports | **2,070** rentals · **6,975** sales · **4,530** land |
| `market_metrics.json` | **379** markets |
| `cities.json` | **66** cities |
| Supabase snapshots | **179,120** total; **1,325** daily market rows for 2026-06-30 |
| Dashboard sync | 379 `market_metrics`, 66 `cities`, rankings payload |

Deactivated this Supabase run: **1,185** listings (stale vs previous scrape).

---

## Key files (this session)

```
scraper/classifieds_common.py          # + normalize_city import (fix)
supabase/migrations/007_listing_image_url.sql   # apply before Supabase ingest
analytics/supabase_db.py               # upsert includes image_url (f3)
analytics/listing_images.py            # carousel + branding heuristics (f3)
analytics/history_db.py                # SQLite image_url migration (f3)
```

---

## Verify (manual)

**Scraper fix**

```powershell
cd C:\Users\Katiyo\Documents\GitHub\propo
.\.venv\Scripts\Activate.ps1
python -m scraper.classifieds_rentals
# Should complete without NameError
```

**`image_url` populated (after scrape + ingest)**

```sql
-- Supabase SQL editor
SELECT listing_url, source, image_url
FROM listings
WHERE source = 'classifieds' AND image_url != ''
LIMIT 10;
```

Expect `/medium/` or `/large/` classifieds storage paths where carousel had photos.

**Web**

1. `cd web && npm run dev`
2. Suburb with classifieds listings → “Good value listings” shows **property photos** (not repeated agency logos) where `image_url` is set.
3. Fair value badges still work (F3).

---

## Commands

```powershell
cd C:\Users\Katiyo\Documents\GitHub\propo
.\.venv\Scripts\Activate.ps1

# Full daily (scrape + cloud pipeline)
npm run daily

# Or step-by-step
npm run scrape:all
npm run pipeline:ingest
npm run analytics:build:db
npm run pipeline:supabase      # requires migration 007 on Supabase
```

**Before any Supabase ingest on a fresh DB:** apply migrations `001`–`007` in order (`prompts/handovers/2026-06-25-days-on-market-metrics.md` for 003–004 notes).

---

## Uncommitted / follow-up

| Item | Notes |
| ---- | ----- |
| **`normalize_city` import** | One-line fix in `classifieds_common.py` — commit before next deploy |
| **`data/*.json`** | Refreshed by this pipeline run; commit only if you want repo snapshots updated |
| **VM / CI** | Ensure migration 007 is applied on any Supabase instance before `pipeline:supabase` |
| **Classifieds `image_url` fill rate** | Many classifieds rows still have empty `image_url` when carousel has no `/medium/` image — placeholder UI is expected |
| **F6 movers confidence** | City trend movers still lack rankings-style confidence filter (see F3 handover) |

---

## Suggested next session

1. **Commit** `normalize_city` fix (+ optional data refresh commit).
2. **Spot-check** classifieds thumbnail coverage on a few suburb pages in prod.
3. **F8** — sample size / transparency badges on suburb profile (roadmap next after F3).
4. **F6** — movers rankings tab using trends API + confidence filter.
