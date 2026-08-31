<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref } from "vue"
  import { useRuntimeConfig } from "#imports"

  const SCRIPT_SRC = "https://news.google.com/swg/js/v1/publisher.js"
  const SCRIPT_ATTR = "data-bexo-preferred-source"

  const config = useRuntimeConfig()
  const enabled = config.public.preferredSourceEnabled !== false

  const hostEl = ref<HTMLElement | null>(null)
  const showFallback = ref(false)

  let observer: MutationObserver | null = null
  let fallbackTimer: ReturnType<typeof setTimeout> | null = null

  function siteQuery() {
    try {
      return new URL(String(config.public.siteUrl)).hostname
    } catch {
      return "www.bexolutions.ch"
    }
  }

  const deeplink = `https://www.google.com/preferences/source?q=${encodeURIComponent(siteQuery())}`

  function hasGoogleButton(el: HTMLElement) {
    return el.childElementCount > 0 || el.textContent?.trim()
  }

  function ensureScript() {
    if (document.querySelector(`script[${SCRIPT_ATTR}]`)) return
    const script = document.createElement("script")
    script.src = SCRIPT_SRC
    script.async = true
    script.setAttribute(SCRIPT_ATTR, "1")
    document.head.appendChild(script)
  }

  onMounted(() => {
    if (!enabled || !hostEl.value) return

    // Vue may omit the empty boolean attr; set it explicitly for Google's scanner.
    hostEl.value.setAttribute("google-add-preferred-source-btn", "")
    hostEl.value.setAttribute("data-theme", "light")
    hostEl.value.setAttribute("data-lang", "de")

    ensureScript()

    observer = new MutationObserver(() => {
      if (hostEl.value && hasGoogleButton(hostEl.value)) {
        showFallback.value = false
        if (fallbackTimer) clearTimeout(fallbackTimer)
      }
    })
    observer.observe(hostEl.value, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    // If Google never injects (timing or domain not listed), show a deeplink CTA.
    fallbackTimer = setTimeout(() => {
      if (hostEl.value && !hasGoogleButton(hostEl.value)) {
        showFallback.value = true
      }
    }, 1500)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    if (fallbackTimer) clearTimeout(fallbackTimer)
  })
</script>

<template>
  <div v-if="enabled" class="preferred-source max-w-full overflow-hidden">
    <div
      ref="hostEl"
      class="min-h-[28px]"
      google-add-preferred-source-btn
      data-theme="light"
      data-lang="de"
    ></div>
    <a
      v-if="showFallback"
      :href="deeplink"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-1 inline-flex min-h-11 max-w-full items-center break-words text-sm font-medium leading-[1.4] text-[#134074] underline decoration-[#134074]/40 underline-offset-2 transition hover:opacity-70 lg:text-[14px]"
    >
      Als bevorzugte Quelle bei Google hinzufügen
    </a>
  </div>
</template>
