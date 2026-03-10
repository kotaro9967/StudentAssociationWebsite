import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // ユーザー名を自分のGitHubユーザー名に変更してください
  site: "https://あなたのユーザー名.github.io",
  // リポジトリ名に合わせて設定します
  base: "/StudentAssociationWebsite",
  integrations: [tailwind(), react()],
});
