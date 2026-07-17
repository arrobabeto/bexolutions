<script setup lang="ts">
  import BexoSection from "~/components/bexo/BexoSection.vue"
  import LegalHtml from "~/components/common/LegalHtml.vue"

  defineProps<{
    title: string
    html: string
    showCookieCta?: boolean
  }>()

  const emit = defineEmits<{
    openCookieBanner: []
  }>()
</script>

<template>
  <div class="box-border w-full min-w-0 max-w-full overflow-x-clip pb-2">
    <BexoSection compact-top>
      <h1
        class="break-words text-[1.65rem] font-semibold leading-tight text-[#0e2138] sm:text-2xl"
      >
        {{ title }}
      </h1>

      <div v-if="showCookieCta" class="mt-5 sm:mt-6">
        <button
          type="button"
          class="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#bde0fe] px-6 text-sm font-medium text-[#0e2138] transition hover:brightness-95 sm:w-auto"
          @click="emit('openCookieBanner')"
        >
          Cookie-Banner anzeigen
        </button>
      </div>
    </BexoSection>

    <BexoSection compact-y>
      <div class="min-w-0 max-w-full pb-6">
        <LegalHtml :html="html" />
      </div>
    </BexoSection>
  </div>
</template>
