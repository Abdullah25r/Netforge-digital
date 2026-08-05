import type { CollectionConfig } from 'payload'
import { revalidateCollection, revalidateCollectionOnDelete } from '../hooks/revalidatePath'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  labels: {
    singular: 'Case Study',
    plural: 'Case Studies',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'categories', 'featured', 'publishedDate'],
    description:
      'Powers /work — listing cards on the grid, and the [slug] detail page when a card is clicked.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Project Title',
      admin: { description: 'e.g. "Bloom Beauty Lounge"' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'Used in the URL: /work/[slug]. Auto-filled from the title if left blank.',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return value
            const source = data?.title
            if (!source) return value
            return source
              .toLowerCase()
              .trim()
              .replace(/[^a-z0-9\s-]/g, '')
              .replace(/\s+/g, '-')
              .replace(/-+/g, '-')
          },
        ],
      },
    },
    {
      name: 'client',
      type: 'text',
      label: 'Client / Industry',
      admin: { description: 'e.g. "Ladies salon, Al Barsha"' },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
      label: 'Categories',
      admin: {
        description:
          'A project can belong to multiple categories (e.g. Web Dev + Marketing). Used to filter the Selected Projects grid.',
      },
    },
    {
      name: 'servicesProvided',
      type: 'text',
      label: 'Services Provided',
      admin: { description: 'Short display string, e.g. "Web + Instagram + Google Ads"' },
    },
    {
      name: 'resultHighlight',
      type: 'text',
      required: true,
      label: 'Result Highlight',
      admin: { description: 'e.g. "+200% bookings in 90 days" — shown on the card and hero.' },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Cover Image',
    },
    {
      name: 'accentColor',
      type: 'text',
      label: 'Accent Color (hex)',
      defaultValue: '#00c8e0',
      admin: { description: 'Used for tag pills and the gradient overlay on the card.' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured (show in the sticky hero scroll)',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description:
          'ON = appears in the large sticky horizontal-scroll section at the top of /work. OFF = appears only in the smaller Selected Projects grid below.',
      },
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Detail Page Gallery',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Case Study Body',
      admin: {
        description: 'Full write-up shown on the /work/[slug] detail page.',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Published Date',
      defaultValue: () => new Date().toISOString(),
      admin: {
        position: 'sidebar',
        date: { pickerAppearance: 'dayOnly' },
      },
    },
  ],
  hooks: {
    afterChange: [
      revalidateCollection({
        paths: (doc) => ['/work', `/work/${doc.slug}`],
        tag: 'case-studies',
      }),
    ],
    afterDelete: [
      revalidateCollectionOnDelete({
        paths: (doc) => ['/work', `/work/${doc.slug}`],
        tag: 'case-studies',
      }),
    ],
  },
  timestamps: true,
}
