<script setup lang="ts">
  import { computed } from "vue"
  import type { IBlog, IBlogCta } from "~/types/dto/IBlog"
  import BlogBlock from "~/components/blog/BlogBlock.vue"
  import BlogSidebar from "~/components/blog/BlogSidebar.vue"
  import BexoFooterMobile from "~/components/bexo/BexoFooterMobile.vue"
  import BexoHeader from "~/components/bexo/BexoHeader.vue"
  import BexoSection from "~/components/bexo/BexoSection.vue"
  import SafeHtml from "~/components/common/SafeHtml.vue"

  const p = defineProps<{ blog: IBlog }>()

  const HOME = "/images/startseite"

  const defaultCta: IBlogCta = {
    heading: "Sie wollen nicht nur lesen — sondern umsetzen?",
    body: "Buchen Sie Ihre kostenlose 20-minütige Sichtbarkeitsanalyse.<br>Wir analysieren Ihre aktuelle digitale Sichtbarkeit in 20 Minuten — kostenlos und konkret.",
    buttonLabel: "Jetzt Sichtbarkeitsanalyse anfordern",
    buttonHref: "/kontakt",
    bgImage: `${HOME}/billboard.jpg`,
  }

  const cta = computed<IBlogCta>(() => ({ ...defaultCta, ...p.blog.cta }))
  const metaLine = computed(
    () => `${p.blog.category}  |  ${p.blog.readTime}  |  ${p.blog.date}`,
  )
</script>

<template>
  <div>
    <BexoHeader variant="light" />

    <BexoSection compact-top>
      <h1 class="text-2xl font-semibold leading-snug text-black">
        {{ blog.title }}
      </h1>
      <p
        v-if="blog.subtitle"
        class="mt-2 text-xl font-medium leading-snug text-black"
      >
        {{ blog.subtitle }}
      </p>
      <p v-if="blog.tagline" class="mt-3 text-base leading-relaxed text-black">
        {{ blog.tagline }}
      </p>
      <p class="mt-4 text-sm font-semibold text-black">{{ metaLine }}</p>
    </BexoSection>

    <BexoSection compact-y>
      <div
        v-if="blog.heroImage"
        class="aspect-video w-full overflow-hidden rounded-[24px] bg-[#f9f9f9]"
      >
        <NuxtImg
          :src="blog.heroImage"
          class="h-full w-full object-cover"
          alt=""
        />
      </div>
    </BexoSection>

    <BexoSection compact-y>
      <div class="rounded-[24px] bg-[#0e2138] px-6 py-8">
        <p class="text-lg font-semibold text-white">{{ blog.tldr.title }}</p>
        <p class="mt-3 text-base leading-relaxed text-white/90">
          {{ blog.tldr.body }}
        </p>
      </div>
    </BexoSection>

    <BexoSection>
      <div class="flex flex-col gap-6">
        <div class="blog-body flex min-w-0 flex-col gap-6">
          <BlogBlock
            v-for="(block, i) of blog.blocks"
            :key="i"
            :block="block"
          />
        </div>
        <BlogSidebar
          class="w-full border-t border-black/10 pt-8"
          :author="blog.author"
          :toc="blog.toc"
          :title="blog.title"
          :url="`/wissen/${blog.slug}`"
        />
      </div>
    </BexoSection>

    <section class="relative mx-4 mb-12 overflow-hidden rounded-[32px]">
      <NuxtImg
        v-if="cta.bgImage"
        :src="cta.bgImage"
        class="absolute inset-0 h-full w-full object-cover object-top"
        alt=""
      />
      <div class="absolute inset-0 bg-[#0e2138]/55" aria-hidden="true"></div>
      <div class="relative px-6 py-12">
        <h2 class="text-2xl font-semibold leading-snug text-white">
          {{ cta.heading }}
        </h2>
        <SafeHtml
          :html="cta.body"
          class="mt-4 text-base leading-relaxed text-white"
        />
        <a :href="cta.buttonHref" class="bexo-btn-primary bexo-btn-block mt-8">
          {{ cta.buttonLabel }}
        </a>
      </div>
    </section>

    <BexoFooterMobile />
  </div>
</template>

<style scoped>
  .blog-body :deep(.text-\[18px\]) {
    font-size: 1rem;
    line-height: 1.625;
  }
  .blog-body :deep(.text-\[40px\]) {
    font-size: 1.5rem;
    line-height: 1.3;
  }
</style>
