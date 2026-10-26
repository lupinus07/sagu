import { ImageResponse } from "next/og";

// 카카오톡 공유 카드용 이미지 (1200x630). 이름 · 생년월일 같은 개인 정보는 받지도 그리지도 않는다.
// 결론 한 줄과 키워드만 쓰고, 한자는 글꼴에 없어 빼서 그린다.

const PRODUCT = { career: "이직 · 직업운", money: "금전 · 재물운" } as const;
const clip = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);

/** 한자와 그것만 남은 빈 괄호를 지운다 (글꼴에 한자가 없다) */
const stripHanja = (s: string) =>
  s
    .replace(/[㐀-鿿豈-﫿]/g, "")
    .replace(/\(\s*\)/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();

/** 쓰는 글자만 담은 Gowun Batang 부분 글꼴을 구글 폰트에서 받아 온다 */
async function loadFont(text: string): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@700&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    const res = await fetch(url);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const q = new URL(request.url).searchParams;
  const product = q.get("p") === "money" ? "money" : "career";
  const verdict = clip(stripHanja(q.get("v") ?? ""), 12) || "나의 결";
  const reason = clip(stripHanja(q.get("r") ?? "").replace(/\n/g, " "), 60);
  const keywords = (q.get("k") ?? "")
    .split("|")
    .map((k) => clip(stripHanja(k), 14))
    .filter(Boolean)
    .slice(0, 3);

  const lines = {
    brand: "결",
    product: PRODUCT[product],
    tagline: "내 삶의 결을 읽다",
    verdict,
    reason,
  };
  const font = await loadFont(`${Object.values(lines).join("")}${keywords.join("")}${PRODUCT.career}${PRODUCT.money}`);

  const image = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 72px",
          background: "linear-gradient(160deg, #221e15 0%, #121212 70%)",
          color: "#d6d1c6",
          fontFamily: "Gowun Batang",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 36,
              border: "2px solid rgba(242,181,68,0.45)",
              background: "#262219",
              color: "#f2b544",
              fontSize: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {lines.brand}
          </div>
          <div style={{ fontSize: 30, color: "#a8a39a" }}>{lines.product}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 112, lineHeight: 1.1, color: "#f2b544" }}>{lines.verdict}</div>
          {reason && <div style={{ fontSize: 34, lineHeight: 1.5, color: "#f1ede4" }}>{lines.reason}</div>}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 14 }}>
            {keywords.map((k) => (
              <div
                key={k}
                style={{
                  fontSize: 26,
                  padding: "10px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(242,181,68,0.4)",
                  color: "#f2b544",
                  background: "#262219",
                }}
              >
                {k}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 26, color: "#8e897f" }}>{lines.tagline}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: font ? [{ name: "Gowun Batang", data: font, weight: 700, style: "normal" }] : undefined,
      headers: { "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400" },
    },
  );
  return image;
}
