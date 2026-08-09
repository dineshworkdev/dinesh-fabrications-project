/**
 * BUSINESS DATA
 * =============
 * Single source of truth for contact details — every component reads from
 * here, so updating a value here updates it everywhere on the site.
 */

export const BUSINESS = {
  name: 'Dinesh Fabrications',
  tagline: 'Custom Steel & Fabrication Work',

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

  // PLACEHOLDER — replace with real operating hours
  hours: [
    { days: 'Monday – Saturday', time: '9:00 AM – 7:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],

  // PLACEHOLDER — paste a real Google Maps embed URL for the workshop location
  // (Google Maps → Share → Embed a map → copy the src URL)
  mapEmbedUrl: '',
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
