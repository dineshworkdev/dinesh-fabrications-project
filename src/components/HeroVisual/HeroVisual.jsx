import './HeroVisual.css'

// Spark particles radiating outward from the weld point. Coordinates are
// pre-computed (radial spray at varied angles/lengths, avoiding the
// direction of the two steel beams) rather than randomised at render time,
// so the composition stays consistent across reloads.
const SPARKS = [
  { x1: 217.9, y1: 161.5, x2: 227.0, y2: 145.8, delay: 0.0 },
  { x1: 226.6, y1: 162.1, x2: 252.0, y2: 147.5, delay: 0.12 },
  { x1: 225.1, y1: 167.9, x2: 247.5, y2: 163.9, delay: 0.24 },
  { x1: 231.6, y1: 175.0, x2: 266.1, y2: 184.2, delay: 0.36 },
  { x1: 221.0, y1: 176.7, x2: 236.0, y2: 189.3, delay: 0.48 },
  { x1: 220.1, y1: 185.2, x2: 233.3, y2: 213.5, delay: 0.6 },
  { x1: 213.0, y1: 183.3, x2: 213.0, y2: 208.0, delay: 0.72 },
  { x1: 205.3, y1: 186.5, x2: 191.0, y2: 217.1, delay: 0.84 },
  { x1: 204.4, y1: 177.2, x2: 188.5, y2: 190.6, delay: 0.96 },
  { x1: 199.2, y1: 175.0, x2: 173.5, y2: 184.4, delay: 1.08 },
]

const WELD_X = 213
const WELD_Y = 170

/**
 * HeroVisual
 * ----------
 * An original, hand-built SVG illustration — not a photo, not a generic
 * icon — depicting an active weld on a fabricated steel corner joint: two
 * beams meeting at a joint, a welding torch angled into it, and animated
 * sparks. Rendered in the same visual language as the rest of the site's
 * industrial identity (steel plate, blueprint grid, corner brackets,
 * dimension line).
 */
function HeroVisual() {
  return (
    <svg
      className="hero-visual"
      viewBox="0 0 560 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a welder fabricating a steel corner joint, with an active weld and sparks"
    >
      <defs>
        <linearGradient id="plate" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#252b36" />
          <stop offset="1" stopColor="#171b22" />
        </linearGradient>
        <linearGradient id="steelBeam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef0f2" />
          <stop offset="1" stopColor="#c3c7cf" />
        </linearGradient>
        <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="#f5a83f" strokeOpacity="0.08" strokeWidth="1" />
        </pattern>
        <radialGradient id="weldGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff6e0" />
          <stop offset="0.35" stopColor="#ffcf6b" />
          <stop offset="1" stopColor="#ec8b1e" stopOpacity="0" />
        </radialGradient>
        <filter id="softBlur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Base plate */}
      <rect x="8" y="8" width="544" height="464" rx="24" fill="url(#plate)" />
      <rect x="8" y="8" width="544" height="464" rx="24" fill="url(#grid)" />
      <rect x="8" y="8" width="544" height="464" rx="24" stroke="#f5a83f" strokeOpacity="0.18" strokeWidth="1.5" />

      {/* Corner viewfinder brackets — engineering/precision motif */}
      <path d="M36 70V44H62" stroke="#f5a83f" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M524 70V44H498" stroke="#f5a83f" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M36 410V436H62" stroke="#f5a83f" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M524 410V436H498" stroke="#f5a83f" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round" />

      {/* Welding scene — steel corner joint, torch, and weld glow */}
      <g transform="translate(120,90)">
        {/* Horizontal beam */}
        <rect x="20" y="153" width="210" height="34" rx="3" fill="url(#steelBeam)" stroke="#12151b" strokeOpacity="0.4" strokeWidth="1.5" />
        <line x1="20" y1="160" x2="196" y2="160" stroke="#12151b" strokeOpacity="0.18" strokeWidth="1.5" />
        <line x1="20" y1="180" x2="196" y2="180" stroke="#12151b" strokeOpacity="0.18" strokeWidth="1.5" />

        {/* Vertical beam */}
        <rect x="196" y="20" width="34" height="167" rx="3" fill="url(#steelBeam)" stroke="#12151b" strokeOpacity="0.4" strokeWidth="1.5" />
        <line x1="203" y1="20" x2="203" y2="150" stroke="#12151b" strokeOpacity="0.18" strokeWidth="1.5" />
        <line x1="223" y1="20" x2="223" y2="150" stroke="#12151b" strokeOpacity="0.18" strokeWidth="1.5" />

        {/* Welding torch, angled into the joint from the lower-left */}
        <g transform={`translate(${WELD_X - 22},${WELD_Y + 22}) rotate(-45)`}>
          <rect x="-118" y="-9" width="72" height="18" rx="6" fill="#2a2f3a" stroke="#f5a83f" strokeOpacity="0.5" strokeWidth="1" />
          <circle cx="-46" cy="0" r="9" fill="#3a4150" />
          <polygon points="-46,-6 -46,6 -4,2 -4,-2" fill="#8a8f99" />
          <circle cx="-2" cy="0" r="3.2" fill="#ffe3b3" />
        </g>

        {/* Soft ambient glow behind the weld point */}
        <circle cx={WELD_X} cy={WELD_Y} r="30" fill="url(#weldGlow)" filter="url(#softBlur)" className="hero-weld-halo" />

        {/* Spark particles */}
        {SPARKS.map((s, i) => (
          <g key={i} className="hero-spark" style={{ animationDelay: `${s.delay}s` }}>
            <line x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke="#ffcf6b" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx={s.x2} cy={s.y2} r="1.8" fill="#fff6e0" />
          </g>
        ))}

        {/* Bright weld pool at the joint, on top of everything */}
        <circle cx={WELD_X} cy={WELD_Y} r="7" fill="url(#weldGlow)" className="hero-weld-core" />
      </g>

      {/* dimension line, bottom */}
      <line x1="120" y1="450" x2="440" y2="450" stroke="#f5a83f" strokeOpacity="0.4" strokeWidth="1.5" />
      <line x1="120" y1="444" x2="120" y2="456" stroke="#f5a83f" strokeOpacity="0.4" strokeWidth="1.5" />
      <line x1="440" y1="444" x2="440" y2="456" stroke="#f5a83f" strokeOpacity="0.4" strokeWidth="1.5" />
    </svg>
  )
}

export default HeroVisual
