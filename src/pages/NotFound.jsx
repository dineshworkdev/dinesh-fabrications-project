import { Link } from 'react-router-dom'
import Seo from '../components/SEO/Seo'
import { IconArrowRight } from '../components/icons/Icons'
import './NotFound.css'

function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="not-found">
        <div className="container not-found-inner">
          <span className="not-found-code">404</span>
          <h1>Page Not Found</h1>
          <p>
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
            <Link to="/request-quote" className="btn btn-secondary">
              Request a Quote <IconArrowRight className="section-cta-icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound
