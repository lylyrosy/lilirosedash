import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
    base: '/lilirosedash/',

    build: {
      outDir: 'build' // Définir le dossier de sortie sur 'build'
    }
 
})
