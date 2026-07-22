import { readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"

export type BexoSitemapEntry = {
  loc: string
  lastmod?: string
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly"
  priority?: number
}

const STATIC_PAGES: {
  path: string
  changefreq: BexoSitemapEntry["changefreq"]
  priority: number
}[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/ueber-uns", priority: 0.9, changefreq: "monthly" },
  { path: "/leistungen", priority: 0.9, changefreq: "monthly" },
  { path: "/wissen", priority: 0.9, changefreq: "weekly" },
  { path: "/treuhaender", priority: 0.8, changefreq: "monthly" },
  { path: "/referenz-zofingen", priority: 0.8, changefreq: "monthly" },
  { path: "/kontakt", priority: 0.8, changefreq: "monthly" },
  { path: "/impressum", priority: 0.3, changefreq: "yearly" },
  { path: "/datenschutz", priority: 0.3, changefreq: "yearly" },
  { path: "/cookie-einstellungen", priority: 0.2, changefreq: "yearly" },
]

function normalizeBaseUrl(siteUrl: string) {
  return siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl
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

/** Read slug + datePublished from data/blog without Vite import.meta.glob (Nitro-safe). */
function loadBlogSitemapMeta() {
  const dir = join(process.cwd(), "data/blog")
  return readdirSync(dir)
    .filter((file) => file.endsWith(".ts"))
    .map((file) => {
      const content = readFileSync(join(dir, file), "utf8")
      const slug =
        content.match(/slug:\s*["']([^"']+)["']/)?.[1] ??
        file.replace(/\.ts$/, "")
      const datePublished = content.match(
        /datePublished:\s*["']([^"']+)["']/,
      )?.[1]
      return { slug, datePublished }
    })
}

/** German-only URLs for the live Bexolutions marketing site. */
export function buildBexoSitemapEntries(siteUrl: string): BexoSitemapEntry[] {
  const baseUrl = normalizeBaseUrl(siteUrl)
  const today = new Date().toISOString().slice(0, 10)

  const staticEntries: BexoSitemapEntry[] = STATIC_PAGES.map((page) => ({
    loc: page.path === "/" ? baseUrl : `${baseUrl}${page.path}`,
    lastmod: today,
    changefreq: page.changefreq,
    priority: page.priority,
  }))

  const blogEntries: BexoSitemapEntry[] = loadBlogSitemapMeta().map((blog) => ({
    loc: `${baseUrl}/wissen/${blog.slug}`,
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
