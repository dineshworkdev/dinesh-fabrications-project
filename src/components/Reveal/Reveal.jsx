import { useReveal } from '../../hooks/useReveal'

/**
 * Reveal
 * ------
 * Wraps content and fades/slides it in once scrolled into view.
 * Usage: <Reveal><section>...</section></Reveal>
 * Optional `delay` (ms) staggers multiple items in a grid.
 */
function Reveal({ children, delay = 0, className = '' }) {
  const [ref, isVisible] = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}

export default Reveal
