"use client";

import { motion } from "framer-motion";
import CodeTyper from "../ui/CodeTyper";
import { fadeUp, staggerContainer } from "../../lib/utils";

const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "Figma",
  "Google Ads",
  "Meta Business",
  "Shopify",
  "HubSpot",
];

export default function CodeTyperSection() {
  return (
    <section className="section-pad bg-[var(--bg-void)] clip-angled-up grid-blueprint">
      <div className="container-xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14"
        >
          <p className="eyebrow mb-4">Technical Credibility</p>
          <h2 className="font-display font-bold" style={{ fontSize: "var(--text-xl)" }}>
            Built With Precision
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <CodeTyper />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {STACK.map((s) => (
              <motion.div
                key={s}
                variants={fadeUp}
                className="glass-card px-4 py-4 text-center text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] hover:border-[var(--brand-cyan)]/40 transition-colors"
              >
                {s}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
