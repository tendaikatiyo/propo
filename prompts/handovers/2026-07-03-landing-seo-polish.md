# Session Handover — 2026-07-03 (Landing hero, SEO, admin polish)

**Status:** Shipped in working tree (not necessarily deployed)  
**Prior handovers:** [land-mode-shipped](./2026-07-03-land-mode-shipped.md), [web-polish-and-continuity](./2026-07-03-web-polish-and-continuity.md), [admin-ops-dashboard](./2026-07-01-admin-ops-dashboard.md)

---

## Summary

Replaced the rotating illustration home hero with a **full-bleed photo landing** (Harare skyline), added **mobile budget steppers** and **legibility fixes** on the glass filter panel, shipped **SEO infrastructure** (sitemap, robots, JSON-LD, search-oriented metadata), and assorted polish (404 page, OG image, contact email, city heroes, land DOM UI removal).

**Later in the same session:** made **`/admin` mobile-friendly** (card layouts instead of horizontal-scroll tables) and fixed **Cities showing 0** in admin — root cause was a fragile `sync_cities` wipe-then-upsert; hardened pipeline sync and re-populated Supabase (`65` cities).

**Final polish:** home hero uses compressed **`harare_skyline_bg_photo_small2.webp`** (~255 KB vs ~7.7 MB original); filter panel label **“Focus”** (was “My budget”); admin **Snapshot dates** stat shows `distinctDates` (not calendar span).

---

## What shipped

### Home landing hero

| Change | Path / notes |
| ------ | ------------ |
| Photo full-bleed hero | `home-landing-hero.tsx` — `HOME_LANDING_PHOTO` → **`harare_skyline_bg_photo_small2.webp`** (~255 KB; source credit unchanged) |
| Hero performance | Original `harare_skyline_bg_photo.webp` (~7.7 MB) kept in `/public` but **not** wired; `next/image` + `priority` already set |
| Filter panel label | Glass panel caption **“Focus”** (was “My budget”) |
| Film grain overlay | `web/src/app/globals.css` — `.noise-grain` |
| Liquid glass filter panel | `liquidGlassHeroPanelClass` + `.hero-glass-panel` (dark text on milky frost) in `web/src/lib/liquid-glass.ts`, `globals.css` |
| Home layout | `home-page.tsx` — hero at top; content below in `max-w-6xl` column |
| App shell | `app-shell.tsx` — home uses full-bleed `main` (no max-width on hero) |
| Removed rotating `HomeHero` | `app-shell.tsx` no longer mounts `HomeHero` on `/` |

**Mobile behaviour**

- Navbar **overlays** hero (`sticky`, frosted `bg-black/25`, white text on home only) — `mobile-top-bar.tsx`
- Hero pulled under nav via `-mt-[52px]` on hero section; content padded `pt-[calc(52px+…)]`, bottom padding for tab bar
- **+/- budget steppers** on mobile only in `budget-slider.tsx` (desktop keeps number input + slider)
- Compact headline + instructional subtitle visible on small screens

**Legibility (glass panel)**

- Problem: white text on translucent white pills was unreadable over the photo
- Fix: milky panel (`bg-white/58`), `.hero-glass-panel` CSS variables for dark text, inactive button overrides

### City hero images

| City | Asset | Credit |
| ---- | ----- | ------ |
| Harare (default) | `harare_skyline_bg2.png` illustration | — |
| Bulawayo | `joshua_nkomo_statue_byo.webp` | [VoyagesAfriq / Flickr](https://www.flickr.com/photos/122304274@N05/44447638662/) |
| Victoria Falls + others | **Default** Harare illustration | `vicfalls` removed from `HERO_IMAGES`; `heroForCitySlug()` → `DEFAULT_HERO_VARIANT` |

`site-chrome.tsx` — photo credit link when `creditUrl` present on hero image.

### Land DOM removed from UI

Aligned with residential DOM de-emphasis. Pipeline fields unchanged.

| Removed from |
| ------------ |
| `land-suburb-card.tsx`, `land-suburb-table.tsx`, `suburb-land-metrics.tsx` |
| `land-compare.ts`, `mobile/land-compare-cards.tsx` |
| `rankings-page.tsx` — “Fastest-moving stands” leaderboard |
| `listing-card.tsx` — days on market on land listings |
| `analytics/rankings.py` — `fastest_moving_land`, `longest_on_market_land` |

### SEO

| Item | Path |
| ---- | ---- |
| Sitemap | `web/src/app/sitemap.ts` — static routes + all cities + all suburb URLs; `revalidate = 3600` |
| Robots | `web/src/app/robots.ts` — allow `/`, disallow `/admin`, `/api/`; points to sitemap |
| Metadata copy | `web/src/lib/seo.ts` — `HOME_*`, `EXPLORE_*`, `suburbPageTitle/Description`; `SITE_DESCRIPTION` in `constants.ts` |
| Suburb SEO | `cities/[city]/[suburb]/page.tsx` — land $/sqm in description when available; visible subtitle on profile |
| JSON-LD | `web/src/lib/json-ld.ts`, `components/seo/json-ld.tsx` |
| Site-wide schema | `layout.tsx` — `Organization` + `WebSite` + `SearchAction` |
| Suburb schema | `BreadcrumbList` + `WebPage` + `Place` on suburb pages |

**Post-deploy GSC**

1. Submit `https://propo.fyi/sitemap.xml`
2. URL Inspection on a few suburb URLs → Request indexing
3. Confirm `NEXT_PUBLIC_SITE_URL` matches production domain

### Open Graph

| Field | Value |
| ----- | ----- |
| Image | `/og_tag_image.webp` (1200×630) — `web/src/lib/seo.ts` |
| Home title | Find houses to rent, homes to buy & land stands in Zimbabwe |
| Home description | Compare suburbs by budget — houses to let, property for sale… |
| Default image alt | Propo — houses to rent, property for sale & land in Zimbabwe |

### Other

| Item | Path |
| ---- | ---- |
| Custom 404 | `web/src/app/not-found.tsx` — `noIndex`, links to home / explore / cities / rankings |
| Contact email | `CONTACT_EMAIL = "carteayo@gmail.com"` in `constants.ts` — privacy, terms, cookies, developers, API fallback |
| `site-chrome.tsx` | Type fix: `"creditUrl" in image` for optional hero credits |

### Admin dashboard — mobile + cities sync

| Change | Path / notes |
| ------ | ------------ |
| Mobile table → cards | `web/src/components/admin/admin-dashboard.tsx` — listings by source, top cities, ingest runs use stacked cards below `md`; tables kept on desktop |
| Detail rows on mobile | `DetailRow` — vertical stack, uppercase labels, `break-words` for long dates |
| Stat grid | 2×2 on phones; slightly smaller stat values |
| Cities card hint fix | Was showing `marketMetrics.updatedAtMax`; now `cities.updatedAtMax` |
| Snapshot dates stat | Label **“Snapshot dates”**; value = `distinctDates`; hint = min→max date range (was calendar span `daysTracked`) |
| **`sync_cities` hardened** | `analytics/sync_dashboard.py` — **upsert first**, delete stale rows after (no wipe-then-upsert) |
| Row sanitization | `sanitize_city_row()` — whitelisted columns, null ints → `0`, `average_opportunity_score` default |
| Sync order | `market_metrics` → `cities` → `rankings` → `land_metrics` (optional, non-fatal on failure) |
| **Incident** | Admin **Cities: 0** when upsert failed after full delete (e.g. missing `land_count` column before migration `013`, or `land_metrics` sync aborting pipeline). Re-synced **65** cities via `python -c "from analytics.sync_dashboard import sync_cities, get_client; sync_cities(get_client())"` |

**Apply on Supabase if not done:** `013_cities_land_count.sql` (and `011`/`012` for land) — see [land-mode-shipped](./2026-07-03-land-mode-shipped.md).

---

## Key files

| Area | Path |
| ---- | ---- |
| Landing hero | `web/src/components/home/home-landing-hero.tsx`, `home-page.tsx` |
| Glass tokens | `web/src/lib/liquid-glass.ts`, `globals.css` (`.hero-glass-panel`, `.noise-grain`) |
| Budget mobile steppers | `web/src/components/filters/budget-slider.tsx` |
| Mobile nav overlay | `web/src/components/mobile/mobile-top-bar.tsx` |
| Hero routing | `web/src/lib/hero.ts` — `HOME_LANDING_PHOTO` |
| Hero assets | `web/public/harare_skyline_bg_photo_small2.webp` (live), `harare_skyline_bg_photo.webp` (archive) |
| SEO | `web/src/lib/seo.ts`, `app/sitemap.ts`, `app/robots.ts`, `lib/json-ld.ts` |
| OG asset | `web/public/og_tag_image.webp` |
| Photo credits | `web/PHOTO_CREDITS.md` |
| Admin mobile | `web/src/components/admin/admin-dashboard.tsx` |
| Dashboard sync | `analytics/sync_dashboard.py` |

---

## Photo licensing ⚠️

| File | Status |
| ---- | ------ |
| `harare_skyline_bg_photo_small2.webp` | **Live** home hero (~255 KB); derived from Erik Törner Flickr photo — [source](https://www.flickr.com/photos/eriktorner/50605941258/) |
| `harare_skyline_bg_photo.webp` | Original full-res (~7.7 MB) — **not** used on site; kept in `/public` |
| `harare_skyline_bg_photo_small.webp` | Earlier compression (~51 KB) — superseded by `small2` |
| `joshua_nkomo_statue_byo.webp` | Flickr — **All rights reserved** (VoyagesAfriq) — Bulawayo city hero |

Confirm permission before long-term production use. Illustration fallback available for Harare default hero.

---

## Verify locally

```bash
cd web && npm run dev
```

| Check | URL / action |
| ----- | ------------- |
| Photo landing + glass panel | `/` — desktop and mobile widths; **“Focus”** label on filter panel |
| Hero load time | Network tab — hero should fetch `harare_skyline_bg_photo_small2.webp` (~255 KB), not 7.7 MB original |
| Mobile +/- steppers | `/` or `/explore` — narrow viewport |
| Sticky overlay nav | `/` — scroll past hero |
| Sitemap | `/sitemap.xml` |
| Robots | `/robots.txt` |
| 404 | `/does-not-exist` |
| Suburb metadata | View source on `/cities/harare/borrowdale` — `og:title`, JSON-LD |
| Bulawayo hero + credit | `/cities/bulawayo` |
| OG preview | [opengraph.xyz](https://www.opengraph.xyz) after deploy |
| Admin mobile | `/admin` — narrow viewport; card lists, no horizontal scroll |
| Admin cities count | `/admin` — Cities stat should match `cities.json` (~65); refresh after pipeline |
| Admin snapshot dates | `/admin` — **Snapshot dates** = distinct snapshot dates, not calendar span |

```bash
cd web && npm run build
```

```bash
# Re-sync cities only (if admin Cities shows 0)
python -c "from analytics.sync_dashboard import sync_cities, get_client; sync_cities(get_client())"
```

---

## Not done / follow-ups

| Item | Notes |
| ---- | ----- |
| **Deploy** | Session changes may be uncommitted; push + Cloudflare deploy |
| **Supabase migrations** | `011`–`013` land migrations — **required** for `land_count` on `cities` upsert; see [land-mode-shipped](./2026-07-03-land-mode-shipped.md) |
| **`market_metrics` sync** | Still uses delete-then-upsert — same class of risk as old `sync_cities`; consider same upsert-first pattern later |
| **Update web-polish handover** | That doc still says photo landing was **reverted** — superseded by this session |
| **CI / smoke tests** | No automated tests added |
| **Nav on scroll** | Transparent home nav over white content below hero may need solid-on-scroll later |
| **Segment-filtered trends** | Still v2 backlog per roadmap |
| **PHOTO_CREDITS.md** | Does not yet list `small2` / `small` variants — update when documenting assets |
| **Flickr licence** | Resolve or swap to owned/licensed assets |

---

## Product positioning (session discussion)

- **Wedge:** suburb-level market intelligence (budget, medians, fair value, trends) — not a listings portal
- **SEO:** target long-tail (“median rent Borrowdale”, “land $/sqm Harare”) not head terms (“house to let Harare”)
- **Maturity:** ~85–90% of strong v1; launchable with migration + pipeline discipline; not yet set-and-forget without ops monitoring

---

## Related docs

- [2026-07-03-land-mode-plan.md](./2026-07-03-land-mode-plan.md)
- [2026-07-03-land-mode-shipped.md](./2026-07-03-land-mode-shipped.md)
- [2026-06-27-market-intelligence-roadmap.md](./2026-06-27-market-intelligence-roadmap.md) — F0–F10 complete
