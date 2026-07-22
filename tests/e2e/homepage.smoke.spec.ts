import { expect, test } from "@playwright/test"

test.describe("Homepage smoke", () => {
  test("renders the Bexolutions home at / and /de and toggles the FAQ", async ({
    page,
  }) => {
    await page.goto("/")

    // Hero of the Bexolutions design
    await expect(page.getByText("Better Marketing Systems.")).toBeVisible()
    await expect(page.getByAltText("BEXOLUTIONS").first()).toBeVisible()

    const faqHeading = page.getByRole("heading", {
      name: /Was KMU-Inhaber uns am häufigsten fragen\./,
    })
    await expect(faqHeading).toBeVisible()

    // The same home is served under the /de locale prefix
    await page.goto("/de")
    await expect(page.getByText("Better Marketing Systems.")).toBeVisible()

    // FAQ native <details> accordion: open by default, clicking the summary collapses it
    const firstFaq = page.locator("details.faq-item").first()
    await expect(firstFaq).toHaveAttribute("open", "")
    await expect(
      page.getByText(/3-5 Werktagen nach Auftragserteilung/),
    ).toBeVisible()

    await firstFaq.locator("summary").click()
    await expect(firstFaq).not.toHaveAttribute("open", "")
  })

  test("serves robots, sitemaps, and llms routes", async ({
    page,
    request,
  }) => {
    await page.goto("/")

    const robotsResponse = await request.get("/robots.txt")
    expect(robotsResponse.ok()).toBeTruthy()
    const robotsBody = await robotsResponse.text()
    expect(robotsBody).toContain("Sitemap:")
    expect(robotsBody).toContain("LLMs-Txt:")

    const sitemapResponse = await request.get("/sitemap.xml")
    expect(sitemapResponse.ok()).toBeTruthy()
    const sitemapBody = await sitemapResponse.text()
    expect(sitemapBody).toContain("<urlset")
    expect(sitemapBody).toContain("<loc>")
    expect(sitemapBody).toContain("/wissen")

    const llmsResponse = await request.get("/llms.txt")
    expect(llmsResponse.ok()).toBeTruthy()
    const llmsBody = await llmsResponse.text()
    expect(llmsBody).toContain("# Orbitype Headless CMS Template")

    const llmsFullResponse = await request.get("/llms-full.txt")
    expect(llmsFullResponse.ok()).toBeTruthy()
    const llmsFullBody = await llmsFullResponse.text()
    expect(llmsFullBody).toContain("(Full)")
  })
})
