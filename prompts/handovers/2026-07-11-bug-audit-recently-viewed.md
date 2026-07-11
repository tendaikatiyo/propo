# Session Handover — 2026-07-11 (Bug audit fixes + recently viewed)

**Status:** Code complete, **uncommitted** — all items in `prompts/BUG_AUDIT.md` (#1–18) fixed; home **Recently viewed** (localStorage) shipped  
**Audit source:** [`../BUG_AUDIT.md`](../BUG_AUDIT.md)  
**Date:** 2026-07-11

**Prior handovers (read first):**

- [2026-07-10-community-price-reports-shipped.md](./2026-07-10-community-price-reports-shipped.md) — community reports / contribute system
- [2026-07-05-user-lens-shipped.md](./2026-07-05-user-lens-shipped.md) — Focus / lens system
- [2026-07-05-user-flow-fixes.md](./2026-07-05-user-flow-fixes.md) — explore budget / lens hydration

---

## Workspace

| Item | Value |
| ---- | ----- |
| Repo | `https://github.com/tendaikatiyo/propo` |
| Live | `https://propo.fyi` |
| Working tree | Bug-audit + recently-viewed changes **not committed** at session end |
| Build | `cd web && npm run build` — **passed** after audit fixes |
| Migrations | No new migrations this session (`001`–`017` unchanged) |

---

## Summary

Two deliverables:

1. **Bug audit backlog** — fail-closed contribution hardening, explore/lens sync, analytics safety, and polish from [`BUG_AUDIT.md`](../BUG_AUDIT.md).
2. **Recently viewed** — device-local suburb history on home (localStorage, not cookies/backend).

---

## 1. Bug audit fixes (#1–18)

### Critical — contribution fail-closed

| # | Fix |
| - | --- |
| 1 | `checkContributionRateLimits` returns `{ ok, status, error }` — DB missing / query error → **503**, not allow |
| 2 | `marketExists` / `landMarketExists` return **false** on error / missing client (routes already 503 when admin Supabase unavailable) |
| 3 | Duplicate lookups return `boolean \| null` — `null` → **503**; duplicate → **409** |

**Files:** `web/src/lib/contribution-server.ts`, `rent-reports-server.ts`, `sale-reports-server.ts`, `land-reports-server.ts`, `api/rent|sale|land-reports/route.ts`

### High

| # | Fix |
| - | --- |
| 4 | Explore mirrors Compare: URL `?mode=` else `useGlobalLens()` |
| 5 | `budgetForMode`: land→rent resets when `current < RENT_BUDGET_RANGE.min` |
| 6 | `CONTRIBUTION_HASH_SALT` required in **production**; no public `"propo-contribute"` default; 503 on submit if missing |
| 7 | Analytics sale prices use `parse_price_amount` + skip ≤0 (`market_metrics.py`, `daily_metrics.py`) |

### Medium / low

| # | Fix |
| - | --- |
| 8 | Recency filters fail closed on missing/invalid dates (rent/sale/land) |
| 9 | `syncRentReportMetrics` excludes outliers vs scraped `median_rent` |
| 10 | Listings API runs `normalizeExploreFilters` (cottage/room blocked on buy) |
| 11 | Analytics consent cookie parsed exactly (`=== "granted"`) |
| 12 | `parseTrendQuery` uses `parseExploreMode` (invest no longer → rent) |
| 13 | National movers: city filter + paginated snapshot fetch + lookup-key filter |
| 14 | `propertyMixTotal` coalesces all counts with `?? 0` |
| 15 | Shared `stretchPriceCap()` for DB + client listing match |
| 16 | `SuburbActionBar` Compare uses page `lens` (not `globalLens`) |
| 17 | Explore avg yield shown for **invest**, not buy |
| 18 | Deleted `scraper/tempCodeRunnerFile.py`; gitignore `**/tempCodeRunnerFile.*` |

---

## 2. Recently viewed (home)

**No backend.** Same family as pins — **localStorage** via Zustand persist.

| Item | Detail |
| ---- | ------ |
| Key | `propo:recentlyViewedMarkets` |
| Cap | `MAX_RECENTLY_VIEWED_MARKETS` = **6** |
| Record | `SuburbViewTracker` on suburb profile open |
| UI | `HomeRecentlyViewed` on home (after top matches); Clear button |
| Shape | `{ market_id, city, suburb, viewedAt, viewedFromMode? }` |
| Policy | Cookie page documents “Recently viewed suburbs” as local storage |

**Files:**

- `web/src/hooks/use-recently-viewed-markets.ts`
- `web/src/components/home/home-recently-viewed.tsx`
- `web/src/components/analytics/suburb-view-tracker.tsx`
- `web/src/components/home/home-page.tsx`
- `web/src/app/cookies/page.tsx`
- `web/src/lib/types.ts` (`RecentlyViewedMarket`)

**Note:** Tracker stores raw `market.suburb` (not `sanitizeLabel`) so `suburbPath` links stay valid.

---

## Deploy / ops — required before production contribute

Set **`CONTRIBUTION_HASH_SALT`** on Cloudflare Worker **runtime** vars (long random secret, same idea as `ADMIN_SECRET`).

- Without it in production, `/contribute` returns **503**.
- Documented in `web/.env.example` + `web/README.md`.
- Changing the salt resets rate-limit / duplicate identity hashes — keep stable after go-live.
- Local `next dev` falls back to `propo-contribute-dev` when unset.

Generate e.g. `openssl rand -base64 32`.

---

## Product decisions (this session)

| Question | Decision |
| -------- | -------- |
| Recently viewed via cookies? | **No** — localStorage (mirrors pins); cookies size/httpOnly poor fit |
| Backend for history? | **No** — device-only; analytics `suburb_view` remains separate |
| Contribution outages | **Fail closed** — prefer temporary unavailable over spam / bad suburbs |
| Missing lease/sale dates in rollups | **Excluded** from public `*_report_metrics` (recency fail-closed) |

---

## Key file map

| Concern | Where |
| ------- | ----- |
| Rate limits | `web/src/lib/contribution-server.ts` |
| Hash salt | `web/src/lib/rent-reports-server.ts` (`resolveContributionHashSalt`) |
| Explore lens sync | `web/src/hooks/use-explore-filters.ts` |
| Budget snap | `web/src/lib/explore.ts` (`budgetForMode`) |
| Safe sale prices | `analytics/market_metrics.py`, `analytics/daily_metrics.py` |
| Audit backlog (source) | `prompts/BUG_AUDIT.md` |

---

## Known quirks / follow-ups

1. **Commit + deploy** this session’s working tree; then set `CONTRIBUTION_HASH_SALT` on CF.
2. `BUG_AUDIT.md` still lists items as open — treat as historical audit; fixes are in code (optional: mark resolved in that doc).
3. Community reports with **no event date** no longer enter public rollups after approve — intentional; admin sighted should include month when possible.
4. Recently viewed is home-only for now — optional later: sidebar chips near `PinTray`.
5. SA expansion still deferred — see [2026-07-08-sa-market-expansion-plan.md](./2026-07-08-sa-market-expansion-plan.md).

---

## Next recommended

1. Commit the uncommitted audit + recently-viewed changes.
2. Set `CONTRIBUTION_HASH_SALT` on Cloudflare; deploy web.
3. Smoke-test: `/contribute` submit (expect success with salt); open suburbs → home shows Recently viewed; Clear works.
4. Optional: methodology/privacy copy polish for community reports (prior handover backlog).

---

## Related docs

- [`../BUG_AUDIT.md`](../BUG_AUDIT.md) — audit findings (2026-07-10)
- [2026-07-10-community-price-reports-shipped.md](./2026-07-10-community-price-reports-shipped.md)
- [2026-07-05-user-lens-shipped.md](./2026-07-05-user-lens-shipped.md)
- **`web/README.md`** — `CONTRIBUTION_HASH_SALT` runtime note
- **`web/DESIGN.md`** — design system
