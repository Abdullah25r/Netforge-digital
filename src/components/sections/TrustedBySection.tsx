import LogoMarquee from "@/components/ui/LogoMarquee";

export default function TrustedBySection() {
  return (
    <section className="relative bg-[var(--bg-surface)] py-20 clip-angled-up -mt-1">
      <div className="container-xl">
        <p className="text-center eyebrow mb-10">
          Trusted by Brands Across Dubai &amp; The UAE
        </p>
        <LogoMarquee />
      </div>
    </section>
  );
}
