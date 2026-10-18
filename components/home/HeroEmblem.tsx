/** 홈 히어로: 둥근 틀 안의 달과 산수. 이미지 파일 없이 SVG로 그린다. */
export function HeroEmblem() {
  return (
    <svg
      viewBox="0 0 240 240"
      role="img"
      aria-label="구름 사이로 달이 뜬 산수화"
      className="mx-auto size-[220px] drop-shadow-[0_0_28px_rgba(242,181,68,0.18)]"
    >
      <defs>
        <clipPath id="hero-clip">
          <circle cx="120" cy="120" r="92" />
        </clipPath>
        <radialGradient id="hero-sky" cx="50%" cy="30%" r="80%">
          <stop offset="0" stopColor="#3a3f4b" />
          <stop offset="1" stopColor="#14161c" />
        </radialGradient>
        <radialGradient id="hero-moon" cx="45%" cy="40%" r="60%">
          <stop offset="0" stopColor="#fbe3a6" />
          <stop offset="0.6" stopColor="#f2b544" />
          <stop offset="1" stopColor="#c98a2c" />
        </radialGradient>
        <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#f2b544" stopOpacity="0.55" />
          <stop offset="1" stopColor="#f2b544" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#59606d" />
          <stop offset="1" stopColor="#2a2e37" />
        </linearGradient>
        <linearGradient id="hero-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b414c" />
          <stop offset="1" stopColor="#1b1e25" />
        </linearGradient>
        <linearGradient id="hero-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#23262d" />
          <stop offset="1" stopColor="#0d0e12" />
        </linearGradient>
        <linearGradient id="hero-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d8d3c6" />
          <stop offset="0.5" stopColor="#6b675d" />
          <stop offset="1" stopColor="#d8d3c6" />
        </linearGradient>
        <filter id="hero-blur">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* 바깥 틀 */}
      <circle cx="120" cy="120" r="112" fill="#0e0f13" stroke="url(#hero-ring)" strokeWidth="2" />
      <circle cx="120" cy="120" r="104" fill="none" stroke="#2c2c2c" strokeWidth="10" />
      <circle
        cx="120"
        cy="120"
        r="104"
        fill="none"
        stroke="#4a4437"
        strokeWidth="1"
        strokeDasharray="2 6"
      />
      <circle cx="120" cy="120" r="94" fill="none" stroke="url(#hero-ring)" strokeWidth="1.5" />

      {/* 그림 */}
      <g clipPath="url(#hero-clip)">
        <rect width="240" height="240" fill="url(#hero-sky)" />
        <circle cx="132" cy="74" r="46" fill="url(#hero-glow)" />
        <circle cx="132" cy="74" r="24" fill="url(#hero-moon)" />
        <g fill="#8d6a2c" opacity="0.35">
          <circle cx="124" cy="68" r="4" />
          <circle cx="139" cy="82" r="3" />
          <circle cx="130" cy="79" r="2" />
        </g>
        {/* 구름 */}
        <g fill="#20232b" filter="url(#hero-blur)" opacity="0.9">
          <ellipse cx="96" cy="86" rx="40" ry="9" />
          <ellipse cx="160" cy="70" rx="34" ry="7" />
          <ellipse cx="120" cy="100" rx="52" ry="8" />
        </g>
        {/* 산 */}
        <path
          d="M20 150 L62 118 L88 134 L120 108 L158 136 L190 114 L224 146 L224 200 L20 200 Z"
          fill="url(#hero-far)"
        />
        <path
          d="M20 168 L54 140 L84 160 L118 132 L150 158 L186 136 L224 168 L224 210 L20 210 Z"
          fill="url(#hero-mid)"
        />
        <path d="M120 188 C132 176 150 184 164 176 C176 170 190 176 208 170" fill="none" stroke="#f2b544" strokeOpacity="0.45" strokeWidth="1.2" />
        <path
          d="M20 196 L44 172 L70 190 L96 178 L130 198 L170 184 L224 206 L224 240 L20 240 Z"
          fill="url(#hero-near)"
        />
        {/* 소나무 */}
        <g fill="#0b0c0f">
          <path d="M52 176 L58 158 L64 176 Z M54 168 L58 152 L62 168 Z" />
          <rect x="57.2" y="174" width="1.6" height="10" />
          <path d="M70 184 L75 168 L80 184 Z" />
          <rect x="74.2" y="182" width="1.6" height="8" />
        </g>
      </g>
    </svg>
  );
}
