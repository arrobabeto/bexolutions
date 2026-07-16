<script setup lang="ts">
  import BexoSection from "~/components/bexo/BexoSection.vue"

  const IMG = "/images/referenz-zofingen"

  const cells = [
    { label: "mehr Klicks pro Monat", value: "+200%" },
    { label: "mehr Google-Impressionen", value: "+302%" },
    { label: "organische Besucher", value: "1'704" },
    { label: "Engagement-Rate", value: "60%" },
    { label: "Google-Rankings (Kernbegriffe)", value: "Top 3" },
    { label: "bis zur Teamvergrösserung", value: "16 Mt." },
  ]

  const cards = [
    {
      icon: "🔍",
      title: "SEO-Content-Strategie",
      body: "Content-Strategie ausgerichtet auf Suchanfragen potenzieller Mandanten.",
    },
    {
      icon: "📊",
      title: "15+ optimierte Fachbeiträge",
      body: "Tiefgründige SEO-Artikel mit FAQPage-Schema und KI-Optimierung.",
    },
    {
      icon: "🚀",
      title: "Google Business Profile Optimierung",
      body: "Neuausrichtung mit wöchentlichen Beiträgen und Bewertungsmanagement.",
    },
    {
      icon: "🗺️",
      title: "Lokale & nationale Sichtbarkeit",
      body: "Listing-Management auf 30+ Schweizer Plattformen.",
    },
    {
      icon: "📈",
      title: "GEO Readiness",
      body: "KI-Zitierbarkeit für ChatGPT, Google AI Mode und Perplexity.",
    },
  ]

  const channels = [
    {
      title: "Organische Suche (SEO)",
      sub: "1704 Sitzungen • 60% Engagement-Rate",
    },
    {
      title: "Direkt (Markenbekanntheit)",
      sub: "609 Sitzungen • 31% Engagement-Rate",
    },
    {
      title: "Referral (Empfehlungen)",
      sub: "60 Sitzungen • 50% Engagement-Rate",
    },
  ]
</script>

<template>
  <div>
    <section
      class="relative mx-4 mt-4 overflow-hidden rounded-[32px] bg-[#0e2138] p-6"
    >
      <span
        class="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm text-white"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-[#bde0fe]"></span>
        Kundenfallstudie
      </span>
      <h1 class="mt-4 text-2xl font-semibold leading-snug text-white">
        Zofingen Treuhand AG — Von 0 Anfragen über Google zur Teamvergrösserung
        in 16 Monaten.
      </h1>
      <p class="mt-4 text-base leading-relaxed text-white/90">
        Inhabergeführtes Treuhandbüro in der Region Zofingen. SEO-Content,
        Google Business Profile und lokale Sichtbarkeit durch Bexolutions.
      </p>
    </section>

    <BexoSection compact-y>
      <div class="overflow-hidden rounded-[24px]">
        <NuxtImg
          :src="`${IMG}/hero-team.jpg`"
          class="aspect-[3/4] w-full object-cover"
          alt="Team der Zofingen Treuhand AG"
        />
      </div>
    </BexoSection>

    <BexoSection>
      <h2 class="text-2xl font-semibold text-black">Resultate in Zahlen</h2>
      <div class="mt-6 grid grid-cols-2 gap-4">
        <div
          v-for="c of cells"
          :key="c.label"
          class="rounded-[16px] bg-[#f8f8f8] p-4"
        >
          <p class="text-2xl font-bold text-[#0e2138]">{{ c.value }}</p>
          <p class="mt-1 text-sm text-black">{{ c.label }}</p>
        </div>
      </div>
    </BexoSection>

    <BexoSection>
      <h2 class="text-2xl font-semibold text-black">Massnahmen</h2>
      <div class="mt-6 space-y-4">
        <div
          v-for="c of cards"
          :key="c.title"
          class="rounded-[20px] border border-black/10 p-5"
        >
          <span class="text-2xl">{{ c.icon }}</span>
          <h3 class="mt-2 text-lg font-semibold text-black">{{ c.title }}</h3>
          <p class="mt-2 text-base leading-relaxed text-[#4b4c56]">
            {{ c.body }}
          </p>
        </div>
      </div>
    </BexoSection>

    <BexoSection>
      <h2 class="text-2xl font-semibold text-black">Kanäle</h2>
      <div class="mt-6 space-y-3">
        <div
          v-for="ch of channels"
          :key="ch.title"
          class="rounded-full bg-[#ecf6ff] px-5 py-4"
        >
          <p class="font-semibold text-[#0e2138]">{{ ch.title }}</p>
          <p class="mt-1 text-sm text-black">{{ ch.sub }}</p>
        </div>
      </div>
    </BexoSection>

    <section class="w-full bg-[#0e2138] px-4 py-12 text-white">
      <div class="max-w-xl mx-auto">
        <h2 class="text-xl font-semibold">Das Ergebnis, das zählt</h2>
        <p class="mt-4 text-base leading-relaxed">
          So viele neue Mandanten, dass Philippe Bally sein Team personell
          verstärken musste — echtes Geschäftswachstum, nicht nur Rankings.
        </p>
        <a href="/kontakt" class="bexo-btn-primary bexo-btn-block mt-6">
          Ähnliche Resultate anstreben
        </a>
      </div>
    </section>
  </div>
</template>
