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
      geist: ['GeistRegular', 'sans-serif'],
      geistMedium: ['GeistMedium', 'sans-serif'],
      geistExtraBold: ['GeistExtraBold', 'sans-serif'],
      mokoto: ['Mokoto', 'sans-serif'],
    },
    },
})


