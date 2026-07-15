<script setup lang="ts">
  import { showError, useSeoMeta } from "#app"
  import { definePageMeta, useHead, useRoute, useRuntimeConfig } from "#imports"
  import type { IBlog } from "~/types/dto/IBlog"
  import BlogArticle from "~/components/blog/BlogArticle.vue"

  definePageMeta({ layout: false })

  const config = useRuntimeConfig()
  const route = useRoute()
  const slug = String(route.params["slug"])

  // Eager glob: every data file is bundled and evaluated at build time — the
  // same proven pattern as components/sections/AnySection.vue. Keyed by each
  // file's own `slug` field, so the filename need not match the slug.
  const modules = import.meta.glob<{ default: IBlog }>("~/data/blog/*.ts", {
    eager: true,
  })
  const bySlug = new Map<string, IBlog>(
    Object.values(modules).map((m) => [m.default.slug, m.default]),
  )

  const blog = bySlug.get(slug)
  if (!blog)
    throw showError({ statusCode: 404, statusMessage: "Blog not found" })

  const canonicalUrl = `${config.public.siteUrl}/wissen/${blog.slug}`

  useHead({
    htmlAttrs: { lang: "de" },
    link: [
      { rel: "canonical", href: canonicalUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500&family=Jost:wght@400;500&family=Inter:wght@400;500;700&display=swap",
      },
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: blog.title,
          description: blog.seo.description,
          datePublished: blog.datePublished,
          dateModified: blog.datePublished,
          inLanguage: "de",
          url: canonicalUrl,
          image: {
            "@type": "ImageObject",
            url: blog.seo.ogImage,
            width: "1200",
            height: "630",
          },
          author: {
            "@type": "Person",
            name: blog.author.name,
          },
          publisher: {
            "@type": "Organization",
            name: config.public.organizationName,
            logo: {
              "@type": "ImageObject",
              url: config.public.organizationLogo,
            },
          },
          mainEntityOfPage: canonicalUrl,
        }),
      },
    ],
  })

  useSeoMeta({
    title: `${blog.title} — Bexolutions`,
    description: blog.seo.description,
    author: blog.author.name,
    ogTitle: blog.title,
    ogDescription: blog.seo.description,
    ogType: "article",
    ogImage: blog.seo.ogImage,
    ogUrl: canonicalUrl,
    ogSiteName: config.public.siteName,
    ogLocale: "de_DE",
    articlePublishedTime: blog.datePublished,
    twitterCard: "summary_large_image",
    twitterTitle: blog.title,
    twitterDescription: blog.seo.description,
    twitterImage: blog.seo.ogImage,
  })
</script>

<template>
  <BlogArticle :blog="blog" />
</template>
