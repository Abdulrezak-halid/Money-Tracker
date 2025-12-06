/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#0a0908',
        'gunmetal': '#22333b',
        'platinum': '#eae0d5',
        'khaki': '#c6ac8f',
        'walnut': '#5e503f',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

