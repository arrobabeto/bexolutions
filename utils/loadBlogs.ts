import type { IBlog } from "~/types/dto/IBlog"

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
