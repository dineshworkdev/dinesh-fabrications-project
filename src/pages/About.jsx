import { Link } from 'react-router-dom'
import Seo from '../components/SEO/Seo'
import Reveal from '../components/Reveal/Reveal'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import ImageWithFallback from '../components/ImageWithFallback/ImageWithFallback'
import { IconShieldCheck, IconCustom, IconClock, IconChat, IconArrowRight } from '../components/icons/Icons'
import { BUSINESS } from '../data/business'
import './About.css'

const VALUES = [
  {
    icon: IconShieldCheck,
    title: 'Quality Workmanship',
    description: 'We treat every project — large or small — with the same care for fit, finish, and durability.',
  },
  {
    icon: IconCustom,
    title: 'Custom-First Approach',
    description: "Fabrication work is rarely one-size-fits-all. We build to your space, your design, and your needs.",
  },
  {
    icon: IconClock,
    title: 'Dependable Process',
    description: 'From first enquiry to final installation, we aim to keep timelines and communication clear.',
  },
  {
    icon: IconChat,
    title: 'Straightforward Communication',
    description: "You deal directly with the workshop — clear answers about your project, without the runaround.",
  },
]

function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Dinesh Fabrications is an MS fabrication and welding workshop in Coimbatore, established in 2015 by Murali Krishnan B."
      />

      {/* ---------- Page header ---------- */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">About Dinesh Fabrications</span>
          <span className="page-header-accent" aria-hidden="true" />
          <h1>A Workshop Built on Craftsmanship</h1>
          <p className="page-header-subtext">
            Getting to know the workshop behind the gates, railings, and
            structures we fabricate.
          </p>
        </div>
      </section>

      {/* ---------- Introduction ---------- */}
      <section className="section">
        <div className="container about-intro">
          <Reveal className="about-intro-content">
            <span className="eyebrow">Our Story</span>
            <span className="section-heading-accent" aria-hidden="true" />
            <h2>Fabrication Work, Done Right</h2>
            <p>
              Dinesh Fabrications is an MS (mild steel) fabrication and
              welding workshop based in Coimbatore, started by{' '}
              {BUSINESS.founder} in {BUSINESS.establishedYear}. Over the
              years the workshop has taken on safety doors, customized doors,
              window and door grills, staircases and staircase handles,
              railings, sheds, and structural fabrication work — along with
              repairs and modifications on existing structures.
            </p>
            <p>
              We work with homeowners, builders and contractors, shops and
              businesses, and apartments across {BUSINESS.serviceArea}.
              Alongside the regular services, we also build custom pieces to
              order — tables, park chairs, dog rooms, outdoor cylinder
              holders, and other one-off fabrication requests.
            </p>
            <p>
              The workshop is run by a small, hands-on team — {BUSINESS.founder}
              , one regular workshop team member, and myself. For larger shed
              works or site-based projects, we bring in a few additional
              workers temporarily as the workload needs.
            </p>
          </Reveal>
          <Reveal className="about-intro-media">
            <ImageWithFallback
              src="/images/about/workshop-1.jpg"
              alt="Dinesh Fabrications workshop interior"
              label="Workshop Photo"
              className="about-intro-image"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- Mission ---------- */}
      <section className="section section-dark">
        <div className="container mission-block">
          <Reveal>
            <span className="eyebrow">Our Mission</span>
            <span className="section-heading-accent" aria-hidden="true" />
            <h2>Precision Fabrication, Built Around Your Needs</h2>
            <p>
              To deliver reliable, well-fitted MS fabrication work across{' '}
              {BUSINESS.serviceArea} — approaching each project with the
              technical care it deserves, and keeping communication with
              customers clear from enquiry to installation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="What We Value"
              title="Why Customers Choose Us"
              subtitle="A few principles that guide how we approach every fabrication project."
            />
          </Reveal>
          <div className="values-grid">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <div className="value-card">
                  <span className="value-card-icon">
                    <value.icon className="value-card-icon-svg" />
                  </span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Workshop gallery strip ---------- */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Inside the Workshop"
              title="Where the Work Happens"
              subtitle="A look at the workshop — full photos coming soon."
            />
          </Reveal>
          <div className="workshop-strip">
            {['workshop-2', 'workshop-3', 'workshop-4'].map((name) => (
              <div key={name} className="workshop-strip-image-wrap">
                <ImageWithFallback
                  src={`/images/about/${name}.jpg`}
                  alt="Dinesh Fabrications workshop"
                  label="Workshop Photo"
                  className="workshop-strip-image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section about-cta">
        <div className="container about-cta-inner">
          <Reveal>
            <h2>Want to Discuss a Project?</h2>
            <p>Get in touch and tell us what you're looking to fabricate.</p>
            <Link to="/request-quote" className="btn btn-primary btn-lg">
              Request a Quote <IconArrowRight className="section-cta-icon" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default About
