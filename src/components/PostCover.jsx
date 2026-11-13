import Icon from "./Icon.jsx";

// stable visual per post slug (language-independent)
const COVERS = {
  "designing-for-clarity": { icon: "palette", from: "#f59e0b", to: "#b45309" },
  "the-redsun-aesthetic": { icon: "palette", from: "#fb7185", to: "#9f1239" },
  "ai-powered-forecasting": { icon: "trend", from: "#fb923c", to: "#c2410c" },
  "automations-that-save-hours": { icon: "bolt", from: "#fbbf24", to: "#b45309" },
  "scaling-to-4000-teams": { icon: "code", from: "#38bdf8", to: "#1d4ed8" },
  "real-time-everything": { icon: "bulb", from: "#a78bfa", to: "#6d28d9" },
};

const DEFAULT = { icon: "spark", from: "#fb923c", to: "#ea580c" };

// deterministic scattered dots so every cover feels unique but stable
function dots(seed) {
  const out = [];
  let s = seed;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = 0; i < 26; i++) {
    out.push({ x: rnd() * 100, y: rnd() * 100, r: rnd() * 1.6 + 0.4, o: rnd() * 0.5 + 0.1 });
  }
  return out;
}

export default function PostCover({ slug = "", size = "card" }) {
  const cfg = COVERS[slug] || DEFAULT;
  const id = slug.replace(/[^a-z0-9]/gi, "") || "cover";
  const seed = slug.split("").reduce((a, c) => a + c.charCodeAt(0), 7) || 7;
  const pts = dots(seed);

  return (
    <div className={`postcover postcover--${size}`}>
      <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id={`g-${id}`} cx="68%" cy="32%" r="85%">
            <stop offset="0%" stopColor={cfg.from} stopOpacity="0.55" />
            <stop offset="45%" stopColor={cfg.to} stopOpacity="0.28" />
            <stop offset="100%" stopColor="#0a0a10" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`l-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={cfg.from} />
            <stop offset="100%" stopColor={cfg.to} />
          </linearGradient>
        </defs>

        <rect width="400" height="240" fill="#0b0b12" />
        <rect width="400" height="240" fill={`url(#g-${id})`} />

        {/* faint orbit rings */}
        <g stroke={cfg.from} strokeOpacity="0.14" fill="none">
          <circle cx="300" cy="80" r="70" />
          <circle cx="300" cy="80" r="110" />
          <circle cx="300" cy="80" r="150" />
        </g>

        {/* scattered particles */}
        <g fill={cfg.from}>
          {pts.map((p, i) => (
            <circle key={i} cx={(p.x / 100) * 400} cy={(p.y / 100) * 240} r={p.r} opacity={p.o} />
          ))}
        </g>
      </svg>

      {/* themed glyph */}
      <span className="postcover__icon" style={{ background: `linear-gradient(135deg, ${cfg.from}, ${cfg.to})` }}>
        <Icon name={cfg.icon} size={28} stroke={2} />
      </span>
    </div>
  );
}
