export type TeamMember = {
  id: string;
  name: string;
  role: string;
  initials: string;
};

export const team: TeamMember[] = [
  { id: "abdullah", name: "Abdullah Al-Farsi", role: "Founder & Lead Strategist", initials: "AA" },
  { id: "lina", name: "Lina Khoury", role: "Creative Director", initials: "LK" },
  { id: "omar", name: "Omar Siddiqui", role: "Lead Developer", initials: "OS" },
  { id: "fatima", name: "Fatima Al-Zaabi", role: "Performance Marketing Manager", initials: "FA" },
];

export const values = [
  {
    emoji: "🎯",
    title: "Results First",
    description: "We measure everything. Vanity metrics stay out.",
  },
  {
    emoji: "🔬",
    title: "Technical Depth",
    description: "We actually know what we're building, not just selling it.",
  },
  {
    emoji: "🤝",
    title: "Client Transparency",
    description: "Monthly reports, honest calls, real numbers.",
  },
  {
    emoji: "⚡",
    title: "Speed Without Compromise",
    description: "Fast execution. Zero shortcuts on quality.",
  },
];
