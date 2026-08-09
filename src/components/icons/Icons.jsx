/**
 * ICONS
 * =====
 * A small, hand-built set of line icons used across the site, so the
 * project doesn't need an icon-library dependency. All icons are 24x24,
 * use `currentColor`, and accept a `className` for sizing/color via CSS.
 */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconGate({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <line x1="4" y1="4" x2="4" y2="20" />
      <line x1="20" y1="4" x2="20" y2="20" />
      <line x1="4" y1="5" x2="20" y2="5" />
      <line x1="4" y1="19" x2="20" y2="19" />
      <line x1="8" y1="5" x2="8" y2="19" />
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="16" y1="5" x2="16" y2="19" />
      <line x1="4" y1="19" x2="20" y2="5" />
    </svg>
  )
}

export function IconGrill({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <line x1="8" y1="4" x2="8" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="16" y1="4" x2="16" y2="20" />
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="16" x2="20" y2="16" />
    </svg>
  )
}

export function IconStairs({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M4 20v-4h4v-4h4V8h4V4h4" />
      <path d="M4 20h4v-4h4v-4h4V8h4" opacity="0.4" />
    </svg>
  )
}

export function IconBalcony({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="18" x2="20" y2="18" />
      <line x1="6" y1="6" x2="6" y2="18" />
      <line x1="9.5" y1="6" x2="9.5" y2="18" />
      <line x1="13" y1="6" x2="13" y2="18" />
      <line x1="16.5" y1="6" x2="16.5" y2="18" />
      <line x1="20" y1="6" x2="20" y2="18" />
    </svg>
  )
}

export function IconSteel({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <line x1="6" y1="4" x2="18" y2="4" />
      <line x1="6" y1="20" x2="18" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="8" y1="4" x2="8" y2="6" />
      <line x1="16" y1="4" x2="16" y2="6" />
      <line x1="8" y1="18" x2="8" y2="20" />
      <line x1="16" y1="18" x2="16" y2="20" />
    </svg>
  )
}

export function IconStructural({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M4 20 12 4 20 20" />
      <path d="M8 20 12 12 16 20" />
      <line x1="4" y1="20" x2="20" y2="20" />
    </svg>
  )
}

export function IconShed({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M4 11 12 4 20 11" />
      <path d="M6 11V20H18V11" />
      <line x1="10" y1="20" x2="10" y2="14" />
      <line x1="14" y1="20" x2="14" y2="14" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  )
}

export function IconCustom({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="10" r="5.5" />
      <path d="M9.5 18.5h5" />
      <path d="M10 21h4" />
      <line x1="12" y1="7" x2="12" y2="10" />
      <line x1="9.7" y1="10.5" x2="12" y2="10" />
    </svg>
  )
}

export function IconWeld({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 2 4.5 13.5H11L9.5 22 19.5 9.5H13z" />
    </svg>
  )
}

export function IconRepair({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <line x1="6.5" y1="17.5" x2="16" y2="8" />
      <circle cx="6.5" cy="17.5" r="2.6" />
      <circle cx="17" cy="7" r="2.6" />
    </svg>
  )
}

export function IconShieldCheck({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M12 3 19 6v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />
      <path d="M9 12l2 2 4-4.5" />
    </svg>
  )
}

export function IconClock({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

export function IconChat({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M4 12.5c0-4.4 3.8-8 8.5-8s8.5 3.6 8.5 8-3.8 8-8.5 8c-1.1 0-2.2-.2-3.1-.6L4 21l1.3-3.9C4.5 15.9 4 14.3 4 12.5z" />
      <path d="M9 12h.01M12.5 12h.01M16 12h.01" strokeWidth="2.3" />
    </svg>
  )
}

export function IconPhone({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M6 3h3l1.5 4.5-2 1.5a11 11 0 0 0 5 5l1.5-2L19 13.5v3c0 1.1-.9 2-2 2C10.6 18.5 5.5 13.4 5.5 7c0-1.1.9-2 2-2z" />
    </svg>
  )
}

export function IconMail({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4 6.5l8 6.5 8-6.5" />
    </svg>
  )
}

export function IconMapPin({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

export function IconArrowRight({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <line x1="4" y1="12" x2="19" y2="12" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconCheck({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  )
}

export function IconClose({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  )
}

export function IconImageOff({ className }) {
  return (
    <svg className={className} {...base} aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
      <circle cx="9" cy="10" r="1.7" />
      <path d="M4.5 17.5 9.5 12.5 12.5 15.5 15.5 12 19.5 16" />
    </svg>
  )
}
