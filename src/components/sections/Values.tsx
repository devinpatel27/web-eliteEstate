import { values } from "@/data/content";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { RoofMark } from "@/components/ui/RoofMark";
import { SectionHeading } from "@/components/ui/SectionHeading";

const numerals = ["I", "II", "III"];

export function Values({ index = "02" }: { index?: string }) {
  return (
    <section className="bg-ink py-28 text-bone md:py-40">
      <div className="container-x">
        <SectionHeading
          index={index}
          eyebrow="What we stand for"
          title={"Three words on our crest.\nA promise in every detail."}
          intro="Trust, quality and excellence are not slogans to us. They describe how we give advice, what we recommend, and how we see a transaction through."
          tone="dark"
        />

        <Stagger className="mt-20 grid border-t border-white/12 md:mt-28 md:grid-cols-3" gap={0.14}>
          {values.map((v, i) => (
            <StaggerItem
              key={v.word}
              className={
                "group relative flex flex-col border-b border-white/12 py-12 md:min-h-[30rem] md:border-b-0 md:px-10 md:py-14 " +
                (i > 0 ? "md:border-l" : "md:pl-0")
              }
            >
              <div className="flex items-center justify-between text-silver">
                <span className="font-serif text-lg italic">{numerals[i]}</span>
                <RoofMark className="h-2 opacity-0 transition-all duration-700 ease-[var(--ease-luxe)] group-hover:-translate-y-1 group-hover:opacity-100" />
              </div>
              <h3 className="display mt-10 text-6xl transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:translate-x-2 lg:text-7xl md:mt-auto">
                {v.word}
              </h3>
              <p className="mt-6 font-serif text-xl italic text-mist">{v.line}</p>
              <p className="mt-4 max-w-sm text-[0.92rem] leading-relaxed text-silver">{v.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
