# propo Dashboard

A static investment intelligence dashboard for Zimbabwe property markets.

## Files

- `index.html` — dashboard UI
- `style.css` — page styling
- `app.js` — fetches analytics data and renders charts

## Data sources

The dashboard reads:

- `/data/market_metrics.json`
- `/data/cities.json`
- `/data/rankings.json`

## Run locally

Use a local HTTP server from the repository root so `fetch()` can load JSON files.

### Python

```bash
cd "c:/Users/Katiyo/Documents/GitHub/easishop prototype"
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/frontend/index.html
```

## What it shows

- market-level yield, rent and opportunity metrics
- city comparison charts
- sortable market table
- top yield and opportunity markets
- city detail dashboards
