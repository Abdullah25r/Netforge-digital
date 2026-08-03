export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  services: string;
  result: string;
  image: string;
  accent: string;
  gradient: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "bloom-beauty",
    title: "Bloom Beauty Lounge",
    category: "Ladies salon, Al Barsha",
    services: "Web + Instagram + Google Ads",
    result: "+200% bookings in 90 days",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
    accent: "#ff6b9d",
    gradient: "linear-gradient(135deg, #ff6b9d, #ff9a8b)",
    tags: ["Web Dev", "Marketing", "Social Media"],
  },
  {
    id: "gulf-apex",
    title: "Gulf Apex Tech",
    category: "B2B SaaS",
    services: "SEO + Content + Google Ads",
    result: "+380% organic traffic",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    accent: "#00c8e0",
    gradient: "linear-gradient(135deg, #00c8e0, #0080ff)",
    tags: ["Marketing", "Analytics"],
  },
  {
    id: "zayara",
    title: "Zayara Boutique",
    category: "Fashion e-commerce",
    services: "Shopify + Meta Ads",
    result: "3.2× ROAS",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
    accent: "#6c3fff",
    gradient: "linear-gradient(135deg, #6c3fff, #0080ff)",
    tags: ["E-Commerce", "Marketing"],
  },
  {
    id: "noor-real-estate",
    title: "Noor Real Estate",
    category: "Property listings",
    services: "Web + SEO",
    result: "#1 Google for 14 keywords",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    accent: "#0080ff",
    gradient: "linear-gradient(135deg, #0080ff, #00c8e0)",
    tags: ["Web Dev", "Analytics"],
  },
];

export const smallProjects = [
  {
    id: "peakfit",
    title: "PeakFit Studio",
    category: "Web Dev",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
  },
  {
    id: "almasdar",
    title: "AlMasdar Co",
    category: "Brand",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
  {
    id: "trademark-ae",
    title: "TradeMark AE",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
  },
  {
    id: "velocity-bd",
    title: "Velocity BD",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&q=80",
  },
  {
    id: "bloom-wellness",
    title: "Bloom Wellness",
    category: "Web Dev",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  },
  {
    id: "gulf-apex-brand",
    title: "Gulf Apex Tech",
    category: "Brand",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  },
];
