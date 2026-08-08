"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

const scaleFromRight: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.94 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function WhatWeDoSection({
  heading = "What We Do",
  subheading,
  image,
  items,
}: {
  heading?: string;
  subheading?: string;
  image?: string;
  items: string[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="section-pad bg-[var(--bg-elevated)] grid-blueprint relative overflow-hidden">
      <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            variants={slideFromLeft}
            className="inline-block w-8 h-[2px] bg-[var(--brand-cyan)] mb-4"
          />
          <motion.h2
            variants={slideFromLeft}
            className="font-display font-bold mb-4"
            style={{ fontSize: "var(--text-xl)" }}
          >
            {heading}
          </motion.h2>
          {subheading && (
            <motion.p variants={slideFromLeft} className="text-[var(--text-secondary)] mb-8 max-w-md">
              {subheading}
            </motion.p>
          )}

          <ul className="space-y-4">
            {items.map((item) => (
              <motion.li
                key={item}
                variants={slideFromLeft}
                className="flex items-center gap-3 text-sm md:text-base"
              >
                <CheckCircle size={20} weight="fill" className="text-[var(--brand-cyan)] flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {image && (
          <motion.div
            variants={scaleFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 rounded-3xl glass-card overflow-hidden">
              <Image
                src={image}
                alt={heading}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
