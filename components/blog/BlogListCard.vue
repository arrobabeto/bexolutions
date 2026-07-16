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
    class="box-border flex h-full w-full min-w-0 max-w-full flex-col overflow-hidden rounded-[20px] bg-[#f9f9f9] shadow-sm transition hover:brightness-95"
  >
    <NuxtImg
      :src="blog.heroImage || fallbackImage"
      class="aspect-[16/9] w-full max-w-full shrink-0 object-cover"
      :alt="getBlogCardTitle(blog)"
      sizes="100vw"
    />
    <div class="box-border flex min-h-0 w-full min-w-0 flex-1 flex-col p-4">
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
      <p class="mt-auto break-words pt-2 text-sm font-medium text-black/70">
        {{ getBlogCardMeta(blog) }} →
      </p>
    </div>
  </a>
</template>
