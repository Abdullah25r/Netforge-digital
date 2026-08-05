"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";
import GlassCard from "../ui/GlassCard";
import MagneticButton from "../ui/MagneticButton";
import { fadeUp, staggerContainer } from "../../lib/utils";

const TIERS = [
  {
    name: "Starter",
    price: "AED 2,500",
    period: "/mo",
    desc: "For businesses testing the waters with one focused channel.",
    features: ["1 service", "Basic monthly reporting", "Email support", "30-day rolling contract"],
    popular: false,
  },
  {
    name: "Growth",
    price: "AED 5,500",
    period: "/mo",
    desc: "For businesses ready to scale across multiple channels.",
    features: ["3 services", "Bi-weekly strategy calls", "Priority support", "Dedicated account manager"],
    popular: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    desc: "For established brands needing a full-service growth team.",
    features: ["Full-service engagement", "Dedicated team", "Weekly reporting & calls", "Custom SLAs"],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="section-pad bg-[var(--bg-void)]">
      <div className="container-xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Investment</p>
          <h2 className="font-display font-bold" style={{ fontSize: "var(--text-xl)" }}>
            Straightforward Pricing
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {TIERS.map((tier) => (
            <motion.div key={tier.name} variants={fadeUp}>
              <GlassCard
                className={`p-8 h-full flex flex-col ${tier.popular ? "border-[var(--brand-cyan)]/50" : ""}`}
                hoverGlow
                style={tier.popular ? { boxShadow: "var(--glow-cyan)" } : undefined}
              >
                {tier.popular && (
                  <span className="self-start mb-4 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--brand-cyan)]/15 text-[var(--brand-cyan)]">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display font-semibold text-xl mb-1">{tier.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-6">{tier.desc}</p>
                <p className="mb-6">
                  <span className="font-display font-bold text-4xl text-gradient-clip">
                    {tier.price}
                  </span>
                  <span className="text-[var(--text-secondary)]">{tier.period}</span>
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <CheckCircle size={18} weight="fill" className="text-[var(--brand-cyan)] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <MagneticButton
                  href="/contact"
                  variant={tier.popular ? "primary" : "ghost"}
                  className="w-full justify-center"
                >
                  Get Started
                </MagneticButton>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
