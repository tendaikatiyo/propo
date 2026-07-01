-- F9: market_id join reliability — index + best-effort backfill for legacy rows.
-- Column already exists on listings (001_history.sql). Re-run ingest for city-normalized keys.

create index if not exists idx_listings_market_id
    on listings (market_id)
    where is_active = true;

update listings
set market_id =
    trim(both '_' from regexp_replace(regexp_replace(lower(trim(city)), '[^a-z0-9]+', '_', 'g'), '_+', '_', 'g'))
    || '_'
    || trim(both '_' from regexp_replace(regexp_replace(lower(trim(suburb)), '[^a-z0-9]+', '_', 'g'), '_+', '_', 'g'))
where market_id is null
  and city is not null
  and suburb is not null
  and trim(city) <> ''
  and trim(suburb) <> '';
