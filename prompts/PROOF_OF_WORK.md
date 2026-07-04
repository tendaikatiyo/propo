# Propo — Proof of Work Brief

**Product:** [Propo](https://propo.fyi) — Zimbabwe property market intelligence platform  
**Tagline:** *Where can you afford?* — suburb-level rent, sale, and land insights backed by live listing data.  
**Status:** Production-grade v1 (~85–90% complete); deployable with pipeline + Supabase ops discipline.

---

## One-liner (for bios / pitches)

Solo-built full-stack data product that scrapes Zimbabwe's major property portals, compounds historical listing data, and serves suburb-level medians, fair-value signals, trend charts, and rankings through a fast Next.js app on Cloudflare Workers — positioned as **market intelligence**, not another listings portal.

---

## Problem & product thesis

Zimbabwe property search is fragmented across PropertyBook, Property.co.zw, and Classifieds. Users see individual listings but lack **suburb context**: median rent, sale prices, land $/sqm, whether a listing is fair value, and how a market is moving over time.

**Propo's wedge:** answer *"where can I afford?"* and *"is this price normal for this suburb?"* — not *"show me every house for rent."*

Explicitly **not** a chat/listings aggregator; competes on structured intelligence (budget filters, segment medians, movers, printable suburb reports, compare tool).

---

## What was built (scope)

### Data & pipeline (Python)

- **Multi-source scrapers** for rentals, sales, and residential land (PropertyBook, Property.co.zw, Classifieds).
- **Historical compounding:** SQLite ingest with daily snapshots, days-on-market, listing deactivation, image URLs.
- **Cloud sync:** Supabase Postgres ingest + dashboard tables (`market_metrics`, `land_metrics`, `cities`, `rankings`, daily snapshot tables).
- **Analytics engine:** suburb/city rollups, segment-specific medians (type + bedrooms), yield/opportunity scores, national rankings, land $/sqm metrics, geo overrides for mislabeled suburbs (e.g. Zimre Park → Ruwa).
- **Daily automation:** `run_daily` = scrape → ingest → analytics build → Supabase sync.

**Scale (representative pipeline run):**

- ~14,000 active listings across rent, sale, and land
- ~378 residential suburb markets, ~310 land suburb markets
- ~65 cities tracked
- 400k+ historical listing snapshots

### Web app (Next.js 16, App Router)

- **Explore:** Rent | Buy | Land modes; budget slider with mobile steppers; property-type filters; suburb ranking by affordability.
- **Suburb profiles:** medians, fair-value badges, 30/90/180-day trend charts, sample-size transparency, printable market report.
- **Cities directory, Compare (up to 3 suburbs), Rankings + national movers.**
- **Land mode:** full parallel path — $/sqm budget, land listings API, land compare/rankings/trends.
- **Home landing:** full-bleed photo hero, liquid-glass filter panel, mobile-first nav overlay.
- **SEO:** dynamic sitemap (800+ URLs), robots.txt, JSON-LD (Organization, WebSite, BreadcrumbList, Place), search-oriented metadata.
- **Ops:** private `/admin` dashboard (pipeline health, listing inventory, ingest runs, data quality) with mobile-friendly layout.
- **Analytics MVP:** consent-gated event tracking to Supabase.
- **Deploy:** OpenNext on **Cloudflare Workers**; Supabase for live data; local JSON fallback for dev.

### UX & engineering quality

- Mobile-first (sticky nav, tab bar, card layouts on admin, budget steppers).
- shadcn/ui + Tailwind; TanStack Query; type-safe data layer with Supabase + fallback.
- Performance work: hero image compressed from ~7.7 MB → ~255 KB; `next/image` + priority loading.
- Data quality: price normalization (ZIG→USD), rent reconciliation, `market_id` canonical joins, suburb→city override map.

---

## Feature roadmap delivered (F0–F10)

| # | Feature | Delivered |
|---|---------|-----------|
| F0 | Pipeline type normalization | ✅ |
| F1 | Segment medians + Explore polish | ✅ |
| F2 | Price trends (daily snapshots + charts) | ✅ |
| F3 | Fair value badges + SEO/Open Graph | ✅ |
| F4 | Printable suburb market report | ✅ |
| F5 | Spec-aware suburb compare | ✅ |
| F6 | National movers + rankings | ✅ |
| F7 | Home affordability insight cards | ✅ |
| F8 | Transparency (sample size, scope labels, methodology) | ✅ |
| F9 | `market_id` on listings for reliable joins | ✅ |
| F10 | Product analytics (consent + events API) | ✅ |
| + | Land mode (Rent/Buy/Land), admin ops, landing/SEO polish | ✅ |

---

## Technical stack (for résumé keyword matching)

| Layer | Technologies |
|-------|----------------|
| Frontend | Next.js 16, React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query |
| Backend / API | Next.js Route Handlers, middleware, JSON-LD |
| Database | Supabase (Postgres), RLS, SQL migrations, RPC functions |
| Pipeline | Python 3.12, SQLite, BeautifulSoup/scrapers, pandas-style analytics |
| Infra | Cloudflare Workers (OpenNext), GitHub repo, optional GCP VM for daily cron |
| Data | 13+ Supabase migrations, historical snapshots, ingest run logging |

---

## Demonstrates ability to

1. **Own a product end-to-end** — scraping → warehousing → analytics → API → UI → deploy.
2. **Design for a real market** — Zimbabwe-specific geo normalization, multi-currency price fixes, land vs residential separation.
3. **Ship incrementally** — 20+ session handover docs, phased roadmap (F0–F10), land mode in 5 phases.
4. **Operate data systems** — admin dashboard, sync hardening, migration discipline, backfill scripts.
5. **Build for discovery** — sitemap, structured data, long-tail SEO copy.
6. **Polish for mobile** — not an afterthought; core flows redesigned for small screens.

---

## Sample talking points (interviews / proposals)

- *"I built a compounding property dataset — every daily scrape adds to history, so we can show 90-day rent movers, not just today's median."*
- *"Fair value isn't ML — it's transparent rules: listing price vs suburb median for the same segment, with confidence badges when sample size is thin."*
- *"Land is a separate metrics table so residential medians aren't polluted by $/sqm stands."*
- *"Production runs on Cloudflare Workers with Supabase; the Python pipeline can run on a VM or GitHub Actions."*
- *"I caught a data bug where portals label Zimre Park as Harare — fixed with a suburb→city override map in the ingest layer."*

---

## Honest limitations (shows judgment)

- Photo licensing on Flickr hero assets needs confirmation before long-term commercial use.
- No automated CI/test suite yet; verification is manual + admin dashboard.
- `market_metrics` sync still uses delete-then-upsert (cities sync was hardened after a production incident).
- Segment-filtered trends and compare sparklines are v2 backlog.

---

## Repo structure (for technical reviewers)

```
propo/
├── scraper/          # PropertyBook, Property.co.zw, Classifieds
├── analytics/        # ingest, metrics, rankings, land, sync_dashboard
├── data/             # JSON outputs + clean datasets
├── supabase/         # migrations 001–013
├── web/              # Next.js app (Cloudflare deploy)
└── prompts/handovers/  # 20+ continuity docs
```

---

## Suggested external framing

**For portfolio:** *"Propo — suburb-level property intelligence for Zimbabwe"*  
**For freelance/clients:** *"Full-stack data product: scrapers, analytics pipeline, and production web app"*  
**For data roles:** *"Daily ETL + historical warehousing + rollups served via Postgres RPC and REST APIs"*  
**For frontend roles:** *"Next.js App Router product with 800+ SSG routes, mobile-first explore UX, and chart-heavy suburb profiles"*

---

## Contact / links (fill in)

- **Live site:** `https://propo.fyi`
- **GitHub:** `[your repo URL]`
- **Contact:** `carteayo@gmail.com`

---

## Agent instructions

Use this as source of truth for Propo. Do not invent features beyond F0–F10 + land mode + admin/SEO. Emphasize market intelligence positioning and full-stack ownership.
