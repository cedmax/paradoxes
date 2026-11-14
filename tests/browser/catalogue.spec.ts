import { test, expect } from "./fixtures"

test("search accepts accents and reordered words and the reset clears combined filters", async ({
  page,
}) => {
  await page.goto("/")
  await expect(page.locator("#starter-entries a")).toHaveCount(3)
  await page.locator("#q").fill("schrodinger")
  await expect(page.locator('[data-main][href="/entries/schrodingers-cat/"]')).toBeVisible()
  await page.locator("#q").fill("hall monty")
  await expect(page.locator('[data-main][href="/entries/monty-hall-problem/"]')).toBeVisible()
  await page.locator("#q").press("ArrowDown")
  await expect(page.locator("#q")).toHaveAttribute("aria-activedescendant", "q-opt-0")
  await page.locator("#q").press("Escape")
  await expect(page.locator("#q-list")).toBeHidden()
  await page.locator("#entry-filters").evaluate((details: HTMLDetailsElement) => {
    details.open = true
  })
  await page.locator('[data-filter="illusions"]').click()
  await page
    .locator("label")
    .filter({ has: page.locator("#only-reviewed") })
    .click()
  await expect(page.locator("#none")).toBeVisible()
  await page.locator("#clear-filters").click()
  await expect(page.locator("#q")).toHaveValue("")
  await expect(page.locator("#q")).toBeFocused()
  await expect(page.locator("#only-reviewed")).not.toBeChecked()
  await expect(page.locator("#hide-variants")).toBeChecked()
  await expect(page.locator("#starter-entries")).toBeVisible()
  await expect(page).not.toHaveURL(/q=|reviewed=|status=/)
})

test("shared state survives visits, Back/Forward and the index return link", async ({
  page,
}) => {
  await page.goto("/?q=hall+monty&status=explained&reviewed=1")
  await expect(page.locator('[data-filter="all"] [data-count]')).toHaveText("1")
  const selection = page.url()
  await page.locator('[data-main][href="/entries/monty-hall-problem/"]').click()
  await expect(page.locator("[data-catalogue-return]")).toHaveAttribute("href", selection)
  await page.goBack()
  await expect(page.locator("#q")).toHaveValue("hall monty")
  await page.goForward()
  await page.locator("[data-catalogue-return]").click()
  await expect(page.locator("#only-reviewed")).toBeChecked()
  await page.locator("#clear-filters").click()
  await page.goBack()
  await expect(page.locator("#q")).toHaveValue("hall monty")
})

test("the chapter directory is navigable and phone chapter choices persist", async ({
  page,
}, testInfo) => {
  await page.goto("/")
  await page.locator("#chapter-directory summary").click()
  await expect(
    page.getByRole("navigation", { name: "Chapters", exact: true }).locator("a"),
  ).toHaveCount(11)
  if (testInfo.project.name === "phone") {
    await expect(page.locator('[data-filter="explained"]')).toBeHidden()
    await page.locator('[data-chapter="probability"] [data-toggle]').click()
    await expect(page).toHaveURL(/chapter=probability/)
    await page.reload()
    await expect(page.locator('[data-chapter="probability"] [data-toggle]')).toHaveAttribute(
      "aria-expanded",
      "true",
    )
  }
})
