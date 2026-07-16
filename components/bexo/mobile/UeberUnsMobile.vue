<script setup lang="ts">
  import BexoSection from "~/components/bexo/BexoSection.vue"
  import BackgroundMedia from "~/components/media/BackgroundMedia.vue"
  import { BEXO_VIDEOS } from "~/constants/bexoVideos"

  const IMG = "/images/ueber-uns"

  const principles = [
    {
      title: "100% Digital & ortsunabhängig",
      body: "Vollständig cloudbasiert — maximale Effizienz und Flexibilität für Sie.",
      img: `${IMG}/principle-1.jpg`,
    },
    {
      title: "KI-gestützt, aber menschlich geführt",
      body: "KI beschleunigt die Arbeit. Strategie und Verantwortung bleiben beim Menschen.",
      img: `${IMG}/principle-2.jpg`,
    },
    {
      title: "Daten statt Bauchgefühl",
      body: "Marketingentscheidungen auf Basis von Zahlen, Daten und Fakten.",
      img: `${IMG}/principle-3.jpg`,
    },
  ]

  const companies = [
    {
      name: "Bexolutions Marketing & Vertrieb AG",
      cat: "Marketing & Vertrieb — Schweiz",
      body: "Full-Service-Marketing, SEO, Content und KI-Sichtbarkeit für Schweizer KMU.",
    },
    {
      name: "Syntech Solutions",
      cat: "Technologie & App-Entwicklung",
      body: "Digitale Produkte, Web-Applikationen und technische Infrastruktur.",
    },
    {
      name: "SharkAgency",
      cat: "Performance Marketing & E-Commerce",
      body: "Google Ads, Meta Ads und skalierbare E-Commerce-Strategien im DACH-Raum.",
    },
  ]

  const team = Array.from({ length: 12 }, (_, i) => `${IMG}/team-${i + 1}.png`)
</script>

<template>
  <div>
    <section class="relative mx-4 mt-4 overflow-hidden rounded-[32px]">
      <BackgroundMedia
        :poster="`${IMG}/hero-bg.jpg`"
        :video="BEXO_VIDEOS.ueberUnsHero"
        class="aspect-[4/3] w-full"
      />
      <div class="absolute inset-0 bg-[#0e2138]/75"></div>
      <div class="relative p-6">
        <h1 class="text-3xl font-semibold leading-tight text-white">
          Wir leben Marketing.
          <br />
          Jeden Tag besser als gestern.
        </h1>
        <p class="mt-4 text-base leading-relaxed text-white">
          Wir verbinden Wert und Bedürfnis für Schweizer KMU — täglich,
          systematisch, messbar.
        </p>
        <a href="/kontakt" class="bexo-btn-primary bexo-btn-block mt-6">
          Beratungstermin sichern
        </a>
      </div>
    </section>

    <BexoSection>
      <h2 class="text-2xl font-semibold text-[#0e2138]">Unsere Prinzipien</h2>
      <div class="mt-6 space-y-6">
        <article
          v-for="p of principles"
          :key="p.title"
          class="overflow-hidden rounded-[24px] bg-[#ecf6ff]"
        >
          <NuxtImg
            :src="p.img"
            class="aspect-video w-full object-cover"
            alt=""
          />
          <div class="p-5">
            <h3 class="text-lg font-semibold text-black">{{ p.title }}</h3>
            <p class="mt-2 text-base leading-relaxed text-black">
              {{ p.body }}
            </p>
          </div>
        </article>
      </div>
    </BexoSection>

    <BexoSection>
      <h2 class="text-2xl font-semibold text-black">Unser Team</h2>
      <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <NuxtImg
          v-for="(src, i) of team"
          :key="i"
          :src="src"
          class="aspect-square w-full rounded-[16px] object-cover"
          alt=""
        />
      </div>
    </BexoSection>

    <BexoSection>
      <h2 class="text-2xl font-semibold text-black">Die Bexolutions Gruppe</h2>
      <div class="mt-6 space-y-4">
        <div
          v-for="c of companies"
          :key="c.name"
          class="rounded-[20px] border border-black/10 p-5"
        >
          <h3 class="text-lg font-semibold text-black">{{ c.name }}</h3>
          <p class="mt-1 text-sm font-medium text-[#134074]">{{ c.cat }}</p>
          <p class="mt-2 text-base leading-relaxed text-black">{{ c.body }}</p>
        </div>
      </div>
    </BexoSection>
  </div>
</template>
