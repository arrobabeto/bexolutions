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
    class="block overflow-hidden rounded-[20px] bg-[#f9f9f9] shadow-sm transition hover:brightness-95"
  >
    <NuxtImg
      :src="blog.heroImage || fallbackImage"
      class="aspect-[16/9] w-full object-cover"
      :alt="getBlogCardTitle(blog)"
    />
    <div class="p-4">
      <span
        class="inline-flex items-center gap-1 rounded-full bg-[#0e2138] px-3 py-1 text-xs font-medium text-white"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-[#bde0fe]"></span>
        {{ blog.category }}
      </span>
      <p class="mt-3 text-base font-semibold text-black">
        {{ getBlogCardTitle(blog) }}
      </p>
      <p class="mt-1 text-sm font-medium text-black/70">
        {{ getBlogCardMeta(blog) }} →
      </p>
    </div>
  </a>
</template>
