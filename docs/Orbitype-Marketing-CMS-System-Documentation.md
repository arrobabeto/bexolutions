# Orbitype Marketing CMS System Documentation

Agent/reference guide for this Nuxt + Orbitype marketing website. Full Cursor rule: [`.cursor/rules/10-architecture/03-orbitype-cms.mdc`](../.cursor/rules/10-architecture/03-orbitype-cms.mdc). Official auth: [API Authentication](https://www.orbitype.com/docs/oQSPNY).

## System flow

```text
Figma → Figma MCP → Cursor (Vue sections) → Orbitype MCP (SQL) → PostgreSQL sections JSON
                                              ↓
                                    Nuxt server/api → AnySection.vue → browser
```

1. Design pages/sections in Figma.
2. In Cursor: inspect via Figma MCP, implement `components/sections/Section*.vue`, write `sections` JSON with Orbitype MCP (`sql_crud_execute`).
3. In Orbitype Intelligence: edit content, review pages, manage CMS data.

## Request flow

1. User hits a URL (`/`, `/posts/...`, …).
2. Nuxt `pages/*` handles the route.
3. Page calls `server/api/*`.
4. Handler POSTs SQL to `ORBITYPE_API_SQL_URL` with `X-API-KEY: ORBITYPE_API_SQL_KEY`.
5. Row returns with a `sections` JSON array.
6. `components/sections/AnySection.vue` maps `_orbi.component` → `components/sections/*.vue`.

Welcome/onboarding (`SectionWelcome`) appears when `ORBITYPE_MOCK=true`, SQL env is missing, the API errors, or there are no CMS rows.

## Multiple sites / connectors

- One Orbitype API key = one connector.
- Same section system; different keys / MCP server entries per site or environment.
- Configure `.cursor/mcp.json` (local, gitignored) from `.cursor/mcp.json.example`.

## Sections contract

Put a human-readable field first (`title`, `name`, `label` — not `img`). `_orbi` must be last.

```json
{
  "title": { "en": "...", "de": "..." },
  "content": { "en": "...", "de": "..." },
  "_orbi": { "component": "SectionFeatureCallout" }
}
```

`_orbi.component` must match the Vue filename. Localized fields use `en` / `de` with `useTranslate()`.

## Cursor MCP setup

Project file: `.cursor/mcp.json` (secrets; gitignored). Example: `.cursor/mcp.json.example`.

```json
{
  "mcpServers": {
    "orbitype-sql-prod": {
      "url": "https://core.orbitype.com/api/mcp/v1",
      "headers": { "X-API-KEY": "${env:ORBITYPE_SQL_API_KEY_PROD}" }
    },
    "orbitype-s3-public-prod": {
      "url": "https://core.orbitype.com/api/mcp/v1",
      "headers": { "X-API-KEY": "${env:ORBITYPE_S3_PUBLIC_API_KEY_PROD}" }
    },
    "orbitype-s3-private-prod": {
      "url": "https://core.orbitype.com/api/mcp/v1",
      "headers": { "X-API-KEY": "${env:ORBITYPE_S3_PRIVATE_API_KEY_PROD}" }
    }
  }
}
```

**Every session:** `orbitype_get_context` → `sql_readonly_query` (reads) → `sql_crud_execute` (writes). Confirm connector before mutating data.

### MCP tools

| Area    | Tools                                                        |
| ------- | ------------------------------------------------------------ |
| Context | `orbitype_get_context`                                       |
| SQL     | `sql_readonly_query`, `sql_crud_execute`                     |
| S3      | `s3_list`, `s3_put`, `s3_delete`, `s3_copy`, `s3_signed_url` |

## Codebase map

| Area             | Path                                                   |
| ---------------- | ------------------------------------------------------ |
| Generic pages    | `pages/[[slug]].vue` → `server/api/pages/index.get.ts` |
| Posts            | `pages/posts/*` → `server/api/posts/*`                 |
| Settings         | `server/api/settings/index.get.ts`                     |
| Section renderer | `components/sections/AnySection.vue`                   |
| Schema SQL       | `server/utils/cmsSchema.ts`                            |
| Schema installer | `server/api/setup/install-schema.post.ts`              |

## Safe content workflow

1. `sql_readonly_query` — read current row.
2. Backup `sections` JSON.
3. `sql_crud_execute` — apply change.
4. Re-read row; validate JSON shape.
5. Verify in browser and in Orbitype.

## SQL examples

Append a section:

```sql
UPDATE pages
SET sections = (
  COALESCE(sections, '[]'::json)::jsonb
  || jsonb_build_array(
    jsonb_build_object(
      'title', jsonb_build_object('en', '<p>Title</p>', 'de', '<p>Titel</p>'),
      'content', jsonb_build_object('en', '<p>Body</p>', 'de', '<p>Text</p>'),
      'variant', 'highlight',
      '_orbi', jsonb_build_object('component', 'SectionFeatureCallout')
    )
  )
)::json
WHERE slug = 'home';
```

Insert at index 1:

```sql
UPDATE pages
SET sections = jsonb_insert(
  COALESCE(sections, '[]'::json)::jsonb,
  '{1}',
  jsonb_build_object(
    'title', jsonb_build_object('en', 'Inserted', 'de', 'Eingefuegt'),
    '_orbi', jsonb_build_object('component', 'SectionFeatureCallout')
  ),
  false
)::json
WHERE slug = 'home';
```

Quick checks:

```sql
SELECT id, slug, updated_at FROM pages ORDER BY updated_at DESC;

SELECT section->'_orbi'->>'component' AS component_name
FROM pages, json_array_elements(sections) AS section
WHERE slug = 'home';
```

## Pitfalls

- Wrong connector — always `orbitype_get_context` first.
- `_orbi` / `img` first — CMS list labels become useless.
- Component name mismatch vs Vue filename.
- Invalid `sections` (not an array of objects).
- Missing `en` / `de` or required Vue props.
