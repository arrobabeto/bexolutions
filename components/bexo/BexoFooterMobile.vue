<script setup lang="ts">
  import {
    BEXO_FOOTER_LINKS,
    BEXO_FOOTER_WORDMARK,
    BEXO_LEGAL_LINKS,
  } from "~/constants/bexoFooter"
</script>

<template>
  <footer class="bg-[#0e2138] px-4 py-12 text-white">
    <div class="max-w-xl mx-auto">
      <h2 class="text-3xl font-semibold leading-tight tracking-wide">
        Better than
        <br />
        yesterday.
      </h2>

      <ul class="mt-10 flex flex-col gap-3">
        <li v-for="l of BEXO_FOOTER_LINKS" :key="l.l">
          <a
            :href="l.to"
            class="inline-flex min-h-11 items-center text-sm font-medium leading-[18px] transition hover:opacity-80"
          >
            {{ l.l }}
          </a>
        </li>
      </ul>

      <div class="mt-10 space-y-4 text-sm">
        <div>
          <p class="font-bold leading-[21px]">Adresse:</p>
          <p class="font-medium leading-[21px]">
            Fabrikweg 1a
            <br />
            5502 Hunzenschwil
          </p>
        </div>
        <div>
          <p class="font-bold leading-5">Kontakt:</p>
          <p class="font-mono font-medium leading-[21px]">044 771 37 77</p>
          <a
            href="mailto:info@bexolutions.ch"
            class="font-mono block min-h-11 py-1 text-base font-medium leading-[22px] hover:opacity-80"
          >
            info@bexolutions.ch
          </a>
        </div>
      </div>

      <NuxtImg
        :src="BEXO_FOOTER_WORDMARK"
        class="mt-10 w-full max-w-full opacity-90"
        alt="BEXOLUTIONS"
      />

      <div class="mt-8 h-px w-full bg-white/20"></div>

      <p class="bexo-footer-legal mt-6 text-base leading-6">
        © 2026 Bexolutions. Alle Rechte vorbehalten.
      </p>
      <div class="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        <a
          v-for="legal of BEXO_LEGAL_LINKS"
          :key="legal"
          href="#"
          class="bexo-footer-legal text-base leading-6 underline hover:opacity-80"
        >
          {{ legal }}
        </a>
      </div>
    </div>
  </footer>
</template>
