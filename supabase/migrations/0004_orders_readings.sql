-- 결제 · 풀이 테이블. 원격 DB에 이미 존재하는 스키마를 그대로 기록한 마이그레이션이다.
-- (원격에는 이미 적용되어 있으므로 새 DB를 만들 때만 실행한다. 모두 if not exists / or replace 로 작성.)

create or replace function public.set_updated_at() returns trigger
language plpgsql set search_path = '' as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- 주문: 회원(user_id 있음) · 비회원(user_id null) 모두. 탈퇴해도 결제 기록은 남기도록 set null.
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete set null,
  product text not null check (product in ('career', 'money')),
  order_name text not null,
  amount integer not null check (amount > 0),
  status text not null default 'READY'
    check (status in ('READY', 'PAID', 'FAILED', 'CANCELED', 'REFUNDED')),
  payment_key text unique,          -- 토스 paymentKey. unique 로 승인 중복을 막는다
  method text,
  birth_input jsonb not null,
  approved_at timestamptz,
  failure_code text,
  failure_message text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists orders_user_id_idx on public.orders (user_id, created_at desc);
create index if not exists orders_status_idx on public.orders (status);

create trigger orders_set_updated_at
  before update on public.orders
  for each row execute function public.set_updated_at();

-- 풀이: 주문당 1건 (order_id unique 로 중복 생성을 DB 레벨에서 막는다)
create table if not exists public.readings (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null unique references public.orders (id) on delete cascade,
  user_id uuid references auth.users (id) on delete cascade,
  product text not null check (product in ('career', 'money')),
  status text not null default 'GENERATING' check (status in ('GENERATING', 'DONE', 'FAILED')),
  cache_key text not null,
  saju_chart jsonb not null,
  content jsonb,
  attempts smallint not null default 0,
  error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists readings_user_id_idx on public.readings (user_id, created_at desc);
create index if not exists readings_cache_key_idx on public.readings (cache_key);

create trigger readings_set_updated_at
  before update on public.readings
  for each row execute function public.set_updated_at();

-- 토스 웹훅 · 승인 응답 원본 기록 (서버 전용)
create table if not exists public.payment_events (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references public.orders (id) on delete cascade,
  payment_key text,
  event_type text not null,
  status text,
  payload jsonb not null,
  received_at timestamptz not null default now()
);

create index if not exists payment_events_order_id_idx on public.payment_events (order_id);

-- RLS: 읽기는 자기 행만, 쓰기는 서버(service role)에서만. payment_events 는 정책이 없어 서버 전용이다.
alter table public.orders enable row level security;
alter table public.readings enable row level security;
alter table public.payment_events enable row level security;

create policy "orders_select_own" on public.orders
  for select using (auth.uid() = user_id);
create policy "readings_select_own" on public.readings
  for select using (auth.uid() = user_id);
