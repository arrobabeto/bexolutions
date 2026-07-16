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
    class="card-shadow flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[20px] bg-[#f9f9f9] transition hover:brightness-95"
  >
    <div class="relative h-[137px] w-full shrink-0">
      <NuxtImg
        :src="blog.heroImage || fallbackImage"
        class="h-full w-full rounded-[20px] object-cover"
        :alt="getBlogCardTitle(blog)"
      />
      <div
        class="absolute right-[26px] top-[12px] flex items-center gap-[6px] rounded-[20px] bg-[#0e2138] px-[12px] py-[3px]"
      >
        <span class="block h-[7px] w-[7px] rounded-full bg-[#bde0fe]"></span>
        <span class="text-[12px] font-medium leading-[17px] text-white">
          {{ blog.category }}
        </span>
      </div>
    </div>
    <div class="flex min-h-0 flex-1 flex-col px-[18px] pb-[18px] pt-[20px]">
      <h3 class="text-[18px] font-medium leading-[25px] text-black">
        {{ getBlogCardTitle(blog) }}
      </h3>
      <p class="mt-auto pt-3 text-[14px] font-medium leading-[21px] text-black">
        {{ getBlogCardMeta(blog) }} →
      </p>
    </div>
  </a>
</template>

<style scoped>
  .card-shadow {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  }
</style>
