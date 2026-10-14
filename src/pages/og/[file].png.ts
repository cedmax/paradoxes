import type { APIRoute, GetStaticPaths } from "astro"
import { getPublishedEntries } from "~/data/entries"
import { ogPng, pruneOgCache } from "~/og/render"
import { ogFile } from "~/og/template"

// One 1200x630 Open Graph image per published entry, at /og/<slug>-<hash>.png. See src/og/.
export const getStaticPaths = (async () => {
  const entries = await getPublishedEntries()
  const paths = entries.map(({ id, data }) => {
    const input = { title: data.title, titleAccent: data.titleAccent, problem: data.problem }
    return { params: { file: ogFile(id, input) }, props: { slug: id, input } }
  })
  await pruneOgCache(new Set(paths.map(({ params }) => `${params.file}.png`)))
  return paths
}) satisfies GetStaticPaths

export const GET: APIRoute<{ slug: string; input: Parameters<typeof ogFile>[1] }> = async ({
  props,
}) => {
  const png = await ogPng(props.slug, props.input)
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } })
}
