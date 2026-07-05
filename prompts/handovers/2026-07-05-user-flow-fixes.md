# User flow fixes — 2026-07-05

**Status:** Implemented (including post-ship polish same day)  
**Context:** Post–global Focus (`LensProvider` + sidebar/drawer switcher). UX audit + mobile QA identified friction in discovery, dock overlap, hydration, and navigation scroll.

**Related:** [2026-07-05-user-lens-shipped.md](./2026-07-05-user-lens-shipped.md), [2026-07-05-user-lens-plan.md](./2026-07-05-user-lens-plan.md)

---

## Problems & fixes

| # | Priority | Problem | Fix |
|---|----------|---------|-----|
| 1 | P0 | Mobile Focus buried in hamburger only | `MobileFocusChip` in top bar → bottom sheet with `GlobalLensSwitcher` |
| 2 | P0 | Home has two lens controls (hero + sidebar) | Hide sidebar Focus on `/`; hero remains primary on home |
| 3 | P0 | Explore budget not updated when global Focus changes | `LensProvider.setLens` adjusts `budget` / clears incompatible `type` on `/explore` |
| 4 | P1 | Internal links omit `?mode=` (rent flash, wrong lens) | `suburbPath(..., { mode })` on land cards/lists, mobile compare panel pins |
| 5 | P1 | Compare hint says “Focus above” | Copy points to sidebar (desktop) or menu / top-bar chip (mobile) |
| 6 | P1 | Onboarding / Explore copy ignores land & invest | Tour + page description updated |
| 7 | P1 | Compare hard to find on mobile | `MobileCompareBar` floating CTA when ≥2 pins (non-suburb pages) |
| 8 | P1 | Menu “Filters” implies current-page filters | Renamed “Explore filters” with helper text |
| 9 | P2 | `DESIGN.md` documents per-page `LensSwitcher` | Updated to global Focus pattern |
| 10 | P0 | Mobile floating bars stack/overlap on suburb pages | Unified `SuburbActionBar` dock; global compare hidden on suburb profiles; `mobile-dock.ts` |
| 11 | P0 | Mobile nav keeps scroll position — top not visible | `ScrollToTopOnNavigate` on pathname change (`useLayoutEffect`) |
| 12 | P0 | QueryClient SSR error from `LensProvider` Suspense | Suspense only on `LensSearchParamsBridge`; `DataFreshnessPill` client fetch |
| 13 | P0 | Lens provider infinite update loop | Sync serialized query string; skip `setState` when unchanged |
| 14 | P0 | Hydration mismatch (Rent vs Land chip / compare href) | Lens resolves **rent** until `mounted`; no `window`/`localStorage` on first paint |

---

## Architecture notes

### Global Focus

- **Desktop:** `GlobalLensSwitcher` in left sidebar (hidden on home).
- **Mobile:** `MobileFocusChip` in top bar + drawer Focus at top of menu.
- **Home:** Hero `intent` toggle only; calls `setLens({ source: "home" })`.
- **Persistence:** URL `?mode=` + `localStorage` `propo_lens`.
- **Provider:** `web/src/components/providers/lens-provider.tsx` — `useGlobalLens()`; re-exported from `web/src/hooks/use-lens.ts`.

### Hydration-safe lens

Server and first client paint always use **rent**. After mount, provider reads URL (`LensSearchParamsBridge`) + `localStorage`, then syncs bare paths. Brief Rent flash is intentional.

### Explore lens change

When `setLens` runs on `/explore` and mode changes:

1. `budget` → `budgetForMode(next, currentBudget)`
2. Land → clear `type` / `bedroom`
3. Buy or invest + `type=room` → clear segment params

### Mobile dock (`web/src/lib/mobile-dock.ts`)

| Surface | Behaviour |
| ------- | --------- |
| **Suburb profile** | Single glass pill: View listings · Compare (n) · Pin — global `MobileCompareBar` hidden |
| **Other pages (≥2 pins)** | `MobileCompareBar` above tab bar |
| **Home (scrolled)** | `HomeBudgetBar` at same `mobileDockBottom()` offset |
| **Offset** | `tab bar (3.25rem) + 0.5rem gap + safe-area` |

### Link rule

Internal `suburbPath` / `cityPath` should pass `mode` from active lens unless intentionally mode-specific (e.g. rent movers teaser).

---

## Key files

| File | Change |
|------|--------|
| `web/src/components/providers/lens-provider.tsx` | Global lens; explore URL; hydration gate; params bridge |
| `web/src/components/layout/global-lens-switcher.tsx` | Sidebar + drawer Focus |
| `web/src/components/mobile/mobile-focus-chip.tsx` | Top-bar Focus chip + sheet |
| `web/src/components/mobile/mobile-compare-bar.tsx` | Floating compare (excludes suburb paths) |
| `web/src/components/mobile/suburb-action-bar.tsx` | Unified suburb dock with optional Compare |
| `web/src/lib/mobile-dock.ts` | Shared bottom offset + `isSuburbProfilePath` |
| `web/src/components/layout/scroll-to-top-on-navigate.tsx` | Scroll to top on route change |
| `web/src/components/layout/data-freshness-pill.tsx` | Client `useEffect` fetch (no React Query in shell) |
| `web/src/components/layout/app-shell.tsx` | Compare bar, scroll helper, `LensProvider` |
| `web/src/components/layout/app-sidebar.tsx` | Hide Focus on home |
| `web/src/components/compare/compare-lens-hint.tsx` | Copy |
| `web/src/components/onboarding/onboarding-tour.tsx` | Focus steps |
| `web/src/components/explore/explore-page.tsx` | Description |
| `web/src/components/mobile/mobile-menu-drawer.tsx` | Explore filters label |
| `web/src/components/markets/suburb-profile.tsx` | `pb-28` for dock clearance |
| `web/DESIGN.md` | Global Focus + mobile dock |

---

## Sanity-check journeys

1. **Mobile renter:** Home → Explore → pin 2 → floating Compare → compare page; Focus chip visible without opening menu.
2. **Desktop buyer:** Sidebar Focus = Buy → Cities → suburb shows sale metrics; links keep `?mode=buy`.
3. **Explore lens switch:** Rent $400 → sidebar Buy → budget snaps to buy scale; results refresh.
4. **Land:** Focus Land → city land table → suburb link includes `?mode=land`.
5. **Suburb + 2 pins:** One dock row only (no triple stack); trend badges not hidden under pills.
6. **Hydration:** No console mismatch on `/` with `propo_lens=land` in localStorage.

---

## Deferred

- Re-enable Invest sidebar nav (soft launch)
- Suburb profile “Viewing as” badge
- Dynamic compare back navigation (history-aware)
- Invest dedicated landing beyond `/?mode=invest`
