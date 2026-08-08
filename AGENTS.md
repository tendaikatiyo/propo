# Propo — Agent guide

Read this first. It is the map for any coding agent (Copilot, Cursor, Claude, etc.). Prefer these docs over inventing architecture.

**Product:** [propo.fyi](https://propo.fyi) — Zimbabwe property **market intelligence** (suburb medians, fair value, land $/sqm). **Not** a listings portal or chat bot.

**Tagline:** *Look up a suburb* — rent, sale, and land in one place.

---

## How to work in this repo

1. **Find the latest continuity doc** in [`prompts/handovers/README.md`](prompts/handovers/README.md) before large changes.
2. **Product / pitch truth:** [`prompts/PROOF_OF_WORK.md`](prompts/PROOF_OF_WORK.md).
3. **UI / design:** [`web/DESIGN.md`](web/DESIGN.md) — follow existing tokens and patterns; do not invent a new visual system.
4. **Web setup / deploy:** [`web/README.md`](web/README.md).
5. **Ship small.** Match nearby code style. Do not drive-by refactor unrelated files.
6. **Do not commit** unless the human asks. Do not push unless asked.
7. **External copy:** emphasize *proprietary / continuously updated property dataset*. Avoid leading with “scraper” language. Internal docs may reference `scraper/`.

---

## Repository map

```
propo/
├── web/                 # Next.js 16 App Router → Cloudflare Workers (OpenNext)
├── analytics/           # Python ETL, metrics, rankings, land, Supabase sync
├── scraper/             # Portal ingest modules (internal)
├── supabase/migrations/ # Postgres schema 001–017+
├── data/                # JSON outputs / local web fallback
├── .github/workflows/   # daily-pipeline, healthcheck, web-ci, Telegram
├── prompts/handovers/   # Session continuity (read the latest)
├── AGENTS.md            # This file
└── .github/copilot-instructions.md
```

| Concern | Where |
| ------- | ----- |
| Focus / lens (mostly parked) | `web/src/components/providers/lens-provider.tsx`, `web/src/lib/lens.ts`, `web/src/lib/mode.ts` |
| Explore (Suburbs \| Land directories) | `web/src/components/explore/`, `web/src/hooks/use-explore-filters.ts`, `web/src/lib/explore.ts`, `web/src/lib/land-explore.ts` |
| Community price reports | `web/src/lib/*-reports*.ts`, `web/src/components/rent-reports/`, migrations `014`–`017` |
| Admin ops | `web/src/app/admin/`, `web/src/components/admin/` |
| Design tokens / motion | `web/src/app/globals.css`, `web/DESIGN.md` |
| Daily pipeline | `analytics/run_pipeline.py`, `.github/workflows/daily-pipeline.yml` |

---

## Critical product rules (do not violate)

| Rule | Detail |
| ---- | ------ |
| **Suburb-first (Focus parked)** | Home is a suburb search prompt → full suburb profile. Focus switcher UI stays hidden. Explore tabs: **Suburbs** = directory; **Land** = land directory (optional $/sqm budget). Explore filters are **off by default** (collapsed panel; all cities; show thin markets; no land budget until set). |
| **Lens hydration** | Server + first client paint = **invest** default for Explore/legacy. No-`?mode=` product URLs resolve to invest. Suburb profiles ignore Focus and show rent + sale + land + yield together. Cities / Rankings / Compare chrome use `productSurfaceLens()` (invest) — do not stamp `?mode=` onto profile links. `/contribute` stays rent/buy/land only. |
| **Community ≠ scraped medians** | Rent/sale/land **reports** are a parallel signal. Do **not** fold them into headline `market_metrics` without an explicit product decision. |
| **Cottage = rent-only** | `RENT_ONLY_PROPERTY_TYPES` — never on buy/invest filters. |
| **Contribute + Invest** | `/contribute` is rent/buy/land only; invest is blocked. Profile/nav contribute CTAs are **hidden** for now; page still works by direct URL. |
| **Land metrics separate** | Land uses `land_metrics` / land tables — do not pollute residential medians with $/sqm. |
| **Buy tables** | Sale-focused columns — no median rent on buy tables. |

---

## Commands (easy to get wrong)

| Intent | Command | Notes |
| ------ | ------- | ----- |
| Web dev | `npm run web:dev` or `cd web && npm run dev` | |
| Web production build | `cd web && npm run build` | Used by CI |
| Web → Cloudflare | `cd web && npm run build:cf` / `deploy` | OpenNext Workers |
| Full data pipeline | `npm run pipeline:run` | Root |
| Analytics from DB | `npm run analytics:build:db` | After schema/metric changes |
| **Wrong** | Root `npm run build` | That is the **old scrape/normalize/aggregate** path — **not** the Next app |

Python: use repo `.venv` / `requirements.txt`. Web: Node in `web/`.

---

## Architecture (one paragraph)

Portals → Python scrape → SQLite warehouse → analytics rollups → Supabase (`listings`, snapshots, `market_metrics`, land tables, community report tables) → Next.js APIs/UI on Cloudflare Workers.

**Daily pipeline is live:** `.github/workflows/daily-pipeline.yml` has run successfully on schedule **every day since 2026-07-05**. Cron uses **`timezone: "Africa/Harare"`** (`04:17` pipeline, `07:45` healthcheck) + Telegram stage alerts. Schedules can still slip 3–60+ minutes on GitHub’s side.

---

## Web stack notes

- **Next.js 16** — APIs may differ from older training data. Prefer patterns already in `web/src/`. See also `web/AGENTS.md` (Next-specific warning).
- **shadcn/ui + Tailwind** — reuse components; don’t add new UI kits.
- **TanStack Query** — client data fetching where existing pages use it; don’t put QueryClient usage in Suspense fallbacks that SSR.
- **Supabase** — live dashboard; without env, APIs fall back to `../data/*.json`.
- **Focus persistence:** URL `?mode=` + `localStorage` key `propo_lens`. Explore still uses mode as a local filter. Product default remains **invest** (omitted from URLs). Suburb profiles are full dossiers (not mode-gated). Home is suburb search, not Focus.

---

## Migrations

Production Supabase has **001–017 applied** (confirmed 2026-07-10), including community reports / cottage / sighted prices (**014–017**).

For **new** schema changes: add the next numbered file under `supabase/migrations/` and apply in order. Never edit an already-applied migration in place — add a new file. Daily pipeline rebuilds metrics (including `cottage_count`) on each successful run.

---

## Design (short)

Warm editorial neutrals; suburb-first copy; photographic heroes. Fonts: Stack Sans Notch (display/wordmark), Geist Sans (headings/stats), Inter (body), Geist Mono (labels/data). Full rules: `web/DESIGN.md`. Prefer existing motion tokens / transitions.dev patterns in `globals.css` over ad-hoc animation.

---

## Testing / verification

- No full automated test suite yet. Web CI ≈ `npm run build` in `web/`.
- After UI changes: `cd web && npm run build`.
- After pipeline/schema: confirm admin + Telegram; spot-check Supabase tables.
- Pipeline ops: `/admin`, workflow runs, healthcheck Telegram.

---

## Priority backlog (context only)

1. Re-enable contribute CTAs when community push resumes; contribute/admin smoke-tests.
2. SA expansion **deferred** until ZW community model proves out — see `prompts/handovers/2026-07-08-sa-market-expansion-plan.md`.

**Done (ops):** migrations **001–017** on production; daily GHA pipeline reliable since **2026-07-05**.

---

## Latest handovers (start here for recent work)

| Doc | Topic |
| --- | ----- |
| [`2026-08-08-suburb-first-copy-and-focus-cleanup.md`](prompts/handovers/2026-08-08-suburb-first-copy-and-focus-cleanup.md) | **Policies + Focus residue** — copy aligned; no `?mode=` on profiles; cities/rankings invest surface |
| [`2026-08-07-suburb-first-raw-info.md`](prompts/handovers/2026-08-07-suburb-first-raw-info.md) | **Suburb-first cut** — home search, full dossiers, Explore Suburbs\|Land, filters off by default |
| [`2026-07-23-explore-suburb-search.md`](prompts/handovers/2026-07-23-explore-suburb-search.md) | Explore all-cities default, suburb search + suggestions |
| [`2026-07-21-investor-first-landing-cut.md`](prompts/handovers/2026-07-21-investor-first-landing-cut.md) | Investor-first cut: invest default, home invest-only, Focus UI hidden |
| [`2026-07-11-bug-audit-recently-viewed.md`](prompts/handovers/2026-07-11-bug-audit-recently-viewed.md) | Bug audit fixes, contribute fail-closed, Recently viewed |
| [`2026-07-10-community-price-reports-shipped.md`](prompts/handovers/2026-07-10-community-price-reports-shipped.md) | Community reports, cottage, sighted prices, GHA timezone |

Full index: [`prompts/handovers/README.md`](prompts/handovers/README.md).
