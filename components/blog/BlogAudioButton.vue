<script setup lang="ts">
  import { onBeforeUnmount, reactive, ref } from "vue"

  const props = defineProps<{
    src: string
    label?: string
  }>()

  const audioEl = ref<HTMLAudioElement | null>(null)
  const state = reactive({
    isPlaying: false,
    isLoading: false,
  })

  function handleEnded() {
    state.isPlaying = false
  }

  function handleWaiting() {
    state.isLoading = true
  }

  function handleCanPlay() {
    state.isLoading = false
  }

  async function toggle() {
    const el = audioEl.value
    if (!el) return

    if (state.isPlaying) {
      el.pause()
      state.isPlaying = false
      return
    }

    state.isLoading = true
    try {
      await el.play()
      state.isPlaying = true
    } catch {
      state.isPlaying = false
    } finally {
      state.isLoading = false
    }
  }

  onBeforeUnmount(() => {
    audioEl.value?.pause()
  })
</script>

<template>
  <div class="inline-flex flex-col items-end gap-1">
    <button
      type="button"
      class="grid h-10 w-10 place-items-center rounded-full transition hover:bg-[#0e2138]/5"
      :class="state.isPlaying ? 'bg-[#bde0fe]' : 'bg-transparent'"
      :aria-label="
        state.isPlaying ? 'Audio pausieren' : label || 'Audioversion abspielen'
      "
      :aria-pressed="state.isPlaying"
      :disabled="state.isLoading"
      @click="toggle"
    >
      <!-- Pause -->
      <svg
        v-if="state.isPlaying"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="#0e2138"
        aria-hidden="true"
      >
        <rect x="6" y="5" width="4" height="14" rx="1" />
        <rect x="14" y="5" width="4" height="14" rx="1" />
      </svg>
      <!-- Speaker -->
      <svg
        v-else
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0e2138"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M3 9v6h4l5 5V4L7 9H3z" fill="#0e2138" stroke="none" />
        <path d="M16 8a5 5 0 0 1 0 8" />
        <path d="M19 5a9 9 0 0 1 0 14" />
      </svg>
    </button>

    <audio
      ref="audioEl"
      :src="src"
      preload="none"
      @ended="handleEnded"
      @waiting="handleWaiting"
      @canplay="handleCanPlay"
      @pause="state.isPlaying = false"
      @play="state.isPlaying = true"
    />
  </div>
</template>
