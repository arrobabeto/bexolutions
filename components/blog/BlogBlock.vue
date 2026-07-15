<script setup lang="ts">
  import type { BlogBlock } from "~/types/dto/IBlog"
  import SafeHtml from "~/components/common/SafeHtml.vue"

  defineProps<{ block: BlogBlock }>()
</script>

<template>
  <!-- Rich text --------------------------------------------------------- -->
  <SafeHtml v-if="block.type === 'richText'" :html="block.html" class="prose" />

  <!-- Numbered measure / sub-section ------------------------------------ -->
  <div
    v-else-if="block.type === 'sectionHeading'"
    :id="block.id"
    class="scroll-mt-24"
  >
    <p
      v-if="block.eyebrow"
      class="text-[20px] font-bold leading-[1.5] text-[#292929]"
    >
      {{ block.eyebrow }}
    </p>
    <h2 class="mt-[6px] text-[24px] font-semibold leading-[1.5] text-[#0e2138]">
      {{ block.heading }}
    </h2>
    <p
      v-if="block.body"
      class="mt-[8px] text-[18px] font-medium leading-[1.6] text-[#888787]"
    >
      {{ block.body }}
    </p>
  </div>

  <!-- Major-part divider heading ---------------------------------------- -->
  <h2
    v-else-if="block.type === 'sectionTitle'"
    :id="block.id"
    class="scroll-mt-24 text-[28px] font-semibold leading-[1.4] text-[#0e2138]"
  >
    {{ block.title }}
  </h2>

  <!-- Standalone divider ------------------------------------------------ -->
  <hr
    v-else-if="block.type === 'divider'"
    class="border-0 border-t border-black/10"
  />

  <!-- Table ------------------------------------------------------------- -->
  <div v-else-if="block.type === 'table'" class="overflow-x-auto">
    <table class="w-full table-auto border-collapse text-left">
      <thead>
        <tr>
          <th
            v-for="(h, i) of block.headers"
            :key="i"
            class="bg-[#f5f5f5] px-[24px] py-[16px] text-center text-[16px] font-medium text-[#0e2138]"
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
            class="px-[24px] py-[16px] align-top text-[16px] font-medium leading-[1.5] text-[#292929]"
          >
            {{ row[c] ?? "" }}
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="block.caption" class="mt-[8px] text-[14px] text-[#888787]">
      {{ block.caption }}
    </p>
  </div>

  <!-- List -------------------------------------------------------------- -->
  <component
    :is="block.ordered ? 'ol' : 'ul'"
    v-else-if="block.type === 'list'"
    class="flex flex-col gap-[10px] pl-[22px] text-[18px] font-medium leading-[1.6] text-[#292929]"
    :class="block.ordered ? 'list-decimal' : 'list-disc'"
  >
    <li v-for="(item, i) of block.items" :key="i">{{ item }}</li>
  </component>

  <!-- Callout ----------------------------------------------------------- -->
  <div
    v-else-if="block.type === 'callout'"
    class="rounded-[30px] px-[40px] py-[32px]"
    :class="
      block.variant === 'highlight'
        ? 'bg-[#bde0fe] text-[#0e2138]'
        : 'bg-[#0e2138] text-white'
    "
  >
    <p v-if="block.title" class="text-[18px] font-semibold leading-[1.5]">
      {{ block.title }}
    </p>
    <p
      class="text-[16px] font-medium leading-[1.6]"
      :class="{ 'mt-[8px]': block.title }"
    >
      {{ block.body }}
    </p>
  </div>
</template>

<style scoped>
  /* Rich-text body styling (SafeHtml renders a wrapper <div>). */
  .prose :deep(p) {
    font-size: 18px;
    line-height: 1.6;
    color: #292929;
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
    padding-left: 22px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 18px;
    line-height: 1.6;
    color: #292929;
  }
  .prose :deep(ul) {
    list-style: disc;
  }
  .prose :deep(ol) {
    list-style: decimal;
  }
</style>
