const restrictedImportPatterns = {
  uikitRoot: {
    group: ["@hitachivantara/*/*"],
    message:
      "Only root-level imports are allowed. Sub-imports aren't part of the public API and will cause issues with tree-shaking",
  },
  grandparent: {
    group: ["../../../*"],
    message:
      "Too much nesting. Consider reducing nesting or importing from root (`~/a/b/c`))",
  },
};

module.exports = {
  restrictedImportPatterns,
};
