import type { Field } from 'payload'

const platform = (
  name: string,
  label: string,
): Field => ({
  name,
  type: 'text',
  label,
  admin: {
    description: `Full URL, e.g. https://${name}.com/netforgedigital. Leave blank to hide.`,
  },
})

/**
 * Reusable "Social Links" field group.
 * Drop this into any collection or global that needs social links —
 * Contact info, site-wide Footer settings, About page, etc.
 *
 * Usage:
 *   import { socialLinksField } from '@/fields/socialLinks'
 *   fields: [ ...otherFields, socialLinksField() ]
 *
 * Every platform is optional so a page only shows the icons that are populated —
 * handle that filtering on the frontend (see lib/getActiveSocialLinks.ts pattern).
 *
 * Pass a `fieldName` if you need more than one instance on the same document
 * (Payload requires sibling field names to be unique).
 */
export const socialLinksField = (fieldName = 'socialLinks'): Field => ({
  name: fieldName,
  type: 'group',
  label: 'Social Links',
  admin: {
    description: 'Only filled-in platforms will render on the frontend.',
  },
  fields: [
    platform('instagram', 'Instagram'),
    platform('facebook', 'Facebook'),
    platform('linkedin', 'LinkedIn'),
    platform('youtube', 'YouTube'),
    platform('x', 'X (Twitter)'),
    platform('tiktok', 'TikTok'),
    platform('pinterest', 'Pinterest'),
  ],
})
