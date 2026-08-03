"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { fadeUp, staggerContainer } from "@/lib/utils";

const STATS = [
  { target: 50, suffix: "+", label: "Projects Delivered" },
  { target: 340, suffix: "%", label: "Average Traffic Growth" },
  { target: 4.8, suffix: "★", label: "Client Satisfaction Score", decimals: 1 },
  { target: 2, prefix: "AED ", suffix: "M+", label: "Revenue Generated for Clients" },
];

export default function StatsBar() {
  return (
    <section className="relative bg-[var(--bg-elevated)] section-pad clip-wave -mt-1">
      <div className="container-xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="glass-card p-6 text-center border-t-2 border-t-[var(--brand-cyan)]"
            >
              <AnimatedCounter
                target={stat.target}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals ?? 0}
                className="font-display font-bold text-4xl md:text-5xl text-gradient-clip block"
              />
              <p className="text-sm text-[var(--text-secondary)] mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
