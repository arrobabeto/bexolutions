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

  if (!config.brevoApiKey || !config.brevoFromEmail || !config.brevoToEmail) {
    throw createError({
      statusCode: 500,
      statusMessage: "Email service is not configured",
    })
  }

  const body: Record<string, unknown> = {
    sender: {
      email: config.brevoFromEmail,
      name: config.brevoFromName || "Bexolutions",
    },
    to: [{ email: config.brevoToEmail }],
    subject: payload.subject,
    htmlContent: payload.html,
  }

  if (payload.replyTo) {
    body.replyTo = { email: payload.replyTo }
  }

  try {
    const response = await $fetch.raw("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": config.brevoApiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body,
      ignoreResponseError: true,
    })

    if (response.status >= 400) {
      console.error("Brevo error:", response.status, response._data)
      throw createError({
        statusCode: 502,
        statusMessage: "Failed to send email",
      })
    }
  } catch (error) {
    if (error && typeof error === "object" && "statusCode" in error) {
      throw error
    }

    console.error("Brevo request failed:", error)
    throw createError({
      statusCode: 502,
      statusMessage: "Failed to send email",
    })
  }
}
