import { HeroSlider } from "@/components/hero-slider";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { DestinationsSection } from "@/components/destinations-section";
import { CTASection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <AboutSection />
      <DestinationsSection />
      <CTASection />
    </>
  );
}
