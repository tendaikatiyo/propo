-- Land listing counts per city (from land_metrics aggregation)

alter table cities
    add column if not exists land_count integer not null default 0;
