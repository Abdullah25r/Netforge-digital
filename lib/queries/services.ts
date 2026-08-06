import { unstable_cache } from 'next/cache'
import { getPayloadClient } from '../payload'
import { CACHE_TAGS } from '../cacheTags'

export type ServiceDoc = {
  id: string
  title: string
  slug: string
  icon: string
  accentColor: string
  description: string
  bentoReveal?: string
  features: { feature: string }[]
  priceFrom: string
  image: { url: string; alt?: string } | string
  featuredOnHome: boolean
  bentoSize: 'large' | 'tall' | 'wide' | 'small'
  sortOrder: number
}

/**
 * All services, sorted for display order.
 * Tagged with CACHE_TAGS.services — revalidated automatically whenever the
 * Services collection's afterChange/afterDelete hooks fire.
 */
export const getServices = unstable_cache(
  async (): Promise<ServiceDoc[]> => {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'services',
      depth: 1, // resolves `image` to the Media doc instead of just an ID
      limit: 100,
      sort: 'sortOrder',
    })
    return result.docs as unknown as ServiceDoc[]
  },
  ['services-all'],
  { tags: [CACHE_TAGS.services] },
)

/** Only the services flagged to appear in the home page bento grid. */
export const getFeaturedServices = unstable_cache(
  async (): Promise<ServiceDoc[]> => {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'services',
      depth: 1,
      limit: 100,
      sort: 'sortOrder',
      where: { featuredOnHome: { equals: true } },
    })
    return result.docs as unknown as ServiceDoc[]
  },
  ['services-featured'],
  { tags: [CACHE_TAGS.services] },
)

/** Single service by slug — used for the /services tab deep-link if needed. */
export const getServiceBySlug = unstable_cache(
  async (slug: string): Promise<ServiceDoc | null> => {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'services',
      depth: 1,
      limit: 1,
      where: { slug: { equals: slug } },
    })
    return (result.docs[0] as unknown as ServiceDoc) ?? null
  },
  ['service-by-slug'],
  { tags: [CACHE_TAGS.services] },
)
