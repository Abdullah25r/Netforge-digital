import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
} from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'

/**
 * Generic, reusable revalidation hook factory.
 *
 * Usage on a collection:
 *   hooks: {
 *     afterChange: [revalidateCollection({ paths: ['/work'], tag: 'case-studies' })],
 *     afterDelete: [revalidateCollectionOnDelete({ paths: ['/work'], tag: 'case-studies' })],
 *   }
 *
 * Usage on a global:
 *   hooks: {
 *     afterChange: [revalidateGlobal({ paths: ['/contact'], tag: 'contact-info' })],
 *   }
 *
 * `paths` accepts static paths ('/work') or a function that derives a path
 * from the doc (e.g. for slug-based detail pages: (doc) => `/work/${doc.slug}`).
 */

type RevalidateConfig<T = any> = {
  /** Static paths, or a function that returns a path (or paths) from the document. */
  paths?: string[] | ((doc: T) => string | string[])
  /** Optional cache tag(s) to revalidate alongside paths. */
  tag?: string | string[]
  /** Set false to skip revalidation when running seed scripts / initial data migrations. */
  enabled?: boolean
}

function resolvePaths<T>(config: RevalidateConfig<T>, doc: T): string[] {
  if (!config.paths) return []
  const resolved = typeof config.paths === 'function' ? config.paths(doc) : config.paths
  return Array.isArray(resolved) ? resolved : [resolved]
}

function resolveTags(tag?: string | string[]): string[] {
  if (!tag) return []
  return Array.isArray(tag) ? tag : [tag]
}

export const revalidateCollection = <T = any>(
  config: RevalidateConfig<T>,
): CollectionAfterChangeHook =>
  async ({ doc, req: { payload, context } }) => {
    if (config.enabled === false || context?.disableRevalidate) return doc

    try {
      for (const path of resolvePaths(config, doc as T)) {
        revalidatePath(path)
        payload.logger.info(`Revalidated path: ${path}`)
      }
      for (const t of resolveTags(config.tag)) {
        (revalidateTag as (tag: string) => void)(t)
        payload.logger.info(`Revalidated tag: ${t}`)
      }
    } catch (err) {
      payload.logger.error(`Revalidation failed: ${(err as Error).message}`)
    }

    return doc
  }

export const revalidateCollectionOnDelete = <T = any>(
  config: RevalidateConfig<T>,
): CollectionAfterDeleteHook =>
  async ({ doc, req: { payload, context } }) => {
    if (config.enabled === false || context?.disableRevalidate) return doc

    try {
      for (const path of resolvePaths(config, doc as T)) {
        revalidatePath(path)
        payload.logger.info(`Revalidated path on delete: ${path}`)
      }
      for (const t of resolveTags(config.tag)) {
        (revalidateTag as (tag: string) => void)(t)
      }
    } catch (err) {
      payload.logger.error(`Revalidation failed: ${(err as Error).message}`)
    }

    return doc
  }

export const revalidateGlobal = <T = any>(
  config: RevalidateConfig<T>,
): GlobalAfterChangeHook =>
  async ({ doc, req: { payload, context } }) => {
    if (config.enabled === false || context?.disableRevalidate) return doc

    try {
      for (const path of resolvePaths(config, doc as T)) {
        revalidatePath(path)
        payload.logger.info(`Revalidated path: ${path}`)
      }
      for (const t of resolveTags(config.tag)) {
        (revalidateTag as (tag: string) => void)(t)
      }
    } catch (err) {
      payload.logger.error(`Revalidation failed: ${(err as Error).message}`)
    }

    return doc
  }
