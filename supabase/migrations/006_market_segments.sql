alter table market_metrics
    add column if not exists segments jsonb not null default '{}'::jsonb;

create index if not exists idx_market_metrics_segments
    on market_metrics using gin (segments);
