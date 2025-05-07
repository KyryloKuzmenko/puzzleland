import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  base: "/",
  plugins: [injectHTML()],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        privacy: resolve(__dirname, "src/privat-policy.html"),
        terms: resolve(__dirname, "src/terms-and-conditions.html"),
        cookies: resolve(__dirname, "src/cookies-policy.html"),
      },
    },
  },
});
