<script setup lang="ts">
  import { computed } from "vue"
  import sanitizeHtml from "sanitize-html"

  const p = defineProps<{
    html: string
  }>()

  const sanitized = computed(() =>
    sanitizeHtml(p.html, {
      allowedTags: [
        ...sanitizeHtml.defaults.allowedTags,
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "img",
        "table",
        "thead",
        "tbody",
        "tfoot",
        "tr",
        "th",
        "td",
      ],
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        a: ["href", "name", "target", "rel"],
        "*": ["id", "class"],
        td: ["data-header", "colspan", "rowspan"],
        th: ["data-header", "colspan", "rowspan"],
        img: ["src", "alt", "width", "height"],
      },
      allowedSchemes: ["http", "https", "mailto", "tel"],
    }),
  )
</script>

<template>
  <!--eslint-disable vue/no-v-html-->
  <div class="legal-prose" v-html="sanitized" />
</template>

<style scoped>
  .legal-prose {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    overflow-wrap: anywhere;
    word-break: break-word;
    color: #292929;
  }

  .legal-prose :deep(> :first-child) {
    margin-top: 0;
  }

  .legal-prose :deep(h1) {
    font-size: 1.65rem;
    font-weight: 600;
    line-height: 1.3;
    color: #0e2138;
    margin: 0 0 1rem;
  }

  .legal-prose :deep(h2) {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.35;
    color: #0e2138;
    margin: 1.75rem 0 0.625rem;
    scroll-margin-top: 5.5rem;
  }

  .legal-prose :deep(h3) {
    font-size: 1.0625rem;
    font-weight: 600;
    line-height: 1.4;
    color: #0e2138;
    margin: 1.25rem 0 0.5rem;
    scroll-margin-top: 5.5rem;
  }

  .legal-prose :deep(h4) {
    font-size: 0.9375rem;
    font-weight: 600;
    line-height: 1.45;
    color: #0e2138;
    margin: 1rem 0 0.375rem;
  }

  .legal-prose :deep(p),
  .legal-prose :deep(li),
  .legal-prose :deep(td),
  .legal-prose :deep(th) {
    font-size: 0.9375rem;
    line-height: 1.625;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .legal-prose :deep(p + p) {
    margin-top: 0.875rem;
  }

  .legal-prose :deep(a) {
    color: #134074;
    text-decoration: underline;
    word-break: break-word;
  }

  .legal-prose :deep(a:hover) {
    opacity: 0.7;
  }

  .legal-prose :deep(ul),
  .legal-prose :deep(ol) {
    margin: 0.875rem 0;
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .legal-prose :deep(ul) {
    list-style: disc;
  }

  .legal-prose :deep(ol) {
    list-style: decimal;
  }

  /* Section blocks nested as list items (Legally Ok structure) */
  .legal-prose :deep(ul:has(> li > h3)),
  .legal-prose :deep(ul:has(> li > h4)),
  .legal-prose :deep(ol:has(> li > h3)),
  .legal-prose :deep(ol:has(> li > h4)) {
    padding-left: 0;
    gap: 1.25rem;
    list-style: none;
  }

  .legal-prose :deep(li:has(> h3)),
  .legal-prose :deep(li:has(> h4)) {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .legal-prose :deep(li:has(> h3) > h3),
  .legal-prose :deep(li:has(> h4) > h4) {
    margin-top: 0;
  }

  .legal-prose :deep(ul ul),
  .legal-prose :deep(ol ul) {
    margin-top: 0.5rem;
  }

  .legal-prose :deep(strong) {
    font-weight: 600;
    color: #0e2138;
  }

  .legal-prose :deep(br) {
    content: "";
  }

  /* Desktop / canvas: normal table */
  .legal-prose :deep(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 1.25rem 0;
    font-size: 0.875rem;
    line-height: 1.5;
    max-width: 100%;
  }

  .legal-prose :deep(th),
  .legal-prose :deep(td) {
    border: 1px solid #e5e5e5;
    padding: 0.625rem 0.75rem;
    text-align: left;
    vertical-align: top;
  }

  .legal-prose :deep(th) {
    background: #f5f5f5;
    font-weight: 600;
    color: #0e2138;
  }

  /* Mobile + tablet (< lg): card rows using data-header */
  @media (max-width: 1023px) {
    .legal-prose :deep(table) {
      display: block;
      width: 100%;
      border: none;
      margin: 1rem 0;
    }

    .legal-prose :deep(thead) {
      display: none;
    }

    .legal-prose :deep(tbody) {
      display: block;
      width: 100%;
    }

    .legal-prose :deep(tr) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      margin-bottom: 0.875rem;
      padding: 0.25rem 0;
      background: #fafafa;
      overflow: hidden;
    }

    .legal-prose :deep(tr:last-child) {
      margin-bottom: 0;
    }

    .legal-prose :deep(td) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding: 0.625rem 0.875rem 0.625rem calc(38% + 1rem);
      text-align: left;
      font-size: 0.8125rem;
      line-height: 1.5;
      min-height: 2.5rem;
    }

    .legal-prose :deep(td:last-child) {
      border-bottom: none;
    }

    .legal-prose :deep(td::before) {
      content: attr(data-header);
      position: absolute;
      top: 0.625rem;
      left: 0.875rem;
      width: 36%;
      padding-right: 0.5rem;
      font-weight: 600;
      color: #0e2138;
      font-size: 0.75rem;
      line-height: 1.4;
      white-space: normal;
    }

    .legal-prose :deep(td:not([data-header])::before),
    .legal-prose :deep(td[data-header=""]::before) {
      content: none;
    }

    .legal-prose :deep(td:not([data-header])),
    .legal-prose :deep(td[data-header=""]) {
      padding-left: 0.875rem;
    }
  }

  @media (min-width: 640px) {
    .legal-prose :deep(p),
    .legal-prose :deep(li) {
      font-size: 1rem;
    }

    .legal-prose :deep(h2) {
      font-size: 1.35rem;
    }

    .legal-prose :deep(h3) {
      font-size: 1.125rem;
    }
  }

  @media (min-width: 1024px) {
    .legal-prose :deep(h1) {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    .legal-prose :deep(h2) {
      font-size: 1.5rem;
      margin: 2.5rem 0 1rem;
      scroll-margin-top: 6rem;
    }

    .legal-prose :deep(h3) {
      font-size: 1.25rem;
      scroll-margin-top: 6rem;
    }

    .legal-prose :deep(h4) {
      font-size: 1.125rem;
    }

    .legal-prose :deep(p),
    .legal-prose :deep(li) {
      font-size: 18px;
      line-height: 1.6;
    }

    .legal-prose :deep(table) {
      font-size: 0.9375rem;
    }
  }
</style>
