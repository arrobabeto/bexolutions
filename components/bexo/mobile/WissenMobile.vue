<script setup lang="ts">
  import BexoFooterMobile from "~/components/bexo/BexoFooterMobile.vue"
  import BexoHeader from "~/components/bexo/BexoHeader.vue"
  import BexoSection from "~/components/bexo/BexoSection.vue"

  const IMG = "/images/wissen"

  const chips = [
    { label: "Alle", active: true },
    { label: "SEO & Google", active: false },
    { label: "KI-Sichtbarkeit", active: false },
    { label: "Local SEO", active: false },
    { label: "LinkedIn", active: false },
    { label: "Website", active: false },
    { label: "Treuhand", active: false },
  ]

  const categories = [
    "KI & GEO",
    "Local SEO",
    "SEO für KMU",
    "Treuhand-spezifisch",
    "LinkedIn & Personal Branding",
  ]

  const topics = [
    {
      icon: "🔍",
      title: "SEO & Google",
      body: "Organische Sichtbarkeit, Keyword-Strategie, technisches SEO — ohne Werbebudget zu mehr Kunden über Google.",
    },
    {
      icon: "📊",
      title: "KI-Sichtbarkeit",
      body: "GEO Readiness, ChatGPT-Optimierung, Google AI Mode — wie Ihr KMU in KI-Antworten erscheint.",
    },
    {
      icon: "🚀",
      title: "Local SEO",
      body: "Google Business Profile, Google Maps, Bewertungsmanagement — für KMU mit lokalem Kundenfokus.",
    },
    {
      icon: "🗺️",
      title: "LinkedIn",
      body: "Personal Branding, Thought Leadership, LinkedIn Outreach — für KMU-Inhaber und Geschäftsführer.",
    },
    {
      icon: "📈",
      title: "Website & Conversion",
      body: "StoryBrand-Methodik, Conversion-Optimierung, Webdesign — Websites die verkaufen, nicht nur existieren.",
    },
    {
      icon: "📈",
      title: "Treuhand & Steuerberatung",
      body: "Spezialisiertes Marketing-Wissen für Treuhandbüros in der Deutschschweiz — Mandanten über Google gewinnen.",
    },
  ]
</script>

<template>
  <div>
    <BexoHeader variant="light" />

    <BexoSection compact-top>
      <div class="rounded-[24px] bg-[#f9f9f9] p-6 text-center">
        <h1 class="text-3xl font-semibold leading-tight text-black">
          Wissen, das wirkt.
          <br />
          Marketing für Schweizer KMU — ohne Theorie.
        </h1>
        <p class="mt-4 text-base leading-relaxed text-black">
          Kein Content-Marketing-Bla. Praxisnahes Wissen zu SEO, Local SEO,
          KI-Sichtbarkeit und LinkedIn — von einem Team, das dieselben Methoden
          täglich für über 100 KMU in der Deutschschweiz anwendet.
        </p>
      </div>
    </BexoSection>

    <BexoSection compact-y>
      <div class="overflow-hidden rounded-[24px]">
        <NuxtImg
          :src="`${IMG}/hero-feature.jpg`"
          class="aspect-video w-full object-cover"
          alt=""
        />
      </div>
      <p class="mt-6 text-center text-base leading-relaxed text-black">
        Jeder Artikel auf dieser Seite basiert auf echter Kundenerfahrung —
        nicht auf Theorie. Wir schreiben über das, was wir umsetzen, und über
        die Resultate, die es bringt.
      </p>
    </BexoSection>

    <div class="px-4 pb-6">
      <div class="max-w-xl mx-auto flex snap-x gap-2 overflow-x-auto pb-2">
        <span
          v-for="c of chips"
          :key="c.label"
          class="grid h-11 shrink-0 snap-start place-items-center rounded-full px-5 text-sm font-medium text-[#0e2138]"
          :class="c.active ? 'bg-[#bde0fe]' : 'bg-[#f9f9f9]'"
        >
          {{ c.label }}
        </span>
      </div>
    </div>

    <BexoSection>
      <article class="overflow-hidden rounded-[24px] bg-[#f1f1f1]">
        <NuxtImg
          :src="`${IMG}/featured-article.jpg`"
          class="aspect-video w-full object-cover"
          alt=""
        />
        <div class="p-6">
          <h2 class="text-xl font-semibold leading-snug text-black">
            Warum 93% der KI-Suchen ohne Klick enden — und was das für Ihr KMU
            bedeutet
          </h2>
          <p class="mt-3 text-base leading-relaxed text-black">
            Google hat die Suchmaschine neu gebaut. Wer in KI-Antworten nicht
            erscheint, existiert für einen wachsenden Teil der Käufer nicht.
          </p>
          <p class="mt-2 text-base text-black">
            ⏱️ KI-Sichtbarkeit · 6 Min. Lesezeit
          </p>
          <a
            href="/wissen/google-business-profile-optimieren"
            class="bexo-btn-primary mt-4 inline-grid"
          >
            Weiterlesen →
          </a>
        </div>
      </article>
    </BexoSection>

    <BexoSection v-for="cat of categories" :key="cat">
      <h3 class="text-lg font-medium text-black">{{ cat }}</h3>
      <div class="mt-4 grid grid-cols-1 gap-4">
        <a
          v-for="i of 3"
          :key="i"
          href="/wissen/google-business-profile-optimieren"
          class="block overflow-hidden rounded-[20px] bg-[#f9f9f9] shadow-sm transition hover:brightness-95"
        >
          <NuxtImg
            :src="`${IMG}/card.jpg`"
            class="aspect-[16/9] w-full object-cover"
            alt=""
          />
          <div class="p-4">
            <span
              class="inline-flex items-center gap-1 rounded-full bg-[#0e2138] px-3 py-1 text-xs font-medium text-white"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-[#bde0fe]"></span>
              KI-Sichtbarkeit
            </span>
            <p class="mt-3 text-base font-semibold text-black">
              Praxisnaher Artikel aus der Kategorie {{ cat }}
            </p>
          </div>
        </a>
      </div>
    </BexoSection>

    <BexoSection>
      <h2 class="text-2xl font-semibold text-black">Wissen nach Thema</h2>
      <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div
          v-for="t of topics"
          :key="t.title"
          class="rounded-[20px] border border-black/10 p-5"
        >
          <span class="text-2xl">{{ t.icon }}</span>
          <h3 class="mt-2 text-lg font-semibold text-black">{{ t.title }}</h3>
          <p class="mt-2 text-base leading-relaxed text-[#4b4c56]">
            {{ t.body }}
          </p>
        </div>
      </div>
    </BexoSection>

    <BexoFooterMobile />
  </div>
</template>
