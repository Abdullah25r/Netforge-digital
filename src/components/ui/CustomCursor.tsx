"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [isTouch] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: none)").matches
  );
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { damping: 25, stiffness: 300, mass: 0.4 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 300, mass: 0.4 });

  useEffect(() => {
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor-hover]"
      );
      const buttonEl = target.closest("[data-cursor-button]");
      setIsHovering(!!interactive);
      setIsButton(!!buttonEl);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isTouch || !visible) return null;

  return (
    <div className="custom-cursor-el">
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: isHovering ? "#6c3fff" : "#00c8e0",
        }}
        animate={{
          width: isHovering ? 16 : 8,
          height: isHovering ? 16 : 8,
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9997] flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: "rgba(0,200,224,0.5)",
        }}
        animate={{
          width: isHovering ? 56 : 40,
          height: isHovering ? 56 : 40,
          opacity: isHovering && !isButton ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {isButton && (
          <span className="text-[9px] tracking-widest uppercase text-[var(--brand-cyan)] font-display font-semibold">
            View
          </span>
        )}
      </motion.div>
    </div>
  );
}
