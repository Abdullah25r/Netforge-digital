import type { CollectionConfig } from 'payload'
import { revalidateCollection, revalidateCollectionOnDelete } from '../hooks/revalidatePath'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Service',
    plural: 'Services',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'priceFrom', 'featuredOnHome'],
    description: 'Powers the /services tabs and the bento grid on the home page.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Service Title',
      admin: { description: 'e.g. "Web Development"' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'Used as the tab id / anchor on /services. Auto-filled from the title if left blank.',
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
      name: 'icon',
      type: 'select',
      required: true,
      label: 'Icon',
      admin: { description: 'Phosphor icon name used across the bento grid and tabs.' },
      options: [
        { label: 'Code', value: 'Code' },
        { label: 'Chart Line Up', value: 'ChartLineUp' },
        { label: 'Paint Brush', value: 'PaintBrush' },
        { label: 'Instagram Logo', value: 'InstagramLogo' },
        { label: 'Shopping Cart', value: 'ShoppingCart' },
        { label: 'Magnifying Glass', value: 'MagnifyingGlass' },
      ],
    },
    {
      name: 'accentColor',
      type: 'text',
      label: 'Accent Color (hex)',
      defaultValue: '#00c8e0',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Short Description',
      admin: { description: 'Shown on the bento card and at the top of the service tab.' },
    },
    {
      name: 'bentoReveal',
      type: 'text',
      label: 'Bento Hover Reveal Stat',
      admin: { description: 'e.g. "Avg. 94 PageSpeed score" — shown on hover in the home bento grid.' },
    },
    {
      name: 'features',
      type: 'array',
      label: 'Feature Bullets',
      minRows: 1,
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'priceFrom',
      type: 'text',
      required: true,
      label: 'Starting Price',
      admin: { description: 'e.g. "AED 3,500/mo"' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Tab / Mockup Image',
    },
    {
      name: 'featuredOnHome',
      type: 'checkbox',
      label: 'Featured on Home Bento Grid',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'bentoSize',
      type: 'select',
      label: 'Bento Grid Size',
      defaultValue: 'small',
      admin: {
        position: 'sidebar',
        description: 'Controls the card span in the home page bento grid.',
      },
      options: [
        { label: 'Large (2×2)', value: 'large' },
        { label: 'Tall (1×2)', value: 'tall' },
        { label: 'Wide (2×1)', value: 'wide' },
        { label: 'Small (1×1)', value: 'small' },
      ],
    },
    {
      name: 'sortOrder',
      type: 'number',
      label: 'Sort Order',
      defaultValue: 0,
      admin: { position: 'sidebar', description: 'Lower numbers appear first.' },
    },
  ],
  hooks: {
    afterChange: [
      revalidateCollection({
        paths: ['/services', '/'],
        tag: 'services',
      }),
    ],
    afterDelete: [
      revalidateCollectionOnDelete({
        paths: ['/services', '/'],
        tag: 'services',
      }),
    ],
  },
  timestamps: true,
}
