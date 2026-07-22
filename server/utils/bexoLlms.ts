import {
  BEXO_STATIC_PAGES,
  blogLinkDescription,
  blogLinkTitle,
  blogUrl,
  getSiteDescription,
  getSiteName,
  getSiteUrl,
  loadBlogCatalog,
  pageUrl,
} from "~/server/utils/bexoSiteCatalog"

/** Markdown index for LLMs (llmstxt.org). */
export function buildLlmsTxt() {
  const baseUrl = getSiteUrl()
  const siteName = getSiteName()
  const siteDescription = getSiteDescription()
  const primaryPages = BEXO_STATIC_PAGES.filter((p) => p.kind === "primary")
  const optionalPages = BEXO_STATIC_PAGES.filter((p) => p.kind === "optional")
  const blogs = loadBlogCatalog()

  const lines: string[] = [
    `# ${siteName}`,
    "",
    `> ${siteDescription}`,
    "",
    "Website auf Deutsch (Schweiz, de-CH). Zielgruppe: KMU in der Schweiz und im DACH-Raum. Schwerpunkte: SEO, Local SEO, Generative Engine Optimization (GEO), LinkedIn und Vertriebsoptimierung.",
    "",
    "## Seiten",
    "",
  ]

  for (const page of primaryPages) {
    lines.push(
      `- [${page.title}](${pageUrl(baseUrl, page.path)}): ${page.summary}`,
    )
  }

  lines.push("", "## Wissen", "")

  for (const blog of blogs) {
    const desc = blogLinkDescription(blog)
    const title = blogLinkTitle(blog)
    const url = blogUrl(baseUrl, blog.slug)
    lines.push(desc ? `- [${title}](${url}): ${desc}` : `- [${title}](${url})`)
  }

  lines.push("", "## Optional", "")

  for (const page of optionalPages) {
    lines.push(
      `- [${page.title}](${pageUrl(baseUrl, page.path)}): ${page.summary}`,
    )
  }

  lines.push(
    `- [llms-full.txt](${baseUrl}/llms-full.txt): Erweiterter Kontext mit Seiten- und Artikel-Zusammenfassungen für LLMs`,
    `- [sitemap.xml](${baseUrl}/sitemap.xml): Vollständige URL-Liste für Suchmaschinen`,
  )

  return `${lines.join("\n")}\n`
}

/** Expanded Markdown context companion to /llms.txt. */
export function buildLlmsFullTxt() {
  const baseUrl = getSiteUrl()
  const siteName = getSiteName()
  const siteDescription = getSiteDescription()
  const primaryPages = BEXO_STATIC_PAGES.filter((p) => p.kind === "primary")
  const optionalPages = BEXO_STATIC_PAGES.filter((p) => p.kind === "optional")
  const blogs = loadBlogCatalog()

  const lines: string[] = [
    `# ${siteName} (Full)`,
    "",
    `> ${siteDescription}`,
    "",
    "Erweiterter Kontext für LLM-Abruf. Sprache: Deutsch (Schweiz). Kuratierte Seiten und Wissen-Artikel von bexolutions.ch.",
    "",
    "## Seiten",
    "",
  ]

  for (const page of [...primaryPages, ...optionalPages]) {
    lines.push(`### ${page.title}`)
    lines.push(`URL: ${pageUrl(baseUrl, page.path)}`)
    lines.push(`Summary: ${page.summary}`)
    lines.push("")
  }

  lines.push("## Wissen", "")

  for (const blog of blogs) {
    lines.push(`### ${blogLinkTitle(blog)}`)
    lines.push(`URL: ${blogUrl(baseUrl, blog.slug)}`)
    if (blog.category) lines.push(`Category: ${blog.category}`)
    if (blog.datePublished) lines.push(`Published: ${blog.datePublished}`)
    const summary = blog.seoDescription || blog.tagline
    if (summary) lines.push(`Summary: ${summary}`)
    if (blog.tldrBody) lines.push(`TL;DR: ${blog.tldrBody}`)
    lines.push("")
  }

  return `${lines.join("\n")}\n`
}
