# Session Handover — 2026-06-28 (F2 trends + classifieds price fix)

## Goal

Ship **F2 price & activity trends** on suburb/city pages (roadmap core trio after F0+F1). Fix systematic **classifieds.co.zw rent price errors** (ZIG amounts scraped as USD).

**Parent roadmap:** [2026-06-27-market-intelligence-roadmap.md](./2026-06-27-market-intelligence-roadmap.md)  
**Prior session:** [2026-06-28-f0-f1-segment-explore-polish.md](./2026-06-28-f0-f1-segment-explore-polish.md)

---

## Ship status

| Feature | Status |
| ------- | ------ |
| **F2** Price & activity trends | ✅ Shipped |
| **F2 polish** City movers rent/sale toggle | ✅ Shipped |
| **Classifieds ZIG→USD price fix** | ✅ Shipped (scraper + clean + repair script) |
| **F3** Fair value badges | ⏭ Next |
| **F6** Market movers rankings | Unblocked (trends API exists) |

---

## F2 — Price & activity trends

### Problem

Daily pipeline writes `market_snapshots_daily` but web showed only latest medians. No historical charts.

### Delivered

**API**

| Route | Purpose |
| ----- | ------- |
| `GET /api/markets/[marketId]/trends?range=90d&mode=rent\|buy` | Median price + listing count series, `% change` |
| `GET /api/cities/[city]/trend-movers?range=90d&mode=rent\|buy` | Top rising/falling suburbs by median change |

**Data layer**

- Supabase `market_snapshots_daily` when configured (Option A from roadmap)
- Local fallback: `analytics/trends_fetch.py` reads `data/easishop.db` via Python CLI (dev / no Supabase)
- Aggregates across property types per date (weighted mean of segment medians)

**Web UI**

| Area | Path |
| ---- | ---- |
| Types | `web/src/lib/types.ts` — `MarketTrendPoint`, `MarketTrendsPayload`, `TrendMover` |
| Helpers | `web/src/lib/trends.ts` — range, `% change`, movers, chart date format |
| Fetch | `web/src/lib/data-server.ts` — `fetchMarketTrends`, `fetchCityTrendMovers` |
| Chart | `web/src/components/markets/trend-chart.tsx` — Recharts area (price + supply) |
| Suburb | `web/src/components/markets/suburb-trends-section.tsx` — 30d/90d/180d + rent/sale |
| City | `web/src/components/cities/city-trend-movers.tsx` — 90d movers + **rent/sale toggle** |
| Wired | `suburb-profile.tsx`, `city-dashboard.tsx` |
| Docs | `methodology/page.tsx`, `metric-tooltips.ts` |

**Not in v1 (deferred)**

- Segment-filtered trends (type/bed on chart)
- DOM trend line
- `property_type = 'all'` pipeline rollup / `007_trends_rollup.sql`
- Sparklines on compare (F5 v2)

### Verified (local)

- `easishop.db`: **16,715** snapshot rows, dates **2026-06-14 → 2026-06-28**
- Borrowdale rent trends: 14 daily points; local CLI + API path tested
- `npm run build` (web) passes

---

## Classifieds rent price fix (ZIG mislabeled as USD)

### Problem

Classifieds rental cards often stored **ZIG equivalents in USD fields** (≈26–27.5× actual rent). Example: [mt-hampden-house-2382608](https://www.classifieds.co.zw/listings/mt-hampden-house-2382608) scraped as **$52,250/pm**; actual rent **~$1,900–2,000/pm**.

~**69** rentals in `classifieds_rentals.json` had price > $10k; most were ZIG errors, not real rents.

### Root cause

1. Scraper read `.usd-price-tooltip` first — sometimes ZIG, not USD
2. No reconciliation when description says `USD X per month`

### Delivered

| Change | Path |
| ------ | ---- |
| Prefer `.pull-left.price` (`$X per month`) over tooltip | `scraper/classifieds_common.py` — `extract_card_price()` |
| Description + ZIG reconciliation | `analytics/price_utils.py` — `reconcile_classifieds_rent_price()`, `infer_usd_from_zig_scrape()` |
| Classifieds-only clean path | `analytics/clean_data.py` (`source == "classifieds"`) |
| One-shot JSON repair | `analytics/repair_classifieds_rentals.py` |
| npm script | `npm run analytics:repair-classifieds` |

**ZIG detection:** scraped price must be an exact (±$1) multiple of **27.5**; corrected USD must fall in **$150–$6,000**. Description patterns include `USD 2,000 per month`, `$2,000 per month`, `2,000 per month`.

### Repair run (this session)

On `data/classifieds_rentals.json`:

- **56** prices corrected (e.g. Mt Hampden $52,250 → $2,000)
- **16** listings removed (sale prices in rental feed — $3.8M+, $20M+)
- **792** kept (was 808)

Highest remaining rents ~$6.5k–$7.7k (plausible).

### Still open

- **`clean_rentals.json` / Supabase / metrics** not refreshed this session — run pipeline after merge
- **Suburb mismatch** on some classifieds listings (e.g. title "Mt Hampden" vs description "Goodhope") — not fixed; needs location parsing (F9-adjacent)
- Re-scrape may reintroduce bad rows until repair runs again (scraper fix reduces but ZIG edge cases may remain)

---

## Key files (quick index)

```
# F2 trends
web/src/lib/trends.ts
web/src/lib/data-server.ts                    # fetchMarketTrends, fetchCityTrendMovers
web/src/app/api/markets/[marketId]/trends/route.ts
web/src/app/api/cities/[city]/trend-movers/route.ts
web/src/components/markets/trend-chart.tsx
web/src/components/markets/suburb-trends-section.tsx
web/src/components/cities/city-trend-movers.tsx
analytics/trends_fetch.py                     # local SQLite fallback

# Classifieds prices
analytics/price_utils.py
analytics/repair_classifieds_rentals.py
scraper/classifieds_common.py                 # extract_card_price
analytics/clean_data.py
data/classifieds_rentals.json                 # repaired in repo (792 rows)
```

---

## Verify (manual)

**F2**

1. `cd web && npm run dev`
2. `/cities/harare/borrowdale` — Market trends section: 90d rent chart + supply chart; toggle 30d/180d and sale
3. `/cities/harare` — 90-day movers card; switch Rent / Sale
4. `GET /api/markets/harare_borrowdale/trends?range=90d&mode=rent` — JSON with `points`, `pct_change_median`

**Classifieds prices**

1. Mt Hampden listing in `classifieds_rentals.json` → `price: 2000`
2. After pipeline: no classifieds rent in DB/metrics with price > ~$8k unless genuinely luxury

---

## Commands

```powershell
cd C:\Users\Katiyo\Documents\GitHub\propo
.\.venv\Scripts\Activate.ps1

# After scrape — fix classifieds JSON if needed
npm run analytics:repair-classifieds

# Refresh DB + dashboard (needed for clean_rentals + metrics)
npm run pipeline:ingest          # local SQLite history
npm run pipeline:supabase        # cloud mirror + sync_dashboard
npm run analytics:build:db       # metrics from DB

# Daily history (trends depend on this)
npm run daily

# Web
cd web
npm run dev
npm run build
```

**Production web:** needs `NEXT_PUBLIC_SUPABASE_URL` + anon key for trends API; without Supabase, local dev falls back to `easishop.db` via Python.

---

## Suggested next session

1. **F3** — fair value badges on `listing-card.tsx` (`fair-value.ts`, segment median lookup)
2. **F8 slice** — sample size badge on suburb profile (pairs with F3)
3. **Pipeline refresh** — ingest repaired classifieds + rebuild metrics so Explore/medians reflect fixed rents
4. **F6** — movers rankings tab using trends API (city card is a teaser only)

---

## Roadmap checkbox updates (F2)

Mark done in [2026-06-27-market-intelligence-roadmap.md](./2026-06-27-market-intelligence-roadmap.md):

- F2 web files listed under "Files to touch"
- Ship status table: F2 ✅, next F3
