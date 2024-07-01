module.exports = {
  overrides: [
    {
      files: ["./src/**/*.tsx"],
      plugins: ["jsx-a11y"],
      parser: "@typescript-eslint/parser",
      rules: {
        "jsx-a11y/control-has-associated-label": [
          "error",
          {
            controlComponents: [],
            depth: 5,
            ignoreElements: [
              "audio",
              "canvas",
              "embed",
              "input",
              "textarea",
              "tr",
              "video",
            ],
            ignoreRoles: [
              "grid",
              "listbox",
              "menu",
              "menubar",
              "radiogroup",
              "row",
              "tablist",
              "toolbar",
              "tree",
              "treegrid",
            ],
            labelAttributes: ["label"],
          },
        ],
      },
    },
  ],
};
