"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import MagneticButton from "@/components/ui/MagneticButton";
import AmbientOrbs from "@/components/ui/AmbientOrbs";
import { fadeUp, staggerContainer } from "@/lib/utils";

export default function CTASection() {
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
        <motion.p variants={fadeUp} className="eyebrow mb-6">
          Ready to Forge Your Digital Future?
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display font-bold mb-6"
          style={{ fontSize: "var(--text-xl)" }}
        >
          Let&rsquo;s Build Something That Actually Works
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[var(--text-secondary)] mb-10">
          No fluff. No wasted budgets. Just clear strategy, precise execution,
          and measurable results.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
          <MagneticButton href="/contact">
            Start Your Project <ArrowRight size={18} weight="bold" />
          </MagneticButton>
          <MagneticButton href="/contact" variant="ghost">
            Book a Free Strategy Call
          </MagneticButton>
        </motion.div>
        <motion.p
          variants={fadeUp}
          className="mt-10 text-sm text-[var(--text-muted)] flex flex-wrap justify-center gap-x-6 gap-y-2"
        >
          <span>📍 Dubai-Based</span>
          <span>🌐 Serving UAE & GCC</span>
          <span>⚡ Results in 90 Days</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
