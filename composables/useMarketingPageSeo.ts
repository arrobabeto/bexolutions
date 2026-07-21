import { useSeoMeta } from "#app"
import { useHead, useRuntimeConfig } from "#imports"

export type TMarketingBreadcrumb = {
  name: string
  path: string
}

export type TMarketingPageSeoInput = {
  path: string
  title: string
  description: string
  ogTitle?: string
  breadcrumbs?: TMarketingBreadcrumb[]
}

function normalizePath(path: string): string {
  if (!path || path === "/") return "/"
  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`
  if (withLeadingSlash.length > 1 && withLeadingSlash.endsWith("/")) {
    return withLeadingSlash.slice(0, -1)
  }
  return withLeadingSlash
}

function normalizeBaseUrl(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url
}

/**
 * Shared SEO for Bexo marketing pages: canonical, OG/Twitter, optional BreadcrumbList.
 * Does not set the document title — callers keep their existing useHead({ title }) so
 * the app.vue titleTemplate continues to work as today.
 */
export function useMarketingPageSeo(input: TMarketingPageSeoInput): void {
  const config = useRuntimeConfig()
  const baseUrl = normalizeBaseUrl(String(config.public.siteUrl))
  const path = normalizePath(input.path)
  const canonicalUrl = path === "/" ? `${baseUrl}/` : `${baseUrl}${path}`
  const ogImage = `${baseUrl}/og-bexolutions.jpg`
  const ogTitle = input.ogTitle ?? input.title

  useSeoMeta({
    description: input.description,
    ogTitle,
    ogDescription: input.description,
    ogType: "website",
    ogUrl: canonicalUrl,
    ogImage,
    ogSiteName: config.public.siteName,
    ogLocale: "de_CH",
    twitterCard: "summary_large_image",
    twitterTitle: ogTitle,
    twitterDescription: input.description,
    twitterImage: ogImage,
  })

  const scripts: { type: string; innerHTML: string }[] = []

  if (input.breadcrumbs && input.breadcrumbs.length > 0) {
    scripts.push({
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: input.breadcrumbs.map((crumb, index) => {
          const crumbPath = normalizePath(crumb.path)
          const item =
            crumbPath === "/" ? `${baseUrl}/` : `${baseUrl}${crumbPath}`
          return {
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item,
          }
        }),
      }),
    })
  }

  useHead({
    link: [{ rel: "canonical", href: canonicalUrl }],
    ...(scripts.length > 0 ? { script: scripts } : {}),
  })
}
