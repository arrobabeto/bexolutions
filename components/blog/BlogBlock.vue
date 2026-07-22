<script setup lang="ts">
  import type { BlogBlock } from "~/types/dto/IBlog"
  import BlogImage from "~/components/blog/BlogImage.vue"
  import SafeHtml from "~/components/common/SafeHtml.vue"

  defineProps<{ block: BlogBlock }>()
</script>

<template>
  <!-- Rich text --------------------------------------------------------- -->
  <SafeHtml
    v-if="block.type === 'richText'"
    :html="block.html"
    class="prose min-w-0 max-w-full break-words"
  />

  <!-- Numbered measure / sub-section ------------------------------------ -->
  <div
    v-else-if="block.type === 'sectionHeading'"
    :id="block.id"
    class="min-w-0 max-w-full scroll-mt-24"
  >
    <p
      v-if="block.eyebrow"
      class="break-words text-base font-bold leading-[1.5] text-[#292929] lg:text-[20px]"
    >
      {{ block.eyebrow }}
    </p>
    <h2
      class="mt-1 break-words text-xl font-semibold leading-[1.4] text-[#0e2138] lg:mt-[6px] lg:text-[24px] lg:leading-[1.5]"
    >
      {{ block.heading }}
    </h2>
    <p
      v-if="block.body"
      class="mt-2 break-words text-sm font-medium leading-[1.6] text-[#888787] sm:text-base lg:mt-[8px] lg:text-[18px]"
    >
      {{ block.body }}
    </p>
  </div>

  <!-- Major-part divider heading ---------------------------------------- -->
  <h2
    v-else-if="block.type === 'sectionTitle'"
    :id="block.id"
    class="min-w-0 max-w-full scroll-mt-24 break-words text-xl font-semibold leading-[1.35] text-[#0e2138] sm:text-2xl lg:text-[28px] lg:leading-[1.4]"
  >
    {{ block.title }}
  </h2>

  <!-- Standalone divider ------------------------------------------------ -->
  <hr
    v-else-if="block.type === 'divider'"
    class="border-0 border-t border-black/10"
  />

  <!-- Table ------------------------------------------------------------- -->
  <div
    v-else-if="block.type === 'table'"
    class="-mx-1 min-w-0 max-w-full overflow-x-auto overscroll-x-contain"
  >
    <table
      class="w-full min-w-[28rem] table-auto border-collapse text-left lg:min-w-0"
    >
      <thead>
        <tr>
          <th
            v-for="(h, i) of block.headers"
            :key="i"
            class="bg-[#f5f5f5] px-3 py-3 text-center text-xs font-medium text-[#0e2138] sm:text-sm lg:px-[24px] lg:py-[16px] lg:text-[16px]"
          >
            {{ h }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, r) of block.rows"
          :key="r"
          class="border-b border-black/5"
        >
          <td
            v-for="(h, c) of block.headers"
            :key="c"
            class="break-words px-3 py-3 align-top text-xs font-medium leading-[1.5] text-[#292929] sm:text-sm lg:px-[24px] lg:py-[16px] lg:text-[16px]"
          >
            {{ row[c] ?? "" }}
          </td>
        </tr>
      </tbody>
    </table>
    <p
      v-if="block.caption"
      class="mt-2 break-words text-xs text-[#888787] lg:mt-[8px] lg:text-[14px]"
    >
      {{ block.caption }}
    </p>
  </div>

  <!-- List -------------------------------------------------------------- -->
  <component
    :is="block.ordered ? 'ol' : 'ul'"
    v-else-if="block.type === 'list'"
    class="flex min-w-0 max-w-full flex-col gap-2 break-words pl-5 text-sm font-medium leading-[1.6] text-[#292929] sm:text-base lg:gap-[10px] lg:pl-[22px] lg:text-[18px]"
    :class="block.ordered ? 'list-decimal' : 'list-disc'"
  >
    <li v-for="(item, i) of block.items" :key="i" class="break-words">
      {{ item }}
    </li>
  </component>

  <!-- Image ------------------------------------------------------------- -->
  <BlogImage
    v-else-if="block.type === 'image'"
    :src="block.src"
    :alt="block.alt"
    :caption="block.caption"
  />

  <!-- Callout ----------------------------------------------------------- -->
  <div
    v-else-if="block.type === 'callout'"
    class="box-border w-full min-w-0 max-w-full rounded-[20px] px-5 py-5 sm:px-6 sm:py-6 lg:rounded-[30px] lg:px-[40px] lg:py-[32px]"
    :class="
      block.variant === 'highlight'
        ? 'bg-[#bde0fe] text-[#0e2138]'
        : 'bg-[#0e2138] text-white'
    "
  >
    <p
      v-if="block.title"
      class="break-words text-base font-semibold leading-[1.5] lg:text-[18px]"
    >
      {{ block.title }}
    </p>
    <p
      class="break-words text-sm font-medium leading-[1.6] sm:text-base lg:text-[16px]"
      :class="{ 'mt-2 lg:mt-[8px]': block.title }"
    >
      {{ block.body }}
    </p>
  </div>
</template>

<style scoped>
  .prose {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .prose :deep(p),
  .prose :deep(li),
  .prose :deep(td),
  .prose :deep(th) {
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .prose :deep(p) {
    font-size: 0.9375rem;
    line-height: 1.625;
    color: #292929;
  }

  @media (min-width: 640px) {
    .prose :deep(p) {
      font-size: 1rem;
    }
  }

  @media (min-width: 1024px) {
    .prose :deep(p) {
      font-size: 18px;
      line-height: 1.6;
    }
  }

  .prose :deep(p + p) {
    margin-top: 16px;
  }
  .prose :deep(strong) {
    font-weight: 600;
    color: #0e2138;
  }
  .prose :deep(a) {
    color: #134074;
    text-decoration: underline;
  }
  .prose :deep(a:hover) {
    opacity: 0.7;
  }
  .prose :deep(ul),
  .prose :deep(ol) {
    margin-top: 16px;
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 0.9375rem;
    line-height: 1.625;
    color: #292929;
  }

  @media (min-width: 1024px) {
    .prose :deep(ul),
    .prose :deep(ol) {
      padding-left: 22px;
      gap: 10px;
      font-size: 18px;
      line-height: 1.6;
    }
  }

  .prose :deep(ul) {
    list-style: disc;
  }
  .prose :deep(ol) {
    list-style: decimal;
  }

  .prose :deep(img),
  .prose :deep(table) {
    max-width: 100%;
  }

  .prose :deep(table) {
    display: block;
    overflow-x: auto;
  }
</style>
