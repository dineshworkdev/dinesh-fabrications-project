import { Link } from 'react-router-dom'
import Seo from '../components/SEO/Seo'
import Reveal from '../components/Reveal/Reveal'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import ImageWithFallback from '../components/ImageWithFallback/ImageWithFallback'
import { IconShieldCheck, IconCustom, IconClock, IconChat, IconArrowRight } from '../components/icons/Icons'
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
        description="Learn about Dinesh Fabrications — a fabrication and welding workshop focused on custom, quality steelwork."
      />

      {/* ---------- Page header ---------- */}
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">About Dinesh Fabrications</span>
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
            <h2>Fabrication Work, Done Right</h2>
            <p>
              Dinesh Fabrications is a fabrication and welding workshop taking
              on custom steelwork — gates, window and door grills, staircase
              and balcony railings, sheds, and structural fabrication — for
              homeowners, businesses, and contractors.
            </p>
            <p>
              Every enquiry is treated as its own project: understanding what's
              needed, discussing materials and design, and fabricating work
              that's built to fit and built to last.
            </p>
            <p className="about-placeholder-note">
              Dinesh Fabrications is a local fabrication and welding workshop based in Coimbatore, specializing in custom steel fabrication, gates, grills, railings, sheds, and other metalwork. We focus on understanding each customer's requirements and delivering practical, well-finished fabrication work built to suit their needs.
            </p>
          </Reveal>
          <Reveal className="about-intro-media">
            <ImageWithFallback
              src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmO4-biiF6auNp2JuXOTNgX6by6n6bgC6SXIWnyiU8dQR-Z4T8HsYD8zuYjgoyNcTm1KfbTh7pXJpcPPAiEzmkKmnhCeJI8o3fFackFcqiQZg3B0yp1YTG7ZAmZV7UjWewMCgAjXw=s1360-w1360-h1020-rw"
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
            <h2>Precision Fabrication, Built Around Your Needs</h2>
            <p>
              To deliver reliable, well-fitted fabrication work — approaching
              each project with the technical care it deserves, and keeping
              communication with customers clear from enquiry to installation.
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
