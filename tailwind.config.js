/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nest: {
          blue: '#007ACC',
          dark: '#1E1E1E',
          accent: '#FFD700',
        }
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        heading: ['"Rajdhani"', '"Noto Sans JP"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}