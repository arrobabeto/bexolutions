<script setup lang="ts">
  import { computed, nextTick, onMounted, onUnmounted, ref } from "vue"
  import { definePageMeta, useHead } from "#imports"
  import BexoFooter from "~/components/bexo/BexoFooter.vue"
  import BackgroundMedia from "~/components/media/BackgroundMedia.vue"
  import { BEXO_FOOTER_H } from "~/constants/bexoFooter"
  import { BEXO_VIDEOS } from "~/constants/bexoVideos"

  definePageMeta({ layout: false })

  const IMG = "/images/startseite"

  const featScrollRef = ref<HTMLElement | null>(null)
  const featTrackRef = ref<HTMLElement | null>(null)
  const featSectionRef = ref<HTMLElement | null>(null)
  const introSectionRef = ref<HTMLElement | null>(null)
  const darkSectionRef = ref<HTMLElement | null>(null)
  const faqListRef = ref<HTMLElement | null>(null)

  const featTranslateX = ref(0)
  const introTranslateY = ref(0)
  const introExtraH = ref(0)
  const darkTranslateY = ref(0)
  const darkExtraH = ref(0)

  const STEPS_SECTION_TOP = 6456
  const OVERLAP_PX = 140

  const FAQ_SECTION_TOP = 9431
  const FAQ_LIST_TOP = 206
  const BILLBOARD_H = 679

  const faqSectionH = ref(963)
  const billboardTop = computed(() => FAQ_SECTION_TOP + faqSectionH.value)
  const footerTop = computed(() => billboardTop.value + BILLBOARD_H)
  const canvasH = computed(() => footerTop.value + BEXO_FOOTER_H)

  const CANVAS_W = 1512
  const canvasScale = ref(1)
  const pageHeight = ref(canvasH.value)

  let rafId = 0

  function clamp01(n: number) {
    return Math.min(1, Math.max(0, n))
  }

  function updateScale() {
    const w = window.innerWidth || CANVAS_W
    canvasScale.value = w / CANVAS_W
    pageHeight.value = canvasH.value * canvasScale.value
  }

  function updateFaqHeight() {
    const list = faqListRef.value
    if (!list) return
    faqSectionH.value = FAQ_LIST_TOP + list.offsetHeight
    pageHeight.value = canvasH.value * canvasScale.value
  }

  function onFaqToggle() {
    nextTick(() => {
      updateFaqHeight()
      onScrollOrResize()
    })
  }

  function updateScrollFx() {
    rafId = 0

    const featScroll = featScrollRef.value
    const featTrack = featTrackRef.value
    if (featScroll && featTrack) {
      const vh = window.innerHeight || 1
      const galleryTop = featScroll.getBoundingClientRect().top
      const startY = vh * 0.48
      const endY = vh * 0.12
      const progress = clamp01((startY - galleryTop) / (startY - endY))
      const maxX = Math.max(0, featTrack.scrollWidth - featScroll.clientWidth)
      featTranslateX.value = -(progress * maxX)
    }

    const vh = window.innerHeight || 1
    const start = vh * 0.92
    const end = vh * 0.28

    const intro = introSectionRef.value
    if (intro) {
      const rect = intro.getBoundingClientRect()
      const progress = clamp01((start - rect.top) / (start - end))
      const extra = progress * OVERLAP_PX
      introExtraH.value = extra
      introTranslateY.value = -extra
    }

    const dark = darkSectionRef.value
    if (dark) {
      const rect = dark.getBoundingClientRect()
      const progress = clamp01((start - rect.top) / (start - end))
      const extra = progress * OVERLAP_PX
      darkExtraH.value = extra
      darkTranslateY.value = -extra
    }
  }

  function onScrollOrResize() {
    if (!rafId) rafId = requestAnimationFrame(updateScrollFx)
  }

  function onResize() {
    updateScale()
    updateFaqHeight()
    onScrollOrResize()
  }

  onMounted(() => {
    updateScale()
    nextTick(updateFaqHeight)
    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onResize, { passive: true })
    onScrollOrResize()
  })

  onUnmounted(() => {
    window.removeEventListener("scroll", onScrollOrResize)
    window.removeEventListener("resize", onResize)
    if (rafId) cancelAnimationFrame(rafId)
  })

  useHead({
    title: "Bexolutions — Better Marketing Systems",
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
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Jost:wght@400;500&family=Inter:wght@400;500;700&display=swap",
      },
    ],
  })

  const navLinks = [
    { l: "Über uns", to: "/ueber-uns" },
    { l: "Leistungen", to: "/leistungen" },
    { l: "Wissen", to: "/wissen" },
    { l: "Treuhänder", to: "#" },
  ]

  const stats = [
    { label: "mehr Klicks pro Monat", value: "+200%", left: 0, w: 510 },
    { label: "mehr Google-Impressionen", value: "+302%", left: 510, w: 505 },
    { label: "organische Besucher", value: "1'704", left: 1015, w: 502 },
    { label: "Engagement-Rate", value: "60%", left: 0, w: 510 },
    {
      label: "Google-Rankings (Kernbegriffe)",
      value: "Top 3",
      left: 510,
      w: 505,
    },
    { label: "bis zur Teamvergrösserung", value: "16 Mt.", left: 1015, w: 502 },
  ]

  const features = [
    {
      title: "Digitale Präsenz",
      body: "Professionelle, verkaufsstarke Website auf StoryBrand-Framework & KI-Technologie. Keine Visitenkarte — Ihre stärkste Verkaufsmaschine.",
      img: `${IMG}/feat-digitale.png`,
      imgTop: true,
      bg: "#ecf6ff",
    },
    {
      title: "Local SEO & Google Sichtbarkeit",
      body: "Top-Ergebnisse bei Google — organisch, ohne Werbebudget. Google Business Profile, lokale Plattformen, Ranking-Tracking bis auf Quartier-Ebene.",
      img: `${IMG}/feat-localseo.png`,
      imgTop: false,
      bg: "#ffffff",
    },
    {
      title: "Content & Thought Leadership",
      body: "SEO-Fachbeiträge, LinkedIn, Newsletter — Inhalte, die Vertrauen aufbauen und qualifizierte Anfragen generieren. Monatlich messbar.",
      img: `${IMG}/feat-content.jpg`,
      video: BEXO_VIDEOS.homeFeatureContent,
      imgTop: true,
      bg: "#ffeef4",
    },
    {
      title: "Performance \n& Skalierung",
      body: "Wenn das Fundament steht: Google Ads, LinkedIn Outreach, Podcast, Social Media — systematisch, um Reichweite zu multiplizieren.",
      img: `${IMG}/feat-performance.png`,
      imgTop: false,
      bg: "#ffffff",
    },
    {
      title: "KI-Sichtbarkeit & GEO Readiness",
      body: "93% der KI-Suchen enden ohne Klick. Wer in ChatGPT, Google AI Mode oder Perplexity nicht erwähnt wird, existiert nicht. Wir bereiten Sie jetzt vor — bevor Ihre Mitbewerber es tun.",
      img: `${IMG}/feat-ki.png`,
      imgTop: true,
      bg: "#ecf6ff",
    },
  ]

  // Tops are relative to the steps section (canvas top STEPS_SECTION_TOP)
  const steps = [
    {
      n: "1",
      title: "Analyse",
      body: "Wir analysieren Ihre Google-Sichtbarkeit, Mitbewerber und die Suchanfragen Ihrer Zielkunden. Klare Übersicht: Wo stehen Sie — wo liegt das Potenzial?",
      left: 152,
      top: 6663 - STEPS_SECTION_TOP,
    },
    {
      n: "2",
      title: "Strategie",
      body: "Keine Standardlösung. Massgeschneiderter Plan für Ihre Branche, Region und Wachstumsziele — mit klaren Prioritäten.",
      left: 330,
      top: 7177 - STEPS_SECTION_TOP,
    },
    {
      n: "3",
      title: "Umsetzung",
      body: "Website, SEO-Inhalte, Google Business Profile, LinkedIn — systematisch, KI-gestützt, termingerecht. Monatlich nachvollziehbar.",
      left: 662,
      top: 6723 - STEPS_SECTION_TOP,
    },
    {
      n: "4",
      title: "Ergebnisse",
      body: "Monatliche Reports: Klicks, Rankings, Anfragen, KI-Sichtbarkeit. Kein Bauchgefühl. Was funktioniert, wird skaliert.",
      left: 932,
      top: 7224 - STEPS_SECTION_TOP,
    },
  ]

  const warumCards = [
    {
      title: "Alles aus einer Hand",
      body: "Website, SEO, Content, LinkedIn, Ads — ein Team, ein Ansprechpartner, ein Reporting. Keine Koordination zwischen drei Agenturen.",
      left: 710,
      top: 8026,
    },
    {
      title: "Bereit für die KI-Suche von morgen",
      body: "51% der B2B-Käufer starten ihre Recherche mit einem KI-Chatbot. Unsere GEO Readiness-Methode bringt Sie in Google-Rankings und KI-Antworten.",
      left: 710,
      top: 8231,
    },
    {
      title: "SEMrush-zertifiziert",
      body: "Unsere Local-SEO-Methodik ist offiziell von SEMrush zertifiziert. Anerkannte Expertise, keine leeren Versprechen.",
      left: 710,
      top: 8492,
    },
    {
      title: "Fixe Monatsrate, keine Überraschungen",
      body: "Sie wissen von Anfang an, was Sie investieren. Kein Stundenhonorar, kein versteckter Aufwand. Volle Planbarkeit.",
      left: 1053,
      top: 8026,
    },
    {
      title: "Monatliches Reporting \n— klassisch & KI",
      body: "Zwei Blickwinkel: klassische SEO-Metriken und KI-Visibility-Tracking. Transparenz auf beiden Ebenen.",
      left: 1053,
      top: 8243,
    },
    {
      title: "Ergebnisse, keine Versprechen",
      body: "Datenbasiert und transparent. Funktioniert etwas nicht, sagen wir es — und passen an. Messbar, monatlich dokumentiert.",
      left: 1053,
      top: 8460,
    },
  ]

  const faqs = [
    {
      q: "Was macht Bexolutions genau?",
      a: "In der Regel können wir innerhalb von 3-5 Werktagen nach Auftragserteilung starten. Bei dringenden Anfragen oder Notfällen sind auch kurzfristigere Termine möglich. Kontaktieren Sie uns und wir finden eine Lösung.",
    },
    {
      q: "Was kostet die Zusammenarbeit mit Bexolutions?",
      a: "Fixe Monatspauschalen ohne versteckte Kosten. Die Rate hängt vom Leistungsumfang und Ihren Zielen ab. Bester Einstieg: kostenlose 20-minütige Sichtbarkeitsanalyse mit klarer Empfehlung.",
    },
    {
      q: "Wie schnell sehe ich erste Resultate?",
      a: "Erste Verbesserungen nach 4–8 Wochen messbar, signifikante Resultate nach 3–6 Monaten. Zofingen Treuhand AG: +200% Klicks nach 16 Monaten, Team verstärkt.",
    },
    {
      q: "Was ist der Unterschied zu einer klassischen Werbeagentur?",
      a: "Klassische Agenturen liefern Einzelmassnahmen. Bexolutions baut ein zusammenhängendes System, bei dem alle Bausteine ineinandergreifen. Ein Ansprechpartner, ein Reporting, kein Koordinationsaufwand.",
    },
    {
      q: "Brauche ich ein Werbebudget für Google Ads?",
      a: "Nein — nicht am Anfang. Schwerpunkt ist organische Sichtbarkeit. Google Ads ist ein optionales Add-on, wenn das Fundament steht.",
    },
    {
      q: "Was bedeutet KI-Sichtbarkeit und warum ist das wichtig?",
      a: "51% der B2B-Käufer starten ihre Recherche mit einem KI-Chatbot. Erscheinen Sie dort nicht, existieren Sie für einen wachsenden Teil Ihrer Zielgruppe nicht. Unsere GEO Readiness-Methode bereitet Sie gezielt vor.",
    },
    {
      q: "Für welche Branchen arbeitet Bexolutions?",
      a: "Schwerpunkt: Schweizer KMU in der Deutschschweiz — Treuhand/Steuerberatung, Gastronomie/Hotellerie, Gesundheit/Medizin sowie lokale Dienstleister. Für etablierte KMU, die systematisch wachsen wollen.",
    },
  ]
</script>

<template>
  <main class="bexo" :style="{ height: pageHeight + 'px' }">
    <div
      class="canvas"
      :style="{
        transform: `scale(${canvasScale})`,
        height: canvasH + 'px',
      }"
    >
      <!-- ============================= HERO ============================= -->
      <section
        class="absolute z-0 overflow-hidden rounded-[60px]"
        style="left: 5px; top: 9px; width: 1503px; height: 970px"
      >
        <BackgroundMedia
          :poster="`${IMG}/hero-bg.jpg`"
          :video="BEXO_VIDEOS.homeHero"
          class="absolute inset-0 h-full w-full"
        />
        <div class="absolute inset-0 bg-black/40"></div>

        <!-- logo mark -->
        <a href="/" aria-label="Bexolutions Startseite">
          <NuxtImg
            :src="`${IMG}/logo-mark.png`"
            class="absolute"
            style="left: 112px; top: 60px; width: 107px; height: 107px"
            alt="Bexolutions"
          />
        </a>

        <!-- nav links -->
        <nav
          class="absolute flex items-center"
          style="left: 564px; top: 104px; height: 44px; gap: 24px"
        >
          <a
            v-for="n of navLinks"
            :key="n.l"
            :href="n.to"
            class="text-[16px] font-medium leading-5 text-white transition hover:opacity-80"
          >
            {{ n.l }}
          </a>
        </nav>

        <!-- nav buttons -->
        <div
          class="absolute flex items-center"
          style="left: 990px; top: 104px; gap: 10px"
        >
          <a href="/kontakt" class="btn-white" style="width: 153px">Kontakt</a>
          <a href="#" class="btn-primary" style="width: 237px">
            Termin vereinbaren
          </a>
        </div>

        <!-- tagline -->
        <p
          class="absolute text-[40px] font-semibold leading-[50px] text-white"
          style="left: 117px; top: 633px; width: 945px"
        >
          Better Marketing Systems.
          <br />
          Better than yesterday.
        </p>

        <!-- wordmark -->
        <NuxtImg
          :src="`${IMG}/wordmark.png`"
          class="absolute"
          style="left: 117px; top: 767px; width: 1271px; height: 108px"
          alt="BEXOLUTIONS"
        />
      </section>

      <!-- ============================= INTRO ============================= -->
      <section
        ref="introSectionRef"
        class="absolute z-[1] overflow-hidden bg-white will-change-transform"
        :style="{
          left: '0',
          top: '1001px',
          width: '1512px',
          height: 711 + introExtraH + 'px',
          transform: `translateY(${introTranslateY}px)`,
        }"
      >
        <div
          class="absolute rounded-full opacity-90"
          style="
            left: 337px;
            top: 0;
            width: 773px;
            height: 647px;
            background: radial-gradient(
              closest-side,
              #bde0fe 0%,
              rgba(189, 224, 254, 0) 100%
            );
          "
        ></div>
        <h2
          class="absolute text-[40px] font-semibold leading-[50px] text-[#0e2138]"
          style="left: 550px; top: 154px; width: 730px"
        >
          Mehr Kunden über Google und KI. Systematisch. Messbar.
          <br />
          <span class="text-[#a7c8ef]">Ohne Werbebudget.</span>
        </h2>
        <p
          class="absolute text-[18px] font-normal leading-[25px] tracking-[0.36px] text-black"
          style="left: 550px; top: 340px; width: 730px"
        >
          Bexolutions entwickelt das komplette Marketingsystem für Ihr KMU — von
          der Website über Local SEO bis zur KI-Sichtbarkeit. Heute bei Google
          gefunden. Morgen in ChatGPT, Perplexity und Google AI Mode erwähnt.
          Alles aus einer Hand. Eine fixe Monatsrate.
        </p>
        <a
          href="#"
          class="btn-outline absolute"
          style="left: 550px; top: 476px; width: 237px"
        >
          Termin vereinbaren
        </a>
      </section>

      <!-- ============================= DARK STATEMENT ============================= -->
      <section
        ref="darkSectionRef"
        class="absolute z-[2] rounded-t-[60px] bg-[#0e2138] will-change-transform"
        :style="{
          left: '0',
          top: '1712px',
          width: '1512px',
          height: 775 + darkExtraH + 'px',
          transform: `translateY(${darkTranslateY}px)`,
        }"
      >
        <div
          class="absolute rounded-full opacity-40"
          style="
            left: 365px;
            top: 64px;
            width: 773px;
            height: 647px;
            background: radial-gradient(
              closest-side,
              #bde0fe 0%,
              rgba(189, 224, 254, 0) 100%
            );
          "
        ></div>
        <p
          class="absolute text-center text-[24px] font-normal leading-[38px] text-white"
          style="left: 286px; top: 312px; width: 941px"
        >
          Bexolutions ist die Schweizer Marketing-Agentur für KMU, die
          systematisch mehr Kunden über
          <span class="font-bold">Google und KI</span>
          gewinnen wollen — ohne teure Werbebudgets. Wir übernehmen Website,
          SEO, Content und KI-Sichtbarkeit als komplettes System: ein
          Ansprechpartner, eine fixe Monatsrate, monatlich messbare Resultate.
        </p>
      </section>

      <!-- ============================= LOGOS ============================= -->
      <section
        class="absolute z-[3] overflow-hidden rounded-t-[60px] bg-white"
        style="left: 0; top: 2487px; width: 1512px; height: 480px"
      >
        <h3
          class="absolute text-center text-[36px] font-normal leading-[44px] tracking-[0.72px] text-[#0e2138]"
          style="left: 120px; top: 86px; width: 1272px"
        >
          Über 100 KMU in der Deutschschweiz
        </h3>

        <div class="marquee" style="top: 194px">
          <div class="marquee-track marquee-left">
            <NuxtImg
              :src="`${IMG}/logos-row1.png`"
              class="marquee-img"
              alt=""
            />
            <NuxtImg
              :src="`${IMG}/logos-row1.png`"
              class="marquee-img"
              alt=""
            />
          </div>
        </div>
        <div class="marquee" style="top: 314px">
          <div class="marquee-track marquee-right">
            <NuxtImg
              :src="`${IMG}/logos-row2.png`"
              class="marquee-img"
              alt=""
            />
            <NuxtImg
              :src="`${IMG}/logos-row2.png`"
              class="marquee-img"
              alt=""
            />
          </div>
        </div>
      </section>

      <!-- ============================= OFFICE / PROBLEM ============================= -->
      <section
        class="absolute overflow-hidden"
        style="left: 0; top: 2967px; width: 1512px; height: 636px"
      >
        <BackgroundMedia
          :poster="`${IMG}/office.jpg`"
          :video="BEXO_VIDEOS.homeOffice"
          class="absolute inset-0 h-full w-full"
        />
        <div class="absolute inset-0 bg-black/45"></div>

        <span
          class="absolute grid place-items-center rounded-full border border-white/50 bg-white/[0.23] text-[16px] font-medium text-white"
          style="left: 1223px; top: 48px; width: 158px; height: 44px"
        >
          Problem
        </span>
        <h2
          class="absolute text-[36px] font-semibold leading-[45px] text-white"
          style="left: 120px; top: 332px; width: 593px"
        >
          Ihr Unternehmen ist gut.
          <br />
          Nur findet es online kaum jemand.
        </h2>
        <p
          class="absolute text-[18px] font-normal leading-[25px] tracking-[0.36px] text-white"
          style="left: 120px; top: 442px; width: 736px"
        >
          Neue Kunden kommen fast ausschliesslich über Empfehlungen. Ihre
          Website steht online, bringt aber kaum qualifizierte Anfragen.
          Mitbewerber erscheinen bei Google weiter oben — obwohl Ihr Service
          besser ist. Das ist kein Qualitätsproblem. Es ist ein
          Sichtbarkeitsproblem. Und es hat ein System.
        </p>
      </section>

      <!-- ============================= FEATURES ============================= -->
      <section
        ref="featSectionRef"
        class="absolute bg-[#f8f8f8]"
        style="left: 0; top: 3606px; width: 1512px; height: 1034px"
      >
        <p
          class="absolute text-[18px] font-normal leading-[25px] tracking-[0.36px] text-[#0e2138]"
          style="left: 120px; top: 145px; width: 588px"
        >
          Kein Flickenteppich aus Einzelmassnahmen.
          <br />
          Kein Agentur-Wirrwarr. Bexolutions entwickelt ein strukturiertes,
          KI-gestütztes Marketingsystem — zugeschnitten auf Ihr KMU, Ihre
          Branche, Ihre Region. Und vorbereitet für die Art, wie Kunden heute
          und morgen suchen.
        </p>
        <h2
          class="absolute text-[36px] font-semibold leading-[50px] tracking-[0.72px] text-black"
          style="left: 768px; top: 132px; width: 638px"
        >
          Wir bauen Ihr
          <span class="text-[#a7c8ef]">Marketingsystem.</span>
          <br />
          Sie konzentrieren sich auf Ihr Business.
        </h2>

        <!-- vertical-scroll drives this horizontal card track -->
        <div
          ref="featScrollRef"
          class="feat-scroll absolute"
          style="left: 0; top: 384px; width: 1512px"
        >
          <div
            ref="featTrackRef"
            class="feat-track flex will-change-transform"
            :style="{
              gap: '26px',
              padding: '0 120px 24px',
              transform: `translateX(${featTranslateX}px)`,
            }"
          >
            <article
              v-for="f of features"
              :key="f.title"
              class="flex shrink-0 flex-col rounded-[30px] p-[19px]"
              style="width: 408px; height: 516px"
              :style="{ background: f.bg }"
            >
              <BackgroundMedia
                v-if="f.imgTop && f.video"
                :poster="f.img"
                :video="f.video"
                class="h-[246px] w-full rounded-[22px]"
              />
              <NuxtImg
                v-else-if="f.imgTop"
                :src="f.img"
                class="w-full rounded-[22px] object-cover"
                style="height: 246px"
                alt=""
              />
              <div
                class="flex flex-1 flex-col rounded-[22px] border border-[#c4c4c4] p-[12px]"
                :class="f.imgTop ? 'mt-[6px]' : ''"
              >
                <h4
                  class="whitespace-pre-line text-[24px] font-semibold leading-[34px] text-black"
                >
                  {{ f.title }}
                </h4>
                <p
                  class="mt-[14px] text-[16px] font-medium leading-[22px] text-black"
                >
                  {{ f.body }}
                </p>
              </div>
              <NuxtImg
                v-if="!f.imgTop"
                :src="f.img"
                class="mt-[6px] w-full rounded-[22px] object-cover"
                style="height: 211px"
                alt=""
              />
            </article>
          </div>
        </div>
      </section>

      <!-- ============ CASE STUDY BACKDROP (white) ============ -->
      <div
        class="absolute bg-white"
        style="left: 0; top: 4640px; width: 1512px; height: 3232px"
      ></div>

      <!-- faint watercolor textures behind quote / steps — removed; steps section owns one bg -->

      <!-- case heading -->
      <h2
        class="absolute whitespace-pre-line text-[36px] font-semibold leading-[50px] tracking-[0.72px] text-black"
        style="left: 771px; top: 4763px; width: 621px"
      >
        Ein Treuhandbüro. 16 Monate. Personell verstärkt wegen Mehranfragen.
      </h2>
      <p
        class="absolute text-[18px] font-normal leading-[25px] tracking-[0.36px] text-[#0e2138]"
        style="left: 771px; top: 4930px; width: 451px"
      >
        Inhabergeführtes Büro im Kanton Aargau. Ausgangslage: Website vorhanden,
        keine Rankings, 0 qualifizierte Anfragen über Google.
      </p>

      <!-- stats grid -->
      <div
        v-for="(s, i) of stats"
        :key="s.value"
        class="absolute flex flex-col items-end justify-between border border-black/40"
        :style="{
          left: s.left + 'px',
          top: (i < 3 ? 5125 : 5468) + 'px',
          width: s.w + 'px',
          height: '343px',
          padding: '30px 36px',
        }"
      >
        <span class="text-[18px] font-semibold leading-[22px] text-black">
          {{ s.label }}
        </span>
        <span class="stat-num text-[#13315c]">{{ s.value }}</span>
      </div>

      <!-- quote -->
      <div
        class="absolute rounded-full opacity-90"
        style="
          left: 369px;
          top: 5749px;
          width: 773px;
          height: 647px;
          background: radial-gradient(
            closest-side,
            #bde0fe 0%,
            rgba(189, 224, 254, 0) 100%
          );
        "
      ></div>
      <p
        class="absolute text-center text-[18px] font-medium leading-[25px] tracking-[0.36px] text-black"
        style="left: 362px; top: 5935px; width: 788px"
      >
        «Die Anzahl der Anfragen über unsere Website und unser
        Google-Unternehmensprofil hat sich in den vergangenen 16 Monaten
        substanziell erhöht. Wir mussten infolgedessen unser Team personell
        verstärken, um die zusätzlichen Mandate ordnungsgemäss bearbeiten zu
        können.»
      </p>
      <p
        class="absolute text-center text-[16px] font-normal leading-[22px] tracking-[0.32px] text-black"
        style="left: 362px; top: 6057px; width: 788px"
      >
        — Philippe Bally, Zofingen Treuhand AG
      </p>
      <a
        href="/referenz-zofingen"
        class="btn-outline absolute"
        style="left: 607px; top: 6101px; width: 299px"
      >
        Zur vollständigen Fallstudie
      </a>

      <!-- 93% pill -->
      <div
        class="absolute grid place-items-center rounded-full bg-[#0e2138] px-[96px] text-center"
        style="left: 336px; top: 6256px; width: 840px; height: 100px"
      >
        <p class="text-[18px] font-medium leading-[23px] text-white">
          93% der KI-Suchen enden ohne Klick. Wir sorgen dafür, dass Ihr
          Unternehmen trotzdem — oder gerade deshalb — gefunden wird.
        </p>
      </div>

      <!-- ============================= STEPS (single bg) ============================= -->
      <section
        class="absolute overflow-hidden"
        :style="{
          left: '0',
          top: STEPS_SECTION_TOP + 'px',
          width: '1512px',
          height: '1282px',
        }"
      >
        <BackgroundMedia
          :poster="`${IMG}/quote-bg.jpg`"
          :video="BEXO_VIDEOS.homeSteps"
          class="absolute inset-0 h-full w-full opacity-60"
        />

        <p
          class="absolute text-center text-[18px] font-normal leading-[25px] tracking-[0.36px] text-[#0e2138]"
          style="left: 686px; top: 24px; width: 141px"
        >
          Unser Vorgehen
        </p>
        <h2
          class="absolute text-center text-[36px] font-semibold leading-[50px] tracking-[0.72px] text-black"
          style="left: 440px; top: 66px; width: 633px"
        >
          Von der Analyse bis zu neuen Kunden — in vier Schritten.
        </h2>

        <article
          v-for="st of steps"
          :key="st.n"
          class="absolute rounded-[29px] border border-[#d6d3d3]/50 bg-white"
          :style="{
            left: st.left + 'px',
            top: st.top + 'px',
            width: '376px',
            height: '428px',
            padding: '35px',
          }"
        >
          <div class="step-num text-[#bde0fe]">{{ st.n }}</div>
          <h4
            class="mt-[23px] whitespace-pre-line text-[24px] font-semibold leading-[34px] text-[#0e2138]"
          >
            {{ st.title }}
          </h4>
          <p
            class="mt-[23px] text-[18px] font-normal leading-[27px] text-[#134074]"
          >
            {{ st.body }}
          </p>
        </article>
      </section>

      <!-- ============================= WARUM ============================= -->
      <section
        class="absolute bg-[#f9f9f9]"
        style="left: 0; top: 7738px; width: 1512px; height: 1057px"
      >
        <p
          class="absolute text-[18px] font-normal leading-[25px] tracking-[0.36px] text-[#0e2138]"
          style="left: 120px; top: 82px; width: 400px"
        >
          Unser Vorgehen
        </p>
        <h2
          class="absolute whitespace-pre-line text-[36px] font-semibold leading-[50px] tracking-[0.72px] text-black"
          style="left: 120px; top: 124px; width: 878px"
        >
          Warum über 100 KMU in der Deutschschweiz auf Bexolutions setzen.
        </h2>

        <!-- image collage (relative to section top 7738) -->
        <NuxtImg
          :src="`${IMG}/warum-1.png`"
          class="absolute rounded-[30px] object-cover"
          style="left: 120px; top: 281px; width: 341px; height: 428px"
          alt=""
        />
        <NuxtImg
          :src="`${IMG}/warum-2.png`"
          class="absolute rounded-[30px] object-cover"
          style="left: 480px; top: 283px; width: 182px; height: 286px"
          alt=""
        />
        <NuxtImg
          :src="`${IMG}/warum-3.png`"
          class="absolute rounded-[22px] object-cover"
          style="left: 480px; top: 587px; width: 182px; height: 121px"
          alt=""
        />
        <NuxtImg
          :src="`${IMG}/warum-4.png`"
          class="absolute rounded-[30px] object-cover"
          style="left: 120px; top: 721px; width: 542px; height: 254px"
          alt=""
        />

        <!-- pale panel -->
        <div
          class="absolute rounded-[30px] bg-[#ecf6ff]"
          style="left: 694px; top: 278px; width: 700px; height: 697px"
        ></div>

        <!-- warum cards (top relative to section 7738) -->
        <div
          v-for="c of warumCards"
          :key="c.title"
          class="absolute"
          :style="{
            left: c.left + 'px',
            top: c.top - 7738 + 16 + 'px',
            width: '301px',
          }"
        >
          <h4
            class="whitespace-pre-line text-[24px] font-semibold leading-[34px] text-black"
          >
            {{ c.title }}
          </h4>
          <div class="my-[14px] h-px w-full bg-[#c4c4c4]"></div>
          <p class="text-[16px] font-medium leading-[22px] text-black">
            {{ c.body }}
          </p>
        </div>
      </section>

      <!-- ============================= TREUHÄNDER BANNER ============================= -->
      <section
        class="absolute overflow-hidden rounded-[80px]"
        style="left: 71px; top: 8901px; width: 1371px; height: 434px"
      >
        <BackgroundMedia
          :poster="`${IMG}/treuhaender-bg.jpg`"
          :video="BEXO_VIDEOS.homeTreuhaender"
          class="absolute inset-0 h-full w-full"
        />
        <div
          class="absolute inset-0"
          style="background: rgba(14, 33, 56, 0.7)"
        ></div>
        <div
          class="absolute inset-0 flex flex-col items-center"
          style="padding-top: 114px"
        >
          <h2
            class="text-center text-[36px] font-semibold leading-[43px] text-white"
          >
            Sind Sie Treuhänder oder Steuerberater?
          </h2>
          <p
            class="mt-[22px] text-center text-[18px] font-normal leading-[25px] text-white"
            style="width: 740px"
          >
            Wir haben uns auf die digitale Sichtbarkeit von Treuhandbüros in der
            Deutschschweiz spezialisiert — mit bewährter Methode und
            nachgewiesenen Resultaten. Mehr Mandanten über Google, ohne
            Werbebudget.
          </p>
          <a href="#" class="btn-primary mt-[30px]" style="width: 237px">
            Mehr erfahren
          </a>
        </div>
      </section>

      <!-- ============================= FAQ ============================= -->
      <section
        class="absolute overflow-hidden"
        :style="{
          left: '0',
          top: FAQ_SECTION_TOP + 'px',
          width: '1512px',
          height: faqSectionH + 'px',
        }"
      >
        <div
          class="absolute inset-0"
          style="
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(195, 218, 248, 0.4) 100%
            );
          "
        ></div>

        <p
          class="absolute text-center text-[18px] font-normal leading-[25px] tracking-[0.36px] text-[#0e2138]"
          style="left: 439px; top: 0; width: 633px"
        >
          Häufige Fragen
        </p>
        <h2
          class="absolute text-center text-[36px] font-semibold leading-[50px] tracking-[0.72px] text-black"
          style="left: 440px; top: 42px; width: 633px"
        >
          Was KMU-Inhaber uns am häufigsten fragen.
        </h2>

        <div
          ref="faqListRef"
          class="absolute flex flex-col gap-[20px] pb-[70px]"
          :style="{ left: '215px', top: FAQ_LIST_TOP + 'px', width: '1082px' }"
        >
          <details
            v-for="f of faqs"
            :key="f.q"
            class="faq-item rounded-[20px] border border-[#0e2138]/20 bg-white/50 px-[40px] py-[28px]"
            @toggle="onFaqToggle"
          >
            <summary
              class="flex cursor-pointer list-none items-start justify-between gap-6"
            >
              <h4 class="text-[20px] font-bold leading-[25px] text-black">
                {{ f.q }}
              </h4>
              <span class="relative mt-1 block h-5 w-5 shrink-0">
                <span
                  class="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 rounded bg-black"
                ></span>
                <span
                  class="faq-vbar absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded bg-black"
                ></span>
              </span>
            </summary>
            <p
              class="mt-[24px] text-[18px] font-normal leading-[23px] text-black"
            >
              {{ f.a }}
            </p>
          </details>
        </div>
      </section>

      <!-- ============================= CTA BILLBOARD ============================= -->
      <section
        class="absolute overflow-hidden rounded-t-[200px]"
        :style="{
          left: '0',
          top: billboardTop + 'px',
          width: '1512px',
          height: BILLBOARD_H + 'px',
        }"
      >
        <NuxtImg
          :src="`${IMG}/billboard.jpg`"
          class="absolute inset-0 h-full w-full object-cover object-top"
          alt=""
        />
        <div
          class="absolute inset-0"
          style="background: rgba(14, 33, 56, 0.5)"
        ></div>

        <h2
          class="absolute text-[36px] font-semibold leading-[50px] text-white"
          style="left: 106px; top: 336px; width: 736px"
        >
          Bereit zu erfahren,
          <br />
          was für Ihr KMU möglich ist?
        </h2>
        <p
          class="absolute text-[18px] font-normal leading-[25px] text-white"
          style="left: 106px; top: 457px; width: 639px"
        >
          Buchen Sie Ihre kostenlose 20-minütige Sichtbarkeitsanalyse.
          <br />
          Wir zeigen Ihnen, wo Sie heute stehen und welche konkreten Massnahmen
          Ihnen am schnellsten zu neuen Kunden verhelfen.
        </p>
        <a
          href="#"
          class="btn-primary absolute"
          style="left: 106px; top: 556px; width: 276px"
        >
          Jetzt Termin vereinbaren
        </a>
      </section>

      <BexoFooter :top="footerTop" />
    </div>
  </main>
</template>

<style scoped>
  .bexo {
    font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
    background: #ffffff;
    overflow-x: hidden;
  }

  .canvas {
    position: relative;
    width: 1512px;
    flex: none;
    background: #ffffff;
    transform-origin: top left;
  }

  /* buttons */
  .btn-primary,
  .btn-white,
  .btn-outline {
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
  .btn-white {
    background: #ffffff;
    color: #0e2138;
  }
  .btn-white:hover {
    background: #f2f2f2;
  }
  .btn-outline {
    background: transparent;
    color: #0e2138;
    border: 1px solid rgba(19, 49, 92, 0.5);
  }
  .btn-outline:hover {
    background: rgba(19, 49, 92, 0.05);
  }

  /* stat numbers */
  .stat-num {
    font-size: 90px;
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: -3px;
  }

  /* step numbers */
  .step-num {
    font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
    font-size: 96px;
    font-weight: 700;
    line-height: 1;
  }

  /* logo marquee */
  .marquee {
    position: absolute;
    left: 0;
    width: 1512px;
    height: 80px;
    overflow: hidden;
  }
  .marquee-track {
    display: flex;
    width: max-content;
    height: 80px;
    align-items: center;
    will-change: transform;
  }
  .marquee-img {
    height: 80px;
    width: auto;
    flex: none;
  }
  .marquee-left {
    animation: marquee-left 45s linear infinite;
  }
  .marquee-right {
    animation: marquee-right 45s linear infinite;
  }
  @keyframes marquee-left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
  @keyframes marquee-right {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0);
    }
  }

  /* FAQ native accordion (works without JS) */
  .faq-item summary {
    list-style: none;
  }
  .faq-item summary::-webkit-details-marker {
    display: none;
  }
  .faq-item[open] .faq-vbar {
    display: none;
  }

  /* horizontal feature gallery — scroll-driven, no overflow drag */
  .feat-scroll {
    overflow: hidden;
  }
  .feat-track {
    width: max-content;
  }
</style>
