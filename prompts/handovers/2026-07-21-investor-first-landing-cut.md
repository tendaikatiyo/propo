# Investor-first landing cut

**Date:** 2026-07-21  
**Status:** Shipped (smallest useful cut)  
**Trigger:** Landing / multi-lens UX confusing for B2C; decision to ship investors first.

## What changed

Soft product pivot — **not** a B2C teardown. Dataset, rent/buy/land routes, and `/contribute` remain.

1. **Default lens = invest** (`DEFAULT_LENS` in `web/src/lib/mode.ts`). No-`?mode=` URLs and SSR hydrate to invest. `?mode=` omit convention flipped: invest omitted; rent/buy/land set explicitly.
2. **Home is invest-only** — removed 4-intent `ExploreModeToggle`; hero copy → yield / fair value; CTA → Explore yield markets; below-fold always invest preview + `HomeInvestTeaser`.
3. **Focus UI locked off** — removed `GlobalLensSwitcher` from sidebar + mobile menu; removed `MobileFocusChip` from top bar. Explicit `?mode=` deep links still work.
4. **SEO / site description** — investor framing on home + site-wide description / OG alt.

## Files touched (primary)

- `web/src/lib/mode.ts`, `slug.ts`, `seo.ts`, `constants.ts`
- `web/src/components/providers/lens-provider.tsx`
- `web/src/components/home/home-landing-hero.tsx`, `home-page.tsx`
- `web/src/components/layout/app-sidebar.tsx`
- `web/src/components/mobile/mobile-top-bar.tsx`, `mobile-menu-drawer.tsx`
- Compare/pin href helpers via `comparePath` / `citiesIndexPath`
- `AGENTS.md`, `web/DESIGN.md` (lens rules)

## Explicitly not done

- Removing rent/buy/land data, Explore modes, suburb lens sections, or community contribute
- Paywall / auth for investors
- Full SEO rewrite of every suburb title

## Next (if pivot sticks)

- Invest-only rankings default + nav copy polish
- Methodology / About investor framing
- Optional: hard-redirect bare consumer SEO URLs → invest metrics (measure first)
