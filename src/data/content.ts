import { images } from "./images";

export const values = [
  {
    word: "Trust",
    line: "Advice before transactions.",
    text: "We tell you what we would tell our own family — including when to wait, negotiate harder or walk away. Every recommendation is documented and explained.",
  },
  {
    word: "Quality",
    line: "Fewer, better options.",
    text: "Instead of a long list, you receive a considered shortlist — homes and locations we have verified for title, construction and neighbourhood fit.",
  },
  {
    word: "Excellence",
    line: "Detail, to the last signature.",
    text: "From the first conversation to registration and handover, one dedicated advisor manages the process with precision and discretion.",
  },
] as const;

export const services = [
  {
    slug: "buy",
    title: "Buying",
    summary: "Area-led search, verified shortlists and assisted negotiation for homes across west Ahmedabad.",
    detail:
      "We start with how you want to live — commute, schools, space, budget — then match that to the right neighbourhoods before looking at a single home. Shortlists are verified for title, approvals and builder track record.",
    points: ["Needs & area consultation", "Verified shortlists", "Negotiation support", "Registration assistance"],
    image: images.interiorOpen,
  },
  {
    slug: "sell",
    title: "Selling",
    summary: "Accurate pricing, discreet marketing and qualified buyers — without the noise.",
    detail:
      "We price from real comparables, prepare your home to present well and market it to a qualified audience. Viewings are accompanied, and every offer comes with our honest assessment.",
    points: ["Comparable-based pricing", "Presentation guidance", "Qualified buyer network", "Offer management"],
    image: images.interiorLiving,
  },
  {
    slug: "lease",
    title: "Leasing",
    summary: "Residential and commercial leasing with vetted tenants and clear agreements.",
    detail:
      "For owners, we find and vet tenants and handle documentation. For tenants — including corporate relocations — we shortlist homes and offices that fit the brief and negotiate fair terms.",
    points: ["Tenant screening", "Rental benchmarking", "Agreement drafting support", "Corporate relocations"],
    image: images.interiorLounge,
  },
  {
    slug: "advisory",
    title: "Investment Advisory",
    summary: "Location and asset guidance for long-term value, grounded in local market knowledge.",
    detail:
      "We help investors understand where Ahmedabad is growing, which formats hold value and how to balance yield with appreciation — always with transparent reasoning, never pressure.",
    points: ["Micro-market analysis", "Residential & commercial", "Portfolio planning", "Exit guidance"],
    image: images.cityTowers,
  },
  {
    slug: "nri",
    title: "NRI Services",
    summary: "A single trusted point of contact for buying, selling or managing property from abroad.",
    detail:
      "Video walkthroughs, documentation coordination and on-ground representation — so NRI clients can make confident decisions without travelling for every step.",
    points: ["Virtual viewings", "Documentation coordination", "Power of attorney guidance", "Post-purchase support"],
    image: images.riverfrontNight,
  },
  {
    slug: "legal",
    title: "Legal & Documentation",
    summary: "Coordinated title checks, agreements and registration with trusted legal partners.",
    detail:
      "We work alongside experienced advocates and chartered accountants to coordinate due diligence, sale agreements, loan paperwork and registration — so nothing is left to chance.",
    points: ["Title due diligence", "Agreement review", "Home loan coordination", "Registration support"],
    image: images.archWhite,
  },
] as const;

export const reasons = [
  {
    title: "Area-first advice",
    text: "We know these neighbourhoods street by street — so we recommend where to live before what to buy.",
  },
  {
    title: "One dedicated advisor",
    text: "A single senior point of contact from first meeting to handover. No hand-offs, no call centres.",
  },
  {
    title: "Verified, never inflated",
    text: "Every option is checked for title and approvals. Pricing guidance is based on real comparables.",
  },
  {
    title: "Discretion as standard",
    text: "Your requirements, finances and decisions are handled privately and with care.",
  },
] as const;

export const process = [
  { title: "Consultation", text: "A conversation about how you live, work and plan ahead — and what the right home means to you." },
  { title: "Area shortlist", text: "We recommend the neighbourhoods that genuinely fit, with a candid view of each." },
  { title: "Curated viewings", text: "Accompanied visits to a small number of verified homes that meet your brief." },
  { title: "Negotiation", text: "Pricing guidance from real comparables and negotiation on your behalf." },
  { title: "Handover", text: "Documentation, registration and handover coordinated to the final detail." },
] as const;

// Sample testimonials — TODO(client): replace with real, approved client words.
export const testimonials = [
  {
    quote:
      "They talked us out of the first home we loved — and they were right. Six months later we found the one in Ambli, and it has been perfect for our family.",
    name: "R. & M. Shah",
    context: "Bought a villa in Ambli",
  },
  {
    quote:
      "Buying from London felt impossible until Elite Estate. Every document, every visit, every question was handled with complete transparency.",
    name: "A. Patel",
    context: "NRI client, apartment in Thaltej",
  },
  {
    quote:
      "Our office move to Prahlad Nagar was quick and entirely stress-free. They understood exactly what our team needed.",
    name: "K. Mehta",
    context: "Commercial lease, Prahlad Nagar",
  },
  {
    quote:
      "Honest pricing advice from day one. Our home in Bodakdev sold at the right value, to the right buyer, without endless viewings.",
    name: "S. Desai",
    context: "Sold a residence in Bodakdev",
  },
] as const;

// TODO(client): confirm these figures before launch.
export const stats = [
  { value: "12", label: "Neighbourhoods\nwe specialise in" },
  { value: "1", label: "Dedicated advisor\nper client" },
  { value: "100%", label: "Verified\nshortlists" },
] as const;
