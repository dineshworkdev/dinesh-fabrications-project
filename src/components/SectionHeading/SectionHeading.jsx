import './SectionHeading.css'

/**
 * SectionHeading
 * --------------
 * Reused at the top of most page sections: small eyebrow label, a heading,
 * and optional supporting text. `center` centers the block (used on Home);
 * left-aligned by default.
 */
function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={'section-heading' + (center ? ' section-heading-center' : '')}>
      {eyebrow && (
        <>
          <span className="eyebrow">{eyebrow}</span>
          <span className="section-heading-accent" aria-hidden="true" />
        </>
      )}
      <h2>{title}</h2>
      {subtitle && <p className="section-heading-subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
