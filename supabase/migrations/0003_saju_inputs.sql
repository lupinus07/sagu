-- 이전에 입력한 사주 정보: 다음 풀이를 입력할 때 이름 버튼으로 불러오기 위한 표.
-- 사용자당 최근 10건만 유지하고(서버에서 정리), 탈퇴하면 함께 삭제된다.
create table public.saju_inputs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  name text not null default '',
  gender text not null check (gender in ('female', 'male')),
  calendar text not null check (calendar in ('solar', 'lunar')),
  is_leap_month boolean not null default false,
  year smallint not null check (year between 1900 and 2100),
  month smallint not null check (month between 1 and 12),
  day smallint not null check (day between 1 and 31),
  hour smallint check (hour between 0 and 23),          -- null = 태어난 시간 모름
  minute smallint not null default 0 check (minute between 0 and 59),
  ya_jasi boolean not null default false,
  last_used_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  -- 같은 사주를 다시 쓰면 새 행을 만들지 않고 last_used_at 만 갱신한다 (hour 가 null 이어도 같은 값으로 본다)
  unique nulls not distinct (user_id, name, gender, calendar, is_leap_month, year, month, day, hour, minute, ya_jasi)
);

create index saju_inputs_user_recent_idx on public.saju_inputs (user_id, last_used_at desc);

alter table public.saju_inputs enable row level security;

-- 자기 행만 읽고 · 쓰고 · 지울 수 있다
create policy "saju_inputs_select_own" on public.saju_inputs
  for select using (auth.uid() = user_id);
create policy "saju_inputs_insert_own" on public.saju_inputs
  for insert with check (auth.uid() = user_id);
create policy "saju_inputs_update_own" on public.saju_inputs
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "saju_inputs_delete_own" on public.saju_inputs
  for delete using (auth.uid() = user_id);
