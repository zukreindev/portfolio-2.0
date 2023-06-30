/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        zukrein: {
          100: '#13FF00',
          200: '#202020',
          300: '#3F3F3F',
          400: '#E2E2E2',
          500: '#161616',
          600: '#272727'
        }
      }
    }
  },
  plugins: []
}
