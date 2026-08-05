import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  upload: {
    staticDir: 'media', // The folder on your disk where images will be saved
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail', // Show the thumbnail version in the Admin UI
    mimeTypes: ['image/*'], // Restrict this collection to images only
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true, // Good for SEO and accessibility
    },
  ],
}