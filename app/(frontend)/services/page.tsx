import type { Metadata } from "next";
import PageHeader from "../../../components/sections/PageHeader";
import ServicesTabs from "../../../components/sections/ServicesTabs";
import ProcessSection from "../../../components/sections/ProcessSection";
import PricingSection from "../../../components/sections/PricingSection";
import CTASection from "../../../components/sections/CTASection";
import { getServices } from "../../../data/services";

export const metadata: Metadata = {
  title: "Services — NetForge Digital",
  description:
    "Web development, digital marketing, brand identity, social media, and e-commerce services from NetForge Digital.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Everything You Need to Grow, Under One Roof"
        subtitle="From first line of code to your thousandth conversion — we build and grow the full digital engine behind your business."
        crumb="Services"
      />
      <ServicesTabs services={services} />
      <ProcessSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
