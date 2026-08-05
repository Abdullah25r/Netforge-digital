"use client";

import { motion } from "framer-motion";

type Orb = {
  size: number;
  color: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
  duration?: number;
};

export default function AmbientOrbs({ orbs }: { orbs: Orb[] }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="ambient-orb"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            opacity: orb.opacity ?? 0.5,
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: orb.duration ?? 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
