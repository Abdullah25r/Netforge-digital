"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import GlassCard from "@/components/ui/GlassCard";
import { testimonials } from "@/data/testimonials";
import { fadeUp } from "@/lib/utils";

export default function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollerRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section className="relative section-pad bg-[var(--bg-void)]">
      <div className="container-xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="eyebrow mb-4">Client Voices</p>
            <h2 className="font-display font-bold" style={{ fontSize: "var(--text-xl)" }}>
              What Our Clients Say
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll(-1)}
              data-cursor-hover
              className="glass-card w-11 h-11 flex items-center justify-center hover:border-[var(--brand-cyan)]/50 transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              data-cursor-hover
              className="glass-card w-11 h-11 flex items-center justify-center hover:border-[var(--brand-cyan)]/50 transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto pb-4 px-6 lg:px-[max(2rem,calc((100vw-1280px)/2+2rem))] snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {testimonials.map((t) => (
          <GlassCard
            key={t.id}
            className="min-w-[320px] md:min-w-[380px] p-8 snap-start flex-shrink-0"
            hoverGlow
          >
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} weight="fill" className="text-[var(--brand-cyan)]" />
              ))}
            </div>
            <p className="text-[var(--text-primary)] leading-relaxed mb-6">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #00c8e0, #6c3fff)", color: "#030308" }}
              >
                {t.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-[var(--text-secondary)]">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
