import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  esbuild: {
    supported: {
      'top-level-await': true
    },
  }
})
