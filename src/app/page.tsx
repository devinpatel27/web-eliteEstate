import { Hero } from "@/components/sections/Hero";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { Values } from "@/components/sections/Values";
import { AreasServed } from "@/components/sections/AreasServed";
import { MapSection } from "@/components/sections/MapSection";
import { FeaturedAreas } from "@/components/sections/FeaturedAreas";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { EnquiryCTA } from "@/components/sections/EnquiryCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <Values index="02" />
      <AreasServed index="03" />
      <MapSection index="04" />
      <FeaturedAreas index="05" />
      <ServicesPreview index="06" />
      <WhyChoose index="07" />
      <Process index="08" />
      <Testimonials index="09" />
      <EnquiryCTA />
    </>
  );
}
