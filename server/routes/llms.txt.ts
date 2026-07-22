import { appendResponseHeaders, defineEventHandler } from "h3"
import { buildLlmsTxt } from "~/server/utils/bexoLlms"

/**
 * Canonical /llms.txt for AI agents (llmstxt.org Markdown index).
 * German Bexolutions marketing pages + Wissen blogs.
 */
export default defineEventHandler((event) => {
  appendResponseHeaders(event, {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control":
      "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
  })

  return buildLlmsTxt()
})
