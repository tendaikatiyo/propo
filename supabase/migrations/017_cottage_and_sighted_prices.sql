-- Cottage as a first-class rent property type + admin sighted price source

alter table market_metrics
    add column if not exists cottage_count integer not null default 0;

-- Allow cottage on community rent reports (rent-only type)
alter table rent_reports drop constraint if exists rent_reports_property_type_check;
alter table rent_reports
    add constraint rent_reports_property_type_check
    check (property_type in ('house', 'flat', 'room', 'townhouse', 'cottage'));

-- Track whether a report came from the public form or an admin sighting
alter table rent_reports
    add column if not exists source text not null default 'community'
        check (source in ('community', 'admin_sighted'));

alter table sale_reports
    add column if not exists source text not null default 'community'
        check (source in ('community', 'admin_sighted'));

alter table land_reports
    add column if not exists source text not null default 'community'
        check (source in ('community', 'admin_sighted'));

alter table rent_reports
    add column if not exists listing_url text;

alter table sale_reports
    add column if not exists listing_url text;

alter table land_reports
    add column if not exists listing_url text;
