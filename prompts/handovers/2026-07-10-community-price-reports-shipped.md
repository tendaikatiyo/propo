# Session Handover — 2026-07-10 (Community price reports + polish)

**Status:** Shipped in code — community rent/sale/land reports, cottage (rent-only), admin sighted prices, mobile form UX, transitions.dev  
**Plan doc (original v1):** [2026-07-08-zw-community-rent-reports-plan.md](./2026-07-08-zw-community-rent-reports-plan.md)  
**Date:** 2026-07-10

**Prior handovers (read first):**

- [2026-07-08-zw-community-rent-reports-plan.md](./2026-07-08-zw-community-rent-reports-plan.md) — original ZW rent-only plan
- [2026-07-05-user-lens-shipped.md](./2026-07-05-user-lens-shipped.md) — Focus / lens system
- [2026-07-03-land-mode-shipped.md](./2026-07-03-land-mode-shipped.md) — land metrics precedent
- [2026-07-01-admin-ops-dashboard.md](./2026-07-01-admin-ops-dashboard.md) — `/admin`

---

## Workspace

| Item | Value |
| ---- | ----- |
| Repo | `https://github.com/tendaikatiyo/propo` |
| Live | `https://propo.fyi` |
| Recent commits | `17aa6cf` forms · `1b71bfd` data pipeline · `c48e352` uiux fixes |
| Migrations | `001`–`017` **applied** on production Supabase (confirmed 2026-07-10) |
| Daily pipeline | GHA `daily-pipeline.yml` **live** — successful scheduled runs daily since **2026-07-05** |

---

## Summary

Propo now has a **parallel community price layer** (not mixed into scraped `listings` / headline medians):

| Mode | Public form | Tables | Admin |
| ---- | ----------- | ------ | ----- |
| **Rent** | `/contribute` (default) | `rent_reports` + metrics | Review queue + **Add sighted** |
| **Buy** | `/contribute?mode=buy` | `sale_reports` + metrics | Same |
| **Land** | `/contribute?mode=land` | `land_reports` + metrics | Same |
| **Invest** | Blocked on contribute | — | — |

Approved reports surface as **community ranges** on suburb profiles. Admin can also log **sighted** prices (portal/agent sightings) as immediately approved rows with `source = admin_sighted`.

Also shipped: **cottage** as rent-only property type; default explore/city tables sort by **confidence**; mobile-optimised contribution forms; **transitions.dev** skill + success/error/sliding-tabs/shimmer UI.

---

## Product decisions (resolved)

| Question | Decision |
| -------- | -------- |
| Merge into scraped medians? | **No** — parallel signal only |
| Sale / land contributions? | **Yes** (expanded beyond original rent-only plan) |
| Invest on `/contribute`? | **Blocked** — redirect + Focus subset to rent/buy/land |
| Cottage on buy/invest? | **No** — rent-only (`RENT_ONLY_PROPERTY_TYPES`) |
| Land size units? | User enters sqm / acres / ha; stored/normalised to **sqm** |
| Low-confidence CTA? | Prominent “Contribute to this suburb” when confidence **&lt; 40** |
| Land profile confidence? | Use **land** market confidence / listing count in land mode |
| Admin sightings? | Insert **approved** reports with `source: admin_sighted` + optional `listing_url` |
| Suburb picker? | Searchable combobox on contribution forms |

---

## Migrations (apply in order)

| File | What |
| ---- | ---- |
| `014_rent_reports.sql` | `rent_reports`, `rent_report_metrics`, RLS |
| `015_sale_land_reports.sql` | `sale_reports`, `land_reports` + metrics |
| `016_land_report_size_units.sql` | `land_size` + `land_size_unit` (sqm/acres/ha) |
| `017_cottage_and_sighted_prices.sql` | `cottage_count` on `market_metrics`; cottage on rent reports; `source` + `listing_url` on all report tables |

**Ops:** Migrations **014–017** are applied on production. Daily GHA pipeline has been running successfully since **2026-07-05**. `cottage_count` is populated by the daily analytics rebuild (`analytics/market_metrics.py`).

---

## Architecture

```mermaid
flowchart LR
  User[Contribute forms] --> APIs["/api/rent|sale|land-reports"]
  AdminSight[Admin sighted form] --> SightAPI["/api/admin/sighted-prices"]
  APIs --> Tables[(rent/sale/land_reports)]
  SightAPI --> Tables
  AdminReview[/admin review tabs] --> Tables
  Tables --> Metrics[(report_metrics rollups)]
  Metrics --> Profile[Suburb community ranges]
  Scrape[Scrapers] --> Listings[(listings)]
  Listings --> MM[(market_metrics)]
  MM --> Profile
```

Shared rate limits / honeypot / hashing live in `web/src/lib/contribution-server.ts`.

---

## What shipped

### Public contribute

| Area | Detail |
| ---- | ------ |
| **Page** | `/contribute?mode=rent\|buy\|land` (+ optional `city` / `suburb` slugs) |
| **Forms** | `rent-report-form`, `sale-report-form`, `land-report-form` |
| **Shared fields** | Searchable suburb select, month picker, mobile touch targets, sticky submit |
| **Feedback** | Success check animation; error shake (`contribution-form-feedback.tsx`) |
| **Lens** | Contribute Focus = rent/buy/land only |

### Suburb / explore

| Area | Detail |
| ---- | ------ |
| **Community cards** | `community-rent-reports.tsx` (rent/sale/land ranges by lens) |
| **Prominent CTA** | `shouldShowProminentContributeCta` when confidence &lt; 40 |
| **Default sort** | `DEFAULT_TABLE_SORT_KEY = confidence_score` |
| **Land confidence** | Profile header uses land metrics in land mode |
| **Cottage** | Filters, segments, icons, fair-value — rent only |

### Admin

| Tab / feature | Detail |
| ------------- | ------ |
| Rent / sale / land review | Approve / reject queues |
| **Add sighted** | `AdminSightedPriceForm` — sliding Rent/Sale/Land tabs → approved insert |

### UI motion (transitions.dev)

| Effect | Where |
| ------ | ----- |
| Success check | Contribute success; admin sighted save |
| Error shake | Form API errors |
| Sliding tabs | Global Focus segmented control; admin sighted mode |
| Shimmer text | Home “See matching suburbs” CTA |
| Skill install | `web/.agents/skills/transitions-dev` + `.cursor/skills/transitions-dev` |

---

## Try it

| Flow | URL / path |
| ---- | ---------- |
| Share rent | `/contribute` |
| Share sale | `/contribute?mode=buy` |
| Share land | `/contribute?mode=land` |
| Prefill suburb | `/contribute?city=harare&suburb=borrowdale&mode=rent` |
| Suburb community + CTA | Low-confidence suburb profile |
| Admin review | `/admin` → rent/sale/land report tabs |
| Admin sighted | `/admin` → **Add sighted** |
| Cottage filter | Home / explore Focus=Rent → property type Cottage |

---

## Key files

| File | Role |
| ---- | ---- |
| `supabase/migrations/014`–`017_*.sql` | Schema |
| `web/src/lib/rent-reports.ts` | Rent types, contribute copy, CTA helper |
| `web/src/lib/sale-reports.ts` / `land-reports.ts` | Sale/land payloads + size normalisation |
| `web/src/lib/contribution-server.ts` | Shared rate limit / insert helpers |
| `web/src/lib/sighted-prices.ts` | Admin sighted payload parse |
| `web/src/lib/land-reports-server.ts` / `sale-reports-server.ts` | Server rollups / queries |
| `web/src/app/api/rent-reports/route.ts` (+ sale/land) | Public POST |
| `web/src/app/api/admin/sighted-prices/route.ts` | Admin approved insert |
| `web/src/app/api/admin/*-reports/**` | Review APIs |
| `web/src/components/rent-reports/*` | Forms + community UI + feedback |
| `web/src/components/admin/admin-*-reports.tsx` | Review UIs |
| `web/src/components/admin/admin-sighted-price-form.tsx` | Sighted entry |
| `web/src/components/ui/sliding-tabs.tsx` | Focus / sighted segmented control |
| `web/src/app/globals.css` | Motion tokens + `t-*` transition CSS |
| `web/src/lib/mode-accent.ts` | Mode colours + `color` hex for pills |
| `analytics/market_metrics.py` | Cottage segments / `cottage_count` |

---

## Env / local

- Localhost → live Supabase: `NEXT_PUBLIC_SUPABASE_URL` in `web/.env.local`; server routes may use service role when anon key missing (`supabase.ts`).
- Confirm `/api/meta` shows `supabaseConfigured: true` when debugging contribute.

---

## Known quirks / follow-ups

1. ~~Apply migration 017~~ — **done** (all migrations through **017** applied on production, 2026-07-10).
2. ~~Pipeline automation~~ — **done**; `daily-pipeline.yml` has run successfully every day since **2026-07-05**. GitHub queue delay of 3–60+ min is still normal.
3. **Commit this handover** — `prompts/handovers/2026-07-10-community-price-reports-shipped.md` may still be untracked; README index row already added.
4. **shadcn calendar/popover install** — earlier `npx shadcn add` aborted on overwrite prompt; components already present — no action unless regenerating.
5. **Original plan gaps** — methodology/privacy copy updates, public rollup display polish, and SA port still open per [2026-07-08-zw-community-rent-reports-plan.md](./2026-07-08-zw-community-rent-reports-plan.md).
6. **Do not** fold community prices into scraped headline medians without an explicit product decision.

---

## Related polish (same window)

| Area | Detail |
| ---- | ------ |
| **GHA schedule timezone** | `daily-pipeline.yml` + `pipeline-schedule-healthcheck.yml` use native `timezone: "Africa/Harare"` with local cron (`17 4` / `45 7`). Job `env.TZ` still set for log `date`. Healthcheck ~07:45 often appears ~08:00–09:00 due to GitHub delay. |
| **Sidebar Focus width** | Gray segmented control widened via sidebar `px-3` + `toggleClassName="-mx-1.5 w-[calc(100%+0.75rem)]"` so **Invest** isn’t clipped. |
| **Grammarly hydration noise** | `suppressHydrationWarning` on `<body>` in `layout.tsx` — extension injects `data-gr-*` attrs; not an app bug. |

---

## Next recommended

1. Smoke-test: submit rent + sale + land on `/contribute`; approve in `/admin`; confirm community ranges on a suburb profile.
2. Admin **Add sighted** → verify approved row with `source = admin_sighted`.
3. Spot-check `cottage_count` / cottage filters after a recent daily pipeline run.
4. Optional: methodology + privacy copy for community reports; then revisit SA expansion.

---

## Related docs

- [2026-07-08-zw-community-rent-reports-plan.md](./2026-07-08-zw-community-rent-reports-plan.md) — original ZW rent-only plan  
- [2026-07-08-sa-market-expansion-plan.md](./2026-07-08-sa-market-expansion-plan.md) — SA deferred until ZW community model proves out  
- [2026-07-05-user-lens-shipped.md](./2026-07-05-user-lens-shipped.md) — Focus / lens system  
- [2026-07-05-user-flow-fixes.md](./2026-07-05-user-flow-fixes.md) — mobile Focus / dock / hydration  
- [2026-07-03-land-mode-shipped.md](./2026-07-03-land-mode-shipped.md) — land metrics precedent  
- **`web/DESIGN.md`** — design system  
- **transitions.dev skill** — `.cursor/skills/transitions-dev/SKILL.md`
