const { restrictedImportPatterns } = require("./rules");

/**
 * Extra configurations too opinionated to include in the baseline.
 */
module.exports = {
  rules: {
    "no-restricted-imports": [
      "error",
      { patterns: Object.values(restrictedImportPatterns) },
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
          "object",
          "type",
        ],
        distinctGroup: false,
        pathGroups: [
          { pattern: "react", group: "external", position: "before" },
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
  },
};
