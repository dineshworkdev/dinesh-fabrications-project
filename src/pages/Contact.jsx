import { useState } from 'react'
import Seo from '../components/SEO/Seo'
import Reveal from '../components/Reveal/Reveal'
import FormField from '../components/FormField/FormField'
import {
  IconPhone, IconChat, IconMail, IconMapPin, IconClock, IconCheck,
} from '../components/icons/Icons'
import {
  BUSINESS, getPhoneLink, getWhatsAppLink, getEmailLink, getFullAddress,
} from '../data/business'
import { SERVICES } from '../data/services'
import './Contact.css'

const CONTACT_METHOD_OPTIONS = [
  { value: 'phone', label: 'Phone Call' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'email', label: 'Email' },
]

const SERVICE_OPTIONS = SERVICES.map((s) => ({ value: s.id, label: s.title }))

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
  preferredContact: 'phone',
}

function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function validate() {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!formData.phone.trim()) nextErrors.phone = 'Please enter a phone number.'
    if (!formData.message.trim()) nextErrors.message = 'Please tell us a bit about your enquiry.'
    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')

    // PLACEHOLDER SUBMISSION HANDLER
    // No backend exists yet. Once one is available, replace this block
    // with a real request, e.g.:
    //   await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    setTimeout(() => {
      setStatus('success')
      setFormData(INITIAL_FORM)
    }, 600)
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Dinesh Fabrications by phone, WhatsApp, email, or the contact form for your fabrication enquiry."
      />

      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Get In Touch</span>
          <h1>Contact Us</h1>
          <p className="page-header-subtext">
            Reach out by phone, WhatsApp, email, or the form below — we'll get
            back to you about your fabrication enquiry.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          {/* ---------- Contact details ---------- */}
          <Reveal className="contact-details">
            <div className="contact-detail-card">
              <IconPhone className="contact-detail-icon" />
              <div>
                <h3>Call Us</h3>
                <a href={getPhoneLink()}>{BUSINESS.phone}</a>
              </div>
            </div>

            <div className="contact-detail-card">
              <IconChat className="contact-detail-icon" />
              <div>
                <h3>WhatsApp</h3>
                <a href={getWhatsAppLink('Hi, I would like to enquire about a fabrication project.')}>
                  Chat with us
                </a>
              </div>
            </div>

            <div className="contact-detail-card">
              <IconMail className="contact-detail-icon" />
              <div>
                <h3>Email</h3>
                <a href={getEmailLink()}>{BUSINESS.email}</a>
              </div>
            </div>

            <div className="contact-detail-card">
              <IconMapPin className="contact-detail-icon" />
              <div>
                <h3>Workshop Address</h3>
                <p>{getFullAddress()}</p>
              </div>
            </div>

            <div className="contact-detail-card">
              <IconClock className="contact-detail-icon" />
              <div>
                <h3>Business Hours</h3>
                {BUSINESS.hours.map((slot) => (
                  <p key={slot.days} className="contact-hours-row">
                    <span>{slot.days}</span> <span>{slot.time}</span>
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ---------- Contact form ---------- */}
          <Reveal className="contact-form-wrap">
            <div className="contact-form-card">
              <h2>Send an Enquiry</h2>

              {status === 'success' && (
                <div className="form-success" role="status">
                  <IconCheck className="form-success-icon" />
                  <span>
                    Thanks — your enquiry has been noted. We'll get back to you soon.
                    <br />
                    <em>(This form currently doesn't send to a live backend yet.)</em>
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row form-row-2">
                  <FormField
                    id="name"
                    label="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    error={errors.name}
                  />
                  <FormField
                    id="phone"
                    label="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    error={errors.phone}
                  />
                </div>

                <div className="form-row form-row-2">
                  <FormField
                    id="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <FormField
                    id="service"
                    label="Service Required"
                    as="select"
                    options={SERVICE_OPTIONS}
                    value={formData.service}
                    onChange={handleChange}
                  />
                </div>

                <FormField
                  id="message"
                  label="Your Enquiry"
                  as="textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  error={errors.message}
                  placeholder="Tell us a little about what you need fabricated..."
                />

                <fieldset className="form-field form-fieldset">
                  <legend className="form-label">Preferred Contact Method</legend>
                  <div className="form-radio-group">
                    {CONTACT_METHOD_OPTIONS.map((option) => (
                      <label key={option.value} className="form-radio-option">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={option.value}
                          checked={formData.preferredContact === option.value}
                          onChange={handleChange}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Map ---------- */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <h2>Find Us</h2>
            <div className="map-embed">
              {BUSINESS.mapEmbedUrl ? (
                <iframe
                  title="Dinesh Fabrications location"
                  src={BUSINESS.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="map-placeholder">
                  <IconMapPin className="map-placeholder-icon" />
                  <p>
                    Map will appear here once a Google Maps embed link is
                    added to <code>src/data/business.js</code>.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Contact
