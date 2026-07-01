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
# Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (anon key from Supabase dashboard)
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

Add these under **Workers Builds → Build variables and secrets**:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Runtime environment variables (required for live data)

Cloudflare Workers **cannot read** the repo’s `../data/` JSON files at runtime. The live site loads suburbs, cities, and listings from **Supabase** via `/api/*` routes.

You must also set the same variables under **Workers & Pages → your worker (`propo`) → Settings → Variables and secrets** for **runtime**. Build-time vars alone are not enough.

After each deploy, Wrangler can wipe dashboard vars unless you use `--keep-vars` (already set in `npm run deploy` / `npm run deploy:cf`).

Use the **anon** key (not the service role key) for the web app.

For the private **admin ops dashboard** at `/admin`, also set (runtime + local `.env.local`):

- `ADMIN_SECRET` — password for the admin page (server-only)
- `SUPABASE_URL` — same project URL as above
- `SUPABASE_SERVICE_ROLE_KEY` — used only on server routes; never prefix with `NEXT_PUBLIC_`

Apply `supabase/migrations/009_admin_dashboard.sql` on Supabase so the stats RPC is available.

### Sync data to Supabase

If tables are empty, run locally or on your VM:

```bash
npm run pipeline:supabase
```

That ingests listings and syncs `market_metrics`, `cities`, and `rankings` from `data/` into Supabase.

### Verify deployment

Open `https://your-domain/api/meta` after deploy. You should see:

```json
{
  "supabaseConfigured": true,
  "supabaseMarketCount": 378,
  "marketCount": 378
}
```

If `supabaseConfigured` is `false`, runtime env vars are missing. If counts are `0`, run the sync pipeline above.

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
- Private admin ops dashboard at `/admin` (pipeline health, listing counts, ingest history)
