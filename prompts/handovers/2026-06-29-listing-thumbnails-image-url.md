# Session Handover — 2026-06-29 (Listing thumbnails + `image_url`)

## Goal

Fix **duplicate thumbnails** on “Good value listings” (and other listing cards) — especially classifieds.co.zw listings that all showed the same **agency logo** instead of property photos.

**Parent roadmap:** [2026-06-27-market-intelligence-roadmap.md](./2026-06-27-market-intelligence-roadmap.md) (listings UX)  
**Prior session:** [2026-06-29-f3-fair-value-movers-seo.md](./2026-06-29-f3-fair-value-movers-seo.md)

---

## Ship status

| Feature | Status |
| ------- | ------ |
| **UI** Skip agency branding URLs as thumbnails | ✅ Shipped |
| **UI** Dedupe repeated thumbnails in value listings grid | ✅ Shipped |
| **Scraper** Classifieds carousel photo extraction | ✅ Shipped |
| **Pipeline** `image_url` column + normalize on ingest | ✅ Shipped |
| **Supabase migration** `007_listing_image_url.sql` | ✅ Added (apply in prod) |
| **Backfill** `image_url` for existing DB rows | ⏭ Needs re-scrape + ingest |

---

## Problem

“Good value listings” on suburb profiles showed **four identical images** when multiple classifieds listings came from the same agency.

### Root cause

| Layer | Issue |
| ----- | ----- |
| **DB** | No `image_url` column; listings had `agency_logo` only |
| **Classifieds** | `agency_logo` = agency brand mark (`/agency-logos/thumb/...`) — same for all listings from one agency |
| **Propertybook** | `agency_logo` field often holds the **listing photo** (`images.propertybook.co.zw/medium/...`) — worked by accident |
| **Web** | `ListingThumbnail` used `listing.image_url ?? listing.agency_logo` with no distinction |

Carousel HTML on classifieds **does** contain real photos (`/storage/.../medium/image-1.webp`) in `div.carousel[data-images]` — we were not scraping them.

---

## Delivered

### 1. Immediate UI fix (works without re-scrape)

| Area | Path |
| ---- | ---- |
| Heuristics | `web/src/lib/listings.ts` — `isAgencyBrandingUrl()`, `resolveListingThumbnailUrl()`, `dedupeListingsByThumbnail()` |
| Card | `web/src/components/listings/listing-card.tsx` — thumbnail via resolver |
| API layer | `web/src/lib/data-server.ts` — resolver on Supabase + local JSON fallback; selects `image_url` when present |
| Grid dedupe | `web/src/components/listings/suburb-value-listings.tsx` — skip duplicate thumbnail URLs in same block |

**Behaviour**

- Classifieds `/thumb/` and `/agency-logos/` URLs → **Home placeholder** (no more repeated logos).
- Propertybook `/medium/` listing photos → still shown (not treated as branding).
- Classifieds `/medium/` carousel paths → shown when `image_url` is populated.

### 2. Scraper + pipeline (populates `image_url` on next scrape)

| Area | Path |
| ---- | ---- |
| Shared Python helpers | `analytics/listing_images.py` — mirrors TS heuristics + `extract_classifieds_carousel_image()` |
| Classifieds scraper | `scraper/classifieds_common.py` — `extract_listing_image_from_carousel()`, `image_url` on record |
| Normalize | `analytics/clean_data.py` — `resolve_listing_image_url()` in `normalize_listing_record()` |
| SQLite | `analytics/history_db.py` — `image_url` column, migration, upsert, view refresh |
| Supabase ingest | `analytics/supabase_db.py` — `image_url` in upsert SQL |
| Migration | `supabase/migrations/007_listing_image_url.sql` |

Propertybook scrapers unchanged — `resolve_listing_image_url()` at normalize time still picks listing photos from `agency_logo` when appropriate.

---

## Key files (quick index)

```
# Web (immediate fix)
web/src/lib/listings.ts
web/src/components/listings/listing-card.tsx
web/src/lib/data-server.ts
web/src/components/listings/suburb-value-listings.tsx

# Scraper + pipeline
analytics/listing_images.py
scraper/classifieds_common.py
analytics/clean_data.py
analytics/history_db.py
analytics/supabase_db.py
supabase/migrations/007_listing_image_url.sql
```

---

## Verify (manual)

**UI (no re-scrape required)**

1. `cd web && npm run dev`
2. Open a suburb with classifieds-heavy value listings (e.g. Harare suburb profile).
3. “Good value listings” — **no repeated agency logos**; classifieds without photos show **Home icon** placeholder.
4. Propertybook listings still show property photos where `agency_logo` is a `/medium/` image.

**After re-scrape**

1. Run `npm run pipeline:ingest` (and `npm run pipeline:supabase` if using cloud).
2. Check SQLite / Supabase: `SELECT image_url FROM listings WHERE source = 'classifieds' AND image_url != '' LIMIT 5` — should contain `/medium/` paths.
3. Same suburb page — classifieds cards should show **real listing photos** where carousel had images.

**Build**

```powershell
cd web
npm run build
```

Passes (TypeScript clean; harmless Stack Sans Notch font warning).

---

## Commands

```powershell
cd C:\Users\Katiyo\Documents\GitHub\propo
.\.venv\Scripts\Activate.ps1

# Apply Supabase migration first (prod)
# supabase db push  OR run 007_listing_image_url.sql in SQL editor

# Re-scrape + populate image_url
npm run scrape          # or your usual scrape entrypoint
npm run pipeline:ingest
npm run pipeline:supabase

# Web
cd web
npm run dev
npm run build
```

---

## Still open (not this session)

| Item | Notes |
| ---- | ----- |
| **`image_url` backfill** | Existing rows have empty `image_url` until re-scrape; UI placeholder is intentional interim |
| **Movers confidence filter** | Rankings use `RANKINGS_MIN_CONFIDENCE = 40`; city trend movers API does not — planned F6 |
| **Snapshot repair on Supabase** | Local `npm run analytics:repair-snapshots` may be needed in prod if ZIG medians still skew trends (see F2/F3 handovers) |
| **Property Co / other sources** | No carousel scrape yet; rely on agency field heuristics or future scraper work |

---

## Suggested next session

1. **Re-scrape + ingest** — populate `image_url` in prod after applying migration `007`
2. **F6** — movers rankings tab + confidence filter on `fetchCityTrendMovers`
3. **F8** — sample size / transparency badges on suburb profile (pairs with F3 fair value)
