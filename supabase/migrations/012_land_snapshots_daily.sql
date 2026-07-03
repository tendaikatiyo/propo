-- Daily land suburb snapshots (median $/sqm) for trend charts

create table if not exists land_snapshots_daily (
    id bigserial primary key,
    snapshot_date date not null,
    city text not null,
    suburb text not null,
    land_count integer not null default 0,
    priced_land_count integer not null default 0,
    median_price_per_sqm double precision,
    avg_price_per_sqm double precision,
    min_price_per_sqm double precision,
    max_price_per_sqm double precision,
    median_days_on_market integer,
    avg_days_on_market integer,
    unique (snapshot_date, city, suburb)
);

create index if not exists idx_land_snapshots_date on land_snapshots_daily(snapshot_date);
create index if not exists idx_land_snapshots_city_suburb on land_snapshots_daily(city, suburb);

alter table land_snapshots_daily enable row level security;

create policy "Public read land_snapshots_daily"
    on land_snapshots_daily for select using (true);
