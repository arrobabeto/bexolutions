<script setup lang="ts">
  import { onBeforeUnmount, ref, watch } from "vue"

  defineProps<{
    src: string
    alt: string
    caption?: string
  }>()

  const isOpen = ref(false)

  function openLightbox() {
    isOpen.value = true
  }

  function closeLightbox() {
    isOpen.value = false
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") closeLightbox()
  }

  watch(isOpen, (openState) => {
    if (!import.meta.client) return
    if (openState) {
      document.addEventListener("keydown", handleKeydown)
      document.body.style.overflow = "hidden"
    } else {
      document.removeEventListener("keydown", handleKeydown)
      document.body.style.overflow = ""
    }
  })

  onBeforeUnmount(() => {
    if (!import.meta.client) return
    document.removeEventListener("keydown", handleKeydown)
    document.body.style.overflow = ""
  })
</script>

<template>
  <div class="contents">
    <figure class="my-2 w-full min-w-0 max-w-full">
      <button
        type="button"
        class="group block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
        :aria-label="`Bild vergrössern: ${alt}`"
        @click="openLightbox"
      >
        <NuxtImg
          :src="src"
          class="h-auto w-full max-w-full rounded-[16px] object-cover transition-opacity group-hover:opacity-90 lg:rounded-[20px]"
          :alt="alt"
          sizes="100vw"
          loading="lazy"
        />
      </button>
      <figcaption
        v-if="caption"
        class="mt-2 break-words text-xs text-[#888787] lg:mt-[8px] lg:text-[14px]"
      >
        {{ caption }}
      </figcaption>
    </figure>

    <Teleport to="body">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-8"
        role="dialog"
        aria-modal="true"
        :aria-label="alt"
        @click.self="closeLightbox"
      >
        <button
          type="button"
          class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-2xl leading-none text-white transition-colors hover:bg-white/25 sm:right-6 sm:top-6"
          aria-label="Schliessen"
          @click="closeLightbox"
        >
          ×
        </button>
        <NuxtImg
          :src="src"
          class="max-h-full max-w-full cursor-zoom-out rounded-[12px] object-contain shadow-2xl"
          :alt="alt"
          @click="closeLightbox"
        />
      </div>
    </Teleport>
  </div>
</template>
