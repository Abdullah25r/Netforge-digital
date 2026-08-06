import HeroSection from "../../components/sections/HeroSection";
import TrustedBySection from "../../components/sections/TrustedBySection";
import ServicesGrid from "../../components/sections/ServicesGrid";
import StatsBar from "../../components/sections/StatsBar";
import ROISection from "../../components/sections/ROISection";
import TestimonialsSection from "../../components/sections/TestimonialsSection";
import CTASection from "../../components/sections/CTASection";
import { getFeaturedServices } from "../../data/services";

export default async function Home() {
  const services = await getFeaturedServices();

  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ServicesGrid services={services} />
      <StatsBar />
      <ROISection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
