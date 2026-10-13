# Logic Benders

Paradoxes in plain words. [logicbenders.com](https://logicbenders.com)

## SEO checks

```bash
pnpm lint
pnpm check
pnpm build
pnpm check:seo
```

The SEO check reads the generated site and validates page metadata, canonical URLs, internal
links, the sitemap and JSON-LD. CI checks both production and preview builds.

PR deployments use `SITE_INDEXING=noindex`. To check that build locally:

```bash
SITE_INDEXING=noindex pnpm build
SITE_INDEXING=noindex pnpm check:seo
```

Run a normal production build afterwards to restore indexable output. The correction
confirmation page is always noindex and omitted from the sitemap.

## Corrections

The correction form is static HTML handled by Netlify, with a honeypot and optional email.
Before deploying it, open the site's **Forms** settings and **enable form detection**.
Netlify scans the HTML on the next deploy. Check that the `corrections` form appears in the
Forms dashboard, send one test report and confirm it arrives. Optional email notifications
can be configured there; no address is stored in this repository.

See Netlify's [form setup](https://docs.netlify.com/manage/forms/setup/) and
[notification instructions](https://docs.netlify.com/manage/forms/notifications/).
The local Astro preview does not provide Netlify's form submission backend.
