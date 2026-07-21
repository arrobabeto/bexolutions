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

  /** Elev8 Group — mirrors desktop `companies` + Figma 338:743 mobile layout */
  const companies = [
    {
      logo: `${IMG}/logo-bex.png`,
      logoClass: "h-[42px] w-auto max-w-[215px]",
      name: "Bexolutions Marketing & Vertrieb AG",
      cat: "Marketing & Vertrieb — Schweiz",
      body: "Full-Service-Marketing, SEO, Content, KI-Sichtbarkeit und Vertriebsoptimierung für Schweizer KMU. Das sind wir.",
    },
    {
      logo: `${IMG}/logo-syntech.png`,
      logoClass: "h-[23px] w-auto max-w-[221px]",
      name: "Syntech Solutions",
      cat: "Technologie & App-Entwicklung",
      body: "Massgeschneiderte digitale Produkte, Web-Applikationen und technische Infrastruktur für anspruchsvolle Digitalprojekte.",
    },
    {
      logo: `${IMG}/logo-shark.png`,
      logoClass: "h-[37px] w-auto max-w-[164px]",
      name: "SharkAgency",
      cat: "Performance Marketing & E-Commerce",
      body: "Google Ads, Meta Ads, datengetriebene Kampagnen und skalierbare E-Commerce-Strategien im DACH-Raum.",
    },
  ]

  const groupStats = [
    { value: "60%", label: "Mitarbeitende in der Gruppe" },
    { value: "250+", label: "betreute Klienten" },
    { value: "200M+ €", label: "generierter Klientenumsatz" },
    { value: "4.9/5", label: "über 1'200+ Bewertungen" },
  ]

  const team = Array.from({ length: 12 }, (_, i) => `${IMG}/team-${i + 1}.png`)
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
          <a href="/kontakt" class="bexo-btn-primary bexo-btn-block mt-5">
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
            class="aspect-video w-full object-cover"
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

    <!-- Elev8 Group — Figma mobile 338:743 -->
    <section class="box-border w-full max-w-full px-4 py-8">
      <div
        class="max-w-xl relative mx-auto w-full overflow-hidden rounded-[40px]"
      >
        <BackgroundMedia
          :poster="`${IMG}/elev8-bg.jpg`"
          :video="BEXO_VIDEOS.ueberUnsElev8"
          class="absolute inset-0 h-full w-full"
        />
        <div class="absolute inset-0 bg-black/70" aria-hidden="true"></div>

        <div class="relative text-white">
          <div class="px-6 pb-8 pt-14 sm:px-7">
            <p class="text-base font-semibold leading-normal">Elevate Group</p>
            <h2
              class="mt-5 break-words text-[28px] font-semibold leading-tight"
            >
              Bexolutions ist
              <br />
              Gründungsmitglied der Elev8 Group.
            </h2>
            <p
              class="mt-5 break-words text-base font-normal leading-[1.4] tracking-[0.32px]"
            >
              Für Mandate, die über klassisches Marketing hinausgehen, greifen
              wir auf das volle Leistungsspektrum der Elev8 Group zurück — einem
              Zusammenschluss dreier spezialisierter Unternehmen mit Hauptsitz
              in der Schweiz, aktiv in der DACH-Region und darüber hinaus.
            </p>
          </div>

          <div class="border-t border-white/60">
            <article
              v-for="c of companies"
              :key="c.name"
              class="border-b border-white/60 bg-[rgba(3,3,3,0.5)] px-6 py-8 sm:px-7"
            >
              <NuxtImg
                :src="c.logo"
                class="object-contain object-left"
                :class="c.logoClass"
                :alt="c.name"
              />
              <h3
                class="mt-[18px] break-words text-lg font-semibold leading-[1.4] tracking-[0.36px]"
              >
                {{ c.name }}
              </h3>
              <p
                class="mt-2 break-words text-base leading-[1.4] tracking-[0.32px]"
              >
                <span class="font-bold">{{ c.cat }}</span>
                <br />
                <span class="font-normal">{{ c.body }}</span>
              </p>
            </article>
          </div>

          <div>
            <div
              v-for="(s, i) of groupStats"
              :key="s.value"
              class="flex min-h-[124px] items-center justify-between gap-4 border-b border-white/60 bg-[rgba(3,3,3,0.5)] px-6 py-5 sm:px-7"
              :class="i === groupStats.length - 1 ? 'border-b-0' : ''"
            >
              <span
                class="min-w-0 flex-1 break-words text-base font-semibold leading-snug tracking-[-0.48px]"
              >
                {{ s.label }}
              </span>
              <span
                class="shrink-0 text-right text-[42px] font-semibold leading-none tracking-[-2.1px]"
              >
                {{ s.value }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
