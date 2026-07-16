<script setup lang="ts">
  import { onUnmounted, ref, watch } from "vue"
  import {
    BEXO_CTA_KONTAKT,
    BEXO_CTA_TERMIN,
    BEXO_NAV_LINKS,
  } from "~/constants/bexoNav"
  import { useClickOutside } from "~/composables/useClickOutside"
  import { useEventListener } from "~/composables/useEventListener"

  const p = withDefaults(
    defineProps<{
      variant?: "light" | "dark"
    }>(),
    { variant: "light" },
  )

  const open = ref(false)
  const headerRef = ref<HTMLElement | null>(null)
  const drawerRef = ref<HTMLElement | null>(null)

  function isDark() {
    return p.variant === "dark"
  }

  function close() {
    open.value = false
  }

  function toggle() {
    open.value = !open.value
  }

  watch(open, (v) => {
    if (typeof document === "undefined") return
    document.body.style.overflow = v ? "hidden" : ""
  })

  useClickOutside(drawerRef, () => {
    if (open.value) close()
  })

  useEventListener(window, "keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape" && open.value) close()
  })

  onUnmounted(() => {
    if (typeof document !== "undefined") document.body.style.overflow = ""
  })
</script>

<template>
  <header
    ref="headerRef"
    class="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-sm"
    :class="isDark() ? 'border-white/10 bg-[#0e2138]/95' : ''"
  >
    <div class="max-w-xl mx-auto flex items-center justify-between px-4 py-3">
      <a href="/" aria-label="Bexolutions Startseite" class="shrink-0">
        <span
          class="bexo-nav-logo block h-12 w-12"
          :class="isDark() ? 'bexo-nav-logo--dark' : 'bexo-nav-logo--light'"
        ></span>
      </a>
      <button
        type="button"
        class="grid min-h-11 min-w-11 place-items-center rounded-lg transition hover:bg-black/5"
        :class="isDark() ? 'text-white hover:bg-white/10' : 'text-[#0e2138]'"
        :aria-expanded="open"
        aria-controls="bexo-mobile-nav"
        aria-label="Menü öffnen"
        @click="toggle"
      >
        <svg
          v-if="!open"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg
          v-else
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
    </div>

    <div
      v-if="open"
      class="fixed inset-0 z-40 bg-black/40"
      aria-hidden="true"
      @click="close"
    ></div>

    <nav
      v-if="open"
      id="bexo-mobile-nav"
      ref="drawerRef"
      class="fixed inset-y-0 right-0 z-50 flex w-[min(100%,320px)] flex-col bg-white px-6 py-8 shadow-xl"
      :class="isDark() ? 'bg-[#0e2138] text-white' : ''"
    >
      <div class="flex flex-col gap-1">
        <a
          v-for="n of BEXO_NAV_LINKS"
          :key="n.l"
          :href="n.to"
          class="min-h-11 py-3 text-base font-medium leading-5 transition hover:opacity-70"
          :class="isDark() ? 'text-white' : 'text-[#0e2138]'"
          @click="close"
        >
          {{ n.l }}
        </a>
      </div>
      <div class="mt-auto flex flex-col gap-3 pt-8">
        <a
          :href="BEXO_CTA_KONTAKT.href"
          class="bexo-btn-navy bexo-btn-block"
          @click="close"
        >
          {{ BEXO_CTA_KONTAKT.label }}
        </a>
        <a
          :href="BEXO_CTA_TERMIN.href"
          class="bexo-btn-primary bexo-btn-block"
          @click="close"
        >
          {{ BEXO_CTA_TERMIN.label }}
        </a>
      </div>
    </nav>
  </header>
</template>
