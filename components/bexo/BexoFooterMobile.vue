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

      <div class="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
        <ul class="flex flex-col gap-0.5">
          <li v-for="l of BEXO_FOOTER_LINKS" :key="l.l">
            <a
              :href="l.to"
              class="inline-flex py-1 text-sm font-medium leading-tight transition hover:opacity-80"
            >
              {{ l.l }}
            </a>
          </li>
        </ul>

        <div class="space-y-3 text-sm">
          <div>
            <p class="font-bold leading-tight">Adresse:</p>
            <p class="mt-1 font-medium leading-snug">
              Fabrikweg 1a
              <br />
              5502 Hunzenschwil
            </p>
          </div>
          <div>
            <p class="font-bold leading-tight">Kontakt:</p>
            <p class="font-mono mt-1 font-medium leading-snug">044 771 37 77</p>
            <a
              href="mailto:info@bexolutions.ch"
              class="font-mono mt-1 block text-sm font-medium leading-snug hover:opacity-80"
            >
              info@bexolutions.ch
            </a>
          </div>
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
