<script setup lang="ts">
  import type { IBlog } from "~/types/dto/IBlog"
  import {
    getBlogCardMeta,
    getBlogFeaturedTitle,
    getBlogExcerpt,
  } from "~/utils/blogs"

  defineProps<{
    blog: IBlog
    fallbackImage?: string
  }>()
</script>

<template>
  <article class="overflow-hidden rounded-[24px] bg-[#f1f1f1]">
    <NuxtImg
      :src="blog.heroImage || fallbackImage"
      class="aspect-video w-full object-cover"
      :alt="getBlogFeaturedTitle(blog)"
    />
    <div class="p-6">
      <h2 class="text-xl font-semibold leading-snug text-black">
        {{ getBlogFeaturedTitle(blog) }}
      </h2>
      <p class="mt-3 text-base leading-relaxed text-black">
        {{ getBlogExcerpt(blog) }}
      </p>
      <p class="mt-2 text-base text-black">⏱️ {{ getBlogCardMeta(blog) }}</p>
      <a
        :href="`/wissen/${blog.slug}`"
        class="bexo-btn-primary mt-4 inline-grid"
      >
        Weiterlesen →
      </a>
    </div>
  </article>
</template>
