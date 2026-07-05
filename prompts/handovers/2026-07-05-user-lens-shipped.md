# Session Handover — 2026-07-05 (User lens + UX polish)

**Status:** User lens Phases 1–4 shipped; global Focus + user-flow fixes same day  
**Plan doc (full spec):** [2026-07-05-user-lens-plan.md](./2026-07-05-user-lens-plan.md)  
**Flow fixes:** [2026-07-05-user-flow-fixes.md](./2026-07-05-user-flow-fixes.md)  
**Build:** `npm run build` in `web/` passes (823 SSG suburb pages)

---

## Summary

Implemented **Rent · Buy · Land · Invest** as a coherent **lens** across home → explore → city → suburb → compare → rankings. Each surface shows metrics appropriate to the audience; URL `?mode=` + `localStorage` (`propo_lens`) keep lens in sync.

**Later same day:** replaced per-page lens switchers with **global Focus** (`LensProvider` + sidebar / mobile chip); mobile dock unification, scroll-to-top, hydration-safe lens, and provider SSR fixes.

---

## Product decisions (resolved)

| Question | Decision |
| -------- | -------- |
| Buy table rent column? | **Sale-only** — no median rent on buy tables |
| Report access? | **Gated CTA** in UI; URLs at `/report` and `/report?scope=rent` stay public |
| Default lens? | **Hybrid:** bare suburb URLs → **rent** (server); client pages → **last lens** from `localStorage`; URL wins |
| Compare mixed pins? | **Active lens only** for metrics; `pinnedFromMode` on pins + hint when focus differs |
| Where to change lens? | **Global Focus** — sidebar (desktop), top-bar chip + menu (mobile); hero intent on home only |
| Hydration vs stored lens? | First paint **rent** on server + hydration; stored lens applies after mount |

---

## What shipped

### Core lens system (Phases 1–4)

| Area | Behaviour |
| ---- | --------- |
| **Types / helpers** | `ExploreMode` includes `invest`; `web/src/lib/lens.ts` visibility helpers |
| **Provider** | `LensProvider` + `useGlobalLens()`; re-exported from `web/src/hooks/use-lens.ts` |
| **Home** | 4-tab hero (intent copy); invest teaser; calls global `setLens` |
| **Explore** | Lens-aware columns, cards, results; Focus is global (not in filter panel) |
| **City** | Stats/table/movers follow global lens; **land** uses `land_metrics` |
| **Suburb** | Lens-aware sections; rent summary vs full report CTAs; unified mobile action dock |
| **Compare** | `buildCompareMetrics(lens)`; mixed-pin hint; property-type filters only (no Focus bar) |
| **Rankings** | Leaderboards + Movers follow global lens; land via lens not tab |
| **Analytics** | `lens_change` (`source` includes `global`, `home`, …), `suburb_view`, `report_export` |
| **Reports** | `?scope=rent` rent-only report; invest full report CTA |
| **Pins** | `pinnedFromMode`; pin tray + compare links use `useGlobalLens()` |

### Global Focus + UX polish

| Change | Detail |
| ------ | ------ |
| **Global Focus** | `GlobalLensSwitcher` in sidebar (hidden on `/`); `MobileFocusChip` in top bar |
| **Removed** | Per-page `LensSwitcher` / `SuburbLensBar`; explore & compare Focus sections |
| **Segmented control** | `ExploreModeToggle` variant `segmented` + `MODE_ACCENT` colours |
| **Home hero** | Keeps **intent** variant — not segmented |
| **Invest sidebar** | Nav link **commented out** (soft launch via `/?mode=invest`) |
| **`/invest` route** | `next.config.ts` redirect → `/?mode=invest` |
| **Rankings tabs** | Only **Leaderboards** + **Movers** |
| **City 90-day movers** | Follows global lens; invest shows rent + sale blocks |
| **Invest home** | Yield teaser **below** in-budget suburbs |
| **City land table** | `LandSuburbTable`; filter `matchesSlug(m.city, toSlug(city.city))` |
| **Mobile dock** | `SuburbActionBar` merges Compare when ≥2 pins; `mobile-dock.ts` spacing |
| **Mobile compare** | `MobileCompareBar` on non-suburb pages when ≥2 pins |
| **Navigation** | `ScrollToTopOnNavigate` on pathname change |
| **SSR / hydration** | Lens bridge Suspense isolated; `DataFreshnessPill` client fetch; mounted lens gate |

---

## Try it

| Flow | URL |
| ---- | --- |
| Rent suburb (default) | `/cities/harare/borrowdale` |
| Buy suburb | `/cities/harare/borrowdale?mode=buy` |
| Invest suburb | `/cities/harare/borrowdale?mode=invest` |
| Land suburb | `/cities/harare/borrowdale?mode=land` |
| Rent report summary | `/cities/harare/borrowdale/report?scope=rent` |
| Full report | `/cities/harare/borrowdale/report` (invest CTA on profile) |
| Invest home | `/?mode=invest` |
| City land table | `/cities/harare?mode=land` |
| Compare (last lens) | `/compare` after setting lens elsewhere |
| Rankings invest | `/rankings?mode=invest` |

---

## Key files

| File | Role |
| ---- | ---- |
| `web/src/lib/lens.ts` | `showsRentMetrics`, `showsReportExport`, `sortRelatedSuburbs`, etc. |
| `web/src/components/providers/lens-provider.tsx` | Global lens context, URL sync, hydration |
| `web/src/hooks/use-lens.ts` | Re-exports `useGlobalLens`, `useStoredLens` |
| `web/src/components/layout/global-lens-switcher.tsx` | Sidebar + drawer Focus UI |
| `web/src/components/mobile/mobile-focus-chip.tsx` | Mobile top-bar Focus |
| `web/src/components/filters/explore-mode-toggle.tsx` | `intent` / `segmented` variants |
| `web/src/lib/mobile-dock.ts` | Floating bar offset above tab bar |
| `web/src/components/mobile/suburb-action-bar.tsx` | Suburb dock (listings + compare + pin) |
| `web/src/components/cities/city-dashboard.tsx` | Lens-driven city table |
| `web/src/components/markets/suburb-profile.tsx` | Lens-gated sections |
| `web/src/hooks/use-compare-filters.ts` | Compare property-type filters (lens from provider) |
| `web/next.config.ts` | `/invest` → `/?mode=invest` |

---

## Lens persistence

- **Storage key:** `propo_lens` (`LENS_STORAGE_KEY` in `web/src/lib/lens.ts`)
- **URL param:** `?mode=rent|buy|land|invest` (rent omits param)
- **Server suburb pages:** default **rent** when no `?mode=`
- **Client:** `LensProvider` — rent until mounted, then URL + storage; syncs bare paths

---

## Known quirks / follow-ups

1. **Invest nav** — sidebar link commented out; re-enable when invest is promoted.
2. **Brief Rent flash** — intentional on hydration when stored lens ≠ rent.
3. **City land filter** — use `toSlug(city.city)` with `matchesSlug`.
4. **Uncommitted** — large `web/` diff; commit when ready.
5. **Optional** — suburb “Viewing as” badge; invest landing page; audit any remaining links without `?mode=`.

---

## Analytics events

| Event | When |
| ----- | ---- |
| `lens_change` | `source`: `global`, `home`, explore (legacy), compare, suburb, cities, rankings |
| `suburb_view` | Suburb page mount (`SuburbViewTracker`) |
| `report_export` | Print on report page |

---

## Related docs

- [2026-07-05-user-lens-plan.md](./2026-07-05-user-lens-plan.md) — full metric matrix and phased plan  
- [2026-07-05-user-flow-fixes.md](./2026-07-05-user-flow-fixes.md) — mobile dock, hydration, scroll fixes  
- [2026-07-03-land-mode-shipped.md](./2026-07-03-land-mode-shipped.md) — land mode precedent  
- **`web/DESIGN.md`** — global Focus, mobile dock, lens persistence
