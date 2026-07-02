-- Developer / API interest signups (written via service_role API route only)

create table api_interest_signups (
  id bigint generated always as identity primary key,
  email text not null,
  role text not null,
  use_case text,
  data_interests text[] not null default '{}',
  created_at timestamptz not null default now(),
  constraint api_interest_signups_email_unique unique (email),
  constraint api_interest_signups_email_lowercase check (email = lower(email)),
  constraint api_interest_signups_role_not_blank check (btrim(role) <> '')
);

create index api_interest_signups_created_at_idx
  on api_interest_signups (created_at desc);

alter table api_interest_signups enable row level security;
