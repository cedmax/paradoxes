import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"

const SITE_URL = "https://logicbenders.com/"

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: "static",
  devToolbar: { enabled: false },
  vite: {
    resolve: { alias: { "~": "/src" } },
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({ filter: (page) => new URL(page).pathname !== "/corrections/thanks/" }),
  ],
})
