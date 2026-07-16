<script setup lang="ts">
  import { computed, nextTick, ref } from "vue"
  import type { WissenCategoryFilter } from "~/constants/wissenCategories"
  import BexoSection from "~/components/bexo/BexoSection.vue"
  import BlogFeaturedCard from "~/components/blog/BlogFeaturedCard.vue"
  import BlogListCard from "~/components/blog/BlogListCard.vue"
  import { WISSEN_FILTER_CHIPS } from "~/constants/wissenCategories"
  import { useWissenListing } from "~/composables/useWissenListing"

  const IMG = "/images/wissen"
  const HOME = "/images/startseite"
  const CARD_FALLBACK = `${IMG}/card.jpg`
  const FEATURED_FALLBACK = `${IMG}/featured-article.jpg`

  const listAnchor = ref<HTMLElement | null>(null)

  const {
    selectedFilter,
    isAlleSelected,
    featuredBlog,
    filteredListBlogs,
    hasMore,
    remainingCount,
    visibleCategorySections,
    selectFilter,
    loadMore,
    blogsForSection,
  } = useWissenListing()

  const loadMoreLabel = computed(() => {
    const next = Math.min(remainingCount.value, 9)
    return next > 0 ? `Mehr laden (${next})` : "Mehr laden"
  })

  const topics: {
    icon: string
    title: string
    body: string
    filter: WissenCategoryFilter
  }[] = [
    {
      icon: "📊",
      title: "KI & GEO",
      body: "GEO Readiness, ChatGPT-Optimierung, Google AI Mode — wie Ihr KMU in KI-Antworten erscheint.",
      filter: "KI & GEO",
    },
    {
      icon: "🚀",
      title: "Local SEO",
      body: "Google Business Profile, Google Maps, Bewertungsmanagement — für KMU mit lokalem Kundenfokus.",
      filter: "Local SEO",
    },
  ]

  async function handleSelectFilter(
    chip: (typeof WISSEN_FILTER_CHIPS)[number],
  ) {
    selectFilter(chip)
    await nextTick()
    listAnchor.value?.scrollIntoView({ behavior: "smooth", block: "start" })
  }
</script>

<template>
  <div class="box-border w-full min-w-0 max-w-full overflow-x-clip">
    <BexoSection compact-top>
      <div class="rounded-[24px] bg-[#f9f9f9] p-6 text-center">
        <h1 class="text-[28px] font-semibold leading-tight text-black">
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
          class="aspect-[16/10] w-full object-cover"
          alt=""
        />
      </div>
      <p class="mt-5 text-center text-base leading-relaxed text-black">
        Jeder Artikel auf dieser Seite basiert auf echter Kundenerfahrung —
        nicht auf Theorie. Wir schreiben über das, was wir umsetzen, und über
        die Resultate, die es bringt.
      </p>
    </BexoSection>

    <!-- Filter chips — same chip set / selectFilter as desktop -->
    <div class="border-b border-black/5">
      <div class="px-4 py-3">
        <div
          class="max-w-xl mx-auto flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <button
            v-for="chip of WISSEN_FILTER_CHIPS"
            :key="chip"
            type="button"
            class="grid h-10 shrink-0 place-items-center rounded-full px-6 text-sm font-medium text-[#0e2138] transition"
            :class="
              selectedFilter === chip
                ? 'bg-[#bde0fe]'
                : 'bg-[#f9f9f9] hover:bg-[#eef6ff]'
            "
            :aria-pressed="selectedFilter === chip"
            @click="handleSelectFilter(chip)"
          >
            {{ chip }}
          </button>
        </div>
      </div>
    </div>

    <div ref="listAnchor" class="scroll-mt-28">
      <BexoSection v-if="featuredBlog" compact-top>
        <BlogFeaturedCard
          :blog="featuredBlog"
          :fallback-image="FEATURED_FALLBACK"
        />
      </BexoSection>

      <!-- Alle: category sections with preview cards (same as desktop) -->
      <template v-if="isAlleSelected">
        <BexoSection
          v-for="section of visibleCategorySections"
          :key="section.label"
          compact-y
        >
          <div class="mb-4 h-px w-full bg-black/10"></div>
          <h3 class="text-lg font-medium text-black">{{ section.label }}</h3>
          <div class="mt-4 grid grid-cols-1 gap-4">
            <BlogListCard
              v-for="b of blogsForSection(section.filter)"
              :key="b.slug"
              :blog="b"
              :fallback-image="CARD_FALLBACK"
            />
          </div>
          <button
            type="button"
            class="mt-4 min-h-11 text-base font-medium text-[#134074] transition hover:opacity-70"
            @click="handleSelectFilter(section.filter)"
          >
            Mehr anzeigen →
          </button>
        </BexoSection>
      </template>

      <!-- Filtered: paginated list excluding featured -->
      <template v-else>
        <BexoSection v-if="filteredListBlogs.length > 0" compact-y>
          <div class="grid grid-cols-1 gap-4">
            <BlogListCard
              v-for="b of filteredListBlogs"
              :key="b.slug"
              :blog="b"
              :fallback-image="CARD_FALLBACK"
            />
          </div>
          <button
            v-if="hasMore"
            type="button"
            class="bexo-btn-primary bexo-btn-block mt-6"
            @click="loadMore"
          >
            {{ loadMoreLabel }}
          </button>
        </BexoSection>

        <BexoSection v-else-if="!featuredBlog" compact-y>
          <p
            class="rounded-[20px] bg-[#f9f9f9] px-5 py-8 text-center text-base text-black/70"
          >
            In dieser Kategorie sind noch keine Artikel verfügbar.
          </p>
        </BexoSection>
      </template>
    </div>

    <section class="relative mx-4 my-8 overflow-hidden rounded-[28px]">
      <NuxtImg
        :src="`${IMG}/midbanner-bg.jpg`"
        class="absolute inset-0 h-full w-full object-cover"
        alt=""
      />
      <div class="bg-[#0e2138]/62 absolute inset-0"></div>
      <div class="relative px-6 py-10 text-center">
        <h2 class="text-2xl font-semibold leading-snug text-white">
          Wissen ist gut. Umsetzung ist besser.
        </h2>
        <p class="mt-4 text-base leading-relaxed text-white">
          Buchen Sie Ihre kostenlose Sichtbarkeitsanalyse — wir zeigen Ihnen
          konkret, welche dieser Strategien für Ihr KMU den grössten Hebel
          haben.
        </p>
        <a href="/kontakt" class="bexo-btn-primary bexo-btn-block mt-6">
          Kostenlose Analyse anfordern
        </a>
      </div>
    </section>

    <BexoSection>
      <p class="text-sm font-semibold text-[#0e2138]">Alle Themen</p>
      <h2 class="mt-1 text-2xl font-semibold text-black">Wissen nach Thema</h2>
      <div class="mt-6 grid grid-cols-1 gap-4">
        <button
          v-for="t of topics"
          :key="t.title"
          type="button"
          class="rounded-[20px] border border-black/10 bg-[#f9f9f9] p-5 text-left transition hover:border-[#bde0fe]"
          @click="handleSelectFilter(t.filter)"
        >
          <span class="text-2xl" aria-hidden="true">{{ t.icon }}</span>
          <h3 class="mt-2 text-lg font-semibold text-black">{{ t.title }}</h3>
          <p class="mt-2 text-base leading-relaxed text-[#4b4c56]">
            {{ t.body }}
          </p>
          <span class="mt-3 inline-block text-base font-medium text-[#134074]">
            Alle Artikel →
          </span>
        </button>
      </div>
    </BexoSection>

    <section class="relative w-full overflow-hidden rounded-t-[48px]">
      <NuxtImg
        :src="`${HOME}/billboard.jpg`"
        class="absolute inset-0 h-full w-full object-cover object-top"
        alt=""
      />
      <div class="absolute inset-0 bg-[#0e2138]/55"></div>
      <div class="relative px-6 py-12">
        <h2 class="text-2xl font-semibold leading-snug text-white">
          Sie wollen nicht nur lesen — sondern umsetzen?
        </h2>
        <p class="mt-4 text-base leading-relaxed text-white">
          Buchen Sie Ihre kostenlose 20-minütige Sichtbarkeitsanalyse. Wir
          analysieren Ihre digitale Sichtbarkeit — kostenlos und konkret.
        </p>
        <a href="/kontakt" class="bexo-btn-primary bexo-btn-block mt-8">
          Jetzt Sichtbarkeitsanalyse anfordern
        </a>
      </div>
    </section>
  </div>
</template>
