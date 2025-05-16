import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";

export default defineConfig([
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
  js.configs.recommended,
  {
    files: ["**/*.jsx"],
    settings: {
      react: { version: "detect" },
    },
    extends: [
      reactPlugin.configs.flat["recommended"],
      reactPlugin.configs.flat["jsx-runtime"],
      hooksPlugin.configs["recommended-latest"],
    ],
    rules: {
      "react/prop-types": 0,
      "no-unused-vars": 1,
    },
  },
]);
