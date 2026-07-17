<script setup lang="ts">
  import { ref } from "vue"
  import BexoFooter from "~/components/bexo/BexoFooter.vue"
  import BexoPageShell from "~/components/bexo/BexoPageShell.vue"
  import LegalPageMobile from "~/components/bexo/mobile/LegalPageMobile.vue"
  import LegalHtml from "~/components/common/LegalHtml.vue"
  import { useCanvasScale } from "~/composables/useCanvasScale"

  const p = defineProps<{
    title: string
    html: string
    showCookieCta?: boolean
  }>()

  const canvasRef = ref<HTMLElement | null>(null)
  useCanvasScale(canvasRef)

  const navLinks = [
    { l: "Über uns", to: "/ueber-uns" },
    { l: "Leistungen", to: "/leistungen" },
    { l: "Wissen", to: "/wissen" },
    { l: "Treuhänder", to: "/treuhaender" },
  ]

  function openCookieBanner() {
    if (typeof window === "undefined") return
    const banner = (
      window.document as Document & {
        cookieBanner?: { show?: () => void }
      }
    ).cookieBanner
    banner?.show?.()
  }
</script>

<template>
  <BexoPageShell>
    <template #mobile>
      <LegalPageMobile
        :title="title"
        :html="html"
        :show-cookie-cta="showCookieCta"
        @open-cookie-banner="openCookieBanner"
      />
    </template>
    <template #desktop>
      <div ref="canvasRef" class="canvas">
        <header
          class="relative"
          style="width: 1512px; height: 180px; z-index: 20"
        >
          <a href="/" aria-label="Bexolutions Startseite">
            <span
              class="nav-logo absolute"
              style="left: 120px; top: 64px; width: 107px; height: 107px"
            ></span>
          </a>
          <nav
            class="absolute flex items-center"
            style="left: 572px; top: 95px; height: 44px; gap: 24px"
          >
            <a
              v-for="n of navLinks"
              :key="n.l"
              :href="n.to"
              class="text-[16px] font-medium leading-5 text-[#0e2138] transition hover:opacity-70"
            >
              {{ n.l }}
            </a>
          </nav>
          <div
            class="absolute flex items-center"
            style="left: 993px; top: 95px; gap: 10px"
          >
            <a href="/kontakt" class="btn-navy" style="width: 153px">Kontakt</a>
            <a
              href="https://calendly.com/bexolutions/discovery-call"
              class="btn-primary"
              style="width: 237px"
            >
              Termin vereinbaren
            </a>
          </div>
        </header>

        <article class="article-wrap pb-[96px] pt-[48px]">
          <h1 class="text-[40px] font-semibold leading-[1.3] text-[#0e2138]">
            {{ title }}
          </h1>

          <div v-if="showCookieCta" class="mt-[32px]">
            <button
              type="button"
              class="btn-primary px-8"
              @click="openCookieBanner"
            >
              Cookie-Banner anzeigen
            </button>
          </div>

          <div class="mt-[40px]">
            <LegalHtml :html="html" />
          </div>
        </article>

        <BexoFooter />
      </div>
    </template>
  </BexoPageShell>
</template>

<style scoped>
  .canvas {
    position: relative;
    width: 1512px;
    flex: none;
    background: #ffffff;
  }

  .article-wrap {
    width: 1272px;
    margin: 0 auto;
  }

  .nav-logo {
    background-color: #0e2138;
    -webkit-mask: url("/images/startseite/logo-mark.png") center / contain
      no-repeat;
    mask: url("/images/startseite/logo-mark.png") center / contain no-repeat;
  }

  .btn-primary,
  .btn-navy {
    display: inline-grid;
    place-items: center;
    height: 44px;
    border-radius: 9999px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    transition:
      filter 0.15s ease,
      background 0.15s ease;
    white-space: nowrap;
  }

  .btn-primary {
    background: #bde0fe;
    color: #0e2138;
  }

  .btn-primary:hover {
    filter: brightness(0.96);
  }

  .btn-navy {
    background: #13315c;
    color: #ffffff;
  }

  .btn-navy:hover {
    filter: brightness(1.1);
  }
</style>
