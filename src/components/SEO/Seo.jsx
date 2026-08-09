import { useEffect } from 'react'

const SITE_NAME = 'Dinesh Fabrications'

function setMetaTag(name, content, attr = 'name') {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Seo
 * ---
 * Sets the document title and meta description/Open Graph tags for the
 * current page. No react-helmet dependency needed — this project only
 * needs simple per-page title/description swaps, so a small effect is
 * enough and keeps the dependency list untouched.
 */
function Seo({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    document.title = fullTitle

    if (description) {
      setMetaTag('description', description)
      setMetaTag('og:title', fullTitle, 'property')
      setMetaTag('og:description', description, 'property')
      setMetaTag('og:type', 'website', 'property')
    }
  }, [title, description])

  return null
}

export default Seo
