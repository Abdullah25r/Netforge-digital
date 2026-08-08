"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { UsersThree } from "@phosphor-icons/react";
import AmbientOrbs from "../../components/ui/AmbientOrbs";
import type { Stat } from "../../data/team";

const EASE = [0.16, 1, 0.3, 1] as const;

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

const slideFromBottom: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function AboutHero({
  eyebrow = "About NetForge",
  headline,
  subheadline,
  heroImage,
  stats,
}: {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  heroImage: string;
  stats: Stat[];
}) {
  return (
    <section className="relative section-pad bg-[var(--bg-void)] overflow-hidden">
      <AmbientOrbs
        orbs={[
          { size: 500, color: "var(--brand-cyan)", top: "-10%", right: "5%", opacity: 0.15, duration: 10 },
        ]}
      />

      <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left column — text staggers in from different directions per item */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={slideFromLeft} className="eyebrow mb-6">
            {eyebrow}
          </motion.p>

          <motion.h1
            variants={slideFromBottom}
            className="font-display font-bold tracking-[-0.03em]"
            style={{ fontSize: "var(--text-xl)" }}
          >
            {headline}
          </motion.h1>

          {subheadline && (
            <motion.p
              variants={slideFromBottom}
              className="text-[var(--text-secondary)] mt-6 max-w-md"
            >
              {subheadline}
            </motion.p>
          )}

          {stats.length > 0 && (
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap gap-8 mt-10"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={i % 2 === 0 ? slideFromLeft : slideFromBottom}
                  className="flex items-center gap-3"
                >
                  <span className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] flex-shrink-0">
                    <UsersThree size={20} weight="duotone" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-xl leading-none text-gradient-clip">
                      {stat.value}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Right column — image slides in from the right, organic clip-path border */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative aspect-[4/3.2] lg:aspect-[4/3]"
        >
          <div
            className="absolute inset-0 organic-blob"
            style={{
              boxShadow: "var(--glow-cyan)",
              border: "1px solid rgba(0,200,224,0.4)",
            }}
          />
          <div className="absolute inset-[2px] organic-blob overflow-hidden">
            <Image
              src={heroImage}
              alt="NetForge Digital office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
