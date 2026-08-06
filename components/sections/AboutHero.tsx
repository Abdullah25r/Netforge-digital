"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/utils";

const PHOTOS = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
];

export default function AboutHero({
  headline,
  subheadline,
}: {
  headline: string;
  subheadline?: string;
}) {
  return (
    <section className="section-pad bg-[var(--bg-void)]">
      <div className="container-xl grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-6">
            Who We Are
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display font-bold tracking-[-0.03em]"
            style={{ fontSize: "var(--text-xl)" }}
          >
            {headline}
          </motion.h1>
          {subheadline && (
            <motion.p variants={fadeUp} className="text-[var(--text-secondary)] mt-6 max-w-md">
              {subheadline}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-4"
        >
          {PHOTOS.map((src, i) => (
            <motion.div
              key={src}
              variants={fadeUp}
              className={`relative glass-card overflow-hidden aspect-square ${
                i === 1 ? "translate-y-8" : ""
              }`}
            >
              <Image
                src={src}
                alt="NetForge Digital team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
