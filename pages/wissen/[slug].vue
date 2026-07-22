<script setup lang="ts">
  import { showError, useSeoMeta } from "#app"
  import { definePageMeta, useHead, useRoute, useRuntimeConfig } from "#imports"
  import BlogArticle from "~/components/blog/BlogArticle.vue"
  import { getBlogFeaturedTitle } from "~/utils/blogs"
  import { loadAllBlogs } from "~/utils/loadBlogs"

  definePageMeta({ layout: false })

  const config = useRuntimeConfig()
  const route = useRoute()
  const slug = String(route.params["slug"])

  const blog = loadAllBlogs().find((b) => b.slug === slug)
  if (!blog)
    throw showError({ statusCode: 404, statusMessage: "Blog not found" })

  const fullTitle = getBlogFeaturedTitle(blog)
  const canonicalUrl = `${config.public.siteUrl}/wissen/${blog.slug}`

  useHead({
    htmlAttrs: { lang: "de-CH" },
    link: [{ rel: "canonical", href: canonicalUrl }],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: fullTitle,
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
    title: `${fullTitle} — Bexolutions`,
    description: blog.seo.description,
    author: blog.author.name,
    ogTitle: fullTitle,
    ogDescription: blog.seo.description,
    ogType: "article",
    ogImage: blog.seo.ogImage,
    ogUrl: canonicalUrl,
    ogSiteName: config.public.siteName,
    ogLocale: "de_DE",
    articlePublishedTime: blog.datePublished,
    twitterCard: "summary_large_image",
    twitterTitle: fullTitle,
    twitterDescription: blog.seo.description,
    twitterImage: blog.seo.ogImage,
  })
</script>

<template>
  <BlogArticle :blog="blog" />
</template>
