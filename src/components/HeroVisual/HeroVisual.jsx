import './HeroVisual.css'

// Lattice grid dimensions — tuned to echo the reference grill's proportions.
const COLS = 5
const ROWS = 5

// Frame + lattice geometry (matches the group's local coordinate space below).
const FRAME_X = 0
const FRAME_Y = 0
const FRAME_W = 320
const FRAME_H = 300
const INSET = 16
const INNER_X = FRAME_X + INSET
const INNER_Y = FRAME_Y + INSET
const INNER_W = FRAME_W - INSET * 2
const INNER_H = FRAME_H - INSET * 2
const CELL_W = INNER_W / COLS
const CELL_H = INNER_H / ROWS
// The corner radius must stay a MODEST fraction of the cell size — around
// a fifth of it — so each cell reads as a square with gently arched
// corners. Too large a ratio (as in an earlier version of this file) makes
// every cell round into a near-circle, producing a "bubble grid" instead
// of the interlocking arched-square lattice seen in the reference design.
const CELL_RX = Math.min(CELL_W, CELL_H) * 0.3

const LATTICE_CELLS = Array.from({ length: ROWS * COLS }, (_, index) => {
  const col = index % COLS
  const row = Math.floor(index / COLS)
  return {
    key: `${row}-${col}`,
    x: INNER_X + col * CELL_W,
    y: INNER_Y + row * CELL_H,
  }
})

/**
 * HeroVisual
 * ----------
 * An original, hand-built SVG illustration — not a photo — recreating the
 * arched-square lattice pattern from the reference grill design as a
 * stylised technical/blueprint-style drawing, in the same visual language
 * (steel plate, blueprint grid, corner brackets, weld-point accents) as
 * the rest of the site's industrial identity.
 */
function HeroVisual() {
  return (
    <svg
      className="hero-visual"
      viewBox="0 0 560 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a custom fabricated steel window grill with an arched-square lattice pattern"
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

      {/* Grill illustration — outer frame + arched-square lattice, redrawn
          from the reference photo's design rather than reproducing it */}
      <g transform="translate(120,90)">
        {/* Lattice: tiled rounded-square cells whose overlapping corners
            form the interlocking arched negative-space pattern */}
        {LATTICE_CELLS.map((cell) => (
          <rect
            key={cell.key}
            x={cell.x}
            y={cell.y}
            width={CELL_W}
            height={CELL_H}
            rx={CELL_RX}
            fill="none"
            stroke="#eceef1"
            strokeOpacity="0.85"
            strokeWidth="4"
          />
        ))}

        {/* Outer window/grill frame */}
        <rect
          x={FRAME_X}
          y={FRAME_Y}
          width={FRAME_W}
          height={FRAME_H}
          rx="6"
          fill="none"
          stroke="url(#amberGlow)"
          strokeWidth="11"
        />

        {/* Corner mounting points, echoing the frame's fixed corners */}
        <circle cx={FRAME_X + 10} cy={FRAME_Y + 10} r="3.4" fill="#f5a83f" />
        <circle cx={FRAME_X + FRAME_W - 10} cy={FRAME_Y + 10} r="3.4" fill="#f5a83f" />
        <circle cx={FRAME_X + 10} cy={FRAME_Y + FRAME_H - 10} r="3.4" fill="#f5a83f" />
        <circle cx={FRAME_X + FRAME_W - 10} cy={FRAME_Y + FRAME_H - 10} r="3.4" fill="#f5a83f" />
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
