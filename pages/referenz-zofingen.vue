<script setup lang="ts">
  import { ref } from "vue"
  import { definePageMeta, useHead } from "#imports"
  import BexoFooter from "~/components/bexo/BexoFooter.vue"
  import BexoPageShell from "~/components/bexo/BexoPageShell.vue"
  import ReferenzZofingenMobile from "~/components/bexo/mobile/ReferenzZofingenMobile.vue"
  import { useCanvasScale } from "~/composables/useCanvasScale"
  import { useMarketingPageSeo } from "~/composables/useMarketingPageSeo"

  definePageMeta({ layout: false })

  const canvasRef = ref<HTMLElement | null>(null)
  useCanvasScale(canvasRef)

  const IMG = "/images/referenz-zofingen"
  const HOME = "/images/startseite"

  useHead({
    title: "Referenz: Zofingen Treuhand AG — Bexolutions",
    htmlAttrs: { lang: "de-CH" },
  })

  useMarketingPageSeo({
    path: "/referenz-zofingen",
    title: "Referenz: Zofingen Treuhand AG — Bexolutions",
    description:
      "Case Study: Wie Zofingen Treuhand AG mit Bexolutions organische SEO-Besucher und neue Mandanten gewonnen hat.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Referenz Zofingen Treuhand", path: "/referenz-zofingen" },
    ],
  })

  const navLinks = [
    { l: "Über uns", to: "/ueber-uns" },
    { l: "Leistungen", to: "/leistungen" },
    { l: "Wissen", to: "/wissen" },
    { l: "Treuhänder", to: "#" },
  ]

  // ---- Results grid (2 x 3) ----
  const cells = [
    { left: 0, top: 1269, label: "mehr Klicks pro Monat", value: "+200%" },
    { left: 504, top: 1269, label: "mehr Google-Impressionen", value: "+302%" },
    { left: 1008, top: 1269, label: "organische Besucher", value: "1'704" },
    { left: 0, top: 1612, label: "Engagement-Rate", value: "60%" },
    {
      left: 504,
      top: 1612,
      label: "Google-Rankings (Kernbegriffe)",
      value: "Top 3",
    },
    {
      left: 1008,
      top: 1612,
      label: "bis zur Teamvergrösserung",
      value: "16 Mt.",
    },
  ]

  // ---- Massnahmen cards ----
  const cards = [
    {
      left: 120,
      top: 2955,
      icon: "🔍",
      title: "SEO-Content-Strategie",
      body: "Auf Basis detaillierter Keyword-Recherche eine thematische Content-Strategie — ausgerichtet auf die tatsächlichen Suchanfragen potenzieller Mandanten. Schwerpunkte: Grundstückgewinnsteuer, Kapitalgewinnsteuer, Immobilien GmbH, Erbschaftssteuer, Buchhaltung für KMU.",
      bodyFs: 16,
      bodyLh: 24,
    },
    {
      left: 554,
      top: 2955,
      icon: "📊",
      title: "15+ optimierte Fachbeiträge",
      body: "Über 15 tiefgründige, SEO-optimierte Fachbeiträge — recherchiert, getextet, mit FAQPage-Schema ausgezeichnet und für KI-Zitierbarkeit strukturiert. Philippe Bally prüfte fachlich, wir übernahmen Publikation und technische Optimierung.",
      bodyFs: 16,
      bodyLh: 24,
    },
    {
      left: 988,
      top: 2955,
      icon: "🚀",
      title: "Google Business Profile Optimierung",
      body: "Vollständige Neuausrichtung: korrekte Kategorien, vollständige Leistungsbeschreibungen, professionelle Fotos, wöchentliche Beiträge, aktives Bewertungsmanagement. Resultat: deutlich verbesserte Sichtbarkeit in der lokalen Map-Box.",
      bodyFs: 14,
      bodyLh: 21,
    },
    {
      left: 335,
      top: 3337,
      icon: "🗺️",
      title: "Lokale & nationale Sichtbarkeit",
      body: "Listing-Management auf 30+ Schweizer Plattformen für konsistente Datenpräsenz und starke lokale SEO-Signale. Aufbau von Backlinks über Branchenverzeichnisse und relevante lokale Quellen.",
      bodyFs: 16,
      bodyLh: 24,
    },
    {
      left: 769,
      top: 3337,
      icon: "📈",
      title: "GEO Readiness",
      body: "Strukturierung aller Inhalte für KI-Zitierbarkeit: TL;DR-Struktur, FAQPage- und LocalBusiness-Schema, klare Antwortblöcke für Anfragen wie „Welches Treuhandbüro empfiehlt sich in Zofingen?“ — damit Zofingen Treuhand AG auch in ChatGPT, Google AI Mode und Perplexity erscheint.",
      bodyFs: 16,
      bodyLh: 24,
    },
  ]

  // ---- Detail panel stats (grey box, right) ----
  const detailStats = [
    { top: 3815, value: "+200%", label: "Mehr Klicks / Monat", line: true },
    { top: 3947, value: "12", label: "Keywords in den Top 10", line: true },
    { top: 4079, value: "60%", label: "Engagement-Rate organisch", line: true },
    { top: 4211, value: "1705", label: "SEO-Sitzungen", line: false },
  ]

  const rankings =
    "zofingen treuhand ag — Platz 1\ntreuhand zofingen — Platz 2\nimmobilien gmbh schweiz — Platz 4\nkapitalgewinnsteuer schweiz — Platz 5\ngrundstückgewinnsteuer aargau — Platz 8"

  const meaningBody =
    "Eine 60%ige Engagement-Rate bei organischen Besuchern ist kein Zufall — es zeigt, dass die richtigen Menschen die Seite finden. Keine Zufallsbesucher. Echte Interessenten, die aktiv nach genau den Leistungen suchen, die Zofingen Treuhand AG anbietet.\n\nDie Konsequenz: So viele neue Mandanten, dass Philippe Bally sein Team personell verstärken musste. Nicht als Ziel, sondern als Notwendigkeit. Das ist das Ergebnis, das zählt — nicht Rankings, nicht Klicks, sondern echtes Geschäftswachstum."

  // ---- Channel performance pills ----
  const channels = [
    {
      top: 4487,
      w: 573,
      title: "Organische Suche (SEO)",
      sub: "1704 Sitzungen • 60% Engagement-Rate • 71 Sek. Verweildauer",
    },
    {
      top: 4563,
      w: 573,
      title: "Direkt (Markenbekanntheit)",
      sub: "609 Sitzungen • 31% Engagement-Rate • wachsende Wiederkehrrate",
    },
    {
      top: 4639,
      w: 528,
      title: "Referral (Empfehlungen)",
      sub: "60 Sitzungen • 50% Engagement-Rate • 88 Sek. Verweildauer",
    },
  ]
</script>

<template>
  <BexoPageShell>
    <template #mobile>
      <ReferenzZofingenMobile />
    </template>
    <template #desktop>
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
            <a
              href="https://calendly.com/bexolutions/discovery-call"
              class="btn-primary"
              style="width: 237px"
            >
              Termin vereinbaren
            </a>
          </div>
        </header>

        <!-- faint background wordmark -->
        <span
          class="nav-wordmark absolute"
          style="left: 120px; top: 267px; width: 1272px; height: 108px"
        ></span>

        <!-- ============================= HERO ============================= -->
        <!-- navy card -->
        <section
          class="absolute overflow-hidden rounded-[24px] bg-[#0e2138]"
          style="left: 115px; top: 470px; width: 627px; height: 633px"
        >
          <div
            class="absolute left-0 flex w-full items-center justify-center gap-[8px]"
            style="top: 63px"
          >
            <span
              class="block h-[7px] w-[7px] rounded-full bg-[#bde0fe]"
            ></span>
            <span class="text-[14px] font-medium leading-5 text-white">
              Kundenfallstudie
            </span>
          </div>
          <h1
            class="absolute text-center text-[32px] font-semibold leading-[45px] text-white"
            style="left: 24px; top: 111px; width: 579px"
          >
            Zofingen Treuhand AG —
            <br />
            Von 0 Anfragen über Google zur
            <br />
            Teamvergrösserung in 16 Monaten.
          </h1>
          <p
            class="absolute text-center text-[18px] font-normal leading-[25px] text-white"
            style="left: 88px; top: 274px; width: 451px"
          >
            Inhabergeführtes Treuhandbüro für Privatkunden und KMU in der Region
            Zofingen, Kanton Aargau. Massnahme: SEO-Content-Strategie, Google
            Business Profile Optimierung, lokale und nationale Sichtbarkeit
            durch Bexolutions.
          </p>
          <div
            class="absolute left-0 flex w-full items-center justify-center gap-[8px]"
            style="top: 553px"
          >
            <span
              class="grid h-[18px] w-[18px] place-items-center rounded-[4px] bg-[#bde0fe] text-[11px] text-[#0e2138]"
            >
              ✓
            </span>
            <span class="text-[16px] font-normal leading-[18px] text-white">
              Aktive Zusammenarbeit
            </span>
          </div>
        </section>
        <!-- team photo -->
        <div
          class="absolute overflow-hidden rounded-[24px]"
          style="left: 765px; top: 470px; width: 627px; height: 633px"
        >
          <NuxtImg
            :src="`${IMG}/hero-team.jpg`"
            class="h-full w-full object-cover"
            alt="Team der Zofingen Treuhand AG"
          />
        </div>

        <!-- ============================= RESULTS GRID ============================= -->
        <div
          class="absolute flex items-center gap-[8px]"
          style="left: 1102px; top: 1201px"
        >
          <span class="block h-[7px] w-[7px] rounded-full bg-[#bde0fe]"></span>
          <span class="text-[16px] font-medium leading-[21px] text-[#0e2138]">
            Die Resultate auf einen Blick
          </span>
        </div>
        <div
          v-for="c of cells"
          :key="c.label"
          class="absolute"
          :style="{
            left: c.left + 'px',
            top: c.top + 'px',
            width: '504px',
            height: '343px',
            border: '0.5px solid rgba(0,0,0,0.35)',
          }"
        >
          <span
            class="absolute text-right text-[18px] font-medium leading-[24px] tracking-[-0.54px] text-black"
            style="top: 30px; right: 44px; left: 44px"
          >
            {{ c.label }}
          </span>
          <span
            class="absolute text-right text-[100px] font-semibold leading-none tracking-[-5px] text-[#13315c]"
            style="bottom: 40px; right: 34px; left: 0"
          >
            {{ c.value }}
          </span>
        </div>

        <!-- ============================= TESTIMONIAL ============================= -->
        <div
          class="absolute overflow-hidden rounded-[24px]"
          style="left: 120px; top: 2051px; width: 620px; height: 630px"
        >
          <NuxtImg
            :src="`${IMG}/testimonial.jpg`"
            class="h-full w-full object-cover"
            alt="Philippe Bally, Inhaber der Zofingen Treuhand AG"
          />
        </div>
        <section
          class="absolute overflow-hidden rounded-[24px] bg-[#f9f9f9]"
          style="left: 765px; top: 2051px; width: 627px; height: 630px"
        >
          <div
            class="absolute left-0 flex w-full items-center justify-center gap-[8px]"
            style="top: 91px"
          >
            <span
              class="block h-[7px] w-[7px] rounded-full bg-[#bde0fe]"
            ></span>
            <span class="text-[16px] font-medium leading-[21px] text-[#0e2138]">
              Testimonial
            </span>
          </div>
          <p
            class="absolute text-center text-[18px] font-normal italic leading-[26px] text-black"
            style="left: 72px; top: 151px; width: 483px"
          >
            «Wir haben Bexolutions mit der Optimierung unserer digitalen
            Sichtbarkeit beauftragt. Die Anzahl der Anfragen über unsere Website
            und unser Google-Unternehmensprofil hat sich in den vergangenen 16
            Monaten substanziell erhöht. Wir mussten infolgedessen unser Team
            personell verstärken, um die zusätzlichen Mandate ordnungsgemäss
            bearbeiten zu können. Die Zusammenarbeit verläuft strukturiert und
            die Ergebnisse sind äusserst zufriedenstellend. Bexolutions versteht
            die Anforderungen eines Treuhandbüros und setzt die vereinbarten
            Massnahmen zuverlässig um. Wir können die Zusammenarbeit
            uneingeschränkt empfehlen.»
          </p>
          <div class="absolute left-0 w-full text-center" style="top: 499px">
            <p class="text-[16px] font-medium leading-[23px] text-black">
              — Philippe Bally, Inhaber,
            </p>
            <p class="text-[16px] font-medium leading-[23px] text-black/50">
              Zofingen Treuhand AG
            </p>
          </div>
        </section>

        <!-- ============================= MASSNAHMEN ============================= -->
        <p
          class="absolute text-[18px] font-semibold leading-[22px] text-[#0e2138]"
          style="left: 120px; top: 2809px"
        >
          Die Massnahmen
        </p>
        <h2
          class="absolute text-[30px] font-semibold leading-[36px] text-[#0e2138]"
          style="left: 120px; top: 2847px; width: 1021px"
        >
          Was wir konkret umgesetzt haben.
        </h2>
        <div
          v-for="card of cards"
          :key="card.title"
          class="absolute rounded-[30px] border border-[#cbc3c3] bg-[#f9f9f9]"
          :style="{
            left: card.left + 'px',
            top: card.top + 'px',
            width: '408px',
            height: '330px',
          }"
        >
          <span
            class="absolute text-[28px] leading-none"
            style="left: 40px; top: 27px"
          >
            {{ card.icon }}
          </span>
          <div class="absolute" style="left: 40px; top: 85px; width: 328px">
            <h3 class="text-[20px] font-semibold leading-[28px] text-[#0e2138]">
              {{ card.title }}
            </h3>
            <p
              class="mt-[10px] text-[#0e2138]"
              :style="{
                fontSize: card.bodyFs + 'px',
                lineHeight: card.bodyLh + 'px',
              }"
            >
              {{ card.body }}
            </p>
          </div>
        </div>

        <!-- ============================= DETAIL RESULTS ============================= -->
        <!-- backgrounds -->
        <div
          class="absolute bg-[#f9f9f9]"
          style="left: 0; top: 3763px; width: 1512px; height: 1036px"
        ></div>
        <div
          class="absolute bg-white"
          style="left: 0; top: 4110px; width: 1512px; height: 289px"
        ></div>
        <div
          class="absolute bg-[#e6ebed]"
          style="left: 809px; top: 3763px; width: 703px; height: 636px"
        ></div>
        <div
          class="absolute"
          style="
            left: 328px;
            top: 4241px;
            width: 773px;
            height: 647px;
            background: radial-gradient(
              closest-side,
              rgba(189, 224, 254, 0.6) 0%,
              rgba(189, 224, 254, 0) 100%
            );
          "
        ></div>

        <p
          class="absolute text-[18px] font-semibold leading-[22px] text-[#0e2138]"
          style="left: 120px; top: 3869px"
        >
          Die Zahlen im Detail
        </p>
        <h2
          class="absolute text-[40px] font-semibold leading-[48px] text-[#0e2138]"
          style="left: 120px; top: 3907px; width: 566px"
        >
          Die Resultate — vollständig und transparent.
        </h2>
        <!-- big +302% -->
        <span
          class="absolute text-[128px] font-semibold leading-none tracking-[-4px] text-black"
          style="left: 129px; top: 4143px"
        >
          +302%
        </span>
        <span
          class="absolute"
          style="
            left: 608px;
            top: 4194px;
            width: 0;
            height: 0;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-bottom: 16px solid #bde0fe;
          "
        ></span>
        <p
          class="absolute whitespace-pre-line text-[20px] font-semibold leading-[24px] text-black"
          style="left: 608px; top: 4217px; width: 140px"
        >
          Mehr{{ "\n" }}Impressionen
        </p>
        <p
          class="absolute text-[18px] font-medium leading-[22px] text-black"
          style="left: 141px; top: 4311px; width: 504px"
        >
          Starke Entwicklung der organischen Sichtbarkeit über relevante
          Suchanfragen im Treuhand- und Steuerbereich.
        </p>

        <!-- grey panel stats -->
        <div
          v-for="s of detailStats"
          :key="s.value"
          class="absolute"
          :style="{ left: '876px', top: s.top + 'px', width: '400px' }"
        >
          <p class="text-[48px] font-semibold leading-[58px] text-black">
            {{ s.value }}
          </p>
          <p class="text-[18px] font-medium leading-[22px] text-black">
            {{ s.label }}
          </p>
          <div
            v-if="s.line"
            class="mt-[24px] bg-black/50"
            style="width: 400px; height: 0.5px"
          ></div>
        </div>
        <p
          class="absolute text-[16px] font-light leading-[19px] text-black"
          style="left: 877px; top: 4335px; width: 504px"
        >
          Teamvergrösserung nach 16 Monaten notwendig
        </p>

        <!-- top rankings -->
        <p
          class="absolute text-[18px] font-semibold leading-[22px] text-black"
          style="left: 228px; top: 4511px"
        >
          Top Rankings
        </p>
        <p
          class="absolute whitespace-pre-line text-[16px] font-medium leading-[19px] text-black"
          style="left: 228px; top: 4545px; width: 340px"
        >
          {{ rankings }}
        </p>

        <!-- channel performance -->
        <p
          class="absolute text-[18px] font-semibold leading-[22px] text-black"
          style="left: 767px; top: 4447px"
        >
          Kanal-Performance
        </p>
        <div
          v-for="ch of channels"
          :key="ch.title"
          class="absolute rounded-[28px] border border-[#13315c]/70"
          :style="{
            left: '767px',
            top: ch.top + 'px',
            width: ch.w + 'px',
            height: '64px',
          }"
        >
          <p
            class="absolute text-[16px] font-medium leading-[18px] text-[#0e2138]"
            style="left: 16px; top: 10px"
          >
            {{ ch.title }}
          </p>
          <p
            class="absolute text-[16px] font-medium leading-[18px] text-[#0e2138]"
            style="left: 16px; top: 36px"
          >
            {{ ch.sub }}
          </p>
        </div>

        <!-- ============================= DARK — MEANING ============================= -->
        <section
          class="absolute overflow-hidden"
          style="left: 0; top: 4799px; width: 1512px; height: 463px"
        >
          <NuxtImg
            :src="`${IMG}/dark-bg.jpg`"
            class="absolute inset-0 h-full w-full object-cover"
            alt="Dunkler Hintergrund — Bedeutung der Fallstudie-Zahlen"
          />
          <div
            class="absolute inset-0"
            style="background: rgba(14, 33, 56, 0.82)"
          ></div>
          <h2
            class="absolute text-[30px] font-semibold leading-[36px] text-white"
            style="left: 120px; top: 84px; width: 1022px"
          >
            Was diese Zahlen im echten Geschäftsleben bedeuten.
          </h2>
          <p
            class="absolute whitespace-pre-line text-[18px] font-medium leading-[22px] text-white"
            style="left: 120px; top: 152px; width: 903px"
          >
            {{ meaningBody }}
          </p>
          <div
            class="absolute border-l border-white pl-[15px]"
            style="left: 149px; top: 338px; width: 764px"
          >
            <p class="text-[16px] font-medium italic leading-[19px] text-white">
              «Bexolutions versteht die Anforderungen eines Treuhandbüros und
              setzt die vereinbarten Massnahmen zuverlässig um. Wir können die
              Zusammenarbeit uneingeschränkt empfehlen.»
            </p>
            <p
              class="mt-[10px] text-[14px] font-normal leading-[17px] text-white"
            >
              — Philippe Bally, Zofingen Treuhand AG
            </p>
          </div>
        </section>

        <!-- ============================= KI ANSWERS ============================= -->
        <section
          class="absolute overflow-hidden"
          style="left: 0; top: 5262px; width: 1512px; height: 426px"
        >
          <div
            class="absolute"
            style="
              left: 833px;
              top: -68px;
              width: 773px;
              height: 773px;
              background: radial-gradient(
                closest-side,
                rgba(189, 224, 254, 0.55) 0%,
                rgba(189, 224, 254, 0) 100%
              );
            "
          ></div>
          <p
            class="absolute text-center text-[18px] font-semibold leading-[22px] text-[#0e2138]"
            style="left: 120px; top: 96px; width: 1272px"
          >
            Neu ab 2026
          </p>
          <h2
            class="absolute text-center text-[30px] font-semibold leading-[36px] text-[#0e2138]"
            style="left: 120px; top: 130px; width: 1272px"
          >
            Zofingen Treuhand AG — auch sichtbar in KI-Antworten.
          </h2>
          <p
            class="absolute text-center text-[18px] font-medium leading-[22px] text-[#0e2138]"
            style="left: 358px; top: 198px; width: 796px"
          >
            Im Rahmen unserer GEO Readiness Massnahmen erscheint Zofingen
            Treuhand AG heute nicht nur bei klassischer Google-Suche — sondern
            zunehmend auch in den Antworten von ChatGPT, Google AI Mode und
            Perplexity auf Anfragen wie „Welches Treuhandbüro empfiehlt sich in
            der Region Zofingen?“ oder „Wer hilft mir mit der
            Grundstückgewinnsteuer im Kanton Aargau?“ 93% der KI-Suchen enden
            ohne einen Klick auf eine Website. Präsenz in der Antwort ist alles.
            Wir bauen sie systematisch auf.
          </p>
        </section>

        <!-- ============================= CTA BANNER ============================= -->
        <section
          class="absolute overflow-hidden rounded-[60px]"
          style="left: 62px; top: 5690px; width: 1389px; height: 454px"
        >
          <NuxtImg
            :src="`${IMG}/cta-bg.jpg`"
            class="absolute inset-0 h-full w-full object-cover"
            alt="CTA — ähnliche Resultate für Ihr Treuhandbüro"
          />
          <div
            class="absolute inset-0"
            style="background: rgba(14, 33, 56, 0.55)"
          ></div>
          <h2
            class="absolute left-0 w-full text-center text-[30px] font-semibold leading-[36px] text-white"
            style="top: 140px"
          >
            Ähnliche Resultate für Ihr Treuhandbüro?
          </h2>
          <p
            class="absolute left-1/2 -translate-x-1/2 text-center text-[18px] font-normal leading-[25px] text-white"
            style="top: 198px; width: 634px"
          >
            Diese Fallstudie ist kein Einzelfall — es ist eine Methode. Dieselbe
            Methode, die wir für Treuhandbüros in der Deutschschweiz
            systematisch anwenden.
          </p>
          <div
            class="absolute left-1/2 flex -translate-x-1/2 items-center gap-[20px]"
            style="top: 282px"
          >
            <a href="#" class="btn-primary" style="width: 372px">
              Kostenlose Sichtbarkeitsanalyse anfordern
            </a>
            <a
              href="/leistungen"
              class="btn-outline-white"
              style="width: 328px"
            >
              Mehr über unsere Treuhand-Methode
            </a>
          </div>
        </section>

        <!-- ============================= ABOUT BILLBOARD BAND ============================= -->
        <section
          class="absolute overflow-hidden rounded-t-[200px]"
          style="left: 0; top: 6240px; width: 1512px; height: 679px"
        >
          <NuxtImg
            :src="`${HOME}/billboard.jpg`"
            class="absolute inset-0 h-full w-full object-cover object-top"
            alt="Digitales Bexolutions-Werbeplakat in einer Bahnhofsumgebung"
          />
          <div
            class="absolute inset-0"
            style="background: rgba(14, 33, 56, 0.55)"
          ></div>
          <p
            class="absolute text-[24px] font-normal leading-[34px] text-white"
            style="left: 120px; top: 257px; width: 639px"
          >
            Bexolutions Marketing und Vertrieb AG ist eine
            Full-Service-Marketingagentur mit Sitz in Hunzenschwil, Kanton
            Aargau. Wir entwickeln komplette Marketingsysteme für KMU in der
            Deutschschweiz — Website, Local SEO, Content, LinkedIn und
            KI-Sichtbarkeit aus einer Hand. Gründungsmitglied der Elev8 Group.
            Offizieller Orbitype Reseller-Partner. SEMrush-zertifiziert.
          </p>
          <a
            href="/ueber-uns"
            class="btn-primary absolute"
            style="left: 120px; top: 553px; width: 262px"
          >
            Mehr über Bexolutions
          </a>
        </section>

        <BexoFooter :top="6918" />
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
    height: 7572px;
    flex: none;
    background: #ffffff;
  }
  .nav-logo {
    background-color: #0e2138;
    -webkit-mask: url("/images/startseite/logo-mark.png") center / contain
      no-repeat;
    mask: url("/images/startseite/logo-mark.png") center / contain no-repeat;
  }
  .nav-wordmark {
    background-color: #eef2f5;
    -webkit-mask: url("/images/startseite/wordmark.png") center / contain
      no-repeat;
    mask: url("/images/startseite/wordmark.png") center / contain no-repeat;
  }

  .btn-primary,
  .btn-navy,
  .btn-outline-white {
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
  .btn-outline-white {
    background: transparent;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.6);
  }
  .btn-outline-white:hover {
    background: rgba(255, 255, 255, 0.1);
  }
</style>
