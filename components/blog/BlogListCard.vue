<script setup lang="ts">
  import type { IBlog } from "~/types/dto/IBlog"
  import { getBlogCardMeta, getBlogCardTitle } from "~/utils/blogs"

  defineProps<{
    blog: IBlog
    fallbackImage?: string
  }>()
</script>

<template>
  <a
    :href="`/wissen/${blog.slug}`"
    class="box-border block w-full min-w-0 max-w-full overflow-hidden rounded-[20px] bg-[#f9f9f9] shadow-sm transition hover:brightness-95"
  >
    <NuxtImg
      :src="blog.heroImage || fallbackImage"
      class="aspect-[16/9] w-full max-w-full object-cover"
      :alt="getBlogCardTitle(blog)"
      sizes="100vw"
    />
    <div class="box-border w-full min-w-0 p-4">
      <span
        class="inline-flex max-w-full items-center gap-1 rounded-full bg-[#0e2138] px-3 py-1 text-xs font-medium text-white"
      >
        <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-[#bde0fe]"></span>
        <span class="truncate">{{ blog.category }}</span>
      </span>
      <p
        class="mt-3 break-words text-base font-semibold leading-snug text-black"
      >
        {{ getBlogCardTitle(blog) }}
      </p>
      <p class="mt-1 break-words text-sm font-medium text-black/70">
        {{ getBlogCardMeta(blog) }} →
      </p>
    </div>
  </a>
</template>
