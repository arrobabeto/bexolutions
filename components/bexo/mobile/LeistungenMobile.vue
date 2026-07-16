<script setup lang="ts">
  import BexoFooterMobile from "~/components/bexo/BexoFooterMobile.vue"
  import BexoHeader from "~/components/bexo/BexoHeader.vue"
  import BexoSection from "~/components/bexo/BexoSection.vue"
  import BackgroundMedia from "~/components/media/BackgroundMedia.vue"
  import { BEXO_VIDEOS } from "~/constants/bexoVideos"

  const UB = "/images/ueber-uns"

  const saeulen = [
    {
      title: "Säule 1 · Digitale Präsenz & Website",
      sub: "Ihre Website als stärkste Verkaufsmaschine.",
      body: "Wir bauen Websites, die verkaufen — Basis ist StoryBrand kombiniert mit KI-Technologie auf Orbitype-Basis.",
      bullets: [
        "Professionelles Webdesign nach StoryBrand-Methodik",
        "Mobiloptimierte, schnell ladende Umsetzung",
        "KI-generierte Verkaufstexte",
        "SEO-technische Grundoptimierung",
        "Conversion-Optimierung",
      ],
    },
    {
      title: "Säule 2 · Local SEO & Google Sichtbarkeit",
      sub: "Gefunden werden, wenn Kunden suchen.",
      body: "SEMrush-zertifiziertes Local-SEO-System für Top-Ergebnisse bei Google — organisch.",
      bullets: [
        "Google Business Profile Optimierung",
        "Listing-Management auf 30+ Plattformen",
        "Bewertungsmanagement",
        "Rank-Tracking bis Quartier-Ebene",
        "Monatliche Reports",
      ],
    },
    {
      title: "Säule 3 · Content & SEO-Fachbeiträge",
      sub: "Inhalte, die Vertrauen aufbauen und bei Google ranken.",
      body: "SEO-Fachbeiträge für Google und KI-Antworten in ChatGPT, Google AI Mode und Perplexity.",
      bullets: [
        "Keyword-Recherche und Content-Strategie",
        "Monatliche SEO-Fachbeiträge",
        "FAQPage- und HowTo-Schema",
        "LinkedIn-Content",
        "Google Business Profile Beiträge",
      ],
    },
    {
      title: "Säule 4 · KI-Sichtbarkeit & GEO Readiness",
      sub: "Sichtbar nicht nur bei Google — sondern in KI-Antworten.",
      body: "GEO Readiness bereitet Ihr KMU auf die KI-Suche von morgen vor.",
      bullets: [
        "GEO Readiness Audit",
        "Strukturierung für KI-Zitierbarkeit",
        "JSON-LD Schema-Implementierung",
        "KI-Visibility-Tracking",
        "Content-Automation",
      ],
    },
    {
      title: "Säule 5 · Performance & Skalierung",
      sub: "Wenn das Fundament steht: Reichweite multiplizieren.",
      body: "Google Ads, LinkedIn Outreach und weitere Kanäle — systematisch skaliert.",
      bullets: [
        "Google Ads Kampagnen",
        "LinkedIn Outreach",
        "Podcast & Social Media",
        "Landingpages für Kampagnen",
        "Conversion-Tracking",
      ],
    },
  ]
</script>

<template>
  <div>
    <BexoHeader variant="light" />

    <section class="relative mx-4 mt-4 overflow-hidden rounded-[32px]">
      <BackgroundMedia
        :poster="`${UB}/elev8-bg.jpg`"
        :video="BEXO_VIDEOS.leistungenHero"
        class="aspect-[4/3] w-full"
      />
      <div class="absolute inset-0 bg-[#0e2138]/75"></div>
      <div class="relative p-6">
        <h1 class="text-3xl font-semibold leading-tight text-white">
          Unsere Leistungen.
          <br />
          Ein System. Alles aus einer Hand.
        </h1>
        <p class="mt-4 text-base leading-relaxed text-white">
          Bexolutions baut ein zusammenhängendes Marketingsystem für Ihr KMU —
          Strategie, Umsetzung und Reporting aus einer Hand.
        </p>
        <a href="/kontakt" class="bexo-btn-primary bexo-btn-block mt-6">
          Kostenlose Sichtbarkeitsanalyse anfordern
        </a>
        <a href="/referenz-zofingen" class="bexo-btn-navy bexo-btn-block mt-3">
          Zur Fallstudie
        </a>
      </div>
    </section>

    <BexoSection v-for="(s, i) of saeulen" :key="s.title">
      <div
        class="rounded-[24px] p-6"
        :class="i % 2 === 1 ? 'bg-[#f8f8f8]' : 'bg-white'"
      >
        <p class="text-sm font-medium text-[#134074]">{{ s.title }}</p>
        <h2 class="mt-2 text-xl font-semibold text-black">{{ s.sub }}</h2>
        <p class="mt-3 text-base leading-relaxed text-black">{{ s.body }}</p>
        <ul class="mt-4 space-y-2">
          <li
            v-for="b of s.bullets"
            :key="b"
            class="flex gap-2 text-base text-black"
          >
            <span class="text-[#bde0fe]">●</span>
            {{ b }}
          </li>
        </ul>
      </div>
    </BexoSection>

    <BexoSection>
      <div class="rounded-[24px] bg-[#0e2138] p-6 text-center text-white">
        <h2 class="text-2xl font-semibold">Bereit für den nächsten Schritt?</h2>
        <p class="mt-4 text-base leading-relaxed">
          Kostenlose 20-minütige Sichtbarkeitsanalyse — unverbindlich und
          konkret.
        </p>
        <a href="/kontakt" class="bexo-btn-primary bexo-btn-block mt-6">
          Termin vereinbaren
        </a>
      </div>
    </BexoSection>

    <BexoFooterMobile />
  </div>
</template>
