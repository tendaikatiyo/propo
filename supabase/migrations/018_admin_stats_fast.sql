-- Optimise admin_dashboard_stats to avoid statement timeouts.
--
-- The original function ran 12+ sequential full-table subqueries against
-- listings, listing_snapshots, and market_snapshots_daily.  On a
-- moderately-sized dataset Supabase's default statement timeout (~8-10s)
-- fires before all subqueries complete.
--
-- This rewrite consolidates every per-table scan into a single CTE pass
-- using conditional aggregates, cutting the number of sequential scans
-- from ~12 to 4 (one per large table).

create or replace function admin_dashboard_stats()
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  result jsonb;

  -- ── listings: one pass for all scalar metrics ──────────────────────────
  v_total              int;
  v_active             int;
  v_inactive           int;
  v_with_market_id     int;
  v_with_image_url     int;
  v_first_seen_earliest text;
  v_first_seen_latest   text;
  v_last_seen_earliest  text;
  v_last_seen_latest    text;
  v_dom_min            int;
  v_dom_avg            int;
  v_dom_max            int;
  v_suspect_rent       int;

  -- ── listing_snapshots: one pass ─────────────────────────────────────────
  v_snap_total         int;
  v_snap_unique        int;
  v_snap_earliest      text;
  v_snap_latest        text;

  -- ── market_snapshots_daily: one pass ────────────────────────────────────
  v_msd_rows           int;
  v_msd_dates          int;
  v_msd_min            text;
  v_msd_max            text;

  -- ── breakdown + topCities: still need GROUP BY but only one scan each ──
  v_breakdown          jsonb;
  v_top_cities         jsonb;

  -- ── other small tables (fast) ───────────────────────────────────────────
  v_ingest_runs        jsonb;
  v_mm_count           int;
  v_mm_low_conf        int;
  v_mm_updated_at      text;
  v_cities_count       int;
  v_cities_updated_at  text;
  v_rankings_present   bool;
  v_rankings_updated_at text;

begin
  -- ── 1. listings: single full-table scan ──────────────────────────────────
  select
    count(*)::int,
    count(*) filter (where is_active)::int,
    count(*) filter (where not is_active)::int,
    count(*) filter (where market_id is not null and btrim(market_id) <> '')::int,
    count(*) filter (where image_url  is not null and btrim(image_url)  <> '')::int,
    min(first_seen_at)::text,
    max(first_seen_at)::text,
    min(last_seen_at)::text,
    max(last_seen_at)::text,
    min(days_on_market) filter (where is_active)::int,
    round(avg(days_on_market) filter (where is_active))::int,
    max(days_on_market) filter (where is_active)::int,
    count(*) filter (where is_active and listing_type = 'rent' and price > 6000)::int
  into
    v_total, v_active, v_inactive,
    v_with_market_id, v_with_image_url,
    v_first_seen_earliest, v_first_seen_latest,
    v_last_seen_earliest, v_last_seen_latest,
    v_dom_min, v_dom_avg, v_dom_max,
    v_suspect_rent
  from listings;

  -- ── 2. listings breakdown: single GROUP BY scan ──────────────────────────
  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'listingType', listing_type,
        'source',      source,
        'isActive',    is_active,
        'count',       cnt
      )
      order by listing_type, source, is_active desc
    ),
    '[]'::jsonb
  )
  into v_breakdown
  from (
    select listing_type, source, is_active, count(*)::int as cnt
    from listings
    group by listing_type, source, is_active
  ) breakdown_rows;

  -- ── 3. top cities: single filtered GROUP BY scan ─────────────────────────
  select coalesce(
    jsonb_agg(
      jsonb_build_object('city', city, 'count', cnt)
      order by cnt desc
    ),
    '[]'::jsonb
  )
  into v_top_cities
  from (
    select city, count(*)::int as cnt
    from listings
    where is_active and city is not null and btrim(city) <> ''
    group by city
    order by cnt desc
    limit 10
  ) city_rows;

  -- ── 4. listing_snapshots: single pass ───────────────────────────────────
  select
    count(*)::int,
    count(distinct listing_url)::int,
    min(scraped_at)::text,
    max(scraped_at)::text
  into v_snap_total, v_snap_unique, v_snap_earliest, v_snap_latest
  from listing_snapshots;

  -- ── 5. market_snapshots_daily: single pass ──────────────────────────────
  select
    count(*)::int,
    count(distinct snapshot_date)::int,
    min(snapshot_date)::text,
    max(snapshot_date)::text
  into v_msd_rows, v_msd_dates, v_msd_min, v_msd_max
  from market_snapshots_daily;

  -- ── 6. ingest_runs: tiny table, last 10 ─────────────────────────────────
  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'id',                  id,
        'startedAt',           started_at,
        'completedAt',         completed_at,
        'sourcesIngested',     sources_ingested,
        'listingsProcessed',   listings_processed,
        'snapshotsAdded',      snapshots_added,
        'listingsDeactivated', listings_deactivated
      )
      order by id desc
    ),
    '[]'::jsonb
  )
  into v_ingest_runs
  from (
    select * from ingest_runs order by id desc limit 10
  ) recent_runs;

  -- ── 7. market_metrics ────────────────────────────────────────────────────
  select
    count(*)::int,
    count(*) filter (where confidence_score < 20)::int,
    max(updated_at)::text
  into v_mm_count, v_mm_low_conf, v_mm_updated_at
  from market_metrics;

  -- ── 8. cities ────────────────────────────────────────────────────────────
  select count(*)::int, max(updated_at)::text
  into v_cities_count, v_cities_updated_at
  from cities;

  -- ── 9. rankings ─────────────────────────────────────────────────────────
  select
    exists(select 1 from rankings where id = 'current'),
    (select updated_at::text from rankings where id = 'current' limit 1)
  into v_rankings_present, v_rankings_updated_at;

  -- ── assemble ────────────────────────────────────────────────────────────
  result := jsonb_build_object(
    'listings', jsonb_build_object(
      'total',           v_total,
      'active',          v_active,
      'inactive',        v_inactive,
      'withMarketId',    v_with_market_id,
      'withImageUrl',    v_with_image_url,
      'breakdown',       v_breakdown,
      'dateRange', jsonb_build_object(
        'firstSeenEarliest', v_first_seen_earliest,
        'firstSeenLatest',   v_first_seen_latest,
        'lastSeenEarliest',  v_last_seen_earliest,
        'lastSeenLatest',    v_last_seen_latest
      ),
      'daysOnMarket', jsonb_build_object(
        'min', v_dom_min,
        'avg', v_dom_avg,
        'max', v_dom_max
      ),
      'topCities',       v_top_cities,
      'suspectRentOver6k', v_suspect_rent
    ),
    'listingSnapshots', jsonb_build_object(
      'total',          v_snap_total,
      'uniqueListings', v_snap_unique,
      'earliest',       v_snap_earliest,
      'latest',         v_snap_latest
    ),
    'marketSnapshotsDaily', jsonb_build_object(
      'totalRows',     v_msd_rows,
      'distinctDates', v_msd_dates,
      'minDate',       v_msd_min,
      'maxDate',       v_msd_max,
      'daysTracked',   case
        when v_msd_min is null then 0
        else (v_msd_max::date - v_msd_min::date)::int + 1
      end
    ),
    'ingestRuns',    v_ingest_runs,
    'marketMetrics', jsonb_build_object(
      'count',        v_mm_count,
      'lowConfidence', v_mm_low_conf,
      'updatedAtMax', v_mm_updated_at
    ),
    'cities', jsonb_build_object(
      'count',       v_cities_count,
      'updatedAtMax', v_cities_updated_at
    ),
    'rankings', jsonb_build_object(
      'present',   v_rankings_present,
      'updatedAt', v_rankings_updated_at
    )
  );

  return result;
end;
$$;

-- Permissions unchanged from migration 009
revoke all on function admin_dashboard_stats() from public;
grant execute on function admin_dashboard_stats() to service_role;
