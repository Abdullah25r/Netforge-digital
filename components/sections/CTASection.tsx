"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import MagneticButton from "../../components/ui/MagneticButton";
import AmbientOrbs from "../../components/ui/AmbientOrbs";
import { fadeUp, staggerContainer } from "../../lib/utils";

type CTASectionProps = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  ghostButtonText?: string;
  ghostButtonHref?: string;
  badges?: string[];
};

export default function CTASection({
  eyebrow = "Ready to Forge Your Digital Future?",
  heading = "Let's Build Something That Actually Works",
  subheading = "No fluff. No wasted budgets. Just clear strategy, precise execution, and measurable results.",
  primaryButtonText = "Start Your Project",
  primaryButtonHref = "/contact",
  ghostButtonText = "Book a Free Strategy Call",
  ghostButtonHref = "/contact",
  badges = ["📍 Dubai-Based", "🌐 Serving UAE & GCC", "⚡ Results in 90 Days"],
}: CTASectionProps) {
  return (
    <section className="relative section-pad bg-[var(--bg-void)] clip-chevron-up overflow-hidden">
      <AmbientOrbs
        orbs={[
          { size: 800, color: "var(--brand-cyan)", top: "0%", left: "20%", opacity: 0.2, duration: 10 },
        ]}
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container-xl relative z-10 text-center max-w-2xl mx-auto"
      >
        {eyebrow && (
          <motion.p variants={fadeUp} className="eyebrow mb-6">
            {eyebrow}
          </motion.p>
        )}
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold mb-6"
          style={{ fontSize: "var(--text-xl)" }}
        >
          {heading}
        </motion.h2>
        {subheading && (
          <motion.p variants={fadeUp} className="text-[var(--text-secondary)] mb-10">
            {subheading}
          </motion.p>
        )}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
          <MagneticButton href={primaryButtonHref}>
            {primaryButtonText} <ArrowRight size={18} weight="bold" />
          </MagneticButton>
          {ghostButtonText && (
            <MagneticButton href={ghostButtonHref} variant="ghost">
              {ghostButtonText}
            </MagneticButton>
          )}
        </motion.div>
        {badges.length > 0 && (
          <motion.p
            variants={fadeUp}
            className="mt-10 text-sm text-[var(--text-muted)] flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {badges.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
