import ImageWithFallback from '../ImageWithFallback/ImageWithFallback'
import './HeroImage.css'

/**
 * HeroImage
 * ---------
 * Displays the real grill-design reference photo as the hero visual,
 * framed like a premium showcase piece (matting, accent corner brackets,
 * soft glow) rather than a plain rectangular image — with an entrance
 * animation and a subtle hover interaction.
 */
function HeroImage() {
  return (
    <div className="hero-image-wrap">
      <div className="hero-image-glow" aria-hidden="true" />
      <div className="hero-image-frame">
        <span className="hero-image-bracket hero-image-bracket-tl" aria-hidden="true" />
        <span className="hero-image-bracket hero-image-bracket-br" aria-hidden="true" />
        <div className="hero-image-mat">
          <ImageWithFallback
            src="/images/hero/hero-grill.jpg"
            alt="Custom fabricated steel window grill with a geometric arched-square pattern"
            label="Grill Design"
            className="hero-image-photo"
          />
        </div>
        <span className="hero-image-caption">Custom Grill Design</span>
      </div>
    </div>
  )
}

export default HeroImage
