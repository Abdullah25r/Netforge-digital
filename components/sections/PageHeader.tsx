"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CaretRight } from "@phosphor-icons/react";
import AmbientOrbs from "../ui/AmbientOrbs";
import { fadeUp, staggerContainer } from "../../lib/utils";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumb,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumb: string;
}) {
  return (
    <section className="relative bg-gradient-hero pt-40 pb-28 clip-angled-down overflow-hidden">
      <div className="absolute inset-0 grid-blueprint opacity-15" />
      <AmbientOrbs
        orbs={[
          { size: 500, color: "var(--brand-cyan)", top: "-15%", right: "-5%", opacity: 0.25, duration: 9 },
          { size: 400, color: "var(--brand-violet)", bottom: "-20%", left: "0%", opacity: 0.2, duration: 12 },
        ]}
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container-xl relative z-10"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-6">
          <Link href="/" data-cursor-hover className="hover:text-[var(--brand-cyan)] transition-colors">
            Home
          </Link>
          <CaretRight size={12} />
          <span className="text-[var(--text-primary)]">{crumb}</span>
        </motion.div>
        <motion.p variants={fadeUp} className="eyebrow mb-4">
          {eyebrow}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-display font-bold tracking-[-0.03em]"
          style={{ fontSize: "var(--text-xl)" }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p variants={fadeUp} className="text-[var(--text-secondary)] mt-4 max-w-xl">
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
