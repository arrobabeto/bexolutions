<script setup lang="ts">
  import { onMounted, ref } from "vue"

  const props = withDefaults(
    defineProps<{
      poster: string
      video?: string
      /** Descriptive alt for content-bearing posters; leave empty for decorative. */
      posterAlt?: string
    }>(),
    {
      posterAlt: "",
    },
  )

  const videoReady = ref(false)
  const showVideo = ref(false)

  onMounted(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    showVideo.value = Boolean(props.video) && !reduced
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
      :src="video"
      class="bg-media__video absolute inset-0 h-full w-full object-cover"
      :class="{ 'bg-media__video--ready': videoReady }"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      @loadeddata="onVideoReady"
      @canplay="onVideoReady"
    />
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
