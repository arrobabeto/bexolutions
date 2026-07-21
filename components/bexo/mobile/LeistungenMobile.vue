<script setup lang="ts">
  import BexoSection from "~/components/bexo/BexoSection.vue"
  import BackgroundMedia from "~/components/media/BackgroundMedia.vue"
  import { BEXO_VIDEOS } from "~/constants/bexoVideos"

  const UB = "/images/ueber-uns"
  const HOME = "/images/startseite"

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
  <div class="box-border w-full min-w-0 max-w-full overflow-x-clip">
    <section class="box-border w-full max-w-full px-4 pt-4">
      <div
        class="max-w-xl relative mx-auto w-full overflow-hidden rounded-[24px]"
      >
        <BackgroundMedia
          :poster="`${UB}/elev8-bg.jpg`"
          :video="BEXO_VIDEOS.leistungenHero"
          poster-alt="Bexolutions Leistungen — Marketing und SEO für KMU"
          class="aspect-[4/5] w-full max-w-full sm:aspect-[16/10]"
        />
        <div class="absolute inset-0 bg-[#0e2138]/75"></div>
        <div class="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
          <h1
            class="max-w-full text-[1.75rem] font-semibold leading-tight text-white sm:text-3xl"
          >
            Unsere Leistungen.
            <br />
            Ein System. Alles aus einer Hand.
          </h1>
          <p
            class="mt-3 max-w-full text-sm leading-relaxed text-white sm:text-base"
          >
            Bexolutions baut ein zusammenhängendes Marketingsystem für Ihr KMU —
            Strategie, Umsetzung und Reporting aus einer Hand.
          </p>
          <a href="/kontakt" class="bexo-btn-primary bexo-btn-block mt-5">
            Kostenlose Sichtbarkeitsanalyse anfordern
          </a>
          <a
            href="/referenz-zofingen"
            class="bexo-btn-navy bexo-btn-block mt-2"
          >
            Zur Fallstudie
          </a>
        </div>
      </div>
    </section>

    <BexoSection
      v-for="(s, i) of saeulen"
      :key="s.title"
      :compact-y="i > 0"
      :class="i === 0 ? '' : undefined"
    >
      <article
        class="box-border w-full min-w-0 max-w-full rounded-[20px] p-5"
        :class="i % 2 === 1 ? 'bg-[#f8f8f8]' : 'bg-white'"
      >
        <p class="break-words text-sm font-medium text-[#134074]">
          {{ s.title }}
        </p>
        <h2
          class="mt-2 break-words text-lg font-semibold leading-snug text-black sm:text-xl"
        >
          {{ s.sub }}
        </h2>
        <p
          class="mt-3 break-words text-sm leading-relaxed text-black sm:text-base"
        >
          {{ s.body }}
        </p>
        <ul class="mt-4 space-y-2">
          <li
            v-for="b of s.bullets"
            :key="b"
            class="flex min-w-0 gap-2 text-sm leading-snug text-black sm:text-base"
          >
            <span class="mt-1 shrink-0 text-[#bde0fe]" aria-hidden="true">
              ●
            </span>
            <span class="min-w-0 break-words">{{ b }}</span>
          </li>
        </ul>
      </article>
    </BexoSection>

    <section
      class="relative box-border w-full min-w-0 max-w-full overflow-hidden rounded-t-[40px]"
    >
      <NuxtImg
        :src="`${HOME}/billboard.jpg`"
        class="absolute inset-0 h-full w-full object-cover object-top"
        alt="Digitales Bexolutions-Werbeplakat in einer Bahnhofsumgebung"
        sizes="100vw"
      />
      <div class="absolute inset-0 bg-[#0e2138]/50"></div>
      <div class="max-w-xl relative mx-auto w-full px-5 py-10 sm:px-6 sm:py-12">
        <h2
          class="break-words text-xl font-semibold leading-snug text-white sm:text-2xl"
        >
          Bereit zu erfahren, welche Leistungen Ihr KMU jetzt braucht?
        </h2>
        <p
          class="mt-4 break-words text-sm leading-relaxed text-white sm:text-base"
        >
          Buchen Sie Ihre kostenlose 20-minütige Sichtbarkeitsanalyse. Wir
          schauen uns Ihre aktuelle digitale Präsenz an und empfehlen Ihnen
          konkret, wo der grösste Hebel liegt.
        </p>
        <a href="/kontakt" class="bexo-btn-primary bexo-btn-block mt-6">
          Jetzt Sichtbarkeitsanalyse anfordern
        </a>
      </div>
    </section>
  </div>
</template>
