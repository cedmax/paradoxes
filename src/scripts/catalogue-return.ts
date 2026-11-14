import { catalogueReturnUrl, catalogueStore } from "~/data/catalogue-state"

try {
  const href = catalogueReturnUrl(sessionStorage.getItem(catalogueStore), location.origin)
  for (const link of document.querySelectorAll<HTMLAnchorElement>("[data-catalogue-return]")) {
    link.href = href
  }
} catch {
  // The static link remains usable if storage is blocked.
}
