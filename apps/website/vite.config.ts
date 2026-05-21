import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
