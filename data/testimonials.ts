export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "layla",
    name: "Layla Al-Rashidi",
    role: "Owner",
    company: "Bloom Beauty Lounge, Al Barsha",
    quote:
      "NetForge transformed our online presence. Within 3 months, our salon bookings doubled through Instagram alone.",
    rating: 5,
    avatar: "LA",
  },
  {
    id: "khalid",
    name: "Khalid Mansoor",
    role: "CEO",
    company: "Gulf Apex Tech",
    quote:
      "The ROI from their Google Ads campaign paid for 6 months of retainer in the first 30 days.",
    rating: 5,
    avatar: "KM",
  },
  {
    id: "sara",
    name: "Sara Younis",
    role: "Founder",
    company: "Zayara Boutique",
    quote:
      "Every deliverable was professional, on time, and actually worked. Rare to find in Dubai's agency scene.",
    rating: 5,
    avatar: "SY",
  },
];
