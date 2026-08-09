import './HeroVisual.css'

/**
 * HeroVisual
 * ----------
 * An original, hand-built SVG illustration (not a stock photo) combining
 * a blueprint-style grid with a large stylised steel gate motif. Used in
 * the Home hero so the page has a strong visual anchor immediately,
 * without depending on external/placeholder photography.
 */
function HeroVisual() {
  return (
    <svg
      className="hero-visual"
      viewBox="0 0 560 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a fabricated steel gate on a blueprint grid"
    >
      <defs>
        <linearGradient id="plate" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#252b36" />
          <stop offset="1" stopColor="#171b22" />
        </linearGradient>
        <linearGradient id="amberGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f5a83f" />
          <stop offset="1" stopColor="#ec8b1e" />
        </linearGradient>
        <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="#f5a83f" strokeOpacity="0.08" strokeWidth="1" />
        </pattern>
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

      {/* Large gate motif */}
      <g transform="translate(120,90)">
        {/* posts */}
        <rect x="0" y="0" width="14" height="300" rx="3" fill="url(#amberGlow)" />
        <rect x="306" y="0" width="14" height="300" rx="3" fill="url(#amberGlow)" />
        {/* top + bottom rails */}
        <rect x="0" y="0" width="320" height="12" rx="3" fill="#eceef1" fillOpacity="0.92" />
        <rect x="0" y="288" width="320" height="12" rx="3" fill="#eceef1" fillOpacity="0.92" />
        {/* vertical bars */}
        <rect x="60" y="12" width="8" height="276" fill="#eceef1" fillOpacity="0.65" />
        <rect x="120" y="12" width="8" height="276" fill="#eceef1" fillOpacity="0.65" />
        <rect x="186" y="12" width="8" height="276" fill="#eceef1" fillOpacity="0.65" />
        <rect x="246" y="12" width="8" height="276" fill="#eceef1" fillOpacity="0.65" />
        {/* diagonal cross brace */}
        <line x1="14" y1="288" x2="306" y2="12" stroke="#f5a83f" strokeWidth="9" strokeLinecap="round" />
        <line x1="14" y1="12" x2="306" y2="288" stroke="#eceef1" strokeOpacity="0.35" strokeWidth="7" strokeLinecap="round" />
      </g>

      {/* Weld-point accent dots */}
      <circle className="hero-visual-pulse" cx="120" cy="90" r="5" fill="#f5a83f" />
      <circle className="hero-visual-pulse" cx="426" cy="90" r="5" fill="#f5a83f" />
      <circle className="hero-visual-pulse" cx="120" cy="390" r="5" fill="#f5a83f" />
      <circle className="hero-visual-pulse" cx="426" cy="390" r="5" fill="#f5a83f" />

      {/* dimension line, bottom */}
      <line x1="120" y1="450" x2="440" y2="450" stroke="#f5a83f" strokeOpacity="0.4" strokeWidth="1.5" />
      <line x1="120" y1="444" x2="120" y2="456" stroke="#f5a83f" strokeOpacity="0.4" strokeWidth="1.5" />
      <line x1="440" y1="444" x2="440" y2="456" stroke="#f5a83f" strokeOpacity="0.4" strokeWidth="1.5" />
    </svg>
  )
}

export default HeroVisual
