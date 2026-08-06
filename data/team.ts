import { getAboutPage as fetchAboutPage } from "../lib/queries/about";
import type { AboutDoc } from "../lib/queries/about";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: string;
};

export type Value = {
  emoji: string;
  title: string;
  description: string;
};

function resolveImageUrl(photo: AboutDoc["team"][number]["photo"]): string {
  return typeof photo === "string" ? photo : photo?.url ?? "";
}

function slugify(name: string): string {
  return name.toLowerCase().trim().replace(/\s+/g, "-");
}

/**
 * Was static `team` + `values` arrays — now sourced from the About global
 * (Payload local API), cached + tagged 'about'.
 *
 *   const { team, values, headline, subheadline } = await getAboutContent();
 *
 * Note: `photo` replaces the old `initials` field — it's a resolved Media
 * URL (from the `media` collection) rather than a string of initials.
 */
export async function getAboutContent(): Promise<{
  headline: string;
  subheadline?: string;
  manifestoParagraphs: string[];
  valuesHeading?: string;
  values: Value[];
  teamHeading?: string;
  team: TeamMember[];
}> {
  const doc = await fetchAboutPage();
  return {
    headline: doc.headline,
    subheadline: doc.subheadline,
    manifestoParagraphs: doc.manifestoParagraphs.map((p) => p.text),
    valuesHeading: doc.valuesHeading,
    values: doc.values,
    teamHeading: doc.teamHeading,
    team: doc.team.map((member) => ({
      id: slugify(member.name),
      name: member.name,
      role: member.role,
      photo: resolveImageUrl(member.photo),
    })),
  };
}
