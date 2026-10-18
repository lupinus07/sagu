-- 사용자 프로필: 약관 동의 여부를 저장한다. 가입(auth.users 생성) 시 자동으로 한 줄 생성.
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  terms_agreed_at timestamptz,
  marketing_agreed boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- 자기 프로필만 읽을 수 있다
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

-- 쓰기는 서버(/api/terms)에서 로그인한 본인 행만. 동의 관련 컬럼만 수정 가능하게 제한한다.
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);
revoke update on public.profiles from authenticated, anon;
grant update (terms_agreed_at, marketing_agreed) on public.profiles to authenticated;

create function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id) values (new.id) on conflict do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
