# Propo Web

Production frontend for the Zimbabwe property data index.

## Stack

- Next.js (App Router)
- shadcn/ui + Tailwind CSS
- TanStack Query
- Supabase (dashboard tables) with local JSON fallback from `../data/`

## Setup

```bash
cd web
cp .env.example .env.local
# Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Without Supabase credentials, API routes fall back to `../data/market_metrics.json`, `cities.json`, and `rankings.json`.

## Scripts

- `npm run dev` — development server
- `npm run build` — Next.js production build (used internally by OpenNext)
- `npm run build:cf` — OpenNext bundle for Cloudflare Workers
- `npm run preview` — build and serve locally in the Workers runtime
- `npm run deploy` — build and deploy to Cloudflare Workers
- `npm run start` — production server (Node.js)
- `npm run lint` — ESLint

## Deploy to Cloudflare Workers

This app uses [@opennextjs/cloudflare](https://opennext.js.org/cloudflare/get-started) — not static Pages hosting.

**Do not use `npm run build` at the repo root** — that runs the Python scraper pipeline, not the web app.

### Cloudflare dashboard (Workers Builds)

**Option A — recommended** (root directory = `web`):

| Setting | Value |
|---------|-------|
| Root directory | `web` |
| Build command | `npm run build:cf` |
| Deploy command | `npm run deploy` |
| Build output directory | **Leave empty** |

**Option B** — if the project root is the repository (not `web/`):

| Setting | Value |
|---------|-------|
| Root directory | `/` (repository root) |
| Build command | `npm run build:cf` |
| Deploy command | `npm run deploy:cf` |
| Build output directory | **Leave empty** |

The root `build:cf` script installs `web/` dependencies and runs the OpenNext build. Do **not** set the build command to plain `npm run build`.

If the project was created as static Pages and cannot be converted, create a new **Workers** project connected to the same GitHub repo.

### Build environment variables

Add these under **Variables and secrets** (required for runtime API routes on Workers):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

SSG pages can read `../data/` during the build, but Workers cannot read that folder at runtime — APIs need Supabase in production.

### Local Workers preview

```bash
cd web
npm run build:cf
npm run preview
```

After `build:cf`, confirm `.open-next/worker.js` and `.open-next/assets/` exist.

## Features

- Home budget finder (rent / buy)
- Explore with URL-synced filters (city, property type, budget)
- Pin up to 3 suburbs (localStorage) and compare side by side
- City directory and suburb profile pages
- National rankings and methodology
