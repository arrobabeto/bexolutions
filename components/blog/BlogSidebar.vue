<script setup lang="ts">
  import { computed } from "vue"
  import type { IBlogAuthor, IBlogTocEntry } from "~/types/dto/IBlog"

  const p = defineProps<{
    author: IBlogAuthor
    toc: IBlogTocEntry[]
    title: string
    url: string
  }>()

  const enc = computed(() => encodeURIComponent(p.url))
  const encTitle = computed(() => encodeURIComponent(p.title))

  const shares = computed(() => [
    {
      label: "Auf LinkedIn teilen",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc.value}`,
      path: "M4.98 3.5A2.5 2.5 0 0 1 2.5 6 2.5 2.5 0 0 1 0 3.5 2.5 2.5 0 0 1 2.5 1 2.5 2.5 0 0 1 4.98 3.5zM.24 8h4.52v12H.24V8zM8.24 8h4.33v1.64h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V20h-4.52v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V20H8.24V8z",
    },
    {
      label: "Auf X teilen",
      href: `https://twitter.com/intent/tweet?url=${enc.value}&text=${encTitle.value}`,
      path: "M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.49l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.48 3.24H4.29l13.32 17.41z",
    },
    {
      label: "Auf Facebook teilen",
      href: `https://www.facebook.com/sharer/sharer.php?u=${enc.value}`,
      path: "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z",
    },
    {
      label: "Per E-Mail teilen",
      href: `mailto:?subject=${encTitle.value}&body=${enc.value}`,
      path: "M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm10 7L2.5 5.8 2 6v.4l10 5.5 10-5.5V6l-.5-.2L12 11z",
    },
  ])
</script>

<template>
  <aside class="blog-sidebar flex w-[212px] flex-col gap-[24px]">
    <!-- Author -->
    <p class="text-[14px] font-medium leading-[1.7] text-[#292929]">
      <span class="font-bold">Autor:</span>
      {{ author.bio }}
    </p>

    <div class="h-px w-full bg-black/10"></div>

    <!-- Share -->
    <div>
      <p class="text-[18px] font-semibold leading-[1.5] text-[#0e2138]">
        Teilen
      </p>
      <div class="mt-[12px] flex items-center gap-[22px]">
        <a
          v-for="s of shares"
          :key="s.label"
          :href="s.href"
          :aria-label="s.label"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[#0e2138] transition hover:opacity-60"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path :d="s.path" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Table of contents -->
    <template v-if="toc.length">
      <div class="h-px w-full bg-black/10"></div>
      <nav>
        <p class="text-[18px] font-semibold leading-[1.5] text-[#0e2138]">
          Inhalt
        </p>
        <ul class="mt-[12px] flex flex-col gap-[12px]">
          <li v-for="entry of toc" :key="entry.id" class="flex gap-[8px]">
            <span
              class="mt-[8px] block h-[6px] w-[6px] shrink-0 rounded-full bg-[#0e2138]"
            ></span>
            <a
              :href="`#${entry.id}`"
              class="text-[15px] font-medium leading-[1.5] text-[#292929] transition hover:text-[#134074]"
            >
              {{ entry.label }}
            </a>
          </li>
        </ul>
      </nav>
    </template>
  </aside>
</template>
