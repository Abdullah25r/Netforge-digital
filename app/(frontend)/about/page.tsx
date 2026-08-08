import type { Metadata } from "next";
import AboutHero from "../../../components/sections/AboutHero";
import MissionVisionSection from "../../../components/sections/MissionVisionSection";
import ManifestoSection from "../../../components/sections/ManifestoSection";
import ValuesGrid from "../../../components/sections/ValuesGrid";
import WhatWeDoSection from "../../../components/sections/WhatWeDoSection";
import TeamSection from "../../../components/sections/TeamSection";
import CtaDuoSection from "../../../components/sections/CtaDuoSection";
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

  return (
    <>
      <AboutHero
        eyebrow={about.eyebrow}
        headline={about.headline}
        subheadline={about.subheadline}
        heroImage={about.heroImage}
        stats={about.stats}
      />
      <MissionVisionSection
        missionTitle={about.missionTitle}
        missionText={about.missionText}
        visionTitle={about.visionTitle}
        visionText={about.visionText}
      />
      <ManifestoSection paragraphs={about.manifestoParagraphs} />
      <ValuesGrid
        values={about.values}
        heading={about.valuesHeading}
        subheading={about.valuesSubheading}
      />
      <WhatWeDoSection
        heading={about.whatWeDoHeading}
        subheading={about.whatWeDoSubheading}
        image={about.whatWeDoImage}
        items={about.whatWeDoItems}
      />
      <TeamSection team={about.team} heading={about.teamHeading} />
      <CtaDuoSection
        heading={about.ctaDuoHeading}
        subheading={about.ctaDuoSubheading}
        image={about.ctaDuoImage}
        features={about.ctaDuoFeatures}
      />
      <CodeTyperSection />
      <CTASection
        eyebrow={undefined}
        heading={about.bottomCtaHeading}
        subheading={about.bottomCtaSubheading}
        primaryButtonText={about.bottomCtaButtonText}
        primaryButtonHref={about.bottomCtaButtonLink}
        ghostButtonText={undefined}
        badges={[]}
      />
    </>
  );
}
