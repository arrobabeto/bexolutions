import {
  BEXO_STATIC_PAGES,
  loadBlogCatalog,
  normalizeBaseUrl,
  pageUrl,
  blogUrl,
} from "~/server/utils/bexoSiteCatalog"

export type BexoSitemapEntry = {
  loc: string
  lastmod?: string
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly"
  priority?: number
}

function toLastmod(isoDate?: string) {
  if (!isoDate) return undefined
  return isoDate.length >= 10 ? isoDate.slice(0, 10) : isoDate
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
}

/** German-only URLs for the live Bexolutions marketing site. */
export function buildBexoSitemapEntries(siteUrl: string): BexoSitemapEntry[] {
  const baseUrl = normalizeBaseUrl(siteUrl)
  const today = new Date().toISOString().slice(0, 10)

  const staticEntries: BexoSitemapEntry[] = BEXO_STATIC_PAGES.map((page) => ({
    loc: pageUrl(baseUrl, page.path),
    lastmod: today,
    changefreq: page.changefreq,
    priority: page.priority,
  }))

  const blogEntries: BexoSitemapEntry[] = loadBlogCatalog().map((blog) => ({
    loc: blogUrl(baseUrl, blog.slug),
    lastmod: toLastmod(blog.datePublished) ?? today,
    changefreq: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...blogEntries]
}

export function bexoSitemapToXml(entries: BexoSitemapEntry[]) {
  const urls = entries
    .map((entry) => {
      const parts = [`    <loc>${escapeXml(entry.loc)}</loc>`]
      if (entry.lastmod) {
        parts.push(`    <lastmod>${escapeXml(entry.lastmod)}</lastmod>`)
      }
      if (entry.changefreq) {
        parts.push(`    <changefreq>${entry.changefreq}</changefreq>`)
      }
      if (entry.priority != null) {
        parts.push(`    <priority>${entry.priority.toFixed(1)}</priority>`)
      }
      return `  <url>\n${parts.join("\n")}\n  </url>`
    })
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}
