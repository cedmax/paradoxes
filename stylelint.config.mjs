/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-tailwindcss"],
  rules: {
    "at-rule-prelude-no-invalid": null,
    // `&` inside Tailwind @utility blocks is valid.
    "nesting-selector-no-missing-scoping-root": null,
  },
  overrides: [
    {
      files: ["**/*.astro"],
      extends: ["stylelint-config-html/astro"],
      rules: {
        "no-invalid-position-declaration": null,
        "custom-property-pattern": null,
        "selector-pseudo-class-no-unknown": [
          true,
          {
            ignorePseudoClasses: ["global"],
          },
        ],
      },
    },
  ],
}
