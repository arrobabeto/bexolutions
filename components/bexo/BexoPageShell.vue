<script setup lang="ts">
  import BexoFooterMobile from "~/components/bexo/BexoFooterMobile.vue"
  import BexoHeader from "~/components/bexo/BexoHeader.vue"

  withDefaults(
    defineProps<{
      headerVariant?: "light" | "dark"
    }>(),
    { headerVariant: "light" },
  )
</script>

<template>
  <main class="bexo min-h-[100dvh] overflow-x-clip bg-white">
    <!-- CSS-only toggle: keep both trees in the DOM so canvas scale can run on mount. -->
    <div class="bexo-mobile lg:hidden">
      <BexoHeader :variant="headerVariant" />
      <slot name="mobile" />
      <BexoFooterMobile />
    </div>
    <div class="bexo-canvas-wrap hidden w-full lg:flex">
      <slot name="desktop" />
    </div>
  </main>
</template>
