import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { IconPhone } from '../icons/Icons'
import { BUSINESS, getPhoneLink } from '../../data/business'
import './Navbar.css'

// Primary navigation links. "Request a Quote" is intentionally excluded —
// it's rendered separately as a distinct CTA button (see JSX below).
const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route changes (e.g. user taps a link).
  // Adjusted during render (React's recommended pattern) rather than in a
  // useEffect, which avoids an extra render pass just to reset this flag.
  const [lastPathname, setLastPathname] = useState(location.pathname)
  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname)
    setIsMenuOpen(false)
  }

  // Allow closing the mobile menu with the Escape key.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // Add a subtle "scrolled" elevation once the page moves past the top.
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={'navbar' + (isScrolled ? ' navbar-scrolled' : '')}>
      {/* Slim top bar with quick phone contact — hidden on small screens */}
      <div className="navbar-topbar">
        <div className="container navbar-topbar-inner">
          <span>Custom fabrication &amp; welding, done right.</span>
          <a href={getPhoneLink()} className="navbar-topbar-phone">
            <IconPhone className="navbar-topbar-icon" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Sticky group: main bar + mobile dropdown panel stay pinned together.
          The topbar above is intentionally excluded so it scrolls away
          normally instead of being animated/collapsed. */}
      <div className="navbar-sticky">
        <div className="navbar-main">
          <div className="navbar-inner container">
            {/* Placeholder text wordmark — swap for a real logo image later. */}
            <NavLink to="/" className="navbar-logo" onClick={() => setIsMenuOpen(false)}>
              <span className="navbar-logo-mark">DF</span>
              <span className="navbar-logo-text">
                <span className="navbar-logo-strong">Dinesh</span> Fabrications
              </span>
            </NavLink>

            {/* Desktop navigation */}
            <nav className="navbar-links" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    'navbar-link' + (isActive ? ' navbar-link-active' : '')
                  }
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink to="/request-quote" className="btn btn-primary navbar-cta">
                Request a Quote
              </NavLink>
            </nav>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className={'navbar-toggle' + (isMenuOpen ? ' navbar-toggle-open' : '')}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="navbar-toggle-bar" />
              <span className="navbar-toggle-bar" />
              <span className="navbar-toggle-bar" />
            </button>
          </div>
        </div>

        {/* Mobile navigation panel */}
        <nav
          id="mobile-menu"
          className={'navbar-mobile' + (isMenuOpen ? ' navbar-mobile-open' : '')}
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link, i) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                'navbar-mobile-link' + (isActive ? ' navbar-link-active' : '')
              }
              style={{ transitionDelay: isMenuOpen ? `${i * 40}ms` : '0ms' }}
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/request-quote"
            className="btn btn-primary navbar-mobile-cta"
            style={{ transitionDelay: isMenuOpen ? `${NAV_LINKS.length * 40}ms` : '0ms' }}
          >
            Request a Quote
          </NavLink>
          <a
            href={getPhoneLink()}
            className="navbar-mobile-phone"
            style={{ transitionDelay: isMenuOpen ? `${(NAV_LINKS.length + 1) * 40}ms` : '0ms' }}
          >
            <IconPhone className="navbar-topbar-icon" />
            {BUSINESS.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
