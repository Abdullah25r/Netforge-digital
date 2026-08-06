import type { Metadata } from "next";
import AboutHero from "../../../components/sections/AboutHero";
import ManifestoSection from "../../../components/sections/ManifestoSection";
import ValuesGrid from "../../../components/sections/ValuesGrid";
import TeamSection from "../../../components/sections/TeamSection";
import CodeTyperSection from "../../../components/sections/CodeTyperSection";
import CTASection from "../../../components/sections/CTASection";
import { getAboutContent } from "../../../data/team";

export const metadata: Metadata = {
  title: "About — NetForge Digital",
  description:
    "Meet the lean team of obsessives behind NetForge Digital — Dubai's results-first web development and marketing agency.",
};

export default async function AboutPage() {
  const about = await getAboutContent();
  // console.log("About content:", about);
  return (
    <>
      <AboutHero headline={about.headline} subheadline={about.subheadline} />
      <ManifestoSection paragraphs={about.manifestoParagraphs} />
      <ValuesGrid values={about.values} heading={about.valuesHeading} />
      <TeamSection team={about.team} heading={about.teamHeading} />
      <CodeTyperSection />
      <CTASection />
    </>
  );
}
