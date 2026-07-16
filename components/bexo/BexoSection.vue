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
    class="box-border w-full min-w-0 px-4"
    :class="[
      p.compactY ? 'py-6' : p.compactTop ? 'pb-10 pt-6' : 'py-8',
      p.class,
    ]"
  >
    <div
      class="mx-auto w-full min-w-0"
      :class="p.narrow ? 'max-w-lg' : 'max-w-xl'"
    >
      <slot />
    </div>
  </section>
</template>
