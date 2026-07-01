# Session Handover — 2026-07-01 (F7 + F8 + F9)

## Shipped

### F7 — Affordability insight cards ✅

Home page **Budget insights** section (between budget controls and Top matches):

- Up to 2 in-budget suburbs + 1 stretch option (15% band)
- Template copy: yield/DOM for in-budget; stretch tradeoff (“Higher yield, 12% over budget”, etc.)
- Segment-aware medians via `filterMarkets` + `priceForFilters`
- **Explore matches** CTA preserves mode/budget/type; cards link to suburb profile with segment query params
- Updates live when budget slider, mode, or property type changes

### F8 — Transparency layer ✅

Data quality surfaced on suburb profile, Explore, and methodology:

- **`SampleSizeBadge`** — “Based on N active rental/sale listings” with limited-data tooltip when n &lt; `MIN_SEGMENT_LISTINGS` (3)
- **`ScopeLabel`** — “All property types” vs “2-bed flats only” (`dataScopeLabel` in `segments.ts`)
- **Suburb profile header** — scope, rent/sale sample counts, `DataFreshnessPill` with “Market data · …” prefix
- **`ConfidenceBadge`** — optional `sampleCount` / `sampleMode` enriches tooltip
- **Explore** — `exploreScopeDescription()` explains aggregate vs segment medians and fallback behaviour
- **Methodology** — new **Data limits** section (no borehole/pool/security attributes; segment thresholds; fair-value rules)

### F9 — `market_id` on listings ✅

Reliable join between listings and `market_metrics`:

- **`build_market_id(city, suburb)`** in `analytics/listing_utils.py` — canonical key (`harare_borrowdale`)
- **`clean_data.py`** uses shared builder after `normalize_city` / `normalize_suburb`
- Ingest already upserts `market_id` via `normalize_listing_record` (no ingest change required)
- **`008_listings_market_id.sql`** — partial index on active listings + SQL backfill for null rows
- **`analytics/backfill_market_id.py`** — Python backfill for SQLite + Supabase (`npm run analytics:backfill-market-id`)
- **Web** — `fetchListings` prefers `market_id` filter; city/suburb string fallback when `market_id` missing on row
- **`/api/listings?market_id=`** — suburb value listings + report pass `market.market_id`
- **`useMarketLookup`** — fair-value resolves by `listing.market_id` when city/suburb strings mismatch

## Key files

| Area | Path |
| ---- | ---- |
| F7 logic | `web/src/lib/affordability-insights.ts` |
| F7 UI | `web/src/components/home/affordability-insights.tsx`, `home-page.tsx` |
| F8 badges | `web/src/components/markets/sample-size-badge.tsx` |
| F8 suburb | `web/src/components/markets/suburb-profile.tsx` |
| F8 Explore | `web/src/components/markets/explore-results.tsx`, `web/src/lib/metric-tooltips.ts` |
| F8 scope | `web/src/lib/segments.ts` — `dataScopeLabel()` |
| F9 keys | `analytics/listing_utils.py` — `build_market_id()` |
| F9 backfill | `analytics/backfill_market_id.py`, `supabase/migrations/008_listings_market_id.sql` |
| F9 web | `web/src/lib/data-server.ts`, `listings-client.ts`, `use-market-lookup.ts` |
| F9 API | `web/src/app/api/listings/route.ts` |

## Verify

```powershell
cd web
npm run dev
# Home → change budget slider → Budget insights cards update
# /explore → header explains scope / segment vs aggregate
# /cities/harare/borrowdale → sample size + scope + freshness in header
# /methodology → Data limits section
# Suburb page → Good value listings populated (market_id join)

cd ..
npm run analytics:backfill-market-id -- --target sqlite
# Apply 008 on Supabase SQL editor, then:
npm run analytics:backfill-market-id -- --target supabase
npm run pipeline:supabase
```

## Ops notes

- **Migration 008** — apply on Supabase before relying on indexed `market_id` queries in production. Column existed from `001_history.sql`; migration adds index + backfill.
- Local SQLite backfill reported **0 updates** (market_id already set from prior ingest).
- SQL backfill in 008 uses slugify-only logic; Python backfill applies full `normalize_city` (e.g. Harare North → Harare). Prefer Python backfill + regular ingest for accuracy.

## Deferred

- [ ] Sample-size context on rankings / mover cards (F8 optional polish)
- [ ] F10 analytics MVP
- [ ] Segment-filtered trends (F2 v2)
- [ ] Compare trend sparklines (F5 v2)

## Next recommended

**F10** analytics MVP (optional) — or v2 polish above. Core roadmap **F0–F9** is complete.
