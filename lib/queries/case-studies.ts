import { unstable_cache } from 'next/cache'
import { getPayloadClient } from '../payload'
import { CACHE_TAGS } from '../cacheTags'

export type CategoryDoc = {
  id: string
  title: string
}

export type CaseStudyDoc = {
  id: string
  title: string
  slug: string
  client?: string
  categories: CategoryDoc[]
  servicesProvided?: string
  resultHighlight: string
  coverImage: { url: string; alt?: string } | string
  accentColor: string
  featured: boolean
  gallery?: { image: { url: string; alt?: string } | string; caption?: string }[]
  content?: unknown // richText — render with your Lexical/Slate renderer on the frontend
  publishedDate: string
}

/** All case studies, most recent first. */
export const getCaseStudies = unstable_cache(
  async (): Promise<CaseStudyDoc[]> => {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'case-studies',
      depth: 2, // resolves coverImage + categories (and gallery images)
      limit: 100,
      sort: '-publishedDate',
    })
    return result.docs as unknown as CaseStudyDoc[]
  },
  ['case-studies-all'],
  { tags: [CACHE_TAGS.caseStudies] },
)

/** Only the featured case studies — powers the sticky horizontal-scroll hero on /work. */
export const getFeaturedCaseStudies = unstable_cache(
  async (): Promise<CaseStudyDoc[]> => {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'case-studies',
      depth: 2,
      limit: 100,
      sort: '-publishedDate',
      where: { featured: { equals: true } },
    })
    return result.docs as unknown as CaseStudyDoc[]
  },
  ['case-studies-featured'],
  { tags: [CACHE_TAGS.caseStudies] },
)

/** Non-featured case studies — powers the smaller Selected Projects grid on /work. */
export const getSelectedCaseStudies = unstable_cache(
  async (): Promise<CaseStudyDoc[]> => {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'case-studies',
      depth: 2,
      limit: 100,
      sort: '-publishedDate',
      where: { featured: { equals: false } },
    })
    return result.docs as unknown as CaseStudyDoc[]
  },
  ['case-studies-selected'],
  { tags: [CACHE_TAGS.caseStudies] },
)

/** Single case study by slug — powers /work/[slug]. */
export const getCaseStudyBySlug = unstable_cache(
  async (slug: string): Promise<CaseStudyDoc | null> => {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'case-studies',
      depth: 2,
      limit: 1,
      where: { slug: { equals: slug } },
    })
    return (result.docs[0] as unknown as CaseStudyDoc) ?? null
  },
  ['case-study-by-slug'],
  { tags: [CACHE_TAGS.caseStudies] },
)

/** All slugs — useful for generateStaticParams() on /work/[slug]. */
export const getCaseStudySlugs = unstable_cache(
  async (): Promise<string[]> => {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'case-studies',
      depth: 0,
      limit: 200,
      select: { slug: true } as never,
    })
    return result.docs.map((doc) => (doc as unknown as { slug: string }).slug)
  },
  ['case-study-slugs'],
  { tags: [CACHE_TAGS.caseStudies] },
)
