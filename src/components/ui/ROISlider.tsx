"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import GlassCard from "./GlassCard";
import MagneticButton from "./MagneticButton";

const GOALS = ["Website Traffic", "Lead Generation", "E-Commerce Sales"];

export default function ROISlider() {
  const [visitors, setVisitors] = useState(5000);
  const [conversion, setConversion] = useState(2.5);
  const [orderValue, setOrderValue] = useState(1500);
  const [goal, setGoal] = useState(GOALS[1]);

  const results = useMemo(() => {
    const currentConversions = visitors * (conversion / 100);
    const projectedVisitors = visitors * 3.8; // +280% growth
    const projectedConversions = projectedVisitors * (conversion / 100);
    const projectedRevenue = projectedConversions * orderValue;
    const newLeads = Math.max(0, Math.round(projectedConversions - currentConversions));

    return {
      projectedRevenue: Math.round(projectedRevenue),
      trafficIncrease: Math.round(projectedVisitors - visitors),
      newLeads,
    };
  }, [visitors, conversion, orderValue]);

  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      {/* Controls */}
      <div className="space-y-8">
        <SliderControl
          label="Your Current Monthly Website Visitors"
          value={visitors}
          min={500}
          max={50000}
          step={100}
          display={visitors.toLocaleString()}
          onChange={setVisitors}
        />
        <SliderControl
          label="Your Current Conversion Rate (%)"
          value={conversion}
          min={0.5}
          max={10}
          step={0.1}
          display={`${conversion.toFixed(1)}%`}
          onChange={setConversion}
        />
        <SliderControl
          label="Average Order / Lead Value (AED)"
          value={orderValue}
          min={100}
          max={10000}
          step={50}
          display={`AED ${orderValue.toLocaleString()}`}
          onChange={setOrderValue}
        />

        <div>
          <label className="text-sm text-[var(--text-secondary)] mb-3 block">
            Primary Goal
          </label>
          <div className="flex flex-wrap gap-2">
            {GOALS.map((g) => (
              <button
                key={g}
                onClick={() => setGoal(g)}
                data-cursor-hover
                className={`px-4 py-2 rounded-full text-sm border transition-all ${
                  goal === g
                    ? "border-[var(--brand-cyan)] bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)]"
                    : "border-[var(--glass-border)] text-[var(--text-secondary)] hover:border-[var(--brand-cyan)]/40"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <GlassCard
        className="p-8 lg:p-10"
        style={{ boxShadow: "var(--glow-cyan)" }}
      >
        <p className="eyebrow mb-6">Projected Results</p>
        <div className="space-y-6">
          <ResultRow label="Projected Monthly Revenue" value={`AED ${results.projectedRevenue.toLocaleString()}`} />
          <ResultRow label="Traffic Increase (at 280% growth)" value={`+${results.trafficIncrease.toLocaleString()}`} />
          <ResultRow label={goal === "E-Commerce Sales" ? "Estimated New Sales" : "Estimated New Leads"} value={`+${results.newLeads.toLocaleString()}`} />
        </div>
        <div className="mt-8">
          <MagneticButton href="/contact" className="w-full justify-center">
            Get Your Custom Strategy <ArrowRight size={18} weight="bold" />
          </MagneticButton>
        </div>
        <p className="text-xs text-[var(--text-muted)] mt-4">
          *Based on average results across our client portfolio
        </p>
      </GlassCard>
    </div>
  );
}

function SliderControl({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  const percent = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex justify-between items-baseline mb-3">
        <label className="text-sm text-[var(--text-secondary)]">{label}</label>
        <span className="font-mono text-[var(--brand-cyan)] text-sm">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[var(--brand-cyan)]"
        style={{
          background: `linear-gradient(to right, var(--brand-cyan) ${percent}%, rgba(255,255,255,0.08) ${percent}%)`,
        }}
      />
    </div>
  );
}

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-[var(--glass-border)] pt-4 first:border-t-0 first:pt-0">
      <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-1">
        {label}
      </p>
      <AnimatePresence mode="wait">
        <motion.p
          key={value}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="text-3xl md:text-4xl font-display font-semibold text-gradient-clip"
        >
          {value}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
