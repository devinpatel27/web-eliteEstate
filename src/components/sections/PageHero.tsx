import Image from "next/image";
import Link from "next/link";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  image: { src: string; alt: string };
  crumbs?: { href: string; label: string }[];
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, intro, image, crumbs = [], children }: Props) {
  return (
    <section className="relative isolate flex min-h-[560px] h-[78svh] flex-col overflow-hidden bg-ink text-bone md:h-[82svh]">
      <div className="absolute inset-0 -z-10">
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="img-tone object-cover animate-[ee-settle_2.4s_var(--ease-luxe)_both]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,14,15,0.95)_0%,rgba(14,14,15,0.5)_45%,rgba(14,14,15,0.35)_100%)]" />
        {/* Keeps the transparent navbar legible over bright photography */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/70 to-transparent" />
      </div>

      <div className="container-x flex flex-1 flex-col justify-end pb-14 pt-32 md:pb-20">
        <Reveal className="eyebrow flex flex-wrap items-center gap-3 text-silver">
          <nav aria-label="Breadcrumb" className="contents">
            <Link href="/" className="transition-colors hover:text-bone">Home</Link>
            {crumbs.map((c) => (
              <span key={c.href} className="contents">
                <span aria-hidden>/</span>
                <Link href={c.href} className="transition-colors hover:text-bone">{c.label}</Link>
              </span>
            ))}
            <span aria-hidden>/</span>
            <span className="text-bone">{eyebrow}</span>
          </nav>
        </Reveal>
        <TextReveal
          as="h1"
          immediate
          delay={0.2}
          text={title}
          className="display mt-8 max-w-5xl text-[3rem] sm:text-7xl lg:text-8xl"
        />
        {(intro || children) && (
          <div className="mt-10 grid gap-8 border-t border-white/12 pt-8 lg:grid-cols-12">
            {intro && (
              <Reveal delay={0.5} className="lg:col-span-6">
                <p className="max-w-xl text-[0.98rem] leading-relaxed text-bone/75">{intro}</p>
              </Reveal>
            )}
            {children && (
              <Reveal delay={0.6} className="lg:col-span-5 lg:col-start-8">
                {children}
              </Reveal>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
