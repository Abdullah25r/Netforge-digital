import type { Metadata } from "next";
import PageHeader from "../../../components/sections/PageHeader";
import StickyCaseStudies from "../../../components/sections/StickyCaseStudies";
import PortfolioGrid from "../../../components/sections/PortfolioGrid";
import CTASection from "../../../components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Work — NetForge Digital",
  description:
    "Case studies and selected projects from NetForge Digital — real results for real Dubai businesses.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Results, Not Just Portfolios"
        subtitle="A look at how we've moved the needle for brands across Dubai and the UAE — scroll through the highlights."
        crumb="Work"
      />
      <StickyCaseStudies />
      <PortfolioGrid />
      <CTASection />
    </>
  );
}
