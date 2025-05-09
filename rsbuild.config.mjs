import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    sourceMap: {
      js: false,
      css: false,
    },
  },
  html: {
    title: "Meu app novo",
  },
});
