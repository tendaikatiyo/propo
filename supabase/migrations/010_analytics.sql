-- F10: anonymous product analytics events (service_role insert via /api/events only)

create table if not exists analytics_events (
    id bigserial primary key,
    created_at timestamptz not null default now(),
    session_id text not null,
    event_name text not null,
    path text,
    payload jsonb not null default '{}'::jsonb
);

create index if not exists idx_analytics_events_created_at
    on analytics_events (created_at desc);

create index if not exists idx_analytics_events_event_name
    on analytics_events (event_name);

create index if not exists idx_analytics_events_session_id
    on analytics_events (session_id);

alter table analytics_events enable row level security;

-- No SELECT/INSERT policies for anon/authenticated — API uses service_role.
