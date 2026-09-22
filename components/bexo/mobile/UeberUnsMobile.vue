<script setup lang="ts">
  import BexoSection from "~/components/bexo/BexoSection.vue"
  import BackgroundMedia from "~/components/media/BackgroundMedia.vue"
  import { BEXO_CTA_TERMIN } from "~/constants/bexoNav"
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

  const team = [
    "team-1",
    "team-2",
    "team-3",
    "team-4",
    "team-5",
    "team-6",
    "team-7",
    "team-8",
    "team-10",
    "team-12",
  ].map((img) => `${IMG}/${img}.png`)
</script>

<template>
  <div class="box-border w-full min-w-0 max-w-full overflow-x-clip">
    <section class="box-border w-full max-w-full px-4 pt-4">
      <div
        class="max-w-xl relative mx-auto w-full overflow-hidden rounded-[32px]"
      >
        <BackgroundMedia
          :poster="`${IMG}/hero-bg.jpg`"
          :video="BEXO_VIDEOS.ueberUnsHero"
          poster-alt="Bexolutions Team und Agentur im Kanton Aargau"
          class="aspect-[4/5] w-full max-w-full sm:aspect-[16/10]"
        />
        <div class="absolute inset-0 bg-[#0e2138]/75"></div>
        <div class="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
          <h1
            class="max-w-full text-[1.75rem] font-semibold leading-tight text-white sm:text-3xl"
          >
            Wir leben Marketing.
            <br />
            Jeden Tag besser als gestern.
          </h1>
          <p
            class="mt-3 max-w-full text-sm leading-relaxed text-white sm:text-base"
          >
            Wir verbinden Wert und Bedürfnis für Schweizer KMU — täglich,
            systematisch, messbar.
          </p>
          <a
            :href="BEXO_CTA_TERMIN.href"
            class="bexo-btn-primary bexo-btn-block mt-5"
          >
            Beratungstermin sichern
          </a>
        </div>
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
            class="h-[350px] w-full object-cover"
            :alt="p.title"
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
          alt="Teammitglied von Bexolutions"
        />
      </div>
    </BexoSection>
  </div>
</template>
