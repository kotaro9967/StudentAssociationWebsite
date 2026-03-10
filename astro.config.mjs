import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite"; // 🌟 1. 新しいツールを読み込む！

// https://astro.build/config
export default defineConfig({
  site: "https://kota9967.github.io", // ※自分のユーザー名にしてください
  base: "/StudentAssociationWebsite",

  integrations: [
    react(), // 🌟 2. 古い tailwind() をここから削除しました
  ],

  // 🌟 3. 新しく vite プラグインとして Tailwind を設定します！
  vite: {
    plugins: [tailwindcss()],
  },
});
