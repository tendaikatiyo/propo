# Bug audit — Propo

Structured findings from codebase audits. Use as a fix backlog.

**Last updated:** 2026-07-18  
**Last verified:** `main` @ `ce86360` — `cd web && npm run build` passes.

**Related:** [2026-07-11-bug-audit-recently-viewed.md](handovers/2026-07-11-bug-audit-recently-viewed.md) (fix session handover)

---

## Summary

| Status | Count | Notes |
| ------ | ----- | ----- |
| **Fixed** (#1–18) | 18 | Landed in commit `fba16ed` (“bugggsss”, 2026-07-11) |
| **Open** (#19–26) | 8 | Found in re-audit 2026-07-18 |
| **Intentional** | — | Rent-first Focus flash, community ≠ scraped medians, etc. |

---

## Fixed (#1–18) — 2026-07-11

All original audit items are **resolved on `main`**. Details below are kept for history; do not re-open unless regressions appear.

| # | Issue | Fix (where) |
| - | ----- | ----------- |
| 1 | Rate limits fail open on DB errors | `checkContributionRateLimits` → `{ ok, status, error }`; 503 on missing client or query error — `contribution-server.ts` |
| 2 | Market validation accepts invalid suburbs on errors | `marketExists` / `landMarketExists` return `false` on error — `rent-reports-server.ts`, `contribution-server.ts` |
| 3 | Duplicate checks treat errors as “not duplicate” | Lookups return `boolean \| null`; routes return 503 on `null` — `*-reports-server.ts`, API routes |
| 4 | Explore ignores global Focus | `useExploreFilters` falls back to `useGlobalLens()` — `use-explore-filters.ts` |
| 5 | Land → rent budget not reset | `budgetForMode` resets when `current < RENT_BUDGET_RANGE.min` — `explore.ts` |
| 6 | Hardcoded contribution hash salt | `CONTRIBUTION_HASH_SALT` required in production; dev-only fallback — `rent-reports-server.ts` |
| 7 | Analytics pipeline crash on bad sale prices | `parse_price_amount` + skip ≤0 — `market_metrics.py`, `daily_metrics.py` |
| 8 | Date filters fail open for community reports | Recency helpers return `false` on missing/invalid dates — `rent/sale/land-reports.ts` |
| 9 | Rent outlier flag UI-only | `syncRentReportMetrics` excludes outliers vs scraped `median_rent` — `rent-reports-server.ts` |
| 10 | Listings API allows cottage/room on buy | Route runs `normalizeExploreFilters` — `api/listings/route.ts` |
| 11 | Analytics consent substring match | Cookie parsed exactly (`=== "granted"`) — `api/events/route.ts` |
| 12 | `parseTrendQuery` drops invest | Uses `parseExploreMode` — `data-server.ts` |
| 13 | National movers unbounded query | Paginated fetch (`NATIONAL_SNAPSHOT_PAGE_SIZE`) — `data-server.ts` |
| 14 | `propertyMixTotal` NaN | All counts use `?? 0` — `explore.ts` |
| 15 | Stretch cap rounding mismatch | Shared `stretchPriceCap()` — `data-server.ts` |
| 16 | `SuburbActionBar` mixed lens sources | Compare href uses page `lens` — `suburb-action-bar.tsx` |
| 17 | Avg yield on buy, not invest | Shown for `filters.mode === "invest"` — `explore-results.tsx` |
| 18 | Committed IDE temp file | Deleted; `**/tempCodeRunnerFile.*` in `.gitignore` |

### Ops: production contribute

Set **`CONTRIBUTION_HASH_SALT`** on Cloudflare Worker runtime vars (long random secret). Without it, `/contribute` returns **503** by design. Local dev falls back to `propo-contribute-dev` when unset. See `web/README.md` / `web/.env.example`.

---

## Open — High

### 19. Sale community sync skips outlier filtering

**Files:** `web/src/lib/sale-reports-server.ts` (`syncSaleReportMetrics`, ~lines 39–77)

**Description:** Rent sync (#9) excludes approved reports where `isRentReportOutlier` vs scraped `median_rent`. Sale sync only checks `is_completed_sale` and `isSaleRecentEnough` — admin UI still flags sale outliers, but approving them skews public `sale_report_metrics`.

**Suggested fix:** Fetch scraped `median_sale_price` from `market_metrics`; filter with `isSaleReportOutlier` before rollup (mirror rent).

---

### 20. Land community sync skips outlier filtering

**Files:** `web/src/lib/land-reports-server.ts` (`syncLandReportMetrics`, ~lines 43–86)

**Description:** Same gap as #19 for land — no `isLandReportOutlier` filter against `land_metrics.median_price_per_sqm`.

**Suggested fix:** Mirror rent — fetch scraped land median, exclude outliers in sync.

---

## Open — Medium

### 21. Suburb segment filters ignore active lens (cottage on buy)

**Files:**
- `web/src/app/cities/[city]/[suburb]/page.tsx` (`parseSegmentFilters`, ~lines 78–87)
- `web/src/app/cities/[city]/[suburb]/report/page.tsx` (same pattern)

**Description:** Page `lens` comes from `?mode=`, but `parseSegmentFilters` hardcodes `mode: "rent"`. URL like `?mode=buy&type=cottage` does not strip cottage — violates cottage = rent-only for segment medians.

**Suggested fix:** Pass `lens` into `parseSegmentFilters` and use `normalizeExploreFilters({ mode: lens, ... })`.

---

### 22. Suburb profile SSR vs global Focus

**Files:** `web/src/app/cities/[city]/[suburb]/page.tsx` (~line 99), `lens-provider.tsx`

**Description:** Server reads lens from URL only (defaults to rent). `LensProvider` applies `localStorage` via `router.replace` after mount. Deep links without `?mode=` show rent metrics/CTAs until client sync when stored Focus is buy/land/invest.

**Suggested fix:** Client lens bridge on profile pages, or internal links always include `?mode=` from global lens; accept rent-first flash only where intentional.

---

### 23. Recently viewed stores wrong lens after Focus sync

**Files:** `web/src/components/analytics/suburb-view-tracker.tsx` (~lines 23–31)

**Description:** `tracked` ref prevents re-recording when `lens` prop updates after URL sync. Home “Recently viewed” may store `viewedFromMode: "rent"` while user’s Focus is buy/land/invest.

**Suggested fix:** Reset tracking when `lens` changes, or read `useGlobalLens()` after mount before recording.

---

### 24. `city_metrics.py` unsafe price parsing

**Files:** `analytics/city_metrics.py` (~lines 55–59)

**Description:** `build_city_metrics` uses `int(sale["price"])` / `int(rent["price"])` with no guard. `market_metrics.py` was fixed (#7); this path still runs in `analytics:build:db`.

**Impact:** Malformed row can crash city metrics build.

**Suggested fix:** Use `parse_price_amount` (or equivalent) and skip missing/≤0 prices.

---

### 25. Admin login has no rate limiting

**Files:** `web/src/app/api/admin/auth/route.ts`

**Description:** Unlimited POST attempts against `ADMIN_SECRET`. Mitigated by SHA-256 + `timingSafeEqual`, but no throttling or lockout.

**Suggested fix:** IP-based rate limit (e.g. 5 attempts / 15 min).

---

### 26. Developer signup has no rate limiting

**Files:** `web/src/app/api/developers/interest/route.ts`

**Description:** Validation + honeypot only. Spam signups possible when Supabase is up.

**Suggested fix:** IP/email rate limits similar to contribution tables.

---

## Open — Low

### 27. Invalid bedroom URL param silently ignored

**Files:** `web/src/hooks/use-explore-filters.ts`, `web/src/hooks/use-compare-filters.ts`

**Description:** `?bedroom=foo` → `NaN`; bedroom filter effectively ignored.

**Suggested fix:** Validate with `Number.isInteger`; treat invalid as `null`.

---

### 28. Inconsistent `mode` in explore URLs

**Files:** `web/src/hooks/use-explore-filters.ts` (`exploreHref` vs `setFilters`)

**Description:** `exploreHref` always sets `mode` (including rent); `setFilters` omits `mode=rent`. Minor SEO/bookmark noise.

**Suggested fix:** Omit `mode` when rent in both paths.

---

### 29. Analytics events silently dropped without Supabase admin

**Files:** `web/src/lib/analytics/server.ts`

**Description:** `insertAnalyticsEvent` returns `{ ok: true }` when admin client missing — events dropped fail-open for availability.

**Suggested fix:** Document as intentional; optional dev logging.

---

### 30. Invest lens fetches sale listings only

**Files:** `web/src/lib/listings-client.ts`, `data-server.ts`

**Description:** Invest mode uses sale listings under buy budget. May be intentional; invest users might expect rental comps too.

**Suggested fix:** Product decision — document or add dual fetch.

---

## Not bugs (confirmed intentional)

| Item | Notes |
| ---- | ----- |
| Rent-first lens hydration | Documented in `AGENTS.md`; brief rent flash by design |
| Grammarly hydration noise | `suppressHydrationWarning` on `<body>` |
| Community vs scraped medians | Separate `*_report_metrics` tables; not merged into `market_metrics` |
| Build-time Python ENOENT | Local trends fallback when `python` missing; production uses Supabase |
| Mobile suburb floating contribute CTA | Removed in PR #10 (`ce86360`) — profile header + prominent card remain |
| Global Focus only | No per-page `LensSwitcher` bars; home hero toggle intentional |
| Contribute blocks invest | `/contribute?mode=invest` redirects |
| Buy tables without median rent | `columnsForMode("buy")` excludes rent columns |

---

## Product rules (AGENTS.md) — current status

| Rule | Status |
| ---- | ------ |
| Global Focus only | OK |
| Lens hydration = rent first | OK (see #22 for suburb deep-link caveat) |
| Cottage = rent-only | OK in explore/listings API; **gap** on suburb segment parsing (#21) |
| Community ≠ scraped medians | OK |
| Land metrics separate | OK |
| Contribute + invest blocked | OK |

---

## Security review

| Area | Finding |
| ---- | ------- |
| Contribution POST | **Fail-closed** — rate limits, market validation, duplicates, hash salt |
| SQL injection (analytics) | Parameterized queries — no issues found |
| Admin mutating routes | Auth checked; **login not rate-limited** (#25) |
| Secrets in client | Service role server-only |
| Honeypot | Contribution + developer signup |

---

## Recommended fix order (open items)

1. Sale + land outlier sync (#19–20) — parity with rent #9  
2. Suburb `parseSegmentFilters` uses active lens (#21)  
3. Suburb Focus SSR/client alignment + recently viewed lens (#22–23)  
4. `city_metrics.py` safe price parsing (#24)  
5. Rate limits on admin auth + developer interest (#25–26)  
6. Low items (#27–30)

---

## Changelog

| Date | Change |
| ---- | ------ |
| 2026-07-10 | Initial audit (#1–18) |
| 2026-07-11 | Fixes landed in `fba16ed`; recently viewed shipped (see handover) |
| 2026-07-18 | Marked #1–18 fixed; added open #19–30; PR #10 removed mobile floating contribute CTA |

---

*Re-run `cd web && npm run build` after fixes.*
