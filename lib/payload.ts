import { getPayload, type Payload } from 'payload'
import config from '@payload-config'

/**
 * Singleton Payload local-API client.
 * Reused across requests in the same server process — avoids re-initializing
 * Payload (DB pool, etc.) on every data fetch.
 *
 * NOTE: `@payload-config` is the standard Payload + Next.js template alias
 * pointing at your payload.config.ts. If your project uses a different alias
 * (e.g. '@/payload.config'), update the import above only — nothing else
 * in the query files needs to change.
 */
let clientPromise: Promise<Payload> | null = null

export function getPayloadClient(): Promise<Payload> {
  if (!clientPromise) {
    clientPromise = getPayload({ config })
  }
  return clientPromise
}
