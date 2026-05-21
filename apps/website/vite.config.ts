import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import fs from "node:fs";

// Read version from @nuvo-code/core package.json
const corePackagePath = path.resolve(__dirname, "../../packages/core/package.json");
const corePackage = JSON.parse(fs.readFileSync(corePackagePath, "utf-8"));
const NUVO_VERSION = corePackage.version || "0.0.0";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __NUVO_VERSION__: JSON.stringify(NUVO_VERSION),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../../packages/core/src"),
      "@nuvo-code/core": path.resolve(__dirname, "../../packages/core/src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  server: {
    port: 5173,
  },
});
