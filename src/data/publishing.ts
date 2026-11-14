interface PublicationEnvironment {
  development: boolean
  indexing?: string
  previewUnverified?: string
}

export function isPublishedEntry(
  data: { sourcesVerified: boolean; format: "argument" | "illusion" },
  environment: PublicationEnvironment,
) {
  const preview =
    (environment.development || environment.indexing === "noindex") &&
    environment.previewUnverified === "true"
  return data.sourcesVerified || (preview && data.format === "illusion")
}
