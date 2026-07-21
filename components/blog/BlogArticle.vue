<script setup lang="ts">
  import { computed, ref } from "vue"
  import type { IBlog, IBlogCta } from "~/types/dto/IBlog"
  import BlogBlock from "~/components/blog/BlogBlock.vue"
  import BlogAudioButton from "~/components/blog/BlogAudioButton.vue"
  import BlogSidebar from "~/components/blog/BlogSidebar.vue"
  import BexoFooter from "~/components/bexo/BexoFooter.vue"
  import BexoPageShell from "~/components/bexo/BexoPageShell.vue"
  import BlogArticleMobile from "~/components/bexo/mobile/BlogArticleMobile.vue"
  import SafeHtml from "~/components/common/SafeHtml.vue"
  import { useCanvasScale } from "~/composables/useCanvasScale"
  import { getBlogFeaturedTitle } from "~/utils/blogs"

  const p = defineProps<{ blog: IBlog }>()

  const canvasRef = ref<HTMLElement | null>(null)
  useCanvasScale(canvasRef)

  const IMG = "/images/wissen"
  const HOME = "/images/startseite"

  const navLinks = [
    { l: "Über uns", to: "/ueber-uns" },
    { l: "Leistungen", to: "/leistungen" },
    { l: "Wissen", to: "/wissen" },
    { l: "Treuhänder", to: "/treuhaender" },
  ]

  const defaultCta: IBlogCta = {
    heading: "Sie wollen nicht nur lesen — sondern umsetzen?",
    body: "Buchen Sie Ihre kostenlose 20-minütige Sichtbarkeitsanalyse.<br>Wir analysieren Ihre aktuelle digitale Sichtbarkeit in 20 Minuten — kostenlos und konkret.",
    buttonLabel: "Jetzt Sichtbarkeitsanalyse anfordern",
    buttonHref: "/kontakt",
    bgImage: `${HOME}/billboard.jpg`,
  }

  const cta = computed<IBlogCta>(() => ({ ...defaultCta, ...p.blog.cta }))
  const fullTitle = computed(() => getBlogFeaturedTitle(p.blog))
  const metaLine = computed(
    () => `${p.blog.category}  |  ${p.blog.readTime}  |  ${p.blog.date}`,
  )
</script>

<template>
  <BexoPageShell>
    <template #mobile>
      <BlogArticleMobile :blog="blog" />
    </template>
    <template #desktop>
      <div ref="canvasRef" class="canvas">
        <!-- ============================= NAV ============================= -->
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

        <!-- ============================= ARTICLE ============================= -->
        <article class="article-wrap">
          <!-- Header: title trio + meta box -->
          <div class="flex items-start justify-between gap-[40px] pt-[64px]">
            <div class="max-w-[1008px]">
              <h1 class="text-[40px] font-semibold leading-[1.3] text-black">
                {{ fullTitle }}
              </h1>
              <p
                v-if="blog.tagline"
                class="mt-[16px] text-[18px] font-medium leading-[1.4] text-black"
              >
                {{ blog.tagline }}
              </p>
            </div>

            <div
              class="flex w-[212px] shrink-0 flex-col items-end gap-[16px] border-l border-black/10 pl-[24px] pt-[8px]"
            >
              <BlogAudioButton
                v-if="blog.audioUrl"
                :src="blog.audioUrl"
                label="Kurzaudio abspielen"
              />
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
              <p
                class="text-right text-[16px] font-semibold leading-[1.6] text-black"
              >
                {{ metaLine }}
              </p>
            </div>
          </div>

          <!-- Hero image -->
          <div
            class="mt-[28px] h-[410px] w-full overflow-hidden rounded-[30px] bg-[#f9f9f9]"
          >
            <NuxtImg
              v-if="blog.heroImage"
              :src="blog.heroImage"
              class="h-full w-full object-cover"
              :alt="fullTitle"
            />
          </div>

          <!-- TL;DR callout -->
          <div
            class="mt-[40px] rounded-[30px] bg-[#0e2138] px-[46px] py-[36px]"
          >
            <p class="text-[18px] font-semibold leading-[1.5] text-white">
              {{ blog.tldr.title }}
            </p>
            <p
              class="mt-[10px] text-[16px] font-medium leading-[1.6] text-white/90"
            >
              {{ blog.tldr.body }}
            </p>
          </div>

          <!-- Two-column: body + sticky sidebar -->
          <div class="mt-[48px] flex items-start gap-[48px]">
            <div class="blog-body flex min-w-0 flex-1 flex-col gap-[24px]">
              <BlogBlock
                v-for="(block, i) of blog.blocks"
                :key="i"
                :block="block"
              />
            </div>
            <BlogSidebar
              class="sticky-rail"
              :author="blog.author"
              :toc="blog.toc"
              :title="fullTitle"
              :url="`/wissen/${blog.slug}`"
            />
          </div>
        </article>

        <!-- ============================= CTA BILLBOARD ============================= -->
        <section
          class="relative mt-[96px] overflow-hidden rounded-t-[200px]"
          style="width: 1512px; height: 679px"
        >
          <NuxtImg
            v-if="cta.bgImage"
            :src="cta.bgImage"
            class="absolute inset-0 h-full w-full object-cover object-top"
            alt="Bexolutions"
          />
          <div
            class="absolute inset-0"
            style="background: rgba(14, 33, 56, 0.55)"
          ></div>
          <h2
            class="absolute text-[40px] font-semibold leading-[1.4] text-white"
            style="left: 136px; top: 257px; width: 498px"
          >
            {{ cta.heading }}
          </h2>
          <SafeHtml
            :html="cta.body"
            class="absolute text-[20px] font-normal leading-[1.4] text-white"
            style="left: 136px; top: 393px; width: 639px"
          />
          <a
            :href="cta.buttonHref"
            class="btn-primary absolute"
            style="left: 136px; top: 513px; width: 370px"
          >
            {{ cta.buttonLabel }}
          </a>
        </section>

        <BexoFooter />
      </div>
    </template>
  </BexoPageShell>
</template>

<style scoped>
  .bexo {
    font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
    background: #ffffff;
  }
  .canvas {
    position: relative;
    width: 1512px;
    flex: none;
    background: #ffffff;
  }
  /* Centred 1272px content band (1512 − 2×120 gutters). */
  .article-wrap {
    width: 1272px;
    margin: 0 auto;
  }
  /* Sticky right rail; align-self:flex-start is required for sticky to detach. */
  .sticky-rail {
    position: sticky;
    top: 40px;
    align-self: flex-start;
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
