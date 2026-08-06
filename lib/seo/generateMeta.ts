import type {
  GenerateDescription,
  GenerateImage,
  GenerateTitle,
  GenerateURL,
} from '@payloadcms/plugin-seo/types'

/**
 * Wires the SEO plugin's "auto-generate" buttons (title / description / image / URL)
 * to the actual content fields already defined on each collection and global —
 * so an editor can click "Generate" instead of retyping everything.
 *
 * Add these four to your seoPlugin() call in payload.config.ts:
 *
 *   seoPlugin({
 *     tabbedUI: true,
 *     collections: ['case-studies', 'services'],
 *     globals: ['about', 'contact-info'],
 *     uploadsCollection: 'media',
 *     generateTitle,
 *     generateDescription,
 *     generateImage,
 *     generateURL,
 *   })
 */

const SITE_NAME = 'NetForge Digital'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://netforgedigital.com'

/** Truncates to a safe meta-description length without cutting mid-word. */
function truncate(text: string, max = 160): string {
  if (!text || text.length <= max) return text ?? ''
  const cut = text.slice(0, max)
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`
}

/** Resolves an upload field that may be a raw ID or a populated Media doc. */
function resolveUploadId(value: unknown): string | number {
  if (!value) return ''
  if (typeof value === 'object' && value !== null && 'id' in value) {
    return (value as { id: string | number }).id
  }
  return value as string | number
}

export const generateTitle: GenerateTitle = ({ doc, collectionSlug, globalSlug }) => {
  switch (collectionSlug ?? globalSlug) {
    case 'case-studies':
      return `${doc?.title} — Case Study | ${SITE_NAME}`
    case 'services':
      return `${doc?.title} Services in Dubai | ${SITE_NAME}`
    case 'about':
      return `${doc?.headline ?? 'About Us'} | ${SITE_NAME}`
    case 'contact-info':
      return `${doc?.pageHeadline ?? 'Contact Us'} | ${SITE_NAME}`
    default:
      return SITE_NAME
  }
}

export const generateDescription: GenerateDescription = ({ doc, collectionSlug, globalSlug }) => {
  switch (collectionSlug ?? globalSlug) {
    case 'case-studies':
      return truncate(
        [doc?.resultHighlight, doc?.servicesProvided].filter(Boolean).join(' — '),
      )
    case 'services':
      return truncate(doc?.description ?? '')
    case 'about':
      return truncate(doc?.subheadline ?? '')
    case 'contact-info':
      return truncate(doc?.pageSubheadline ?? '')
    default:
      return ''
  }
}

export const generateImage: GenerateImage = ({ doc, collectionSlug }) => {
  switch (collectionSlug) {
    case 'case-studies':
      return resolveUploadId(doc?.coverImage)
    case 'services':
      return resolveUploadId(doc?.image)
    default:
      // About / ContactInfo globals have no image field to fall back on.
      return ''
  }
}

export const generateURL: GenerateURL = ({ doc, collectionSlug, globalSlug }) => {
  switch (collectionSlug ?? globalSlug) {
    case 'case-studies':
      return `${SITE_URL}/work/${doc?.slug}`
    case 'services':
      // /services renders every service as a tab on one page rather than
      // separate per-service routes — link to the matching tab anchor.
      return `${SITE_URL}/services#${doc?.slug}`
    case 'about':
      return `${SITE_URL}/about`
    case 'contact-info':
      return `${SITE_URL}/contact`
    default:
      return SITE_URL
  }
}
