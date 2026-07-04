# Session Handover — 2026-07-04 (SEO copy, design doc, mobile badge)

**Status:** Shipped in working tree (not necessarily deployed)  
**Prior handovers:** [landing-seo-polish](./2026-07-03-landing-seo-polish.md), [pipeline-ops-polish-telegram](./2026-07-04-pipeline-ops-polish-telegram.md)

---

## Summary

Aligned **SEO and Open Graph copy** with product positioning — affordability and suburb price comparison, not a listings portal. Updated the **mobile hamburger pin-count badge** to red background with white text. Replaced the minimal font notes in **`web/DESIGN.md`** with a full **Propo-specific design system** document (supersedes borrowing from `eleven labs DESIGN.md` for new work).

No pipeline, backend, or routing changes in this session.

---

## What shipped

### SEO & OG copy — affordability framing

Copy now leads with **“Where can you afford in Zimbabwe?”** and emphasises comparing house prices / suburb medians rather than finding listings.

| Field | New value |
| ----- | --------- |
| `SITE_DESCRIPTION` | Where can you afford in Zimbabwe? Compare suburb house prices — median rents, sale prices, and land per sqm… |
| `HOME_PAGE_TITLE` | Where can you afford in Zimbabwe? — compare house prices by suburb |
| `HOME_PAGE_DESCRIPTION` | Set your rent or buy budget and compare suburb prices… |
| `EXPLORE_PAGE_TITLE` | Where can you afford? — compare suburbs by budget |
| `EXPLORE_PAGE_DESCRIPTION` | Compare house prices across Zimbabwe suburbs against your budget… |
| `OG_IMAGE_ALT` | Propo — Where can you afford in Zimbabwe? Compare house prices by suburb |
| Suburb page title suffix | `{suburb}, {city} — house prices & affordability` |
| Suburb meta description | “Compare house prices…” + “affordability signals” (was “active listings”) |
| JSON-LD suburb page name | Matches suburb title suffix above |

**Files:** `web/src/lib/constants.ts`, `web/src/lib/seo.ts`, `web/src/lib/json-ld.ts`

**Supersedes** the OG table in [2026-07-03-landing-seo-polish.md](./2026-07-03-landing-seo-polish.md) (which still documents listing-oriented titles).

**Unchanged:** OG image path (`/og_tag_image.webp`), sitemap, robots, JSON-LD structure, hero on-page copy (already said “Where can you afford in Zimbabwe?”).

### Mobile — hamburger pin badge

When suburbs are pinned for compare, the count badge on the hamburger menu uses **`bg-destructive`** + **`text-white`** (was `bg-primary` / `text-primary-foreground`).

**File:** `web/src/components/mobile/mobile-top-bar.tsx`

### Design system documentation

**`web/DESIGN.md`** — comprehensive Propo design reference (~400 lines):

| Section | Contents |
| ------- | -------- |
| Brand & voice | Affordability-first, data index positioning, tagline, wordmark rules |
| Typography | Stack Sans Notch / Geist Sans / Inter / Geist Mono + table rules |
| Color | CSS tokens, chart pastels, ZW footer orbs, semantic data colours |
| Layout | Sidebar shell, mobile chrome, spacing |
| Surfaces | Feature cards, liquid glass, film grain |
| Photography | Home photo vs city heroes, credits |
| Components | Nav, buttons, badges, filters, data cards |
| Do's / Don'ts | No logo icon, glass only on photos, etc. |
| Implementation map | File paths |

**Legacy:** `web/eleven labs DESIGN.md` kept for history — **do not use for new work**; follow `web/DESIGN.md`.

---

## Key files

| Area | Path |
| ---- | ---- |
| Site description | `web/src/lib/constants.ts` — `SITE_DESCRIPTION` |
| Page SEO constants | `web/src/lib/seo.ts` — `HOME_*`, `EXPLORE_*`, `suburbPageTitle/Description`, `OG_IMAGE_ALT` |
| Suburb schema copy | `web/src/lib/json-ld.ts` — `suburbPageJsonLd` page name |
| Pin badge | `web/src/components/mobile/mobile-top-bar.tsx` |
| Design system | `web/DESIGN.md` |
| Legacy reference | `web/eleven labs DESIGN.md`, old `web/DESIGN.md` (font-only, replaced) |

---

## Verify locally

```bash
cd web && npm run dev
```

| Check | Action |
| ----- | ------ |
| Home `<title>` / meta | View source on `/` — affordability title, not “Find houses to rent…” |
| Explore metadata | View source on `/explore` |
| Suburb metadata | View source on `/cities/harare/borrowdale` — “house prices & affordability” |
| OG tags | `<meta property="og:description">` and `og:image:alt` on `/` |
| Pin badge | Mobile width → pin 1+ suburbs → hamburger shows **red** badge with white count |
| Design doc | Read `web/DESIGN.md` for agent/design continuity |

```bash
cd web && npm run build
```

After deploy: re-check [opengraph.xyz](https://www.opengraph.xyz) — social caches may still show old copy until refresh.

---

## Not done / follow-ups

| Item | Notes |
| ---- | ----- |
| **Deploy** | Changes may be uncommitted; push + Cloudflare deploy for live SEO/social |
| **GSC re-crawl** | Request indexing on `/` after deploy if title/description changed materially |
| **OG image artwork** | Image file unchanged — copy in alt/title updated; consider redesigning OG graphic to match affordability messaging |
| **On-page hero subtitle** | Still mentions “find suburbs that match — backed by live listing data” — intentional product copy on hero, not meta; align later if desired |
| **Prior handover OG table** | [2026-07-03-landing-seo-polish.md](./2026-07-03-landing-seo-polish.md) OG section is stale |
| **Agent rules** | Optional: point `web/AGENTS.md` or a Cursor rule at `web/DESIGN.md` for design tasks |

---

## Product positioning (session)

- **Wedge unchanged:** suburb-level market intelligence — budget, medians, trends, fair value
- **SEO shift:** meta copy now matches hero tagline and affordability framing (compare prices, not browse listings)
- **Design doc:** single source of truth for fonts, glass, photography, and “data index not portal” voice

---

## Related docs

- [2026-07-03-landing-seo-polish.md](./2026-07-03-landing-seo-polish.md) — sitemap, robots, JSON-LD infrastructure
- [2026-07-04-pipeline-ops-polish-telegram.md](./2026-07-04-pipeline-ops-polish-telegram.md) — same-day pipeline/GHA work (separate session)
- [web/DESIGN.md](../../web/DESIGN.md) — Propo design system
- [web/PHOTO_CREDITS.md](../../web/PHOTO_CREDITS.md) — hero/OG asset credits
