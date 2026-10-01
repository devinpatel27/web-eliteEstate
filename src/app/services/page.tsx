import Image from "next/image";
import { services } from "@/data/content";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Process } from "@/components/sections/Process";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { EnquiryCTA } from "@/components/sections/EnquiryCTA";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Buying, selling, leasing, investment advisory, NRI services and documentation support across Ahmedabad — guided by one dedicated Elite Estate advisor.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={"Guidance for every\nproperty decision."}
        intro="Six services, one standard. Whatever brings you to us, you work with a single senior advisor who knows the market and handles the detail."
        image={images.interiorGlass}
      />

      <section className="bg-bone py-28 md:py-40">
        <div className="container-x">
          <SectionHeading index="01" eyebrow="What we do" title={"Six services,\none standard."} />

          <div className="mt-16 border-t border-ink/12 md:mt-24">
            {services.map((s, i) => (
              <article
                key={s.slug}
                id={s.slug}
                className="group grid scroll-mt-28 gap-8 border-b border-ink/12 py-14 md:py-20 lg:grid-cols-12 lg:gap-8"
              >
                <Reveal className="lg:col-span-4">
                  <span className="eyebrow tabular-nums text-slate">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="display mt-5 text-5xl sm:text-6xl">{s.title}</h2>
                </Reveal>

                <Reveal delay={0.1} className="lg:col-span-5">
                  <p className="font-serif text-2xl font-light leading-snug">{s.summary}</p>
                  <p className="mt-5 text-[0.95rem] leading-relaxed text-slate">{s.detail}</p>
                  <ul className="mt-8 grid gap-x-6 gap-y-3 border-t border-ink/12 pt-6 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm">
                        <span className="size-1.5 shrink-0 rotate-45 bg-ink" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={0.2} className="lg:col-span-3">
                  <div className="relative aspect-[4/3] overflow-hidden bg-graphite lg:aspect-[3/4]">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, 100vw"
                      className="img-tone object-cover transition-transform duration-[1400ms] ease-[var(--ease-luxe)] group-hover:scale-[1.045]"
                    />
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Process index="02" />
      <WhyChoose index="03" />
      <EnquiryCTA />
    </>
  );
}
