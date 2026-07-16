<script setup lang="ts">
  import BexoFooterMobile from "~/components/bexo/BexoFooterMobile.vue"
  import BexoHeader from "~/components/bexo/BexoHeader.vue"
  import { useBreakpoint } from "~/composables/useBreakpoint"

  withDefaults(
    defineProps<{
      headerVariant?: "light" | "dark"
    }>(),
    { headerVariant: "light" },
  )

  const { isDesktop } = useBreakpoint()
</script>

<template>
  <main class="bexo min-h-[100dvh] bg-white">
    <div v-if="!isDesktop" class="bexo-mobile lg:hidden">
      <BexoHeader :variant="headerVariant" />
      <slot name="mobile" />
      <BexoFooterMobile />
    </div>
    <div v-else class="bexo-canvas-wrap hidden lg:flex">
      <slot name="desktop" />
    </div>
  </main>
</template>
