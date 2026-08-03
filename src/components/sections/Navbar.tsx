"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import Logo from "@/components/ui/Logo";
import MagneticButton from "@/components/ui/MagneticButton";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (mobileOpen) setMobileOpen(false);
  }

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          backdropFilter: scrolled ? "blur(20px)" : "none",
          background: scrolled ? "rgba(3,3,8,0.6)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--glass-border)" : "1px solid transparent",
        }}
      >
        <div className="container-xl flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2.5" data-cursor-hover>
            <Logo size={32} />
            <span className="font-display font-bold text-md tracking-tight">
              NETFORGE
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 relative">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-cursor-hover
                  className="relative text-sm font-medium py-2 transition-colors"
                  style={{
                    color: active ? "var(--brand-cyan)" : "var(--text-secondary)",
                  }}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-[1.5px]"
                      style={{ background: "var(--brand-cyan)" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <MagneticButton href="/contact" className="!py-2.5 !px-6 text-sm">
              Start Project
            </MagneticButton>
          </div>

          <button
            className="md:hidden text-[var(--text-primary)]"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <List size={28} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[var(--bg-void)] md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between h-20 container-xl">
              <Link href="/" className="flex items-center gap-2.5">
                <Logo size={32} />
                <span className="font-display font-bold text-lg">NETFORGE</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col items-start gap-2 container-xl mt-8">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl font-display font-semibold py-3 block"
                    style={{
                      color:
                        pathname === link.href
                          ? "var(--brand-cyan)"
                          : "var(--text-primary)",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8">
                <MagneticButton href="/contact">Start Project</MagneticButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
