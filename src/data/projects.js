/**
 * PROJECTS DATA
 * =============
 * Powers the Projects/Gallery page and the Home "Featured Projects" section.
 *
 * `image` paths point to /images/projects/... which do not exist yet.
 * Drop real project photos into public/images/projects/ using these exact
 * filenames and they'll appear automatically; until then, a styled
 * placeholder shows in their place.
 */

export const PROJECT_CATEGORIES = [
  'All',
  'Gates',
  'Railings',
  'Structural',
  'Sheds',
  'Custom',
]

export const PROJECTS = [
  {
    id: 'project-1',
    title: 'Residential Compound Gate',
    category: 'Gates',
    description: 'A double-panel steel gate fabricated for a residential compound entrance.',
    image: '/images/projects/project-1.jpg',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Staircase Railing Installation',
    category: 'Railings',
    description: 'Interior staircase railing fabricated and fitted for a residential property.',
    image: '/images/projects/project-2.jpg',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Industrial Shed Framework',
    category: 'Sheds',
    description: 'Structural steel framework fabricated for an industrial shed.',
    image: '/images/projects/project-3.jpg',
    featured: true,
  },
  {
    id: 'project-4',
    title: 'Balcony Railing Work',
    category: 'Railings',
    description: 'Balcony railing fabrication finished for a multi-storey residential building.',
    image: '/images/projects/project-4.jpg',
    featured: false,
  },
  {
    id: 'project-5',
    title: 'Structural Steel Mezzanine',
    category: 'Structural',
    description: 'Mezzanine-level structural steelwork fabricated for additional floor space.',
    image: '/images/projects/project-5.jpg',
    featured: false,
  },
  {
    id: 'project-6',
    title: 'Custom Window Grill Design',
    category: 'Custom',
    description: 'A custom-designed window grill fabricated to a client-specified pattern.',
    image: '/images/projects/project-6.jpg',
    featured: false,
  },
  {
    id: 'project-7',
    title: 'Sliding Gate Fabrication',
    category: 'Gates',
    description: 'Heavy-duty sliding gate fabricated for a commercial property entrance.',
    image: '/images/projects/project-7.jpg',
    featured: false,
  },
  {
    id: 'project-8',
    title: 'Warehouse Shed Structure',
    category: 'Sheds',
    description: 'Complete steel shed structure fabricated for warehouse storage use.',
    image: '/images/projects/project-8.jpg',
    featured: false,
  },
  {
    id: 'project-9',
    title: 'Custom Staircase Design',
    category: 'Custom',
    description: 'A custom staircase and railing combination fabricated for a duplex home.',
    image: '/images/projects/project-9.jpg',
    featured: false,
  },
]

export function getFeaturedProjects() {
  return PROJECTS.filter((project) => project.featured)
}
