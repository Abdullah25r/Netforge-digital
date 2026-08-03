"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "ghost";
  type?: "button" | "submit";
};

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "primary",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [pressed, setPressed] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const radius = 80;
    if (dist < radius) {
      const pull = Math.min(8, (radius - dist) / radius * 8);
      setPos({ x: (dx / dist) * pull || 0, y: (dy / dist) * pull || 0 });
    }
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
    setPressed(false);
  };

  const Comp = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      animate={{ x: pos.x, y: pos.y, scale: pressed ? 0.96 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15, mass: 0.5 }}
      className="inline-block"
      data-cursor-button
    >
      <Comp
        href={href}
        type={href ? undefined : type}
        onClick={onClick}
        className={cn(
          variant === "primary" ? "btn-primary" : "btn-ghost",
          "inline-flex items-center gap-2 select-none",
          className
        )}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
