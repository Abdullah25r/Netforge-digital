"use client";

import { motion } from "framer-motion";
import GlassCard from "../../components/ui/GlassCard";
import type { Value } from "../../data/team";
import { fadeUp, staggerContainer } from "../../lib/utils";

export default function ValuesGrid({
  values,
  heading = "Our Values",
}: {
  values: Value[];
  heading?: string;
}) {
  if (values.length === 0) return null;

  return (
    <section className="section-pad bg-[var(--bg-void)]">
      <div className="container-xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14 text-center"
        >
          <p className="eyebrow mb-4">What Drives Us</p>
          <h2 className="font-display font-bold" style={{ fontSize: "var(--text-xl)" }}>
            {heading}
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {values.map((v) => (
            <motion.div key={v.title} variants={fadeUp}>
              <GlassCard className="p-8 h-full" hoverGlow>
                <span className="text-3xl mb-4 block">{v.emoji}</span>
                <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{v.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
