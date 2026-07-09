-- Community rent reports (ZW) — anonymous user submissions, admin-reviewed

create table if not exists rent_reports (
    id uuid primary key default gen_random_uuid(),
    market_id text not null,
    city text not null,
    suburb text not null,
    property_type text not null
        check (property_type in ('house', 'flat', 'room', 'townhouse')),
    bedrooms smallint not null
        check (bedrooms >= 0 and bedrooms <= 10),
    monthly_rent integer not null
        check (monthly_rent > 0),
    currency text not null default 'USD',
    is_current_lease boolean not null default true,
    lease_started_at date,
    furnished boolean,
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

create index if not exists rent_reports_market_id_idx
    on rent_reports (market_id);

create index if not exists rent_reports_status_idx
    on rent_reports (status);

create index if not exists rent_reports_created_at_idx
    on rent_reports (created_at desc);

create index if not exists rent_reports_session_hash_idx
    on rent_reports (session_hash, created_at desc);

create index if not exists rent_reports_ip_hash_idx
    on rent_reports (ip_hash, created_at desc);

alter table rent_reports enable row level security;

-- Aggregated public metrics (no PII) — updated when reports are approved/rejected
create table if not exists rent_report_metrics (
    market_id text primary key,
    city text not null,
    suburb text not null,
    report_count integer not null default 0,
    median_rent integer,
    min_rent integer,
    max_rent integer,
    updated_at timestamptz not null default now()
);

create index if not exists rent_report_metrics_report_count_idx
    on rent_report_metrics (report_count desc);

alter table rent_report_metrics enable row level security;

create policy "Public read rent report metrics"
    on rent_report_metrics
    for select
    to anon, authenticated
    using (true);
