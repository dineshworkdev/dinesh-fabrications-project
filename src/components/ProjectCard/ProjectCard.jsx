import ImageWithFallback from '../ImageWithFallback/ImageWithFallback'
import './ProjectCard.css'

/**
 * ProjectCard
 * -----------
 * Displays a project preview. If `onPreview` is provided, the whole card
 * becomes an interactive trigger (button semantics) that opens the
 * Lightbox with a larger view — otherwise it renders as a static card.
 */
function ProjectCard({ project, onPreview }) {
  const isInteractive = typeof onPreview === 'function'

  function handleKeyDown(event) {
    if (!isInteractive) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onPreview(project)
    }
  }

  return (
    <article
      className={'project-card' + (isInteractive ? ' project-card-interactive' : '')}
      onClick={isInteractive ? () => onPreview(project) : undefined}
      onKeyDown={handleKeyDown}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={isInteractive ? `Preview ${project.title}` : undefined}
    >
      <div className="project-card-media">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          label={project.title}
          className="project-card-image"
        />
        <span className="project-card-category">{project.category}</span>
        {isInteractive && (
          <span className="project-card-overlay">
            <span className="project-card-overlay-text">View Project</span>
          </span>
        )}
      </div>
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  )
}

export default ProjectCard
