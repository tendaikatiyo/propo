# Session Handover — 2026-06-25 (web UX, listings, explore)

## Project vision (unchanged)

**RentCast-style property index for Zimbabwe** — browse suburbs by budget, compare markets, surface active listings from scraped data, with analytics (yields, DOM, rankings) backed by `data/*.json` and optional Supabase.

---

## Workspace

- **App:** `web/` (Next.js 16, shadcn, TanStack Query, Zustand pins)
- **Data:** `../data/` (`market_metrics.json`, `clean_rentals.json`, `clean_sales.json`, `rentals.json` / `sales.json` for images, `rankings.json`, `cities.json`)
- **Hero asset:** `web/public/harare_skyline_bg2.png` (active); `harare_skyline_bg.png` is legacy
- **Handover folder:** `prompts/handovers/`

---

## What was built this session

### 1. App shell & navigation

| Change | Files |
|---|---|
| Desktop sidebar + mobile bottom nav | `web/src/components/layout/app-sidebar.tsx`, `app-shell.tsx` |
| Harare skyline hero with glass pill label | `web/src/components/layout/site-chrome.tsx` (`SiteHero`, `AppFooter`) |
| Back links on key pages | `web/src/components/layout/back-nav.tsx` — used on explore, cities, suburb, compare, rankings |
| Deleted old top header | `app-header.tsx` removed |

Hero uses **`/harare_skyline_bg2.png`**, taller viewport, softened gradient so the pill + headline read over the illustration.

### 2. Explore & filters

| Feature | Notes |
|---|---|
| Left filter sidebar (desktop) + sheet (mobile) | `filter-bar.tsx` → `ExploreFilterSidebar` / `ExploreFilterMobile` |
| Searchable city combobox, sorted by listing volume | `city-search-combobox.tsx` |
| Default city **Harare** | `use-explore-filters.ts`, `constants.ts` |
| Single property type (not multi-select) | `ExploreFilters.propertyType` |
| **Buy mode budget fix** — switching Rent/Buy resets budget ($800 rent / $250k buy); URL parsing uses `budgetForMode()` | `lib/explore.ts`, `use-explore-filters.ts`, `filter-bar.tsx` |
| Rent mode table hides sale/yield/opportunity columns | `lib/metric-tooltips.ts` `columnsForMode()`, `suburb-table.tsx` |
| **Right listings panel removed** (user rejected Facebook-style column) | `explore-listings-panel.tsx` deleted; explore is 2-col: filters + results |

### 3. Cities & suburb pages

| Feature | Files |
|---|---|
| Cities directory: search, sort by market size, listing counts | `cities-directory.tsx`, `cities/page.tsx` |
| City dashboard: suburb search, avg DOM (rent + sale), full metrics table | `city-dashboard.tsx` — `SuburbTable` with `layout="city"` |
| **Suburb 404 fix** — was only pre-rendering 200/387 suburbs | `cities/[city]/[suburb]/page.tsx`: all markets in `generateStaticParams`, `toSlug()`, `dynamicParams = true` |
| Suburb profile: **good value listings** (≤ median rent/sale, cheapest first) | `suburb-value-listings.tsx` on `suburb-profile.tsx` |
| Staggered loading skeletons | `page-loading.tsx`, `loading.tsx` on cities / explore / rankings / suburb routes |

**Build:** 452 static pages (378 suburb profiles) after fix.

### 4. Active listings API & UI

**Endpoint:** `GET /api/listings`

| Query param | Purpose |
|---|---|
| `mode` | `rent` \| `buy` |
| `budget` | Max price (with `budgetForMode` sanity) |
| `city`, `suburb` | Location filters |
| `type` | Property type |
| `tier` | `in` (≤ budget), `stretch` (budget–115%), `value` (≤ median) |
| `median` | For `tier=value` |
| `limit` | Default 4, max 12 |

**Data sources:** Supabase `listings` table if configured; else `clean_rentals.json` / `clean_sales.json` with images enriched from `rentals.json` / `sales.json` (`agency_logo` → `image_url`).

**UI surfaces:**

| Location | Component |
|---|---|
| Home (below “Top matches”) | `budget-listings.tsx` → `ListingCard` |
| Suburb detail | `suburb-value-listings.tsx` (rent + sale sections) |
| Explore | **No** inline listings (panel removed) |

Listing cards show thumbnail, price, location, beds, **days on market**, external link.

### 5. Rankings & geo filtering

| Rule | Implementation |
|---|---|
| Exclude non-ZW cities (Johannesburg, Port Shepston, Pretoria, etc.) | `lib/geo.ts` `EXCLUDED_CITIES`, `filterRankingsPayload()` in `fetchRankings()` |
| Rankings only suburbs with **≥ 40% confidence** | `RANKINGS_MIN_CONFIDENCE` in `constants.ts`, `lib/rankings.ts`, `rankings/page.tsx` |

Rankings payload has no `confidence_score` on entries — joined at serve time via `market_id` → `market_metrics`.

### 6. Other UX polish

- Color-graded confidence badges (`confidence-badge.tsx`)
- Table header tooltips (`metric-tooltips.ts`)
- Home budget section defaults to Harare; stretch/in-budget suburb cards
- `next.config.ts` — `images.remotePatterns` for `images.propertybook.co.zw`

---

## Key files (quick index)

```
web/src/
  app/
    api/listings/route.ts
    cities/[city]/[suburb]/page.tsx   # 404 fix, all static params
    rankings/page.tsx                  # confidence filter
    explore/loading.tsx                # skeleton routes
  components/
    listings/
      listing-card.tsx
      budget-listings.tsx
      suburb-value-listings.tsx
    layout/
      site-chrome.tsx                  # hero bg2
      back-nav.tsx
      page-loading.tsx
    explore/explore-page.tsx
    markets/suburb-table.tsx
  lib/
    data-server.ts                     # fetchListings tiers, rankings filter
    listings-client.ts
    explore.ts                         # budgetForMode
    geo.ts, rankings.ts
```

---

## Commands

```bash
cd web
npm run dev      # local preview
npm run build    # verify (452 pages as of this session)
```

Listings API can be slow on first request locally (loads full `clean_*.json`). Consider caching or DB-only in production.

---

## Known limitations / follow-ups

1. **Listings images** — from Propertybook scrape thumbnails (`agency_logo` in raw JSON), not always true property photos; fallback icon if missing.
2. **Suburb listing match** — filters by `suburb` string equality (case-insensitive); mismatches between `clean_*` and `market_metrics` suburb names may yield empty suburb listings.
3. **Explore listings** — intentionally removed from explore after panel UX test; only home + suburb pages show listings unless re-added inline.
4. **City table** — still shows sale/yield/DOM for all users on city pages (investor-oriented); only explore rent table was simplified.
5. **Git** — large binary `harare_skyline_bg2.png`; ensure committed if deploying hero change.

---

## Suggested next steps

- [ ] Wire explore stretch section to optional inline listing strip (if desired) without right panel
- [ ] Add `market_id` to listings export for more reliable suburb ↔ listing joins
- [ ] Cache `/api/listings` responses or pre-index by city/suburb for faster TTFB
- [ ] Per-city rankings on city dashboard still unfiltered by confidence (only national page filtered)
- [ ] Compare page / pin tray polish if users want more navigation from suburb → compare

---

## Agent transcript

Full chat: `agent-transcripts/f36d93d1-40ad-4583-a27d-966e13179560.jsonl`
