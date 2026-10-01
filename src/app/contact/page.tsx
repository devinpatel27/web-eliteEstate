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
  const office = [{ slug: "sindhu-bhavan-road" as const, name: "Elite Estate", lat: contact.geo.lat, lng: contact.geo.lng }];

  const details = [
    { label: "Call", value: contact.phone, href: contact.phoneHref },
    { label: "WhatsApp", value: "Message us", href: contact.whatsapp },
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={"Let’s talk about\nwhere you’ll live next."}
        intro="Tell us what you're looking for. An advisor will respond within one working day — or call us directly during office hours."
        image={images.riverfrontWide}
      />

      <section className="bg-bone py-28 md:py-40">
        <div className="container-x grid gap-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionHeading index="01" eyebrow="Enquiry" title={"Send us a note."} />
            <Reveal delay={0.1} className="mt-14">
              <EnquiryForm tone="light" full />
            </Reveal>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.15} className="lg:sticky lg:top-32">
              <div className="border-t border-ink/12">
                {details.map((d) => (
                  <a
                    key={d.label}
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-baseline justify-between gap-6 border-b border-ink/12 py-6"
                  >
                    <span className="eyebrow text-slate">{d.label}</span>
                    <span className="font-serif text-xl transition-transform duration-500 ease-[var(--ease-luxe)] group-hover:-translate-x-1.5 sm:text-2xl">
                      {d.value}
                    </span>
                  </a>
                ))}
                <div className="border-b border-ink/12 py-6">
                  <p className="eyebrow text-slate">Office</p>
                  <address className="mt-3 text-[0.95rem] not-italic leading-relaxed">
                    {contact.address.line1}
                    <br />
                    {contact.address.line2}
                    <br />
                    {contact.address.city}, {contact.address.region} {contact.address.postalCode}
                  </address>
                  <p className="mt-3 text-sm text-slate">{contact.hours}</p>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="bg-ink py-20 text-bone md:py-28">
        <div className="container-x">
          <Reveal className="flex items-center justify-between border-t border-white/12 pt-5">
            <span className="eyebrow text-silver">Find us</span>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${contact.geo.lat},${contact.geo.lng}`}
              target="_blank"
              rel="noreferrer"
              className="eyebrow text-silver transition-colors hover:text-bone"
            >
              Open in Google Maps &rarr;
            </a>
          </Reveal>
          <Reveal className="mt-8 h-[420px] border border-white/12 md:h-[520px]">
            <AreaMap points={office} focus="sindhu-bhavan-road" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
