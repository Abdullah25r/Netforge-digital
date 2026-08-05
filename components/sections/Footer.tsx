"use client";

import { useState } from "react";
import Link from "next/link";
import {
  InstagramLogo,
  LinkedinLogo,
  BehanceLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Logo from "../ui/Logo";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative bg-[var(--bg-void)] pt-32 pb-10 clip-chevron-up">
      <div className="container-xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4" data-cursor-hover>
              <Logo size={36} />
              <span className="font-display font-bold text-lg">NETFORGE</span>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] max-w-xs mb-2">
              We forge digital experiences that drive real growth.
            </p>
            <p className="text-sm text-[var(--text-muted)] mb-6">Dubai, UAE</p>
            <div className="flex gap-4">
              <a href="#" data-cursor-hover className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                <InstagramLogo size={20} />
              </a>
              <a href="#" data-cursor-hover className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                <LinkedinLogo size={20} />
              </a>
              <a href="#" data-cursor-hover className="text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors">
                <BehanceLogo size={20} />
              </a>
            </div>
          </div>

          <FooterCol
            title="Services"
            links={[
              { label: "Web Development", href: "/services" },
              { label: "Digital Marketing", href: "/services" },
              { label: "Brand Identity", href: "/services" },
              { label: "E-Commerce", href: "/services" },
            ]}
          />

          <FooterCol
            title="Company"
            links={[
              { label: "About", href: "/about" },
              { label: "Work", href: "/work" },
              { label: "Blog", href: "#" },
              { label: "Careers", href: "#" },
            ]}
          />

          <div>
            <p className="font-display font-semibold text-sm uppercase tracking-widest text-[var(--text-secondary)] mb-4">
              Newsletter
            </p>
            {subscribed ? (
              <p className="text-[var(--brand-cyan)] text-sm mb-6">
                Subscribed! Thanks for joining.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="flex mb-6"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="glass-card !rounded-r-none flex-1 min-w-0 px-4 py-2.5 text-sm bg-transparent border-r-0 outline-none focus:border-[var(--brand-cyan)]/50"
                />
                <button
                  type="submit"
                  data-cursor-hover
                  className="px-4 py-2.5 text-sm font-semibold rounded-r-lg"
                  style={{ background: "linear-gradient(135deg, #00c8e0, #0080ff)", color: "#030308" }}
                >
                  Join
                </button>
              </form>
            )}
            <a
              href="https://wa.me/971500000000"
              data-cursor-hover
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[#25D366] transition-colors"
            >
              <WhatsappLogo size={20} weight="fill" className="text-[#25D366]" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--glass-border)] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--text-muted)]">
          <p>© 2025 NetForge Digital. All rights reserved. Built in Dubai.</p>
          <div className="flex gap-6">
            <a href="#" data-cursor-hover className="hover:text-[var(--text-secondary)]">Privacy Policy</a>
            <a href="#" data-cursor-hover className="hover:text-[var(--text-secondary)]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="font-display font-semibold text-sm uppercase tracking-widest text-[var(--text-secondary)] mb-4">
        {title}
      </p>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              data-cursor-hover
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--brand-cyan)] transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
