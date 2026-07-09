# Community rent reports — Zimbabwe (priority)

**Date:** 2026-07-08  
**Status:** Planning — **ZW first, before SA expansion**  
**Goal:** Let Zimbabwe users anonymously share what they currently pay in rent to fill suburb coverage gaps and enrich the dataset where portal scrapers are thin.

---

## Summary

Propo today is **100% scrape-derived** — portal listings → `listings` → daily rollups → `market_metrics`. There is no user-contributed price layer.

**Product pitch:** *Know what rent actually costs? Help others searching — share yours anonymously.*

**Priority:** Ship on **`propo.fyi` (ZW)** first. Prove the model (submission volume, quality, UX, admin workflow) before porting to SA. SA expansion ([2026-07-08-sa-market-expansion-plan.md](./2026-07-08-sa-market-expansion-plan.md)) should **not** start until this feature is live or explicitly deprioritized.

**Explicitly in scope (v1):**

- Anonymous current-rent submissions (USD)
- City + suburb + property type + bedrooms + monthly rent
- Admin review queue (approve / reject)
- Supplementary display on low-confidence suburb profiles
- Methodology + privacy copy updates

**Explicitly out of scope (v1):**

- Sale price submissions
- User accounts / login
- Exact addresses or landlord contact
- Merging contributions into headline scraped medians
- SA / multi-country (port after ZW validation)

---

## Why ZW first

| Reason | Detail |
| ------ | ------ |
| **Existing stack** | ZW Supabase, pipeline, `/admin`, and web are live — no new country config |
| **Known gap map** | Admin already surfaces `lowConfidence` suburbs (`confidence_score < 20`) |
| **Lower compliance surface** | No POPIA yet; still update privacy policy for personal data |
| **Faster feedback loop** | Smaller market, existing Telegram alerts, daily pipeline |
| **De-risks SA** | SA scrapers are harder; community data is more valuable there — but only after ZW proves trust UX |

---

## Problem (gaps today)

| Layer | Today | Gap |
| ----- | ----- | --- |
| **Data source** | PropertyBook, Property.co.zw, Classifieds only | Occupied rentals often never appear on portals |
| **Confidence** | Volume-based (`rental_count` + `sale_count`) | Suburbs with 0–2 listings show low confidence or thin segments |
| **Segments** | Need ≥3 listings per segment (`MIN_SEGMENT_LISTINGS`) | Many `house:2`-style buckets empty |
| **Explore** | Filters out suburbs below `MIN_CONFIDENCE_THRESHOLD` (20) | Users may see sparse results with no way to help |
| **Methodology** | "Aggregated from public listings" | No path for real paid-rent signal |

---

## Architecture

**Do not insert user reports into `listings`.** Scraped listings have verifiable URLs, price history, and `days_on_market`. User reports are a parallel signal.

```mermaid
flowchart LR
  User[User form] --> API[POST /api/rent-reports]
  API --> Reports[(rent_reports)]
  Admin[/admin review] --> Reports
  Reports --> Rollup[rent_report_rollups]
  Rollup --> Web[Suburb profile supplement]
  Scrape[Daily scrapers] --> Listings[(listings)]
  Listings --> Metrics[(market_metrics)]
  Metrics --> Web
```

### New table — `rent_reports`

```sql
-- supabase/migrations/014_rent_reports.sql (next available after 013)

create table rent_reports (
  id uuid primary key default gen_random_uuid(),
  market_id text not null,
  city text not null,
  suburb text not null,
  property_type text not null check (property_type in ('house', 'flat', 'room', 'townhouse')),
  bedrooms smallint not null check (bedrooms >= 0 and bedrooms <= 10),
  monthly_rent integer not null check (monthly_rent > 0),
  currency text not null default 'USD',
  is_current_lease boolean not null default true,
  lease_started_at date,
  furnished boolean,
  notes text,  -- optional free text; admin-only display, not public
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected')),
  rejection_reason text,
  reviewed_at timestamptz,
  reviewed_by text,
  ip_hash text,
  session_hash text,
  created_at timestamptz not null default now()
);

create index rent_reports_market_id_idx on rent_reports (market_id);
create index rent_reports_status_idx on rent_reports (status);
create index rent_reports_created_at_idx on rent_reports (created_at desc);

-- RLS: no public read/write; service role only (same pattern as analytics_events)
alter table rent_reports enable row level security;
```

### Rollup (computed nightly or on approve)

Materialized in pipeline or via Supabase view — **approved reports only**:

| Field | Logic |
| ----- | ----- |
| `market_id` | Same slug as listings (`analytics/listing_utils.py`) |
| `report_count` | Approved, `is_current_lease = true`, lease ≤ 24 months old |
| `median_rent` | Median of approved rents |
| `min_rent` / `max_rent` | Trimmed range (drop top/bottom 10% if n ≥ 5) |
| `segment_key` | Optional phase 2: `house:2` etc. |

Store in `rent_report_metrics` table or jsonb column on a new dashboard sync — keep separate from `market_metrics.median_rent`.

---

## Phase 1 — Backend + admin (ship first)

### 1.1 Migration + API

- [ ] `supabase/migrations/014_rent_reports.sql`
- [ ] `POST /api/rent-reports` — validate, rate-limit, hash IP/session, insert `pending`
- [ ] Reuse service-role pattern from `web/src/app/api/events/route.ts` and `developers/interest/route.ts`
- [ ] Server-side validation:
  - `monthly_rent` bounds (e.g. $50–$15,000 USD — tune for ZW)
  - `market_id` must match known city/suburb from `market_metrics` or `cities` (autocomplete, not free text)
  - Max 1 submission per `session_hash` per 24h; max 3 per `ip_hash` per 7d

### 1.2 Admin review

- [ ] Extend `/admin` with **Rent reports** tab: pending queue, approve/reject, suburb breakdown
- [ ] `GET /api/admin/rent-reports` + `PATCH /api/admin/rent-reports/[id]` (admin auth via existing `ADMIN_SECRET`)
- [ ] Outlier flag in admin UI: rent > 3× scraped suburb median (when scraped data exists)
- [ ] Telegram alert on new pending report (optional; reuse pipeline bot)

### 1.3 Privacy

- [ ] Update privacy policy — lawful basis, what we collect, retention, no address
- [ ] Form consent checkbox: *"I confirm this is my current rent and I agree to anonymous use"*

---

## Phase 2 — User-facing form + display

### 2.1 Submission UX

- [ ] `/contribute` or modal from suburb profile — mobile-first, 4–5 fields
- [ ] Suburb picker: searchable dropdown from existing `cities` / `market_metrics` (same as explore)
- [ ] Property type + bedrooms match explore filters
- [ ] Success state: *"Thanks — we'll review and may show a range on this suburb"*
- [ ] No account required

### 2.2 Display (supplementary only)

Show **only when** scraped `rental_count < 5` OR `confidence_score < 40`, **and** `report_count ≥ 3` approved:

> **Community reports:** 3 residents reported **$800–$1,200**/mo (median **$950**).  
> *Based on anonymous submissions, not portal listings.*

- [ ] Component on suburb profile (`suburb-profile.tsx`) — below scraped median, visually distinct
- [ ] Do **not** change headline `median_rent` or `confidence_score` from scraped data in v1
- [ ] Segment row: if segment scraped count < 3 but report count ≥ 3 for that segment, show report range (phase 2)

### 2.3 Entry points

| Surface | Trigger |
| ------- | ------- |
| Suburb profile header | `confidence_score < 40` → CTA banner |
| Explore zero results | After `explore_zero_results` analytics event |
| Methodology | Link to contribute page |

---

## Phase 3 — Pipeline integration (optional v1.1)

- [ ] `analytics/sync_rent_reports.py` — rollup approved → `rent_report_metrics.json` + Supabase
- [ ] Admin stats: pending count, approval rate, top gap suburbs filled
- [ ] Nightly job alongside `run_daily.py` (or on-demand after admin approve)

---

## Quality & abuse controls

| Control | Implementation |
| ------- | -------------- |
| Human review | All reports `pending` until admin approves |
| Rate limits | IP + session hashing (no raw IP stored) |
| Outlier rejection | Admin flag + auto-suggest if >3× scraped median |
| Staleness | Prefer `is_current_lease`; deprecate reports >24 months |
| Spam | Reject duplicate suburb+rent+bedroom from same hash within 7d |

---

## Success metrics

| Metric | Target (first 30 days) |
| ------ | ---------------------- |
| Submissions | ≥50 pending reports |
| Approval rate | ≥70% (tune validation if lower) |
| Gap suburbs filled | ≥10 suburbs go from 0 scraped listings to report range shown |
| Conversion | ≥5% of low-confidence suburb profile views → form open |

Track via existing `analytics_events` + new `rent_report_submit` event.

---

## Files to touch (expected)

| Area | Path |
| ---- | ---- |
| Migration | `supabase/migrations/014_rent_reports.sql` |
| API | `web/src/app/api/rent-reports/route.ts` |
| Admin API | `web/src/app/api/admin/rent-reports/route.ts` |
| Admin UI | `web/src/components/admin/admin-dashboard.tsx` |
| Form | `web/src/app/contribute/page.tsx`, `web/src/components/rent-reports/rent-report-form.tsx` |
| Suburb display | `web/src/components/markets/suburb-profile.tsx` |
| Data layer | `web/src/lib/data-server.ts`, `web/src/lib/rent-reports.ts` |
| Sync (phase 3) | `analytics/sync_rent_reports.py` |
| Legal | privacy policy page, `web/src/app/methodology/page.tsx` |
| Constants | `web/src/lib/constants.ts` — bounds, copy |

---

## Open questions

1. **Headline vs supplement:** Keep scraped median only forever, or blend when report_count ≥ 10?
2. **Room type:** Allow `property_type = room` with forced `bedrooms = 1`?
3. **Public count:** Show "12 residents reported" even when n < 3 (with no range)?
4. **WhatsApp share:** ZW users often on WhatsApp — share link after submit?
5. **Migration number:** `014` may collide if SA migrations add `014_suburb_boundaries` — use `014_rent_reports.sql` on ZW Supabase only; SA project gets its own sequence later.

---

## Relationship to SA expansion

| | ZW (this doc) | SA |
| - | ------------- | -- |
| **When** | **Now — before SA Phase 1** | After ZW feature validated |
| **Supabase** | Existing ZW project | Separate SA project |
| **Currency** | USD | ZAR |
| **Compliance** | Update ZW privacy policy | POPIA + ZW learnings |
| **Port effort** | — | Copy form + admin + rollup; country config |

---

## Related docs

| Doc | Relevance |
| --- | --------- |
| [2026-06-27-market-intelligence-roadmap.md](./2026-06-27-market-intelligence-roadmap.md) | Trust/transparency patterns (F8) |
| [2026-07-01-admin-ops-dashboard.md](./2026-07-01-admin-ops-dashboard.md) | Admin auth + stats pattern |
| [2026-07-01-f10-analytics-mvp.md](./2026-07-01-f10-analytics-mvp.md) | Event tracking + consent |
| [2026-07-08-sa-market-expansion-plan.md](./2026-07-08-sa-market-expansion-plan.md) | **Blocked behind this feature** |
