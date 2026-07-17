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
export const WISSEN_SECTION_PREVIEW_SIZE = 3
