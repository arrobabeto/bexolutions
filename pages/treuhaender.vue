<script setup lang="ts">
  import { ref } from "vue"
  import { definePageMeta, useHead } from "#imports"
  import BexoFooter from "~/components/bexo/BexoFooter.vue"
  import BexoPageShell from "~/components/bexo/BexoPageShell.vue"
  import TreuhaenderMobile from "~/components/bexo/mobile/TreuhaenderMobile.vue"
  import { useCanvasScale } from "~/composables/useCanvasScale"

  definePageMeta({ layout: false })

  const canvasRef = ref<HTMLElement | null>(null)
  useCanvasScale(canvasRef)

  const IMG = "/images/treuhaender"
  const HOME = "/images/startseite"
  const REF = "/images/referenz-zofingen"

  useHead({
    title: "Mehr Mandanten für Ihr Treuhandbüro — Bexolutions",
    htmlAttrs: { lang: "de" },
    link: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Jost:wght@400;500&family=Inter:wght@400;500;700&display=swap",
      },
    ],
  })

  const navLinks = [
    { l: "Über uns", to: "/ueber-uns" },
    { l: "Leistungen", to: "/leistungen" },
    { l: "Wissen", to: "/wissen" },
    { l: "Treuhänder", to: "#" },
  ]

  const problems = [
    {
      top: 1439,
      title: "Empfehlungen als einziger Akquisitionskanal",
      body: "Ihr Telefon klingelt dank langjähriger Kontakte — aber gezieltes, planbares Wachstum bleibt aus.",
      img: true,
    },
    {
      top: 1744,
      title: "Website ohne Wirkung",
      body: "Ihre Website ist vorhanden, bringt aber 0 qualifizierte Anfragen. Eine Visitenkarte, keine Akquisitionsmaschine.",
    },
    {
      top: 1907,
      title: "Keine Zeit für Marketing",
      body: "Sie sind beschäftigt mit Mandaten, Fristen und Klientenanliegen. Marketing bleibt liegen. Das kostet täglich neue Mandate.",
    },
    {
      top: 2070,
      title: "Unsichtbar bei Google",
      body: "Potenzielle Mandanten suchen nach „Steuerberatung Aargau“ oder „Grundstückgewinnsteuer Zürich“ — und finden Ihre Mitbewerber.",
    },
    {
      top: 2233,
      title: "Mitbewerber ranken höher",
      body: "Büros mit objektiv schlechterem Service erscheinen weiter oben — weil sie früher investiert haben.",
    },
    {
      top: 2396,
      title: "Unsichtbar in KI-Antworten",
      body: "Immer mehr Mandanten fragen ChatGPT oder Google AI: „Welches Treuhandbüro ist gut in Zug?“ Erscheinen Sie dort nicht, existieren Sie für diese Suchenden nicht.",
    },
  ]

  const cells = [
    { left: 0, top: 3568, label: "mehr Klicks pro Monat", value: "+200%" },
    { left: 504, top: 3568, label: "mehr Google-Impressionen", value: "+302%" },
    { left: 1008, top: 3568, label: "organische Besucher", value: "1'704" },
    { left: 0, top: 3911, label: "Engagement-Rate", value: "60%" },
    {
      left: 504,
      top: 3911,
      label: "Google-Rankings (Kernbegriffe)",
      value: "Top 3",
    },
    {
      left: 1008,
      top: 3911,
      label: "bis zur Teamvergrösserung",
      value: "16 Mt.",
    },
  ]

  const methodRows = [
    {
      top: 5025,
      h: 400,
      bg: "#ffffff",
      title: "SEO-Content-Strategie für Treuhand-Themen",
      body: "Wir identifizieren die Suchanfragen Ihrer Zielkunden — „Grundstückgewinnsteuer Aargau“, „Steuerberatung für Selbstständige Zürich“, „Immobilien GmbH Schweiz“ — und bauen dafür gezielte Fachbeiträge auf. Inhalte, die ranken und Vertrauen aufbauen.",
      bodyW: 624,
    },
    {
      top: 5354,
      h: 400,
      bg: "#f8f8f8",
      title: "15+ optimierte Fachbeiträge",
      body: "Branchenspezifische, tiefgründige Artikel zu Steuer- und Treuhandthemen — recherchiert, getextet und SEO-optimiert von unserem Team. Sie prüfen, wir publizieren.",
      bodyW: 624,
    },
    {
      top: 5651,
      h: 360,
      bg: "#ffffff",
      title: "Lokale & nationale Sichtbarkeit",
      body: "Aufbau auf 30+ Schweizer Plattformen (local.ch, search.ch, Yelp, Bing, Apple Maps) für konsistente Präsenz und starke lokale Signale für Google.",
      bodyW: 768,
    },
    {
      top: 5908,
      h: 360,
      bg: "#f8f8f8",
      title: "KI-Sichtbarkeit & GEO Readiness",
      body: "Mandantensuchende fragen ChatGPT oder Google AI: „Welches Treuhandbüro empfiehlt sich in Schaffhausen?“ Wir strukturieren Ihre Inhalte so, dass Sie in diesen Antworten erscheinen — mit FAQPage-Schema, strukturierten Daten und KI-optimierter Content-Architektur.",
      bodyW: 913,
    },
    {
      top: 6203,
      h: 400,
      bg: "#ffffff",
      title: "Monatliches Reporting",
      body: "Jeden Monat klare Zahlen: Klicks, Impressionen, Rankings, neue Anfragen — und ab sofort KI-Visibility-Tracking. Kein Bauchgefühl, nur Daten.",
      bodyW: 714,
    },
  ]

  const steps = [
    {
      left: 444,
      img: "proc1.jpg",
      n: "1",
      label: "Analyse",
      extra: " (kostenlos)",
    },
    { left: 768, img: "proc2.jpg", n: "2", label: "Strategie", extra: "" },
    { left: 1093, img: "proc3.jpg", n: "3", label: "Umsetzung", extra: "" },
    { left: 1415, img: "proc4.jpg", n: "4", label: "Auswertung", extra: "" },
  ]

  const whyCards = [
    {
      left: 59,
      dark: false,
      title: "Wir verstehen Treuhand-Themen",
      body: "„Grundstückgewinnsteuer“, „Säule 3a“, „Erbteilung“, „Handänderungssteuer“ — wir kennen die Begriffe, die Ihre Mandanten suchen, und wissen, wie man dafür rankt. Keine Einarbeitungszeit.",
      bodyTop: 162,
    },
    {
      left: 419,
      dark: true,
      title: "Keine abstrakten Kampagnen — nur organische Sichtbarkeit",
      body: "Wir verzichten auf teure Google Ads, die sofort aufhören zu wirken, wenn das Budget endet. Unser System baut nachhaltige, organische Sichtbarkeit auf — die bleibt.",
      bodyTop: 187,
    },
    {
      left: 778,
      dark: false,
      title: "SEMrush-zertifiziert",
      body: "Unsere Local-SEO-Methodik ist offiziell von SEMrush zertifiziert — dem weltweit führenden SEO-Tool. Anerkannte Expertise, keine leeren Versprechen.",
      bodyTop: 162,
    },
    {
      left: 1141,
      dark: false,
      title: "Bewiesene Resultate im Treuhandbereich",
      body: "Nicht Theorie. Zofingen Treuhand AG ist der Beweis: +200% Klicks, Top-3-Rankings für Kernbegriffe, Teamvergrösserung notwendig nach 16 Monaten.",
      bodyTop: 162,
    },
  ]

  const faqs = [
    {
      q: "Wie lange dauert es, bis ich neue Mandanten über Google bekomme?",
      a: "Erste Verbesserungen in der lokalen Sichtbarkeit nach 4–8 Wochen, erste qualifizierte Anfragen in der Regel nach 3–4 Monaten. Zofingen Treuhand AG hatte nach 16 Monaten so viele neue Mandate, dass das Team personell verstärkt werden musste.",
    },
    {
      q: "Muss ich ein Werbebudget für Google Ads einplanen?",
      cap: true,
      a: "Nein. Unsere Methode basiert vollständig auf organischer Sichtbarkeit — SEO-Fachbeiträge, Google Business Profile, lokale Plattformen und KI-Sichtbarkeit. Kein Werbebudget nötig. Die Resultate sind nachhaltiger als bezahlte Anzeigen und hören nicht auf, wenn das Budget endet.",
    },
    {
      q: "Was ist der Unterschied zu einer normalen Webdesign-Agentur?",
      cap: true,
      a: "Eine Webdesign-Agentur erstellt eine Website — und ist danach weg. Wir bauen das System dahinter: laufende SEO-Fachbeiträge, GBP-Pflege, lokale Sichtbarkeit, KI-Readiness und monatliches Reporting. Das ist kein Projekt, sondern eine Partnerschaft.",
    },
    {
      q: "Funktioniert das auch für kleinere Treuhandbüros mit 1–3 Personen?",
      cap: true,
      a: "Ja — gerade für inhabergeführte Büros ist der Effekt am stärksten. Wenig Marketing-Ressourcen, aber ein klar definiertes regionales Einzugsgebiet — genau das begünstigt lokale SEO. Zofingen Treuhand AG ist ein inhabergeführtes Büro.",
    },
    {
      q: "Müssen wir die Fachbeiträge selbst schreiben?",
      cap: true,
      a: "Nein. Unser Team recherchiert, textet und optimiert alle Fachbeiträge. Sie erhalten den Entwurf zur fachlichen Prüfung — in der Regel 15–30 Minuten pro Artikel. Den Rest übernehmen wir.",
    },
    {
      q: "Wie unterscheidet sich Bexolutions von anderen SEO-Agenturen?",
      cap: true,
      a: "Wir haben uns auf Treuhandbüros in der Deutschschweiz spezialisiert — nicht als Nischen-Slogan, sondern mit nachgewiesenen Resultaten. Wir kennen die Fachbegriffe, Suchanfragen und Entscheidungslogik Ihrer Zielkunden. Eine Generalagentur muss sich das erst erarbeiten. Wir fangen sofort an.",
    },
    {
      q: "Was kostet die Zusammenarbeit?",
      cap: true,
      a: "Eine fixe Monatspauschale — transparent, ohne versteckte Kosten. Die konkrete Rate hängt vom Leistungsumfang und Ihrer Region ab. Den besten Einstieg bietet die kostenlose 20-minütige Sichtbarkeitsanalyse.",
    },
  ]

  function faqTop(i: number) {
    // section starts at canvas y=8872; these are section-relative
    return 221 + i * 206
  }
</script>

<template>
  <BexoPageShell>
    <template #mobile>
      <TreuhaenderMobile />
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

        <!-- radial glow -->
        <div
          class="absolute"
          style="
            left: 739px;
            top: 6px;
            width: 773px;
            height: 773px;
            background: radial-gradient(
              closest-side,
              rgba(189, 224, 254, 0.5) 0%,
              rgba(189, 224, 254, 0) 100%
            );
          "
        ></div>

        <!-- ============================= HERO ============================= -->
        <h1
          class="absolute text-[40px] font-semibold leading-[48px] text-[#0e2138]"
          style="left: 120px; top: 277px; width: 640px"
        >
          Mehr Mandanten für Ihr
          <br />
          Treuhandbüro.Systematisch.
          <br />
          Messbar. Ohne Werbebudget.
        </h1>
        <p
          class="absolute text-[18px] font-normal leading-[25px] text-[#13315c]"
          style="left: 770px; top: 299px; width: 630px"
        >
          Wir machen Ihr Büro bei Google sichtbar — genau dann, wenn potenzielle
          Mandanten aktiv nach Steuerberatung, Treuhand oder
          Grundstückgewinnsteuer in Ihrer Region suchen. Kein Zufall, kein
          Glück. Nur System.
        </p>
        <div
          class="absolute flex items-center"
          style="left: 763px; top: 449px; gap: 16px"
        >
          <a href="/kontakt" class="btn-navy" style="width: 420px">
            Kostenlose Sichtbarkeitsanalyse anfordern
          </a>
          <a href="/referenz-zofingen" class="btn-outline" style="width: 193px">
            Zur Fallstudie
          </a>
        </div>

        <!-- ============================= NAVY BAND ============================= -->
        <div
          class="absolute grid place-items-center rounded-[60px] bg-[#0e2138]"
          style="left: 120px; top: 589px; width: 1272px; height: 232px"
        >
          <p
            class="text-center text-[20px] font-normal leading-[24px] text-white"
            style="width: 592px"
          >
            Treuhand-Kunden haben ein konkretes Problem und suchen aktiv nach
            einer Lösung — sie müssen nicht überzeugt werden. Die Frage ist
            einzig: Finden sie Sie bei Google?
            <br />
            Wir sorgen dafür, dass die Antwort Ja ist.
          </p>
        </div>

        <!-- ============================= LOGOS ============================= -->
        <h2
          class="absolute text-center text-[30px] font-semibold leading-[44px] text-[#0e2138]"
          style="left: 120px; top: 938px; width: 1272px"
        >
          Unternehmen, die uns vertrauen.
        </h2>
        <p
          class="absolute text-center text-[18px] font-normal leading-[31px] text-[#0e2138]"
          style="left: 428px; top: 994px; width: 656px"
        >
          Langjährige Kunden aus der Deutschschweiz und dem DACH-Raum — von der
          inhabergeführten Treuhandkanzlei bis zum Gastronomiebetrieb.
        </p>
        <NuxtImg
          :src="`${IMG}/logos.jpg`"
          class="absolute"
          style="left: 360px; top: 1088px; width: 792px"
          alt="Zofingen Treuhand AG · Von Bergen Solution · Rothstein AG"
        />

        <!-- ============================= PROBLEM TIMELINE ============================= -->
        <h2
          class="absolute text-[30px] font-semibold leading-[36px] text-[#0e2138]"
          style="left: 123px; top: 1444px; width: 408px"
        >
          Kommt Ihnen das
          <br />
          bekannt vor?
        </h2>
        <!-- vertical line + dots -->
        <div
          class="absolute bg-[#0e2138]/40"
          style="left: 552px; top: 1432px; width: 1px; height: 1098px"
        ></div>
        <div
          class="absolute h-[10px] w-[10px] rounded-full bg-[#0e2138]"
          style="left: 548px; top: 1428px"
        ></div>
        <div
          class="absolute h-[10px] w-[10px] rounded-full bg-[#0e2138]"
          style="left: 548px; top: 2521px"
        ></div>

        <div
          v-for="p of problems"
          :key="p.title"
          class="absolute"
          :style="{ left: '655px', top: p.top + 'px', width: '725px' }"
        >
          <span
            class="absolute grid h-[33px] w-[33px] place-items-center rounded-[8px] border border-[#0e2138]"
            style="left: 0; top: 25px"
          >
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              stroke="#0e2138"
              stroke-width="2"
            >
              <path d="M2 7l4 4 8-9" />
            </svg>
          </span>
          <h3
            class="absolute text-[24px] font-semibold leading-[29px] text-black"
            style="left: 53px; top: 0; width: 672px"
          >
            {{ p.title }}
          </h3>
          <p
            class="absolute text-[18px] font-normal leading-[22px] text-black"
            style="left: 53px; top: 39px; width: 640px"
          >
            {{ p.body }}
          </p>
          <div
            v-if="p.img"
            class="absolute overflow-hidden rounded-[20px]"
            style="left: 17px; top: 114px; width: 653px; height: 157px"
          >
            <NuxtImg
              :src="`${IMG}/problem.jpg`"
              class="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>

        <!-- ============================= QUOTE BAND ============================= -->
        <section
          class="absolute overflow-hidden"
          style="left: 0; top: 2670px; width: 1512px; height: 414px"
        >
          <NuxtImg
            :src="`${REF}/dark-bg.jpg`"
            class="absolute inset-0 h-full w-full object-cover"
            alt=""
          />
          <div
            class="absolute inset-0"
            style="background: rgba(14, 33, 56, 0.78)"
          ></div>
          <p
            class="absolute text-center text-[24px] font-semibold italic leading-[29px] text-white"
            style="left: 302px; top: 145px; width: 909px"
          >
            «Treuhand-Kunden brauchen keine Überzeugung. Sie haben ein Problem —
            und suchen aktiv nach einer Lösung. Die Frage ist nur: Finden sie
            Sie?»
          </p>
          <p
            class="absolute text-center text-[18px] font-medium leading-[22px] text-white"
            style="left: 245px; top: 224px; width: 1022px"
          >
            — Balaram Furrer, Geschäftsführer Bexolutions
          </p>
        </section>

        <!-- ============================= CASE STUDY ============================= -->
        <h2
          class="absolute text-[30px] font-semibold leading-[42px] text-black"
          style="left: 766px; top: 3208px; width: 621px"
        >
          Ein Treuhandbüro. 16 Monate. Teamvergrösserung wegen Mehranfragen.
        </h2>
        <p
          class="absolute text-[18px] font-normal leading-[25px] text-[#0e2138]"
          style="left: 766px; top: 3351px; width: 550px"
        >
          Inhabergeführtes Büro für Privatkunden und KMU im Kanton Aargau.
          Ausgangslage: Website vorhanden, keine Rankings, keine
          Content-Strategie, 0 qualifizierte Anfragen über Google.
        </p>
        <!-- stats grid -->
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
            class="absolute text-right text-[18px] font-semibold leading-[24px] text-black"
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
        <!-- testimonial -->
        <p
          class="absolute text-center text-[18px] font-normal leading-[25px] text-black"
          style="left: 329px; top: 4378px; width: 854px"
        >
          «Wir haben Bexolutions mit der Optimierung unserer digitalen
          Sichtbarkeit beauftragt. Die Anzahl der Anfragen über unsere Website
          und unser Google-Unternehmensprofil hat sich in den vergangenen 16
          Monaten substanziell erhöht. Wir mussten infolgedessen unser Team
          personell verstärken, um die zusätzlichen Mandate ordnungsgemäss
          bearbeiten zu können. Die Zusammenarbeit verläuft strukturiert und die
          Ergebnisse sind äusserst zufriedenstellend. Bexolutions versteht die
          Anforderungen eines Treuhandbüros und setzt die vereinbarten
          Massnahmen zuverlässig um. Wir können die Zusammenarbeit
          uneingeschränkt empfehlen.»
        </p>
        <p
          class="absolute text-center text-[16px] font-medium leading-[22px] text-black"
          style="left: 270px; top: 4580px; width: 972px"
        >
          — Philippe Bally, Zofingen Treuhand AG
        </p>
        <a
          href="/referenz-zofingen"
          class="btn-outline absolute"
          style="left: 607px; top: 4629px; width: 299px"
        >
          Zur vollständigen Fallstudie
        </a>

        <!-- ============================= METHOD ============================= -->
        <div
          class="absolute rounded-t-[60px]"
          style="
            left: 0;
            top: 4751px;
            width: 1512px;
            height: 700px;
            background: linear-gradient(180deg, #ecf6ff 0%, #ffffff 70%);
          "
        ></div>
        <span
          class="absolute grid place-items-center rounded-[20px] bg-[#ffeef4] text-[18px] font-normal leading-[25px] text-[#0e2138]"
          style="left: 120px; top: 4846px; width: 343px; height: 48px"
        >
          Unsere Methode für Treuhandbüros
        </span>
        <h2
          class="absolute text-[32px] font-semibold leading-[40px] text-[#0e2138]"
          style="left: 120px; top: 4909px; width: 1221px"
        >
          Was Bexolutions für Ihr Treuhandbüro konkret umsetzt.
        </h2>
        <section
          v-for="r of methodRows"
          :key="r.title"
          class="absolute rounded-t-[60px]"
          :style="{
            left: 0,
            top: r.top + 'px',
            width: '1512px',
            height: r.h + 'px',
            background: r.bg,
          }"
        >
          <h3
            class="absolute text-[30px] font-semibold leading-[38px] text-[#0e2138]"
            style="left: 115px; top: 77px; width: 1200px"
          >
            {{ r.title }}
          </h3>
          <p
            class="absolute text-[20px] font-normal leading-[28px] text-black"
            :style="{ left: '115px', top: '147px', width: r.bodyW + 'px' }"
          >
            {{ r.body }}
          </p>
        </section>

        <!-- ============================= PROCESS ============================= -->
        <section
          class="absolute overflow-hidden bg-[#f8f8f8]"
          style="left: 0; top: 6535px; width: 1512px; height: 892px"
        >
          <p
            class="absolute text-[18px] font-normal leading-[28px] text-black"
            style="left: 120px; top: 348px"
          >
            Ihr Weg zu mehr Mandanten
          </p>
          <h2
            class="absolute text-[30px] font-semibold leading-[38px] text-[#0e2138]"
            style="left: 120px; top: 394px; width: 300px"
          >
            Von der Analyse bis zu neuen Mandanten — in vier Schritten.
          </h2>
          <div
            v-for="s of steps"
            :key="s.n"
            class="absolute overflow-hidden rounded-[30px]"
            :style="{
              left: s.left + 'px',
              top: '97px',
              width: '302px',
              height: '699px',
            }"
          >
            <NuxtImg
              :src="`${IMG}/${s.img}`"
              class="h-full w-full object-cover"
              alt=""
            />
            <div
              class="absolute inset-x-0 bottom-0 h-[300px]"
              style="
                background: linear-gradient(
                  180deg,
                  rgba(0, 0, 0, 0) 0%,
                  rgba(0, 0, 0, 0.65) 100%
                );
              "
            ></div>
            <span
              class="absolute text-[52px] font-bold leading-[73px] text-white"
              style="left: 32px; bottom: 108px"
            >
              {{ s.n }}
            </span>
            <span class="absolute bottom-[52px] left-[32px] text-white">
              <span class="text-[28px] font-semibold leading-[35px]">
                {{ s.label }}
              </span>
              <span class="text-[18px] font-normal">{{ s.extra }}</span>
            </span>
          </div>
        </section>

        <!-- ============================= WARUM ============================= -->
        <p
          class="absolute text-center text-[18px] font-normal leading-[25px] text-[#0e2138]"
          style="left: 671px; top: 7597px; width: 170px"
        >
          Warum Bexolutions
        </p>
        <h2
          class="absolute text-center text-[32px] font-semibold leading-[45px] text-black"
          style="left: 369px; top: 7639px; width: 775px"
        >
          Warum Treuhandbüros Bexolutions wählen
          <br />
          und
          <span class="text-[#bde0fe]">nicht eine andere Agentur.</span>
        </h2>
        <div
          class="absolute bg-black/10"
          style="left: 59px; top: 7777px; width: 1405px; height: 1px"
        ></div>
        <div
          class="absolute bg-black/10"
          style="left: 59px; top: 8226px; width: 1405px; height: 1px"
        ></div>
        <div
          v-for="w of whyCards"
          :key="w.title"
          class="absolute overflow-hidden rounded-[24px]"
          :style="{
            left: w.left + 'px',
            top: '7796px',
            width: '323px',
            height: '392px',
            background: w.dark
              ? 'linear-gradient(150deg, #7d93ac 0%, #2b3a4d 55%, #0e2138 100%)'
              : '#e6ebed',
          }"
        >
          <h3
            class="absolute text-[20px] font-semibold leading-[25px]"
            :class="w.dark ? 'text-white' : 'text-[#0e2138]'"
            style="left: 36px; top: 94px; width: 254px"
          >
            {{ w.title }}
          </h3>
          <p
            class="absolute text-[16px] font-normal leading-[22px]"
            :class="w.dark ? 'text-white' : 'text-black'"
            :style="{ left: '36px', top: w.bodyTop + 'px', width: '254px' }"
          >
            {{ w.body }}
          </p>
        </div>

        <!-- ============================= KI BAND ============================= -->
        <section
          class="absolute overflow-hidden rounded-[109px]"
          style="left: 68px; top: 8322px; width: 1381px; height: 454px"
        >
          <NuxtImg
            :src="`${IMG}/ki-bg.jpg`"
            class="absolute inset-0 h-full w-full object-cover"
            alt=""
          />
          <div
            class="absolute inset-0"
            style="background: rgba(14, 33, 56, 0.72)"
          ></div>
          <h2
            class="absolute left-0 w-full text-center text-[30px] font-semibold leading-[36px] text-white"
            style="top: 90px"
          >
            KI-Sichtbarkeit für Treuhandbüros
          </h2>
          <p
            class="absolute left-1/2 -translate-x-1/2 text-center text-[18px] font-normal leading-[25px] text-white"
            style="top: 148px; width: 941px"
          >
            Potenzielle Mandanten fragen heute nicht nur Google — sie fragen
            ChatGPT, Google AI Mode und Perplexity direkt: „Welches Treuhandbüro
            ist empfehlenswert in Bern?“ oder „Wer hilft mir mit der
            Grundstückgewinnsteuer in Aargau?“ 93% dieser KI-Suchen enden ohne
            einen einzigen Klick auf eine Website. Wer in der Antwort nicht
            erwähnt wird, existiert für diese Suchenden nicht. Wir integrieren
            GEO Readiness — Generative Engine Optimization — als festen
            Bestandteil unserer Treuhand-Mandate. Ihr Büro erscheint nicht nur
            bei Google, sondern auch in den KI-Antworten von morgen.
          </p>
          <a
            href="/wissen"
            class="btn-primary absolute left-1/2 -translate-x-1/2"
            style="top: 320px; width: 358px"
          >
            Mehr über GEO Readiness erfahren
          </a>
        </section>

        <!-- ============================= FAQ ============================= -->
        <section
          class="absolute overflow-hidden"
          style="left: 0; top: 8872px; width: 1512px; height: 1700px"
        >
          <div
            class="absolute"
            style="
              left: 0;
              top: 31px;
              width: 1512px;
              height: 577px;
              background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(195, 218, 248, 0.4) 100%
              );
            "
          ></div>
          <div
            class="absolute"
            style="
              left: 0;
              top: 608px;
              width: 1512px;
              height: 577px;
              background: linear-gradient(
                180deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(195, 218, 248, 0.4) 100%
              );
            "
          ></div>
          <p
            class="absolute text-center text-[20px] font-normal leading-[28px] text-[#0e2138]"
            style="left: 439px; top: 0; width: 633px"
          >
            Häufige Fragen
          </p>
          <h2
            class="absolute text-center text-[40px] font-semibold leading-[56px] text-black"
            style="left: 439px; top: 45px; width: 633px"
          >
            Was Treuhänder uns am häufigsten fragen.
          </h2>
          <details
            v-for="(f, i) of faqs"
            :key="f.q"
            open
            class="faq-item absolute rounded-[20px] border border-[#0e2138]/20 bg-white/50 px-[40px] py-[28px]"
            :style="{ left: '222px', top: faqTop(i) + 'px', width: '1082px' }"
          >
            <summary
              class="flex cursor-pointer list-none items-start justify-between gap-6"
            >
              <h3
                class="text-[20px] font-bold leading-[25px] text-black"
                :class="{ capitalize: f.cap }"
              >
                {{ f.q }}
              </h3>
              <span class="relative mt-1 block h-5 w-5 shrink-0">
                <span
                  class="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 rounded bg-black"
                ></span>
                <span
                  class="faq-vbar absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded bg-black"
                ></span>
              </span>
            </summary>
            <p
              class="mt-[24px] text-[18px] font-normal leading-[23px] text-black"
            >
              {{ f.a }}
            </p>
          </details>
        </section>

        <!-- ============================= BILLBOARD ============================= -->
        <section
          class="absolute overflow-hidden rounded-t-[200px]"
          style="left: 0; top: 10630px; width: 1512px; height: 679px"
        >
          <NuxtImg
            :src="`${HOME}/billboard.jpg`"
            class="absolute inset-0 h-full w-full object-cover object-top"
            alt=""
          />
          <div
            class="absolute inset-0"
            style="background: rgba(14, 33, 56, 0.5)"
          ></div>
          <h2
            class="absolute text-[40px] font-semibold leading-[56px] text-white"
            style="left: 127px; top: 257px; width: 498px"
          >
            Bereit für mehr Mandanten über Google?
          </h2>
          <p
            class="absolute text-[20px] font-normal leading-[28px] text-white"
            style="left: 127px; top: 393px; width: 639px"
          >
            Buchen Sie Ihre kostenlose 20-minütige Sichtbarkeitsanalyse. Wir
            analysieren Ihre aktuelle Google-Präsenz, zeigen Ihnen die
            Suchanfragen Ihrer Zielkunden — und empfehlen konkret, was als
            Nächstes zu tun ist. Keine Verpflichtung. Kein Werbebudget. Nur
            klare Erkenntnisse.
          </p>
          <a
            href="https://calendly.com/bexolutions/discovery-call"
            class="btn-primary absolute"
            style="left: 127px; top: 553px; width: 370px"
          >
            Jetzt Termin vereinbaren
          </a>
        </section>

        <BexoFooter :top="11309" />
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
    height: 11964px;
    flex: none;
    background: #ffffff;
  }
  .nav-logo {
    background-color: #0e2138;
    -webkit-mask: url("/images/startseite/logo-mark.png") center / contain
      no-repeat;
    mask: url("/images/startseite/logo-mark.png") center / contain no-repeat;
  }

  .btn-primary,
  .btn-navy,
  .btn-outline {
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
  .btn-outline {
    background: transparent;
    color: #0e2138;
    border: 1px solid rgba(19, 49, 92, 0.5);
  }
  .btn-outline:hover {
    background: rgba(19, 49, 92, 0.05);
  }

  .faq-item summary {
    list-style: none;
  }
  .faq-item summary::-webkit-details-marker {
    display: none;
  }
  .faq-item[open] .faq-vbar {
    display: none;
  }
</style>
