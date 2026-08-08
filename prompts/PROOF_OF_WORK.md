# Propo — Proof of Work Brief

**Product:** [Propo](https://propo.fyi) — Zimbabwe property market intelligence platform  
**Tagline:** *Look up a suburb* — rent, sale, and land insights backed by a **continuously updated property market database**.  
**Status:** Production v1 live at propo.fyi; dataset refreshed every 24 hours via GitHub Actions (`daily-pipeline.yml` reliable since 2026-07-05); Supabase migrations **001–017** applied; suburb-first UX cut (home search → full dossiers; Explore Suburbs|Land directories).

---

## One-liner (for bios / pitches)

Solo-built full-stack data product: a **proprietary, continuously updated Zimbabwe property dataset** (400k+ historical observations) ingested from three major online portals, normalized and rolled up into suburb medians, fair-value signals, trend charts, and rankings — served through a fast Next.js app on Cloudflare Workers. Positioned as **market intelligence**, not another listings portal.

---

## Dataset at a glance

| Metric | Scale |
|--------|--------|
| Active listings | ~14,000 (rent, sale, land) |
| Historical observations | 400k+ listing snapshots |
| Suburb markets | 378 residential · 310 land |
| Cities | 65 |
| Update cadence | Every 24 hours |
| Source coverage | Zimbabwe's three largest online property portals (PropertyBook, Property.co.zw, Classifieds) |

---

## Problem & product thesis

Zimbabwe property search is fragmented across major online portals. Users see individual listings but lack **suburb context**: median rent, sale prices, land $/sqm, whether a listing is fair value, and how a market is moving over time.

**Propo's wedge:** answer *"what's happening in this suburb?"* — medians, yield, land $/sqm, fair value, and trends — not *"show me every house for rent."*

Explicitly **not** a chat/listings aggregator; competes on structured intelligence (suburb dossiers, Explore directories, movers, printable suburb reports, compare tool).

**Primary flow:** search or browse a suburb → full rent + sale + land profile. Explore filters are optional.

**What buyers care about:** the **dataset** — history, normalization, coverage, and analytics — not how it is collected.

---

## System architecture

```
3 property portals (PropertyBook · Property.co.zw · Classifieds)
                    ↓
            Python ETL (daily)
                    ↓
         SQLite (historical warehouse)
                    ↓
           Analytics engine
     (medians · segments · land · rankings)
                    ↓
              Supabase (Postgres)
    listings · snapshots · market_metrics · daily rollups
                    ↓
              Next.js (App Router)
                    ↓
         Cloudflare Workers (OpenNext)
```

**Pipeline automation:** GitHub Actions `daily-pipeline.yml` — **live and reliable since 2026-07-05**. Cron `04:17` Africa/Harare (`timezone:` on schedule) → Telegram stage alerts (collect / analytics / ingest + data-quality stats). Healthcheck ~`07:45` Harare.

---

## What was built (scope)

### Data & pipeline (Python)

- **Proprietary property dataset** built from three major online portals — rentals, sales, and residential land.
- **Historical compounding:** daily snapshots, days-on-market, listing deactivation, image URLs — 400k+ observations and growing.
- **Normalization layer:** ZIG→USD price fixes, suburb→city overrides, `market_id` canonical joins, land vs residential separation.
- **Analytics engine:** suburb/city rollups, segment-specific medians (type + bedrooms), yield/opportunity scores, national rankings, land $/sqm metrics.
- **Cloud sync:** Supabase Postgres — `listings`, `listing_snapshots`, `market_snapshots_daily`, `land_snapshots_daily`, dashboard tables.
- **Daily automation:** full refresh every 24 hours; manual ingest-only workflows for recovery.
- **Ops:** `/admin` dashboard, ingest run logging with runtime, Telegram pipeline alerts.

### Web app (Next.js 16, App Router)

- **Explore:** Rent · Buy · Land · **Invest** lenses; **global Focus** (sidebar / mobile chip); budget + property-type filters; lens-aware tables and cards.
- **Suburb profiles:** lens-gated metrics; rent summary vs full invest report; unified mobile action dock (`View listings` · `Compare` · Pin).
- **Cities, Compare, Rankings:** follow global Focus (no per-page switcher); compare inherits last lens; rankings land via lens not tab.
- **Land mode:** $/sqm from `land_metrics`; city land table uses `LandSuburbTable` (not residential columns).
- **SEO:** 800+ URLs in sitemap, JSON-LD, Open Graph.
- **About:** founder story; **Developers:** future API interest.
- **Analytics:** consent-gated first-party events + Google Analytics after cookie accept.
- **Deploy:** Cloudflare Workers + Supabase; local JSON fallback for dev.

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
| F10 | Product analytics (consent + events API + Google Analytics) | ✅ |
| F11 | User lens (Rent · Buy · Land · Invest) + global Focus across home → rankings | ✅ |
| + | Land mode, admin ops, GHA automation, About, mobile dock / hydration polish | ✅ |
| + | Community price reports (rent/sale/land) + cottage + admin sighted prices | ✅ |

---

## Future moat (competitive advantage)

The durable advantage is **not the UI**. It compounds in four layers:

1. **Historical data** — every daily run adds snapshots; trends and movers require time series competitors cannot copy overnight.
2. **Normalization** — Zimbabwe-specific fixes (currency, geo mislabels, land vs residential, segment buckets) turn messy portal text into reliable suburb keys.
3. **Analytics** — transparent medians, yields, fair-value rules, and confidence scoring — tuned for this market, not generic Zillow clones.
4. **Coverage** — breadth across portals, suburbs, cities, and listing types (rent · buy · land) in one database.

Everything shipped should strengthen these four — UI is the lens; the dataset is the product.

---

## Technical stack (for résumé keyword matching)

| Layer | Technologies |
|-------|----------------|
| Frontend | Next.js 16, React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query |
| Backend / API | Next.js Route Handlers, middleware, JSON-LD |
| Database | Supabase (Postgres), RLS, SQL migrations, RPC functions |
| Data pipeline | Python 3.12, SQLite warehouse, daily ETL, analytics rollups |
| Infra | Cloudflare Workers (OpenNext), GitHub Actions (daily refresh + web CI) |
| Observability | `/admin` ops dashboard, Telegram pipeline alerts, GA4 (consent-gated) |

---

## Demonstrates ability to

1. **Own a product end-to-end** — data collection → warehousing → analytics → API → UI → deploy.
2. **Design for a real market** — Zimbabwe-specific normalization, multi-currency fixes, land vs residential separation.
3. **Ship incrementally** — 25+ session handover docs, phased roadmap (F0–F10), land mode in 5 phases.
4. **Operate data systems** — admin dashboard, 24h refresh, Telegram alerts, migration discipline.
5. **Build for discovery** — sitemap, structured data, long-tail SEO copy.
6. **Think in systems** — multi-stage ETL, historical warehouse, rollup tables, edge-deployed consumer app.

---

## Sample talking points (interviews / proposals)

- *"I built a compounding property market database — 400k+ observations updated every 24 hours, so we can show 90-day rent movers, not just today's median."*
- *"Coverage spans ~14k active listings across 378 suburb markets and 65 cities, aggregated from Zimbabwe's three largest online property portals."*
- *"Fair value isn't ML — it's transparent rules: listing price vs suburb median for the same segment, with confidence badges when sample size is thin."*
- *"Land is a separate metrics table so residential medians aren't polluted by $/sqm stands."*
- *"Production runs on Cloudflare Workers with Supabase; the Python ETL runs on a GitHub Actions cron with Telegram alerts at each stage."*
- *"Suburb profiles show rent, sale, land, and yield together — look up a place once instead of switching Focus modes for each signal."*

---

## Honest limitations (shows judgment)

- No automated test suite yet; web CI runs `npm run build` only; pipeline is monitored via `/admin` + Telegram + schedule healthcheck (daily GHA itself is reliable since 2026-07-05).
- Portal source fragility (HTML changes, IP blocking) — highest operational risk to refresh cadence.
- Land trend charts temporarily hidden until `land_snapshots_daily` accumulates 2+ snapshot dates.
- Photo licensing on Flickr hero assets needs confirmation before long-term commercial use.
- `market_metrics` sync still uses delete-then-upsert (cities sync was hardened after a production incident).
- Segment-filtered trends and compare sparklines are v2 backlog.

---

## Repo structure (for technical reviewers)

```
propo/
├── scraper/            # portal ingest modules (internal — not user-facing branding)
├── analytics/          # ETL, metrics, rankings, land, sync_dashboard
├── .github/workflows/  # daily-pipeline, ingest-only, web-ci
├── data/               # JSON outputs + clean datasets
├── supabase/           # migrations 001–017 (incl. community reports)
├── web/                # Next.js app (Cloudflare deploy)
└── prompts/handovers/  # 30+ continuity docs
```

---

## Suggested external framing

**For portfolio:** *"Propo — suburb-level property intelligence for Zimbabwe, built on a proprietary market database"*  
**For freelance/clients:** *"Full-stack data product: continuously updated property dataset, analytics pipeline, production web app"*  
**For data roles:** *"Daily ETL + 400k+ observation warehouse + suburb rollups on Postgres"*  
**For frontend roles:** *"Next.js App Router product with 800+ SSG routes exploring a live property database"*

---

## Contact / links

- **Live site:** `https://propo.fyi`
- **GitHub:** `https://github.com/tendaikatiyo/propo`
- **Contact:** `carteayo@gmail.com`

---

## Agent instructions

Use this as source of truth for Propo. **External copy:** emphasize *proprietary / continuously updated property dataset* — avoid leading with "scraper" language. **Internal/technical docs** may reference ingest modules in `scraper/`. Do not invent features beyond F0–F11 + land mode + community price reports + admin/automation/About. **Agents:** read root `AGENTS.md` and `.github/copilot-instructions.md` first. Latest handovers: `prompts/handovers/2026-07-10-community-price-reports-shipped.md`, `prompts/handovers/2026-07-05-user-lens-shipped.md`, `prompts/handovers/2026-07-05-user-flow-fixes.md`.
