import { test as base, expect } from "@playwright/test"

export const test = base.extend({
  page: async ({ page }, use) => {
    const errors: string[] = []
    page.on("pageerror", (error) => errors.push(error.message))
    await use(page)
    expect(errors, "Uncaught browser errors").toEqual([])
  },
})
export { expect }
