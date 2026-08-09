import { Link } from 'react-router-dom'
import ImageWithFallback from '../ImageWithFallback/ImageWithFallback'
import { IconArrowRight } from '../icons/Icons'
import {
  IconGate, IconGrill, IconStairs, IconBalcony, IconSteel,
  IconStructural, IconShed, IconCustom, IconWeld, IconRepair,
} from '../icons/Icons'
import './ServiceCard.css'

const ICON_MAP = {
  gate: IconGate,
  grill: IconGrill,
  stairs: IconStairs,
  balcony: IconBalcony,
  steel: IconSteel,
  structural: IconStructural,
  shed: IconShed,
  custom: IconCustom,
  weld: IconWeld,
  repair: IconRepair,
}

function ServiceCard({ service }) {
  const Icon = ICON_MAP[service.icon] || IconSteel

  return (
    <article className="service-card">
      <div className="service-card-media">
        <ImageWithFallback
          src={service.image}
          alt={service.title}
          label={service.title}
          className="service-card-image"
        />
        <span className="service-card-icon">
          <Icon className="service-card-icon-svg" />
        </span>
      </div>

      <div className="service-card-body">
        <h3>{service.title}</h3>
        <p>{service.shortDescription}</p>
        <Link to="/request-quote" className="service-card-link">
          Enquire Now <IconArrowRight className="service-card-link-icon" />
        </Link>
      </div>
    </article>
  )
}

export default ServiceCard
