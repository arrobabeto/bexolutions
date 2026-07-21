<script setup lang="ts">
  import { computed, onMounted, ref } from "vue"

  const props = withDefaults(
    defineProps<{
      poster: string
      /** MP4 path (Safari / universal fallback). */
      video?: string
      /** Optional WebM path — preferred in Chrome/Firefox when present. */
      videoWebm?: string
      /** Descriptive alt for content-bearing posters; leave empty for decorative. */
      posterAlt?: string
    }>(),
    {
      posterAlt: "",
    },
  )

  const videoReady = ref(false)
  const showVideo = ref(false)

  const hasVideo = computed(() => Boolean(props.video || props.videoWebm))

  onMounted(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    showVideo.value = hasVideo.value && !reduced
  })

  function onVideoReady() {
    videoReady.value = true
  }
</script>

<template>
  <div
    class="bg-media relative overflow-hidden"
    :aria-hidden="props.posterAlt ? undefined : 'true'"
    v-bind="$attrs"
  >
    <NuxtImg
      :src="poster"
      class="bg-media__poster absolute inset-0 h-full w-full object-cover"
      :alt="props.posterAlt"
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
