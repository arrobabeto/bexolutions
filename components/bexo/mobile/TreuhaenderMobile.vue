<script setup lang="ts">
  import { ref } from "vue"
  import BexoFooterMobile from "~/components/bexo/BexoFooterMobile.vue"
  import BexoHeader from "~/components/bexo/BexoHeader.vue"
  import BexoSection from "~/components/bexo/BexoSection.vue"

  const IMG = "/images/treuhaender"
  const REF = "/images/referenz-zofingen"

  const problems = [
    {
      title: "Empfehlungen als einziger Akquisitionskanal",
      body: "Gezieltes, planbares Wachstum bleibt aus.",
    },
    {
      title: "Website ohne Wirkung",
      body: "Ihre Website bringt 0 qualifizierte Anfragen.",
    },
    {
      title: "Keine Zeit für Marketing",
      body: "Marketing bleibt liegen — das kostet täglich neue Mandate.",
    },
    {
      title: "Unsichtbar bei Google",
      body: "Potenzielle Mandanten finden Ihre Mitbewerber.",
    },
    {
      title: "Mitbewerber ranken höher",
      body: "Schlechterer Service, bessere Sichtbarkeit — weil früher investiert.",
    },
    {
      title: "Unsichtbar in KI-Antworten",
      body: "ChatGPT und Google AI kennen Ihr Büro nicht.",
    },
  ]

  const cells = [
    { label: "mehr Klicks pro Monat", value: "+200%" },
    { label: "mehr Google-Impressionen", value: "+302%" },
    { label: "organische Besucher", value: "1'704" },
    { label: "Engagement-Rate", value: "60%" },
    { label: "Google-Rankings (Kernbegriffe)", value: "Top 3" },
    { label: "bis zur Teamvergrösserung", value: "16 Mt." },
  ]

  const steps = [
    { n: "1", label: "Analyse", extra: " (kostenlos)" },
    { n: "2", label: "Strategie", extra: "" },
    { n: "3", label: "Umsetzung", extra: "" },
    { n: "4", label: "Auswertung", extra: "" },
  ]

  const methodRows = [
    {
      title: "SEO-Content-Strategie für Treuhand-Themen",
      body: "Gezielte Fachbeiträge für die Suchanfragen Ihrer Zielkunden.",
    },
    {
      title: "15+ optimierte Fachbeiträge",
      body: "Branchenspezifische Artikel — Sie prüfen, wir publizieren.",
    },
    {
      title: "Lokale & nationale Sichtbarkeit",
      body: "30+ Schweizer Plattformen für starke lokale Signale.",
    },
    {
      title: "KI-Sichtbarkeit & GEO Readiness",
      body: "Strukturierte Inhalte für ChatGPT und Google AI Antworten.",
    },
    {
      title: "Monatliches Reporting",
      body: "Klicks, Rankings, Anfragen und KI-Visibility — jeden Monat.",
    },
  ]

  const openFaq = ref<number | null>(null)
</script>

<template>
  <div>
    <BexoHeader variant="light" />

    <BexoSection compact-top>
      <h1 class="text-3xl font-semibold leading-tight text-[#0e2138]">
        Mehr Mandanten für Ihr Treuhandbüro. Systematisch. Messbar. Ohne
        Werbebudget.
      </h1>
      <p class="mt-4 text-base leading-relaxed text-[#13315c]">
        Wir machen Ihr Büro bei Google sichtbar — genau dann, wenn potenzielle
        Mandanten aktiv suchen. Kein Zufall. Nur System.
      </p>
      <a href="/kontakt" class="bexo-btn-navy bexo-btn-block mt-6">
        Kostenlose Sichtbarkeitsanalyse anfordern
      </a>
      <a href="/referenz-zofingen" class="bexo-btn-primary bexo-btn-block mt-3">
        Zur Fallstudie
      </a>
    </BexoSection>

    <BexoSection>
      <h2 class="text-2xl font-semibold text-black">Das Problem</h2>
      <div class="mt-6 space-y-4">
        <div
          v-for="p of problems"
          :key="p.title"
          class="rounded-[16px] border border-black/10 p-5"
        >
          <h3 class="text-lg font-semibold text-black">{{ p.title }}</h3>
          <p class="mt-2 text-base text-[#4b4c56]">{{ p.body }}</p>
        </div>
      </div>
    </BexoSection>

    <BexoSection>
      <h2 class="text-2xl font-semibold text-black">Resultate</h2>
      <div class="mt-4 overflow-hidden rounded-[24px]">
        <NuxtImg
          :src="`${REF}/hero-team.jpg`"
          class="aspect-video w-full object-cover"
          alt="Zofingen Treuhand AG"
        />
      </div>
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
      <h2 class="text-2xl font-semibold text-black">Unsere Methode</h2>
      <div class="mt-6 space-y-4">
        <div
          v-for="(m, i) of methodRows"
          :key="m.title"
          class="rounded-[20px] p-5"
          :class="i % 2 === 1 ? 'bg-[#f8f8f8]' : 'bg-white'"
        >
          <h3 class="text-lg font-semibold text-black">{{ m.title }}</h3>
          <p class="mt-2 text-base leading-relaxed text-black">{{ m.body }}</p>
        </div>
      </div>
    </BexoSection>

    <BexoSection>
      <h2 class="text-2xl font-semibold text-black">Der Prozess</h2>
      <ol class="mt-6 space-y-6">
        <li v-for="s of steps" :key="s.n" class="flex gap-4">
          <span
            class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#bde0fe] text-lg font-bold text-[#0e2138]"
          >
            {{ s.n }}
          </span>
          <div>
            <h3 class="text-lg font-semibold text-black">
              {{ s.label }}{{ s.extra }}
            </h3>
          </div>
        </li>
      </ol>
    </BexoSection>

    <BexoSection>
      <div class="rounded-[24px] bg-[#0e2138] p-6 text-center text-white">
        <h2 class="text-2xl font-semibold">Bereit für mehr Mandanten?</h2>
        <a href="/kontakt" class="bexo-btn-primary bexo-btn-block mt-6">
          Kostenlose Analyse buchen
        </a>
      </div>
    </BexoSection>

    <BexoFooterMobile />
  </div>
</template>
