---
applyTo: "supabase/**"
---

# Supabase / migrations

Postgres schema for Propo lives in `supabase/migrations/`. Apply **in numeric order**. Never edit an already-applied migration in place on production — add a new numbered file.

## Read first

- Root [`AGENTS.md`](../../AGENTS.md)
- Community reports: [`prompts/handovers/2026-07-10-community-price-reports-shipped.md`](../../prompts/handovers/2026-07-10-community-price-reports-shipped.md)

## Important migration bands

| Range | Topic |
| ----- | ----- |
| Early | Core listings, snapshots, market_metrics, rankings |
| ~008–010 | `market_id`, admin, analytics_events |
| ~011–013 | Land mode |
| **014–017** | Community rent/sale/land reports; land size units; cottage + `source` / `listing_url` (sighted prices) |

## Production status (2026-07-10)

- Migrations **001–017 are applied** on production Supabase (including community reports / cottage / sighted prices).
- For **new** changes: add the next numbered migration file; never edit an already-applied migration in place.
- Daily pipeline rebuilds analytics (including `cottage_count`) on each successful run.

## Rules

- Community report tables (`rent_reports`, `sale_reports`, `land_reports` + metrics) are a **parallel** layer — RLS and review workflow assume they are **not** mixed into scraped listing medians.
- Admin sighted prices insert **approved** rows with `source = admin_sighted`.
- Prefer additive migrations (new columns/tables) over destructive rewrites.
- Keep RLS intentional: public contribute inserts vs admin review vs service-role pipeline.

## When adding a migration

1. Create `supabase/migrations/0NN_description.sql` (next free number after 017).
2. Apply on production Supabase.
3. Let the next daily pipeline run (or `npm run analytics:build:db`) pick up metric-side effects.
