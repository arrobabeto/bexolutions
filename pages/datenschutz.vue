<script setup lang="ts">
  import { definePageMeta, useHead } from "#imports"
  import LegalPage from "~/components/bexo/LegalPage.vue"
  import { useMarketingPageSeo } from "~/composables/useMarketingPageSeo"
  import { datenschutzHtml, datenschutzTitle } from "~/data/legal/datenschutz"

  definePageMeta({ layout: false })

  useHead({
    title: "Datenschutzerklärung — Bexolutions",
    htmlAttrs: { lang: "de-CH" },
    link: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Jost:wght@400;500&family=Inter:wght@400;500;700&display=swap",
      },
    ],
  })

  useMarketingPageSeo({
    path: "/datenschutz",
    title: "Datenschutzerklärung — Bexolutions",
    description:
      "Datenschutzerklärung der Bexolutions Marketing & Vertrieb AG.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Datenschutz", path: "/datenschutz" },
    ],
  })
</script>

<template>
  <LegalPage :title="datenschutzTitle" :html="datenschutzHtml" />
</template>
