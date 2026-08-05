import type { GlobalConfig } from 'payload'
import { socialLinksField } from '../fields/socialLinks'
import { revalidateGlobal } from '../hooks/revalidatePath'

export const ContactInfo: GlobalConfig = {
  slug: 'contact-info',
  label: 'Contact Info Page',
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  admin: {
    description: 'Site-wide contact details shown on the /contact page (right column) and footer.',
  },
  fields: [
    {
      name: 'pageHeadline',
      type: 'text',
      required: true,
      label: 'Page Headline',
      defaultValue: "Let's Talk About Your Project",
    },
    {
      name: 'pageSubheadline',
      type: 'textarea',
      label: 'Page Subheadline',
      defaultValue:
        "Fill out the form and we'll get back to you within 24 hours — no automated replies, no sales scripts.",
    },
    {
      name: 'locationText',
      type: 'text',
      required: true,
      label: 'Location (display text)',
      defaultValue: 'Al Barsha 1, Dubai, UAE',
    },
    {
      name: 'coordinates',
      type: 'group',
      label: 'Location Coordinates',
      admin: {
        description: 'Used to plot the map / directions link.',
      },
      fields: [
        {
          name: 'lat',
          type: 'number',
          required: true,
          label: 'Latitude',
        },
        {
          name: 'lng',
          type: 'number',
          required: true,
          label: 'Longitude',
        },
      ],
    },
    {
      name: 'whatsappNumber',
      type: 'text',
      required: true,
      label: 'WhatsApp Number',
      admin: {
        description: 'Include country code, e.g. +971 50 000 0000',
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'timings',
      type: 'text',
      required: true,
      label: 'Working Hours',
      defaultValue: 'Sun–Thu, 9am–6pm GST',
    },
    socialLinksField(),
  ],
  hooks: {
    afterChange: [revalidateGlobal({ paths: ['/contact', '/'] , tag: 'contact-info' })],
  },
}
