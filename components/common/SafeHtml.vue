<script setup lang="ts">
  import { computed } from "vue"
  import sanitizeHtml from "sanitize-html"

  const p = defineProps<{
    html: string
  }>()

  const sanitized = computed(() =>
    sanitizeHtml(p.html, {
      transformTags: {
        a: (tagName, attribs) => ({
          tagName,
          attribs: {
            ...attribs,
            target: "_blank",
            rel: "noopener noreferrer",
          },
        }),
      },
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        a: ["href", "name", "target", "rel"],
      },
    }),
  )
</script>

<template>
  <!--eslint-disable vue/no-v-html-->
  <div v-html="sanitized" />
</template>
