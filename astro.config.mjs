// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import tableScroll from './src/plugins/table-scroll.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://jellyns.github.io',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: { theme: 'css-variables' },
		processor: satteri({ hastPlugins: [tableScroll] }),
	},
});
