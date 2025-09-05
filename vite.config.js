import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),

  ],
  extend: {
      fontFamily: {
      Manrope: ['ManropRegular', 'sans-serif'],
      ManropeMedium: ['ManropeMedium', 'sans-serif'],
      ManropeExtraBold: ['ManropeExtraBold', 'sans-serif'],
      mokoto: ['Mokoto', 'sans-serif'],
    },
    },
})


