// All photography lives here so it can be swapped for commissioned shoots in one place.
// Current images: Unsplash (free licence). Ahmedabad shots are of the Sabarmati Riverfront and Atal Bridge.
const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const images = {
  hero: {
    src: u("1722965569777-2aa84f7b9f60"),
    alt: "Ahmedabad skyline across the Sabarmati river at dusk",
  },
  riverfrontNight: {
    src: u("1638006524490-492fdf36ee04"),
    alt: "Sabarmati Riverfront promenade lit at night",
  },
  riverfrontWide: {
    src: u("1647434339325-e89da89b26e6"),
    alt: "Wide view of Ahmedabad and the Sabarmati river under a dramatic sky",
  },
  atalBridge: {
    src: u("1700170554599-50c74065ecdd"),
    alt: "Atal Bridge spanning the Sabarmati in Ahmedabad",
  },
  atalBridgeInterior: {
    src: u("1704730827544-ad473ecae95d"),
    alt: "Steel canopy structure of the Atal pedestrian bridge",
  },
  heritage: {
    src: u("1712988377585-f337a71014c5"),
    alt: "Historic stone monument in Ahmedabad, in black and white",
  },
  cityTowers: {
    src: u("1652503591857-0dbb07631692"),
    alt: "Contemporary glass towers along a boulevard in Ahmedabad",
  },
  moonRiver: {
    src: u("1721551064750-4240334bdc5f"),
    alt: "Full moon over the Sabarmati riverfront at night",
  },
  facadeDark: {
    src: u("1486406146926-c627a92ad1ab"),
    alt: "Looking up at dark glass towers",
  },
  interiorLiving: {
    src: u("1600210492486-724fe5c67fb0"),
    alt: "Sunlit living room with considered furniture",
  },
  interiorLounge: {
    src: u("1618221195710-dd6b41faaea6"),
    alt: "Warm, minimal lounge interior",
  },
  interiorOpen: {
    src: u("1600607687939-ce8a6c25118c"),
    alt: "Open-plan living space with timber wall and garden view",
  },
  interiorGlass: {
    src: u("1600573472550-8090b5e0745e"),
    alt: "Double-height interior with glass walls and floating staircase",
  },
  archWhite: {
    src: u("1524230572899-a752b3835840"),
    alt: "Receding white arches",
  },
  villaTrees: {
    src: u("1600585154340-be6161a56a0c"),
    alt: "Modern home among mature trees at dusk",
  },
} as const;

export const areaImage = {
  bopal: u("1600047509807-ba8f99d2cdde"),
  "south-bopal": u("1515263487990-61b07816b324"),
  ambli: u("1613490493576-7fde63acd811"),
  shilaj: u("1600585154340-be6161a56a0c"),
  thaltej: u("1545324418-cc1a3fa10c00"),
  bodakdev: u("1600596542815-ffad4c1539a9"),
  satellite: u("1479839672679-a46483c0e7c8"),
  "prahlad-nagar": u("1672844780194-b2615b073374"),
  "sindhu-bhavan-road": u("1580587771525-78b9dba3b914"),
  "science-city": u("1487958449943-2429e8be8625"),
  "sg-highway": u("1652503591857-0dbb07631692"),
  shela: u("1600563438938-a9a27216b4f5"),
} as const;
