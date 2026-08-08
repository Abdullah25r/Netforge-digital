import { getAboutPage as fetchAboutPage } from "../lib/queries/about";
import type { AboutDoc } from "../lib/queries/about";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  x?: string;
};

export type Value = {
  icon: string;
  title: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type WhatWeDoItem = string;

export type CtaFeature = {
  icon: "Target" | "RocketLaunch" | "UsersFour" | "ShieldCheck" | "Lightbulb";
  title: string;
  description: string;
};

function resolveImageUrl(image: { url: string; alt?: string } | string | undefined): string {
  if (!image) return "";
  return typeof image === "string" ? image : image.url ?? "";
}

function slugify(name: string): string {
  return name.toLowerCase().trim().replace(/\s+/g, "-");
}

export type AboutContent = {
  // Hero
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  heroImage: string;
  stats: Stat[];

  // Mission & Vision
  missionTitle?: string;
  missionText: string;
  visionTitle?: string;
  visionText: string;

  // Manifesto
  manifestoParagraphs: string[];

  // Values
  valuesHeading?: string;
  valuesSubheading?: string;
  values: Value[];

  // What We Do
  whatWeDoHeading?: string;
  whatWeDoSubheading?: string;
  whatWeDoImage?: string;
  whatWeDoItems: WhatWeDoItem[];

  // CTA duo
  ctaDuoHeading?: string;
  ctaDuoSubheading?: string;
  ctaDuoImage: string;
  ctaDuoFeatures: CtaFeature[];

  // Bottom CTA
  bottomCtaHeading?: string;
  bottomCtaSubheading?: string;
  bottomCtaButtonText?: string;
  bottomCtaButtonLink?: string;

  // Team
  teamHeading?: string;
  team: TeamMember[];
};

/**
 * Was static `team` + `values` arrays — now sourced from the About global
 * (Payload local API), cached + tagged 'about'.
 *
 *   const about = await getAboutContent();
 *
 * Note: `values[].icon` and `team[].photo` are resolved Media URLs (from the
 * `media` collection) — `icon` replaces the old `emoji` field, and `photo`
 * replaces the old `initials` field.
 */
export async function getAboutContent(): Promise<AboutContent> {
  const doc: AboutDoc = await fetchAboutPage();

  return {
    eyebrow: doc.eyebrow,
    headline: doc.headline,
    subheadline: doc.subheadline,
    heroImage: resolveImageUrl(doc.heroImage),
    stats: doc.stats ?? [],

    missionTitle: doc.missionTitle,
    missionText: doc.missionText,
    visionTitle: doc.visionTitle,
    visionText: doc.visionText,

    manifestoParagraphs: (doc.manifestoParagraphs ?? []).map((p) => p.text),

    valuesHeading: doc.valuesHeading,
    valuesSubheading: doc.valuesSubheading,
    values: (doc.values ?? []).map((v) => ({
      icon: resolveImageUrl(v.icon),
      title: v.title,
      description: v.description,
    })),

    whatWeDoHeading: doc.whatWeDoHeading,
    whatWeDoSubheading: doc.whatWeDoSubheading,
    whatWeDoImage: resolveImageUrl(doc.whatWeDoImage),
    whatWeDoItems: (doc.whatWeDoItems ?? []).map((i) => i.item),

    ctaDuoHeading: doc.ctaDuoHeading,
    ctaDuoSubheading: doc.ctaDuoSubheading,
    ctaDuoImage: resolveImageUrl(doc.ctaDuoImage),
    ctaDuoFeatures: doc.ctaDuoFeatures ?? [],

    bottomCtaHeading: doc.bottomCtaHeading,
    bottomCtaSubheading: doc.bottomCtaSubheading,
    bottomCtaButtonText: doc.bottomCtaButtonText,
    bottomCtaButtonLink: doc.bottomCtaButtonLink,

    teamHeading: doc.teamHeading,
    team: (doc.team ?? []).map((member) => ({
      id: slugify(member.name),
      name: member.name,
      role: member.role,
      photo: resolveImageUrl(member.photo),
      linkedin: member.linkedin,
      x: member.x,
    })),
  };
}
