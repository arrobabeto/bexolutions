import { defineEventHandler, getQuery } from "h3"
import type { IPage } from "~/types/dto/IPage"
import {
  CREATE_PAGES_TABLE_SQL,
  CREATE_POSTS_TABLE_SQL,
  CREATE_SETTINGS_TABLE_SQL,
} from "~/server/utils/cmsSchema"

type QueryValue = string | string[] | null | undefined
type QueryBindings = Record<string, QueryValue>
const ORBITYPE_API_KEYS_URL = "https://app.orbitype.com/settings/api-keys"

function buildWelcomePage(): IPage {
  const sqlKeyConfigured = hasSqlKeyConfigured()

  return {
    id: "orbitype-headless-cms-template-welcome",
    title: {
      en: "Orbitype Headless CMS Template",
      de: "Orbitype Headless CMS Template",
    },
    slug: "home",
    img: "",
    keywords: ["orbitype", "headless", "cms", "template"],
    lead: {
      en: "A production-ready starter for Orbitype-powered websites.",
      de: "A production-ready starter for Orbitype-powered websites.",
    },
    sections: [
      {
        _orbi: { component: "SectionWelcome" },
        title: {
          en: "Welcome to the Orbitype Headless CMS Template",
          de: "Welcome to the Orbitype Headless CMS Template",
        },
        lead: welcomePageLead(),
        capabilities: welcomeCapabilities(),
        steps: welcomePageSteps(sqlKeyConfigured),
        hasSqlKeyConfigured: sqlKeyConfigured,
        apiKeysUrl: ORBITYPE_API_KEYS_URL,
      },
    ],
    head: {},
    created_at: new Date(0).toISOString(),
    updated_at: new Date(0).toISOString(),
  }
}

function welcomePageLead() {
  return {
    en: "Start here after cloning. This starter renders the welcome page until Orbitype is connected and serving CMS content.",
    de: "Start here after cloning. This starter renders the welcome page until Orbitype is connected and serving CMS content.",
  }
}

function welcomePageSteps(sqlKeyConfigured: boolean) {
  return [
    {
      title: { en: "Install dependencies" },
      text: { en: "Install dependencies exactly as this starter expects." },
      code: "npm ci\nnpm run setup",
    },
    {
      title: { en: "Create an Orbitype workspace" },
      text: {
        en: "Create a new Orbitype workspace for this cloned project, and make sure you are in the correct workspace and database before installing schema.",
      },
    },
    {
      title: { en: "Create a SQL API key in Orbitype" },
      text: {
        en: "Create or copy your SQL API key from Orbitype settings: https://app.orbitype.com/settings/api-keys",
      },
    },
    {
      title: { en: "Add SQL API credentials to this repo" },
      text: {
        en: sqlKeyConfigured
          ? "Your SQL key is already detected in .env. Continue with the wizard."
          : "Add ORBITYPE_API_SQL_URL and ORBITYPE_API_SQL_KEY to .env. The wizard is visible only when the key is present.",
      },
      code: 'ORBITYPE_API_SQL_URL="https://core.orbitype.com/api/sql/v1"\nORBITYPE_API_SQL_KEY="your-api-key"',
    },
    {
      title: { en: "Start the app" },
      text: {
        en: "Run Nuxt so you can use the guided schema installer on the welcome page.",
      },
      code: "npm run dev",
    },
    {
      title: { en: "Use the guided schema installer" },
      kind: "wizard",
      text: {
        en: "Choose Install all tables (recommended) or install tables one by one (pages, posts, settings).",
      },
    },
    {
      title: { en: "Confirm and execute safely" },
      text: {
        en: "The installer asks for confirmation before execution and then shows per-table success or error results.",
      },
    },
    {
      title: { en: "Manual SQL (optional fallback)" },
      text: {
        en: "If you prefer manual setup, run these SQL statements directly in your workspace.",
      },
      code: `${CREATE_PAGES_TABLE_SQL}\n\n${CREATE_POSTS_TABLE_SQL}\n\n${CREATE_SETTINGS_TABLE_SQL}`,
    },
  ]
}

function welcomeCapabilities() {
  return [
    {
      title: { en: "SEO & metadata" },
      text: {
        en: "Rich useHead setup with canonical URLs, Open Graph, Twitter cards, and JSON-LD on dynamic pages.",
      },
      badge: "SEO",
    },
    {
      title: { en: "Sitemap & robots" },
      text: {
        en: "Built-in Nitro routes for robots.txt, sitemap index, and split pages/posts sitemap files.",
      },
      badge: "Nitro",
    },
    {
      title: { en: "Dynamic CMS pages" },
      text: {
        en: "Catch-all slug routing with section rendering and a fallback welcome page when API data is unavailable.",
      },
      badge: "Pages",
    },
    {
      title: { en: "Posts & comments" },
      text: {
        en: "Ready-made post listing, post detail route, and comments API examples for content-heavy projects.",
      },
      badge: "Content",
    },
    {
      title: { en: "Section system" },
      text: {
        en: "Composable page sections with component auto-discovery for scalable CMS-driven page building.",
      },
      badge: "UI",
    },
    {
      title: { en: "I18n ready" },
      text: {
        en: "English and German locale support with translation helper utilities for CMS and UI strings.",
      },
      badge: "i18n",
    },
    {
      title: { en: "Cookie consent & GTM" },
      text: {
        en: "Consent banner with persisted choices plus Google Tag Manager and page-view tracking hooks.",
      },
      badge: "Analytics",
    },
    {
      title: { en: "API & redirects" },
      text: {
        en: "Structured server/api endpoints for pages, posts, comments, contacts, and route redirects middleware.",
      },
      badge: "Backend",
    },
  ]
}

function queryValueMatches(value: QueryValue, expected: string) {
  return Array.isArray(value) ? value.includes(expected) : value === expected
}

function getFallbackPage(bindings: QueryBindings) {
  const welcomePage = buildWelcomePage()
  const id = bindings["id"]
  const slug = bindings["slug"]

  if (id && !queryValueMatches(id, welcomePage.id)) return null
  if (slug && !queryValueMatches(slug, welcomePage.slug)) return null

  return id || slug ? welcomePage : [welcomePage]
}

function isMockModeEnabled() {
  const rawValue = import.meta.env.ORBITYPE_MOCK
  if (!rawValue) return false
  const normalizedValue = String(rawValue).trim().toLowerCase()
  return (
    normalizedValue === "true" ||
    normalizedValue === "1" ||
    normalizedValue === "yes"
  )
}

function hasSqlKeyConfigured() {
  const raw = import.meta.env.ORBITYPE_API_SQL_KEY
  if (!raw) return false
  const normalized = String(raw).trim()
  if (!normalized) return false
  if (normalized.toLowerCase() === "your-api-key") return false
  return true
}

export default defineEventHandler(async (event) => {
  const bindings = getQuery(event) as QueryBindings

  if (isMockModeEnabled()) return getFallbackPage(bindings)

  if (
    !import.meta.env.ORBITYPE_API_SQL_URL ||
    !import.meta.env.ORBITYPE_API_SQL_KEY
  )
    return getFallbackPage(bindings)

  let sql = "SELECT * FROM pages"
  if (bindings.id) sql += " WHERE id = :id"
  if (bindings.slug) sql += " WHERE slug = :slug"

  let rows: IPage[]
  try {
    rows = await $fetch(import.meta.env.ORBITYPE_API_SQL_URL, {
      method: "POST",
      headers: { "X-API-KEY": import.meta.env.ORBITYPE_API_SQL_KEY },
      body: { sql, bindings },
    })
  } catch {
    return getFallbackPage(bindings)
  }

  if (!Array.isArray(rows) || rows.length === 0)
    return getFallbackPage(bindings)

  return bindings.id || bindings.slug ? rows[0] : rows
})
