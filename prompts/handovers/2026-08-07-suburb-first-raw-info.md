# Suburb-first raw info cut

**Date:** 2026-08-07  
**Status:** Shipped  
**Trigger:** Product pivot — abandon global filters / Focus; suburb search → full dossier; Explore as directories.

## Product model

| Surface | Job |
| --- | --- |
| **Home** | Search a suburb (rolling placeholder + suggested chips) → profile |
| **Suburb profile** | Full dossier: rent + sale + yield + land (+ trends, community, listings accordion) |
| **Explore → Suburbs** | Directory (city + search; filters optional / off by default) |
| **Explore → Land** | Land directory; optional $/sqm budget when user enables it |
| **Focus** | Parked (UI hidden). Contribute stays rent/buy/land only |

## What changed

1. **Home = search prompt** — Budget/type removed. Rolling suburb-name shutter + suggested searches. CTA → Explore.
2. **Suburb profiles = full dossiers** — Rent, sale, yield, land metrics/trends, community ranges; good-value listings in accordion.
3. **Explore Suburbs \| Land tabs** — Surface switcher; Suburbs is a directory (option 2: no Browse as / budget / property type).
4. **Explore filters off by default** — Collapsed panel; all cities; thin markets shown; land budget inactive until slider used (`budgetFilterActive` / URL `budget` only when set). Confidence opt-out via `lowconf=0`.
5. **Focus remains parked** — No global Focus UI; profiles not mode-gated.
6. **Copy / SEO / AGENTS / DESIGN** — Look-up / directory framing.

## Key files

- Home: `home-landing-hero.tsx`, `home-page.tsx`, `rolling-suburb-placeholder.tsx`
- Explore: `explore-page.tsx`, `explore-surface-tabs.tsx`, `explore-results.tsx`, `filter-bar.tsx`, `use-explore-filters.ts`
- Profile: `suburb-profile.tsx`, `suburb-value-listings.tsx` + `disclosure.tsx`, `suburb-land-trends-section.tsx`
- Lens / reports: `lens.ts`, `*-reports.ts`
- Motion: `globals.css` (`t-text-swap`, `t-acc`)
- Docs: `AGENTS.md`, `web/DESIGN.md`, this handover

## Explicitly not done

- Hard-deleting lens provider / all `?mode=` deep links
- City dashboards / rankings as full dossiers
- Paywall / auth

## Next (if pivot sticks)

- City pages as dossiers (rent + sale + land summary)
- Rankings copy / defaults for directory framing
- Measure home search → suburb conversion vs old budget path
