import { onMounted, onUnmounted, type Ref } from "vue"

/**
 * Scales a fixed-width design canvas to always fill the viewport width, so the
 * pixel-perfect 1512px layouts have no left/right gutters on any screen size.
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
    const scale = (window.innerWidth || baseWidth) / baseWidth
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
