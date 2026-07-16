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

export function getBlogExcerpt(blog: IBlog): string {
  return blog.seo.description || blog.tagline
}
