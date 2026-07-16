<script setup lang="ts">
  import { ref } from "vue"
  import { definePageMeta, useHead } from "#imports"
  import BexoFooter from "~/components/bexo/BexoFooter.vue"
  import BackgroundMedia from "~/components/media/BackgroundMedia.vue"
  import { useCanvasScale } from "~/composables/useCanvasScale"
  import { BEXO_VIDEOS } from "~/constants/bexoVideos"

  definePageMeta({ layout: false })

  const canvasRef = ref<HTMLElement | null>(null)
  useCanvasScale(canvasRef)

  const IMG = "/images/leistungen"
  const UB = "/images/ueber-uns"
  const HOME = "/images/startseite"

  useHead({
    title: "Leistungen — Bexolutions",
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

  const saeulen = [
    {
      top: 1386,
      h: 586,
      bg: "#ffffff",
      title: "Säule 1 · Digitale Präsenz & Website",
      sub: "Ihre Website als stärkste Verkaufsmaschine.",
      body: "Eine veraltete, unklare Website kostet täglich potenzielle Kunden. Wir bauen Websites, die nicht nur gut aussehen — sondern verkaufen. Basis ist das StoryBrand-Framework von Donald Miller, kombiniert mit KI-gestützter Technologie auf Orbitype-Basis.",
      forWho:
        "Für wen: KMU mit veralteter oder nicht-konvertierender Website, die eine professionelle digitale Basis aufbauen wollen.",
      cardH: 357,
      bullets: [
        "Professionelles Webdesign nach StoryBrand-Methodik",
        "Mobiloptimierte, schnell ladende Umsetzung",
        "KI-generierte Verkaufstexte, auf Ihre Zielgruppe angepasst",
        "SEO-technische Grundoptimierung (Meta, Schema, Struktur)",
        "Kontaktformular und Conversion-Optimierung",
        "Orbitype-basierte Content-Infrastruktur für laufende Aktualisierungen",
      ],
    },
    {
      top: 1957,
      h: 692,
      bg: "#f8f8f8",
      title: "Säule 2 · Local SEO & Google Sichtbarkeit",
      sub: "Gefunden werden, wenn \nKunden suchen.",
      body: "76% der Nutzer suchen lokale Anbieter direkt auf dem Smartphone. Wenn Ihr Unternehmen bei Google nicht in den Top 3 erscheint, landet der Auftrag beim Mitbewerber. Unser Local-SEO-System — SEMrush-zertifiziert — sorgt dafür, dass Sie dann sichtbar sind, wenn es zählt.",
      forWho:
        "Für wen: KMU mit lokalem Kundenfokus, die mehr qualifizierte Anfragen, Anrufe und Laufkundschaft über Google gewinnen wollen.",
      cardH: 382,
      bullets: [
        "Google Business Profile Optimierung und laufende Pflege",
        "Listing-Management auf 30+ Schweizer Plattformen (local.ch, search.ch, Yelp, Bing, Apple Maps)",
        "Bewertungsmanagement — Monitoring, Reaktion, Aufbau positiver Reviews",
        "Rank-Tracking und Heatmap-Analyse bis auf Quartier-Ebene",
        "Wettbewerbs- und Keyword-Analyse",
        "Monatliche Reports mit klaren Erfolgskennzahlen",
      ],
    },
    {
      top: 2603,
      h: 586,
      bg: "#ffffff",
      title: "Säule 3 · Content & SEO-Fachbeiträge",
      sub: "Inhalte, die Vertrauen aufbauen\nund bei Google ranken.",
      body: "83% kommerziell relevanter Suchanfragen lösen heute KI-Antworten aus. Wer in diesen Antworten zitiert wird, gewinnt Sichtbarkeit ohne Klick-Kosten. Wir produzieren SEO-Fachbeiträge, die sowohl bei Google ranken als auch in ChatGPT, Google AI Mode und Perplexity erscheinen.",
      forWho:
        "Für wen: KMU, die als Experten ihrer Branche wahrgenommen werden wollen und nachhaltig qualifizierte Anfragen über organische Suche und KI-Kanäle generieren möchten.",
      cardH: 382,
      bullets: [
        "Keyword-Recherche und Content-Strategie (Semrush-basiert)",
        "Monatliche SEO-Fachbeiträge (branchenspezifisch, GEO-optimiert)",
        "FAQPage- und HowTo-Schema für maximale KI-Zitierbarkeit",
        "LinkedIn-Content für persönliches Thought Leadership",
        "Newsletter-Konzept und -Produktion",
        "Google Business Profile Beiträge (wöchentlich)",
        "Foto- und Videoproduktion als optionales Add-on",
      ],
    },
    {
      top: 3201,
      h: 692,
      bg: "#f8f8f8",
      title: "Säule 4 · KI-Sichtbarkeit & GEO Readiness",
      sub: "Sichtbar nicht nur bei Google \nsondern in KI-Antworten.",
      body: "51% der B2B-Käufer starten ihre Recherche heute mit einem KI-Chatbot. 93% der KI-Suchen enden ohne einen Klick auf eine Website. Wer in KI-Antworten nicht vorkommt, existiert für einen wachsenden Teil seiner Zielgruppe nicht. GEO Readiness ist die Antwort — heute noch ein Wettbewerbsvorteil, bald eine Voraussetzung.",
      forWho:
        "Für wen: KMU, die zukunftssicher positioniert sein wollen und verstehen, dass Google in 2–3 Jahren nicht mehr die einzige relevante Suchoberfläche ist.",
      cardH: 407,
      bullets: [
        "GEO Readiness Audit: Wo erscheint Ihr Unternehmen heute in KI-Antworten?",
        "Strukturierung aller Inhalte für KI-Zitierbarkeit (TL;DR-Struktur, Listen, Schema)",
        "FAQPage, Organization und LocalBusiness JSON-LD Schema-Implementierung",
        "Aufbau von Third-Party-Signalen (Bewertungsplattformen, Branchenverzeichnisse)",
        "Monatliches KI-Visibility-Tracking: Share-of-Voice in ChatGPT, Google AI Mode, Perplexity",
        "Orbitype-basierte Content-Automation für kontinuierliche KI-Präsenz",
      ],
    },
    {
      top: 3832,
      h: 586,
      bg: "#ffffff",
      title: "Säule 5 · Performance & Skalierung",
      sub: "Wenn das Fundament steht: Reichweite multiplizieren.",
      body: "Sobald Website, SEO und Content als System funktionieren, skalieren wir die Nachfrage gezielt — mit bezahlten Kanälen, LinkedIn-Outreach und Podcast. Kein Budget wird investiert, bevor das organische Fundament trägt.",
      forWho:
        "Für wen: Etablierte Klienten, die bereits mit Bexolutions arbeiten und ihre Reichweite systematisch ausbauen wollen.",
      cardH: 382,
      bullets: [
        "Google Ads (Search & Performance Max) — datengetrieben, ROI-fokussiert",
        "LinkedIn-Outreach für B2B-Leadgenerierung",
        "Podcast-Produktion und -Distribution",
        "Social-Media-Advertising (Meta, LinkedIn)",
        "Conversion-Rate-Optimierung über den gesamten Funnel",
        "Monatliches Performance-Reporting mit klarer ROI-Zuordnung",
      ],
    },
  ]

  const flow = [
    { label: "Website", w: 715, top: 329 },
    { label: "Local SEO + Content", w: 726, top: 491 },
    { label: "GEO Readiness", w: 654, top: 653 },
    { label: "Performance & Skalierung", w: 680, top: 815 },
  ]

  const darkCards = [
    {
      title: "Fixe \nMonatsrate",
      body: "Sie wissen von Anfang an, was Sie investieren. Alle vereinbarten Leistungen sind in der Pauschale enthalten — Strategie, Umsetzung und Reporting.",
      left: 131,
    },
    {
      title: "Ein \nAnsprechpartner",
      body: "Balaram Furrer und sein Team begleiten Sie von der ersten Analyse bis zu den monatlichen Resultaten. Sie erklären einmal — wir setzen dauerhaft um.",
      left: 565,
    },
    {
      title: "Monatliches Reporting — klassisch & KI",
      body: "Zwei Blickwinkel pro Monat: klassische SEO-Metriken (Rankings, Klicks, Anfragen) und KI-Visibility-Tracking (wo und wie oft Ihr Unternehmen in KI-Antworten erscheint).",
      left: 999,
    },
  ]

  const caseStats = [
    {
      value: "+200%",
      label: "mehr Klicks pro Monat",
      left: -3,
      w: 400,
      align: "left",
      labelW: 130,
    },
    {
      value: "+302%",
      label: "mehr Google-Impressionen",
      left: 381,
      w: 378,
      align: "left",
      labelW: 226,
    },
    {
      value: "1'704",
      label: "organische Besucher/Monat",
      left: 759,
      w: 375,
      align: "right",
      labelW: 179,
    },
    {
      value: "Top 3",
      label: "Google-Rankings Kernbegriffe",
      left: 1134,
      w: 390,
      align: "right",
      labelW: 247,
    },
  ]

  const faqs = [
    {
      q: "Müssen wir alle Leistungen auf einmal beauftragen?",
      a: "Nein. Wir starten dort, wo Ihr grösster Hebel liegt — das zeigt die kostenlose Sichtbarkeitsanalyse. Viele Klienten beginnen mit Website und Local SEO und erweitern das System schrittweise. Wichtig ist, dass die Massnahmen aufeinander aufbauen und nicht isoliert betrieben werden.",
    },
    {
      q: "Was ist der Unterschied zwischen klassischem SEO und GEO Readiness?",
      a: "Klassisches SEO optimiert für Google-Rankings und organische Klicks. GEO Readiness (Generative Engine Optimization) optimiert dafür, dass Ihr Unternehmen in den Antworten von ChatGPT, Google AI Mode und Perplexity erscheint — auch ohne Klick auf Ihre Website. Beides ist heute nötig. Beides ist bei uns integriert.",
    },
    {
      q: "Wie unterscheidet sich Bexolutions von einer klassischen Webdesign-Agentur?",
      a: "Eine Webdesign-Agentur liefert eine Website — und ist dann weg. Bexolutions baut das System dahinter: Website, SEO, Content, KI-Sichtbarkeit und Performance laufen als kontinuierliches System weiter, werden monatlich gemessen und optimiert. Sie kaufen keine Leistung, Sie investieren in dauerhaftes Wachstum.",
    },
    {
      q: "Wie lange dauert es, bis ich Resultate sehe?",
      a: "Erste Verbesserungen in der lokalen Sichtbarkeit nach 4–8 Wochen, signifikante Resultate nach 3–6 Monaten. Zofingen Treuhand AG: +200% mehr Klicks nach 16 Monaten, Teamvergrösserung notwendig. SEO und KI-Sichtbarkeit sind Investitionen in nachhaltige Sichtbarkeit — keine kurzfristigen Werbekampagnen.",
    },
    {
      q: "Brauche ich für Google Ads ein separates Werbebudget?",
      a: "Google Ads ist ein optionales Add-on in Säule 5 — empfohlen erst, wenn das organische Fundament (Website, SEO, Content) trägt. Das Media-Budget läuft direkt über Ihr Google-Konto und ist klar von unserer Agenturpauschale getrennt.",
    },
    {
      q: "Kann Bexolutions auch grössere Projekte wie App-Entwicklung übernehmen?",
      a: "Ja — über die Elev8 Group haben wir Zugang zu Syntech Solutions für App- und Softwareentwicklung sowie zu SharkAgency für skaliertes Performance-Marketing. Ein Ansprechpartner bei Bexolutions koordiniert den Zugang zum gesamten Gruppenportfolio.",
    },
  ]

  // FAQ vertical positions (design), so the absolute boxes land where Figma has them
  const FAQ_TOPS = [7360, 7566, 7795, 8024, 8253, 8459].map((y) => y - 7139)
  function faqTop(i: number) {
    return FAQ_TOPS[i]
  }
</script>

<template>
  <main class="bexo">
    <div ref="canvasRef" class="canvas">
      <!-- ============================= NAV (light) ============================= -->
      <header
        class="absolute"
        style="left: 0; top: 0; width: 1512px; height: 180px"
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
          <a href="#" class="btn-primary" style="width: 237px">
            Termin vereinbaren
          </a>
        </div>
      </header>

      <!-- ============================= HERO ============================= -->
      <section
        class="absolute overflow-hidden rounded-[120px]"
        style="left: 71px; top: 237px; width: 1361px; height: 485px"
      >
        <BackgroundMedia
          :poster="`${UB}/elev8-bg.jpg`"
          :video="BEXO_VIDEOS.leistungenHero"
          class="absolute inset-0 h-full w-full"
        />
        <div
          class="absolute inset-0"
          style="background: rgba(14, 33, 56, 0.75)"
        ></div>
        <h1
          class="absolute text-[40px] font-semibold leading-[48px] text-white"
          style="left: 114px; top: 104px; width: 858px"
        >
          Unsere Leistungen.
          <br />
          Ein System. Alles aus einer Hand.
        </h1>
        <p
          class="absolute text-[20px] font-normal leading-[28px] text-white"
          style="left: 114px; top: 222px; width: 773px"
        >
          Bexolutions liefert kein Menü an Einzelleistungen — wir bauen ein
          zusammenhängendes Marketingsystem, das für Ihr KMU arbeitet. Jede
          Leistung greift in die nächste. Strategie, Umsetzung und Reporting aus
          einer Hand.
        </p>
        <div
          class="absolute flex items-center"
          style="left: 114px; top: 328px; gap: 22px"
        >
          <a href="#" class="btn-primary" style="width: 420px">
            Kostenlose Sichtbarkeitsanalyse anfordern
          </a>
          <a href="/referenz-zofingen" class="btn-navy" style="width: 193px">
            Zur Fallstudie
          </a>
        </div>
      </section>

      <!-- ============================= INTRO ============================= -->
      <p
        class="absolute text-center text-[28px] font-normal leading-[38px] text-[#0e2138]"
        style="left: 349px; top: 846px; width: 816px"
      >
        Wir decken alle Bereiche ab, die ein KMU für nachhaltige digitale
        Sichtbarkeit braucht — von der Website über Local SEO und Content bis
        zur KI-Sichtbarkeit. Fixe Monatsrate, transparentes Reporting, ein
        Ansprechpartner.
      </p>

      <!-- ============================= PILLARS HEADING ============================= -->
      <section
        class="absolute rounded-t-[60px] bg-[#f8f8f8]"
        style="left: 0; top: 1122px; width: 1512px; height: 395px"
      >
        <span
          class="absolute grid place-items-center rounded-[20px] bg-[#ffeef4] text-[20px] font-normal leading-[28px] tracking-[0.4px] text-black"
          style="left: 120px; top: 97px; width: 208px; height: 48px"
        >
          Was wir für Sie tun
        </span>
        <h2
          class="absolute text-[40px] font-semibold leading-[50px] text-[#0e2138]"
          style="left: 120px; top: 161px; width: 846px"
        >
          Die fünf Säulen des Bexolutions-Systems.
        </h2>
      </section>

      <!-- ============================= SÄULEN ============================= -->
      <section
        v-for="s of saeulen"
        :key="s.title"
        class="absolute rounded-t-[60px]"
        :style="{
          left: 0,
          top: s.top + 'px',
          width: '1512px',
          height: s.h + 'px',
          background: s.bg,
        }"
      >
        <h2
          class="absolute text-[40px] font-semibold leading-[50px] text-[#0e2138]"
          style="left: 115px; top: 77px; width: 1200px"
        >
          {{ s.title }}
        </h2>
        <!-- left column -->
        <div class="absolute" style="left: 115px; top: 159px; width: 624px">
          <h3
            class="whitespace-pre-line text-[32px] font-semibold leading-[40px] text-[#0e2138]"
          >
            {{ s.sub }}
          </h3>
          <p
            class="mt-[28px] text-[20px] font-normal leading-[28px] tracking-[0.4px] text-black"
          >
            {{ s.body }}
          </p>
          <p
            class="mt-[28px] text-[16px] font-semibold leading-[22px] tracking-[0.3px] text-black"
          >
            {{ s.forWho }}
          </p>
        </div>
        <!-- checklist card -->
        <div
          class="absolute rounded-[20px] border border-[#8b8b8b] p-[20px]"
          :style="{
            left: '809px',
            top: '159px',
            width: '506px',
            height: s.cardH + 'px',
            background:
              'radial-gradient(closest-side, #ffeef4 0%, rgba(255,238,244,0) 100%)',
          }"
        >
          <h3 class="text-[28px] font-semibold leading-[35px] text-[#0e2138]">
            Was konkret enthalten ist
          </h3>
          <div class="my-[16px] h-px w-full bg-black/40"></div>
          <ul
            class="text-[18px] font-normal leading-[25px] tracking-[0.4px] text-black"
          >
            <li v-for="(b, bi) of s.bullets" :key="bi" class="flex gap-2">
              <span>•</span>
              <span>{{ b }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- ============================= FLOW: KEIN FLICKENTEPPICH ============================= -->
      <section
        class="absolute bg-[#f8f8f8]"
        style="left: 0; top: 4534px; width: 1512px; height: 1024px"
      >
        <h2
          class="absolute text-center text-[32px] font-semibold leading-[45px] tracking-[0.6px] text-black"
          style="left: 0; top: 96px; width: 1512px"
        >
          Kein Flickenteppich. Ein System.
        </h2>
        <p
          class="absolute text-center text-[20px] font-normal leading-[28px] tracking-[0.4px] text-black"
          style="left: 298px; top: 165px; width: 916px"
        >
          Die Website ist der Ausgangspunkt. SEO und Content bringen den
          Traffic. GEO Readiness stellt sicher, dass Sie auch in KI-Antworten
          erscheinen. Performance-Marketing multipliziert, was organisch bereits
          funktioniert. Alles wird monatlich gemessen und optimiert.
        </p>
        <!-- connectors -->
        <div
          class="absolute bg-[#13315c]/40"
          style="left: 755px; top: 400px; width: 1px; height: 91px"
        ></div>
        <div
          class="absolute bg-[#13315c]/40"
          style="left: 755px; top: 562px; width: 1px; height: 91px"
        ></div>
        <div
          class="absolute bg-[#13315c]/40"
          style="left: 755px; top: 724px; width: 1px; height: 91px"
        ></div>
        <!-- boxes -->
        <div
          v-for="f of flow"
          :key="f.label"
          class="absolute grid place-items-center rounded-[20px] border border-[#13315c]/50 bg-white text-[28px] font-medium leading-[39px] tracking-[0.6px] text-black"
          :style="{
            left: 756 - f.w / 2 + 'px',
            top: f.top + 'px',
            width: f.w + 'px',
            height: '71px',
          }"
        >
          {{ f.label }}
        </div>
      </section>

      <!-- ============================= DARK CARDS ============================= -->
      <section
        class="absolute overflow-hidden"
        style="left: 0; top: 5558px; width: 1512px; height: 718px"
      >
        <BackgroundMedia
          :poster="`${IMG}/darkcards-bg.jpg`"
          :video="BEXO_VIDEOS.leistungenDarkCards"
          class="absolute inset-0 h-full w-full"
        />
        <div
          class="absolute inset-0"
          style="background: rgba(0, 0, 0, 0.7)"
        ></div>
        <h2
          class="absolute text-[32px] font-semibold leading-[45px] tracking-[0.6px] text-white"
          style="left: 986px; top: 96px; width: 426px"
        >
          Alles aus einer Hand. Fixe Rate. Volle Transparenz.
        </h2>
        <p
          class="absolute text-[20px] font-normal leading-[28px] tracking-[0.4px] text-white"
          style="left: 986px; top: 206px; width: 426px"
        >
          Kein Stundenhonorar. Keine Überraschungsrechnungen. Keine Koordination
          zwischen drei Agenturen.
        </p>
        <div
          v-for="c of darkCards"
          :key="c.title"
          class="absolute flex flex-col rounded-[30px] bg-[#ecf6ff] p-[19px]"
          :style="{
            left: c.left + 'px',
            top: '358px',
            width: '408px',
            height: '264px',
          }"
        >
          <h3
            class="whitespace-pre-line text-[24px] font-semibold leading-[34px] text-black"
          >
            {{ c.title }}
          </h3>
          <div class="my-[12px] h-px w-full bg-[#c4c4c4]"></div>
          <p class="text-[16px] font-medium leading-[22px] text-black">
            {{ c.body }}
          </p>
        </div>
      </section>

      <!-- ============================= CASE STUDY ============================= -->
      <h2
        class="absolute text-[40px] font-semibold leading-[56px] tracking-[0.8px] text-black"
        style="left: 115px; top: 6400px; width: 700px"
      >
        Was möglich ist in 16 Monaten.
      </h2>
      <div
        class="absolute bg-[#0e2138]"
        style="left: 139px; top: 6530px; width: 4px; height: 80px"
      ></div>
      <p
        class="absolute text-[20px] font-normal italic leading-[28px] tracking-[0.4px] text-black"
        style="left: 173px; top: 6501px; width: 971px"
      >
        «Die Anzahl der Anfragen über unsere Website und unser
        Google-Unternehmensprofil hat sich in den vergangenen 16 Monaten
        substanziell erhöht. Wir mussten infolgedessen unser Team personell
        verstärken, um die zusätzlichen Mandate ordnungsgemäss bearbeiten zu
        können.»
      </p>
      <p
        class="absolute text-[20px] font-normal leading-[28px] tracking-[0.4px] text-black"
        style="left: 173px; top: 6634px; width: 971px"
      >
        — Philippe Bally, Zofingen Treuhand AG
      </p>
      <a
        href="/referenz-zofingen"
        class="btn-outline absolute"
        style="left: 1093px; top: 6598px; width: 299px"
      >
        Zur vollständigen Fallstudie
      </a>

      <div
        v-for="s of caseStats"
        :key="s.value"
        class="absolute flex flex-col justify-between border border-black/40"
        :style="{
          left: s.left + 'px',
          top: '6759px',
          width: s.w + 'px',
          height: '256px',
          padding: '22px 30px',
        }"
      >
        <span
          class="ml-auto text-right text-[20px] font-semibold leading-[30px] tracking-[-0.6px] text-black"
          :style="{ width: s.labelW + 'px' }"
        >
          {{ s.label }}
        </span>
        <span
          class="text-[72px] font-semibold leading-none tracking-[-3.6px] text-[#13315c]"
          :class="s.align === 'right' ? 'text-right' : 'text-left'"
        >
          {{ s.value }}
        </span>
      </div>

      <!-- ============================= FAQ ============================= -->
      <section
        class="absolute overflow-hidden"
        style="left: 0; top: 7139px; width: 1512px; height: 1502px"
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
          class="absolute text-center text-[20px] font-normal leading-[28px] tracking-[0.4px] text-[#0e2138]"
          style="left: 439px; top: 0; width: 633px"
        >
          Häufige Fragen
        </p>
        <h2
          class="absolute text-center text-[40px] font-semibold leading-[56px] tracking-[0.8px] text-black"
          style="left: 440px; top: 45px; width: 633px"
        >
          Was KMU-Inhaber uns zu unseren Leistungen fragen.
        </h2>
        <details
          v-for="(f, i) of faqs"
          :key="f.q"
          open
          class="faq-item absolute rounded-[20px] border border-[#0e2138]/20 bg-white/50 px-[40px] py-[28px]"
          :style="{ left: '215px', top: faqTop(i) + 'px', width: '1082px' }"
        >
          <summary
            class="flex cursor-pointer list-none items-start justify-between gap-6"
          >
            <h3 class="text-[20px] font-bold leading-[25px] text-black">
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

      <!-- ============================= TREUHÄNDER BANNER ============================= -->
      <section
        class="absolute overflow-hidden rounded-[80px]"
        style="left: 61px; top: 8775px; width: 1390px; height: 434px"
      >
        <NuxtImg
          :src="`${IMG}/treu-bg.jpg`"
          class="absolute inset-0 h-full w-full object-cover"
          alt=""
        />
        <div
          class="absolute inset-0"
          style="background: rgba(14, 33, 56, 0.7)"
        ></div>
        <div
          class="absolute inset-0 flex flex-col items-center"
          style="padding-top: 107px"
        >
          <h2
            class="text-center text-[40px] font-semibold leading-[48px] text-white"
          >
            Sind Sie Treuhänder oder Steuerberater?
          </h2>
          <p
            class="mt-[22px] text-center text-[20px] font-normal leading-[28px] text-white"
            style="width: 740px"
          >
            Wir haben eine bewährte Methode speziell für Treuhandbüros in der
            Deutschschweiz — mit nachgewiesenen Resultaten und tiefem
            Branchenverständnis.
          </p>
          <a href="#" class="btn-primary mt-[30px]" style="width: 237px">
            Mehr erfahren
          </a>
        </div>
      </section>

      <!-- ============================= CTA BILLBOARD ============================= -->
      <section
        class="absolute overflow-hidden rounded-t-[200px]"
        style="left: 0; top: 9343px; width: 1512px; height: 679px"
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
          style="left: 122px; top: 318px; width: 736px"
        >
          Bereit zu erfahren, welche Leistungen Ihr KMU jetzt braucht?
        </h2>
        <p
          class="absolute text-[20px] font-normal leading-[28px] text-white"
          style="left: 122px; top: 454px; width: 639px"
        >
          Buchen Sie Ihre kostenlose 20-minütige Sichtbarkeitsanalyse. Wir
          schauen uns Ihre aktuelle digitale Präsenz an und empfehlen Ihnen
          konkret, wo der grösste Hebel liegt.
        </p>
        <a
          href="#"
          class="btn-primary absolute"
          style="left: 122px; top: 562px; width: 370px"
        >
          Jetzt Sichtbarkeitsanalyse anfordern
        </a>
      </section>

      <BexoFooter :top="10022" />
    </div>
  </main>
</template>

<style scoped>
  .bexo {
    font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
    background: #ffffff;
    display: flex;
    justify-content: center;
  }
  .canvas {
    position: relative;
    width: 1512px;
    height: 10676px;
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
