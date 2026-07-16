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
  <article
    class="box-border w-full min-w-0 max-w-full overflow-hidden rounded-[20px] bg-[#f1f1f1] sm:rounded-[24px]"
  >
    <NuxtImg
      :src="blog.heroImage || fallbackImage"
      class="aspect-video w-full max-w-full object-cover"
      :alt="getBlogFeaturedTitle(blog)"
      sizes="100vw"
    />
    <div class="box-border w-full min-w-0 p-5 sm:p-6">
      <h2
        class="break-words text-lg font-semibold leading-snug text-black sm:text-xl"
      >
        {{ getBlogFeaturedTitle(blog) }}
      </h2>
      <p
        class="mt-3 break-words text-sm leading-relaxed text-black sm:text-base"
      >
        {{ getBlogExcerpt(blog) }}
      </p>
      <p class="mt-2 break-words text-sm text-black sm:text-base">
        ⏱️ {{ getBlogCardMeta(blog) }}
      </p>
      <a
        :href="`/wissen/${blog.slug}`"
        class="bexo-btn-primary bexo-btn-block mt-4"
      >
        Weiterlesen →
      </a>
    </div>
  </article>
</template>
