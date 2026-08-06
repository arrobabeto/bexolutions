import { computed, reactive, watch } from "vue"
import { useRoute } from "#app"
import type { IBlog } from "~/types/dto/IBlog"
import {
  WISSEN_CATEGORY_SECTIONS,
  WISSEN_LIST_PAGE_SIZE,
  WISSEN_SECTION_PREVIEW_SIZE,
  getWissenCategoryBySlug,
  type WissenCategoryFilter,
  type WissenFilterChip,
} from "~/constants/wissenCategories"
import { filterBlogsByCategory } from "~/utils/blogs"
import { loadAllBlogs } from "~/utils/loadBlogs"

export function useWissenListing() {
  const allBlogs = loadAllBlogs()
  const route = useRoute()
  const state = reactive({
    visibleCount: WISSEN_LIST_PAGE_SIZE,
  })

  /** Driven by `?kategorie=` so every category view is server-rendered and crawlable. */
  const selectedFilter = computed<WissenFilterChip>(() => {
    const raw = route.query["kategorie"]
    const slug = Array.isArray(raw) ? raw[0] : raw
    if (typeof slug !== "string" || slug === "") return "Alle"
    return getWissenCategoryBySlug(slug) ?? "Alle"
  })

  watch(selectedFilter, () => {
    state.visibleCount = WISSEN_LIST_PAGE_SIZE
  })

  const isAlleSelected = computed(() => selectedFilter.value === "Alle")

  const filteredBlogs = computed(() => {
    if (isAlleSelected.value) return allBlogs
    return filterBlogsByCategory(
      allBlogs,
      selectedFilter.value as WissenCategoryFilter,
    )
  })

  const featuredBlog = computed(() => filteredBlogs.value[0] ?? null)

  /** Paginated list when a category filter is active (excludes the featured article). */
  const filteredListBlogs = computed(() => {
    const rest = filteredBlogs.value.slice(1)
    return rest.slice(0, state.visibleCount)
  })

  const hasMore = computed(
    () => filteredBlogs.value.length > 1 + state.visibleCount,
  )

  const remainingCount = computed(() =>
    Math.max(0, filteredBlogs.value.length - 1 - state.visibleCount),
  )

  function loadMore() {
    state.visibleCount += WISSEN_LIST_PAGE_SIZE
  }

  function blogsForSection(filter: WissenCategoryFilter): IBlog[] {
    const excludeSlug = isAlleSelected.value
      ? featuredBlog.value?.slug
      : undefined
    return filterBlogsByCategory(allBlogs, filter)
      .filter((b) => b.slug !== excludeSlug)
      .slice(0, WISSEN_SECTION_PREVIEW_SIZE)
  }

  const visibleCategorySections = computed(() =>
    WISSEN_CATEGORY_SECTIONS.filter(
      (s) => blogsForSection(s.filter).length > 0,
    ),
  )

  return {
    allBlogs,
    selectedFilter,
    isAlleSelected,
    filteredBlogs,
    featuredBlog,
    filteredListBlogs,
    hasMore,
    remainingCount,
    visibleCategorySections,
    loadMore,
    blogsForSection,
  }
}
