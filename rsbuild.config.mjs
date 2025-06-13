import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  mode: "development",
  html: {
    title: "Meu app novo",
  },
  plugins: [pluginReact()],
});
