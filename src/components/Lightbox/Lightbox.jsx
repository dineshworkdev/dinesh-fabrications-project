import { useEffect, useRef } from 'react'
import ImageWithFallback from '../ImageWithFallback/ImageWithFallback'
import { IconClose } from '../icons/Icons'
import './Lightbox.css'

/**
 * Lightbox
 * --------
 * A simple, dependency-free modal preview for a project image. No library
 * needed — just a fixed overlay, focus handling, and Escape/backdrop close.
 */
function Lightbox({ project, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!project) return

    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} preview`}
    >
      <div className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          ref={closeButtonRef}
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close preview"
        >
          <IconClose className="lightbox-close-icon" />
        </button>

        <div className="lightbox-media">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            label={project.title}
            className="lightbox-image"
          />
        </div>

        <div className="lightbox-body">
          <span className="lightbox-category">{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Lightbox
