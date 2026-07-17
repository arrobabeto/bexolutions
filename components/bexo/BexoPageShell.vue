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
    <div class="bexo-mobile">
      <BexoHeader :variant="headerVariant" />
      <slot name="mobile" />
      <BexoFooterMobile />
    </div>
    <div class="bexo-canvas-wrap">
      <slot name="desktop" />
    </div>
  </main>
</template>
