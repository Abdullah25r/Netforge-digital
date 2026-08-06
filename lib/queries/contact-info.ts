import { unstable_cache } from 'next/cache'
import { getPayloadClient } from '../payload'
import { CACHE_TAGS } from '../cacheTags'

export type SocialLinksDoc = {
  instagram?: string
  facebook?: string
  linkedin?: string
  youtube?: string
  x?: string
  tiktok?: string
  pinterest?: string
}

export type ContactInfoDoc = {
  pageHeadline: string
  pageSubheadline?: string
  locationText: string
  coordinates: { lat: number; lng: number }
  whatsappNumber: string
  email: string
  timings: string
  socialLinks: SocialLinksDoc
}

/** The /contact page's right-column content + site-wide contact details. */
export const getContactInfo = unstable_cache(
  async (): Promise<ContactInfoDoc> => {
    const payload = await getPayloadClient()
    const doc = await payload.findGlobal({
      slug: 'contact-info',
      depth: 0,
    })
    return doc as unknown as ContactInfoDoc
  },
  ['contact-info-global'],
  { tags: [CACHE_TAGS.contactInfo] },
)
