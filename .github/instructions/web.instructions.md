---
applyTo: "web/**"
---

# Web app (`web/`)

Next.js **16** App Router, React 19, Tailwind, shadcn/ui, TanStack Query, Supabase client. Deploy via **OpenNext → Cloudflare Workers** (`npm run build:cf` / `deploy` in `web/`).

## Read first

- [`web/DESIGN.md`](../../web/DESIGN.md) — typography, colour, layout rules
- [`web/README.md`](../../web/README.md) — env, scripts, deploy
- [`web/AGENTS.md`](../../web/AGENTS.md) — Next 16 may differ from training data; check `node_modules/next/dist/docs/` when unsure
- Root [`AGENTS.md`](../../AGENTS.md) — product rules

## Architecture hotspots

| Area | Location |
| ---- | -------- |
| Global Focus / lens | `src/components/providers/lens-provider.tsx`, `src/hooks/use-lens.ts`, `src/lib/lens.ts`, `src/lib/mode.ts` |
| Focus UI | `src/components/layout/global-lens-switcher.tsx`, `src/components/mobile/mobile-focus-chip.tsx`, `src/components/ui/sliding-tabs.tsx` |
| Explore | `src/components/explore/`, `src/lib/explore.ts`, `src/lib/segments.ts` |
| Suburb / city | `src/components/markets/` |
| Community contribute | `src/app/contribute/`, `src/components/rent-reports/`, `src/lib/*-reports*.ts` |
| Admin | `src/app/admin/`, `src/components/admin/` |
| Motion tokens | `src/app/globals.css` (`t-*` / transitions.dev patterns) |

## Rules for this tree

- Keep **one** global Focus control. Do not resurrect per-page switchers.
- Lens SSR/hydration: resolve **rent** until client mounted.
- Internal suburb/city links should pass `?mode=` from active lens when relevant (`suburbPath` / helpers).
- Community ranges on profiles are **not** scraped medians.
- Cottage only in rent property-type lists.
- Prefer existing shadcn components; avoid new UI libraries.
- `suppressHydrationWarning` on `<body>` is intentional (browser extensions); don’t “fix” by removing it without cause.
- After meaningful UI changes, run `npm run build` inside `web/`.

## Env

Copy `web/.env.example` → `.env.local`. Without Supabase, APIs fall back to `../data/*.json`.
