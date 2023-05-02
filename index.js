module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  env: {
    node: true,
    browser: true,
  },
  extends: [
    // Base
    "eslint:all",
    "airbnb",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended", // consider recommended-requiring-type-checking

    // React
    "plugin:react/recommended",
    // "plugin:react/jsx-runtime", // include this for react@17+
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/strict",

    "prettier", // disable styling rules already covered by prettier
  ],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "no-restricted-exports": "off",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["@hitachivantara/*/*"],
            message:
              "Only root-level imports are allowed. Sub-imports aren't part of the public API and will cause issues with tree-shaking",
          },
        ],
      },
    ],

    // imports
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.{test,spec,config}.{ts,tsx}",
          "**/{tests,setupTests}.{ts,tsx}",
          "**/tests/**",
          "**/__tests__/**",
          "**/mocks/**/*",
        ],
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        distinctGroup: false,
        pathGroups: [
          // { pattern: "react", group: "external", position: "before" },
          {
            pattern: "@hitachivantara/**",
            group: "external",
            position: "after",
          },
          { pattern: "@generated/**", group: "internal", position: "before" },
          { pattern: "~/**", group: "internal", position: "before" },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],

    // TypeScript
    "@typescript-eslint/ban-ts-comment": "warn", // warning is preferable to eslint-ignore

    // React
    "react/prop-types": "off", // TS props should be used instead
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.ts?(x)", "**/*.{spec,test}.ts?(x)"],
      extends: ["plugin:jest-dom/recommended", "plugin:testing-library/react"],
      rules: {
        "testing-library/no-render-in-setup": "off",
      },
    },
  ],
};
