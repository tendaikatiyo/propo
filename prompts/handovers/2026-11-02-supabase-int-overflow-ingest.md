# Session Handover — 2026-11-02 (Supabase int overflow on daily ingest)

Daily cloud ingest aborted with `psycopg2.errors.NumericValueOutOfRange: integer out of range` during `listings` upsert. SQLite completed; Supabase failed mid–classifieds sales.

**Prior handovers:** [2026-07-04-pipeline-ops-polish-telegram.md](./2026-07-04-pipeline-ops-polish-telegram.md) (GHA + Telegram), [2026-06-28-f2-trends-classifieds-prices.md](./2026-06-28-f2-trends-classifieds-prices.md) (classifieds ZIG→USD rents).

---

## Failure signature

```
=== Supabase historical ingest ===
...
Supabase ingest: 3685 records from classifieds_sales.json (classifieds/sale)...
...
File ".../analytics/supabase_db.py", line ..., in upsert_listing
    cur.execute(LISTING_UPSERT_SQL, payload)
psycopg2.errors.NumericValueOutOfRange: integer out of range
```

- Stage: `python -m analytics.run_daily cloud` → `run_pipeline_cloud` → `ingest_all_supabase`.
- Local path already OK: SQLite ingest, daily market/land snapshots, `analytics:build:db`.
- Crash was on a listing `INSERT`/`UPDATE` into Postgres `listings` (`001_history.sql`: `price`, `bedrooms`, `bathrooms`, `lounges` are **int4**, max **2_147_483_647**).
- SQLite uses unbounded `INTEGER`, so the same scrape can succeed locally and die on Supabase.
- Ingest commits every 100 listings; rows already committed in earlier batches stay. Dashboard sync (`sync_dashboard`) did not run because the process exited first.

---

## Root cause

One scraped sale (or room count) exceeded signed 32-bit range. That is not a usable USD property price — typically a ZiG figure, typo, or a non-price number parsed into an int field.

Checks the same day:

| Check | Result |
| ----- | ------ |
| Local source JSON after normalize | Max sale ~$16.2M; no int4 overflow |
| Live classifieds sale feeds (land / houses / flats) | No price or bed/bath chip over int4 |
| Largest odd chip | Land size ~1.09e9 m² — stored as `double precision`, not the failing column |

So the offending listing was likely edited or removed after the 04:17 Africa/Harare run. Without a guard, any future scrape of an int4-overflow value will fail the whole cloud stage again.

---

## Fix (working tree)

| File | Behaviour |
| ---- | --------- |
| `analytics/clean_data.py` | `fits_postgres_int` / room helpers. **Skip** listing if `price` is outside int4. **Null** bed/bath/lounge if those are outside int4 (log and continue). |
| `analytics/supabase_db.py` | Same checks before upsert/snapshot; null overflow ints on market snapshot price fields; on remaining `psycopg2.Error`, log URL + int fields then re-raise. |

Local normalize still kept all ~13,965 current records. Guard is only effective for GHA after this change is on the branch the workflow checks out.

Log lines to watch:

- `Skipping … listing, price N exceeds integer range: <url>`
- `Ignoring bedrooms|bathrooms|lounges=N outside integer range: <url>`
- `Listing upsert failed for <url> price=… bedrooms=…`

---

## Ops notes

1. **Commit + push** the guard before relying on the next scheduled pipeline (or re-run `cloud` after merge).
2. A skipped overflow listing will not update Supabase for that URL; if it was active, deactivation logic may later mark it inactive when absent from a clean scrape — expected.
3. Do **not** widen `listings.price` to `bigint` as the first fix; values above int4 are almost always garbage for ZW USD medians. Prefer skip/null + better scrape parsing if a pattern appears (e.g. ZiG sale tooltips).
4. Related: rent ZiG mislabels are handled in `analytics/price_utils.py`; sales still lack an equivalent reconcile path — overflow skip is the safety net.

---

## Verify

```bash
# After deploy / on a runner with secrets:
python -m analytics.run_daily cloud
# Or cloud-only workflow if present.
```

Expect full Supabase ingest + dashboard sync, or explicit skip logs instead of a bare `integer out of range`.
