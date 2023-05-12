const {
  rules: baseRules,
} = require("eslint-config-airbnb-typescript/lib/shared");
const { restrictedImportPatterns } = require("./rules");

/**
 * Default configuration. Mostly inherits external recommendations.
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
  },
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:all",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended", // consider recommended-requiring-type-checking
    "plugin:react/jsx-runtime",
    "prettier", // disable styling rules covered by prettier
  ],
  /** Please provide an explanation for each added rule. */
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: [restrictedImportPatterns.uikitRoot],
      },
    ],

    // TypeScript's `moduleResolution: "node16"` or later handles this
    // https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting/#importextensions
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          ...baseRules["import/no-extraneous-dependencies"][1].devDependencies,
          "**/setupTests.ts?(x)",
          // extend support for vite, playwright, msw, etc.
          "**/*.{test,spec,config}.{ts,tsx}",
          "**/mocks/**/*",
        ],
      },
    ],

    // A warning is preferable to having this eslint-ignore'ed
    "@typescript-eslint/ban-ts-comment": "warn",

    // TypeScript function components handle these
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.ts?(x)", "**/*.{spec,test}.ts?(x)"],
      extends: ["plugin:jest-dom/recommended", "plugin:testing-library/react"],
    },
  ],
};
