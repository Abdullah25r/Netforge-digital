const BRANDS = [
  "AlMasdar Co",
  "PeakFit Studio",
  "Zayara Boutique",
  "Gulf Apex Tech",
  "Bloom Wellness",
  "TradeMark AE",
  "Noor Real Estate",
  "Velocity BD",
];

const TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "Figma",
  "Google Ads",
  "Meta Ads",
  "HubSpot",
  "Shopify",
];

export default function LogoMarquee() {
  return (
    <div className="space-y-8">
      <div className="overflow-hidden">
        <div className="flex gap-16 animate-marquee-left w-max">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span
              key={i}
              className="font-display font-bold text-2xl md:text-3xl text-[var(--text-primary)] opacity-40 hover:opacity-100 transition-opacity whitespace-nowrap"
              style={{ fontWeight: i % 3 === 0 ? 700 : 500 }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-16 animate-marquee-right w-max">
          {[...TECH, ...TECH].map((t, i) => (
            <span
              key={i}
              className="font-mono text-sm md:text-base text-[var(--text-secondary)] opacity-40 hover:opacity-100 hover:text-[var(--brand-cyan)] transition-all whitespace-nowrap uppercase tracking-widest"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
