# 2026-08-11 — LLM-readable suburb pages

## Summary

Improved suburb profile pages so they are easier for crawlers and LLM-oriented parsers to understand without adding visible UI noise.

## What changed

- Added richer JSON-LD for suburb pages, including place/about/mainEntity context and key metrics:
  - median rent
  - median sale price
  - gross yield
  - land price per sqm
- Added a hidden semantic facts section on suburb profiles for machine-readable summaries.
- Tightened the page metadata/description copy to be more explicit and structured around the same facts.
- Removed the extra visible at-a-glance paragraph from the main profile body so the experience stays cleaner.

## Files touched

- web/src/lib/json-ld.ts
- web/src/app/cities/[city]/[suburb]/page.tsx
- web/src/components/markets/suburb-profile.tsx
- web/src/lib/seo.ts

## Notes

- The hidden facts block is intentionally visually hidden but present in the DOM for downstream parsers.
- The visible UI remains focused on the core suburb experience while structured facts are preserved for search engines and assistants.
- This is a lightweight SEO/LLM-readability enhancement rather than a UX rewrite.
