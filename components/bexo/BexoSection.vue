<script setup lang="ts">
  const p = defineProps<{
    narrow?: boolean
    compactTop?: boolean
    compactY?: boolean
    class?: string
  }>()
</script>

<template>
  <section
    class="px-4"
    :class="[
      p.compactY ? 'py-6' : p.compactTop ? 'pb-12 pt-8' : 'py-12',
      p.narrow ? 'max-w-lg mx-auto' : 'max-w-xl mx-auto',
      p.class,
    ]"
  >
    <slot />
  </section>
</template>
