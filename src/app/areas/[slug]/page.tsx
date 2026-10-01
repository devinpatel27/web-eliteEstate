import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { areas, getArea } from "@/data/areas";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { AreaCard } from "@/components/areas/AreaCard";
import { AreaMap } from "@/components/areas/AreaMapLoader";
import { PageHero } from "@/components/sections/PageHero";
import { EnquiryCTA } from "@/components/sections/EnquiryCTA";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/areas/[slug]">) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return buildMetadata({
    title: `${area.name}, Ahmedabad — Area Guide`,
    description: `${area.summary} An area guide to ${area.name} by ${site.name}.`,
    path: `/areas/${area.slug}`,
    image: `${area.image}?w=1200&h=630&fit=crop&q=75`,
  });
}

export default async function AreaPage({ params }: PageProps<"/areas/[slug]">) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const idx = areas.findIndex((a) => a.slug === area.slug);
  const nearby = area.nearby
    .map((n) => areas.find((a) => a.name === n))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))
    .slice(0, 3);
  const points = areas.map((a) => ({ slug: a.slug, name: a.name, lat: a.lat, lng: a.lng, summary: a.summary, href: `/areas/${a.slug}` }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${area.name}, Ahmedabad`,
    description: area.summary,
    geo: { "@type": "GeoCoordinates", latitude: area.lat, longitude: area.lng },
    containedInPlace: { "@type": "City", name: "Ahmedabad" },
  };

  return (
    <>
      <PageHero
        eyebrow={area.name}
        crumbs={[{ href: "/areas", label: "Areas" }]}
        title={area.name}
        intro={area.summary}
        image={{ src: area.image, alt: `${area.name}, Ahmedabad` }}
      >
        <dl className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <dt className="eyebrow text-silver">Character</dt>
            <dd className="mt-2 font-serif text-2xl">{area.character}</dd>
          </div>
          <div>
            <dt className="eyebrow text-silver">Guide</dt>
            <dd className="mt-2 font-serif text-2xl tabular-nums">
              {String(idx + 1).padStart(2, "0")} / {areas.length}
            </dd>
          </div>
        </dl>
      </PageHero>

      {/* Overview */}
      <section className="bg-bone py-28 md:py-40">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionHeading index="01" eyebrow="Overview" title={`Living in\n${area.name}.`} />
            <Reveal className="mt-12 space-y-6">
              <p className="font-serif text-[1.6rem] font-light leading-[1.35] sm:text-[1.9rem]">{area.overview[0]}</p>
              {area.overview.slice(1).map((p) => (
                <p key={p.slice(0, 20)} className="max-w-2xl text-[0.95rem] leading-relaxed text-slate">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.15} className="border border-ink/12 bg-paper p-8 lg:sticky lg:top-32">
              <p className="eyebrow text-slate">Well suited to</p>
              <ul className="mt-5 space-y-3">
                {area.suitedTo.map((s) => (
                  <li key={s} className="flex items-center gap-3 font-serif text-xl">
                    <span className="size-1.5 rotate-45 bg-ink" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="eyebrow mt-10 text-slate">Nearby</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {area.nearby.map((n) => {
                  const a = areas.find((x) => x.name === n);
                  return a ? (
                    <li key={n}>
                      <Link
                        href={`/areas/${a.slug}`}
                        className="inline-block border border-ink/15 px-3 py-2 text-xs transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-bone"
                      >
                        {n}
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
              <Link
                href="#enquire"
                className="group mt-10 flex items-center justify-between border-t border-ink/12 pt-6 text-[0.7rem] uppercase tracking-[0.24em]"
              >
                Enquire about {area.name}
                <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.3} />
              </Link>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-ink py-28 text-bone md:py-40">
        <div className="container-x">
          <SectionHeading index="02" eyebrow="Highlights" title={"What sets it apart."} tone="dark" />
          <Stagger className="mt-16 grid border-t border-white/12 md:mt-24 md:grid-cols-3" gap={0.12}>
            {area.highlights.map((h, i) => (
              <StaggerItem
                key={h.title}
                className={"border-b border-white/12 py-12 md:border-b-0 md:px-10 " + (i > 0 ? "md:border-l" : "md:pl-0")}
              >
                <span className="eyebrow tabular-nums text-slate">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 font-serif text-4xl font-light">{h.title}</h3>
                <p className="mt-4 max-w-xs text-[0.92rem] leading-relaxed text-silver">{h.text}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-20 h-[420px] border border-white/12 md:h-[520px]">
            <AreaMap points={points} focus={area.slug} />
          </Reveal>
          <p className="eyebrow mt-4 text-slate">Location shown is approximate, for orientation only.</p>
        </div>
      </section>

      {/* Nearby */}
      {nearby.length > 0 && (
        <section className="bg-paper py-28 md:py-40">
          <div className="container-x">
            <SectionHeading index="03" eyebrow="Also consider" title={"Neighbouring\nareas."} />
            <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 md:mt-24 lg:grid-cols-3">
              {nearby.map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.08}>
                  <AreaCard area={a} imageClassName="aspect-[4/3]" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <EnquiryCTA defaultArea={area.slug} title={`Considering\n${area.name}?`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
