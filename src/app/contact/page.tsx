import { images } from "@/data/images";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { AreaMap } from "@/components/areas/AreaMapLoader";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: "Speak to an Elite Estate advisor about buying, selling, leasing or investing in Ahmedabad.",
  path: "/contact",
});

export default function ContactPage() {
  const { contact } = site;
  // The office is plotted as a single point; the slug only serves as a stable key.
  const office = [{ slug: "south-bopal" as const, name: "Elite Estate", lat: contact.geo.lat, lng: contact.geo.lng }];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={"Let’s talk about\nwhere you’ll live next."}
        intro="Tell us what you're looking for and an advisor will respond within one working day — or call either of us directly."
        image={images.riverfrontWide}
      />

      <section id="enquiry" className="scroll-mt-24 bg-bone py-28 md:py-40">
        <div className="container-x grid gap-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionHeading index="01" eyebrow="Enquiry" title={"Send us a note."} />
            <Reveal delay={0.1} className="mt-14">
              <EnquiryForm tone="light" full />
            </Reveal>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.15} className="lg:sticky lg:top-32">
              <p className="eyebrow border-t border-ink/12 pt-5 text-slate">Speak to an advisor</p>
              <ul className="mt-2">
                {contact.advisors.map((a) => (
                  <li key={a.tel} className="border-b border-ink/12 py-6">
                    <p className="text-sm text-slate">{a.name}</p>
                    <a
                      href={a.tel}
                      className="mt-1 inline-block font-serif text-2xl transition-opacity duration-500 hover:opacity-70 sm:text-[1.75rem]"
                    >
                      {a.phone}
                    </a>
                    <div className="mt-3 flex gap-5 text-[0.65rem] uppercase tracking-[0.22em]">
                      <a href={a.tel} className="border-b border-ink/25 pb-0.5 transition-colors hover:border-ink">
                        Call
                      </a>
                      <a
                        href={a.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="border-b border-ink/25 pb-0.5 transition-colors hover:border-ink"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-b border-ink/12 py-6">
                <p className="eyebrow text-slate">Office</p>
                <address className="mt-3 text-[0.95rem] not-italic leading-relaxed">
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                  <br />
                  {contact.address.locality}, {contact.address.city} &ndash; {contact.address.postalCode}
                </address>
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block border-b border-ink/25 pb-0.5 text-[0.65rem] uppercase tracking-[0.22em] transition-colors hover:border-ink"
                >
                  Get directions
                </a>
              </div>

              <div className="py-6">
                <p className="eyebrow text-slate">Follow</p>
                <ul className="mt-3 flex gap-6">
                  {site.social.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-serif text-xl transition-opacity hover:opacity-70"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="bg-ink py-20 text-bone md:py-28">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-center justify-between gap-4 border-t border-white/12 pt-5">
            <span className="eyebrow text-silver">Find us &middot; {contact.address.locality}</span>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="eyebrow text-silver transition-colors hover:text-bone"
            >
              Open in Google Maps &rarr;
            </a>
          </Reveal>
          <Reveal className="mt-8 h-[420px] border border-white/12 md:h-[520px]">
            <AreaMap points={office} focus="south-bopal" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
