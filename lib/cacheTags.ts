/**
 * Single source of truth for cache tags.
 * These MUST match the `tag` values passed to revalidateCollection/revalidateGlobal
 * in each collection/global's afterChange hook, or revalidateTag() calls there
 * will silently miss the tags used by unstable_cache() here.
 *
 *   ContactSubmissions   -> no tag (write-only, nothing reads it back on the frontend)
 *   ContactInfo (global) -> CACHE_TAGS.contactInfo   ('contact-info')
 *   About (global)       -> CACHE_TAGS.about         ('about')
 *   CaseStudies          -> CACHE_TAGS.caseStudies   ('case-studies')
 *   Services             -> CACHE_TAGS.services      ('services')
 */
export const CACHE_TAGS = {
  services: 'services',
  caseStudies: 'case-studies',
  about: 'about',
  contactInfo: 'contact-info',
} as const
