"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

const scaleFromRight: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function MissionVisionSection({
  missionTitle = "Our Mission",
  missionText,
  visionTitle = "Our Vision",
  visionText,
}: {
  missionTitle?: string;
  missionText: string;
  visionTitle?: string;
  visionText: string;
}) {
  return (
    <section className="section-pad bg-[var(--bg-void)]">
      <div className="container-xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="glass-card relative overflow-hidden grid md:grid-cols-[1.2fr,1fr] gap-10 p-10 lg:p-14"
          style={{ background: "var(--bg-gradient-card, var(--bg-surface))" }}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-10"
          >
            <motion.div variants={slideFromLeft}>
              <span className="inline-block w-8 h-[2px] bg-[var(--brand-cyan)] mb-4" />
              <h2 className="font-display font-bold text-2xl mb-3">{missionTitle}</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed max-w-md">
                {missionText}
              </p>
            </motion.div>

            <motion.div variants={slideFromLeft}>
              <span className="inline-block w-8 h-[2px] bg-[var(--brand-cyan)] mb-4" />
              <h2 className="font-display font-bold text-2xl mb-3">{visionTitle}</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed max-w-md">
                {visionText}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={scaleFromRight}
            className="relative flex items-center justify-center min-h-[220px]"
          >
            <BrandGlyph />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BrandGlyph() {
  return (
    <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px]">
      <motion.div
        className="ambient-orb"
        style={{
          width: 240,
          height: 240,
          background: "var(--brand-cyan)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          opacity: 0.18,
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg viewBox="0 0 200 200" className="relative w-full h-full">
        <defs>
          <linearGradient id="mission-glyph" x1="0" y1="200" x2="200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0f2027" />
            <stop offset="50%" stopColor="#00c8e0" />
            <stop offset="100%" stopColor="#0080ff" />
          </linearGradient>
        </defs>
        <path
          d="M40 170 V40 L150 170 V40"
          fill="none"
          stroke="url(#mission-glyph)"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
