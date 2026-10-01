// Single source of truth for brand + contact details.
// TODO(client): replace every value marked PLACEHOLDER with the real details.
export const site = {
  name: "Elite Estate",
  legalName: "Elite Estate",
  tagline: "Trust • Quality • Excellence",
  description:
    "Elite Estate is an Ahmedabad real estate advisory helping families and investors buy, sell and lease homes across Bopal, Ambli, Thaltej, Bodakdev, Satellite, Shela and SG Highway.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eliteestate.in", // PLACEHOLDER domain
  locale: "en_IN",
  contact: {
    phone: "+91 00000 00000", // PLACEHOLDER
    phoneHref: "tel:+910000000000", // PLACEHOLDER
    whatsapp: "https://wa.me/910000000000", // PLACEHOLDER
    email: "hello@eliteestate.in", // PLACEHOLDER
    address: {
      line1: "Office address line", // PLACEHOLDER
      line2: "Sindhu Bhavan Road, Bodakdev", // PLACEHOLDER
      city: "Ahmedabad",
      region: "Gujarat",
      postalCode: "380054", // PLACEHOLDER
      country: "IN",
    },
    // Office pin for the contact page map. PLACEHOLDER – update to the exact office location.
    geo: { lat: 23.0419, lng: 72.5006 },
    hours: "Mon – Sat, 10:00 – 19:00",
  },
  social: {
    instagram: "https://instagram.com/", // PLACEHOLDER
    linkedin: "https://linkedin.com/", // PLACEHOLDER
    facebook: "https://facebook.com/", // PLACEHOLDER
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/areas", label: "Areas" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
