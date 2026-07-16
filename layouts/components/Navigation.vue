<script setup lang="ts">
  import { onUnmounted, ref, watch } from "vue"
  import { useRoute } from "#app"
  import { useClickOutside } from "~/composables/useClickOutside"
  import { useEventListener } from "~/composables/useEventListener"
  import { useTranslate } from "~/composables/useTranslate"

  const t = useTranslate()
  const route = useRoute()
  const open = ref(false)
  const drawerRef = ref<HTMLElement | null>(null)

  const nav = {
    links: [
      {
        name: { en: "Home" },
        to: "index" as const,
        matchExact: ["/", "/de", "/en"],
        matchPrefix: [] as string[],
      },
      {
        name: { en: "About" },
        to: "ueber-uns" as const,
        matchExact: [] as string[],
        matchPrefix: ["/ueber-uns", "/de/ueber-uns"],
      },
      {
        name: { en: "Posts" },
        to: "posts" as const,
        matchExact: [] as string[],
        matchPrefix: ["/posts", "/de/posts"],
      },
    ],
  }

  function isActive(l: (typeof nav.links)[number]) {
    return (
      l.matchExact.includes(route.path) ||
      l.matchPrefix.some(
        (path) => route.path === path || route.path.startsWith(path + "/"),
      )
    )
  }

  function linkClass(active: boolean) {
    return active
      ? "border-[#e0e0e0] bg-[#f6f6f6] text-[#010101] dark:border-[#282a36] dark:bg-[#22232b] dark:text-[#fefefe]"
      : ""
  }

  function close() {
    open.value = false
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
  <nav
    class="sticky top-0 z-10 border-b border-[#e0e0e0] bg-[#fefefe]/90 px-4 py-3 text-[#010101] backdrop-blur dark:border-[#282a36] dark:bg-[#191a22]/90 dark:text-[#fefefe]"
  >
    <div class="max-w-5xl mx-auto flex items-center justify-between gap-4">
      <NuxtLinkLocale
        to="index"
        class="text-sm font-semibold tracking-tight text-[#010101] dark:text-[#fefefe]"
      >
        Orbitype Headless CMS Template
      </NuxtLinkLocale>

      <div class="hidden items-center gap-1 lg:flex">
        <NuxtLinkLocale
          v-for="l of nav.links"
          :key="l.to"
          :to="l.to"
          class="rounded-full border border-transparent px-3 py-2 text-sm text-[#4e4e4e] transition hover:bg-[#f6f6f6] hover:text-[#010101] dark:text-[#cbcbcb] dark:hover:bg-[#22232b] dark:hover:text-[#fefefe]"
          :class="linkClass(isActive(l))"
        >
          {{ t(l.name) }}
        </NuxtLinkLocale>
      </div>

      <button
        type="button"
        class="grid min-h-11 min-w-11 place-items-center rounded-lg lg:hidden"
        :aria-expanded="open"
        aria-label="Open menu"
        @click="open = !open"
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
      class="fixed inset-0 z-40 bg-black/40 lg:hidden"
      @click="close"
    ></div>

    <div
      v-if="open"
      ref="drawerRef"
      class="fixed inset-y-0 right-0 z-50 flex w-[min(100%,280px)] flex-col gap-2 bg-[#fefefe] p-6 shadow-xl lg:hidden dark:bg-[#191a22]"
    >
      <NuxtLinkLocale
        v-for="l of nav.links"
        :key="l.to"
        :to="l.to"
        class="min-h-11 rounded-full border border-transparent px-3 py-3 text-base text-[#4e4e4e] dark:text-[#cbcbcb]"
        :class="linkClass(isActive(l))"
        @click="close"
      >
        {{ t(l.name) }}
      </NuxtLinkLocale>
    </div>
  </nav>
</template>
