"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MagnifyingGlass,
  Compass,
  Hammer,
  RocketLaunch,
  ChartBar,
} from "@phosphor-icons/react";
import GlassCard from "../ui/GlassCard";
import { fadeUp, staggerContainer } from "../../lib/utils";

const STEPS = [
  { n: "01", title: "Discovery", desc: "We dig into your business, market, and goals before touching a single pixel.", icon: MagnifyingGlass },
  { n: "02", title: "Strategy", desc: "A tailored roadmap connecting your growth targets to concrete deliverables.", icon: Compass },
  { n: "03", title: "Build", desc: "Design and development happen in tight, transparent sprints with regular check-ins.", icon: Hammer },
  { n: "04", title: "Launch", desc: "A controlled, tested rollout — no surprises, no downtime, no guesswork.", icon: RocketLaunch },
  { n: "05", title: "Optimise", desc: "Continuous measurement and iteration to keep results compounding.", icon: ChartBar },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="section-pad bg-[var(--bg-elevated)] clip-jagged relative">
      <div className="container-xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <p className="eyebrow mb-4">How We Work</p>
          <h2 className="font-display font-bold" style={{ fontSize: "var(--text-xl)" }}>
            Five Steps, Zero Guesswork
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line - desktop */}
          <svg
            className="hidden lg:block absolute top-[52px] left-0 w-full h-1 pointer-events-none"
            viewBox="0 0 1000 4"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="0"
              y1="2"
              x2="1000"
              y2="2"
              stroke="url(#process-grad)"
              strokeWidth="2"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="process-grad" x1="0" y1="0" x2="1000" y2="0">
                <stop offset="0%" stopColor="#00c8e0" />
                <stop offset="100%" stopColor="#6c3fff" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-5 gap-8 lg:gap-4"
          >
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.n} variants={fadeUp} className="relative">
                  <span
                    className="absolute -top-6 -left-1 font-display font-bold text-6xl select-none pointer-events-none text-gradient-clip opacity-20"
                  >
                    {step.n}
                  </span>
                  <GlassCard className="relative p-6 pt-8 h-full" hoverGlow>
                    <div className="w-10 h-10 rounded-lg bg-[var(--brand-cyan)]/10 flex items-center justify-center mb-4">
                      <Icon size={20} weight="duotone" className="text-[var(--brand-cyan)]" />
                    </div>
                    <h3 className="font-display font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {step.desc}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
