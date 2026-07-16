/**
 * Upload optimized blog audio to Vercel Blob.
 *
 * Requires BLOB_READ_WRITE_TOKEN in the environment (from a Vercel Blob store).
 *
 * Usage:
 *   BLOB_READ_WRITE_TOKEN=… node scripts/upload-blog-audio.mjs <local-file> <blob-pathname>
 *
 * Example:
 *   node scripts/upload-blog-audio.mjs public/audio/blog/ki-suchen-ohne-klick-kmu.m4a blog/ki-suchen-ohne-klick-kmu.m4a
 */
import { readFileSync } from "node:fs"
import { put } from "@vercel/blob"

const [filePath, pathname] = process.argv.slice(2)

if (!filePath || !pathname) {
  console.error(
    "Usage: node scripts/upload-blog-audio.mjs <local-file> <blob-pathname>",
  )
  process.exit(1)
}

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error("Missing BLOB_READ_WRITE_TOKEN in environment.")
  process.exit(1)
}

const body = readFileSync(filePath)
const blob = await put(pathname, body, {
  access: "public",
  contentType: "audio/mp4",
  addRandomSuffix: false,
  allowOverwrite: true,
})

console.log(blob.url)
