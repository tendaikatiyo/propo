# User flow fixes — 2026-07-05

**Status:** Implemented  
**Context:** Post–global Focus (`LensProvider` + sidebar/drawer switcher). UX audit identified friction in mobile discovery, explore budget sync, link continuity, and stale copy.

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
| 7 | P1 | Compare hard to find on mobile | `MobileCompareBar` floating CTA when ≥2 pins |
| 8 | P1 | Menu “Filters” implies current-page filters | Renamed “Explore filters” with helper text |
| 9 | P2 | `DESIGN.md` documents per-page `LensSwitcher` | Updated to global Focus pattern |

---

## Architecture notes

### Global Focus (unchanged contract)

- **Desktop:** `GlobalLensSwitcher` in left sidebar (hidden on home).
- **Mobile:** Top-bar chip + drawer Focus at top of menu.
- **Home:** Hero `intent` toggle only; calls `setLens({ source: "home" })`.
- **Persistence:** URL `?mode=` + `localStorage` `propo_lens`.

### Explore lens change

When `setLens` runs on `/explore` and mode changes:

1. `budget` → `budgetForMode(next, currentBudget)`
2. Land → clear `type` / `bedroom`
3. Buy or invest + `type=room` → clear segment params

### Link rule

Internal `suburbPath` / `cityPath` should pass `mode` from active lens unless intentionally mode-specific (e.g. rent movers teaser).

---

## Key files

| File | Change |
|------|--------|
| `web/src/components/providers/lens-provider.tsx` | Explore-aware URL updates |
| `web/src/components/mobile/mobile-focus-chip.tsx` | New — top-bar Focus |
| `web/src/components/mobile/mobile-compare-bar.tsx` | New — floating compare CTA |
| `web/src/components/layout/mobile-top-bar.tsx` | Focus chip |
| `web/src/components/layout/app-shell.tsx` | Compare bar |
| `web/src/components/layout/app-sidebar.tsx` | Hide Focus on home |
| `web/src/components/compare/compare-lens-hint.tsx` | Copy |
| `web/src/components/onboarding/onboarding-tour.tsx` | Focus step |
| `web/src/components/explore/explore-page.tsx` | Description |
| `web/src/components/mobile/mobile-menu-drawer.tsx` | Explore filters label |
| `web/src/components/markets/land-suburb-card.tsx` | `mode: land` links |
| `web/src/components/mobile/land-suburb-list.tsx` | `mode: land` links |
| `web/src/components/mobile/mobile-compare-panel.tsx` | Lens-aware pin/compare links |
| `web/DESIGN.md` | Global Focus docs |

---

## Sanity-check journeys

1. **Mobile renter:** Home → Explore → pin 2 → floating Compare → compare page (no menu required for Focus if chip visible).
2. **Desktop buyer:** Sidebar Focus = Buy → Cities → suburb shows sale metrics; links keep `?mode=buy`.
3. **Explore lens switch:** Rent $400 → sidebar Buy → budget snaps to buy scale; results refresh.
4. **Land:** Focus Land → city land table → suburb link includes `?mode=land`.

---

## Deferred (not in this pass)

- Re-enable Invest sidebar nav (soft launch)
- Suburb profile “Viewing as” badge
- Dynamic compare back navigation (history-aware)
- Invest dedicated landing beyond `/?mode=invest`
