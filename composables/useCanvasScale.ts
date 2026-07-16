import { onMounted, onUnmounted, type Ref } from "vue"
import { BEXO_DESKTOP_BREAKPOINT_PX } from "~/constants/bexoNav"

/**
 * Scales a fixed-width design canvas to fill the viewport width on desktop (≥ lg).
 * Mobile uses native responsive layouts instead of scaling.
 *
 * Uses CSS `zoom` (not `transform: scale`) on purpose: `zoom` scales the layout
 * box too, so page height and scrolling stay correct without extra bookkeeping,
 * and it does not break `position: sticky` children (which `transform` would).
 */
export function useCanvasScale(
  canvasRef: Ref<HTMLElement | null>,
  baseWidth = 1512,
) {
  let rafId = 0

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

  function onResize() {
    if (!rafId) rafId = requestAnimationFrame(apply)
  }

  onMounted(() => {
    apply()
    window.addEventListener("resize", onResize, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener("resize", onResize)
    if (rafId) cancelAnimationFrame(rafId)
  })
}
