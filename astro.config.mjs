import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "server",
  adapter: vercel({
    imageService: true, // Enable Vercel's built-in image optimization
    devImageService: "sharp", // Use sharp for development
  }),
});
