import { useEffect, useState } from 'react'
import { IconPhone, IconChat } from '../icons/Icons'
import { getPhoneLink, getWhatsAppLink } from '../../data/business'
import './FloatingContact.css'

/**
 * FloatingContact
 * ----------------
 * Fixed bottom-right Call + WhatsApp buttons, visible on every page.
 * Keeps the two most important actions always within thumb's reach,
 * especially on mobile. Fades in shortly after the page loads and gives
 * the WhatsApp button a single, brief attention pulse (not a repeating
 * bounce) once — respects prefers-reduced-motion.
 */
function FloatingContact() {
  const [showPulse, setShowPulse] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) return

    const timer = setTimeout(() => setShowPulse(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="floating-contact" aria-label="Quick contact">
      <a
        href={getWhatsAppLink('Hi, I would like to enquire about a fabrication project.')}
        className={'floating-btn floating-btn-whatsapp' + (showPulse ? ' floating-btn-pulse-once' : '')}
        aria-label="Chat with us on WhatsApp"
        onAnimationEnd={(e) => {
          if (e.animationName === 'pulseRing') setShowPulse(false)
        }}
      >
        <IconChat className="floating-btn-icon" />
      </a>
      <a
        href={getPhoneLink()}
        className="floating-btn floating-btn-call"
        aria-label="Call us now"
      >
        <IconPhone className="floating-btn-icon" />
      </a>
    </div>
  )
}

export default FloatingContact
