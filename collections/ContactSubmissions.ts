import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  labels: {
    singular: 'Contact Submission',
    plural: 'Contact Submissions',
  },
  access: {
    // Submissions come from the public contact form (server action / API route),
    // so anyone can create — but only logged-in admins can read/update/delete.
    read: ({ req: { user } }) => Boolean(user),
    create: () => true,
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'businessName', 'primaryGoal', 'monthlyBudget', 'status', 'createdAt'],
    description: 'Submissions from the /contact page form.',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'businessName',
      type: 'text',
      required: true,
      label: 'Business Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
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
      name: 'primaryGoal',
      type: 'select',
      required: true,
      label: 'Primary Goal',
      options: [
        { label: 'New Website', value: 'new-website' },
        { label: 'Marketing Campaign', value: 'marketing-campaign' },
        { label: 'SEO', value: 'seo' },
        { label: 'Social Media', value: 'social-media' },
        { label: 'Full Retainer', value: 'full-retainer' },
      ],
    },
    {
      name: 'monthlyBudget',
      type: 'select',
      required: true,
      label: 'Monthly Budget',
      options: [
        { label: 'Under AED 2,000', value: 'under-2000' },
        { label: 'AED 2,000–5,000', value: '2000-5000' },
        { label: 'AED 5,000–10,000', value: '5000-10000' },
        { label: 'AED 10,000+', value: '10000-plus' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Tell us about your project',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'new',
      admin: {
        position: 'sidebar',
        description: 'Internal triage status — not shown to the submitter.',
      },
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'Closed', value: 'closed' },
      ],
    },
    {
      name: 'source',
      type: 'text',
      label: 'Source Page',
      admin: {
        position: 'sidebar',
        description: 'Optional — which page/campaign the submission came from.',
        readOnly: true,
      },
    },
  ],
  timestamps: true,
}
