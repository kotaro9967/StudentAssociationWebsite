import { defineConfig } from "astro/config";
import react from "@astrojs/react";
// tailwind のインポートを外す

export default defineConfig({
  integrations: [react()],
});
