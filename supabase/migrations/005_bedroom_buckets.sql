-- Bedroom bucket counts per suburb market

alter table market_metrics
    add column if not exists beds_1_count integer not null default 0,
    add column if not exists beds_2_count integer not null default 0,
    add column if not exists beds_3_count integer not null default 0,
    add column if not exists beds_4_plus_count integer not null default 0;
