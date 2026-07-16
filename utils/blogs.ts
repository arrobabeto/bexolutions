import type { IBlog } from "~/types/dto/IBlog"
import type { WissenCategoryFilter } from "~/constants/wissenCategories"

const blogModules = import.meta.glob<{ default: IBlog }>("~/data/blog/*.ts", {
  eager: true,
})

/** All blog articles, newest first (`datePublished` desc). */
export function loadAllBlogs(): IBlog[] {
  return Object.values(blogModules)
    .map((m) => m.default)
    .sort((a, b) => {
      const da = a.datePublished ?? "1970-01-01"
      const db = b.datePublished ?? "1970-01-01"
      return db.localeCompare(da)
    })
}

export function filterBlogsByCategory(
  blogs: IBlog[],
  category: WissenCategoryFilter,
): IBlog[] {
  return blogs.filter((b) => b.category === category)
}

export function getBlogFeaturedTitle(blog: IBlog): string {
  const title = blog.title.replace(/:\s*$/, "")
  return blog.subtitle ? `${title} — ${blog.subtitle}` : title
}

export function getBlogCardTitle(blog: IBlog): string {
  return getBlogFeaturedTitle(blog)
}

export function getBlogCardMeta(blog: IBlog): string {
  return `${blog.category} · ${blog.readTime}`
}

/** Desktop Wissen card title box: 375px wide, 18px / 25px line-height. */
const BLOG_CANVAS_TITLE_WIDTH = 375
const BLOG_CANVAS_TITLE_FONT = 18
const BLOG_CANVAS_TITLE_LINE = 25
const BLOG_CANVAS_CARD_MIN_HEIGHT = 268

/** Approximate wrapped title lines for desktop canvas cards. */
export function getBlogCardTitleLines(title: string): number {
  const charWidth = BLOG_CANVAS_TITLE_FONT * 0.55
  const spaceWidth = BLOG_CANVAS_TITLE_FONT * 0.3
  const words = title.trim().split(/\s+/).filter(Boolean)
  if (words.length === 0) return 1

  let lines = 1
  let lineWidth = 0
  for (const word of words) {
    const wordWidth = word.length * charWidth
    const needed =
      lineWidth === 0 ? wordWidth : lineWidth + spaceWidth + wordWidth
    if (needed > BLOG_CANVAS_TITLE_WIDTH && lineWidth > 0) {
      lines++
      lineWidth = wordWidth
    } else {
      lineWidth = needed
    }
  }
  return Math.max(1, Math.min(lines, 8))
}

/** Natural height of a desktop Wissen card for the given blog title. */
export function getBlogCanvasCardHeight(blog: IBlog): number {
  const lines = getBlogCardTitleLines(getBlogCardTitle(blog))
  // image + title top gap + title + meta gap + meta + bottom pad
  const height = 137 + 20 + lines * BLOG_CANVAS_TITLE_LINE + 12 + 21 + 18
  return Math.max(BLOG_CANVAS_CARD_MIN_HEIGHT, height)
}

/** Equal row height = tallest card in the row. */
export function getBlogCanvasRowHeight(blogs: IBlog[]): number {
  if (blogs.length === 0) return BLOG_CANVAS_CARD_MIN_HEIGHT
  return Math.max(...blogs.map(getBlogCanvasCardHeight))
}

export function getBlogExcerpt(blog: IBlog): string {
  return blog.seo.description || blog.tagline
}
