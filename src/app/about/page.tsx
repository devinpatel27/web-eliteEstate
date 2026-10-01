import Image from "next/image";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Values } from "@/components/sections/Values";
import { EnquiryCTA } from "@/components/sections/EnquiryCTA";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { TextReveal } from "@/components/motion/TextReveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Elite Estate is an independent Ahmedabad real estate advisory built on trust, quality and excellence. Meet the approach behind our advice.",
  path: "/about",
});

const approach = [
  {
    title: "We listen first",
    text: "Every engagement starts with a conversation about your life, not a list of properties — family, work, schools, the way you like to spend a Sunday.",
  },
  {
    title: "Places before properties",
    text: "We recommend the right neighbourhood before the right home. A beautiful apartment in the wrong area is still the wrong decision.",
  },
  {
    title: "Verified before shown",
    text: "Title, approvals, builder track record and pricing are checked before anything reaches your shortlist.",
  },
  {
    title: "Present after the sale",
    text: "Registration, handover, interiors referrals, leasing later on — we remain your point of contact long after the paperwork.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={"Advice with\nroots in the city."}
        intro="Elite Estate is an independent real estate advisory in Ahmedabad. We help families, professionals and investors make property decisions with clarity and confidence."
        image={images.heritage}
      />

      {/* Story */}
      <section className="bg-bone py-28 md:py-40">
        <div className="container-x">
          <SectionHeading index="01" eyebrow="Our story" title={"Rooted in Ahmedabad.\nFocused on what matters."} />
          <div className="mt-16 grid gap-14 md:mt-24 lg:grid-cols-12 lg:gap-8">
            <div className="space-y-8 lg:col-span-6">
              <Reveal>
                <p className="font-serif text-[1.65rem] font-light leading-[1.3] sm:text-[2rem]">
                  Ahmedabad has changed remarkably. New corridors, new neighbourhoods and new ways of living
                  have made choosing where to live both more exciting and more complex.
                </p>
              </Reveal>
              <Reveal delay={0.1} className="space-y-5 text-[0.95rem] leading-relaxed text-slate">
                <p>
                  Elite Estate was founded to bring clarity to that decision. Rather than covering the whole
                  city thinly, we concentrate on twelve neighbourhoods in the west &mdash; from the settled streets
                  of Satellite and Bodakdev to the emerging townships of Shela &mdash; and invest the time to know
                  them properly.
                </p>
                <p>
                  Our key-and-feather crest reflects that idea: the key for access and trust, the peacock
                  feather for grace and a distinctly Indian sense of beauty. Together they describe the
                  experience we aim to give every client.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:col-span-5 lg:col-start-8 lg:gap-6">
              <ParallaxImage
                src={images.interiorGlass.src}
                alt={images.interiorGlass.alt}
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="aspect-[3/4]"
              />
              <ParallaxImage
                src={images.villaTrees.src}
                alt={images.villaTrees.alt}
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="mt-16 aspect-[3/4]"
                strength={12}
              />
            </div>
          </div>
        </div>
      </section>

      <Values index="02" />

      {/* Approach */}
      <section className="bg-paper py-28 md:py-40">
        <div className="container-x">
          <SectionHeading
            index="03"
            eyebrow="Our approach"
            title={"How we work,\nin four principles."}
            intro="Simple commitments that shape every recommendation we make."
          />
          <Stagger className="mt-20 grid border-t border-ink/12 md:mt-28 md:grid-cols-2" gap={0.1}>
            {approach.map((a, i) => (
              <StaggerItem
                key={a.title}
                className={"group border-b border-ink/12 py-12 " + (i % 2 === 0 ? "md:border-r md:pr-12" : "md:pl-12")}
              >
                <div className="flex items-baseline gap-6">
                  <span className="eyebrow tabular-nums text-slate">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif text-3xl font-light leading-tight transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-1.5 sm:text-4xl">
                      {a.title}
                    </h3>
                    <p className="mt-4 max-w-md text-[0.93rem] leading-relaxed text-slate">{a.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Full-bleed city band */}
      <section className="relative isolate flex min-h-[70svh] items-end overflow-hidden bg-ink text-bone">
        <Image src={images.atalBridge.src} alt={images.atalBridge.alt} fill sizes="100vw" className="img-tone -z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10" />
        <div className="container-x pb-16 md:pb-24">
          <TextReveal
            as="p"
            text={"A city in motion deserves\nadvice that keeps pace."}
            className="display max-w-4xl text-[2.4rem] sm:text-6xl lg:text-7xl"
          />
          <Reveal delay={0.3} className="eyebrow mt-8 text-silver">
            Atal Bridge &middot; Sabarmati Riverfront
          </Reveal>
        </div>
      </section>

      <EnquiryCTA />
    </>
  );
}
