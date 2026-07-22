import { appendResponseHeaders, defineEventHandler } from "h3"
import {
  bexoSitemapToXml,
  buildBexoSitemapEntries,
} from "~/server/utils/bexoSitemap"

/** Alias of /sitemap.xml — kept for older robots / Search Console submissions. */
export default defineEventHandler((event) => {
  const siteUrl =
    process.env.NUXT_PUBLIC_SITE_URL ?? "https://www.bexolutions.ch"
  const entries = buildBexoSitemapEntries(siteUrl)

  appendResponseHeaders(event, {
    "Content-Type": "application/xml; charset=utf-8",
    "Cache-Control": "public, max-age=3600",
  })

  return bexoSitemapToXml(entries)
})
