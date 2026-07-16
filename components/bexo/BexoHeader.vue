<script setup lang="ts">
  import { computed, onUnmounted, ref, watch } from "vue"
  import {
    BEXO_CTA_KONTAKT,
    BEXO_CTA_TERMIN,
    BEXO_NAV_LINKS,
  } from "~/constants/bexoNav"
  import { useEventListener } from "~/composables/useEventListener"

  const p = withDefaults(
    defineProps<{
      variant?: "light" | "dark"
    }>(),
    { variant: "light" },
  )

  const open = ref(false)

  const isDark = computed(() => p.variant === "dark")

  const menuLabel = computed(() =>
    open.value ? "Menü schliessen" : "Menü öffnen",
  )

  function close() {
    open.value = false
  }

  function openMenu() {
    open.value = true
  }

  function onMenuClick() {
    if (open.value) close()
    else openMenu()
  }

  watch(open, (v) => {
    if (typeof document === "undefined") return
    document.body.style.overflow = v ? "hidden" : ""
  })

  useEventListener(window, "keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape" && open.value) close()
  })

  onUnmounted(() => {
    if (typeof document !== "undefined") document.body.style.overflow = ""
  })
</script>

<template>
  <div>
    <header
      class="sticky top-0 z-50 w-full max-w-full border-b border-black/5 bg-white/95 backdrop-blur-sm"
      :class="isDark ? 'border-white/10 bg-[#0e2138]/95' : ''"
    >
      <div
        class="max-w-xl mx-auto flex w-full min-w-0 items-center justify-between px-4 py-3"
      >
        <a href="/" aria-label="Bexolutions Startseite" class="shrink-0">
          <span
            class="bexo-nav-logo block h-12 w-12"
            :class="isDark ? 'bexo-nav-logo--dark' : 'bexo-nav-logo--light'"
          ></span>
        </a>
        <button
          type="button"
          class="relative z-[120] grid min-h-11 min-w-11 place-items-center rounded-lg transition hover:bg-black/5"
          :class="isDark ? 'text-white hover:bg-white/10' : 'text-[#0e2138]'"
          :aria-expanded="open"
          aria-controls="bexo-mobile-nav"
          :aria-label="menuLabel"
          @click="onMenuClick"
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
    </header>

    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <button
          v-if="open"
          type="button"
          class="fixed inset-0 z-[110] bg-black/40"
          aria-label="Menü schliessen"
          @click="close"
        ></button>
      </Transition>

      <Transition
        enter-active-class="transition-transform duration-250 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <nav
          v-if="open"
          id="bexo-mobile-nav"
          class="fixed inset-y-0 right-0 z-[120] flex w-[min(100%,300px)] flex-col px-5 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))] shadow-2xl"
          :class="
            isDark ? 'bg-[#0e2138] text-white' : 'bg-white text-[#0e2138]'
          "
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <div class="flex items-center justify-between">
            <span class="text-sm font-semibold tracking-wide">Menü</span>
            <button
              type="button"
              class="grid min-h-11 min-w-11 place-items-center rounded-lg transition hover:bg-black/5"
              :class="isDark ? 'hover:bg-white/10' : ''"
              aria-label="Menü schliessen"
              @click="close"
            >
              <svg
                width="22"
                height="22"
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

          <div class="mt-6 flex flex-col">
            <a
              v-for="n of BEXO_NAV_LINKS"
              :key="n.l"
              :href="n.to"
              class="border-b py-3 text-base font-medium leading-5 transition hover:opacity-70"
              :class="
                isDark
                  ? 'border-white/10 text-white'
                  : 'border-black/5 text-[#0e2138]'
              "
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
      </Transition>
    </Teleport>
  </div>
</template>
