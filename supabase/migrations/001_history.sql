-- Supabase / Postgres schema for historical compounding (optional cloud mirror)

create table if not exists listings (
    listing_url text primary key,
    source text not null,
    listing_type text not null,
    property_type text,
    market_id text,
    title text,
    price integer,
    price_raw text,
    city text,
    suburb text,
    location text,
    description text,
    bedrooms integer,
    bathrooms integer,
    lounges integer,
    land_size double precision,
    land_size_unit text,
    agency_name text,
    agency_logo text,
    first_seen_at timestamptz not null default now(),
    last_seen_at timestamptz not null default now(),
    is_active boolean not null default true
);

create table if not exists listing_snapshots (
    id bigserial primary key,
    listing_url text not null references listings(listing_url),
    scraped_at timestamptz not null,
    price integer,
    price_raw text,
    property_type text,
    bedrooms integer,
    bathrooms integer,
    lounges integer,
    land_size double precision,
    land_size_unit text,
    is_active boolean not null default true,
    unique (listing_url, scraped_at)
);

create table if not exists market_snapshots_daily (
    id bigserial primary key,
    snapshot_date date not null,
    city text not null,
    suburb text not null,
    listing_type text not null,
    property_type text not null,
    listing_count integer not null,
    median_price integer,
    avg_price integer,
    min_price integer,
    max_price integer,
    unique (snapshot_date, city, suburb, listing_type, property_type)
);

create table if not exists ingest_runs (
    id bigserial primary key,
    started_at timestamptz not null,
    completed_at timestamptz,
    sources_ingested text,
    listings_processed integer default 0,
    snapshots_added integer default 0,
    listings_deactivated integer default 0
);

create index if not exists idx_listings_source_active on listings(source, is_active);
create index if not exists idx_listings_market on listings(city, suburb, listing_type, property_type);
create index if not exists idx_snapshots_scraped_at on listing_snapshots(scraped_at);
create index if not exists idx_market_snapshots_date on market_snapshots_daily(snapshot_date);

alter table listings enable row level security;
alter table listing_snapshots enable row level security;
alter table market_snapshots_daily enable row level security;

create policy "Public read listings"
    on listings for select using (true);

create policy "Public read listing snapshots"
    on listing_snapshots for select using (true);

create policy "Public read market snapshots"
    on market_snapshots_daily for select using (true);
