import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: true, // allows external access
    port: Number(process.env.PORT) || 8080, // <-- Render-safe dynamic port
    allowedHosts: [
      "coordexa.com",
      "www.coordexa.com",
      "coordexa-portfolio.onrender.com",
    ],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

