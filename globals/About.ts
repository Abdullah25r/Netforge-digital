import type { GlobalConfig } from 'payload'
import { revalidateGlobal } from '../hooks/revalidatePath'

export const About: GlobalConfig = {
  slug: 'about',
  label: 'About Page',
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  admin: {
    description: 'Content for the /about page.',
    group: 'Pages',
  },
  fields: [
    // ── Hero ──
    {
      type: 'collapsible',
      label: 'Hero',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'headline',
          type: 'text',
          required: true,
          label: 'Headline',
          defaultValue: "We're a Lean Team of Obsessives Who Hate Average Results",
        },
        {
          name: 'subheadline',
          type: 'textarea',
          label: 'Subheadline',
          defaultValue:
            'No account bloat, no junior hand-offs. Every project runs through senior hands, start to finish.',
        },
      ],
    },

    // ── Manifesto ──
    {
      type: 'collapsible',
      label: 'Manifesto',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'manifestoParagraphs',
          type: 'array',
          label: 'Paragraphs',
          minRows: 3,
          maxRows: 3,
          defaultValue: [
            {
              text: "We started NetForge Digital because we were tired of agencies that overcharge, under-deliver, and disappear after the contract is signed.",
            },
            {
              text: 'Every strategy we build, every pixel we place, every campaign we launch is designed with one question: does this generate real, measurable results for our client?',
            },
            {
              text: "Dubai's business landscape is competitive. We exist to give ambitious brands the digital edge they need to win it.",
            },
          ],
          fields: [
            {
              name: 'text',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },

    // ── Values ──
    {
      type: 'collapsible',
      label: 'Values',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'valuesHeading',
          type: 'text',
          label: 'Section Heading',
          defaultValue: 'Our Values',
        },
        {
          name: 'values',
          type: 'array',
          label: 'Value Cards',
          minRows: 1,
          maxRows: 8,
          fields: [
            {
              name: 'emoji',
              type: 'text',
              required: true,
              maxLength: 4,
              admin: { description: 'A single emoji, e.g. 🎯' },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },

    // ── Team ──
    {
      type: 'collapsible',
      label: 'Team',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'teamHeading',
          type: 'text',
          label: 'Section Heading',
          defaultValue: 'Meet the People Behind the Work',
        },
        {
          name: 'team',
          type: 'array',
          label: 'Team Members',
          minRows: 1,
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'role',
              type: 'text',
              required: true,
            },
            {
              name: 'photo',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Replaces the old initials avatar — square image recommended.',
              },
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateGlobal({ paths: ['/about'], tag: 'about' })],
  },
}
