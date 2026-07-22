<script setup lang="ts">
  import { computed, onBeforeUnmount, onMounted, ref } from "vue"

  const props = withDefaults(
    defineProps<{
      poster: string
      /** MP4 path (Safari / universal fallback). */
      video?: string
      /** Optional WebM path — preferred in Chrome/Firefox when present. */
      videoWebm?: string
      /** Descriptive alt for content-bearing posters; leave empty for decorative. */
      posterAlt?: string
      /** Poster loading strategy — use "lazy" for below-the-fold instances. */
      loading?: "eager" | "lazy"
    }>(),
    {
      posterAlt: "",
      loading: "eager",
    },
  )

  const rootEl = ref<HTMLElement | null>(null)
  const videoReady = ref(false)
  const showVideo = ref(false)

  const hasVideo = computed(() => Boolean(props.video || props.videoWebm))

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!hasVideo.value) return

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    if (reduced) return

    const el = rootEl.value
    if (!el) return

    // display:none (hidden mobile/desktop branch) never intersects, so
    // only the visible branch mounts a <video> and fetches media.
    observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        showVideo.value = true
        observer?.disconnect()
        observer = null
      },
      { rootMargin: "200px" },
    )
    observer.observe(el)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
  })

  function onVideoReady() {
    videoReady.value = true
  }
</script>

<template>
  <div
    ref="rootEl"
    class="bg-media relative overflow-hidden"
    :aria-hidden="props.posterAlt ? undefined : 'true'"
    v-bind="$attrs"
  >
    <NuxtImg
      :src="poster"
      class="bg-media__poster absolute inset-0 h-full w-full object-cover"
      :alt="props.posterAlt"
      :loading="props.loading"
    />
    <video
      v-if="showVideo"
      class="bg-media__video absolute inset-0 h-full w-full object-cover"
      :class="{ 'bg-media__video--ready': videoReady }"
      autoplay
      muted
      loop
      playsinline
      preload="none"
      @loadeddata="onVideoReady"
      @canplay="onVideoReady"
    >
      <source v-if="videoWebm" :src="videoWebm" type="video/webm" />
      <source v-if="video" :src="video" type="video/mp4" />
    </video>
  </div>
</template>

<style scoped>
  .bg-media__video {
    opacity: 0;
    transition: opacity 0.7s ease;
  }

  .bg-media__video--ready {
    opacity: 1;
  }
</style>
