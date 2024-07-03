module.exports = {
  bracketSameLine: true,
  semi: false,
  trailingComma: "none",
  arrowParens: "avoid",
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.svg",
      options: {
        parser: "html",
      },
    },
  ],
  proseWrap: "always", // printWidth line breaks in md/mdx
}
