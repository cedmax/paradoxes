import { test, expect } from "./fixtures"

test("skip links reach the full main content and narrow titles wrap", async ({ page }) => {
  for (const route of [
    "/",
    "/about/",
    "/corrections/",
    "/chapters/probability/",
    "/entries/apportionment-paradox/",
  ]) {
    await page.goto(route)
    await expect(page.locator("#main-content h1")).toHaveCount(1)
    await page.keyboard.press("Tab")
    await expect(page.getByRole("link", { name: "Skip to content", exact: true })).toBeFocused()
    await page.keyboard.press("Enter")
    await expect(page.locator("#main-content")).toBeFocused()
    await page.evaluate(() => document.fonts.ready)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    )
  }
})

test("manual controls, Play/Pause and measurement reveals change the figure", async ({
  page,
}) => {
  await page.goto("/entries/muller-lyer-illusion/")
  const slider = page.locator("#muller-lyer-fins")
  const shape = page.locator("#muller-lyer-upper-fins")
  const initial = await shape.getAttribute("d")
  await slider.focus()
  await slider.press("ArrowRight")
  await expect(shape).not.toHaveAttribute("d", initial ?? "")
  const value = await slider.inputValue()
  const play = page.locator("#muller-lyer-illusion-play")
  await play.click()
  await expect(slider).not.toHaveValue(value)
  await play.click()
  const paused = await slider.inputValue()
  await page.waitForTimeout(200)
  await expect(slider).toHaveValue(paused)
  await page.locator("#muller-lyer-illusion-guide-toggle").click()
  await expect(page.locator("#muller-lyer-illusion-proof")).toBeVisible()
})

test("reduced motion keeps manual controls and the audio alternative remains available", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.goto("/entries/muller-lyer-illusion/")
  await expect(page.locator("#muller-lyer-illusion-play")).toBeDisabled()
  const slider = page.locator("#muller-lyer-fins")
  await slider.focus()
  await slider.press("ArrowRight")
  await expect(slider).toHaveValue("1")
  await page.goto("/entries/tritone-paradox/")
  await page.locator("#tritone-paradox-skip").click()
  await expect(page.locator("#tritone-paradox-reveal")).toBeVisible()
})

test("late analytics recovers views while synthetic input does not count as interaction", async ({
  page,
}) => {
  await page.addInitScript("window.testEvents=[];window.umami=undefined")
  await page.goto("/entries/muller-lyer-illusion/")
  await page.locator('[data-illustration="muller-lyer-illusion"]').scrollIntoViewIfNeeded()
  await page.waitForTimeout(100)
  await page.evaluate("window.umami={track:(name,data)=>window.testEvents.push({name,data})}")
  await expect
    .poll(() =>
      page.evaluate("window.testEvents.filter(e=>e.name==='illustration-view').length"),
    )
    .toBe(1)
  await page
    .locator("#muller-lyer-fins")
    .evaluate((input) => input.dispatchEvent(new Event("input", { bubbles: true })))
  expect(
    await page.evaluate("window.testEvents.filter(e=>e.name==='illustration-interact').length"),
  ).toBe(0)
  await page.locator("#muller-lyer-illusion-guide-toggle").click()
  expect(await page.evaluate("window.testEvents.map(e=>e.name)")).toEqual([
    "illustration-view",
    "illustration-interact",
    "illusion-reveal",
  ])
})
