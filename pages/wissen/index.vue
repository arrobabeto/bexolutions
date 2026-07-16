<script setup lang="ts">
  import { ref } from "vue"
  import { definePageMeta, useHead } from "#imports"
  import BexoFooter from "~/components/bexo/BexoFooter.vue"
  import { useCanvasScale } from "~/composables/useCanvasScale"

  definePageMeta({ layout: false })

  const canvasRef = ref<HTMLElement | null>(null)
  useCanvasScale(canvasRef)

  const IMG = "/images/wissen"
  const HOME = "/images/startseite"

  useHead({
    title: "Wissen — Bexolutions",
    htmlAttrs: { lang: "de" },
    link: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500&family=Jost:wght@400;500&family=Inter:wght@400;500;700&display=swap",
      },
    ],
  })

  const navLinks = [
    { l: "Über uns", to: "/ueber-uns" },
    { l: "Leistungen", to: "/leistungen" },
    { l: "Wissen", to: "/wissen" },
    { l: "Treuhänder", to: "#" },
  ]

  const chips = [
    { label: "Alle", w: 104, active: true },
    { label: "SEO & Google", w: 158, active: false },
    { label: "KI-Sichtbarkeit", w: 159, active: false },
    { label: "Local SEO", w: 158, active: false },
    { label: "LinkedIn", w: 158, active: false },
    { label: "Website", w: 158, active: false },
    { label: "Treuhand", w: 158, active: false },
  ]

  // ---- Article grid: categories with a divider + label + 3 identical cards ----
  const cols = [120, 548, 976]
  const categories = [
    { label: "KI & GEO", divider: 1909, labelTop: 1973, cardsTop: 2033 },
    { label: "Local SEO", divider: 2365, labelTop: 2429, cardsTop: 2489 },
    { label: "SEO für KMU", divider: 2821, labelTop: 2885, cardsTop: 2945 },
    {
      label: "Treuhand-spezifisch",
      divider: null,
      labelTop: 3672,
      cardsTop: 3732,
    },
    {
      label: "LinkedIn & Personal Branding",
      divider: 4064,
      labelTop: 4128,
      cardsTop: 4188,
    },
  ]

  // ---- Topic cards (Wissen nach Thema) ----
  const topics = [
    {
      left: 120,
      top: 5199,
      icon: "🔍",
      title: "SEO & Google",
      body: "Organische Sichtbarkeit, Keyword-Strategie, technisches SEO — ohne Werbebudget zu mehr Kunden über Google.",
    },
    {
      left: 554,
      top: 5199,
      icon: "📊",
      title: "KI-Sichtbarkeit",
      body: "GEO Readiness, ChatGPT-Optimierung, Google AI Mode — wie Ihr KMU in KI-Antworten erscheint.",
    },
    {
      left: 988,
      top: 5199,
      icon: "🚀",
      title: "Local SEO",
      body: "Google Business Profile, Google Maps, Bewertungsmanagement — für KMU mit lokalem Kundenfokus.",
    },
    {
      left: 120,
      top: 5529,
      icon: "🗺️",
      title: "LinkedIn",
      body: "Personal Branding, Thought Leadership, LinkedIn Outreach — für KMU-Inhaber und Geschäftsführer.",
    },
    {
      left: 554,
      top: 5529,
      icon: "📈",
      title: "Website & Conversion",
      body: "StoryBrand-Methodik, Conversion-Optimierung, Webdesign — Websites die verkaufen, nicht nur existieren.",
    },
    {
      left: 988,
      top: 5529,
      icon: "📈",
      title: "Treuhand & Steuerberatung",
      body: "Spezialisiertes Marketing-Wissen für Treuhandbüros in der Deutschschweiz — Mandanten über Google gewinnen.",
    },
  ]
</script>

<template>
  <main class="bexo">
    <div ref="canvasRef" class="canvas">
      <!-- ============================= NAV (light) ============================= -->
      <header
        class="absolute"
        style="left: 0; top: 0; width: 1512px; height: 180px; z-index: 20"
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
          <a href="#" class="btn-primary" style="width: 237px">
            Termin vereinbaren
          </a>
        </div>
      </header>

      <!-- ============================= HERO CARD ============================= -->
      <section
        class="absolute rounded-[30px] bg-[#f9f9f9]"
        style="left: 120px; top: 252px; width: 1272px; height: 326px"
      >
        <h1
          class="absolute left-1/2 -translate-x-1/2 text-center text-[40px] font-semibold leading-[56px] text-black"
          style="top: 64px; width: 875px"
        >
          Wissen, das wirkt.
          <br />
          Marketing für Schweizer KMU — ohne Theorie.
        </h1>
        <p
          class="absolute left-1/2 -translate-x-1/2 text-center text-[18px] font-medium leading-[25px] text-black"
          style="top: 202px; width: 933px"
        >
          Kein Content-Marketing-Bla. Praxisnahes Wissen zu SEO, Local SEO,
          KI-Sichtbarkeit und LinkedIn — von einem Team, das dieselben Methoden
          täglich für über 100 KMU in der Deutschschweiz anwendet.
        </p>
      </section>

      <!-- featured hero image -->
      <div
        class="absolute overflow-hidden rounded-[30px]"
        style="left: 120px; top: 614px; width: 1272px; height: 410px"
      >
        <NuxtImg
          :src="`${IMG}/hero-feature.jpg`"
          class="h-full w-full object-cover"
          alt=""
        />
      </div>

      <!-- intro paragraph -->
      <p
        class="absolute left-1/2 -translate-x-1/2 text-center text-[20px] font-medium leading-[24px] text-black"
        style="top: 1106px; width: 840px"
      >
        Jeder Artikel auf dieser Seite basiert auf echter Kundenerfahrung —
        nicht auf Theorie. Wir schreiben über das, was wir umsetzen, und über
        die Resultate, die es bringt.
      </p>

      <!-- filter chips -->
      <div
        class="absolute flex items-center"
        style="left: 184px; top: 1218px; gap: 16px"
      >
        <span
          v-for="c of chips"
          :key="c.label"
          class="grid h-[44px] place-items-center rounded-[30px] text-[14px] font-medium leading-[18px] text-[#0e2138]"
          :class="c.active ? 'bg-[#bde0fe]' : 'bg-[#f9f9f9]'"
          :style="{ width: c.w + 'px' }"
        >
          {{ c.label }}
        </span>
      </div>

      <!-- ============================= FEATURED ARTICLE ============================= -->
      <section
        class="absolute overflow-hidden rounded-[30px] bg-[#f1f1f1]"
        style="left: 121px; top: 1358px; width: 1272px; height: 455px"
      >
        <NuxtImg
          :src="`${IMG}/featured-article.jpg`"
          class="absolute left-0 top-0 h-full object-cover"
          style="width: 648px"
          alt=""
        />
        <div class="absolute" style="left: 687px; top: 66px; width: 533px">
          <h2
            class="text-[28px] font-semibold leading-[39px] text-black"
            style="width: 495px"
          >
            Warum 93% der KI-Suchen ohne Klick enden — und was das für Ihr KMU
            bedeutet
          </h2>
          <p
            class="feat-body mt-[10px] text-[18px] font-medium leading-[27px] text-black"
          >
            Google hat die Suchmaschine neu gebaut. Wer in KI-Antworten nicht
            erscheint, existiert für einen wachsenden Teil der Käufer nicht. Was
            GEO Readiness ist und warum Sie jetzt handeln sollten.
          </p>
          <p class="mt-[9px] text-[20px] font-normal leading-[28px] text-black">
            ⏱️ KI-Sichtbarkeit · 6 Min. Lesezeit
          </p>
          <a
            href="/wissen/google-business-profile-optimieren"
            class="btn-primary mt-[16px]"
            style="width: 187px"
          >
            Weiterlesen →
          </a>
        </div>
      </section>

      <!-- ============================= ARTICLE GRID ============================= -->
      <template v-for="cat of categories" :key="cat.label">
        <div
          v-if="cat.divider"
          class="absolute bg-black/10"
          :style="{
            left: '120px',
            top: cat.divider + 'px',
            width: '1267px',
            height: '1px',
          }"
        ></div>
        <p
          class="absolute text-[20px] font-medium leading-[25px] text-black"
          :style="{ left: '120px', top: cat.labelTop + 'px' }"
        >
          {{ cat.label }}
        </p>
        <a
          v-for="cx of cols"
          :key="cat.label + cx"
          href="/wissen/google-business-profile-optimieren"
          class="card-shadow absolute block overflow-hidden rounded-[20px] bg-[#f9f9f9] transition hover:brightness-95"
          :style="{
            left: cx + 'px',
            top: cat.cardsTop + 'px',
            width: '411px',
            height: '268px',
          }"
        >
          <NuxtImg
            :src="`${IMG}/card.jpg`"
            class="absolute left-0 top-0 w-full rounded-[20px] object-cover"
            style="height: 137px"
            alt=""
          />
          <div
            class="absolute flex items-center gap-[6px] rounded-[20px] bg-[#0e2138] px-[12px] py-[3px]"
            style="right: 26px; top: 12px"
          >
            <span
              class="block h-[7px] w-[7px] rounded-full bg-[#bde0fe]"
            ></span>
            <span class="text-[12px] font-medium leading-[17px] text-white">
              KI-Sichtbarkeit
            </span>
          </div>
          <h3
            class="absolute text-[18px] font-medium leading-[25px] text-black"
            style="left: 18px; top: 157px; width: 254px"
          >
            Warum 93% der KI-Suchen ohne Klick enden
          </h3>
          <p
            class="absolute text-[14px] font-medium leading-[21px] text-black"
            style="left: 18px; top: 215px; width: 375px"
          >
            Was das für Ihr KMU bedeutet. · 6 Min. →
          </p>
        </a>
      </template>

      <!-- ============================= MID CTA BANNER ============================= -->
      <section
        class="absolute overflow-hidden rounded-[60px]"
        style="left: 62px; top: 3277px; width: 1389px; height: 391px"
      >
        <NuxtImg
          :src="`${IMG}/midbanner-bg.jpg`"
          class="absolute inset-0 h-full w-full object-cover"
          alt=""
        />
        <div
          class="absolute inset-0"
          style="background: rgba(14, 33, 56, 0.62)"
        ></div>
        <h2
          class="absolute left-0 w-full text-center text-[30px] font-semibold leading-[36px] text-white"
          style="top: 77px"
        >
          Wissen ist gut. Umsetzung ist besser.
        </h2>
        <p
          class="absolute left-1/2 -translate-x-1/2 text-center text-[18px] font-normal leading-[25px] text-white"
          style="top: 135px; width: 634px"
        >
          Buchen Sie Ihre kostenlose Sichtbarkeitsanalyse — wir zeigen Ihnen
          konkret, welche dieser Strategien für Ihr KMU den grössten Hebel
          haben.
        </p>
        <a
          href="#"
          class="btn-primary absolute left-1/2 -translate-x-1/2"
          style="top: 219px; width: 300px"
        >
          Kostenlose Analyse anfordern
        </a>
      </section>

      <!-- ============================= NEWSLETTER ============================= -->
      <section
        class="absolute rounded-[80px] bg-[#ecf6ff]"
        style="left: 219px; top: 4552px; width: 1056px; height: 349px"
      >
        <h2
          class="absolute left-1/2 -translate-x-1/2 text-center text-[32px] font-semibold leading-[38px] text-black"
          style="top: 44px; width: 1000px"
        >
          Neues Wissen — direkt in Ihr Postfach.
        </h2>
        <p
          class="absolute left-1/2 -translate-x-1/2 text-center text-[18px] font-normal leading-[22px] text-black"
          style="top: 106px; width: 864px"
        >
          Jeden Monat: die wichtigsten Entwicklungen zu SEO, KI-Sichtbarkeit und
          digitalem Marketing — kompakt zusammengefasst für KMU-Inhaber in der
          Deutschschweiz. Kein Spam. Abmeldung jederzeit.
        </p>
        <div
          class="absolute flex items-center justify-between rounded-[30px] border-[0.5px] border-black bg-white"
          style="
            left: 149px;
            top: 178px;
            width: 758px;
            height: 84px;
            padding: 20px 20px 20px 30px;
          "
        >
          <span class="text-[16px] font-normal leading-[19px] text-black/70">
            E-Mail-Adresse
          </span>
          <a href="#" class="btn-primary" style="width: 237px">
            Termin vereinbaren
          </a>
        </div>
        <p
          class="absolute left-1/2 -translate-x-1/2 text-center text-[16px] font-normal leading-[19px] text-black"
          style="top: 286px; width: 1000px"
        >
          Wir senden max. 1× pro Monat. Keine Weitergabe an Dritte.
        </p>
      </section>

      <!-- ============================= WISSEN NACH THEMA ============================= -->
      <section
        class="absolute bg-[#f9f9f9]"
        style="left: 0; top: 4997px; width: 1512px; height: 914px"
      >
        <p
          class="absolute text-[18px] font-semibold leading-[22px] text-[#0e2138]"
          style="left: 120px; top: 64px"
        >
          Alle Themen
        </p>
        <h2
          class="absolute text-[30px] font-semibold leading-[36px] text-[#0e2138]"
          style="left: 120px; top: 102px; width: 1021px"
        >
          Wissen nach Thema.
        </h2>
      </section>
      <div
        v-for="t of topics"
        :key="t.title"
        class="absolute rounded-[30px] border border-[#cbc3c3] bg-[#f9f9f9]"
        :style="{
          left: t.left + 'px',
          top: t.top + 'px',
          width: '408px',
          height: '286px',
        }"
      >
        <span
          class="absolute text-[28px] leading-none"
          style="left: 40px; top: 27px"
        >
          {{ t.icon }}
        </span>
        <div class="absolute" style="left: 40px; top: 85px; width: 328px">
          <h3 class="text-[20px] font-semibold leading-[28px] text-[#0e2138]">
            {{ t.title }}
          </h3>
          <p
            class="mt-[8px] text-[16px] font-normal leading-[24px] text-[#0e2138]"
          >
            {{ t.body }}
          </p>
          <a
            href="#"
            class="mt-[16px] block text-[16px] font-normal leading-[24px] text-[#134074] hover:opacity-70"
          >
            Alle Artikel →
          </a>
        </div>
      </div>

      <!-- ============================= BILLBOARD BAND ============================= -->
      <section
        class="absolute overflow-hidden rounded-t-[200px]"
        style="left: 0; top: 6035px; width: 1512px; height: 679px"
      >
        <NuxtImg
          :src="`${HOME}/billboard.jpg`"
          class="absolute inset-0 h-full w-full object-cover object-top"
          alt=""
        />
        <div
          class="absolute inset-0"
          style="background: rgba(14, 33, 56, 0.55)"
        ></div>
        <h2
          class="absolute text-[40px] font-semibold leading-[56px] text-white"
          style="left: 136px; top: 257px; width: 498px"
        >
          Sie wollen nicht nur lesen — sondern umsetzen?
        </h2>
        <p
          class="absolute text-[20px] font-normal leading-[28px] text-white"
          style="left: 136px; top: 393px; width: 639px"
        >
          Buchen Sie Ihre kostenlose 20-minütige Sichtbarkeitsanalyse.
          <br />
          Wir analysieren Ihre aktuelle digitale Sichtbarkeit in 20 Minuten —
          kostenlos und konkret.
        </p>
        <a
          href="#"
          class="btn-primary absolute"
          style="left: 136px; top: 513px; width: 370px"
        >
          Jetzt Sichtbarkeitsanalyse anfordern
        </a>
      </section>

      <BexoFooter :top="6714" />
    </div>
  </main>
</template>

<style scoped>
  .bexo {
    font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
    background: #ffffff;
    display: flex;
    justify-content: center;
  }
  .canvas {
    position: relative;
    width: 1512px;
    height: 7368px;
    flex: none;
    background: #ffffff;
  }
  .feat-body {
    font-family: "Manrope", ui-sans-serif, system-ui, sans-serif;
  }
  .card-shadow {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
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
