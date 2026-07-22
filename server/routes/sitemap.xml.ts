import { appendResponseHeaders, defineEventHandler } from "h3"
import {
  bexoSitemapToXml,
  buildBexoSitemapEntries,
} from "~/server/utils/bexoSitemap"

/**
 * Canonical sitemap for Google Search Console.
 * German-only flat urlset with all marketing pages + Wissen blogs.
 */
export default defineEventHandler((event) => {
  const siteUrl = process.env.NUXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  const entries = buildBexoSitemapEntries(siteUrl)

  appendResponseHeaders(event, {
    "Content-Type": "application/xml; charset=utf-8",
    "Cache-Control": "public, max-age=3600",
  })

  return bexoSitemapToXml(entries)
})
