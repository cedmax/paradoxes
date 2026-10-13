interface Breadcrumb {
  name: string
  path: string
}

export const breadcrumbData = (items: Breadcrumb[], site: URL | undefined) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: new URL(item.path, site).href,
  })),
})
