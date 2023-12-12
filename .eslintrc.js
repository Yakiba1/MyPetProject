module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "prettier",
    "plugin:typescript-sort-keys/recommended"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  plugins: ["prettier", "typescript-sort-keys", "sort-keys-fix"],
  rules: {
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        selector: "default"
      },
      {
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        selector: "variable"
      },
      {
        format: null,
        selector: "objectLiteralProperty"
      },
      {
        format: ["PascalCase"],
        selector: "typeLike"
      },
      {
        format: ["UPPER_CASE"],
        selector: "enumMember"
      }
    ],
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-unused-vars": "warn",
    "no-console": "warn",
    "no-debugger": "warn",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "sort-keys-fix/sort-keys-fix": "warn",
    "vue/multi-word-component-names": [
      "off",
      {
        ignores: ["index", "index.dev", "[id]"]
      }
    ],
    "vue/no-multiple-template-root": "off",
    "vue/require-default-prop": ["warn"]
  }
};
