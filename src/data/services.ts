export type Service = {
  id: string;
  title: string;
  icon: string;
  accent: string;
  description: string;
  reveal: string;
  price: string;
  features: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: "web",
    title: "Web Development",
    icon: "Code",
    accent: "#00c8e0",
    description:
      "We architect fast, scalable, conversion-focused websites using Next.js, TypeScript, and modern stacks.",
    reveal: "Avg. 94 PageSpeed score",
    price: "AED 3,500/mo",
    features: [
      "Next.js & TypeScript builds",
      "Core Web Vitals optimisation",
      "Headless CMS integration",
      "Ongoing performance monitoring",
    ],
    image:
      "https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=1200&q=80",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: "ChartLineUp",
    accent: "#0080ff",
    description:
      "SEO, Google Ads, and Meta Ads campaigns engineered around measurable pipeline and revenue growth.",
    reveal: "+280% avg. ROI",
    price: "AED 4,500/mo",
    features: [
      "Full-funnel Google & Meta Ads",
      "Technical & content SEO",
      "Conversion rate optimisation",
      "Monthly transparent reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
  {
    id: "brand",
    title: "Brand Identity",
    icon: "PaintBrush",
    accent: "#6c3fff",
    description:
      "Distinct visual systems — logo, palette, type, and voice — built to hold up across every touchpoint.",
    reveal: "Full brand system in 3 weeks",
    price: "AED 6,000 one-time",
    features: [
      "Logo & visual identity system",
      "Brand guidelines document",
      "Voice & messaging framework",
      "Collateral & social templates",
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
  },
  {
    id: "social",
    title: "Social Media",
    icon: "InstagramLogo",
    accent: "#00c8e0",
    description:
      "Content strategy, production, and community management that turns followers into customers.",
    reveal: "3x avg. engagement lift",
    price: "AED 3,000/mo",
    features: [
      "Content calendar & production",
      "Community management",
      "Influencer collaboration",
      "Platform-native creative",
    ],
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&q=80",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    icon: "ShoppingCart",
    accent: "#0080ff",
    description:
      "Shopify builds and optimisation tuned for basket size, checkout speed, and repeat purchase rate.",
    reveal: "3.2x avg. ROAS",
    price: "AED 5,000/mo",
    features: [
      "Shopify build & migration",
      "Checkout & CRO optimisation",
      "Product feed & Meta catalog",
      "Retention & email flows",
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
  },
  {
    id: "analytics",
    title: "Analytics & SEO",
    icon: "MagnifyingGlass",
    accent: "#6c3fff",
    description:
      "Technical audits, structured data, and reporting dashboards that make growth measurable, not guessed.",
    reveal: "#1 rankings for 40+ keywords",
    price: "AED 2,800/mo",
    features: [
      "Technical SEO audits",
      "Structured data & schema",
      "Custom reporting dashboards",
      "Keyword & competitor tracking",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },
];
