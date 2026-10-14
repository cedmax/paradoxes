import assert from "node:assert/strict"
import { readFile, readdir, stat } from "node:fs/promises"
import { resolve } from "node:path"

// Check Astro's generated HTML and XML, without adding a runtime dependency.
const dist = resolve("dist")
const preview = process.env.SITE_INDEXING === "noindex"
const files = await readdir(dist, { recursive: true })
const attributes = (tag) =>
  Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => match.slice(1)))
const tags = (html, tag) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, "g"))]
const locations = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
const pages = new Map()

for (const file of files.filter((file) => file.endsWith(".html"))) {
  const html = await readFile(resolve(dist, file), "utf8")
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1]
  assert(head, `${file}: missing head`)
  const canonicals = tags(head, "link")
    .map((match) => attributes(match[0]))
    .filter((link) => link.rel === "canonical")
  assert.equal(canonicals.length, 1, `${file}: expected one canonical URL`)
  const canonical = canonicals[0].href
  const meta = tags(head, "meta").map((match) => attributes(match[0]))
  const description = meta.find((item) => item.name === "description")?.content
  const noindex = meta.some(
    (item) => item.name === "robots" && /\bnoindex\b/i.test(item.content ?? ""),
  )
  assert(head.match(/<title>\s*\S[\s\S]*?<\/title>/), `${file}: missing title`)
  assert(description?.trim(), `${file}: missing description`)
  assert.equal(tags(html, "h1").length, 1, `${file}: expected one H1`)
  assert.equal(
    meta.find((item) => item.property === "og:url")?.content,
    canonical,
    `${file}: Open Graph URL differs from canonical`,
  )
  assert.equal(
    meta.find((item) => item.property === "og:description")?.content,
    description,
    `${file}: Open Graph description differs from meta description`,
  )
  if (preview) assert(noindex, `${file}: preview page must be noindex`)
  assert(!pages.has(canonical), `${file}: duplicate canonical URL`)

  const graph = []
  for (const script of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (attributes(script[1]).type !== "application/ld+json") continue
    const data = JSON.parse(script[2])
    assert.equal(data["@context"], "https://schema.org", `${file}: invalid JSON-LD context`)
    assert(Array.isArray(data["@graph"]), `${file}: missing JSON-LD graph`)
    graph.push(...data["@graph"])
  }

  pages.set(canonical, {
    file,
    description,
    noindex,
    graph,
    links: tags(html, "a")
      .map((match) => attributes(match[0]).href)
      .filter(Boolean),
  })
}

const home = [...pages].find(([, page]) => page.file === "index.html")
assert(home, "Missing homepage")
const site = new URL(home[0])
assert.equal(site.protocol, "https:", "Canonical URLs must use HTTPS")
assert(
  home[1].graph.some((item) => item["@type"] === "WebSite"),
  "Missing WebSite data",
)

const sitemapIndex = await readFile(resolve(dist, "sitemap-index.xml"), "utf8")
const sitemapUrls = new Set()
for (const location of locations(sitemapIndex)) {
  const url = new URL(location)
  assert.equal(url.origin, site.origin, "Sitemap uses a different origin")
  const xml = await readFile(resolve(dist, url.pathname.slice(1)), "utf8")
  for (const canonical of locations(xml)) {
    assert(pages.has(canonical), `Sitemap points to a missing page: ${canonical}`)
    assert(!sitemapUrls.has(canonical), `Duplicate sitemap URL: ${canonical}`)
    sitemapUrls.add(canonical)
  }
}

const descriptions = new Set()
for (const [canonical, page] of pages) {
  const path = `/${page.file.replace(/index\.html$/, "")}`
  assert.equal(
    canonical,
    new URL(path, site).href,
    `${page.file}: canonical differs from route`,
  )
  if (!preview) {
    assert.equal(
      sitemapUrls.has(canonical),
      !page.noindex,
      `${path}: sitemap/indexing mismatch`,
    )
  }
  assert(!descriptions.has(page.description), `${path}: duplicate description`)
  descriptions.add(page.description)

  for (const href of page.links) {
    const url = new URL(href, canonical)
    if (url.origin !== site.origin) continue
    url.search = ""
    url.hash = ""
    if (pages.has(url.href)) continue
    const asset = await stat(resolve(dist, decodeURIComponent(url.pathname).slice(1))).catch(
      () => undefined,
    )
    assert(asset?.isFile(), `${path}: broken internal link to ${href}`)
  }

  if (path.startsWith("/entries/") || path.startsWith("/chapters/")) {
    assert(
      page.graph.some((item) => item["@type"] === "BreadcrumbList"),
      `${path}: no breadcrumbs`,
    )
  }
  for (const item of page.graph) {
    if (item["@type"] === "BreadcrumbList") {
      for (const [index, crumb] of item.itemListElement.entries()) {
        assert.equal(crumb.position, index + 1, `${path}: invalid breadcrumb position`)
        assert(crumb.name && pages.has(crumb.item), `${path}: invalid breadcrumb destination`)
      }
      assert.equal(item.itemListElement.at(-1).item, canonical, `${path}: breadcrumb mismatch`)
    }
    if (item["@type"] === "Article") {
      assert(item.headline && item.description, `${path}: incomplete Article data`)
      assert.equal(item.mainEntityOfPage, canonical, `${path}: Article page mismatch`)
    }
    if (item["@type"] === "CollectionPage") {
      for (const entry of item.mainEntity.itemListElement) {
        assert(pages.has(entry.url), `${path}: collection points to a missing entry`)
        assert(
          page.links.some((href) => new URL(href, canonical).href === entry.url),
          `${path}: collection entry is not linked on the page`,
        )
      }
    }
  }
}

const robots = await readFile(resolve(dist, "robots.txt"), "utf8")
assert(
  robots.includes(`Sitemap: ${new URL("sitemap-index.xml", site).href}`),
  "No sitemap in robots.txt",
)
assert(!/^Disallow:\s*\/\s*$/m.test(robots), "robots.txt blocks the site")
console.log(
  `SEO checks passed for ${pages.size} pages and ${sitemapUrls.size} sitemap URLs (${preview ? "preview" : "production"}).`,
)
