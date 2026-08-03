"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { smallProjects } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/utils";

const FILTERS = ["All", "Web Dev", "Marketing", "Brand", "E-Commerce"];

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? smallProjects
      : smallProjects.filter((p) => p.category === active);

  return (
    <section className="section-pad bg-[var(--bg-void)]">
      <div className="container-xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <p className="eyebrow mb-4">More Work</p>
          <h2 className="font-display font-bold mb-8" style={{ fontSize: "var(--text-xl)" }}>
            Selected Projects
          </h2>

          <LayoutGroup>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  data-cursor-hover
                  className="relative px-4 py-2 text-sm font-medium transition-colors"
                  style={{
                    color: active === f ? "var(--brand-cyan)" : "var(--text-secondary)",
                  }}
                >
                  {f}
                  {active === f && (
                    <motion.span
                      layoutId="filter-underline"
                      className="absolute left-4 right-4 -bottom-0.5 h-[1.5px]"
                      style={{ background: "var(--brand-cyan)" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </LayoutGroup>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeUp}
                layout
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass-card group relative aspect-[4/3] overflow-hidden"
                data-cursor-hover
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-void)] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="text-xs uppercase tracking-widest text-[var(--brand-cyan)] mb-1">
                    {p.category}
                  </p>
                  <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
