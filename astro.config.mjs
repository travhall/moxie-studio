import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import devtoolbarTailwind from "astro-devtoolbar-tailwind";
import icon from "astro-icon";
import lighthouse from "astro-lighthouse";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [devtoolbarTailwind(), icon(), tailwind(), lighthouse()],
  site: "https://travhall.github.io",
  base: "moxie-studio",
  output: "server",
  adapter: netlify(),
});