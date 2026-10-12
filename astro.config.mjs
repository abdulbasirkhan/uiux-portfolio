import { defineConfig } from 'astro/config';
// Set SITE_URL and BASE_PATH in the GitHub Actions workflow automatically.
export default defineConfig({ site: process.env.SITE_URL || 'https://example.github.io', base: process.env.BASE_PATH || '/' });
