import {
  getCaseStudies as fetchCaseStudies,
  getFeaturedCaseStudies as fetchFeaturedCaseStudies,
  getSelectedCaseStudies as fetchSelectedCaseStudies,
  getCaseStudyBySlug as fetchCaseStudyBySlug,
} from "../lib/queries/case-studies";
import type { CaseStudyDoc } from "../lib/queries/case-studies";

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

export type SmallProject = {
  id: string;
  title: string;
  category: string;
  image: string;
};

function resolveImageUrl(
  image: CaseStudyDoc["coverImage"]
): string {
  return typeof image === "string" ? image : image?.url ?? "";
}

/** Builds a two-stop diagonal gradient from a single accent hex color. */
function gradientFromAccent(accent: string): string {
  return `linear-gradient(135deg, ${accent}, ${accent}cc)`;
}

function mapCaseStudy(doc: CaseStudyDoc): CaseStudy {
  const tags = doc.categories.map((c) => c.title);
  return {
    id: doc.slug,
    title: doc.title,
    category: doc.client ?? tags[0] ?? "",
    services: doc.servicesProvided ?? "",
    result: doc.resultHighlight,
    image: resolveImageUrl(doc.coverImage),
    accent: doc.accentColor,
    gradient: gradientFromAccent(doc.accentColor),
    tags,
  };
}

function mapSmallProject(doc: CaseStudyDoc): SmallProject {
  return {
    id: doc.slug,
    title: doc.title,
    category: doc.categories[0]?.title ?? "",
    image: resolveImageUrl(doc.coverImage),
  };
}

/** All case studies, most recent first. */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  const docs = await fetchCaseStudies();
  return docs.map(mapCaseStudy);
}

/** Featured only — powers the sticky horizontal-scroll section on /work. */
export async function getFeaturedCaseStudies(): Promise<CaseStudy[]> {
  const docs = await fetchFeaturedCaseStudies();
  return docs.map(mapCaseStudy);
}

/** Non-featured — powers the smaller Selected Projects grid on /work. */
export async function getSmallProjects(): Promise<SmallProject[]> {
  const docs = await fetchSelectedCaseStudies();
  return docs.map(mapSmallProject);
}

/** Single case study by slug, with full detail fields (gallery, content). */
export async function getCaseStudyBySlug(slug: string) {
  return fetchCaseStudyBySlug(slug);
}
