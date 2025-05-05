// eslint.config.mjs
import js from "@eslint/js";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  // 1. ignore your build output
  { ignores: ["dist"] },

  // 2. all your JS/JSX linting in one flat config object
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },

    // ← instead of `extends: [js.configs.recommended, prettierRecommended]`,
    //    we *spread* each shareable config directly into this object:
    ...js.configs.recommended,
    ...prettierRecommended,

    // 3. your custom rules go here
    rules: {
      // e.g. "@eslint/js/no-undef": "error",
    },
  },
];
