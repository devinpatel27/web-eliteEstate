import { areas } from "@/data/areas";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { AreaCard } from "@/components/areas/AreaCard";
import { PageHero } from "@/components/sections/PageHero";
import { MapSection } from "@/components/sections/MapSection";
import { EnquiryCTA } from "@/components/sections/EnquiryCTA";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = buildMetadata({
  title: "Areas in Ahmedabad",
  description:
    "Explore the Ahmedabad neighbourhoods we specialise in: Bopal, South Bopal, Ambli, Shilaj, Thaltej, Bodakdev, Satellite, Prahlad Nagar, Sindhu Bhavan Road, Science City, SG Highway and Shela.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Areas"
        title={"Twelve neighbourhoods,\none city."}
        intro="From established addresses to emerging suburbs, these are the parts of west Ahmedabad we know best. Explore each one for its character, connectivity and the kind of buyer it suits."
        image={images.riverfrontNight}
      />

      <MapSection index="01" />

      <section className="bg-paper py-28 md:py-40">
        <div className="container-x">
          <SectionHeading
            index="02"
            eyebrow="Area guides"
            title={"Find the place\nthat fits your life."}
            intro="Each guide covers what defines the area, who it suits and what lies nearby — the context you need before looking at a single home."
          />
          <div className="mt-20 grid gap-x-8 gap-y-20 sm:grid-cols-2 md:mt-28 lg:grid-cols-3">
            {areas.map((area, i) => (
              <Reveal key={area.slug} delay={(i % 3) * 0.08} className={i % 3 === 1 ? "lg:mt-20" : ""}>
                <AreaCard area={area} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EnquiryCTA title={"Not sure which\narea suits you?"} />
    </>
  );
}
