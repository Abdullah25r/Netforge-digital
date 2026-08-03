"use client";

import { motion } from "framer-motion";
import { LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
import GlassCard from "@/components/ui/GlassCard";
import { team } from "@/data/team";
import { fadeUp, staggerContainer } from "@/lib/utils";

export default function TeamSection() {
  return (
    <section className="section-pad bg-[var(--bg-elevated)]">
      <div className="container-xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14 text-center"
        >
          <p className="eyebrow mb-4">The Team</p>
          <h2 className="font-display font-bold" style={{ fontSize: "var(--text-xl)" }}>
            Meet the People Behind the Work
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div key={member.id} variants={fadeUp}>
              <GlassCard className="group p-6 text-center transition-transform duration-300 hover:-translate-y-2" hoverGlow>
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center font-display font-bold text-2xl"
                  style={{ background: "linear-gradient(135deg, #00c8e0, #6c3fff)", color: "#030308" }}
                >
                  {member.initials}
                </div>
                <h3 className="font-display font-semibold">{member.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{member.role}</p>
                <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" data-cursor-hover className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)]">
                    <LinkedinLogo size={18} />
                  </a>
                  <a href="#" data-cursor-hover className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)]">
                    <TwitterLogo size={18} />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
