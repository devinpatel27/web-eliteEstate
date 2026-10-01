import { featuredAreas } from "@/data/areas";
import { AreaCard } from "@/components/areas/AreaCard";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Editorial, deliberately asymmetric placement.
const layout = [
  { wrap: "lg:col-span-7", img: "aspect-[4/5] lg:aspect-[6/7]", sizes: "(min-width: 1024px) 55vw, 100vw" },
  { wrap: "lg:col-span-4 lg:col-start-9 lg:mt-56", img: "aspect-[4/5]", sizes: "(min-width: 1024px) 30vw, 100vw" },
  { wrap: "lg:col-span-4 lg:col-start-2", img: "aspect-[4/5]", sizes: "(min-width: 1024px) 30vw, 100vw" },
  { wrap: "lg:col-span-6 lg:col-start-7 lg:mt-32", img: "aspect-[4/3]", sizes: "(min-width: 1024px) 45vw, 100vw" },
];

export function FeaturedAreas({ index = "05" }: { index?: string }) {
  return (
    <section className="bg-paper py-28 md:py-40">
      <div className="container-x">
        <SectionHeading
          index={index}
          eyebrow="Featured areas"
          title={"Four addresses\nworth knowing."}
          intro="A closer look at the neighbourhoods our clients ask about most — each with a distinct character, pace and outlook."
        />

        <div className="mt-20 grid gap-x-8 gap-y-20 sm:grid-cols-2 md:mt-28 lg:grid-cols-12 lg:gap-y-28">
          {featuredAreas.slice(0, 4).map((area, i) => (
            <Reveal key={area.slug} className={layout[i].wrap} delay={(i % 2) * 0.12}>
              <AreaCard area={area} index={i + 1} imageClassName={layout[i].img} sizes={layout[i].sizes} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 flex justify-center">
          <Button href="/areas" variant="outline">
            View all twelve areas
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
