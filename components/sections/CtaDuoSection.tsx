"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  Target,
  RocketLaunch,
  UsersFour,
  ShieldCheck,
  Lightbulb,
  type IconProps,
} from "@phosphor-icons/react";
import GlassCard from "../../components/ui/GlassCard";
import type { CtaFeature } from "../../data/team";

const EASE = [0.16, 1, 0.3, 1] as const;

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

const slideFromBottom: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const scaleFromRight: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.94 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const ICONS: Record<CtaFeature["icon"], React.ComponentType<IconProps>> = {
  Target,
  RocketLaunch,
  UsersFour,
  ShieldCheck,
  Lightbulb,
};

export default function CtaDuoSection({
  heading = "Let's Build Something Great Together",
  subheading,
  image,
  features,
}: {
  heading?: string;
  subheading?: string;
  image: string;
  features: CtaFeature[];
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
          <motion.h2
            variants={slideFromLeft}
            className="font-display font-bold mb-4"
            style={{ fontSize: "var(--text-xl)" }}
          >
            {heading}
          </motion.h2>
          {subheading && (
            <motion.p variants={slideFromLeft} className="text-[var(--text-secondary)] mb-10 max-w-md">
              {subheading}
            </motion.p>
          )}

          {features.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => {
                const Icon = ICONS[feature.icon] ?? Target;
                return (
                  <motion.div key={feature.title} variants={i % 2 === 0 ? slideFromLeft : slideFromBottom}>
                    <GlassCard className="p-6 h-full" hoverGlow>
                      <div className="w-10 h-10 rounded-lg bg-[var(--brand-cyan)]/10 flex items-center justify-center mb-4">
                        <Icon size={20} weight="duotone" className="text-[var(--brand-cyan)]" />
                      </div>
                      <h3 className="font-display font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>

        <motion.div
          variants={scaleFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative aspect-[4/3.4]"
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
              src={image}
              alt={heading}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
