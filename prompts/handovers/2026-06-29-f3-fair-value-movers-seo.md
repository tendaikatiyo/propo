# Session Handover — 2026-06-29 (F3 fair value + movers fix + Open Graph SEO)

## Goal

Ship **F3 fair value badges** on listing cards, fix **city 90-day movers** (inflated rent / empty sale), and add **Open Graph + Twitter Card** metadata site-wide.

**Parent roadmap:** [2026-06-27-market-intelligence-roadmap.md](./2026-06-27-market-intelligence-roadmap.md)  
**Prior session:** [2026-06-28-f2-trends-classifieds-prices.md](./2026-06-28-f2-trends-classifieds-prices.md)

---

## Ship status

| Feature | Status |
| ------- | ------ |
| **F3** Fair value badges on listings | ✅ Shipped |
| **F2 polish** City movers logic fix | ✅ Shipped |
| **SEO** Open Graph + Twitter Cards | ✅ Shipped |
| **F8** Transparency (sample size badges) | ⏭ Next (pairs with F3) |
| **F6** Market movers rankings page | Unblocked |
| **F9** `market_id` on listings | Optional — improves fair-value suburb join |

---

## F3 — Fair value badges on listings

### Problem

Listings showed price with no context vs suburb/segment median (“is $720 fair for this suburb?”).

### Delivered

| Area | Path |
| ---- | ---- |
| Logic | `web/src/lib/fair-value.ts` — `fairValueLabel`, `resolveListingMedian`, `resolveFairValueForListing` |
| Market lookup | `web/src/hooks/use-market-lookup.ts` — fetches `/api/markets`, maps `city\|suburb` → `MarketMetric` |
| UI | `web/src/components/listings/listing-card.tsx` — green/amber badge + tooltip |
| Wired | `budget-listings.tsx` (lookup per listing), `suburb-value-listings.tsx` (passes `market`) |
| Tooltips | `web/src/lib/metric-tooltips.ts` — `FAIR_VALUE_TOOLTIP`, `fairValueTooltipDetail()` |

### Behaviour

- Resolves segment median via `resolveSegmentStats()` (type + bed); falls back to suburb-wide median when segment `n < MIN_SEGMENT_LISTINGS` (3).
- Badge only when `|pctDiff| >= 5%` and sample count ≥ 3.
- **Below:** green — “X% below typical rent/sale price”
- **Above:** amber — “X% above typical rent/sale price”
- Within 5% or no market match → no badge.

### Depends on

- F1 segment medians (shipped)
- F9 `market_id` on listings (optional — string suburb join works for most markets)

### Verify

1. Suburb profile → “Good value listings” — cards at/below median show badges when ≥5% off resolved median.
2. Home budget preview — badges appear when listing suburb matches a `market_metrics` row.
3. Listing at $600 where 2-bed flat median is $700 → ~14% below badge.

---

## City 90-day movers fix (F2 polish)

### Problem (reported)

- **Rent movers:** Top risers showed +110% style jumps (Kambanji, Houghton Park, Ballantyne Park) — misleading.
- **Sale movers:** Tab always empty on `/cities/harare`.

### Root causes

| Issue | Cause |
| ----- | ----- |
| Sale empty | `isPlausibleMover()` applied rent-only rule `median > $6,000` to **sale** snapshots — filtered out all normal sale medians ($100k+). |
| Rent inflated | (1) **Median of segment medians** per day — volatile when property mix shifts (cottage $350 → house-only $750 looks like +114%). (2) **First vs last single day** comparison. (3) Thin markets (2 listings) included. |

### Fix

| Change | Files |
| ------ | ----- |
| Rent-only $6k cap in plausibility | `web/src/lib/trends.ts`, `analytics/trends_fetch.py` |
| **Listing-count-weighted mean** when rolling up segments per day (not median of medians) | same |
| **Windowed comparison** — median of first 3 vs last 3 daily points | same |
| **Min 5 listings** in both windows | `MIN_MOVER_LISTINGS = 5` |
| Pass `listingType` into `computeMoversFromSeries` | `web/src/lib/data-server.ts` |

### After fix (local simulation, Harare)

- **Rent risers:** Ballantyne Park (+93%), Northwood (+74%), Kamfinsa (+50%) — Kambanji/Houghton Park dropped off.
- **Sale risers:** Amby, Meyrick Park, Westlea, etc. — sale tab populates.

Suburb trend **charts** also use weighted daily rollup (smoother series).

### Verify

1. `/cities/harare` → 90-day movers → switch **Rent** / **Sale** — both tabs show data when snapshots exist.
2. No more +116% thin-market artefacts dominating rent risers.

---

## Open Graph + SEO metadata

### Delivered

| Area | Path |
| ---- | ---- |
| Central helper | `web/src/lib/seo.ts` — `buildPageMetadata()`, `rootMetadata()`, `absoluteUrl()` |
| Root defaults | `web/src/app/layout.tsx` — `metadataBase`, title template |
| Per-page metadata | All routes: home, explore, compare, rankings, cities, methodology, legal |
| Dynamic | `cities/[city]/page.tsx`, `cities/[city]/[suburb]/page.tsx` — `generateMetadata` |

### Tags emitted

- `og:title`, `og:description`, `og:url`, `og:site_name`, `og:locale` (`en_ZW`), `og:type`, `og:image`
- Twitter `summary_large_image` + matching title/description/image
- Canonical URL per page
- `robots` index/follow defaults

### OG image

- **`/harare_skyline_bg2.png`** — same Harare skyline as home hero (`HERO_IMAGES.harare` in `web/src/lib/hero.ts`)
- Default alt: `Propo — Harare skyline illustration`
- Suburb pages override **alt** only; image stays Harare skyline.

### Production config

Set **`NEXT_PUBLIC_SITE_URL`** (e.g. `https://propo.fyi`) in Cloudflare Worker / env so `og:url` and `og:image` resolve to absolute URLs. Defaults to `https://propo.fyi` in code.

### Verify

- View page source or [opengraph.xyz](https://www.opengraph.xyz) on deployed URL — `og:image` points to `…/harare_skyline_bg2.png`.
- Suburb URL `/cities/harare/borrowdale` — unique title/description + canonical.

### Not done (optional later)

- Dedicated 1200×630 cropped OG asset (current skyline works; platforms may crop)
- `sitemap.xml` / `robots.txt` route
- JSON-LD `WebSite` schema

---

## Key files (quick index)

```
# F3 fair value
web/src/lib/fair-value.ts
web/src/hooks/use-market-lookup.ts
web/src/components/listings/listing-card.tsx
web/src/components/listings/budget-listings.tsx
web/src/components/listings/suburb-value-listings.tsx

# Movers fix
web/src/lib/trends.ts
web/src/lib/data-server.ts
analytics/trends_fetch.py

# SEO / OG
web/src/lib/seo.ts
web/src/lib/hero.ts                    # OG image source of truth
web/src/app/layout.tsx
web/src/app/**/page.tsx                # metadata on each route
```

---

## Commands

```powershell
cd C:\Users\Katiyo\Documents\GitHub\propo
cd web
npm run dev
npm run build
```

Production: ensure `NEXT_PUBLIC_SITE_URL` and Supabase vars are set on the Worker.

---

## Suggested next session

1. **F8 slice** — `sample-size-badge.tsx` on suburb profile (methodology note for segment medians)
2. **F6** — `/rankings` movers tab using trends API (city card is teaser only)
3. **F7** — affordability insight cards on home
4. **Pipeline refresh** — repaired classifieds + `repair_market_snapshots` on Supabase if historical ZIG rows still skew trends
5. **F9** — `market_id` backfill on listings for fair-value join reliability

---

## Roadmap checkbox updates

Mark done in [2026-06-27-market-intelligence-roadmap.md](./2026-06-27-market-intelligence-roadmap.md):

- **F3** — fair value files + verify checklist
- Ship status table: F3 ✅, next F8 → F6
- Success criterion #2 (“is this listing fairly priced?”) ✅
