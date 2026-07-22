import { appendResponseHeaders, defineEventHandler } from "h3"
import { buildLlmsFullTxt } from "~/server/utils/bexoLlms"

/**
 * Expanded LLM context companion to /llms.txt.
 * Summaries + TL;DR for pages and Wissen articles.
 */
export default defineEventHandler((event) => {
  appendResponseHeaders(event, {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control":
      "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
  })

  return buildLlmsFullTxt()
})
