<script setup lang="ts">
  import { computed } from "vue"
  import type { IBlog, IBlogCta } from "~/types/dto/IBlog"
  import BlogBlock from "~/components/blog/BlogBlock.vue"
  import BlogAudioButton from "~/components/blog/BlogAudioButton.vue"
  import BlogSidebar from "~/components/blog/BlogSidebar.vue"
  import BexoSection from "~/components/bexo/BexoSection.vue"
  import SafeHtml from "~/components/common/SafeHtml.vue"
  import { getBlogFeaturedTitle } from "~/utils/blogs"

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
  const fullTitle = computed(() => getBlogFeaturedTitle(p.blog))
  const metaLine = computed(
    () => `${p.blog.category}  ·  ${p.blog.readTime}  ·  ${p.blog.date}`,
  )
</script>

<template>
  <div class="box-border w-full min-w-0 max-w-full overflow-x-clip">
    <BexoSection compact-top>
      <h1
        class="break-words text-[1.65rem] font-semibold leading-tight text-black sm:text-2xl"
      >
        {{ fullTitle }}
      </h1>
      <p
        v-if="blog.tagline"
        class="mt-3 break-words text-sm leading-relaxed text-black sm:text-base"
      >
        {{ blog.tagline }}
      </p>
      <div class="mt-4 flex min-w-0 items-start justify-between gap-3">
        <p
          class="min-w-0 flex-1 break-words text-xs font-semibold leading-snug text-black sm:text-sm"
        >
          {{ metaLine }}
        </p>
        <BlogAudioButton
          v-if="blog.audioUrl"
          class="shrink-0"
          :src="blog.audioUrl"
          label="Kurzaudio abspielen"
        />
      </div>
    </BexoSection>

    <BexoSection compact-y>
      <div
        v-if="blog.heroImage"
        class="aspect-video w-full max-w-full overflow-hidden rounded-[20px] bg-[#f9f9f9]"
      >
        <NuxtImg
          :src="blog.heroImage"
          class="h-full w-full object-cover"
          :alt="fullTitle"
          sizes="100vw"
        />
      </div>
    </BexoSection>

    <BexoSection compact-y>
      <div
        class="box-border w-full max-w-full rounded-[20px] bg-[#0e2138] px-5 py-6 sm:px-6 sm:py-8"
      >
        <p class="break-words text-base font-semibold text-white sm:text-lg">
          {{ blog.tldr.title }}
        </p>
        <p
          class="mt-3 break-words text-sm leading-relaxed text-white/90 sm:text-base"
        >
          {{ blog.tldr.body }}
        </p>
      </div>
    </BexoSection>

    <BexoSection>
      <div class="flex w-full min-w-0 max-w-full flex-col gap-6">
        <div class="blog-body flex w-full min-w-0 max-w-full flex-col gap-5">
          <BlogBlock
            v-for="(block, i) of blog.blocks"
            :key="i"
            :block="block"
          />
        </div>
        <BlogSidebar
          class="w-full min-w-0 max-w-full border-t border-black/10 pt-8"
          :author="blog.author"
          :toc="blog.toc"
          :title="fullTitle"
          :url="`/wissen/${blog.slug}`"
        />
      </div>
    </BexoSection>

    <section
      class="relative box-border w-full min-w-0 max-w-full overflow-hidden rounded-t-[40px]"
    >
      <NuxtImg
        v-if="cta.bgImage"
        :src="cta.bgImage"
        class="absolute inset-0 h-full w-full object-cover object-top"
        alt=""
        sizes="100vw"
      />
      <div class="absolute inset-0 bg-[#0e2138]/55" aria-hidden="true"></div>
      <div class="max-w-xl relative mx-auto w-full px-5 py-10 sm:px-6 sm:py-12">
        <h2
          class="break-words text-xl font-semibold leading-snug text-white sm:text-2xl"
        >
          {{ cta.heading }}
        </h2>
        <SafeHtml
          :html="cta.body"
          class="mt-4 break-words text-sm leading-relaxed text-white sm:text-base"
        />
        <a :href="cta.buttonHref" class="bexo-btn-primary bexo-btn-block mt-6">
          {{ cta.buttonLabel }}
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .blog-body :deep(.text-\[18px\]),
  .blog-body :deep(.text-\[16px\]) {
    font-size: 0.9375rem;
    line-height: 1.625;
  }
  .blog-body :deep(.text-\[20px\]) {
    font-size: 1rem;
    line-height: 1.5;
  }
  .blog-body :deep(.text-\[24px\]),
  .blog-body :deep(.text-\[28px\]),
  .blog-body :deep(.text-\[40px\]) {
    font-size: 1.25rem;
    line-height: 1.35;
  }
  @media (min-width: 640px) {
    .blog-body :deep(.text-\[18px\]),
    .blog-body :deep(.text-\[16px\]) {
      font-size: 1rem;
    }
    .blog-body :deep(.text-\[24px\]) {
      font-size: 1.375rem;
    }
    .blog-body :deep(.text-\[28px\]) {
      font-size: 1.5rem;
    }
  }
</style>
