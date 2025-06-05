import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Amazon-Clone-2024/",
  // base: "/",

  plugins: [react()],
});
