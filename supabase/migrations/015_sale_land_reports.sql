-- Community sale and land price reports (ZW) — anonymous submissions, admin-reviewed

create table if not exists sale_reports (
    id uuid primary key default gen_random_uuid(),
    market_id text not null,
    city text not null,
    suburb text not null,
    property_type text not null
        check (property_type in ('house', 'flat', 'room', 'townhouse')),
    bedrooms smallint not null
        check (bedrooms >= 0 and bedrooms <= 10),
    sale_price integer not null
        check (sale_price > 0),
    currency text not null default 'USD',
    is_completed_sale boolean not null default true,
    sale_date date,
    notes text,
    status text not null default 'pending'
        check (status in ('pending', 'approved', 'rejected')),
    rejection_reason text,
    reviewed_at timestamptz,
    reviewed_by text,
    ip_hash text,
    session_hash text,
    created_at timestamptz not null default now()
);

create index if not exists sale_reports_market_id_idx on sale_reports (market_id);
create index if not exists sale_reports_status_idx on sale_reports (status);
create index if not exists sale_reports_created_at_idx on sale_reports (created_at desc);
create index if not exists sale_reports_session_hash_idx on sale_reports (session_hash, created_at desc);
create index if not exists sale_reports_ip_hash_idx on sale_reports (ip_hash, created_at desc);

alter table sale_reports enable row level security;

create table if not exists sale_report_metrics (
    market_id text primary key,
    city text not null,
    suburb text not null,
    report_count integer not null default 0,
    median_sale_price integer,
    min_sale_price integer,
    max_sale_price integer,
    updated_at timestamptz not null default now()
);

create index if not exists sale_report_metrics_report_count_idx
    on sale_report_metrics (report_count desc);

alter table sale_report_metrics enable row level security;

create policy "Public read sale report metrics"
    on sale_report_metrics
    for select
    to anon, authenticated
    using (true);

create table if not exists land_reports (
    id uuid primary key default gen_random_uuid(),
    market_id text not null,
    city text not null,
    suburb text not null,
    land_size_sqm integer
        check (land_size_sqm is null or (land_size_sqm > 0 and land_size_sqm <= 100000)),
    total_price integer not null
        check (total_price > 0),
    price_per_sqm numeric(12, 2)
        check (price_per_sqm is null or price_per_sqm > 0),
    currency text not null default 'USD',
    is_serviced boolean,
    is_completed_purchase boolean not null default true,
    purchase_date date,
    notes text,
    status text not null default 'pending'
        check (status in ('pending', 'approved', 'rejected')),
    rejection_reason text,
    reviewed_at timestamptz,
    reviewed_by text,
    ip_hash text,
    session_hash text,
    created_at timestamptz not null default now()
);

create index if not exists land_reports_market_id_idx on land_reports (market_id);
create index if not exists land_reports_status_idx on land_reports (status);
create index if not exists land_reports_created_at_idx on land_reports (created_at desc);
create index if not exists land_reports_session_hash_idx on land_reports (session_hash, created_at desc);
create index if not exists land_reports_ip_hash_idx on land_reports (ip_hash, created_at desc);

alter table land_reports enable row level security;

create table if not exists land_report_metrics (
    market_id text primary key,
    city text not null,
    suburb text not null,
    report_count integer not null default 0,
    median_price_per_sqm numeric(12, 2),
    min_price_per_sqm numeric(12, 2),
    max_price_per_sqm numeric(12, 2),
    updated_at timestamptz not null default now()
);

create index if not exists land_report_metrics_report_count_idx
    on land_report_metrics (report_count desc);

alter table land_report_metrics enable row level security;

create policy "Public read land report metrics"
    on land_report_metrics
    for select
    to anon, authenticated
    using (true);
