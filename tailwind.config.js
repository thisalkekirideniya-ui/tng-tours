/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'georgia', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
       luxury: {
          gold: '#C5A028',       // Slightly deepened gold so it pops beautifully on white
          goldLight: '#D4AF37',
          obsidian: '#F9F9F9',   // Our main background (Soft Luxury White)
          stone: '#FFFFFF',      // Secondary background (Pure White for cards)
          cream: '#1A1A1A',      // Flipped to dark charcoal/black for primary text
        }
      },
      letterSpacing: {
        widest: '.25em',
        luxury: '.4em',
      }
    },
  },
  plugins: [],
}