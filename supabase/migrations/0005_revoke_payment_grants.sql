-- 결제 테이블 권한 정리: 쓰기는 서버(service role)만. RLS가 꺼지는 실수가 나도 노출되지 않게 이중으로 막는다.
revoke all on public.payment_events from anon, authenticated;
revoke insert, update, delete, truncate, references, trigger on public.orders, public.readings from anon, authenticated;
