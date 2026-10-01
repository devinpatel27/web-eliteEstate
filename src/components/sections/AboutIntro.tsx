import { images } from "@/data/images";
import { stats } from "@/data/content";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Button } from "@/components/ui/Button";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutIntro() {
  return (
    <section className="bg-bone py-28 md:py-40">
      <div className="container-x">
        <SectionHeading index="01" eyebrow="About Elite Estate" title={"An advisory built on\nknowing the ground."} />

        <div className="mt-16 grid gap-14 md:mt-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <ParallaxImage
              src={images.riverfrontWide.src}
              alt={images.riverfrontWide.alt}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5]"
              caption="Sabarmati, Ahmedabad"
            />
          </div>

          <div className="flex flex-col justify-between gap-16 lg:col-span-6 lg:col-start-7">
            <div className="space-y-8">
              <Reveal>
                <p className="font-serif text-[1.65rem] font-light leading-[1.3] sm:text-[2.1rem]">
                  Elite Estate is an Ahmedabad real estate advisory for people who value judgement over
                  volume. We work across twelve of the city&rsquo;s most considered neighbourhoods &mdash;
                  and we know each one street by street.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-xl text-[0.95rem] leading-relaxed text-slate">
                  Whether you are buying your first home in South Bopal, moving your family to a villa in
                  Ambli or investing along SG Highway, our role is the same: understand what matters to you,
                  recommend the right place, and manage every detail with care. We don&rsquo;t push
                  inventory. We give advice &mdash; and stand behind it.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <Button href="/about" variant="text">
                  Our story
                </Button>
              </Reveal>
            </div>

            <Stagger className="grid grid-cols-3 border-t border-ink/12">
              {stats.map((s, i) => (
                <StaggerItem key={s.label} className={i > 0 ? "border-l border-ink/12 pl-4 pt-8 sm:pl-8" : "pt-8 pr-4"}>
                  <p className="display text-5xl sm:text-6xl">{s.value}</p>
                  <p className="mt-4 whitespace-pre-line text-[0.6rem] uppercase leading-relaxed tracking-[0.12em] text-slate sm:text-[0.7rem] sm:tracking-[0.18em]">
                    {s.label}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
