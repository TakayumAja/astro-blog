/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "**/*.astro",
      options: {
        parser: "astro"
      }
    }
  ],
  arrowParens: "avoid",
  bracketSpacing: true,
  endOfLine: "lf",
  tabWidth: 2,
  printWidth: 100,
  trailingComma: "none"
};
