import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  root: "src",
  base: "/",
  plugins: [injectHTML()],
});
