import type { Metadata } from "next";
import AboutHero from "../../../components/sections/AboutHero";
import ManifestoSection from "../../../components/sections/ManifestoSection";
import ValuesGrid from "../../../components/sections/ValuesGrid";
import TeamSection from "../../../components/sections/TeamSection";
import CodeTyperSection from "../../../components/sections/CodeTyperSection";
import CTASection from "../../../components/sections/CTASection";

export const metadata: Metadata = {
  title: "About — NetForge Digital",
  description:
    "Meet the lean team of obsessives behind NetForge Digital — Dubai's results-first web development and marketing agency.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ManifestoSection />
      <ValuesGrid />
      <TeamSection />
      <CodeTyperSection />
      <CTASection />
    </>
  );
}
