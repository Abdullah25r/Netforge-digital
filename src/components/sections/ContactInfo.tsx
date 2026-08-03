"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  WhatsappLogo,
  EnvelopeSimple,
  Clock,
  InstagramLogo,
  LinkedinLogo,
  BehanceLogo,
} from "@phosphor-icons/react";
import GlassCard from "@/components/ui/GlassCard";
import { fadeUp, staggerContainer } from "@/lib/utils";

const INFO = [
  { icon: MapPin, text: "Al Barsha 1, Dubai, UAE" },
  { icon: WhatsappLogo, text: "WhatsApp: +971 50 000 0000" },
  { icon: EnvelopeSimple, text: "hello@netforgedigital.com" },
  { icon: Clock, text: "Sun–Thu, 9am–6pm GST" },
];

export default function ContactInfo() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-8"
    >
      <motion.div variants={fadeUp} className="space-y-4">
        {INFO.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.text} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
              <Icon size={18} className="text-[var(--brand-cyan)] flex-shrink-0" weight={item.icon === WhatsappLogo ? "fill" : "regular"} />
              {item.text}
            </div>
          );
        })}
      </motion.div>

      <motion.div variants={fadeUp}>
        <GlassCard className="h-[400px] grid-blueprint flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-cyan)]/5 to-[var(--brand-violet)]/5" />
          <div className="relative z-10 text-center">
            <MapPin size={32} weight="fill" className="text-[var(--brand-cyan)] mx-auto mb-3" />
            <p className="text-[var(--text-secondary)] text-sm">Dubai, UAE</p>
          </div>
        </GlassCard>
      </motion.div>

      <motion.div variants={fadeUp} className="flex gap-4">
        {[InstagramLogo, LinkedinLogo, BehanceLogo].map((Icon, i) => (
          <a
            key={i}
            href="#"
            data-cursor-hover
            className="glass-card w-11 h-11 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] hover:border-[var(--brand-cyan)]/40 transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
}
