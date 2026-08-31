<script setup lang="ts">
  import { ClientOnly } from "#components"
  import { useHead, useRuntimeConfig } from "#imports"

  const config = useRuntimeConfig()
  const enabled = config.public.preferredSourceEnabled !== false

  if (enabled) {
    useHead({
      script: [
        {
          key: "google-preferred-source",
          src: "https://news.google.com/swg/js/v1/publisher.js",
          async: true,
        },
      ],
    })
  }
</script>

<template>
  <ClientOnly v-if="enabled">
    <div class="preferred-source mt-3 max-w-full overflow-hidden lg:mt-[12px]">
      <!-- Google Preferred Sources (option B). Sidebar is light. -->
      <div
        google-add-preferred-source-btn
        data-theme="light"
        data-lang="de"
      ></div>
    </div>
  </ClientOnly>
</template>
