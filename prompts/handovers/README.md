# Session handovers

Chronological notes for agent/developer continuity between sessions.

| Date | File | Topics |
|---|---|---|
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
