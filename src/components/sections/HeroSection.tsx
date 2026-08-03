"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ArrowDown } from "@phosphor-icons/react";
import MagneticButton from "@/components/ui/MagneticButton";
import GlassCard from "@/components/ui/GlassCard";
import AmbientOrbs from "@/components/ui/AmbientOrbs";
import { fadeUp, staggerContainer } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden clip-angled-down pb-32 pt-40 md:pt-44">
      <div className="absolute inset-0 grid-blueprint opacity-15" />
      <AmbientOrbs
        orbs={[
          { size: 600, color: "var(--brand-cyan)", top: "-10%", left: "-10%", opacity: 0.3, duration: 9 },
          { size: 500, color: "var(--brand-violet)", bottom: "-10%", right: "-5%", opacity: 0.2, duration: 11 },
        ]}
      />

      <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-6">
            Digital Agency · Dubai
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display font-bold leading-[1.02] tracking-[-0.03em]"
            style={{ fontSize: "var(--text-xl)" }}
          >
            We Forge{" "}
            <span className="text-gradient-clip">Digital Experiences</span>{" "}
            That Drive Real Growth
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[var(--text-secondary)] mt-6 max-w-lg"
            style={{ fontSize: "var(--text-base)" }}
          >
            NetForge Digital builds high-performance websites, aggressive
            marketing strategies, and measurable results for ambitious
            businesses.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
            <MagneticButton href="/contact">
              Start Your Project <ArrowRight size={18} weight="bold" />
            </MagneticButton>
            <MagneticButton href="/work" variant="ghost">
              See Our Work
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-sm text-[var(--text-secondary)]"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle size={16} weight="fill" className="text-[var(--brand-cyan)]" />
              50+ Projects
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={16} weight="fill" className="text-[var(--brand-cyan)]" />
              Dubai-Based
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle size={16} weight="fill" className="text-[var(--brand-cyan)]" />
              Results-First
            </span>
          </motion.div>
        </motion.div>

        {/* Right visual */}
        <div className="relative h-[420px] md:h-[520px] flex items-center justify-center">
          <HeroGlyph />

          <FloatingCard
            className="top-2 left-0 md:left-4"
            value="+340%"
            label="Avg. Organic Traffic Growth"
            delay={0}
          />
          <FloatingCard
            className="top-1/2 -translate-y-1/2 right-0 md:right-2"
            value="4.8★"
            label="Client Satisfaction"
            delay={0.3}
          />
          <FloatingCard
            className="bottom-2 left-6 md:left-12"
            value="2.1×"
            label="Avg. Conversion Lift"
            delay={0.6}
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-2 text-xs text-[var(--text-muted)] uppercase tracking-widest"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
        Scroll to explore
      </motion.div>
    </section>
  );
}

function HeroGlyph() {
  return (
    <div style={{ position: 'relative', width: 340, height: 340, margin: '0 auto' }}>
      {/* Ambient orb behind */}
      <div className="ambient-orb" style={{ width: 300, height: 300, background: 'radial-gradient(#00c8e0, transparent)', top: 20, left: 20, opacity: 0.25 }} />
      <svg width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="nGrad" x1="0" y1="340" x2="340" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="50%" stopColor="#0080ff" />
            <stop offset="100%" stopColor="#00c8e0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        {/* Grid blueprint behind */}
        <line x1="0" y1="0" x2="340" y2="0" stroke="rgba(0,200,224,0.08)" strokeWidth="1"/>
        <line x1="0" y1="60" x2="340" y2="60" stroke="rgba(0,200,224,0.08)" strokeWidth="1"/>
        <line x1="0" y1="120" x2="340" y2="120" stroke="rgba(0,200,224,0.08)" strokeWidth="1"/>
        <line x1="0" y1="180" x2="340" y2="180" stroke="rgba(0,200,224,0.08)" strokeWidth="1"/>
        <line x1="0" y1="240" x2="340" y2="240" stroke="rgba(0,200,224,0.08)" strokeWidth="1"/>
        <line x1="0" y1="300" x2="340" y2="300" stroke="rgba(0,200,224,0.08)" strokeWidth="1"/>
        <line x1="0" y1="0" x2="0" y2="340" stroke="rgba(0,200,224,0.08)" strokeWidth="1"/>
        <line x1="60" y1="0" x2="60" y2="340" stroke="rgba(0,200,224,0.08)" strokeWidth="1"/>
        <line x1="120" y1="0" x2="120" y2="340" stroke="rgba(0,200,224,0.08)" strokeWidth="1"/>
        <line x1="180" y1="0" x2="180" y2="340" stroke="rgba(0,200,224,0.08)" strokeWidth="1"/>
        <line x1="240" y1="0" x2="240" y2="340" stroke="rgba(0,200,224,0.08)" strokeWidth="1"/>
        <line x1="300" y1="0" x2="300" y2="340" stroke="rgba(0,200,224,0.08)" strokeWidth="1"/>
        {/* Circuit dots */}
        <circle cx="50" cy="80" r="5" stroke="#334155" strokeWidth="2" fill="none"/>
        <circle cx="50" cy="140" r="5" stroke="#334155" strokeWidth="2" fill="none"/>
        <circle cx="50" cy="200" r="5" stroke="#334155" strokeWidth="2" fill="none"/>
        <circle cx="50" cy="260" r="5" stroke="#334155" strokeWidth="2" fill="none"/>
        <line x1="55" y1="80" x2="78" y2="80" stroke="#334155" strokeWidth="2" strokeLinecap="round"/>
        <line x1="55" y1="140" x2="78" y2="140" stroke="#334155" strokeWidth="2" strokeLinecap="round"/>
        <line x1="55" y1="200" x2="78" y2="200" stroke="#334155" strokeWidth="2" strokeLinecap="round"/>
        <line x1="55" y1="260" x2="78" y2="260" stroke="#334155" strokeWidth="2" strokeLinecap="round"/>
        <line x1="78" y1="70" x2="78" y2="270" stroke="#334155" strokeWidth="2" strokeLinecap="round"/>
        <rect x="70" y="108" width="16" height="10" rx="2" stroke="#334155" strokeWidth="2" fill="none"/>
        <rect x="70" y="168" width="16" height="10" rx="2" stroke="#334155" strokeWidth="2" fill="none"/>
        {/* N shape */}
        <motion.path
          d="M82 270 L82 70 L170 220 L170 70"
          stroke="url(#nGrad)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
        />
        {/* Arrow */}
        <motion.path
          d="M170 220 L170 70 L275 30"
          stroke="#00c8e0"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut', delay: 1.8 }}
        />
        <motion.polyline
          points="240,18 275,30 263,62"
          stroke="#00c8e0"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 3.2 }}
        />
      </svg>
    </div>
  )
}

function FloatingCard({
  value,
  label,
  className,
  delay,
}: {
  value: string;
  label: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -12, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <GlassCard className="px-4 py-3 min-w-[150px]">
        <p className="font-display font-bold text-xl text-gradient-clip">{value}</p>
        <p className="text-xs text-[var(--text-secondary)] mt-0.5">{label}</p>
      </GlassCard>
    </motion.div>
  );
}
