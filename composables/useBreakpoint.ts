import { onMounted, onUnmounted, reactive, toRef } from "vue"
import { BEXO_DESKTOP_BREAKPOINT_PX } from "~/constants/bexoNav"

export function useBreakpoint() {
  const state = reactive({
    isDesktop:
      typeof window !== "undefined"
        ? window.innerWidth >= BEXO_DESKTOP_BREAKPOINT_PX
        : false,
  })
  let mq: MediaQueryList | null = null

  function sync() {
    if (typeof window === "undefined") return
    state.isDesktop = window.innerWidth >= BEXO_DESKTOP_BREAKPOINT_PX
  }

  function onChange() {
    sync()
  }

  onMounted(() => {
    mq = window.matchMedia(`(min-width: ${BEXO_DESKTOP_BREAKPOINT_PX}px)`)
    sync()
    mq.addEventListener("change", onChange)
    window.addEventListener("resize", onChange, { passive: true })
  })

  onUnmounted(() => {
    mq?.removeEventListener("change", onChange)
    window.removeEventListener("resize", onChange)
  })

  return { isDesktop: toRef(state, "isDesktop") }
}
