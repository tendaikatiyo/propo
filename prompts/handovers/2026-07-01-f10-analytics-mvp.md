# Session Handover — 2026-07-01 (F10 analytics MVP)

## Shipped

### F10 — Anonymous product analytics ✅

Server-side event collection for internal product decisions — **no `/insights` UI** in v1 (query Supabase SQL editor).

**Infrastructure**

- `supabase/migrations/010_analytics.sql` — `analytics_events` table (RLS on, no public policies)
- `POST /api/events` — inserts via service role when consent + session cookie present
- `web/src/middleware.ts` — sets httpOnly `propo_analytics_sid` when `propo_analytics_consent=granted`
- Consent banner (`AnalyticsConsentBanner`) — Accept / Decline, links to `/cookies`

**Events tracked (after consent)**

| Event | When |
| ----- | ---- |
| `explore_filter_change` | User changes filters on `/explore` (`useExploreFilters.setFilters` / reset) |
| `explore_zero_results` | Explore results load with 0 in-budget suburbs (deduped per filter set) |
| `suburb_click` | Suburb link from explore table/list/cards or home top matches |
| `listing_click` | External “View” link on listing cards |

**Graceful no-op**

- No consent → client does not send; API returns `204`
- No Supabase service role / table missing → API returns `204` (does not break UX)

## Key files

| Area | Path |
| ---- | ---- |
| Migration | `supabase/migrations/010_analytics.sql` |
| Constants / types | `web/src/lib/analytics/constants.ts`, `types.ts` |
| Client consent | `web/src/lib/analytics/consent.ts` |
| Client track | `web/src/lib/analytics/track.ts` |
| Server insert | `web/src/lib/analytics/server.ts` |
| API | `web/src/app/api/events/route.ts` |
| Middleware | `web/src/middleware.ts` |
| Consent UI | `web/src/components/analytics/consent-banner.tsx` |
| Suburb tracking | `web/src/components/analytics/tracked-suburb-link.tsx` |
| Instrumentation | `use-explore-filters.ts`, `explore-results.tsx`, `suburb-card.tsx`, `suburb-table.tsx`, `suburb-list.tsx`, `listing-card.tsx` |
| Legal | `web/src/app/cookies/page.tsx` |

## Environment

Events use the same **service role** as admin ops (`SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` in `web/.env.local` / Cloudflare runtime). No new env vars beyond admin.

## Ops notes

1. Apply **`010_analytics.sql`** on Supabase ( **`009`** is admin dashboard RPC).
2. Events are **not** visible in `/admin` — query directly:

```sql
select created_at, event_name, path, payload
from analytics_events
order by created_at desc
limit 50;
```

3. Example aggregates:

```sql
select event_name, count(*) as n
from analytics_events
where created_at > now() - interval '7 days'
group by 1
order by n desc;
```

## Verify

```powershell
# Apply 010_analytics.sql in Supabase

cd web
# Ensure web/.env.local has SUPABASE_SERVICE_ROLE_KEY
npm run dev

# 1. Open site → Accept analytics banner → page reloads
# 2. /explore → change budget → suburb_click on a row → listing click on suburb page
# 3. Supabase SQL: rows in analytics_events

# Decline path: no rows after browsing
```

## Deferred (F10 v2)

- [ ] `/insights` internal dashboard UI
- [ ] Pre-aggregated daily rollups / materialized views
- [ ] Revenue / B2B export tab
- [ ] Server-side rate limiting on `/api/events`

## Related

- Admin ops dashboard (separate): [2026-07-01-admin-ops-dashboard.md](./2026-07-01-admin-ops-dashboard.md)
- Roadmap F10 spec: [2026-06-27-market-intelligence-roadmap.md](./2026-06-27-market-intelligence-roadmap.md)
