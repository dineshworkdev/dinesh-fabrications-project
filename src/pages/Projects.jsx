import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/SEO/Seo'
import Reveal from '../components/Reveal/Reveal'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import Lightbox from '../components/Lightbox/Lightbox'
import { IconArrowRight } from '../components/icons/Icons'
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects'
import './Projects.css'

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [previewProject, setPreviewProject] = useState(null)

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory)

  return (
    <>
      <Seo
        title="Projects & Gallery"
        description="Browse a gallery of fabrication projects by Dinesh Fabrications, including gates, railings, structural work, and sheds."
      />

      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Our Work</span>
          <span className="page-header-accent" aria-hidden="true" />
          <h1>Projects &amp; Gallery</h1>
          <p className="page-header-subtext">
            A showcase of fabrication work completed at the workshop. Filter
            by category to see specific types of projects.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-bar" role="group" aria-label="Filter projects by category">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={'chip' + (activeCategory === category ? ' chip-active' : '')}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="projects-full-grid" key={activeCategory}>
              {filteredProjects.map((project, i) => (
                <Reveal key={project.id} delay={(i % 3) * 80}>
                  <ProjectCard project={project} onPreview={setPreviewProject} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="projects-empty">No projects found in this category yet.</p>
          )}
        </div>
      </section>

      <Lightbox project={previewProject} onClose={() => setPreviewProject(null)} />

      <section className="section section-dark projects-cta">
        <div className="container projects-cta-inner">
          <Reveal>
            <h2>Like What You See?</h2>
            <p>Tell us about your project and we'll help bring it to life.</p>
            <Link to="/request-quote" className="btn btn-primary btn-lg">
              Request a Quote <IconArrowRight className="section-cta-icon" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Projects
