/**
 * SERVICES DATA
 * =============
 * Add, remove, or edit services here — every place that renders services
 * (Home "Featured Services", Services page) reads from this single array.
 *
 * `image` paths point to /images/services/... which do not exist yet.
 * Drop real photos into public/images/services/ using these exact filenames
 * and they'll appear automatically; until then, a styled placeholder shows.
 */

export const SERVICES = [
  {
    id: 'gate-fabrication',
    icon: 'gate',
    title: 'Gate Fabrication',
    shortDescription:
      'Custom steel gates for homes, compounds, and industrial entrances — built to fit and built to last.',
    image: '/images/services/gate-fabrication.jpg',
    featured: true,
  },
  {
    id: 'window-door-grills',
    icon: 'grill',
    title: 'Window & Door Grills',
    shortDescription:
      'Security grills designed for protection without compromising the look of your home.',
    image: '/images/services/window-door-grills.jpg',
    featured: true,
  },
  {
    id: 'staircase-railings',
    icon: 'stairs',
    title: 'Staircase Railings',
    shortDescription:
      'Sturdy, precisely fitted staircase railings finished to match your interior style.',
    image: '/images/services/staircase-railings.jpg',
    featured: true,
  },
  {
    id: 'balcony-railings',
    icon: 'balcony',
    title: 'Balcony Railings',
    shortDescription:
      'Weather-resistant balcony railings that balance safety, durability, and appearance.',
    image: '/images/services/balcony-railings.jpg',
    featured: true,
  },
  {
    id: 'steel-fabrication',
    icon: 'steel',
    title: 'MS Fabrication',
    shortDescription:
      'Custom mild-steel (MS) fabrication work, built to your exact requirements.',
    image: '/images/services/steel-fabrication.jpg',
    featured: false,
  },
  {
    id: 'structural-fabrication',
    icon: 'structural',
    title: 'Structural Fabrication',
    shortDescription:
      'Structural steelwork for sheds, mezzanines, and load-bearing frameworks.',
    image: '/images/services/structural-fabrication.jpg',
    featured: false,
  },
  {
    id: 'sheds',
    icon: 'shed',
    title: 'Sheds',
    shortDescription:
      'Industrial and residential steel sheds built for durability and long-term use.',
    image: '/images/services/sheds.jpg',
    featured: false,
  },
  {
    id: 'custom-fabrication',
    icon: 'custom',
    title: 'Custom Fabrication',
    shortDescription:
      'From tables and park chairs to dog rooms and outdoor cylinder holders — if you can describe it, we can likely fabricate it.',
    image: '/images/services/custom-fabrication.jpg',
    featured: false,
  },
  {
    id: 'welding-works',
    icon: 'weld',
    title: 'Welding Works',
    shortDescription:
      'Professional welding services for structural, decorative, and repair applications.',
    image: '/images/services/welding-works.jpg',
    featured: false,
  },
  {
    id: 'repair-modification',
    icon: 'repair',
    title: 'Repair & Modification',
    shortDescription:
      'Repairs and modifications to existing gates, grills, railings, and steel structures.',
    image: '/images/services/repair-modification.jpg',
    featured: false,
  },
]

export function getFeaturedServices() {
  return SERVICES.filter((service) => service.featured)
}
