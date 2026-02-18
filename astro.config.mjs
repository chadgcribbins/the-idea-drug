import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://markbjornsgaard.com",
  vite: {
    server: {
      port: 4321,
      strictPort: true,
    },
  },
});
