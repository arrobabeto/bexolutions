---
name: upload-blog
description: Turn a supplied blog document (pasted text, .md, .docx, .pdf, or a Google Doc link) into a Bexolutions blog article — a typed data file at data/blog/<slug>.ts that renders through the shared blog template at /wissen/<slug>. Use when the user wants to publish, add, or upload a new blog post/article from a written document.
---

# Upload Blog

Convert a written document into a **blog data file** that the shared template renders. You are the manual/AI bridge until an automated parser exists — your job is to read the document, map it onto the `IBlog` contract, and write one `data/blog/<slug>.ts` file. The template, route, and styling already exist; **do not build UI** — only produce data.

## How the blog system works (read first)

- **Contract:** `types/dto/IBlog.d.ts` — the `IBlog` interface + `BlogBlock` union (the block types are a `type` alias, no `I` prefix). This is the single source of truth for the shape you must produce.
- **Route:** `pages/wissen/[slug].vue` — globs every `data/blog/*.ts`, keys them by their `slug` field, and renders `<BlogArticle :blog="blog" />`. Adding a data file is all it takes to publish; no registration step.
- **Rendering:** `components/blog/BlogArticle.vue` (layout + nav/CTA/footer), `BlogBlock.vue` (renders each block), `BlogSidebar.vue` (author, share, TOC).
- **Worked example:** `data/blog/google-business-profile-optimieren.ts` — the reference to copy the structure from. Read it before writing a new file.

The site is **German-only**. All copy stays German; do not translate or add English.

## Steps

### 1. Ingest the document

Accept any of: pasted text in the prompt, a local file path (`.md`, `.txt`, `.docx`, `.pdf`), or a Google Doc / URL.

- `.md` / `.txt`: read directly.
- `.docx`: extract text (e.g. `unzip -p file.docx word/document.xml | sed 's/<[^>]*>//g'`, or a pandoc/textutil conversion if available).
- `.pdf`: use `pdftotext` if available, else read via the PDF reader.
- Google Doc / URL: fetch it (WebFetch) or ask the user to paste/export the content.
  If the input is ambiguous or unreadable, ask the user to paste the text.

### 2. Extract the header metadata

| Field           | Source / rule                                                                                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`         | Main headline (the part before the colon in the sample, e.g. `"Google Business Profile optimieren:"`).                                                                                                    |
| `subtitle`      | Secondary headline / deck.                                                                                                                                                                                |
| `tagline`       | One-line summary under the title.                                                                                                                                                                         |
| `category`      | Topic label (e.g. `"Local SEO"`, `"SEO & Google"`, `"KI-Sichtbarkeit"`) — match the chips used on `/wissen` when possible.                                                                                |
| `readTime`      | If stated, use it. Else estimate from word count at ~200 wpm → `"N Min. Lesezeit"`.                                                                                                                       |
| `date`          | Human display like `"Juli 2026"` (German month).                                                                                                                                                          |
| `datePublished` | ISO date for JSON-LD, e.g. `"2026-07-01"`. If only a month is known, use the 1st.                                                                                                                         |
| `author`        | `{ name, bio }` — the `bio` is the full sentence rendered after "Autor:" in the sidebar. Default to Balaram Furrer's bio (see sample) if none supplied.                                                   |
| `tldr`          | `{ title, body }` — a "TL;DR"/summary box. If the document has no summary, write one 2–4 sentence recap; keep the title `"TL;DR — Das Wichtigste in 60 Sekunden"` unless the document names it otherwise. |
| `heroImage`     | `"/images/blog/<slug>/hero.jpg"` (see step 5).                                                                                                                                                            |
| `seo`           | `{ description, ogImage }`. `description` ≤ 160 chars from the intro/tagline; `ogImage` = the hero path.                                                                                                  |
| `audioUrl`      | Only if an audio version is supplied; otherwise omit (the header icon stays decorative).                                                                                                                  |

### 3. Build the table of contents

One `toc` entry per **major section** (`sectionTitle` block). `id` = slugified heading (lowercase, ASCII, hyphens; ä→ae, ö→oe, ü→ue, ß→ss). Each `toc[i].id` **must** match the `id` on its `sectionTitle`/`sectionHeading` block so the sidebar anchors work.

### 4. Map the body to `blocks[]`

Walk the document top to bottom and emit an ordered, flat `BlogBlock[]`. Insert a `{ type: "divider" }` between major sections (matches the design's horizontal rules).

| Document element                                                                                                               | Block                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Major section heading (a TOC-level heading)                                                                                    | `{ type: "sectionTitle", id, title }`                                                                                                                                 |
| Numbered step / measure with an eyebrow like "MASSNAHME 01", plus a sub-heading and optional one-liner (e.g. "Zeitaufwand: …") | `{ type: "sectionHeading", id?, eyebrow, heading, body? }`                                                                                                            |
| Paragraph(s) / inline-formatted prose                                                                                          | `{ type: "richText", html }` — wrap each paragraph in `<p>…</p>`; allowed inline tags: `<strong>`, `<em>`, `<a href>`. Combine consecutive paragraphs into one block. |
| Bulleted / numbered list                                                                                                       | `{ type: "list", items, ordered? }`                                                                                                                                   |
| Table                                                                                                                          | `{ type: "table", headers, rows, caption? }` — `rows[i].length` must equal `headers.length`.                                                                          |
| Highlighted box / callout / blockquote                                                                                         | `{ type: "callout", variant, title?, body }` — `variant: "highlight"` (light blue, for tips/"Neu 2026" notes) or `"navy"` (dark, for emphasis).                       |

Rules:

- **Only** the tags listed above go in `richText` HTML — `sanitize-html` strips `<h1>`/`<h2>`/`<img>`/`<script>`/etc. Real headings become `sectionTitle`/`sectionHeading` blocks; images are not supported inside rich text.
- Keep German typography from the source (e.g. « » quotes, non-breaking spaces around %, `—` dashes).
- Use `<br>` for intentional line breaks inside a paragraph (project convention).

### 5. Slug + hero image

- `slug` = kebab-case of the title (same rule as step 3 ids), e.g. `"google-business-profile-optimieren"`. This is also the URL: `/wissen/<slug>`.
- Create `public/images/blog/<slug>/` and place the supplied hero at `hero.jpg`. If none is supplied, tell the user the hero is missing and either leave the folder empty (the template shows a light placeholder box when `heroImage` resolves to nothing) or reuse a suitable existing image — but flag it; don't invent a stock URL.

### 6. Write the data file

Create `data/blog/<slug>.ts`:

```ts
import type { IBlog } from "~/types/dto/IBlog"

export default {
  slug: "…",
  // …all header fields…
  toc: [
    /* … */
  ],
  blocks: [
    /* … */
  ],
} satisfies IBlog
```

Match the formatting of the sample file exactly (2-space indent, double quotes, `satisfies IBlog`). `satisfies` gives full type-checking — resolve any type error before finishing.

### 7. Wire the listing (optional)

If the user wants the article surfaced on `/wissen`, add/point a card or the featured slot in `pages/wissen/index.vue` to `/wissen/<slug>` (plain `<a :href>`). Ask first if unsure.

### 8. Verify

1. `npm run typecheck` — must pass (catches contract mismatches).
2. `npm run dev -o`, open `http://localhost:3000/wissen/<slug>` — confirm header, hero, TL;DR, two-column body with sticky TOC, tables, callouts, CTA and footer render.
3. `npm run eslint` — the repo runs `--max-warnings=0`.
   Report the published URL (`/wissen/<slug>`) and anything the user still needs to supply (e.g. a real hero image).

## Conventions checklist

- German content only; Plus Jakarta Sans is already loaded by the template.
- `richText` HTML limited to `<p>`/`<strong>`/`<em>`/`<a>`/`<br>`; headings & images become their own blocks.
- Every `toc.id` matches a block `id`.
- Table rows are rectangular (`rows[i].length === headers.length`).
- One data file per article under `data/blog/`; the filename should equal the slug.
