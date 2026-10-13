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

## After production deployment

- Verify the domain in Google Search Console and submit
  `https://logicbenders.com/sitemap-index.xml` if that has not already been done.
- Inspect the homepage, a chapter and an entry with URL Inspection. Check Google's selected
  canonical URLs and rendered content.
- Validate the deployed structured data with Google's
  [Rich Results Test](https://search.google.com/test/rich-results).
- Track impressions, clicks and indexing in Search Console. Compare periods after allowing
  time for recrawling; the code alone cannot establish changes in search traffic.

## Performance baseline

The [live homepage mobile report](https://pagespeed.web.dev/analysis/https-logicbenders-com/7py89f2u56?form_factor=mobile)
from 13 October 2026 measured the production site before this branch was deployed:

| Measure                  | Result |
| ------------------------ | ------ |
| Lighthouse performance   | 100    |
| Largest Contentful Paint | 1.1 s  |
| Total Blocking Time      | 0 ms   |
| Cumulative Layout Shift  | 0.001  |

This is a single mobile lab run with Slow 4G throttling, not a field Core Web Vitals result.
PageSpeed Insights reported no real-user dataset for the site. No speculative font or loading
changes were made on the strength of this result.
