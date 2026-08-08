"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import GlassCard from "../../components/ui/GlassCard";
import type { Value } from "../../data/team";
import { fadeUp } from "../../lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const slideFromBottom: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ValuesGrid({
  values,
  heading = "Our Values",
  subheading = "The principles that drive everything we do",
}: {
  values: Value[];
  heading?: string;
  subheading?: string;
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
          className="mb-14"
        >
          <span className="inline-block w-8 h-[2px] bg-[var(--brand-cyan)] mb-4" />
          <h2 className="font-display font-bold mb-2" style={{ fontSize: "var(--text-xl)" }}>
            {heading}
          </h2>
          {subheading && (
            <p className="text-[var(--text-secondary)]">{subheading}</p>
          )}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((v) => (
            <motion.div key={v.title} variants={slideFromBottom}>
              <GlassCard className="p-7 h-full" hoverGlow>
                {v.icon && (
                  <div className="w-11 h-11 rounded-xl bg-[var(--brand-cyan)]/10 flex items-center justify-center mb-5 relative overflow-hidden">
                    <Image
                      src={v.icon}
                      alt={v.title}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                )}
                <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{v.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
