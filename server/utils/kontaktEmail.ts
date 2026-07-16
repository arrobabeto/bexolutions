import type { IKontaktForm } from "~/types/dto/IKontaktForm"
import { escapeHtml } from "~/server/utils/escapeHtml"

function row(label: string, value: string) {
  if (!value.trim()) return ""
  return `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 12px">${escapeHtml(value)}</td></tr>`
}

export function buildKontaktEmailHtml(form: IKontaktForm) {
  const rows = [
    row("Ansprache", form.salutation),
    row("Vorname", form.firstName),
    row("Nachname", form.lastName),
    row("E-Mail", form.email),
    row("Telefon", form.phone),
    row("Unternehmen", form.company),
    row("Thema", form.topic),
    row("Nachricht", form.message),
  ]
    .filter(Boolean)
    .join("")

  return `<!DOCTYPE html><html><body style="font-family:sans-serif;color:#0e2138"><h2 style="margin:0 0 16px">Neue Kontaktanfrage</h2><table style="border-collapse:collapse;width:100%;max-width:640px">${rows}</table></body></html>`
}
