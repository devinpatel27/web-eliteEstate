import Image from "next/image";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export function EnquiryCTA({ defaultArea, title }: { defaultArea?: string; title?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-28 text-bone md:py-40" id="enquire">
      <div className="absolute inset-0 -z-10">
        <Image src={images.riverfrontNight.src} alt="" fill sizes="100vw" className="img-tone object-cover opacity-55" />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(14,14,15,0.96)_20%,rgba(14,14,15,0.86)_55%,rgba(14,14,15,0.72)_100%)]" />
      </div>

      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal className="eyebrow flex items-center gap-4 text-silver">
            <span className="h-px w-10 bg-silver/60" />
            Private enquiry
          </Reveal>
          <TextReveal
            text={title ?? "Begin with a\nconversation."}
            className="display mt-10 text-[2.8rem] sm:text-6xl lg:text-7xl"
          />
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-sm text-[0.95rem] leading-relaxed text-silver">
              Share a few details and an advisor will call you — no obligation, no pressure. Prefer to talk now?
            </p>
            <a
              href={site.contact.phoneHref}
              className="mt-6 inline-block font-serif text-3xl font-light transition-opacity hover:opacity-70"
            >
              {site.contact.phone}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:pt-4">
          <EnquiryForm tone="dark" defaultArea={defaultArea} />
        </Reveal>
      </div>
    </section>
  );
}
