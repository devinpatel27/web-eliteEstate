import { areaImage } from "./images";

export type Area = {
  slug: keyof typeof areaImage;
  name: string;
  /** Short positioning line used on cards. */
  summary: string;
  /** One-word character used as an index label. */
  character: string;
  lat: number;
  lng: number;
  image: string;
  featured?: boolean;
  overview: string[];
  highlights: { title: string; text: string }[];
  suitedTo: string[];
  nearby: string[];
};

export const areas: Area[] = [
  {
    slug: "sindhu-bhavan-road",
    name: "Sindhu Bhavan Road",
    character: "Signature",
    summary:
      "The city's most sought-after boulevard — contemporary high-rises, fine dining and a polished, walkable address.",
    lat: 23.0445,
    lng: 72.499,
    image: areaImage["sindhu-bhavan-road"],
    featured: true,
    overview: [
      "Sindhu Bhavan Road has become shorthand for contemporary luxury in Ahmedabad. The wide, tree-lined road links Bodakdev and Thaltej with the Ambli side of the city, and is lined with some of the city's most design-led residential towers, flagship restaurants and cafés.",
      "Buyers here tend to prioritise address, amenity and the ease of a lock-and-leave apartment — with SG Highway, the business district and the western suburbs all within a short drive.",
    ],
    highlights: [
      { title: "Address value", text: "A consistently in-demand location with strong long-term appeal." },
      { title: "Lifestyle", text: "Dining, cafés and retail along the boulevard itself." },
      { title: "Connectivity", text: "Quick access to SG Highway, Thaltej and Bodakdev." },
    ],
    suitedTo: ["Luxury apartments", "End-use families", "Long-term holding"],
    nearby: ["Bodakdev", "Thaltej", "Ambli", "Shilaj"],
  },
  {
    slug: "ambli",
    name: "Ambli",
    character: "Refined",
    summary:
      "Quiet, green and upscale — villas and low-density towers along Ambli–Bopal Road, minutes from the city's west end.",
    lat: 23.0275,
    lng: 72.4918,
    image: areaImage.ambli,
    featured: true,
    overview: [
      "Ambli sits between the established west of Ahmedabad and the newer suburbs of Bopal, giving residents a calmer, greener setting without losing proximity to SG Highway and Sindhu Bhavan Road.",
      "The area is known for independent villas, premium gated communities and spacious apartment formats — a natural choice for families upgrading to more space.",
    ],
    highlights: [
      { title: "Low density", text: "Villas and gated communities with generous layouts." },
      { title: "Schools", text: "Several well-regarded schools in and around the area." },
      { title: "Position", text: "Between SG Highway and Bopal on Ambli–Bopal Road." },
    ],
    suitedTo: ["Villas & bungalows", "Growing families", "Upgrade buyers"],
    nearby: ["Bopal", "Sindhu Bhavan Road", "Bodakdev", "South Bopal"],
  },
  {
    slug: "bodakdev",
    name: "Bodakdev",
    character: "Established",
    summary:
      "A mature, central-west neighbourhood with premium residences, Judges Bungalow Road and effortless access to everything.",
    lat: 23.0385,
    lng: 72.513,
    image: areaImage.bodakdev,
    featured: true,
    overview: [
      "Bodakdev is one of Ahmedabad's most established premium neighbourhoods. Judges Bungalow Road, Vastrapur Lake and the city's best-known retail and dining are all within easy reach.",
      "Its mix of well-maintained older bungalows and newer high-rise residences makes it attractive to both end-users and those looking for dependable, long-term value.",
    ],
    highlights: [
      { title: "Maturity", text: "Settled infrastructure, services and social life." },
      { title: "Centrality", text: "Close to SG Highway, Vastrapur and Satellite." },
      { title: "Variety", text: "Bungalows, premium apartments and commercial space." },
    ],
    suitedTo: ["Premium apartments", "Bungalows", "Commercial offices"],
    nearby: ["Thaltej", "Satellite", "Sindhu Bhavan Road", "SG Highway"],
  },
  {
    slug: "shela",
    name: "Shela",
    character: "Emerging",
    summary:
      "A fast-evolving suburb of planned townships and larger formats — space and value on the city's south-western edge.",
    lat: 23.001,
    lng: 72.452,
    image: areaImage.shela,
    featured: true,
    overview: [
      "Shela extends beyond South Bopal on the south-western edge of Ahmedabad. Over recent years it has seen a wave of planned townships and gated communities offering larger homes and extensive amenities.",
      "For buyers willing to be a little further out, Shela offers more space per rupee and the potential that comes with a still-maturing neighbourhood.",
    ],
    highlights: [
      { title: "Townships", text: "Planned communities with clubhouses and open space." },
      { title: "Scale", text: "Larger apartment and villa formats." },
      { title: "Growth", text: "An area still evolving, with infrastructure catching up." },
    ],
    suitedTo: ["First homes", "Larger formats", "Growth-minded investors"],
    nearby: ["South Bopal", "Bopal", "Ambli"],
  },
  {
    slug: "thaltej",
    name: "Thaltej",
    character: "Connected",
    summary:
      "Well-connected and premium, anchored by Thaltej Cross Roads, the metro and quick links along SG Highway.",
    lat: 23.05,
    lng: 72.51,
    image: areaImage.thaltej,
    overview: [
      "Thaltej combines premium residential pockets with excellent connectivity. It sits at a key junction of SG Highway and is served by the Ahmedabad Metro's east–west line.",
      "Its proximity to Sindhu Bhavan Road, Shilaj and the city's business corridors makes it popular with professionals and families alike.",
    ],
    highlights: [
      { title: "Metro", text: "Served by the east–west Ahmedabad Metro line." },
      { title: "Junction", text: "Direct access onto SG Highway." },
      { title: "Neighbours", text: "Borders Shilaj, Bodakdev and Sindhu Bhavan Road." },
    ],
    suitedTo: ["Apartments", "Working professionals", "Commercial"],
    nearby: ["Shilaj", "Bodakdev", "Sindhu Bhavan Road", "Science City"],
  },
  {
    slug: "shilaj",
    name: "Shilaj",
    character: "Serene",
    summary:
      "A calmer, greener pocket beyond Thaltej — bungalows, plotted developments and room to breathe.",
    lat: 23.0616,
    lng: 72.4787,
    image: areaImage.shilaj,
    overview: [
      "Shilaj lies just west of Thaltej, close to the Sardar Patel Ring Road. It has a quieter, more open character, with bungalow schemes, plotted developments and newer premium apartments.",
      "Buyers who want the connectivity of the western corridor with a more residential, low-rise feel often find Shilaj a good fit.",
    ],
    highlights: [
      { title: "Openness", text: "Lower density and more green cover." },
      { title: "Formats", text: "Bungalows, plots and boutique apartment projects." },
      { title: "Access", text: "Near Thaltej and the SP Ring Road." },
    ],
    suitedTo: ["Bungalows", "Plots", "Families seeking space"],
    nearby: ["Thaltej", "Sindhu Bhavan Road", "Science City", "Bopal"],
  },
  {
    slug: "satellite",
    name: "Satellite",
    character: "Heritage",
    summary:
      "One of the west's original premium neighbourhoods — settled, central and rich in everyday convenience.",
    lat: 23.029,
    lng: 72.52,
    image: areaImage.satellite,
    overview: [
      "Satellite takes its name from the space research establishment nearby and was among the first areas of west Ahmedabad to develop as a premium residential district.",
      "Today it offers a settled neighbourhood feel, established markets and schools, and a central position between Bodakdev, Prahlad Nagar and the older city.",
    ],
    highlights: [
      { title: "Convenience", text: "Mature retail, healthcare and schools." },
      { title: "Central", text: "Between Bodakdev, Jodhpur and Prahlad Nagar." },
      { title: "Stability", text: "A long-established, well-understood market." },
    ],
    suitedTo: ["Resale homes", "End-use families", "Retail & offices"],
    nearby: ["Bodakdev", "Prahlad Nagar", "SG Highway"],
  },
  {
    slug: "prahlad-nagar",
    name: "Prahlad Nagar",
    character: "Planned",
    summary:
      "A planned business-and-residential district with Corporate Road, landscaped gardens and a strong office market.",
    lat: 23.0118,
    lng: 72.508,
    image: areaImage["prahlad-nagar"],
    overview: [
      "Prahlad Nagar was developed with a planned grid, and today combines Corporate Road's office buildings with residential towers and one of the area's best-loved public gardens.",
      "It is well suited to buyers and businesses who want to live and work close together, with SG Highway immediately to the west.",
    ],
    highlights: [
      { title: "Corporate Road", text: "A dense cluster of offices and business centres." },
      { title: "Planning", text: "Orderly roads and a landscaped public garden." },
      { title: "Mixed use", text: "Residential and commercial side by side." },
    ],
    suitedTo: ["Office space", "Apartments", "Leasing"],
    nearby: ["Satellite", "SG Highway", "Ambli"],
  },
  {
    slug: "sg-highway",
    name: "SG Highway",
    character: "Corridor",
    summary:
      "Ahmedabad's commercial spine, linking the city to Gandhinagar — offices, retail and high-rise living.",
    lat: 23.07,
    lng: 72.523,
    image: areaImage["sg-highway"],
    overview: [
      "The Sarkhej–Gandhinagar Highway runs north–south along the western edge of the city and has become its primary business corridor, lined with corporate offices, hotels, hospitals and retail.",
      "Residences along and just off the highway appeal to those who value connectivity — to Gandhinagar and GIFT City to the north, and to the western suburbs on either side.",
    ],
    highlights: [
      { title: "Business", text: "The city's main corridor for offices and commerce." },
      { title: "Links", text: "Direct route towards Gandhinagar and GIFT City." },
      { title: "Amenity", text: "Hotels, hospitals, malls and dining along its length." },
    ],
    suitedTo: ["Commercial offices", "Investors", "High-rise apartments"],
    nearby: ["Thaltej", "Bodakdev", "Science City", "Prahlad Nagar"],
  },
  {
    slug: "science-city",
    name: "Science City",
    character: "Rising",
    summary:
      "A growing north-west neighbourhood around Gujarat Science City, with new residential towers and wide roads.",
    lat: 23.079,
    lng: 72.494,
    image: areaImage["science-city"],
    overview: [
      "The area around Science City Road has grown rapidly, drawing new residential projects that benefit from wide roads and proximity to SG Highway and Sola.",
      "It offers contemporary homes in a neighbourhood that is still taking shape — a considered option for buyers looking north-west.",
    ],
    highlights: [
      { title: "New stock", text: "Recent residential projects with modern amenities." },
      { title: "Landmark", text: "Home to Gujarat Science City." },
      { title: "Access", text: "Close to SG Highway and Sola." },
    ],
    suitedTo: ["New apartments", "Young families", "Investors"],
    nearby: ["Thaltej", "Shilaj", "SG Highway"],
  },
  {
    slug: "bopal",
    name: "Bopal",
    character: "Community",
    summary:
      "A self-contained western suburb with a strong community feel, its own markets and a wide choice of homes.",
    lat: 23.0335,
    lng: 72.4636,
    image: areaImage.bopal,
    overview: [
      "Once a village on the city's edge, Bopal has matured into a complete suburb with its own markets, schools, hospitals and social life.",
      "It offers a wide range of homes — from apartments to row houses and bungalows — and is well linked to Ambli, SG Highway and the SP Ring Road.",
    ],
    highlights: [
      { title: "Self-contained", text: "Daily needs met within the neighbourhood." },
      { title: "Choice", text: "Apartments, row houses and bungalows." },
      { title: "Links", text: "Ambli–Bopal Road and the SP Ring Road." },
    ],
    suitedTo: ["Apartments", "Row houses", "Families"],
    nearby: ["South Bopal", "Ambli", "Shela", "Shilaj"],
  },
  {
    slug: "south-bopal",
    name: "South Bopal",
    character: "Residential",
    summary:
      "Gated communities and well-planned streets — a family-oriented extension of Bopal towards Shela.",
    lat: 23.0172,
    lng: 72.4685,
    image: areaImage["south-bopal"],
    overview: [
      "South Bopal developed as a residential extension of Bopal, with a concentration of gated societies, landscaped communities and everyday retail.",
      "It is popular with families looking for a settled, community-focused setting with easy access to both Bopal and the newer developments of Shela.",
    ],
    highlights: [
      { title: "Gated living", text: "Many well-run residential societies." },
      { title: "Family focus", text: "Schools, parks and daily retail nearby." },
      { title: "Between", text: "Links Bopal with Shela and Ambli." },
    ],
    suitedTo: ["Family apartments", "Row houses", "Rentals"],
    nearby: ["Bopal", "Shela", "Ambli"],
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
export const featuredAreas = areas.filter((a) => a.featured);
