import { onMounted, onUnmounted, watch, type Ref } from "vue"
import { BEXO_DESKTOP_BREAKPOINT_PX } from "~/constants/bexoNav"

/**
 * Scales a fixed-width design canvas to fill the viewport width on desktop (≥ lg).
 * Mobile uses native responsive layouts instead of scaling.
 *
 * Uses CSS `zoom` (not `transform: scale`) on purpose: `zoom` scales the layout
 * box too, so page height and scrolling stay correct without extra bookkeeping,
 * and it does not break `position: sticky` children (which `transform` would).
 *
 * Watches the canvas ref so scale still applies when the element mounts after
 * the initial onMounted (e.g. desktop slot gated behind a breakpoint).
 */
export function useCanvasScale(
  canvasRef: Ref<HTMLElement | null>,
  baseWidth = 1512,
) {
  let rafId = 0
  let resizeObserver: ResizeObserver | null = null

  function apply() {
    rafId = 0
    const canvas = canvasRef.value
    if (!canvas) return
    const w = window.innerWidth || baseWidth
    if (w < BEXO_DESKTOP_BREAKPOINT_PX) {
      canvas.style.removeProperty("zoom")
      return
    }
    const scale = w / baseWidth
    canvas.style.setProperty("zoom", String(scale))
  }

  function scheduleApply() {
    if (!rafId) rafId = requestAnimationFrame(apply)
  }

  function bindObserver(canvas: HTMLElement) {
    resizeObserver?.disconnect()
    resizeObserver = new ResizeObserver(() => scheduleApply())
    resizeObserver.observe(canvas)
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement)
  }

  watch(
    canvasRef,
    (canvas) => {
      if (!canvas) {
        resizeObserver?.disconnect()
        resizeObserver = null
        return
      }
      bindObserver(canvas)
      scheduleApply()
    },
    { flush: "post" },
  )

  onMounted(() => {
    const canvas = canvasRef.value
    if (canvas) bindObserver(canvas)
    apply()
    // Second pass after layout/fonts — covers late slot mounts in the same tick.
    scheduleApply()
    window.addEventListener("resize", scheduleApply, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener("resize", scheduleApply)
    resizeObserver?.disconnect()
    resizeObserver = null
    if (rafId) cancelAnimationFrame(rafId)
  })
}
