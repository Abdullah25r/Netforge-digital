import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";

export const metadata: Metadata = {
  title: "Contact — NetForge Digital",
  description:
    "Get in touch with NetForge Digital. Tell us about your project and we'll respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's Talk About Your Project"
        subtitle="Fill out the form and we'll get back to you within 24 hours — no automated replies, no sales scripts."
        crumb="Contact"
      />
      <section className="section-pad bg-[var(--bg-void)]">
        <div className="container-xl grid lg:grid-cols-2 gap-12 items-start">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
