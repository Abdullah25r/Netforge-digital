// src/lib/queries/about.ts
import { unstable_cache } from 'next/cache'
import { getPayloadClient } from '../payload'
import { CACHE_TAGS } from '../cacheTags'

type MediaRef = { url: string; alt?: string } | string

export type AboutDoc = {
  // Hero
  eyebrow?: string
  headline: string
  subheadline?: string
  heroImage: MediaRef
  stats: { value: string; label: string }[]

  // Mission & Vision
  missionTitle?: string
  missionText: string
  visionTitle?: string
  visionText: string

  // Manifesto
  manifestoParagraphs: { text: string }[]

  // Values
  valuesHeading?: string
  valuesSubheading?: string
  values: { icon: MediaRef; title: string; description: string }[]

  // What We Do
  whatWeDoHeading?: string
  whatWeDoSubheading?: string
  whatWeDoImage?: MediaRef
  whatWeDoItems: { item: string }[]

  // CTA duo ("Let's Build Together")
  ctaDuoHeading?: string
  ctaDuoSubheading?: string
  ctaDuoImage: MediaRef
  ctaDuoFeatures: {
    icon: 'Target' | 'RocketLaunch' | 'UsersFour' | 'ShieldCheck' | 'Lightbulb'
    title: string
    description: string
  }[]

  // Bottom CTA band
  bottomCtaHeading?: string
  bottomCtaSubheading?: string
  bottomCtaButtonText?: string
  bottomCtaButtonLink?: string

  // Team
  teamHeading?: string
  team: {
    name: string
    role: string
    photo: MediaRef
    linkedin?: string
    x?: string
  }[]
}

/**
 * The /about page content — hero, mission/vision, manifesto, values,
 * what-we-do, CTA duo, bottom CTA, and team (with social links).
 * Tagged 'about' — revalidated automatically whenever the About global's
 * afterChange hook fires.
 */
export const getAboutPage = unstable_cache(
  async (): Promise<AboutDoc> => {
    const payload = await getPayloadClient()
    const doc = await payload.findGlobal({
      slug: 'about',
      depth: 1, // resolves all upload relations (heroImage, values[].icon, whatWeDoImage, ctaDuoImage, team[].photo)
    })
    return doc as unknown as AboutDoc
  },
  ['about-global'],
  { tags: [CACHE_TAGS.about] },
)