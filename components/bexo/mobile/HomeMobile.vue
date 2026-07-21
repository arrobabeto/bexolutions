<script setup lang="ts">
  import { ref } from "vue"
  import BexoSection from "~/components/bexo/BexoSection.vue"
  import BackgroundMedia from "~/components/media/BackgroundMedia.vue"
  import { BEXO_VIDEOS } from "~/constants/bexoVideos"

  const IMG = "/images/startseite"

  const stats = [
    { label: "mehr Klicks pro Monat", value: "+200%" },
    { label: "mehr Google-Impressionen", value: "+302%" },
    { label: "organische Besucher", value: "1'704" },
    { label: "Engagement-Rate", value: "60%" },
    { label: "Google-Rankings (Kernbegriffe)", value: "Top 3" },
    { label: "bis zur Teamvergrösserung", value: "16 Mt." },
  ]

  const features = [
    {
      title: "Digitale Präsenz",
      body: "Professionelle, verkaufsstarke Website auf StoryBrand-Framework & KI-Technologie.",
      img: `${IMG}/feat-digitale.png`,
      bg: "#ecf6ff",
    },
    {
      title: "Local SEO & Google Sichtbarkeit",
      body: "Top-Ergebnisse bei Google — organisch, ohne Werbebudget.",
      img: `${IMG}/feat-localseo.png`,
      bg: "#ffffff",
    },
    {
      title: "Content & Thought Leadership",
      body: "SEO-Fachbeiträge, LinkedIn, Newsletter — Inhalte, die Vertrauen aufbauen.",
      img: `${IMG}/feat-content.jpg`,
      bg: "#ffeef4",
    },
    {
      title: "Performance & Skalierung",
      body: "Google Ads, LinkedIn Outreach, Podcast — systematisch skalieren.",
      img: `${IMG}/feat-performance.png`,
      bg: "#ffffff",
    },
    {
      title: "KI-Sichtbarkeit & GEO Readiness",
      body: "Sichtbar in ChatGPT, Google AI Mode und Perplexity — bevor Mitbewerber es tun.",
      img: `${IMG}/feat-ki.png`,
      bg: "#ecf6ff",
    },
  ]

  const steps = [
    {
      n: "1",
      title: "Analyse",
      body: "Google-Sichtbarkeit, Mitbewerber und Suchanfragen Ihrer Zielkunden.",
    },
    {
      n: "2",
      title: "Strategie",
      body: "Massgeschneiderter Plan für Branche, Region und Wachstumsziele.",
    },
    {
      n: "3",
      title: "Umsetzung",
      body: "Website, SEO, Google Business Profile, LinkedIn — termingerecht.",
    },
    {
      n: "4",
      title: "Ergebnisse",
      body: "Monatliche Reports: Klicks, Rankings, Anfragen, KI-Sichtbarkeit.",
    },
  ]

  const warumCards = [
    {
      title: "Alles aus einer Hand",
      body: "Website, SEO, Content, LinkedIn, Ads — ein Team, ein Ansprechpartner.",
    },
    {
      title: "Bereit für die KI-Suche von morgen",
      body: "GEO Readiness bringt Sie in Google-Rankings und KI-Antworten.",
    },
    {
      title: "SEMrush-zertifiziert",
      body: "Local-SEO-Methodik offiziell von SEMrush zertifiziert.",
    },
    {
      title: "Fixe Monatsrate, keine Überraschungen",
      body: "Volle Planbarkeit — kein Stundenhonorar, kein versteckter Aufwand.",
    },
    {
      title: "Monatliches Reporting — klassisch & KI",
      body: "SEO-Metriken und KI-Visibility-Tracking in einem Reporting.",
    },
    {
      title: "Ergebnisse, keine Versprechen",
      body: "Messbar, monatlich dokumentiert. Was nicht funktioniert, passen wir an.",
    },
  ]

  const faqs = [
    {
      q: "Was macht Bexolutions genau?",
      a: "Wir bauen das komplette Marketingsystem für Ihr KMU — Website, SEO, Content und KI-Sichtbarkeit aus einer Hand.",
    },
    {
      q: "Was kostet die Zusammenarbeit mit Bexolutions?",
      a: "Fixe Monatspauschalen ohne versteckte Kosten. Bester Einstieg: kostenlose 20-minütige Sichtbarkeitsanalyse.",
    },
    {
      q: "Wie schnell sehe ich erste Resultate?",
      a: "Erste Verbesserungen nach 4–8 Wochen, signifikante Resultate nach 3–6 Monaten.",
    },
    {
      q: "Was ist der Unterschied zu einer klassischen Werbeagentur?",
      a: "Wir bauen ein zusammenhängendes System — ein Ansprechpartner, ein Reporting, kein Koordinationsaufwand.",
    },
    {
      q: "Brauche ich ein Werbebudget für Google Ads?",
      a: "Nein — Schwerpunkt ist organische Sichtbarkeit. Google Ads ist optional.",
    },
    {
      q: "Was bedeutet KI-Sichtbarkeit und warum ist das wichtig?",
      a: "51% der B2B-Käufer starten mit einem KI-Chatbot. GEO Readiness bereitet Sie gezielt vor.",
    },
    {
      q: "Für welche Branchen arbeitet Bexolutions?",
      a: "Schweizer KMU in der Deutschschweiz — Treuhand, Gastronomie, Gesundheit, lokale Dienstleister.",
    },
  ]

  const openFaq = ref<number | null>(null)

  function toggleFaq(i: number) {
    openFaq.value = openFaq.value === i ? null : i
  }
</script>

<template>
  <div>
    <section class="relative mx-4 mt-4 overflow-hidden rounded-[32px]">
      <BackgroundMedia
        :poster="`${IMG}/hero-bg.jpg`"
        :video="BEXO_VIDEOS.homeHero"
        :video-webm="BEXO_VIDEOS.homeHeroWebm"
        poster-alt="Bexolutions Marketing Agentur Hunzenschwil Aargau"
        class="sm:aspect-video aspect-[4/5] w-full"
      />
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="absolute inset-0 flex flex-col justify-end p-6">
        <h1 class="text-3xl font-semibold leading-tight text-white">
          Better Marketing Systems.
          <br />
          Better than yesterday.
        </h1>
        <a
          href="https://calendly.com/bexolutions/discovery-call"
          class="bexo-btn-primary bexo-btn-block mt-6"
        >
          Termin vereinbaren
        </a>
      </div>
    </section>

    <BexoSection>
      <h2 class="text-2xl font-semibold leading-snug text-[#0e2138]">
        Mehr Kunden über Google und KI. Systematisch. Messbar.
        <span class="text-[#a7c8ef]">Ohne Werbebudget.</span>
      </h2>
      <p class="mt-4 text-base leading-relaxed text-black">
        Bexolutions entwickelt das komplette Marketingsystem für Ihr KMU — von
        der Website über Local SEO bis zur KI-Sichtbarkeit. Alles aus einer
        Hand. Eine fixe Monatsrate.
      </p>
      <a
        href="https://calendly.com/bexolutions/discovery-call"
        class="bexo-btn-primary mt-6 inline-grid"
      >
        Termin vereinbaren
      </a>
    </BexoSection>

    <section class="bg-[#0e2138] px-4 py-12">
      <p
        class="max-w-xl mx-auto text-center text-base leading-relaxed text-white"
      >
        Bexolutions ist die Schweizer Marketing-Agentur für KMU, die
        systematisch mehr Kunden über
        <span class="font-bold">Google und KI</span>
        gewinnen wollen — ohne teure Werbebudgets.
      </p>
    </section>

    <section class="box-border w-full max-w-full overflow-x-clip py-8">
      <h3
        class="max-w-xl mx-auto px-4 text-center text-xl font-medium text-[#0e2138]"
      >
        Über 100 KMU in der Deutschschweiz
      </h3>
      <div class="mt-6 space-y-4">
        <div class="marquee">
          <div class="marquee-track marquee-left">
            <NuxtImg
              :src="`${IMG}/logos-row1.png`"
              class="marquee-img"
              alt="Referenzen Bexolutions: Coca-Cola HBC, Thomas Sabo, Biotronik, REMAX, BELL Helmets"
              loading="eager"
            />
            <NuxtImg
              :src="`${IMG}/logos-row1.png`"
              class="marquee-img"
              alt=""
              loading="eager"
            />
          </div>
        </div>
        <div class="marquee">
          <div class="marquee-track marquee-right">
            <NuxtImg
              :src="`${IMG}/logos-row2.png`"
              class="marquee-img"
              alt="Referenzen Bexolutions: weitere Schweizer und internationale Markenkunden"
              loading="eager"
            />
            <NuxtImg
              :src="`${IMG}/logos-row2.png`"
              class="marquee-img"
              alt=""
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="relative mx-4 overflow-hidden rounded-[24px]">
      <BackgroundMedia
        :poster="`${IMG}/office.jpg`"
        :video="BEXO_VIDEOS.homeOffice"
        poster-alt="Bexolutions Agentur Büro Kanton Aargau"
        class="aspect-[4/3] w-full"
      />
      <div class="absolute inset-0 bg-black/45"></div>
      <div class="relative p-6">
        <span
          class="inline-grid h-11 place-items-center rounded-full border border-white/50 bg-white/20 px-4 text-sm font-medium text-white"
        >
          Problem
        </span>
        <h2 class="mt-4 text-2xl font-semibold leading-snug text-white">
          Ihr Unternehmen ist gut. Nur findet es online kaum jemand.
        </h2>
        <p class="mt-4 text-base leading-relaxed text-white">
          Neue Kunden kommen fast ausschliesslich über Empfehlungen. Das ist
          kein Qualitätsproblem — es ist ein Sichtbarkeitsproblem.
        </p>
      </div>
    </section>

    <BexoSection>
      <h2 class="text-2xl font-semibold text-black">
        Wir bauen Ihr
        <span class="text-[#a7c8ef]">Marketingsystem.</span>
      </h2>
      <div class="mt-4 flex flex-col gap-3">
        <article
          v-for="f of features"
          :key="f.title"
          class="w-full rounded-[20px] p-3"
          :style="{ background: f.bg }"
        >
          <NuxtImg
            :src="f.img"
            class="aspect-[2/1] w-full rounded-[12px] object-cover"
            :alt="f.title.replace(/\n/g, ' ')"
          />
          <h4 class="mt-2 text-base font-semibold text-black">{{ f.title }}</h4>
          <p class="mt-1 text-sm leading-snug text-black">{{ f.body }}</p>
        </article>
      </div>
    </BexoSection>

    <BexoSection>
      <h2 class="text-2xl font-semibold text-[#0e2138]">Resultate in Zahlen</h2>
      <div class="mt-6 grid grid-cols-2 gap-4">
        <div
          v-for="s of stats"
          :key="s.label"
          class="rounded-[16px] border border-[#0e2138]/10 p-4"
        >
          <p class="text-2xl font-bold text-[#0e2138]">{{ s.value }}</p>
          <p class="mt-1 text-sm text-black">{{ s.label }}</p>
        </div>
      </div>
    </BexoSection>

    <BexoSection>
      <h2 class="text-2xl font-semibold text-black">So arbeiten wir</h2>
      <ol class="mt-6 space-y-6">
        <li v-for="s of steps" :key="s.n" class="flex gap-4">
          <span
            class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#bde0fe] text-lg font-bold text-[#0e2138]"
          >
            {{ s.n }}
          </span>
          <div>
            <h3 class="text-lg font-semibold text-black">{{ s.title }}</h3>
            <p class="mt-1 text-base leading-relaxed text-black">
              {{ s.body }}
            </p>
          </div>
        </li>
      </ol>
    </BexoSection>

    <BexoSection>
      <h2 class="text-2xl font-semibold text-black">Warum Bexolutions</h2>
      <div class="mt-6 grid grid-cols-1 gap-4">
        <div
          v-for="c of warumCards"
          :key="c.title"
          class="rounded-[16px] border border-[#c4c4c4] p-5"
        >
          <h4 class="text-lg font-semibold text-black">{{ c.title }}</h4>
          <p class="mt-2 text-base leading-snug text-black">{{ c.body }}</p>
        </div>
      </div>
    </BexoSection>

    <section class="relative mx-4 overflow-hidden rounded-[32px]">
      <BackgroundMedia
        :poster="`${IMG}/treuhaender-bg.jpg`"
        :video="BEXO_VIDEOS.homeTreuhaender"
        class="aspect-[4/3] w-full"
      />
      <div class="absolute inset-0 bg-[#0e2138]/70"></div>
      <div class="relative p-6 text-center">
        <h2 class="text-2xl font-semibold text-white">
          Sind Sie Treuhänder oder Steuerberater?
        </h2>
        <p class="mt-4 text-base leading-relaxed text-white">
          Spezialisiert auf digitale Sichtbarkeit von Treuhandbüros — mit
          nachgewiesenen Resultaten.
        </p>
        <a href="/treuhaender" class="bexo-btn-primary bexo-btn-block mt-6">
          Mehr erfahren
        </a>
      </div>
    </section>

    <BexoSection>
      <p class="text-center text-sm text-[#0e2138]">Häufige Fragen</p>
      <h2 class="mt-2 text-center text-2xl font-semibold text-black">
        Was KMU-Inhaber uns am häufigsten fragen.
      </h2>
      <div class="mt-6 space-y-3">
        <div
          v-for="(f, i) of faqs"
          :key="f.q"
          class="rounded-[16px] border border-[#0e2138]/20 bg-white/80"
        >
          <button
            type="button"
            class="flex min-h-11 w-full items-start justify-between gap-4 p-4 text-left"
            :aria-expanded="openFaq === i"
            @click="toggleFaq(i)"
          >
            <span class="text-base font-bold text-black">{{ f.q }}</span>
            <span class="shrink-0 text-xl leading-none text-black">
              {{ openFaq === i ? "−" : "+" }}
            </span>
          </button>
          <p
            v-if="openFaq === i"
            class="border-t border-[#0e2138]/10 px-4 pb-4 pt-3 text-base leading-relaxed text-black"
          >
            {{ f.a }}
          </p>
        </div>
      </div>
    </BexoSection>

    <section class="relative w-full overflow-hidden rounded-t-[48px]">
      <NuxtImg
        :src="`${IMG}/billboard.jpg`"
        class="absolute inset-0 h-full w-full object-cover object-top"
        alt="Digitales Bexolutions-Werbeplakat in einer Bahnhofsumgebung"
      />
      <div class="absolute inset-0 bg-[#0e2138]/50"></div>
      <div class="relative px-6 py-12">
        <h2 class="text-2xl font-semibold leading-snug text-white">
          Bereit zu erfahren, was für Ihr KMU möglich ist?
        </h2>
        <p class="mt-4 text-base leading-relaxed text-white">
          Kostenlose 20-minütige Sichtbarkeitsanalyse — konkret, unverbindlich.
        </p>
        <a href="/kontakt" class="bexo-btn-primary bexo-btn-block mt-8">
          Jetzt Termin buchen
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .marquee {
    position: relative;
    width: 100%;
    height: 56px;
    overflow: hidden;
  }

  .marquee-track {
    display: flex;
    width: max-content;
    height: 56px;
    align-items: center;
    will-change: transform;
  }

  /* Override Tailwind preflight img { max-width:100%; height:auto } */
  .marquee-img {
    display: block;
    height: 56px !important;
    width: auto !important;
    max-width: none !important;
    flex: none;
    margin-right: 24px;
  }

  .marquee-left {
    animation: marquee-left 28s linear infinite;
  }

  .marquee-right {
    animation: marquee-right 28s linear infinite;
  }

  @keyframes marquee-left {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-50%, 0, 0);
    }
  }

  @keyframes marquee-right {
    from {
      transform: translate3d(-50%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .marquee-left,
    .marquee-right {
      animation: none;
      transform: translate3d(0, 0, 0);
    }
  }
</style>
