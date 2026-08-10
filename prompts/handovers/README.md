# Session handovers

Chronological notes for agent/developer continuity between sessions.

**Agent onboarding (Copilot / any agent):** start at repo-root [`AGENTS.md`](../../AGENTS.md), then [`.github/copilot-instructions.md`](../../.github/copilot-instructions.md). Path-specific rules: [`.github/instructions/`](../../.github/instructions/).

| Date | File | Topics |
|---|---|---|
| 2026-08-10 | [2026-08-10-zw-mapping-data-opportunities.md](./2026-08-10-zw-mapping-data-opportunities.md) | **ZW last-mile maps** — B2B opportunities, OSM vs Google, Contribute + GMCP contribution paths |
| 2026-08-10 | [2026-08-10-publish-all-zimbabwe-cities.md](./2026-08-10-publish-all-zimbabwe-cities.md) | **All ZW cities** — drop Harare/Bulawayo/Ruwa whitelist; ~65 cities; exclude foreign scrapes only |
| 2026-08-08 | [2026-08-08-suburb-first-copy-and-focus-cleanup.md](./2026-08-08-suburb-first-copy-and-focus-cleanup.md) | **Policies + Focus residue** — methodology/legal copy; no `?mode=` on profiles; cities/rankings invest surface; contribute CTAs hidden |
| 2026-08-07 | [2026-08-07-suburb-first-raw-info.md](./2026-08-07-suburb-first-raw-info.md) | **Suburb-first cut** — home search, full dossiers, Explore Suburbs\|Land directories, filters off by default |
| 2026-07-21 | [2026-07-21-investor-first-landing-cut.md](./2026-07-21-investor-first-landing-cut.md) | **Investor-first cut** — invest default lens, home invest-only, Focus UI hidden |
| 2026-06-11 | `../handover.md` | Frontend dashboard, Investment Finder label fix |
| 2026-06-14 | [2026-06-14-scrapers-history-compounding.md](./2026-06-14-scrapers-history-compounding.md) | Classifieds scrapers, historical SQLite compounding, pipeline, architecture |
| 2026-06-17 | [2026-06-17-vm-supabase-n8n-automation.md](./2026-06-17-vm-supabase-n8n-automation.md) | GCP VM bootstrap, Supabase ingest, n8n external runners, 403 IP blocking; **interim manual plan** (daily scrape + daily full Supabase sync) |
| 2026-06-25 | [2026-06-25-days-on-market-metrics.md](./2026-06-25-days-on-market-metrics.md) | Days on market per listing, suburb/city rollups, Supabase migrations 003–004, `analytics:build:db`, easishop.db inventory |
| 2026-06-25 | [2026-06-25-github-actions-automation.md](./2026-06-25-github-actions-automation.md) | Cloudflare Workers vs GitHub Actions for daily pipeline; GHA can run scrape + full Supabase ingest; workflow template (not committed) |
| 2026-06-25 | [2026-06-25-web-ux-listings-explore.md](./2026-06-25-web-ux-listings-explore.md) | Next.js web UX pass: sidebar/hero, explore filters, listings API, suburb 404 fix, rankings confidence filter, loading skeletons; right panel removed |
| 2026-06-26 | [2026-06-26-segment-medians-option-b.md](./2026-06-26-segment-medians-option-b.md) | Spec-specific median rent/sale (type + bedroom filters); Option B pre-aggregate `segments` JSONB on `market_metrics`; pipeline, migration, web resolver, phased rollout |
| 2026-06-27 | [2026-06-27-market-intelligence-roadmap.md](./2026-06-27-market-intelligence-roadmap.md) | Prioritized market intelligence features (trends, fair value, movers, reports, compare, transparency); no chat; file touch lists per feature F0–F10 |
| 2026-06-28 | [2026-06-28-f0-f1-segment-explore-polish.md](./2026-06-28-f0-f1-segment-explore-polish.md) | F0+F1 shipped; segment medians, Explore fallback UX, filter switches, room/buy rules; next F2 |
| 2026-06-28 | [2026-06-28-f2-trends-classifieds-prices.md](./2026-06-28-f2-trends-classifieds-prices.md) | F2 trends API + charts; city movers rent/sale toggle; classifieds ZIG→USD price fix + repair |
| 2026-06-29 | [2026-06-29-f3-fair-value-movers-seo.md](./2026-06-29-f3-fair-value-movers-seo.md) | F3 fair value badges; city movers plausibility fix; Open Graph / Twitter SEO |
| 2026-06-29 | [2026-06-29-listing-thumbnails-image-url.md](./2026-06-29-listing-thumbnails-image-url.md) | Listing thumbnails; `image_url` pipeline; classifieds carousel scrape; migration 007 |
| 2026-06-30 | [2026-06-30-pipeline-run-scraper-migration-fixes.md](./2026-06-30-pipeline-run-scraper-migration-fixes.md) | Full pipeline run; `normalize_city` scraper fix; Supabase migration 007 apply; ingest sync |
| 2026-06-30 | [2026-06-30-f4-f5-report-compare.md](./2026-06-30-f4-f5-report-compare.md) | F4 printable suburb report; F5 spec-aware compare; roadmap F0–F5 tick refresh |
| 2026-07-01 | [2026-07-01-f6-movers-rankings.md](./2026-07-01-f6-movers-rankings.md) | F6 national movers tab; home teaser; leaderboard confidence backfill; cheapest-rent fix; Rankings nav restored |
| 2026-07-01 | [2026-07-01-f7-f8-f9-insights-transparency-market-id.md](./2026-07-01-f7-f8-f9-insights-transparency-market-id.md) | F7 home budget insights; F8 transparency (sample size, scope, methodology limits); F9 `market_id` join + migration 008 |
| 2026-07-01 | [2026-07-01-admin-ops-dashboard.md](./2026-07-01-admin-ops-dashboard.md) | Private `/admin` ops dashboard; `ADMIN_SECRET` auth; service-role stats RPC; migration `009_admin_dashboard.sql` |
| 2026-07-01 | [2026-07-01-f10-analytics-mvp.md](./2026-07-01-f10-analytics-mvp.md) | F10 consent + `/api/events`; `analytics_events` table; migration `010_analytics.sql`; explore/suburb/listing instrumentation |
| 2026-07-03 | [2026-07-03-web-polish-and-continuity.md](./2026-07-03-web-polish-and-continuity.md) | UX polish (DOM, bedroom, mobile); property-type icons; liquid-glass buttons; photo credits; developers interest; photo landing reverted |
| 2026-07-03 | [2026-07-03-land-mode-plan.md](./2026-07-03-land-mode-plan.md) | Land mode product plan (Rent \| Buy \| Land); phased implementation spec |
| 2026-07-03 | [2026-07-03-land-mode-shipped.md](./2026-07-03-land-mode-shipped.md) | **Land mode shipped** (Phases 1–5); city listing counts + `land_count`; migrations 011–013 |
| 2026-07-03 | [2026-07-03-landing-seo-polish.md](./2026-07-03-landing-seo-polish.md) | Photo landing hero, SEO (sitemap/robots/JSON-LD), OG image, 404, contact email; admin mobile UX; `sync_cities` fix (Cities: 0) |
| 2026-07-04 | [2026-07-04-pipeline-ops-polish-telegram.md](./2026-07-04-pipeline-ops-polish-telegram.md) | GHA daily pipeline live; Telegram stage alerts; admin ingest runtime; logomark/motion/hero; land trends hidden; freshness pill datetime; hero credit removed; `/about` page |
| 2026-07-04 | [2026-07-04-brand-seo-design-doc.md](./2026-07-04-brand-seo-design-doc.md) | SEO/OG copy → affordability framing; red hamburger pin badge; `web/DESIGN.md` Propo design system |
| 2026-07-05 | [2026-07-05-user-lens-plan.md](./2026-07-05-user-lens-plan.md) | User lens product plan (Rent \| Buy \| Land \| Invest); metric matrix; Phases 1–4 spec |
| 2026-07-05 | [2026-07-05-user-lens-shipped.md](./2026-07-05-user-lens-shipped.md) | **User lens shipped** (Phases 1–4); global Focus; city land table; compare last-lens |
| 2026-07-05 | [2026-07-05-user-flow-fixes.md](./2026-07-05-user-flow-fixes.md) | Mobile Focus chip, explore budget sync, mobile dock, scroll-to-top, lens hydration/SSR fixes |
| 2026-07-08 | [2026-07-08-zw-community-rent-reports-plan.md](./2026-07-08-zw-community-rent-reports-plan.md) | **Priority** — anonymous community rent reports on ZW; prerequisite before SA |
| 2026-07-08 | [2026-07-08-sa-market-expansion-plan.md](./2026-07-08-sa-market-expansion-plan.md) | SA expansion plan — Property24/Private Property, separate Supabase, rent+buy only, OSM maps, SIA |
| 2026-07-08 | [2026-07-08-sa-expansion-planning-handover.md](./2026-07-08-sa-expansion-planning-handover.md) | SA planning session handover; Property24 scrape recon; dual Vercel+CF hosting; propo.co.za taken |
| 2026-07-10 | [2026-07-10-community-price-reports-shipped.md](./2026-07-10-community-price-reports-shipped.md) | **Community rent/sale/land reports shipped**; cottage; admin sighted prices; mobile forms; transitions.dev |
| 2026-07-11 | [2026-07-11-bug-audit-recently-viewed.md](./2026-07-11-bug-audit-recently-viewed.md) | **Bug audit #1–18 fixed**; contribute fail-closed; `CONTRIBUTION_HASH_SALT`; home Recently viewed (localStorage) |
| 2026-07-23 | [2026-07-23-explore-suburb-search.md](./2026-07-23-explore-suburb-search.md) | **Explore discovery** — default all cities; suburb search + desktop Google-style suggestions |
