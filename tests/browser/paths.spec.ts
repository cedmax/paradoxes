import { test, expect } from "./fixtures"

for (const id of [
  "start-here",
  "probability-that-feels-wrong",
  "how-numbers-mislead",
  "identity-and-change",
  "try-an-illusion",
]) {
  test(`the ${id} path has a complete onward journey`, async ({ page }) => {
    await page.goto(`/paths/${id}/`)
    await expect(page.locator("main ol a")).toHaveCount(4)
    await page.locator("main ol a").first().click()
    for (let index = 0; index < 4; index++) {
      const navigation = page.locator("[data-reading-path]:visible")
      await expect(navigation).toHaveCount(1)
      await expect(navigation).toContainText(`Step ${index + 1} of 4`)
      expect(await page.locator('link[rel="canonical"]').getAttribute("href")).not.toContain(
        "?",
      )
      if (index < 3) await navigation.getByRole("link", { name: "Next:", exact: false }).click()
      else await expect(navigation).toContainText("reached the end")
    }
    await expect(page.locator("#read-next a")).toHaveCount(3)
  })
}

test("an unknown path cannot select a navigation panel", async ({ page }) => {
  await page.goto("/entries/monty-hall-problem/?path=unknown")
  await expect(page.locator("[data-reading-path]:visible")).toHaveCount(0)
})

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false })
  test("paths and catalogue entries remain navigable", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("#starter-entries a")).toHaveCount(3)
    await expect(page.locator('[data-filter="explained"]')).toBeVisible()
    await page.goto("/entries/monty-hall-problem/?path=start-here")
    await expect(page.locator('[data-reading-path="start-here"]')).toBeVisible()
  })
})
