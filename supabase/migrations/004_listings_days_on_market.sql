-- Per-listing days on market, derived from first_seen_at / last_seen_at.
-- Updates automatically whenever last_seen_at changes on ingest.

do $$
begin
    if not exists (
        select 1
        from information_schema.columns
        where table_schema = 'public'
          and table_name = 'listings'
          and column_name = 'days_on_market'
    ) then
        alter table listings
            add column days_on_market integer
            generated always as (
                greatest(0, extract(day from (last_seen_at - first_seen_at))::integer)
            ) stored;
    end if;
end $$;
