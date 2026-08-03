"use client";

import { motion } from "framer-motion";
import ROISlider from "@/components/ui/ROISlider";
import { fadeUp } from "@/lib/utils";

export default function ROISection() {
  return (
    <section className="relative section-pad bg-[var(--bg-void)] grid-blueprint bg-opacity-5 overflow-hidden">
      <div className="container-xl relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <p className="eyebrow mb-4">ROI Calculator</p>
          <h2 className="font-display font-bold" style={{ fontSize: "var(--text-xl)" }}>
            Calculate Your Growth Potential
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ROISlider />
        </motion.div>
      </div>
    </section>
  );
}
