/** Filter chip labels on `/wissen` — must match `IBlog.category` values (except "Alle"). */
export const WISSEN_FILTER_CHIPS = [
  "Alle",
  "KI & GEO",
  "Local SEO",
  "SEO für KMU",
  "Treuhand-spezifisch",
  "LinkedIn & Personal Branding",
] as const

export type WissenFilterChip = (typeof WISSEN_FILTER_CHIPS)[number]

export type WissenCategoryFilter = Exclude<WissenFilterChip, "Alle">

/** Category sections shown on the "Alle" view — `filter` is the chip activated by "Mehr anzeigen". */
export interface IWissenCategorySection {
  label: string
  filter: WissenCategoryFilter
}

export const WISSEN_CATEGORY_SECTIONS: IWissenCategorySection[] = [
  { label: "KI & GEO", filter: "KI & GEO" },
  { label: "Local SEO", filter: "Local SEO" },
  { label: "SEO für KMU", filter: "SEO für KMU" },
  { label: "Treuhand-spezifisch", filter: "Treuhand-spezifisch" },
  {
    label: "LinkedIn & Personal Branding",
    filter: "LinkedIn & Personal Branding",
  },
]

export const WISSEN_LIST_PAGE_SIZE = 9
/**
 * Two full desktop card rows. Articles beyond this stay crawlable through the
 * category link rendered by `getWissenFilterPath`.
 */
export const WISSEN_SECTION_PREVIEW_SIZE = 6

/** URL slugs for the `?kategorie=` views so every category is a real, crawlable link. */
export const WISSEN_CATEGORY_SLUGS: Record<WissenCategoryFilter, string> = {
  "KI & GEO": "ki-geo",
  "Local SEO": "local-seo",
  "SEO für KMU": "seo-fuer-kmu",
  "Treuhand-spezifisch": "treuhand-spezifisch",
  "LinkedIn & Personal Branding": "linkedin-personal-branding",
}

export function getWissenCategoryBySlug(
  slug: string,
): WissenCategoryFilter | null {
  for (const [filter, categorySlug] of Object.entries(WISSEN_CATEGORY_SLUGS)) {
    if (categorySlug === slug) return filter as WissenCategoryFilter
  }
  return null
}

/** Path for a filter chip — "Alle" is the canonical `/wissen` page. */
export function getWissenFilterPath(chip: WissenFilterChip): string {
  if (chip === "Alle") return "/wissen"
  return `/wissen?kategorie=${WISSEN_CATEGORY_SLUGS[chip]}`
}
