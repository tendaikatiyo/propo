-- Faster admin ops RPC.
-- 009 scanned listings ~10 times and COUNT(DISTINCT listing_url) on listing_snapshots
-- (400k+ rows, growing daily). That exceeds Supabase's 8s API statement_timeout.
-- Do not add a covering listings index here — INCLUDE (image_url) fights the 500MB cap.

create or replace function admin_dashboard_stats()
returns jsonb
language plpgsql
stable
security definer
set search_path = public
set statement_timeout = '30s'
as $$
declare
  listing_totals record;
  listing_breakdown jsonb;
  listing_top_cities jsonb;
  snapshot_earliest timestamptz;
  snapshot_latest timestamptz;
  snapshot_total bigint;
  daily record;
  ingest jsonb;
  metrics record;
  city_stats record;
  rankings_updated_at timestamptz;
begin
  select
    count(*)::int as total,
    count(*) filter (where is_active)::int as active,
    count(*) filter (where not is_active)::int as inactive,
    count(*) filter (
      where market_id is not null and btrim(market_id) <> ''
    )::int as with_market_id,
    count(*) filter (
      where image_url is not null and btrim(image_url) <> ''
    )::int as with_image_url,
    count(*) filter (
      where is_active and listing_type = 'rent' and price > 6000
    )::int as suspect_rent_over_6k,
    min(first_seen_at) as first_seen_earliest,
    max(first_seen_at) as first_seen_latest,
    min(last_seen_at) as last_seen_earliest,
    max(last_seen_at) as last_seen_latest,
    min(days_on_market) filter (where is_active) as dom_min,
    round(avg(days_on_market) filter (where is_active))::int as dom_avg,
    max(days_on_market) filter (where is_active) as dom_max
  into listing_totals
  from listings;

  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'listingType', listing_type,
        'source', source,
        'isActive', is_active,
        'count', cnt
      )
      order by listing_type, source, is_active desc
    ),
    '[]'::jsonb
  )
  into listing_breakdown
  from (
    select listing_type, source, is_active, count(*)::int as cnt
    from listings
    group by listing_type, source, is_active
  ) breakdown_rows;

  select coalesce(
    jsonb_agg(
      jsonb_build_object('city', city, 'count', cnt)
      order by cnt desc
    ),
    '[]'::jsonb
  )
  into listing_top_cities
  from (
    select city, count(*)::int as cnt
    from listings
    where is_active and city is not null and btrim(city) <> ''
    group by city
    order by cnt desc
    limit 10
  ) city_rows;

  -- Append-only snapshots: max(id) is an index lookup; min/max(scraped_at) uses
  -- idx_snapshots_scraped_at. Avoid COUNT(DISTINCT listing_url) — that seq-scans
  -- the whole history table. Unique URLs ≈ listings.total (FK).
  select coalesce(max(id), 0) into snapshot_total from listing_snapshots;
  select min(scraped_at), max(scraped_at)
    into snapshot_earliest, snapshot_latest
  from listing_snapshots;

  select
    count(*)::int as total_rows,
    count(distinct snapshot_date)::int as distinct_dates,
    min(snapshot_date) as min_date,
    max(snapshot_date) as max_date
  into daily
  from market_snapshots_daily;

  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'id', id,
        'startedAt', started_at,
        'completedAt', completed_at,
        'sourcesIngested', sources_ingested,
        'listingsProcessed', listings_processed,
        'snapshotsAdded', snapshots_added,
        'listingsDeactivated', listings_deactivated
      )
      order by id desc
    ),
    '[]'::jsonb
  )
  into ingest
  from (
    select *
    from ingest_runs
    order by id desc
    limit 10
  ) recent_runs;

  select
    count(*)::int as metric_count,
    count(*) filter (where confidence_score < 20)::int as low_confidence,
    max(updated_at) as updated_at_max
  into metrics
  from market_metrics;

  select count(*)::int as city_count, max(updated_at) as updated_at_max
  into city_stats
  from cities;

  select updated_at into rankings_updated_at
  from rankings
  where id = 'current'
  limit 1;

  return jsonb_build_object(
    'listings', jsonb_build_object(
      'total', listing_totals.total,
      'active', listing_totals.active,
      'inactive', listing_totals.inactive,
      'withMarketId', listing_totals.with_market_id,
      'withImageUrl', listing_totals.with_image_url,
      'breakdown', listing_breakdown,
      'dateRange', jsonb_build_object(
        'firstSeenEarliest', listing_totals.first_seen_earliest,
        'firstSeenLatest', listing_totals.first_seen_latest,
        'lastSeenEarliest', listing_totals.last_seen_earliest,
        'lastSeenLatest', listing_totals.last_seen_latest
      ),
      'daysOnMarket', jsonb_build_object(
        'min', listing_totals.dom_min,
        'avg', listing_totals.dom_avg,
        'max', listing_totals.dom_max
      ),
      'topCities', listing_top_cities,
      'suspectRentOver6k', listing_totals.suspect_rent_over_6k
    ),
    'listingSnapshots', jsonb_build_object(
      'total', snapshot_total::int,
      'uniqueListings', listing_totals.total,
      'earliest', snapshot_earliest,
      'latest', snapshot_latest
    ),
    'marketSnapshotsDaily', jsonb_build_object(
      'totalRows', daily.total_rows,
      'distinctDates', daily.distinct_dates,
      'minDate', daily.min_date,
      'maxDate', daily.max_date,
      'daysTracked', case
        when daily.min_date is null then 0
        else (daily.max_date - daily.min_date)::int + 1
      end
    ),
    'ingestRuns', ingest,
    'marketMetrics', jsonb_build_object(
      'count', metrics.metric_count,
      'lowConfidence', metrics.low_confidence,
      'updatedAtMax', metrics.updated_at_max
    ),
    'cities', jsonb_build_object(
      'count', city_stats.city_count,
      'updatedAtMax', city_stats.updated_at_max
    ),
    'rankings', jsonb_build_object(
      'present', rankings_updated_at is not null,
      'updatedAt', rankings_updated_at
    )
  );
end;
$$;

revoke all on function admin_dashboard_stats() from public;
grant execute on function admin_dashboard_stats() to service_role;
