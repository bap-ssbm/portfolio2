/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sp': '640px',
      // => @media (min-width: 640px) { ... }

      'pc': '1024px',
      // => @media (min-width: 1024px) { ... }

      'dt': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}