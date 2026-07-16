<script setup lang="ts">
  import { useBreakpoint } from "~/composables/useBreakpoint"

  const { isDesktop } = useBreakpoint()
</script>

<template>
  <main class="bexo min-h-[100dvh] bg-white">
    <div v-if="!isDesktop" class="lg:hidden">
      <slot name="mobile" />
    </div>
    <div v-else class="bexo-canvas-wrap hidden lg:flex">
      <slot name="desktop" />
    </div>
  </main>
</template>
