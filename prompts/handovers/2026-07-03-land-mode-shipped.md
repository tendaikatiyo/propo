# Session Handover — 2026-07-03 (Land mode shipped)

**Status:** Land mode complete end-to-end (Phases 1–5) + city listing counts fixed  
**Plan doc (full spec):** [2026-07-03-land-mode-plan.md](./2026-07-03-land-mode-plan.md)

---

## Summary

Added **Rent | Buy | Land** as a third top-level explore mode, standardized on **$/sqm**. Land stays separate from residential `market_metrics` so house medians are not polluted.

Also fixed **city listing counts** on `/cities` and explore dropdowns: totals now include land, and dropdown counts follow the active mode (rent / buy / land).

---

## What shipped

### Land mode (Phases 1–5)

| Phase | Scope |
| ----- | ----- |
| **1 — Analytics** | `land_utils.py`, `land_metrics.py` → `data/land_metrics.json`; Supabase `land_metrics` table |
| **2 — Types / filters** | `ExploreMode = "rent" \| "buy" \| "land"`; $/sqm budget; `land-explore.ts` |
| **3 — Explore UI** | Mode toggle, land suburb table/cards/list, home + explore wired to land metrics |
| **4 — Listings** | `GET /api/listings?mode=land`; listing cards with stand size + $/sqm |
| **5 — Intelligence** | Compare land mode, land rankings (via Land lens), fair-value badges, suburb land metrics/trends, `?mode=land` suburb view |

### City listing counts (same session)

| Issue | Fix |
| ----- | --- |
| `/cities` totals ignored land | `city_metrics.py` adds `land_count`; `cityListingTotal()` sums rent + sale + land |
| Dropdown counts never changed with mode | `cityListingTotal(city, mode)` — rent / buy / land per explore mode |
| Supabase sync failed without column | `fetchCities()` enriches from `land_metrics` at read time until migration **013** applied |

**Example (Harare):** was **7,308** (rent+sale only) → now **10,208** (includes 2,900 land).

---

## Try it

| Flow | URL |
| ---- | --- |
| Explore land | `/explore?mode=land&budget=50&city=Harare` |
| Land listings API | `/api/listings?mode=land&budget=50&city=Harare&limit=4` |
| Compare land | `/compare?mode=land` (pin 2+ suburbs) |
| Land rankings | `/rankings?mode=land` (Leaderboards tab) |
| Suburb land view | `/cities/harare/borrowdale?mode=land` |
| Cities directory | `/cities` — totals include land |

---

## Supabase migrations — apply if not done

Run in SQL editor (order matters):

| Migration | Purpose |
| --------- | ------- |
| `011_land_metrics.sql` | `land_metrics` table (suburb $/sqm aggregates) |
| `012_land_snapshots_daily.sql` | `land_snapshots_daily` (trend charts) |
| `013_cities_land_count.sql` | `cities.land_count` column |

After **013**, sync dashboard data:

```bash
npm run analytics:build:db
python -m analytics.sync_dashboard
```

Or full pipeline:

```bash
python -m analytics.run_daily
```

**Note:** Until **013** is applied, `sync_cities` will error on `land_count`. The web app still shows correct totals via `fetchCities()` merging `land_metrics` at read time.

---

## Pipeline / data flow

```
Scrapers → ingest (SQLite + Supabase listings)
         → export_current_json() → clean_land.json
         → analytics:metrics + analytics:land + analytics:cities + analytics:rankings
         → land_daily_metrics (SQLite land_snapshots_daily)
         → sync_dashboard (market_metrics, land_metrics, cities, rankings)
```

**npm scripts:**

| Script | What |
| ------ | ---- |
| `npm run analytics:land` | Rebuild `land_metrics.json` |
| `npm run analytics:build:db` | metrics + land + cities + rankings (no clean step) |
| `npm run daily` | scrape + full `run_pipeline_cloud` |

**Land excluded from residential paths (intentional):**

- `clean_sales.json` / `market_metrics` — no `residential_land`
- Land only in `clean_land.json` + `land_metrics`

---

## Key files

| Area | Path |
| ---- | ---- |
| Land normalization (Python) | `analytics/land_utils.py` |
| Land suburb metrics | `analytics/land_metrics.py` |
| Land daily snapshots | `analytics/land_daily_metrics.py` |
| City metrics (+ land_count) | `analytics/city_metrics.py` |
| Land rankings in JSON | `analytics/rankings.py` (`land` key) |
| Dashboard sync | `analytics/sync_dashboard.py` |
| Explore mode / budget | `web/src/lib/mode.ts`, `constants.ts` |
| Land explore logic | `web/src/lib/land-explore.ts` |
| Land listings (TS) | `web/src/lib/land-listings.ts` |
| Land compare | `web/src/lib/land-compare.ts` |
| Fair value (land) | `web/src/lib/fair-value.ts` |
| City listing totals | `web/src/lib/geo.ts` → `cityListingTotal()` |
| Mode toggle | `web/src/components/filters/explore-mode-toggle.tsx` |
| Land suburb UI | `land-suburb-table.tsx`, `land-suburb-card.tsx`, `land-suburb-list.tsx` |
| Compare land | `compare-page.tsx`, `land-compare-table.tsx`, `land-compare-cards.tsx` |
| Rankings land tab | `web/src/components/rankings/rankings-page.tsx` |
| Suburb land section | `suburb-land-metrics.tsx`, `suburb-land-trends-section.tsx`, `suburb-land-listings.tsx` |
| City dropdown counts | `city-search-combobox.tsx` (passes `mode`) |

---

## Known limitations / v2 backlog

| Item | Notes |
| ---- | ----- |
| **Land trend charts** | Need several days of `land_snapshots_daily` from daily pipeline before lines are meaningful |
| **Min stand size filter** | Not in MVP; budget is $/sqm only |
| **Listings without size** | Excluded from $/sqm metrics; may still appear in raw land export |
| **City page cache** | `/cities` and `/api/cities` revalidate every 1h — hard refresh after pipeline if counts look stale |
| **Production sync** | Apply migrations **011–013** before expecting Supabase-backed land data everywhere |

---

## Open product decisions (from plan)

See [land-mode-plan § Open product decisions](./2026-07-03-land-mode-plan.md#open-product-decisions) — e.g. total budget + min size vs $/sqm-only, suburb page land section vs full `?mode=land` context (partially shipped: both exist).

---

## Related handovers

- [2026-06-14-scrapers-history-compounding.md](./2026-06-14-scrapers-history-compounding.md) — `clean_land.json` in pipeline
- [2026-06-25-web-ux-listings-explore.md](./2026-06-25-web-ux-listings-explore.md) — rent/buy explore patterns
- [2026-06-30-f4-f5-report-compare.md](./2026-06-30-f4-f5-report-compare.md) — compare page (extended for land)
- [2026-07-01-f6-movers-rankings.md](./2026-07-01-f6-movers-rankings.md) — rankings (land via lens since 2026-07-05)
- [2026-07-05-user-lens-shipped.md](./2026-07-05-user-lens-shipped.md) — user lens + segmented UI
