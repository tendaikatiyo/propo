# Publish all Zimbabwe cities

**Date:** 2026-08-10  
**Status:** Shipped  
**Trigger:** Site was hard-limited to Harare / Bulawayo / Ruwa; product should show the full ZW city set.

## Change

- `web/src/lib/geo.ts` — `isPublishedCity` / `isZimbabweCity` now mean **not in `EXCLUDED_CITIES`** (foreign scrapes: Johannesburg, Pretoria, etc.). Removed the 3-city whitelist gate.
- `PUBLISHED_CITIES` kept as a deprecated featured shortlist only; do not use it to filter the directory.
- `DATASET_SCALE.cities` / `citiesLabel` → **65** / `"65 cities"`.
- `/cities` page copy updated for nationwide browse.

## Surfaces affected (via filters)

Cities directory, Explore city combobox, suburb/land market lists, rankings payload filter, sitemap `generateStaticParams` — all go through `filterZimbabweCities` / `filterZimbabweMarkets` / `isZimbabweCity`.

## Notes

- Thin markets remain visible (Explore still defaults to include low confidence).
- Do **not** reintroduce a 3-city publish whitelist without an explicit product decision.
