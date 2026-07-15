/**
 * Blog article contract.
 *
 * Every blog rendered by `pages/wissen/[slug].vue` + `components/blog/*` is a
 * plain data object of this shape. Data files live at `data/blog/<slug>.ts` and
 * `export default { … } satisfies Blog`.
 *
 * German-only: all copy is plain `string` (no I18nString). Body content is an
 * ordered, flat array of `BlogBlock`s rendered top-to-bottom by `BlogBlock.vue`.
 */

/** One content unit in the article body. Rendered in order by BlogBlock.vue. */
export type BlogBlock =
  /** Sanitized rich-text HTML (p / strong / em / a / ul / ol / li / table). */
  | { type: "richText"; html: string }
  /** Numbered measure / sub-section: eyebrow ("MASSNAHME 01") + heading + body. */
  | {
      type: "sectionHeading"
      /** Anchor target for the sidebar TOC. */
      id?: string
      /** Small bold label above the heading, e.g. "MASSNAHME 01". */
      eyebrow?: string
      heading: string
      body?: string
    }
  /** Major-part divider heading (a single title between big parts). */
  | { type: "sectionTitle"; id?: string; title: string }
  /** Standalone thin horizontal rule. */
  | { type: "divider" }
  /** Data table. `rows[i].length` should match `headers.length` (guarded at render). */
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  /** Bulleted (default) or numbered list. */
  | { type: "list"; ordered?: boolean; items: string[] }
  /** Highlighted box. `navy` = dark #0e2138 / white text; `highlight` = #bde0fe. */
  | {
      type: "callout"
      variant?: "navy" | "highlight"
      title?: string
      body: string
    }

export interface IBlogTocEntry {
  /** Matches a `sectionHeading`/`sectionTitle` block `id`. */
  id: string
  label: string
}

export interface IBlogAuthor {
  name: string
  bio: string
}

export interface IBlogCta {
  heading: string
  body: string
  buttonLabel: string
  buttonHref: string
  /** Background image for the billboard band. */
  bgImage?: string
}

export interface IBlogSeo {
  description: string
  ogImage: string
}

export interface IBlog {
  /** URL slug — the article resolves at `/wissen/<slug>`. */
  slug: string
  /** Category label, e.g. "Local SEO". */
  category: string
  /** Pre-formatted reading time, e.g. "9 Min. Lesezeit". */
  readTime: string
  /** Human-facing publish date, e.g. "Juli 2026". */
  date: string
  /** ISO date used only for the Article JSON-LD (e.g. "2026-07-01"). */
  datePublished?: string
  /** H1 title. */
  title: string
  subtitle: string
  tagline: string
  /** Hero image path, e.g. "/images/blog/<slug>/hero.jpg". */
  heroImage: string
  /** Optional audio version; the header icon is decorative when absent. */
  audioUrl?: string
  /** Dark "TL;DR" callout shown between the hero and the article body. */
  tldr: { title: string; body: string }
  /** Sidebar table of contents. */
  toc: IBlogTocEntry[]
  author: IBlogAuthor
  /** Omit to use the default site billboard CTA. */
  cta?: IBlogCta
  seo: IBlogSeo
  /** Ordered article body. */
  blocks: BlogBlock[]
}
