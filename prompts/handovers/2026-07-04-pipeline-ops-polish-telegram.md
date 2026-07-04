# Session Handover — 2026-07-04 (Pipeline ops, polish, Telegram, About)

Consolidates work from this session: **GitHub Actions daily pipeline confirmed working**, land confidence fix, branding/motion/hero polish, land report UX, admin ingest runtime, staged Telegram notifications, data freshness pill with full datetime, hero credit removed from UI, and new **About** page.

**Prior handovers (read first):**

- [2026-06-25-github-actions-automation.md](./2026-06-25-github-actions-automation.md) — GHA architecture decision
- [2026-07-01-admin-ops-dashboard.md](./2026-07-01-admin-ops-dashboard.md) — `/admin`, migration `009`
- [2026-07-03-land-mode-shipped.md](./2026-07-03-land-mode-shipped.md) — Land mode Phases 1–5
- [2026-07-03-landing-seo-polish.md](./2026-07-03-landing-seo-polish.md) — SEO, photo landing, admin mobile UX

---

## Status at end of session

| Area | State |
|------|-------|
| Daily GHA pipeline | **Ran successfully** — scrape + ingest + Supabase sync |
| Secrets | Under GitHub **Environment → production** (not repo secrets) |
| Web changes | **Uncommitted** in working tree — deploy web separately for UI polish |
| Land trends UI | **Commented out** until `land_snapshots_daily` has 2+ snapshot dates |
| Telegram | Stage notifications wired in Python; failure curl step retained in workflow |
| About page | **`/about`** — founder story + mailto contact; in footer, mobile menu, sitemap |
| Hero photo credit | **Removed from UI** (metadata kept in `hero.ts` / `PHOTO_CREDITS.md` only) |

---

## Shipped — pipeline & automation

### GitHub Actions workflows ✅

| Workflow | Trigger | Command |
|----------|---------|---------|
| `.github/workflows/daily-pipeline.yml` | Cron `0 2 * * *` UTC + manual | `python -m analytics.run_daily` |
| `.github/workflows/pipeline-ingest-only.yml` | Manual | Ingest without scrape |
| `.github/workflows/pipeline-cloud.yml` | Manual | Cloud pipeline only |
| `.github/workflows/web-ci.yml` | Push/PR | `npm run build` in `web/` |

All pipeline workflows use `environment: production` so secrets resolve from **Settings → Environments → production → Environment secrets**.

Required secrets: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_DB_URL`.  
Optional: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`.

### `SUPABASE_DB_URL` fix ✅

- User had secrets under **environment** scope, not repository scope.
- Workflows updated with `environment: production`.
- Pre-flight step **Verify Supabase secrets** fails fast with actionable message.
- `.env.example` documents all secret names for local + GHA.

`SUPABASE_DB_URL` = Postgres pooler URI (port **6543**) from Supabase → Database → Connection string.

### Staged Telegram notifications ✅

New module: `analytics/telegram_notify.py` — `send_telegram()`, `format_duration_minutes()`, `format_ingest_stats()`.

Notifications are no-ops when Telegram env vars are unset.

**Message sequence** (via `run_daily` → `run_pipeline_cloud`):

| Stage | Messages |
|-------|----------|
| Scrape | `propo scrape started` → `propo scrape complete (X min)` or `propo scrape FAILED` |
| Analytics | `propo analytics started` → `propo analytics complete (X min)` |
| Ingest | `propo ingest started` → completion with ingest + data quality stats |
| End | `propo daily pipeline complete` |

**Analytics phase** = SQLite ingest, daily market/land snapshots, JSON export, `npm run analytics:build:db`.

**Ingest phase** = `ingest_all_supabase()` + `sync_dashboard()`.

**Ingest completion message** includes:

- Listings processed, snapshots added, deactivated, active listings
- Daily market rows, daily land rows
- **Data quality (today):** `market_id` %, `image_url` %, suspect rent > $6k, low-confidence suburbs, snapshot days tracked
- Duration

Data quality pulled post-sync via `SupabaseHistoryDatabase.fetch_data_quality_summary()` in `analytics/supabase_db.py`.

**Failure alert:** workflow step `Notify Telegram on failure` (curl) still fires on any job failure.

---

## Shipped — admin ops

### Ingest runtime column ✅

`/admin` → **Recent ingest runs** table now shows **Runtime** (minutes) for completed runs.

- Computed client-side from `startedAt` / `completedAt` (no migration change).
- `<1 min` for sub-minute runs; `—` if still running or incomplete.
- Desktop table + mobile cards updated.

File: `web/src/components/admin/admin-dashboard.tsx` — `formatIngestRuntimeMinutes()`.

---

## Shipped — analytics / land

### Land confidence capped at 50 — fixed ✅

`analytics/land_metrics.py` was using a single `confidence_points(priced_land_count)` → max 50.

Now mirrors rent/buy: `confidence_points(land_count) + confidence_points(priced_land_count)` → max 100.

Regenerate after fix: `npm run analytics:build:db` (or full pipeline).

### Land trends empty — diagnosed + UI hidden ⏸

**Root cause:** `TrendChart` needs **2+ data points**. `land_snapshots_daily` had only **1 snapshot date** (2026-07-03) vs 18 dates in `market_snapshots_daily`.

Land snapshot rows are written correctly in `ingest_supabase.py` via `build_land_daily_rows` → `insert_land_snapshot`.

**Temporary:** land trend sections commented out until history accumulates:

- `web/src/components/markets/suburb-profile.tsx`
- `web/src/components/markets/suburb-report.tsx`
- `web/src/app/cities/[city]/[suburb]/report/page.tsx` (no longer fetches `fetchLandMarketTrends`)

**Re-enable when:** `SELECT COUNT(DISTINCT snapshot_date) FROM land_snapshots_daily` ≥ 2.

### Suburb profile land section order ✅

Rent/sale content first, then land market stats (metrics + listings).

### Land in export reports ✅

`suburb-report.tsx` + report page include land market section and land listings (trends still commented out).

---

## Shipped — web polish

### Logomark / favicon ✅

| Asset | Use |
|-------|-----|
| `web/public/main_logomark.png` | Production navbar, footer, favicon, JSON-LD |
| `web/public/localhost_logomark.png` | Dev-only favicon (purple vs yellow) |

`web/src/lib/seo.ts` — `LOGOMARK_PATH`, `LOCALHOST_LOGOMARK_PATH`, `FAVICON_PATH`.  
Shared component: `web/src/components/brand/propo-logomark.tsx` (sidebar, mobile top bar, footer).

### Interaction motion ✅

Vocabulary: `.cursor/skills/animation/SKILL.md`

| Utility | File | Applied to |
|---------|------|------------|
| `motionPress`, `motionPressIcon` | `web/src/lib/motion.ts`, `globals.css` | Buttons, toggles, switches |
| `motionRow` | same | List rows, menu items |
| `motionCard` | same | Suburb/land cards |
| `motionNav` | same | Sidebar, nav links |

Respects `prefers-reduced-motion`.

### Mobile filters drawer z-index ✅

Sheet overlay `z-80`, content `z-81` — covers top bar (`z-70`) and tab bar (`z-50`).  
In-drawer header with logo + close: `mobile-menu-drawer.tsx`, `sheet.tsx`.

### City/suburb hero images ✅

Removed illustration default; photograph-based heroes via `web/src/lib/hero.ts`:

- **Default (all cities):** Harare skyline photo (`harare_skyline_bg_photo_small2.webp`)
- **Bulawayo:** Joshua Nkomo statue photo
- `heroImageForCitySlug()` used in `app-shell.tsx`

### Hero photo credit removed from UI ✅

On-screen “Photo: …” overlay removed from:

- `SiteHero` in `web/src/components/layout/site-chrome.tsx`
- `HomeLandingHero` in `web/src/components/home/home-landing-hero.tsx`

Attribution fields remain in `hero.ts` and `web/PHOTO_CREDITS.md` for internal reference only.

### Data freshness pill — full date + time ✅

`web/src/lib/data-freshness.ts` — `formatDataFreshness()` always appends formatted datetime (`en-ZW`, medium date + short time).

Examples:

- `Updated today · 4 Jul 2026, 2:32 PM`
- `Updated 3d ago · 1 Jul 2026, 4:00 AM`

Used by `DataFreshnessPill` (sidebar, mobile menu, suburb profiles) and printable reports via the same helper.

### About page ✅

New route: **`/about`** — short founder story (Tendai), why Propo exists, link to reach out.

| Item | Detail |
|------|--------|
| Page | `web/src/app/about/page.tsx` |
| Contact | `mailto:carteayo@gmail.com` via `CONTACT_EMAIL` in `constants.ts` |
| Nav | Footer (`site-chrome.tsx`), mobile menu **More → About** (`mobile-menu-links.tsx`) |
| Mobile back | `/about` → home (`mobile-nav.ts`) |
| SEO | `buildPageMetadata`, entry in `sitemap.ts` |

---

## Project health (discussion, not code)

End-of-session assessment: **solid v1 product** (~80–85% production-ready for daily operation). Strongest: end-to-end pipeline, product scope, data depth, ops visibility. Weakest: no automated tests, scraper fragility, large uncommitted diff pending deploy. See session chat for full breakdown.

---

## Key files (this session)

| Area | Path |
|------|------|
| Daily workflow | `.github/workflows/daily-pipeline.yml` |
| Telegram helper | `analytics/telegram_notify.py` |
| Pipeline entry | `analytics/run_daily.py`, `analytics/run_pipeline_cloud.py` |
| Data quality query | `analytics/supabase_db.py` → `fetch_data_quality_summary()` |
| Land confidence | `analytics/land_metrics.py` |
| Admin runtime | `web/src/components/admin/admin-dashboard.tsx` |
| Logomark | `web/src/lib/seo.ts`, `web/src/components/brand/propo-logomark.tsx` |
| Motion | `web/src/lib/motion.ts`, `web/src/app/globals.css` |
| Hero | `web/src/lib/hero.ts`, `web/src/components/layout/app-shell.tsx` |
| Hero credit (UI removed) | `site-chrome.tsx`, `home-landing-hero.tsx` |
| Data freshness | `web/src/lib/data-freshness.ts`, `data-freshness-pill.tsx` |
| About page | `web/src/app/about/page.tsx`, `sitemap.ts`, `mobile-menu-links.tsx` |
| Land trends (disabled) | `suburb-profile.tsx`, `suburb-report.tsx`, report `page.tsx` |
| Animation skill | `.cursor/skills/animation/SKILL.md` |
| Env template | `.env.example` |

---

## Environment

### GitHub Actions (production environment)

```env
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_DB_URL=          # pooler, port 6543
TELEGRAM_BOT_TOKEN=       # optional — stage + failure alerts
TELEGRAM_CHAT_ID=
```

### Local pipeline

```powershell
cd C:\Users\Katiyo\Documents\GitHub\propo
.\.venv\Scripts\Activate.ps1
# .env with same Supabase vars (+ optional Telegram)
python -m analytics.run_daily
```

Telegram messages fire locally too if env vars are set.

### Web deploy (Cloudflare / local)

Unchanged from prior handovers — `ADMIN_SECRET`, Supabase keys for `/admin`.

---

## Verify

```powershell
# Pipeline (local or wait for 02:00 UTC cron)
python -m analytics.run_daily
# Expect Telegram sequence if tokens set

# Admin runtime column (after web deploy)
cd web
npm run dev
# /admin → Recent ingest runs → Runtime column on completed runs
# Sidebar / mobile menu → freshness pill shows date + time
# /about → founder story + contact link

# Land snapshot history (Supabase SQL)
# SELECT COUNT(DISTINCT snapshot_date) FROM land_snapshots_daily;
# Re-enable land trend UI when count >= 2

npm run build
```

Manual GHA run: **Actions → Daily pipeline → Run workflow**.

---

## Deferred / next

- [ ] **Commit + push** session changes (large uncommitted diff — pipeline, web polish, assets, about page)
- [ ] **Deploy web** so admin runtime, logomark, motion, hero, land report, freshness pill, about page go live
- [ ] **Re-enable land trends UI** after 2+ days in `land_snapshots_daily`
- [ ] Add Telegram stage notifications to `pipeline-ingest-only.yml` / `pipeline-cloud.yml` if desired (currently only `run_daily` path)
- [ ] Update `.env.example` comment — Telegram now used for stage progress, not just failures
- [ ] Flickr licence check before commercial use of hero photos (credits no longer shown on site; see `PHOTO_CREDITS.md`)
- [ ] Optional: add `/about` link to desktop sidebar (`app-sidebar.tsx`) — currently footer + mobile menu only

---

## Uncommitted working tree (snapshot)

Notable paths modified or added (not exhaustive):

- `.github/workflows/daily-pipeline.yml`
- `analytics/run_daily.py`, `run_pipeline_cloud.py`, `supabase_db.py`, `telegram_notify.py` (new)
- `web/src/components/admin/admin-dashboard.tsx`
- `web/src/lib/data-freshness.ts`, `web/src/app/about/page.tsx`
- `site-chrome.tsx`, `home-landing-hero.tsx` (hero credit removed)
- Motion, hero, logomark, sheet z-index, suburb/report land UX across `web/src/`
- `web/public/main_logomark.png`, `localhost_logomark.png` (new)

Run `git status` before next session for exact list.
