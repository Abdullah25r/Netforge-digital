import type { Metadata } from "next";
import PageHeader from "../../../components/sections/PageHeader";
import StickyCaseStudies from "../../../components/sections/StickyCaseStudies";
import PortfolioGrid from "../../../components/sections/PortfolioGrid";
import CTASection from "../../../components/sections/CTASection";
import { getFeaturedCaseStudies, getSmallProjects } from "../../../data/portfolio";

export const metadata: Metadata = {
  title: "Our Work — NetForge Digital",
  description:
    "Case studies and selected projects from NetForge Digital — real results for real Dubai businesses.",
};

export default async function WorkPage() {
  const [caseStudies, smallProjects] = await Promise.all([
    getFeaturedCaseStudies(),
    getSmallProjects(),
  ]);

  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Results, Not Just Portfolios"
        subtitle="A look at how we've moved the needle for brands across Dubai and the UAE — scroll through the highlights."
        crumb="Work"
      />
      <StickyCaseStudies caseStudies={caseStudies} />
      <PortfolioGrid projects={smallProjects} />
      <CTASection />
    </>
  );
}
