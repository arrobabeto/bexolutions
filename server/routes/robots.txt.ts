import { appendResponseHeaders, defineEventHandler } from "h3"
import { dedent } from "ts-dedent"
import { getSiteUrl } from "~/server/utils/bexoSiteCatalog"

export default defineEventHandler(async (event) => {
  const baseUrl = getSiteUrl()

  appendResponseHeaders(event, { "Content-Type": "text/plain; charset=utf-8" })
  return dedent`
    User-agent: *
    Allow: /

    Disallow: /errors/
    Disallow: /_nuxt/
    Disallow: /api/

    Allow: /robots.txt
    Allow: /sitemap.xml
    Allow: /sitemaps.xml
    Allow: /llms.txt
    Allow: /llms-full.txt

    Crawl-delay: 1

    Sitemap: ${baseUrl}/sitemap.xml

    LLMs-Txt: ${baseUrl}/llms.txt
    LLMs-Full-Txt: ${baseUrl}/llms-full.txt
  `
})
