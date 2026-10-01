import { images } from "@/data/images";
import { reasons } from "@/data/content";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChoose({ index = "07" }: { index?: string }) {
  return (
    <section className="bg-ink py-28 text-bone md:py-40">
      <div className="container-x">
        <SectionHeading
          index={index}
          eyebrow="Why Elite Estate"
          title={"Fewer options.\nBetter decisions."}
          tone="dark"
        />

        <div className="mt-16 grid gap-14 md:mt-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <ParallaxImage
              src={images.atalBridgeInterior.src}
              alt={images.atalBridgeInterior.alt}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] lg:aspect-[3/4] [&_img]:grayscale"
              caption="Atal Bridge, Sabarmati Riverfront"
            />
          </div>

          <Stagger className="grid content-start border-t border-white/12 sm:grid-cols-2 lg:col-span-6 lg:col-start-7" gap={0.1}>
            {reasons.map((r, i) => (
              <StaggerItem
                key={r.title}
                className={
                  "group border-b border-white/12 py-10 sm:py-12 " +
                  (i % 2 === 0 ? "sm:border-r sm:pr-8" : "sm:pl-8")
                }
              >
                <span className="eyebrow tabular-nums text-slate">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 font-serif text-[1.9rem] font-light leading-tight transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-1.5">
                  {r.title}
                </h3>
                <p className="mt-4 text-[0.92rem] leading-relaxed text-silver">{r.text}</p>
              </StaggerItem>
            ))}
            <StaggerItem className="pt-10 sm:col-span-2">
              <p className="max-w-lg font-serif text-xl italic leading-snug text-mist">
                &ldquo;The best property decision is the one you still feel good about ten years later.&rdquo;
              </p>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
