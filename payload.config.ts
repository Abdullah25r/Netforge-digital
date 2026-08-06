import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig, type Config } from "payload";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { seoPlugin } from '@payloadcms/plugin-seo'
import {Media } from "./collections/Media";
import { CaseStudies } from "./collections/CaseStudies";
import { ContactSubmissions } from "./collections/ContactSubmissions";
import { Services } from "./collections/Services";
import {Categories} from "./collections/Categories";
import { generateTitle, generateDescription, generateImage, generateURL } from './lib/seo/generateMeta'

//globals
import {About} from "./globals/About";
import {ContactInfo} from "./globals/ContactInfo";
export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),
  admin:{
    avatar: "gravatar"
  },
  // Define and configure your collections in this array
  collections: [Media, CaseStudies, ContactSubmissions, Services, Categories],
  globals: [About, ContactInfo],
  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  plugins: [
    vercelBlobStorage({
      enabled: true, // Set to false if you want to use local storage in dev
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
    seoPlugin({
  tabbedUI: true,
  collections: ['case-studies', 'services'],
  globals: ['about', 'contact-info'],
  uploadsCollection: 'media',
  generateTitle,
  generateDescription,
  generateImage,
  generateURL,
})
  ],
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp: sharp,
});
