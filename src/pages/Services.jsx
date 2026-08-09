import { Link } from 'react-router-dom'
import Seo from '../components/SEO/Seo'
import Reveal from '../components/Reveal/Reveal'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import { IconArrowRight } from '../components/icons/Icons'
import { SERVICES } from '../data/services'
import './Services.css'

function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Explore fabrication services from Dinesh Fabrications — gates, grills, railings, sheds, structural steelwork, welding, and repairs."
      />

      <section className="page-header">
        <div className="container">
          <span className="eyebrow">What We Do</span>
          <h1>Fabrication Services</h1>
          <p className="page-header-subtext">
            From custom gates to structural steelwork — a look at the
            fabrication and welding services we take on.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-full-grid">
            {SERVICES.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark services-cta">
        <div className="container services-cta-inner">
          <Reveal>
            <h2>Don't See Exactly What You Need?</h2>
            <p>
              These are examples of the fabrication work we take on — if your
              project doesn't fit neatly into a category, get in touch and
              describe what you have in mind.
            </p>
            <Link to="/request-quote" className="btn btn-primary btn-lg">
              Request a Quote <IconArrowRight className="section-cta-icon" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Services
