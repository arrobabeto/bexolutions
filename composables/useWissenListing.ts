import { computed, reactive, toRef } from "vue"
import type { IBlog } from "~/types/dto/IBlog"
import {
  WISSEN_CATEGORY_SECTIONS,
  WISSEN_LIST_PAGE_SIZE,
  WISSEN_SECTION_PREVIEW_SIZE,
  type WissenCategoryFilter,
  type WissenFilterChip,
} from "~/constants/wissenCategories"
import { filterBlogsByCategory, loadAllBlogs } from "~/utils/blogs"

export function useWissenListing() {
  const allBlogs = loadAllBlogs()
  const state = reactive({
    selectedFilter: "Alle" as WissenFilterChip,
    visibleCount: WISSEN_LIST_PAGE_SIZE,
  })

  const isAlleSelected = computed(() => state.selectedFilter === "Alle")

  const filteredBlogs = computed(() => {
    if (isAlleSelected.value) return allBlogs
    return filterBlogsByCategory(
      allBlogs,
      state.selectedFilter as WissenCategoryFilter,
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

  function selectFilter(chip: WissenFilterChip) {
    state.selectedFilter = chip
    state.visibleCount = WISSEN_LIST_PAGE_SIZE
  }

  function loadMore() {
    state.visibleCount += WISSEN_LIST_PAGE_SIZE
  }

  function blogsForSection(filter: WissenCategoryFilter): IBlog[] {
    const excludeSlug =
      state.selectedFilter === "Alle" ? featuredBlog.value?.slug : undefined
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
    selectedFilter: toRef(state, "selectedFilter"),
    isAlleSelected,
    filteredBlogs,
    featuredBlog,
    filteredListBlogs,
    hasMore,
    remainingCount,
    visibleCategorySections,
    selectFilter,
    loadMore,
    blogsForSection,
  }
}
