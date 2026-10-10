// Single source of truth for brand + contact details.
const advisors = [
  {
    name: "Dharmendrasinh Sisodiya",
    phone: "+91 96876 89000",
    tel: "tel:+919687689000",
    whatsapp: "https://wa.me/919687689000",
  },
  {
    name: "Brijrajsinh Padheriya",
    phone: "+91 96876 79001",
    tel: "tel:+919687679001",
    whatsapp: "https://wa.me/919687679001",
  },
] as const;

const address = {
  line1: "704, Shaligram Arcade",
  line2: "Nr. Ambali T Junction, SP Ring Road",
  locality: "South Bopal",
  city: "Ahmedabad",
  region: "Gujarat",
  postalCode: "380058",
  country: "IN",
} as const;

export const site = {
  name: "Elite Estate",
  legalName: "Elite Estate",
  tagline: "Trust • Quality • Excellence",
  description:
    "Elite Estate is an Ahmedabad real estate advisory helping families and investors buy, sell and lease homes across Bopal, Ambli, Thaltej, Bodakdev, Satellite, Shela and SG Highway.",
  // TODO: set NEXT_PUBLIC_SITE_URL to the live domain before launch.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eliteestate.in",
  locale: "en_IN",
  contact: {
    advisors,
    /** Primary line used wherever a single number is shown. */
    primary: advisors[0],
    address,
    addressText: `${address.line1}, ${address.line2}, ${address.locality}, ${address.city} - ${address.postalCode}`,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${address.line1}, ${address.line2}, ${address.locality}, ${address.city} ${address.postalCode}`,
    )}`,
    // Approximate pin near Ambli T Junction on SP Ring Road – refine to the exact building if needed.
    geo: { lat: 23.0225, lng: 72.4745 },
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/eliite__estate" },
    { label: "Facebook", href: "https://www.facebook.com/share/1C6dv1b41g/?mibextid=wwXIfr" },
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/areas", label: "Areas" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
