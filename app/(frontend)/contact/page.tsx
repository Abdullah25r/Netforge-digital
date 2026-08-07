import type { Metadata } from "next";
import PageHeader from "../../../components/sections/PageHeader";
import ContactForm from "../../../components/sections/ContactForm";
import ContactInfo from "../../../components/sections/ContactInfo";
import { getContactInfo } from "../../../lib/queries/contact-info";

export const metadata: Metadata = {
  title: "Contact — NetForge Digital",
  description:
    "Get in touch with NetForge Digital. Tell us about your project and we'll respond within 24 hours.",
};

export default async function ContactPage() {
  const contactInfo = await getContactInfo();

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title={contactInfo.pageHeadline}
        subtitle={contactInfo.pageSubheadline}
        crumb="Contact"
      />
      <section className="section-pad bg-[var(--bg-void)]">
        <div className="container-xl grid lg:grid-cols-2 gap-12 items-start">
          <ContactForm />
          <ContactInfo
            locationText={contactInfo.locationText}
            coordinates={contactInfo.coordinates}
            whatsappNumber={contactInfo.whatsappNumber}
            email={contactInfo.email}
            timings={contactInfo.timings}
            socialLinks={contactInfo.socialLinks ?? {}}
          />
        </div>
      </section>
    </>
  );
}
