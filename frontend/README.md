# propo Dashboard

A static investment intelligence dashboard for Zimbabwe property markets.

## Files

- `index.html` — dashboard UI
- `style.css` — page styling
- `app.js` — fetches analytics data and renders charts

## Data sources

The dashboard reads live data from Supabase:

- `market_metrics` — suburb-level yields and opportunity scores
- `cities` — city comparison aggregates
- `rankings` — top yield / opportunity lists (JSON payload, id `current`)

Configure `frontend/config.js` (copy from `config.example.js`) with your Supabase URL and anon key.

## Run locally

Use a local HTTP server from the repository root so the browser can load config and scripts.

### Python

```bash
cd "c:/Users/Katiyo/Documents/GitHub/easishop prototype"
cp frontend/config.example.js frontend/config.js
# edit frontend/config.js with your Supabase anon key
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/frontend/index.html
```

Ensure the pipeline has synced dashboard tables to Supabase first:

```bash
npm run analytics:build
python -m analytics.sync_dashboard
```

## What it shows

- market-level yield, rent and opportunity metrics
- city comparison charts
- sortable market table
- top yield and opportunity markets
- city detail dashboards
