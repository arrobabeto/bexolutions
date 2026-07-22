import { defineEventHandler, sendRedirect } from "h3"

/** Legacy CMS pages sitemap → canonical German sitemap. */
export default defineEventHandler((event) => {
  return sendRedirect(event, "/sitemap.xml", 301)
})
