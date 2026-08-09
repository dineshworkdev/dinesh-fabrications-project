import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/SEO/Seo'
import Reveal from '../components/Reveal/Reveal'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import Lightbox from '../components/Lightbox/Lightbox'
import HeroVisual from '../components/HeroVisual/HeroVisual'
import ImageWithFallback from '../components/ImageWithFallback/ImageWithFallback'
import {
  IconArrowRight, IconShieldCheck, IconCustom, IconClock, IconChat,
  IconPhone, IconMail, IconMapPin, IconSteel,
} from '../components/icons/Icons'
import { getFeaturedServices } from '../data/services'
import { getFeaturedProjects } from '../data/projects'
import {
  BUSINESS, getPhoneLink, getWhatsAppLink, getEmailLink, getFullAddress,
} from '../data/business'
import './Home.css'

const WHY_CHOOSE_US = [
  {
    icon: IconShieldCheck,
    title: 'Quality Workmanship',
    description: 'Every piece is fabricated with attention to fit, finish, and structural soundness.',
  },
  {
    icon: IconCustom,
    title: 'Custom Solutions',
    description: 'Gates, grills, railings, and structures built to your exact requirements — not off-the-shelf.',
  },
  {
    icon: IconClock,
    title: 'Reliable Process',
    description: 'From enquiry to installation, we keep the process clear and communicate at every step.',
  },
  {
    icon: IconChat,
    title: 'Direct Communication',
    description: 'Talk directly with the workshop about your project — no middlemen, no confusion.',
  },
]

const PROCESS_STEPS = [
  { number: '01', title: 'Enquiry', description: 'Reach out with your requirement via call, WhatsApp, or the quote form.' },
  { number: '02', title: 'Consultation & Quote', description: 'We discuss your project, dimensions, and materials, then share a quotation.' },
  { number: '03', title: 'Fabrication', description: 'Your project is fabricated in our workshop with care and precision.' },
  { number: '04', title: 'Delivery & Installation', description: 'The finished work is delivered and fitted at your site.' },
]

function Home() {
  const [previewProject, setPreviewProject] = useState(null)

  return (
    <>
      <Seo
        title="Custom Steel Fabrication & Welding"
        description="Dinesh Fabrications provides custom gate, grill, railing, and structural steel fabrication for homes, businesses, and contractors."
      />

      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="eyebrow hero-eyebrow-anim">Fabrication &amp; Welding Workshop</span>
            <h1 className="hero-headline-anim">Custom Steel Fabrication, Built to Last</h1>
            <p className="hero-subtext hero-subtext-anim">
              Dinesh Fabrications designs and fabricates gates, grills, railings,
              sheds, and structural steelwork — precision-built for homes,
              businesses, and contractors.
            </p>
            <div className="hero-actions hero-actions-anim">
              <Link to="/request-quote" className="btn btn-primary btn-lg">
                Request a Quote
              </Link>
              <Link to="/projects" className="btn btn-ghost-light btn-lg">
                View Our Work
              </Link>
            </div>
            <a
              href={getWhatsAppLink('Hi, I would like to enquire about a fabrication project.')}
              className="hero-whatsapp-link hero-whatsapp-anim"
            >
              <IconChat className="hero-whatsapp-icon" />
              Or chat with us on WhatsApp
            </a>
          </div>

          <div className="hero-visual-wrap hero-visual-anim" aria-hidden="true">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ---------- TRUST / VALUE STRIP ---------- */}
      <section className="trust-strip">
        <div className="container trust-strip-inner">
          <div className="trust-strip-item">
            <IconShieldCheck className="trust-strip-icon" />
            <span>Precision Fabrication</span>
          </div>
          <div className="trust-strip-item">
            <IconSteel className="trust-strip-icon" />
            <span>Quality Materials</span>
          </div>
          <div className="trust-strip-item">
            <IconChat className="trust-strip-icon" />
            <span>Clear Communication</span>
          </div>
          <div className="trust-strip-item">
            <IconCustom className="trust-strip-icon" />
            <span>Custom-Built Work</span>
          </div>
        </div>
      </section>

      {/* ---------- FEATURED SERVICES ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Featured Services"
              subtitle="A look at some of the fabrication work we take on. Explore the full list on our Services page."
            />
          </Reveal>
          <div className="services-grid">
            {getFeaturedServices().map((service, i) => (
              <Reveal key={service.id} delay={i * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="section-cta">
              <Link to="/services" className="btn btn-secondary">
                Explore All Services <IconArrowRight className="section-cta-icon" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Fabrication Work You Can Rely On"
              subtitle="We focus on getting the details right — fit, finish, and communication — from the first enquiry to final installation."
            />
          </Reveal>
          <div className="why-grid">
            {WHY_CHOOSE_US.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="why-card">
                  <span className="why-card-icon">
                    <item.icon className="why-card-icon-svg" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURED PROJECTS ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Our Work"
              title="Featured Projects"
              subtitle="A sample of completed fabrication work. Visit the Projects page for the full gallery with filtering by category."
            />
          </Reveal>
          <div className="projects-grid">
            {getFeaturedProjects().map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <ProjectCard project={project} onPreview={setPreviewProject} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="section-cta">
              <Link to="/projects" className="btn btn-secondary">
                View Full Gallery <IconArrowRight className="section-cta-icon" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- ABOUT PREVIEW ---------- */}
      <section className="section section-alt">
        <div className="container about-preview">
          <Reveal className="about-preview-media">
            <ImageWithFallback
              src="/images/about/workshop-preview.jpg"
              alt="Dinesh Fabrications workshop"
              label="Workshop Photo"
              className="about-preview-image"
            />
          </Reveal>
          <Reveal className="about-preview-content">
            <span className="eyebrow">About Us</span>
            <h2>A Workshop Built Around Craftsmanship</h2>
            <p>
              Dinesh Fabrications takes on fabrication and welding work for
              homes, businesses, and contractors — from gates and grills to
              structural steelwork. Every project is approached with the same
              attention to fit, finish, and durability.
            </p>
            <Link to="/about" className="btn btn-secondary">
              Learn More About Us <IconArrowRight className="section-cta-icon" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="From Enquiry to Installation"
              center
            />
          </Reveal>
          <div className="process-grid">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 80}>
                <div className="process-step">
                  <span className="process-step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA BANNER ---------- */}
      <section className="section-dark cta-banner">
        <div className="container cta-banner-inner">
          <Reveal>
            <h2>Have a Fabrication Project in Mind?</h2>
            <p>
              Tell us what you need and we'll get back to you with a quotation.
              No project is too small or too complex to ask about.
            </p>
            <div className="cta-banner-actions">
              <Link to="/request-quote" className="btn btn-primary btn-lg">
                Request a Quote
              </Link>
              <a href={getPhoneLink()} className="btn btn-ghost-light btn-lg">
                <IconPhone className="section-cta-icon" /> Call Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CONTACT STRIP ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Easy Ways to Reach Us"
              center
            />
          </Reveal>
          <div className="contact-strip-grid">
            <a href={getPhoneLink()} className="contact-strip-card">
              <IconPhone className="contact-strip-icon" />
              <h3>Call</h3>
              <p>{BUSINESS.phone}</p>
            </a>
            <a
              href={getWhatsAppLink('Hi, I would like to enquire about a fabrication project.')}
              className="contact-strip-card"
            >
              <IconChat className="contact-strip-icon" />
              <h3>WhatsApp</h3>
              <p>Chat with us directly</p>
            </a>
            <a href={getEmailLink()} className="contact-strip-card">
              <IconMail className="contact-strip-icon" />
              <h3>Email</h3>
              <p>{BUSINESS.email}</p>
            </a>
            <Link to="/contact" className="contact-strip-card">
              <IconMapPin className="contact-strip-icon" />
              <h3>Visit</h3>
              <p>{getFullAddress()}</p>
            </Link>
          </div>
        </div>
      </section>

      <Lightbox project={previewProject} onClose={() => setPreviewProject(null)} />
    </>
  )
}

export default Home
