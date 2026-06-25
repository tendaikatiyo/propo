-- Days on market metrics rolled up from listings.first_seen_at / last_seen_at

alter table market_metrics
    add column if not exists median_days_on_market_rent integer,
    add column if not exists average_days_on_market_rent integer,
    add column if not exists median_days_on_market_sale integer,
    add column if not exists average_days_on_market_sale integer;

alter table cities
    add column if not exists average_days_on_market_rent integer,
    add column if not exists average_days_on_market_sale integer;

alter table market_snapshots_daily
    add column if not exists median_days_on_market integer,
    add column if not exists avg_days_on_market integer;
