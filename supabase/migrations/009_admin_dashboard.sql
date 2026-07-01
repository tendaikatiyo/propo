-- Admin ops dashboard aggregates (service_role only via RPC)

create or replace function admin_dashboard_stats()
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  result jsonb;
begin
  result := jsonb_build_object(
    'listings', jsonb_build_object(
      'total', (select count(*)::int from listings),
      'active', (select count(*)::int from listings where is_active = true),
      'inactive', (select count(*)::int from listings where is_active = false),
      'withMarketId', (
        select count(*)::int
        from listings
        where market_id is not null and btrim(market_id) <> ''
      ),
      'withImageUrl', (
        select count(*)::int
        from listings
        where image_url is not null and btrim(image_url) <> ''
      ),
      'breakdown', (
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
        from (
          select listing_type, source, is_active, count(*)::int as cnt
          from listings
          group by listing_type, source, is_active
        ) breakdown_rows
      ),
      'dateRange', (
        select jsonb_build_object(
          'firstSeenEarliest', min(first_seen_at),
          'firstSeenLatest', max(first_seen_at),
          'lastSeenEarliest', min(last_seen_at),
          'lastSeenLatest', max(last_seen_at)
        )
        from listings
      ),
      'daysOnMarket', (
        select jsonb_build_object(
          'min', min(days_on_market),
          'avg', round(avg(days_on_market))::int,
          'max', max(days_on_market)
        )
        from listings
        where is_active = true
      ),
      'topCities', (
        select coalesce(
          jsonb_agg(
            jsonb_build_object('city', city, 'count', cnt)
            order by cnt desc
          ),
          '[]'::jsonb
        )
        from (
          select city, count(*)::int as cnt
          from listings
          where is_active = true and city is not null and btrim(city) <> ''
          group by city
          order by cnt desc
          limit 10
        ) city_rows
      ),
      'suspectRentOver6k', (
        select count(*)::int
        from listings
        where is_active = true and listing_type = 'rent' and price > 6000
      )
    ),
    'listingSnapshots', (
      select jsonb_build_object(
        'total', count(*)::int,
        'uniqueListings', count(distinct listing_url)::int,
        'earliest', min(scraped_at),
        'latest', max(scraped_at)
      )
      from listing_snapshots
    ),
    'marketSnapshotsDaily', (
      select jsonb_build_object(
        'totalRows', count(*)::int,
        'distinctDates', count(distinct snapshot_date)::int,
        'minDate', min(snapshot_date),
        'maxDate', max(snapshot_date),
        'daysTracked', case
          when min(snapshot_date) is null then 0
          else (max(snapshot_date) - min(snapshot_date))::int + 1
        end
      )
      from market_snapshots_daily
    ),
    'ingestRuns', (
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
      from (
        select *
        from ingest_runs
        order by id desc
        limit 10
      ) recent_runs
    ),
    'marketMetrics', (
      select jsonb_build_object(
        'count', count(*)::int,
        'lowConfidence', count(*) filter (where confidence_score < 20)::int,
        'updatedAtMax', max(updated_at)
      )
      from market_metrics
    ),
    'cities', (
      select jsonb_build_object(
        'count', count(*)::int,
        'updatedAtMax', max(updated_at)
      )
      from cities
    ),
    'rankings', (
      select jsonb_build_object(
        'present', exists(select 1 from rankings where id = 'current'),
        'updatedAt', (select updated_at from rankings where id = 'current' limit 1)
      )
    )
  );

  return result;
end;
$$;

revoke all on function admin_dashboard_stats() from public;
grant execute on function admin_dashboard_stats() to service_role;
