import { useState } from 'react'
import Seo from '../components/SEO/Seo'
import Reveal from '../components/Reveal/Reveal'
import FormField from '../components/FormField/FormField'
import { IconCheck, IconPhone, IconChat } from '../components/icons/Icons'
import { getPhoneLink, getWhatsAppLink, BUSINESS } from '../data/business'
import { SERVICES } from '../data/services'
import './RequestQuote.css'

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
  description: '',
  dimensions: '',
  budget: '',
  preferredContact: 'phone',
}

function RequestQuote() {
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
    if (!formData.service) nextErrors.service = 'Please select a service.'
    if (!formData.description.trim()) nextErrors.description = 'Please describe your project.'
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
    //   await fetch('/api/quote-requests', { method: 'POST', body: JSON.stringify(formData) })
    setTimeout(() => {
      setStatus('success')
      setFormData(INITIAL_FORM)
    }, 600)
  }

  return (
    <>
      <Seo
        title="Request a Quote"
        description="Request a fabrication quote from Dinesh Fabrications — tell us about your gate, grill, railing, or structural steel project."
      />

      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Get a Quotation</span>
          <h1>Request a Quote</h1>
          <p className="page-header-subtext">
            Tell us about your project and we'll get back to you with a
            quotation. The more detail you share, the more accurate the quote.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container quote-layout">
          <Reveal className="quote-form-wrap">
            <div className="quote-form-card">
              {status === 'success' && (
                <div className="form-success" role="status">
                  <IconCheck className="form-success-icon" />
                  <span>
                    Thanks — your quote request has been noted. We'll review
                    it and get back to you.
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
                    required
                    error={errors.service}
                  />
                </div>

                <FormField
                  id="description"
                  label="Project Description"
                  as="textarea"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  error={errors.description}
                  placeholder="Describe what you'd like fabricated — type, size, location, and any design preferences."
                />

                <div className="form-row form-row-2">
                  <FormField
                    id="dimensions"
                    label="Approximate Dimensions"
                    value={formData.dimensions}
                    onChange={handleChange}
                    placeholder="e.g. 10 ft x 6 ft"
                  />
                  <FormField
                    id="budget"
                    label="Approximate Budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="e.g. ₹15,000 - ₹20,000"
                  />
                </div>

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

                <div className="form-field">
                  <span className="form-label">
                    Photos / Reference Images <span className="form-optional">(optional)</span>
                  </span>
                  <div className="form-file-placeholder">
                    File upload isn't connected yet — once a backend is in
                    place, you'll be able to attach reference photos here.
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal className="quote-side">
            <div className="quote-side-card">
              <h3>Prefer to Talk Directly?</h3>
              <p>
                Call or message us and we can discuss your project just as
                easily over the phone or WhatsApp.
              </p>
              <a href={getPhoneLink()} className="btn btn-secondary btn-block">
                <IconPhone className="section-cta-icon" /> {BUSINESS.phone}
              </a>
              <a
                href={getWhatsAppLink('Hi, I would like to request a fabrication quote.')}
                className="btn btn-secondary btn-block quote-side-whatsapp"
              >
                <IconChat className="section-cta-icon" /> WhatsApp Us
              </a>
            </div>

            <div className="quote-side-card">
              <h3>What Happens Next?</h3>
              <ol className="quote-side-steps">
                <li>We review your request.</li>
                <li>We may reach out for a few more details.</li>
                <li>You'll receive a quotation for your project.</li>
              </ol>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default RequestQuote
