-- 결제 주문과 AI 풀이 저장.
-- 쓰기(주문 생성 · 결제 승인 · 풀이 저장)는 전부 서버에서 서비스 키로만 한다.
-- 사용자는 자기 주문 · 풀이를 읽기만 할 수 있다. 비회원 주문은 user_id 가 null.

-- updated_at 자동 갱신
create or replace function public.set_updated_at() returns trigger
language plpgsql set search_path = '' as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- 주문 ---------------------------------------------------------------
create table public.orders (
  id uuid primary key default gen_random_uuid(),               -- 토스 orderId 로 그대로 쓴다
  -- 탈퇴해도 결제 기록은 남긴다(전자상거래법 보관 의무) → set null
  user_id uuid references auth.users (id) on delete set null,
  product text not null check (product in ('career', 'money')),
  order_name text not null,
  amount integer not null check (amount > 0),
  status text not null default 'READY'
    check (status in ('READY', 'PAID', 'FAILED', 'CANCELED', 'REFUNDED')),
  payment_key text unique,                                     -- 토스 승인 후 채운다
  method text,                                                 -- 카드 · 간편결제 등
  birth_input jsonb not null,                                  -- 사주 입력값(status 포함)
  approved_at timestamptz,
  failure_code text,
  failure_message text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index orders_user_id_idx on public.orders (user_id, created_at desc);
create index orders_status_idx on public.orders (status);

create trigger orders_set_updated_at
  before update on public.orders
  for each row execute function public.set_updated_at();

alter table public.orders enable row level security;

create policy "orders_select_own" on public.orders
  for select using (auth.uid() = user_id);

revoke insert, update, delete on public.orders from anon, authenticated;

-- 풀이 ---------------------------------------------------------------
create table public.readings (
  id uuid primary key default gen_random_uuid(),
  -- 주문 하나에 풀이 하나: 승인 API 가 두 번 불려도 중복 생성되지 않는다
  order_id uuid not null unique references public.orders (id) on delete cascade,
  user_id uuid references auth.users (id) on delete cascade,
  product text not null check (product in ('career', 'money')),
  status text not null default 'GENERATING'
    check (status in ('GENERATING', 'DONE', 'FAILED')),
  cache_key text not null,                                     -- 생년월일시+성별+역법+자시+status+상품
  saju_chart jsonb not null,                                   -- calculateSaju() 결과
  content jsonb,                                               -- Claude 풀이(스키마 검증 후), 생성 전엔 null
  attempts smallint not null default 0,                        -- 생성 시도 횟수(재시도 1회 판단용)
  error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index readings_user_id_idx on public.readings (user_id, created_at desc);
create index readings_cache_key_idx on public.readings (cache_key);

create trigger readings_set_updated_at
  before update on public.readings
  for each row execute function public.set_updated_at();

alter table public.readings enable row level security;

create policy "readings_select_own" on public.readings
  for select using (auth.uid() = user_id);

revoke insert, update, delete on public.readings from anon, authenticated;

-- 결제 웹훅 기록: 같은 이벤트가 여러 번 와도 한 번만 처리한다 ----------
create table public.payment_events (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references public.orders (id) on delete cascade,
  payment_key text,
  event_type text not null,
  status text,
  payload jsonb not null,
  received_at timestamptz not null default now()
);

create index payment_events_order_id_idx on public.payment_events (order_id);

-- 정책 없음 = 서비스 키로만 접근
alter table public.payment_events enable row level security;
