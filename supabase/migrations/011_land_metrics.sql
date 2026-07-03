-- Land suburb metrics synced from analytics/land_metrics.py

create table if not exists land_metrics (
    market_id text primary key,
    city text not null,
    suburb text not null,
    land_count integer not null default 0,
    priced_land_count integer not null default 0,
    median_price_per_sqm double precision,
    average_price_per_sqm double precision,
    minimum_price_per_sqm double precision,
    maximum_price_per_sqm double precision,
    median_days_on_market_land integer,
    average_days_on_market_land integer,
    confidence_score integer not null default 0,
    updated_at timestamptz not null default now()
);

create index if not exists idx_land_metrics_city on land_metrics(city);
create index if not exists idx_land_metrics_median_pps on land_metrics(median_price_per_sqm asc nulls last);

alter table land_metrics enable row level security;

create policy "Public read land_metrics"
    on land_metrics for select using (true);
