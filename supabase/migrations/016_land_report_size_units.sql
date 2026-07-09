-- Store original stand size + unit on community land reports (sqm stored separately)

alter table land_reports
    add column if not exists land_size numeric
        check (land_size is null or land_size > 0);

alter table land_reports
    add column if not exists land_size_unit text
        check (
            land_size_unit is null
            or land_size_unit in ('sqm', 'acres', 'ha')
        );
