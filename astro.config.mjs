import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: "static",
  rehypePlugins: [rehypeAutolinkHeadings],
});