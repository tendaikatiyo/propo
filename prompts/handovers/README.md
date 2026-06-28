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
