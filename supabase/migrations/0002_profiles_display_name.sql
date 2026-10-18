-- 관리자 회원 목록용: 카카오 닉네임을 profiles 에도 보관한다.
-- (auth.users 는 관리 API로만 읽을 수 있어서, 목록 · 검색이 쉽도록 한 번 복사해 둔다.)
alter table public.profiles add column if not exists display_name text;

-- 이미 가입한 회원 채우기
update public.profiles p
set display_name = coalesce(
  u.raw_user_meta_data ->> 'name',
  u.raw_user_meta_data ->> 'nickname',
  u.raw_user_meta_data ->> 'full_name',
  u.raw_user_meta_data ->> 'preferred_username',
  u.raw_user_meta_data ->> 'user_name'
)
from auth.users u
where u.id = p.id and p.display_name is null;

-- 앞으로 가입하는 회원도 닉네임과 함께 한 줄 생성
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data ->> 'name',
      new.raw_user_meta_data ->> 'nickname',
      new.raw_user_meta_data ->> 'full_name',
      new.raw_user_meta_data ->> 'preferred_username',
      new.raw_user_meta_data ->> 'user_name'
    )
  )
  on conflict do nothing;
  return new;
end;
$$;

-- 가입일 최신순 목록 조회용
create index if not exists profiles_created_at_idx on public.profiles (created_at desc);
