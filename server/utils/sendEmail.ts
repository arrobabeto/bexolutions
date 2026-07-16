import type { H3Event } from "h3"
import { createError } from "h3"
import { useRuntimeConfig } from "#imports"

type FormEmailPayload = {
  subject: string
  html: string
  replyTo?: string
}

export async function sendFormEmail(event: H3Event, payload: FormEmailPayload) {
  const config = useRuntimeConfig(event)

  if (
    !config.sendgridApiKey ||
    !config.sendgridFromEmail ||
    !config.sendgridToEmail
  ) {
    throw createError({
      statusCode: 500,
      statusMessage: "Email service is not configured",
    })
  }

  const body: Record<string, unknown> = {
    personalizations: [{ to: [{ email: config.sendgridToEmail }] }],
    from: {
      email: config.sendgridFromEmail,
      name: config.sendgridFromName || "Bexolutions",
    },
    subject: payload.subject,
    content: [{ type: "text/html", value: payload.html }],
  }

  if (payload.replyTo) {
    body.reply_to = { email: payload.replyTo }
  }

  try {
    const response = await $fetch.raw("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.sendgridApiKey}`,
        "Content-Type": "application/json",
      },
      body,
      ignoreResponseError: true,
    })

    if (response.status >= 400) {
      console.error("SendGrid error:", response.status, response._data)
      throw createError({
        statusCode: 502,
        statusMessage: "Failed to send email",
      })
    }
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) {
      throw error
    }

    console.error("SendGrid request failed:", error)
    throw createError({
      statusCode: 502,
      statusMessage: "Failed to send email",
    })
  }
}
