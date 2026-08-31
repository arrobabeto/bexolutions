<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref, shallowRef } from "vue"
  import { useRuntimeConfig } from "#imports"

  type PreferredSourceApi = {
    init: (opts: { theme?: string; lang?: string }) => void
    addPreferredSource: () => void
  }

  const SCRIPT_SRC = "https://news.google.com/swg/js/v1/publisher.js"
  const SCRIPT_ATTR = "data-bexo-preferred-source"

  const config = useRuntimeConfig()
  const enabled = config.public.preferredSourceEnabled !== false

  const api = shallowRef<PreferredSourceApi | null>(null)
  const ready = ref(false)

  function siteQuery() {
    try {
      return new URL(String(config.public.siteUrl)).hostname
    } catch {
      return "www.bexolutions.ch"
    }
  }

  const deeplink = `https://www.google.com/preferences/source?q=${encodeURIComponent(siteQuery())}`

  function ensureManualScript() {
    if (document.querySelector(`script[${SCRIPT_ATTR}]`)) return
    const script = document.createElement("script")
    script.src = SCRIPT_SRC
    script.async = true
    script.setAttribute("preferred-sources-control", "manual")
    script.setAttribute(SCRIPT_ATTR, "1")
    document.head.appendChild(script)
  }

  function handleClick() {
    if (api.value?.addPreferredSource) {
      api.value.addPreferredSource()
      return
    }
    window.open(deeplink, "_blank", "noopener,noreferrer")
  }

  onMounted(() => {
    if (!enabled || typeof window === "undefined") return

    const win = window as Window & {
      PREFERRED_SOURCE?: ((ps: PreferredSourceApi) => void)[]
    }

    win.PREFERRED_SOURCE = win.PREFERRED_SOURCE || []
    win.PREFERRED_SOURCE.push((preferredSource) => {
      preferredSource.init({ theme: "light", lang: "de" })
      api.value = preferredSource
      ready.value = true
    })

    ensureManualScript()
  })

  onBeforeUnmount(() => {
    api.value = null
  })
</script>

<template>
  <div v-if="enabled" class="preferred-source w-full min-w-0">
    <!--
      Custom trigger (Google advanced JS): the standard badge clips inside
      the 212px sidebar when German copy wraps to two lines.
    -->
    <button
      type="button"
      class="preferred-source-btn"
      :aria-busy="!ready"
      @click="handleClick"
    >
      <span class="preferred-source-btn__icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62Z"
            fill="#4285F4"
          />
          <path
            d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.81.54-1.84.86-3.05.86-2.35 0-4.33-1.58-5.04-3.71H.96v2.33A9 9 0 0 0 9 18Z"
            fill="#34A853"
          />
          <path
            d="M3.96 10.71A5.41 5.41 0 0 1 3.68 9c0-.59.1-1.17.28-1.71V4.96H.96A9 9 0 0 0 0 9c0 1.45.35 2.82.96 4.04l3-2.33Z"
            fill="#FBBC05"
          />
          <path
            d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A8.96 8.96 0 0 0 9 0 9 9 0 0 0 .96 4.96l3 2.33C4.67 5.16 6.65 3.58 9 3.58Z"
            fill="#EA4335"
          />
        </svg>
      </span>
      <span class="preferred-source-btn__label">
        Zu bevorzugten Quellen hinzufügen
      </span>
    </button>
  </div>
</template>

<style scoped>
  .preferred-source-btn {
    display: flex;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    align-items: flex-start;
    gap: 8px;
    min-height: 44px;
    margin: 0;
    padding: 10px 12px;
    border: 1px solid #dadce0;
    border-radius: 9999px;
    background: #fff;
    color: #3c4043;
    text-align: left;
    font-family: Roboto, Arial, sans-serif;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.25;
    cursor: pointer;
    overflow: visible;
  }

  .preferred-source-btn:hover {
    background: #f8f9fa;
    box-shadow: 0 1px 2px rgba(60, 64, 67, 0.15);
  }

  .preferred-source-btn:focus-visible {
    outline: 2px solid #4285f4;
    outline-offset: 2px;
  }

  .preferred-source-btn__icon {
    display: grid;
    flex: none;
    place-items: center;
    width: 18px;
    height: 18px;
    margin-top: 1px;
  }

  .preferred-source-btn__label {
    flex: 1 1 auto;
    min-width: 0;
    overflow-wrap: anywhere;
  }
</style>
