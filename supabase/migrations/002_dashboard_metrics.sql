-- Dashboard tables synced from Python analytics (market_metrics.py, city_metrics.py, rankings.py)

create table if not exists market_metrics (
    market_id text primary key,
    city text not null,
    suburb text not null,
    rental_count integer not null default 0,
    sale_count integer not null default 0,
    median_rent integer,
    average_rent integer,
    minimum_rent integer,
    maximum_rent integer,
    median_sale_price integer,
    average_sale_price integer,
    minimum_sale_price integer,
    maximum_sale_price integer,
    house_count integer not null default 0,
    apartment_count integer not null default 0,
    flat_count integer not null default 0,
    room_count integer not null default 0,
    townhouse_count integer not null default 0,
    commercial_count integer not null default 0,
    yield_percent double precision,
    price_to_rent_ratio double precision,
    affordability_ratio double precision,
    confidence_score integer not null default 0,
    opportunity_score integer not null default 0,
    updated_at timestamptz not null default now()
);

create table if not exists cities (
    city text primary key,
    suburb_count integer not null default 0,
    rental_count integer not null default 0,
    sale_count integer not null default 0,
    median_rent integer,
    median_sale_price integer,
    average_yield double precision,
    average_opportunity_score double precision not null default 0,
    updated_at timestamptz not null default now()
);

create table if not exists rankings (
    id text primary key default 'current',
    payload jsonb not null,
    updated_at timestamptz not null default now()
);

create index if not exists idx_market_metrics_city on market_metrics(city);
create index if not exists idx_market_metrics_yield on market_metrics(yield_percent desc nulls last);

alter table market_metrics enable row level security;
alter table cities enable row level security;
alter table rankings enable row level security;

create policy "Public read market_metrics"
    on market_metrics for select using (true);

create policy "Public read cities"
    on cities for select using (true);

create policy "Public read rankings"
    on rankings for select using (true);
