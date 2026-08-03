"use client";

import { motion } from "framer-motion";
import {
  Code,
  ChartLineUp,
  PaintBrush,
  InstagramLogo,
  ShoppingCart,
  MagnifyingGlass,
  type IconProps,
} from "@phosphor-icons/react";
import { services } from "@/data/services";
import { fadeUp, staggerContainer } from "@/lib/utils";

const ICONS: Record<string, React.ComponentType<IconProps>> = {
  Code,
  ChartLineUp,
  PaintBrush,
  InstagramLogo,
  ShoppingCart,
  MagnifyingGlass,
};

const LAYOUT: Record<string, string> = {
  web: "lg:col-span-3 lg:row-span-2",
  marketing: "lg:col-span-2 lg:row-span-2",
  brand: "lg:col-span-1 lg:row-span-1",
  social: "lg:col-span-1 lg:row-span-1",
  ecommerce: "lg:col-span-2 lg:row-span-2",
  analytics: "lg:col-span-4 lg:row-span-1",
};

export default function ServicesGrid() {
  return (
    <section className="relative section-pad bg-[var(--bg-void)]">
      <div className="container-xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <p className="eyebrow mb-4">What We Do</p>
          <h2 className="font-display font-bold" style={{ fontSize: "var(--text-xl)" }}>
            What We Build & Grow
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[160px] gap-5"
        >
          {services.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className={`glass-card group relative p-7 overflow-hidden ${LAYOUT[service.id]}`}
                data-cursor-hover
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(145deg, ${service.accent}18, transparent 70%)`,
                  }}
                />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${service.accent}1a` }}
                    >
                      <Icon size={22} weight="duotone" style={{ color: service.accent }} />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{}}
                    className="text-sm font-mono mt-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    style={{ color: service.accent }}
                  >
                    {service.reveal}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
