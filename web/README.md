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
- `npm run build` — production build
- `npm run start` — production server
- `npm run lint` — ESLint

## Features

- Home budget finder (rent / buy)
- Explore with URL-synced filters (city, property type, budget)
- Pin up to 3 suburbs (localStorage) and compare side by side
- City directory and suburb profile pages
- National rankings and methodology
