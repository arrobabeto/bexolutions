<script setup lang="ts">
  import { definePageMeta, useHead } from "#imports"

  definePageMeta({ layout: false })

  const IMG = "/images/kontakt"
  const HOME = "/images/startseite"

  useHead({
    title: "Kontakt — Bexolutions",
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

  const offices = [
    {
      top: 2031,
      flag: "🇨🇭",
      name: "Schweiz — Hauptsitz",
      addr: ["Fabrikweg 1a", "5502 Hunzenschwil, Aargau"],
    },
    {
      top: 2181,
      flag: "🇲🇽",
      name: "Mexiko",
      addr: ["San Cayetano, 20020", "Aguascalientes, Ags."],
    },
    {
      top: 2331,
      flag: "🇮🇩",
      name: "Indonesien — Bali",
      addr: ["Gg. Pratama No.1a", "80361 Badung"],
    },
  ]

  const badges = [
    {
      left: 146,
      title: "Vertraulich",
      body: "Ihre Daten werden nicht an Dritte weitergegeben.",
      icon: "lock",
    },
    {
      left: 462,
      title: "Schnell",
      body: "Antwort innerhalb von 1 Werktag.",
      icon: "bolt",
    },
    {
      left: 778,
      title: "Kostenlos",
      body: "Die Sichtbarkeitsanalyse ist 100% unverbindlich.",
      icon: "rocket",
    },
    {
      left: 1094,
      title: "Lokal",
      body: "Bexolutions, Kanton Aargau — seit 2019.",
      icon: "pin",
    },
  ]

  const links = [
    {
      left: 181,
      to: "/referenz-zofingen",
      pre: "Lesen Sie unsere Fallstudie:",
      strong: "Zofingen Treuhand AG — +200% Klicks in 16 Monaten",
    },
    {
      left: 575,
      to: "/leistungen",
      pre: "",
      strong: "Entdecken Sie unsere Leistungen",
    },
    {
      left: 969,
      to: "/wissen",
      pre: "",
      strong: "Besuchen Sie unser Wissen — praxisnahes Marketing für KMU",
    },
  ]
</script>

<template>
  <main class="bexo">
    <div class="canvas">
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
          <a href="#" class="btn-primary" style="width: 237px">
            Termin vereinbaren
          </a>
        </div>
      </header>

      <!-- radial glow -->
      <div
        class="absolute"
        style="
          left: 739px;
          top: 231px;
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
        class="absolute text-[40px] font-semibold leading-[56px] text-black"
        style="left: 120px; top: 291px; width: 620px"
      >
        Wir sind für Sie da.
        <br />
        Schreiben Sie uns — oder
        <br />
        buchen Sie direkt.
      </h1>
      <p
        class="absolute text-[18px] font-normal leading-[25px] text-black"
        style="left: 768px; top: 325px; width: 540px"
      >
        Ob Frage, Projekt oder Sichtbarkeitsanalyse:
        <br />
        Wir antworten innerhalb von 1 Werktag. Keine Verpflichtung, kein
        Verkaufsdruck.
      </p>
      <div
        class="absolute"
        style="
          left: 120px;
          top: 539px;
          width: 1267px;
          height: 1px;
          background: rgba(75, 76, 86, 0.25);
        "
      ></div>
      <p
        class="absolute text-[18px] font-normal leading-[25px] text-black"
        style="left: 120px; top: 619px; width: 785px"
      >
        Den schnellsten Einstieg bietet die kostenlose 20-minütige
        Sichtbarkeitsanalyse — buchen Sie direkt via Kalender. Oder schreiben
        Sie uns kurz, was Sie beschäftigt — wir melden uns.
      </p>

      <!-- ============================= FORM CARD ============================= -->
      <section
        class="absolute rounded-[33px] bg-[#f9f9f9]"
        style="left: 120px; top: 749px; width: 732px; height: 985px"
      >
        <h2
          class="absolute text-[30px] font-semibold leading-[42px] text-black"
          style="left: 56px; top: 80px"
        >
          Nachricht senden.
        </h2>

        <!-- Ansprache -->
        <label class="field-label" style="left: 56px; top: 146px; width: 620px">
          Ansprache
        </label>
        <div class="field-select" style="left: 56px; top: 178px; width: 620px">
          <span>Herr / Frau</span>
          <span class="field-caret">⌄</span>
        </div>

        <!-- Vorname / Nachname -->
        <label class="field-label" style="left: 56px; top: 250px; width: 298px">
          Vorname
        </label>
        <div
          class="field-input"
          style="left: 56px; top: 282px; width: 298px"
        ></div>
        <label
          class="field-label"
          style="left: 378px; top: 250px; width: 298px"
        >
          Nachname
        </label>
        <div
          class="field-input"
          style="left: 378px; top: 282px; width: 298px"
        ></div>

        <!-- E-Mail / Telefon -->
        <label class="field-label" style="left: 56px; top: 354px; width: 298px">
          E-Mail
        </label>
        <div
          class="field-input"
          style="left: 56px; top: 386px; width: 298px"
        ></div>
        <label
          class="field-label"
          style="left: 378px; top: 354px; width: 298px"
        >
          Telefonnummer
        </label>
        <div
          class="field-input"
          style="left: 378px; top: 386px; width: 298px"
        ></div>

        <!-- Unternehmen -->
        <label class="field-label" style="left: 56px; top: 458px; width: 620px">
          Unternehmen
        </label>
        <div class="field-select" style="left: 56px; top: 490px; width: 620px">
          <span>Unternehmen</span>
          <span class="field-caret">⌄</span>
        </div>

        <!-- Thema -->
        <label class="field-label" style="left: 56px; top: 562px; width: 620px">
          Thema
        </label>
        <div class="field-select" style="left: 56px; top: 594px; width: 620px">
          <span>Sichtbarkeitsanalyse</span>
          <span class="field-caret">⌄</span>
        </div>

        <!-- Nachricht -->
        <label class="field-label" style="left: 56px; top: 666px; width: 620px">
          Nachricht
        </label>
        <div
          class="field-textarea"
          style="left: 56px; top: 698px; width: 620px; height: 140px"
        >
          <span class="text-[16px] font-normal leading-6 text-black/45">
            Ziel in 1–2 Sätzen
          </span>
        </div>

        <a
          href="#"
          class="btn-primary absolute"
          style="left: 56px; top: 862px; width: 237px"
        >
          Nachricht senden
        </a>
      </section>

      <!-- ============================= BOOKING COLUMN ============================= -->
      <div
        class="absolute"
        style="
          left: 905px;
          top: 782px;
          width: 485px;
          height: 1px;
          background: rgba(75, 76, 86, 0.6);
        "
      ></div>
      <h2
        class="absolute text-[30px] font-semibold leading-[45px] text-black"
        style="left: 905px; top: 819px"
      >
        Oder direkt buchen.
      </h2>
      <div
        class="absolute rounded-[24px] border border-[#c4c4c4]"
        style="left: 905px; top: 901px; width: 485px; height: 247px"
      >
        <p
          class="absolute text-[20px] font-medium leading-[30px] text-black"
          style="left: 20px; top: 32px; width: 330px"
        >
          Kostenlose Sichtbarkeitsanalyse — 20 Minuten
        </p>
        <p
          class="absolute text-[18px] font-normal leading-[27px] text-black"
          style="left: 20px; top: 107px; width: 435px"
        >
          Wählen Sie einen Termin, der Ihnen passt — online, ohne Vorbereitung.
          Wir analysieren Ihre aktuelle Sichtbarkeit und zeigen Ihnen, wo der
          grösste Hebel liegt.
        </p>
      </div>
      <div
        class="absolute overflow-hidden rounded-[24px]"
        style="left: 905px; top: 1185px; width: 485px; height: 283px"
      >
        <NuxtImg
          :src="`${IMG}/photo.jpg`"
          class="h-full w-full object-cover"
          alt="Bexolutions Team bei der Arbeit"
        />
      </div>
      <div
        class="absolute"
        style="
          left: 905px;
          top: 1505px;
          width: 271px;
          height: 1px;
          background: rgba(75, 76, 86, 0.6);
        "
      ></div>
      <div class="absolute" style="left: 905px; top: 1542px; width: 220px">
        <p class="text-[18px] font-normal leading-[27px] text-black">
          +41 44 771 37 77
        </p>
        <p class="text-[18px] font-normal leading-[27px] text-black">
          info@bexolutions.ch
        </p>
        <p class="mt-[12px] text-[18px] font-normal leading-[27px] text-black">
          Fabrikweg 1a
          <br />
          5502 Hunzenschwil
          <br />
          Kanton Aargau, CH
        </p>
      </div>

      <!-- ============================= MAP SECTION ============================= -->
      <section
        class="absolute overflow-hidden bg-[#f9f9f9]"
        style="left: 0; top: 1830px; width: 1512px; height: 799px"
      >
        <NuxtImg
          :src="`${IMG}/dotmap.png`"
          class="absolute"
          style="
            left: 106px;
            top: 55px;
            width: 1300px;
            height: 689px;
            opacity: 0.18;
          "
          alt=""
        />
        <div
          class="absolute overflow-hidden rounded-[30px]"
          style="left: 120px; top: 189px; width: 732px; height: 422px"
        >
          <NuxtImg
            :src="`${IMG}/mapwidget.jpg`"
            class="h-full w-full object-cover"
            alt="Karte — Bexolutions Standort"
          />
        </div>
        <div
          v-for="o of offices"
          :key="o.name"
          class="absolute"
          :style="{ left: '933px', top: o.top - 1830 + 'px', width: '260px' }"
        >
          <p class="text-[20px] font-semibold leading-[28px] text-black">
            {{ o.flag }} {{ o.name }}
          </p>
          <p
            class="mt-[2px] text-[16px] font-normal leading-[24px] text-[#4b4c56]"
          >
            <template v-for="(ln, i) of o.addr" :key="i">
              {{ ln }}
              <br v-if="i < o.addr.length - 1" />
            </template>
          </p>
        </div>
      </section>

      <!-- ============================= TRUST BADGES ============================= -->
      <div
        v-for="b of badges"
        :key="b.title"
        class="absolute flex items-start gap-[16px]"
        :style="{ left: b.left + 'px', top: '2728px', width: '272px' }"
      >
        <span
          class="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full bg-[#bde0fe]"
        >
          <svg
            v-if="b.icon === 'lock'"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0e2138"
            stroke-width="1.6"
          >
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          <svg
            v-else-if="b.icon === 'bolt'"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#0e2138"
          >
            <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
          </svg>
          <svg
            v-else-if="b.icon === 'rocket'"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0e2138"
            stroke-width="1.6"
          >
            <path d="M5 16c-1.2 1-1.6 4-1.6 4s3-.4 4-1.6" />
            <path d="M9 15c5-2 9-7 9.5-11.5C14 4 9 8 7 13z" />
            <circle cx="14" cy="9.5" r="1.4" fill="#0e2138" />
          </svg>
          <svg
            v-else
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0e2138"
            stroke-width="1.6"
          >
            <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
            <circle cx="12" cy="9" r="2.4" />
          </svg>
        </span>
        <div>
          <p class="text-[18px] font-semibold leading-[25px] text-[#0c0c0c]">
            {{ b.title }}
          </p>
          <p
            class="mt-[6px] text-[16px] font-normal leading-[22px] text-[#0c0c0c]"
          >
            {{ b.body }}
          </p>
        </div>
      </div>

      <!-- ============================= NOCH NICHT SICHER ============================= -->
      <section
        class="absolute rounded-[26px] bg-[#f9f9f9]"
        style="left: 120px; top: 2903px; width: 1272px; height: 270px"
      >
        <h2
          class="absolute text-[30px] font-semibold leading-[29px] text-black"
          style="left: 61px; top: 53px"
        >
          Noch nicht sicher? Kein Problem.
        </h2>
        <a
          v-for="l of links"
          :key="l.strong"
          :href="l.to"
          class="absolute flex items-center gap-[16px] rounded-[26px] border border-[#4b4c56] px-[24px] transition hover:bg-black/[0.02]"
          :style="{
            left: l.left - 120 + 'px',
            top: '114px',
            width: '362px',
            height: '103px',
          }"
        >
          <span
            class="grid h-[28px] w-[28px] shrink-0 place-items-center rounded-full bg-[#e6eafb] text-[15px] text-[#2f45c8]"
          >
            →
          </span>
          <span class="text-[16px] leading-[19px]">
            <span v-if="l.pre" class="font-normal text-black">
              {{ l.pre }}
              <br />
            </span>
            <span
              :class="
                l.pre
                  ? 'font-semibold text-[#2f45c8]'
                  : 'font-normal text-black'
              "
            >
              {{ l.strong }}
            </span>
          </span>
        </a>
      </section>

      <!-- ============================= FOOTER ============================= -->
      <footer
        class="absolute bg-[#0e2138]"
        style="left: 0; top: 3245px; width: 1512px; height: 634px"
      >
        <h2
          class="absolute text-[56px] font-semibold leading-[55px] tracking-[1.12px] text-white"
          style="left: 120px; top: 140px; width: 491px"
        >
          Better than yesterday.
        </h2>
        <ul
          class="absolute flex flex-col"
          style="left: 987px; top: 96px; gap: 20px"
        >
          <li
            v-for="l of [
              { l: 'Über uns', to: '/ueber-uns' },
              { l: 'Leistungen', to: '/leistungen' },
              { l: 'Wissen', to: '/wissen' },
              { l: 'Treuhänder', to: '/treuhaender' },
              { l: 'Kontakt', to: '/kontakt' },
            ]"
            :key="l.l"
          >
            <a
              :href="l.to"
              class="text-[14px] font-medium leading-[18px] text-white transition hover:opacity-80"
            >
              {{ l.l }}
            </a>
          </li>
        </ul>
        <div class="absolute" style="left: 1207px; top: 96px; width: 189px">
          <p class="text-[14px] font-bold leading-[21px] text-white">
            Adresse:
          </p>
          <p class="text-[14px] font-medium leading-[21px] text-white">
            Fabrikweg 1a
            <br />
            5502 Hunzenschwil
          </p>
          <p class="mt-[20px] text-[14px] font-bold leading-[20px] text-white">
            Kontakt:
          </p>
          <p
            class="footer-mono text-[14px] font-medium leading-[21px] text-white"
          >
            044 771 37 77
          </p>
          <a
            href="mailto:info@bexolutions.ch"
            class="footer-mono block text-[16px] font-medium leading-[22px] text-white hover:opacity-80"
          >
            info@bexolutions.ch
          </a>
        </div>
        <NuxtImg
          :src="`${HOME}/wordmark.png`"
          class="absolute opacity-90"
          style="left: 120px; top: 302px; width: 1272px; height: 108px"
          alt="BEXOLUTIONS"
        />
        <div
          class="absolute bg-white/20"
          style="left: 120px; top: 462px; width: 1272px; height: 1px"
        ></div>
        <p
          class="footer-legal absolute text-[16px] leading-[24px] text-white"
          style="left: 120px; top: 514px"
        >
          © 2026 Bexolutions. Alle Rechte vorbehalten.
        </p>
        <div class="absolute flex" style="left: 907px; top: 514px; gap: 24px">
          <a
            href="#"
            class="footer-legal text-[16px] leading-[24px] text-white underline hover:opacity-80"
          >
            Datenschutzrichtlinie
          </a>
          <a
            href="#"
            class="footer-legal text-[16px] leading-[24px] text-white underline hover:opacity-80"
          >
            Nutzungsbedingungen
          </a>
          <a
            href="#"
            class="footer-legal text-[16px] leading-[24px] text-white underline hover:opacity-80"
          >
            Cookie-Einstellungen
          </a>
        </div>
      </footer>
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
    height: 3879px;
    flex: none;
    background: #ffffff;
  }
  .footer-mono {
    font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
  }
  .footer-legal {
    font-family: "Jost", ui-sans-serif, system-ui, sans-serif;
  }

  .field-label {
    position: absolute;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #000000;
  }
  .field-input,
  .field-select,
  .field-textarea {
    position: absolute;
    border: 1px solid #000000;
    border-radius: 20px;
    background: transparent;
  }
  .field-input {
    height: 48px;
  }
  .field-select {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 16px;
    font-weight: 400;
    color: #000000;
  }
  .field-caret {
    font-size: 18px;
    color: #000000;
  }
  .field-textarea {
    padding: 12px 20px;
  }

  .nav-logo {
    background-color: #0e2138;
    -webkit-mask: url("/images/startseite/logo-mark.png") center / contain
      no-repeat;
    mask: url("/images/startseite/logo-mark.png") center / contain no-repeat;
  }

  .btn-primary,
  .btn-navy {
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
</style>
