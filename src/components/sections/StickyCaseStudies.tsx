"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { caseStudies } from "@/data/portfolio";
import GlassCard from "@/components/ui/GlassCard";

export default function StickyCaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Distance to translate: (n-1) cards of ~640px plus gaps, minus viewport width
  const cardWidth = 640;
  const gap = 32;
  const totalWidth = caseStudies.length * (cardWidth + gap);
  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${totalWidth - cardWidth}px`]);

  return (
    <>
      {/* Desktop sticky horizontal scroll */}
      <div ref={containerRef} className="hidden lg:block relative h-[400vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div className="flex gap-8 pl-[max(2rem,calc((100vw-1280px)/2+2rem))]" style={{ x }}>
            {caseStudies.map((cs) => (
              <CaseCard key={cs.id} cs={cs} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile swipeable carousel */}
      <div className="lg:hidden flex gap-6 overflow-x-auto px-6 py-4 snap-x snap-mandatory">
        {caseStudies.map((cs) => (
          <div key={cs.id} className="snap-start flex-shrink-0">
            <CaseCard cs={cs} />
          </div>
        ))}
      </div>
    </>
  );
}

function CaseCard({ cs }: { cs: (typeof caseStudies)[number] }) {
  return (
    <div className="relative w-[85vw] max-w-[640px] h-[65vh] max-h-[560px] rounded-2xl overflow-hidden flex-shrink-0">
      <Image
        src={cs.image}
        alt={cs.title}
        fill
        className="object-cover"
        sizes="640px"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(3,3,8,0.1) 0%, rgba(3,3,8,0.85) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: cs.gradient, mixBlendMode: "color" }}
      />

      <div className="absolute inset-x-0 bottom-0 p-8">
        <GlassCard className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {cs.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{ background: `${cs.accent}22`, color: cs.accent }}
              >
                {t}
              </span>
            ))}
          </div>
          <h3 className="font-display font-bold text-2xl mb-1">{cs.title}</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-4">{cs.category} · {cs.services}</p>
          <p className="font-display font-semibold text-lg mb-5" style={{ color: cs.accent }}>
            {cs.result}
          </p>
          <a
            href="#"
            data-cursor-hover
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--brand-cyan)] transition-colors"
          >
            View Case Study <ArrowUpRight size={16} weight="bold" />
          </a>
        </GlassCard>
      </div>
    </div>
  );
}
