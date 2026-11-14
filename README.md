# Logic Benders

Paradoxes in plain words. [logicbenders.com](https://logicbenders.com)

## SEO checks

```bash
pnpm lint
pnpm check
pnpm test
pnpm build
pnpm check:seo
```

The SEO check reads the generated site and validates page metadata, canonical URLs, internal
links, the sitemap and JSON-LD. The deploy workflow runs it on the built output before every
deploy, so a failure blocks the deploy.

Every ready pull request also runs a production build, the generated SEO checks and the
dependency-free search and recommendation regression tests. Preview deployment remains opt-in.

## Browser regression tests

After building, install Chromium once and run the desktop and phone checks:

```bash
pnpm exec playwright install chromium
pnpm test:browser
```

The runner starts Astro preview on port 4173. Set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to an
installed Chromium executable when needed. Failures retain screenshots and traces in
`test-results/`; CI uploads the failure report. Tests cover search/history, filters, reading
paths, keyboard access, illustration controls, reduced motion, the audio skip option and late
analytics. They do not replace listening tests on physical devices.

Production deployment reuses the same CI validation workflow, including browser checks, and
downloads its build artifact for the exact commit. Opt-in PR deployments still build their
own noindex preview, including unverified illusions for review.

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

## Licence

Code is [MIT](./LICENSE). Written content is [CC BY-NC 4.0](./LICENSE-CONTENT).
Third-party images are excluded and keep their original terms.
