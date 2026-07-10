# Propo — GitHub Copilot instructions

You are working in **Propo**, a Zimbabwe property **market intelligence** app (suburb medians, affordability, fair value) — **not** a listings portal.

**Canonical agent map:** read [`AGENTS.md`](../AGENTS.md) at the repo root before large changes. Continuity: [`prompts/handovers/README.md`](../prompts/handovers/README.md). Product brief: [`prompts/PROOF_OF_WORK.md`](../prompts/PROOF_OF_WORK.md). Design: [`web/DESIGN.md`](../web/DESIGN.md).

## Layout

| Path | Role |
| ---- | ---- |
| `web/` | Next.js 16 App Router → Cloudflare Workers (OpenNext) |
| `analytics/` | Python metrics, rankings, land, ingest/sync |
| `scraper/` | Portal ingest (internal; don’t lead external copy with “scraper”) |
| `supabase/migrations/` | Schema 001–017+ (**001–017 applied** on production) |
| `data/` | JSON outputs / local API fallback |
| `.github/workflows/` | Daily pipeline (**live since 2026-07-05**), healthcheck, web CI |

## Non-negotiables

- **Global Focus** (Rent · Buy · Land · Invest) only — sidebar / mobile chip. Do not add per-page lens switchers. Home = hero intent only.
- **Hydration:** first paint lens = **rent**; apply `localStorage` (`propo_lens`) / `?mode=` after mount.
- **Community reports** (migrations 014–017) stay **parallel** to scraped medians — never merge into headline metrics without an explicit product decision.
- **Cottage** is rent-only. **Invest** is blocked on `/contribute`.
- **Land** metrics stay separate from residential medians.
- Match existing code style; no unrelated refactors; no secrets in commits.

## Commands

- Web: `cd web && npm run dev` / `npm run build` (CI). Cloudflare: `npm run build:cf` / `deploy` inside `web/`.
- Pipeline: `npm run pipeline:run` at repo root. Analytics rebuild: `npm run analytics:build:db`.
- **Never** treat root `npm run build` as the Next.js build — that path is scrape/normalize/aggregate.

## When unsure

1. Open the latest file in `prompts/handovers/`.
2. Mirror patterns in neighbouring files under `web/src/` or `analytics/`.
3. Prefer `web/DESIGN.md` tokens over new colours/fonts/layouts.
