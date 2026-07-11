# Bug audit — 2026-07-10

Structured findings from a codebase audit (production build, targeted code review, product-rule cross-check). Use as a fix backlog.

**Build status at audit time:** `cd web && npm run build` — passes (TypeScript OK).

---

## Critical — contribution system fails open

### 1. Rate limits bypassed on DB errors

**Files:** `web/src/lib/contribution-server.ts` (lines 12–13, 26–29, 45–48)

**Description:** When Supabase is missing or count queries fail, submissions are allowed anyway. `checkContributionRateLimits` returns `null` (no error) when the client is missing or all table queries fail — so the 1/day and 3/week limits are skipped.

```ts
if (!supabase) return null;
// ...
if (error) {
  console.error(`[contributions] session rate limit (${table}):`, error.message);
  continue;
}
```

**Impact:** Spam and abuse on `/contribute` during outages or misconfiguration.

**Suggested fix:** Fail closed — return a generic “try again later” error when the client is missing or any rate-limit query errors. Only allow submission when counts are successfully retrieved.

---

### 2. Market validation accepts invalid suburbs on errors

**Files:**
- `web/src/lib/rent-reports-server.ts` (lines 109–121)
- `web/src/lib/contribution-server.ts` (`landMarketExists`, lines 59–80)

**Description:** `marketExists()` and `landMarketExists()` return `true` when Supabase is unavailable or the lookup query errors. Invalid city/suburb pairs can be accepted.

```ts
if (!supabase) return true;
// ...
if (error) {
  console.error("[rent-reports] market lookup:", error.message);
  return true;
}
```

**Impact:** Reports stored for non-existent city/suburb pairs.

**Suggested fix:** Return `false` on error; return 503 only when the DB is entirely unavailable (similar to contribution POST routes).

---

### 3. Duplicate checks treat errors as “not duplicate”

**Files:**
- `web/src/lib/rent-reports-server.ts` (lines 95–97)
- `web/src/lib/sale-reports-server.ts` (lines 30–32)
- `web/src/lib/land-reports-server.ts` (lines 34–36)

**Description:** `findDuplicateRentReport`, `findDuplicateSaleReport`, and `findDuplicateLandReport` return `false` on query failure, allowing duplicate inserts when the DB is flaky.

**Impact:** Duplicate submissions slip through during DB instability.

**Suggested fix:** Treat lookup failure as “cannot submit now” (409 or 503), not as “not a duplicate.”

---

## High — logic and security

### 4. Explore ignores global Focus lens

**Files:**
- `web/src/hooks/use-explore-filters.ts` (line 37)
- Compare reference: `web/src/hooks/use-compare-filters.ts` (lines 44–46)

**Description:** Explore reads mode only from `?mode=` in the URL and defaults to `"rent"`. Compare falls back to `useGlobalLens()` when the URL has no mode. Visiting `/explore` with a stored lens of `buy`/`land`/`invest` shows rent-filtered results until `LensProvider` runs `router.replace`.

**Impact:** Desync between global Focus and explore results. Violates global Focus product rule.

**Suggested fix:** Mirror compare’s pattern:

```ts
const fromUrl = searchParams.get("mode");
const mode = fromUrl ? parseExploreMode(fromUrl) : globalLens;
```

Include `globalLens` in the `useMemo` deps.

---

### 5. Land → Rent budget not reset

**Files:**
- `web/src/lib/explore.ts` (`budgetForMode`, lines 54–66)
- Also affects: `web/src/components/providers/lens-provider.tsx` (`replaceLensInUrl`, lines 78–88)

**Description:** Switching from land ($10–200/sqm) to rent leaves values like `$50` as the rent budget. Rent expects $100–$10,000; buy/invest correctly reset sub-$20k values.

**Impact:** Empty or wrong explore results after lens switch.

**Suggested fix:** Add a rent guard, e.g. reset when `current < RENT_BUDGET_RANGE.min` or when `current` is in the land range:

```ts
if (mode === "rent" && (current >= BUY_BUDGET_RANGE.min || current < RENT_BUDGET_RANGE.min)) {
  return DEFAULT_RENT_BUDGET;
}
```

---

### 6. Hardcoded contribution hash salt

**File:** `web/src/lib/rent-reports-server.ts` (line 14)

**Description:** `CONTRIBUTION_HASH_SALT` falls back to `"propo-contribute"` if unset. IP/session hashes are predictable across deployments.

**Impact:** Weakens rate limiting and duplicate detection.

**Suggested fix:** Require `CONTRIBUTION_HASH_SALT` in production (fail startup or 503 on submit); remove the public default.

---

### 7. Analytics pipeline can crash on missing sale prices

**Files:**
- `analytics/market_metrics.py` (line 79, also line 204)
- `analytics/daily_metrics.py` (line 45)

**Description:** Sale listings use `int(listing["price"])` / `int(row["price"])` without a guard. Rent path in `daily_metrics.py` uses `sanitize_listing_rent_price`; sale path does not.

**Impact:** A single malformed row can halt the daily pipeline.

**Suggested fix:** Use safe price parsing (as in `clean_data.py` / `price_utils.py`) and skip rows where price is missing or ≤ 0.

---

## Medium — data quality and product rules

### 8. Date filters fail open for community reports

**Files:**
- `web/src/lib/rent-reports.ts` (`isLeaseRecentEnough`, lines 189–195)
- `web/src/lib/sale-reports.ts` (`isSaleRecentEnough`, lines 173–179)

**Description:** Missing or unparseable lease/sale dates return `true` (pass recency filter). Old or bogus reports can enter public `*_report_metrics` after admin approval.

**Suggested fix:** Return `false` for missing/invalid dates, or exclude those rows and log for admin review.

---

### 9. Outlier flag is UI-only

**Files:**
- `web/src/lib/rent-reports.ts` (`isRentReportOutlier`, lines 329–334)
- `web/src/lib/rent-reports-server.ts` (`syncRentReportMetrics`, lines 127–164)

**Description:** Admin tables flag outliers, but `syncRentReportMetrics` includes all approved reports with no outlier filter.

**Impact:** Community ranges can be skewed by extreme approved values.

**Suggested fix:** Filter outliers in sync (against scraped median) or block approval when outlier flag is set.

---

### 10. Listings API allows cottage/room in buy mode

**File:** `web/src/app/api/listings/route.ts` (lines 23–25)

**Description:** `normalizePropertyType()` accepts `cottage`/`room` from rent types, but does not apply `normalizeExploreFilters()` / `propertyTypesForMode()`. `?mode=buy&type=cottage` can return cottage rental listings. UI blocks this; API does not.

**Violates:** Cottage = rent-only (`AGENTS.md`).

**Suggested fix:** Run `normalizeExploreFilters({ mode, propertyType, ... })` before querying, or reject invalid type/mode pairs with 400.

---

### 11. Analytics consent uses substring match

**File:** `web/src/app/api/events/route.ts` (line 16)

**Description:** `cookie?.includes('propo_analytics_consent=granted')` matches values like `granted_extra`. Client-side consent parsing in `consent.ts` is exact.

**Suggested fix:** Parse cookies properly (same regex approach as `consent.ts`).

---

### 12. `parseTrendQuery` drops `invest` mode

**File:** `web/src/lib/data-server.ts` (lines 854–862)

**Description:** `invest` falls through to `"rent"`. Any API using this for mode-specific behavior will treat invest as rent.

**Suggested fix:** Map `invest` explicitly (likely to `"buy"` for sale-side trends, per `toListingMode`).

---

### 13. National movers query has no pagination

**File:** `web/src/lib/data-server.ts` (`fetchNationalTrendMovers`, lines 818–824)

**Description:** National movers query pulls all `market_snapshots_daily` rows since `startDate` with no limit.

**Impact:** Timeouts and memory pressure on Cloudflare Workers as history grows.

**Suggested fix:** Pre-aggregate in SQL/RPC, add city/suburb filters, or paginate.

---

## Low — polish and edge cases

### 14. `propertyMixTotal` can produce `NaN`

**File:** `web/src/lib/explore.ts` (lines 213–222)

**Description:** Sums `house_count`, etc. without `?? 0` (only `cottage_count` is guarded). Stale/partial JSON could break the mix bar.

**Suggested fix:** Coalesce every count with `?? 0`.

---

### 15. Stretch-tier price cap rounding mismatch

**File:** `web/src/lib/data-server.ts` (line 408 vs lines 201–203)

**Description:** DB pre-filter uses `Math.round` for `priceCap`; client-side `matchesListingQuery` does not. Boundary listings can disagree by ±1.

**Suggested fix:** Use the same rounded cap in both places.

---

### 16. `SuburbActionBar` mixes page lens and global lens

**File:** `web/src/components/mobile/suburb-action-bar.tsx` (lines 24–29 vs 54–71)

**Description:** Contribute/pin use page `lens` prop; Compare uses `globalLens`. They can disagree briefly.

**Suggested fix:** Use one source of truth (prefer page `lens` or sync URL before render).

---

### 17. Average yield shown on buy explore, not invest

**File:** `web/src/components/markets/explore-results.tsx` (line 228)

**Description:** `avgYield` is computed for `filters.mode === "buy"` only. Invest (yield-focused) does not show it; buy (sale-focused) does. Likely inverted intent.

**Suggested fix:** Show for `invest`, not `buy`.

---

### 18. Committed IDE temp file in scraper

**File:** `scraper/tempCodeRunnerFile.py`

**Description:** Looks like an IDE temp artifact. Not a runtime bug, but noise and possible accidental execution risk.

**Suggested fix:** Delete and add to `.gitignore`.

---

## Not bugs (confirmed intentional)

| Item | Notes |
| ---- | ----- |
| Rent-first lens hydration | Documented in `AGENTS.md`; brief rent flash is by design |
| Grammarly hydration noise | `suppressHydrationWarning` on `<body>` per handover |
| Community vs scraped medians | Correctly kept in separate tables |
| Admin auth | SHA-256 + `timingSafeEqual`; no SQL injection found in analytics |
| Build | TypeScript and Next.js build succeed |

---

## Recommended fix order

1. Fail-closed contribution validation (#1–3)
2. Explore/global lens sync (#4)
3. `budgetForMode` land→rent reset (#5)
4. Require `CONTRIBUTION_HASH_SALT` (#6)
5. Safe price parsing in analytics (#7)
6. Remaining medium/low items (#8–18)

---

## Security review (no issues found)

| Area | Finding |
| ---- | ------- |
| SQL injection | `analytics/supabase_db.py` uses parameterized queries |
| Admin auth | `admin-auth.ts` uses SHA-256 + `timingSafeEqual`; routes check `isAdminAuthenticated()` |
| Secrets in client | Service role key is server-only; anon key is public by design |
| Honeypot | Contribution and developer signup routes silently accept honeypot fields |

---

*Generated from agent audit on 2026-07-10. Re-run `cd web && npm run build` after fixes.*
