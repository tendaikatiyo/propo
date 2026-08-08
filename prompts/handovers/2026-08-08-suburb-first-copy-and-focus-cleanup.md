# Suburb-first copy + Focus residue cleanup

**Date:** 2026-08-08  
**Status:** Shipped  
**Trigger:** Align policies/methodology/tour with suburb-first product; fix Focus/`?mode=` regressions after Focus UI was parked.

## Docs / copy

- **Methodology, About, Privacy, Terms, Cookies, 404** — look-up / dossiers / Explore directories framing; community reports described accurately (ranges when thin or low confidence; CTAs may be limited in beta).
- **DESIGN / SEO / JSON-LD / onboarding tour / SiteHero tagline** — *Look up a suburb*; dropped broken SearchAction that pointed at `/explore?city=`.
- **Contribute CTAs hidden** — footer + mobile menu + profile `ContributePriceButton` / `RentReportCta` return null; `/contribute` still works by direct URL (tabs: Rent \| Sale \| Land).

## Bug fixes (Focus residue)

| Issue | Fix |
| --- | --- |
| Print reports said “invest lens” | Point to suburb profile |
| Land/city/rankings stamped `?mode=` on profile links | Open dossiers without mode |
| Cities gated columns on global lens | Always full rent/sale/yield via `productSurfaceLens()` |
| Rankings lens-only / “use Land lens” | Suburbs + Land leaderboards always; strip legacy `mode` / `tab=land` |
| Pin tray / compare followed land lens | `comparePath()` default (invest); pin badges link without mode |
| Compare copy “same as Explore” / Invest focus | Reworded |
| Empty contribute wrappers on profiles | Removed mounts while CTAs null |

## Key helpers / files

- `web/src/lib/lens.ts` — `productSurfaceLens()`, invest side rankings always on
- Cities: `city-dashboard.tsx`, `cities-directory.tsx`, `city-list-row.tsx`
- Rankings: `rankings-page.tsx`
- Links: land cards/tables, pin tray, mobile compare bars
- Policies: `methodology`, `privacy`, `terms`, `cookies`, `about`

## Still parked / residual

- `LensProvider` + Explore Land `?mode=land` for directory surface
- Dead unused home modules (`affordability-insights`, `home-budget-bar`, `home-hero`) not deleted yet
- Re-enable contribute CTAs when product pushes community again
