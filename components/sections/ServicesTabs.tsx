"use client";

import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import {
  Code,
  ChartLineUp,
  PaintBrush,
  InstagramLogo,
  ShoppingCart,
  CheckCircle,
  type IconProps,
} from "@phosphor-icons/react";
import type { Service } from "../../data/services";
import MagneticButton from "../../components/ui/MagneticButton";

const ICONS: Record<string, React.ComponentType<IconProps>> = {
  Code,
  ChartLineUp,
  PaintBrush,
  InstagramLogo,
  ShoppingCart,
};

export default function ServicesTabs({ services }: { services: Service[] }) {
  if (services.length === 0) return null;

  return (
    <section className="section-pad bg-[var(--bg-void)]">
      <div className="container-xl">
        <Tabs.Root defaultValue={services[0].id}>
          <Tabs.List className="flex flex-wrap gap-2 mb-14 border-b border-[var(--glass-border)] pb-1">
            {services.map((s) => (
              <Tabs.Trigger
                key={s.id}
                value={s.id}
                data-cursor-hover
                className="px-5 py-3 text-sm font-medium text-[var(--text-secondary)] data-[state=active]:text-[var(--brand-cyan)] relative transition-colors outline-none"
              >
                {s.title}
                <span className="absolute left-3 right-3 -bottom-[5px] h-[2px] bg-[var(--brand-cyan)] scale-x-0 data-[state=active]:scale-x-100 transition-transform" />
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {services.map((s) => {
            const Icon = ICONS[s.icon] ?? Code;
            return (
              <Tabs.Content key={s.id} value={s.id} className="outline-none">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                      style={{ background: `${s.accent}1a` }}
                    >
                      <Icon size={28} weight="duotone" style={{ color: s.accent }} />
                    </div>
                    <h3 className="font-display font-bold text-3xl mb-4">{s.title}</h3>
                    <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                      {s.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm">
                          <CheckCircle size={18} weight="fill" className="text-[var(--brand-cyan)] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center gap-6">
                      <span
                        className="glass-card px-4 py-2 text-sm font-mono"
                        style={{ color: s.accent }}
                      >
                        Starting from {s.price}
                      </span>
                      <MagneticButton href="/contact" className="!py-3 !px-6 text-sm">
                        Get a Quote for This Service
                      </MagneticButton>
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(180deg, transparent 40%, ${s.accent}22 100%)`,
                      }}
                    />
                  </div>
                </div>
              </Tabs.Content>
            );
          })}
        </Tabs.Root>
      </div>
    </section>
  );
}
