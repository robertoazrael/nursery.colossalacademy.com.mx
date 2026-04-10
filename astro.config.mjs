import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [],
  site: "https://nursery.colossalacademy.com.mx",

  vite: {
    plugins: [tailwindcss()],
  },
});