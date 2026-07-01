# Session Handover — 2026-07-01 (Admin ops dashboard)

## Shipped

### Private admin ops dashboard ✅

Internal pipeline / data-health UI at **`/admin`** — not linked from public nav, `noindex`.

**Auth**

- `ADMIN_SECRET` env var → httpOnly cookie (`propo_admin`, 7-day session)
- `POST /api/admin/auth` login, `DELETE` logout, `GET` auth status
- Timing-safe secret compare (SHA-256 digest stored in cookie)

**Stats API**

- `GET /api/admin/stats` — requires authenticated cookie
- Server uses **Supabase service role** only (`SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`)
- Aggregates via RPC `admin_dashboard_stats()` — migration **`009_admin_dashboard.sql`**

**Dashboard panels**

| Section | Contents |
| ------- | -------- |
| Summary cards | Active / inactive listings, days tracked (snapshot span), suburb count, cities |
| Data freshness | First/last seen ranges, daily snapshot dates, listing snapshot scrape range, local JSON mtime, rankings `updated_at` |
| Data quality | `market_id` %, `image_url` %, suspect rent &gt; $6k, DOM min/avg/max (internal only), snapshot row counts |
| Listings by source | Breakdown: `listing_type` × `source` × active/inactive |
| Top cities | Top 10 active listing counts |
| Ingest runs | Last 10 `ingest_runs` (processed / deactivated) |

**Not in scope (deferred from F10 product analytics)**

- User event tracking (`explore_filter_change`, listing clicks, etc.)
- Public analytics / demand dashboard
- `/insights` UI

## Key files

| Area | Path |
| ---- | ---- |
| Migration | `supabase/migrations/009_admin_dashboard.sql` |
| Auth | `web/src/lib/admin-auth.ts` |
| Service client | `web/src/lib/supabase-admin.ts` |
| Stats fetch | `web/src/lib/admin-stats.ts` |
| API | `web/src/app/api/admin/auth/route.ts`, `web/src/app/api/admin/stats/route.ts` |
| Page | `web/src/app/admin/page.tsx` |
| UI | `web/src/components/admin/admin-dashboard.tsx` |
| Docs | `web/README.md`, root `.env.example` |

## Environment (web app only)

Next.js reads **`web/.env.local`** — **not** repo-root `.env` (that file is for Python pipeline).

```env
# Already required for public site
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Admin — server-only, never NEXT_PUBLIC_
ADMIN_SECRET=choose_a_long_random_secret
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

**Cloudflare Workers (production):** set the same three admin vars under **Worker → Settings → Variables and secrets** (runtime). Use encrypted secrets for `ADMIN_SECRET` and `SUPABASE_SERVICE_ROLE_KEY`.

## Ops notes

1. **Apply migration 009** on Supabase SQL editor before expecting stats. Without it, dashboard shows: *"Migration 009_admin_dashboard.sql is not applied on Supabase yet."*
2. **Migration numbering:** `009_admin_dashboard.sql` consumed the `009` slot. F10 **product** analytics (events table) should use **`010_analytics.sql`** or renumber when implemented.
3. RPC is `SECURITY DEFINER`, `EXECUTE` granted to **`service_role` only** — anon key cannot call it.
4. Existing CLI tools still valid: `scripts/inspect_db_stats.py` (local SQLite), `scripts/verify_supabase.py` (post-pipeline smoke test).
5. `/api/meta` remains the lightweight public freshness endpoint; admin is separate.

## Verify

```powershell
# 1. Apply 009_admin_dashboard.sql in Supabase SQL editor

# 2. Configure web/.env.local (see above), then:
cd web
npm run dev

# 3. Open http://localhost:3000/admin
#    Enter ADMIN_SECRET → dashboard loads with listing counts, ingest runs, etc.

# 4. Unauthorized check:
#    curl http://localhost:3000/api/admin/stats   # → 401

# 5. Build
npm run build
```

## Deferred / v2 ideas

- [ ] Stale-data alert banner (e.g. last ingest &gt; 24h, last seen &gt; 48h)
- [ ] Link ingest run row → sources_ingested detail
- [ ] Low-confidence suburb drill-down table
- [ ] F10 product analytics (events + consent) — separate from this ops dashboard
- [ ] Precompute admin stats JSON on pipeline run (optional; RPC is fast enough for now)

## Next recommended

- Apply **009** on production Supabase if not done
- Set **ADMIN_SECRET** + service role on Cloudflare runtime after deploy
- Optional: handover doc for same-week UX polish (DOM hidden, bedroom filters, mobile drawer/sort fixes) if not yet documented elsewhere
