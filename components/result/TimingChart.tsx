type Point = { label: string; score: number; peak?: boolean };

const W = 360;
const H = 170;
const PAD_X = 28;
const TOP = 34;
const BASE = 140;

function smoothPath(pts: { x: number; y: number }[]) {
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
    d += ` C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

/** 점수는 코드가 계산해서 받는다. 이 컴포넌트는 그리기만 한다. */
export function TimingChart({
  points,
  accent = "#f2b544",
  highlight = "#2a2416",
}: {
  points: Point[];
  accent?: string;
  highlight?: string;
}) {
  if (points.length < 2) return null;
  const step = (W - PAD_X * 2) / (points.length - 1);
  const pts = points.map((p, i) => ({
    ...p,
    x: PAD_X + step * i,
    y: BASE - (p.score / 100) * (BASE - TOP),
  }));
  const peak = pts.find((p) => p.peak) ?? pts.reduce((a, b) => (b.score > a.score ? b : a));

  return (
    <svg viewBox={`0 0 ${W} ${H + 24}`} role="img" aria-label="반기별 타이밍 그래프" className="w-full">
      <rect
        x={peak.x - step * 0.4}
        y={TOP - 16}
        width={step * 0.8}
        height={BASE - TOP + 16}
        rx="10"
        fill={highlight}
      />
      <text x={peak.x} y={TOP - 4} textAnchor="middle" fontSize="11" fontWeight="700" fill={accent}>
        최고점
      </text>
      <line
        x1={PAD_X}
        x2={W - PAD_X}
        y1={BASE - (BASE - TOP) / 2}
        y2={BASE - (BASE - TOP) / 2}
        stroke="#2c2c2c"
        strokeDasharray="3 3"
      />
      <line x1={PAD_X} x2={W - PAD_X} y1={BASE} y2={BASE} stroke="#262626" />
      <path d={smoothPath(pts)} fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
      {pts.map((p) => (
        <g key={p.label}>
          <circle
            cx={p.x}
            cy={p.y}
            r={p === peak ? 7 : 4.5}
            fill={p.score >= 60 ? accent : "#8e897f"}
          />
          <text
            x={p.x}
            y={BASE + 20}
            textAnchor="middle"
            fontSize="11"
            fontWeight={p === peak ? 700 : 400}
            fill={p === peak ? accent : "#8e897f"}
          >
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
