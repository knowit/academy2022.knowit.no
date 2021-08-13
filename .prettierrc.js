module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  arrowParens: "always",
  overrides: [
    {
      files: "*.md",
      options: {
        parser: "markdown",
        proseWrap: "always",
        printWidth: 78,
      },
    },
  ],
}
