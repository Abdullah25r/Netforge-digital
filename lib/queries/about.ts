import { unstable_cache } from 'next/cache'
import { getPayloadClient } from '../payload'
import { CACHE_TAGS } from '../cacheTags'

export type AboutDoc = {
  headline: string
  subheadline?: string
  manifestoParagraphs: { text: string }[]
  valuesHeading?: string
  values: { emoji: string; title: string; description: string }[]
  teamHeading?: string
  team: {
    name: string
    role: string
    photo: { url: string; alt?: string } | string
  }[]
}

/** The /about page content — headline, manifesto, values, team. */
export const getAboutPage = unstable_cache(
  async (): Promise<AboutDoc> => {
    const payload = await getPayloadClient()
    const doc = await payload.findGlobal({
      slug: 'about',
      depth: 1, // resolves team[].photo to the Media doc
    })
    return doc as unknown as AboutDoc
  },
  ['about-global'],
  { tags: [CACHE_TAGS.about] },
)
