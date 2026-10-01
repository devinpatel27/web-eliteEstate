import Image from "next/image";
import Link from "next/link";
import { areas } from "@/data/areas";
import { nav, site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

export function Footer() {
  const { contact } = site;
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink text-bone">
      <div className="container-x">
        {/* Brand sign-off: the crest's three words */}
        <div className="grid gap-10 border-b border-white/10 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
          <TextReveal
            as="p"
            text="Trust. Quality. Excellence."
            className="display text-[2.4rem] text-bone/90 sm:text-6xl lg:col-span-9 lg:text-[5.25rem]"
          />
          <Reveal delay={0.2} className="lg:col-span-3 lg:justify-self-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.24em] text-bone"
            >
              <span className="relative">
                Speak to an advisor
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left bg-bone/40 transition-transform duration-600 ease-[var(--ease-luxe)] group-hover:scale-x-0 group-hover:origin-right" />
              </span>
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </Reveal>
        </div>

        {/* Directory */}
        <div className="grid gap-14 py-20 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Image
              src="/brand/logo-full-light.png"
              alt="Elite Estate"
              width={713}
              height={1736}
              className="h-40 w-auto opacity-90"
            />
            <p className="eyebrow mt-8 text-silver">{site.tagline}</p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="eyebrow mb-6 text-slate">Navigate</h2>
            <ul className="space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-bone/70 transition-colors hover:text-bone">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <h2 className="eyebrow mb-6 text-slate">Areas</h2>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="text-bone/70 transition-colors hover:text-bone">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <h2 className="eyebrow mb-6 text-slate">Visit &amp; contact</h2>
            <address className="space-y-1 text-sm not-italic leading-relaxed text-bone/70">
              <p>{contact.address.line1}</p>
              <p>{contact.address.line2}</p>
              <p>
                {contact.address.city}, {contact.address.region} {contact.address.postalCode}
              </p>
            </address>
            <div className="mt-6 space-y-1 text-sm">
              <a href={contact.phoneHref} className="block text-bone transition-opacity hover:opacity-70">
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="block text-bone/70 transition-colors hover:text-bone">
                {contact.email}
              </a>
              <p className="pt-2 text-silver">{contact.hours}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-xs text-silver md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {Object.entries(site.social).map(([name, href]) => (
              <li key={name}>
                <a href={href} target="_blank" rel="noreferrer" className="capitalize transition-colors hover:text-bone">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
