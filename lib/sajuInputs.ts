// 이전에 입력한 사주 (saju_inputs). 브라우저에서 내 행만 읽고 지운다 (RLS), 저장은 /api/saju-inputs.
import { createClient } from "@/lib/supabase/client";

export type SavedInput = {
  id: string;
  name: string;
  gender: "female" | "male";
  calendar: "solar" | "lunar";
  is_leap_month: boolean;
  year: number;
  month: number;
  day: number;
  hour: number | null;
  minute: number;
  ya_jasi: boolean;
};

/** 최근에 쓴 순서. 로그인하지 않았거나 읽지 못하면 빈 목록. */
export async function listSavedInputs(): Promise<SavedInput[]> {
  try {
    const db = createClient();
    const {
      data: { user },
    } = await db.auth.getUser();
    if (!user) return [];
    const { data, error } = await db
      .from("saju_inputs")
      .select("id, name, gender, calendar, is_leap_month, year, month, day, hour, minute, ya_jasi")
      .order("last_used_at", { ascending: false })
      .limit(10);
    return error ? [] : ((data ?? []) as SavedInput[]);
  } catch {
    return [];
  }
}

export async function deleteSavedInput(id: string): Promise<boolean> {
  try {
    const { error } = await createClient().from("saju_inputs").delete().eq("id", id);
    return !error;
  } catch {
    return false;
  }
}

/** 버튼에 보이는 이름. 이름을 안 적었으면 생년월일. */
export function savedLabel(s: SavedInput) {
  return s.name || `${s.year}.${s.month}.${s.day}`;
}
