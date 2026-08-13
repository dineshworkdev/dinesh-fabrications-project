/**
 * BUSINESS DATA
 * =============
 * Single source of truth for contact details — every component reads from
 * here, so updating a value here updates it everywhere on the site.
 */

export const BUSINESS = {
  name: 'Dinesh Fabrications',
  tagline: 'MS Fabrication & Welding Works',
  establishedYear: 2015,
  founder: 'Murali Krishnan B',
  serviceArea: 'Coimbatore and nearby areas',

  phone: '+91 90926 79038',
  whatsapp: '+91 86109 51813',
  email: 'dineshfabricationcbe@gmail.com',

  address: {
    line1: '280/1BF, Krishna Nagar',
    line2: 'Pattanam Main Road, Nadupalayam, Peedampalli',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    pincode: '641016',
  },

  hours: [{ days: 'Every day', time: '9:00 AM – 8:30 PM' }],

  // Google Maps embed for Dinesh Fabrications CBE — verified Google Business
  // listing (not just an address lookup), grabbed via Google Maps → Share →
  // Embed a map. No API key required for this embed format.
  // Listing: https://maps.app.goo.gl/kSCka4jxbzVSVLFz5
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.7829708605286!2d77.07000277504484!3d10.979747589181585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857fb1ed6fa6b%3A0x2418574dac9a6f0a!2sDinesh%20fabrications%20cbe!5e0!3m2!1sen!2sin!4v1786514813894!5m2!1sen!2sin',
}

/** Digits-only phone number, used to build tel:/wa.me links. */
function digitsOnly(value) {
  return value.replace(/[^\d]/g, '')
}

/** Returns a tel: link for the business phone number. */
export function getPhoneLink() {
  return `tel:+${digitsOnly(BUSINESS.phone)}`
}

/** Returns a wa.me link, optionally pre-filled with a message. */
export function getWhatsAppLink(message = '') {
  const base = `https://wa.me/${digitsOnly(BUSINESS.whatsapp)}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** Returns a mailto: link for the business email. */
export function getEmailLink() {
  return `mailto:${BUSINESS.email}`
}

/** Full postal address as a single formatted string. */
export function getFullAddress() {
  const { line1, line2, city, state, pincode } = BUSINESS.address
  return `${line1}, ${line2}, ${city}, ${state} - ${pincode}`
}
