import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  hoverGlow?: boolean;
};

export default function GlassCard({
  children,
  className,
  style,
  hoverGlow = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card relative overflow-hidden transition-all duration-300",
        hoverGlow && "hover:border-[var(--brand-cyan)]/40 hover:shadow-[0_0_40px_rgba(0,200,224,0.15)]",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
