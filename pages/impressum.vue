<script setup lang="ts">
  import { definePageMeta, useHead } from "#imports"
  import LegalPage from "~/components/bexo/LegalPage.vue"
  import { impressumHtml, impressumTitle } from "~/data/legal/impressum"

  definePageMeta({ layout: false })

  useHead({
    title: "Impressum — Bexolutions",
    htmlAttrs: { lang: "de" },
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
</script>

<template>
  <LegalPage :title="impressumTitle" :html="impressumHtml" />
</template>
