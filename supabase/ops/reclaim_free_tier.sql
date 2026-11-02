-- Reclaim space on the Supabase Free plan (500 MB database size cap).
-- The public site does not read listing_snapshots; per-listing history stays in
-- local SQLite (data/easishop.db). Daily suburb rollups are kept.
--
-- If the project is already read-only, run this entire script in the SQL editor
-- as one session. VACUUM cannot run inside BEGIN/COMMIT.
--
-- Docs: https://supabase.com/docs/guides/platform/database-size

-- 1) Allow writes in this session (no-op if not in read-only mode).
set session characteristics as transaction read write;
set default_transaction_read_only = 'off';

-- 2) See what is using space (optional; comment out if you only want the cleanup).
select
  relname as table_name,
  pg_size_pretty(pg_total_relation_size(oid)) as total_size,
  pg_size_pretty(pg_relation_size(oid)) as heap_size
from pg_class
where relkind = 'r'
  and relnamespace = 'public'::regnamespace
order by pg_total_relation_size(oid) desc
limit 20;

select pg_size_pretty(pg_database_size(current_database())) as database_size;

-- 3) Drop the append-only per-listing history mirror (this is the bulk of the 500MB).
truncate listing_snapshots restart identity;

-- 4) Drop listing body text the website never selects.
update listings
set description = null
where description is not null;

-- 5) Drop the fat admin covering index if 018 created it (image_url in INCLUDE).
drop index if exists idx_listings_admin_stats;

-- 6) Reclaim disk. VACUUM FULL locks each table until done.
vacuum full listing_snapshots;
vacuum full listings;

-- 7) Confirm you are back under 500 MB.
select pg_size_pretty(pg_database_size(current_database())) as database_size_after;

-- Optional extra (uncomment if still over the cap):
-- delete from listings where is_active = false;
-- vacuum full listings;
