export default function Logo({ size = 36 }: { size?: number }) {
  return (
     <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="50%" stopColor="#0f6b8a" />
        <stop offset="100%" stopColor="#00c8e0" />
      </linearGradient>
    </defs>
    {/* Circuit lines left */}
    <circle cx="12" cy="30" r="3" stroke="url(#logoGrad)" strokeWidth="2.5" fill="none" />
    <circle cx="12" cy="50" r="3" stroke="url(#logoGrad)" strokeWidth="2.5" fill="none" />
    <circle cx="12" cy="70" r="3" stroke="url(#logoGrad)" strokeWidth="2.5" fill="none" />
    <line x1="15" y1="30" x2="24" y2="30" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="15" y1="50" x2="24" y2="50" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="15" y1="70" x2="24" y2="70" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="24" y1="25" x2="24" y2="75" stroke="url(#logoGrad)" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="20" y="38" width="6" height="4" rx="1" stroke="url(#logoGrad)" strokeWidth="2" fill="none" />
    <rect x="20" y="56" width="6" height="4" rx="1" stroke="url(#logoGrad)" strokeWidth="2" fill="none" />
    {/* N shape */}
    <path d="M26 75 L26 25 L50 65 L50 25" stroke="url(#logoGrad)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* Arrow right */}
    <path d="M50 65 L50 25 L78 8" stroke="#00c8e0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <polyline points="64,8 78,8 78,22" stroke="#00c8e0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
  );
}
