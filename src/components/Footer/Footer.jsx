import { NavLink, Link } from 'react-router-dom'
import { IconPhone, IconChat, IconMail, IconMapPin } from '../icons/Icons'
import {
  BUSINESS,
  getPhoneLink,
  getWhatsAppLink,
  getEmailLink,
  getFullAddress,
} from '../../data/business'
import { SERVICES } from '../../data/services'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-mark">DF</span>
            <span>{BUSINESS.name}</span>
          </Link>
          <p className="footer-tagline">{BUSINESS.tagline}</p>
          <p className="footer-note">
            Custom fabrication and welding for homes, businesses, and
            contractors — built to last, fitted to spec.
          </p>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/request-quote">Request a Quote</NavLink></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            {SERVICES.slice(0, 6).map((service) => (
              <li key={service.id}>
                <NavLink to="/services">{service.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Get In Touch</h3>
          <ul className="footer-contact">
            <li>
              <a href={getPhoneLink()}>
                <IconPhone className="footer-contact-icon" />
                {BUSINESS.phone}
              </a>
            </li>
            <li>
              <a href={getWhatsAppLink('Hi, I would like to enquire about a fabrication project.')}>
                <IconChat className="footer-contact-icon" />
                WhatsApp Us
              </a>
            </li>
            <li>
              <a href={getEmailLink()}>
                <IconMail className="footer-contact-icon" />
                {BUSINESS.email}
              </a>
            </li>
            <li className="footer-address">
              <IconMapPin className="footer-contact-icon" />
              <span>{getFullAddress()}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} {BUSINESS.name}. All rights reserved.</p>
          <p className="footer-placeholder-note">
            Project photos on this site are placeholders pending real workshop images.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
