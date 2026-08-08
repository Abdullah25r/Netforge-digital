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
          name: 'eyebrow',
          type: 'text',
          label: 'Eyebrow Label',
          defaultValue: 'About NetForge',
        },
        {
          name: 'headline',
          type: 'text',
          required: true,
          label: 'Headline',
          defaultValue: 'Building Digital Solutions That Drive Real Impact',
        },
        {
          name: 'subheadline',
          type: 'textarea',
          label: 'Subheadline',
          defaultValue:
            'NetForge is a creative digital agency focused on turning ideas into powerful digital experiences. We blend strategy, design, and development to help businesses grow and stand out in the digital world.',
        },
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Office / team photo shown on the right side of the hero.',
          },
        },
        {
          name: 'stats',
          type: 'array',
          label: 'Hero Stats',
          minRows: 2,
          maxRows: 4,
          defaultValue: [
            { value: '50+', label: 'Projects Completed' },
            { value: '30+', label: 'Happy Clients' },
          ],
          fields: [
            {
              name: 'value',
              type: 'text',
              required: true,
              admin: { description: 'e.g. "50+"' },
            },
            {
              name: 'label',
              type: 'text',
              required: true,
              admin: { description: 'e.g. "Projects Completed"' },
            },
          ],
        },
      ],
    },

    // ── Mission & Vision ──
    {
      type: 'collapsible',
      label: 'Mission & Vision',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'missionTitle',
          type: 'text',
          label: 'Mission Title',
          defaultValue: 'Our Mission',
        },
        {
          name: 'missionText',
          type: 'textarea',
          required: true,
          label: 'Mission Text',
          defaultValue:
            'To empower businesses with innovative digital solutions that drive growth, enhance experiences, and create lasting impact.',
        },
        {
          name: 'visionTitle',
          type: 'text',
          label: 'Vision Title',
          defaultValue: 'Our Vision',
        },
        {
          name: 'visionText',
          type: 'textarea',
          required: true,
          label: 'Vision Text',
          defaultValue:
            'To become a leading digital agency known for creativity, reliability, and results that set new standards in the industry.',
        },
      ],
    },

    // ── Manifesto (kept — unrelated to this redesign, still used elsewhere) ──
    {
      type: 'collapsible',
      label: 'Manifesto',
      admin: { initCollapsed: true },
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
          name: 'valuesSubheading',
          type: 'text',
          label: 'Section Subheading',
          defaultValue: 'The principles that drive everything we do',
        },
        {
          name: 'values',
          type: 'array',
          label: 'Value Cards',
          minRows: 1,
          maxRows: 8,
          defaultValue: [
            { title: 'Innovation', description: 'We embrace new ideas and technologies to deliver smarter solutions.' },
            { title: 'Integrity', description: 'Honest, transparent, and committed to our promises.' },
            { title: 'Collaboration', description: 'We work closely with our clients as partners in their success.' },
            { title: 'Excellence', description: 'Focused on quality, delivering results that exceed expectations.' },
          ],
          fields: [
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Small line-icon image representing this value — square, transparent background recommended.',
              },
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

    // ── What We Do ──
    {
      type: 'collapsible',
      label: 'What We Do',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'whatWeDoHeading',
          type: 'text',
          label: 'Section Heading',
          defaultValue: 'What We Do',
        },
        {
          name: 'whatWeDoSubheading',
          type: 'textarea',
          label: 'Section Subheading',
          defaultValue:
            'From strategy to execution, we offer a full range of digital services to help your brand grow and succeed online.',
        },
        {
          name: 'whatWeDoImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Decorative graphic shown next to the checklist.',
          },
        },
        {
          name: 'whatWeDoItems',
          type: 'array',
          label: 'Checklist Items',
          minRows: 1,
          maxRows: 10,
          defaultValue: [
            { item: 'Website Design & Development' },
            { item: 'UI/UX Design' },
            { item: 'Branding & Identity' },
            { item: 'Digital Marketing' },
            { item: 'E-commerce Solutions' },
            { item: 'Custom Software Development' },
          ],
          fields: [
            {
              name: 'item',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },

    // ── CTA Duo ("Let's Build Something Great Together") ──
    {
      type: 'collapsible',
      label: "CTA — Let's Build Together",
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'ctaDuoHeading',
          type: 'text',
          label: 'Heading',
          defaultValue: "Let's Build Something Great Together",
        },
        {
          name: 'ctaDuoSubheading',
          type: 'textarea',
          label: 'Subheading',
          defaultValue:
            "We're passionate about what we do and even more passionate about the success of our clients.",
        },
        {
          name: 'ctaDuoImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Team photo shown on the right side of this section.',
          },
        },
        {
          name: 'ctaDuoFeatures',
          type: 'array',
          label: 'Feature Badges',
          minRows: 2,
          maxRows: 2,
          defaultValue: [
            {
              icon: 'Target',
              title: 'Client Focused',
              description: 'Your success is our priority.',
            },
            {
              icon: 'RocketLaunch',
              title: 'Future Ready',
              description: 'Solutions built for tomorrow.',
            },
          ],
          fields: [
            {
              name: 'icon',
              type: 'select',
              required: true,
              options: [
                { label: 'Target', value: 'Target' },
                { label: 'Rocket Launch', value: 'RocketLaunch' },
                { label: 'Users Four', value: 'UsersFour' },
                { label: 'Shield Check', value: 'ShieldCheck' },
                { label: 'Lightbulb', value: 'Lightbulb' },
              ],
            },
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },

    // ── Bottom CTA band ──
    {
      type: 'collapsible',
      label: 'Bottom CTA',
      admin: { initCollapsed: false },
      fields: [
        {
          name: 'bottomCtaHeading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Ready to Build Something Amazing?',
        },
        {
          name: 'bottomCtaSubheading',
          type: 'text',
          label: 'Subheading',
          defaultValue: "Let's turn your ideas into digital success.",
        },
        {
          name: 'bottomCtaButtonText',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'Get Started',
        },
        {
          name: 'bottomCtaButtonLink',
          type: 'text',
          label: 'Button Link',
          defaultValue: '/contact',
        },
      ],
    },

    // ── Team (kept from before — social links added) ──
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
            // ── add-on: social links, previously missing ──
            {
              name: 'linkedin',
              type: 'text',
              label: 'LinkedIn URL',
              admin: { description: 'Full URL. Leave blank to hide the icon on the frontend.' },
            },
            {
              name: 'x',
              type: 'text',
              label: 'X (Twitter) URL',
              admin: { description: 'Full URL. Leave blank to hide the icon on the frontend.' },
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