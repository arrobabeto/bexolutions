<script setup lang="ts">
  import { useRoute } from "#app"
  import { useTranslate } from "~/composables/useTranslate"

  const t = useTranslate()
  const route = useRoute()

  const nav = {
    links: [
      {
        name: { en: "Home" },
        to: "index" as const,
        matchExact: ["/", "/de", "/en"],
        matchPrefix: [] as string[],
      },
      {
        name: { en: "About" },
        to: "ueber-uns" as const,
        matchExact: [] as string[],
        matchPrefix: ["/ueber-uns", "/de/ueber-uns"],
      },
      {
        name: { en: "Posts" },
        to: "posts" as const,
        matchExact: [] as string[],
        matchPrefix: ["/posts", "/de/posts"],
      },
    ],
  }
</script>

<template>
  <nav
    class="sticky top-0 z-10 border-b border-[#e0e0e0] bg-[#fefefe]/90 px-4 py-3 text-[#010101] backdrop-blur dark:border-[#282a36] dark:bg-[#191a22]/90 dark:text-[#fefefe]"
  >
    <div class="max-w-5xl mx-auto flex items-center justify-between gap-4">
      <NuxtLinkLocale
        to="index"
        class="text-sm font-semibold tracking-tight text-[#010101] dark:text-[#fefefe]"
      >
        Orbitype Headless CMS Template
      </NuxtLinkLocale>

      <div class="flex items-center gap-1">
        <NuxtLinkLocale
          v-for="l of nav.links"
          :key="l.to"
          :to="l.to"
          class="rounded-full border border-transparent px-3 py-2 text-sm text-[#4e4e4e] transition hover:bg-[#f6f6f6] hover:text-[#010101] dark:text-[#cbcbcb] dark:hover:bg-[#22232b] dark:hover:text-[#fefefe]"
          :class="
            l.matchExact.includes(route.path) ||
            l.matchPrefix.some(
              (path) =>
                route.path === path || route.path.startsWith(path + '/'),
            )
              ? 'border-[#e0e0e0] bg-[#f6f6f6] text-[#010101] dark:border-[#282a36] dark:bg-[#22232b] dark:text-[#fefefe]'
              : ''
          "
        >
          {{ t(l.name) }}
        </NuxtLinkLocale>
      </div>
    </div>
  </nav>
</template>
