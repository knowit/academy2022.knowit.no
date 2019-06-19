module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
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
