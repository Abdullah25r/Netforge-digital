"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  WhatsappLogo,
  EnvelopeSimple,
  Clock,
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  YoutubeLogo,
  XLogo,
  TiktokLogo,
  PinterestLogo,
} from "@phosphor-icons/react";
import GlassCard from "../ui/GlassCard";
import { fadeUp, staggerContainer } from "../../lib/utils";
import type { SocialLinksDoc } from "../../lib/queries/contact-info";

const SOCIAL_PLATFORMS: {
  key: keyof SocialLinksDoc;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
}[] = [
  { key: "instagram", icon: InstagramLogo, label: "Instagram" },
  { key: "facebook", icon: FacebookLogo, label: "Facebook" },
  { key: "linkedin", icon: LinkedinLogo, label: "LinkedIn" },
  { key: "youtube", icon: YoutubeLogo, label: "YouTube" },
  { key: "x", icon: XLogo, label: "X" },
  { key: "tiktok", icon: TiktokLogo, label: "TikTok" },
  { key: "pinterest", icon: PinterestLogo, label: "Pinterest" },
];

export default function ContactInfo({
  locationText,
  coordinates,
  whatsappNumber,
  email,
  timings,
  socialLinks,
}: {
  locationText: string;
  coordinates: { lat: number; lng: number };
  whatsappNumber: string;
  email: string;
  timings: string;
  socialLinks: SocialLinksDoc;
}) {
  const info = [
    { icon: MapPin, text: locationText },
    { icon: WhatsappLogo, text: `WhatsApp: ${whatsappNumber}` },
    { icon: EnvelopeSimple, text: email },
    { icon: Clock, text: timings },
  ];
  const activeSocialLinks = SOCIAL_PLATFORMS.filter(
    ({ key }) => socialLinks[key]?.trim().length,
  );
  const mapsHref = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-8"
    >
      <motion.div variants={fadeUp} className="space-y-4">
        {info.map((item) => {
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
            <p className="text-[var(--text-secondary)] text-sm">{locationText}</p>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs mt-2 text-[var(--brand-cyan)] hover:underline"
            >
              Open in Maps
            </a>
          </div>
        </GlassCard>
      </motion.div>

      <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
        {activeSocialLinks.map(({ key, icon: Icon, label }) => (
          <a
            key={key}
            href={socialLinks[key] as string}
            data-cursor-hover
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="glass-card w-11 h-11 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] hover:border-[var(--brand-cyan)]/40 transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
}
