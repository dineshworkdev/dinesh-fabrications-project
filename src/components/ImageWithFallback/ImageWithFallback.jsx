import { useState } from 'react'
import { IconImageOff } from '../icons/Icons'
import './ImageWithFallback.css'

/**
 * ImageWithFallback
 * ------------------
 * Renders <img src={src}>. If it fails to load (404, network error, or —
 * as is the case for every placeholder path in this project right now —
 * because the file simply hasn't been added yet), it shows a clean styled
 * placeholder instead of a broken-image icon.
 *
 * Real photos fade in smoothly once loaded (a subtle "image reveal")
 * rather than popping in abruptly.
 *
 * To use real photos later: just drop image files into /public matching
 * the paths already referenced in src/data/*.js — no code changes needed.
 */
function ImageWithFallback({ src, alt, label, className = '' }) {
  const [hasError, setHasError] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)

  if (hasError || !src) {
    return (
      <div className={`image-fallback ${className}`} role="img" aria-label={alt}>
        <IconImageOff className="image-fallback-icon" />
        {label && <span className="image-fallback-label">{label}</span>}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className + (hasLoaded ? ' image-loaded' : ' image-loading')}
      loading="lazy"
      onError={() => setHasError(true)}
      onLoad={() => setHasLoaded(true)}
    />
  )
}

export default ImageWithFallback
