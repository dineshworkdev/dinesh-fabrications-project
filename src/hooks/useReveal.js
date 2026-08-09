import { useEffect, useRef, useState } from 'react'

/**
 * useReveal
 * ---------
 * Returns a ref to attach to an element and a boolean that flips to true
 * once the element scrolls into view. Used for subtle fade/slide-in
 * section reveals without pulling in an animation library.
 *
 * Respects prefers-reduced-motion by revealing immediately.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)
  // Respect prefers-reduced-motion by starting already-visible — determined
  // once during initial render, so no effect-driven setState is needed for it.
  const [isVisible, setIsVisible] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (isVisible) return

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [isVisible, options])

  return [ref, isVisible]
}
