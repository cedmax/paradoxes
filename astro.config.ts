import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"

// TODO(launch): set the real domain. It feeds canonical URLs and the sitemap.
const URL = "https://example.com/"

// https://astro.build/config
export default defineConfig({
  site: URL,
  output: "static",
  devToolbar: { enabled: false },
  vite: {
    resolve: { alias: { "~": "/src" } },
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
})
