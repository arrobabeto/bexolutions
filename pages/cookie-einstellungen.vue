<script setup lang="ts">
  import { definePageMeta, useHead } from "#imports"
  import LegalPage from "~/components/bexo/LegalPage.vue"
  import { useMarketingPageSeo } from "~/composables/useMarketingPageSeo"
  import {
    cookieEinstellungenHtml,
    cookieEinstellungenTitle,
  } from "~/data/legal/cookie-einstellungen"

  definePageMeta({ layout: false })

  useHead({
    title: "Cookie-Einstellungen — Bexolutions",
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
    path: "/cookie-einstellungen",
    title: "Cookie-Einstellungen — Bexolutions",
    description:
      "Cookie-Einstellungen für die Website der Bexolutions Marketing & Vertrieb AG.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Cookie-Einstellungen", path: "/cookie-einstellungen" },
    ],
  })
</script>

<template>
  <LegalPage
    :title="cookieEinstellungenTitle"
    :html="cookieEinstellungenHtml"
    show-cookie-cta
  />
</template>
