import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      pages: fileURLToPath(new URL("./src/pages", import.meta.url)),
      comps: fileURLToPath(new URL("./src/components", import.meta.url)),
      assets: fileURLToPath(new URL("./src/assets", import.meta.url)),
      utils: fileURLToPath(new URL("./src/utils", import.meta.url)),
    },
  },
});
