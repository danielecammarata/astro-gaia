import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://gaiarossi.com",
	integrations: [
		mdx(),
		sitemap(),
		react({
			experimentalReactChildren: true,
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
