/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sp': '640px',
      // => @media (min-width: 640px) { ... }

      'pc': '768px',
      // => @media (min-width: 1024px) { ... }

      'dt': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontSize: {
        '2xl': ['24px', '32px' ],
        '3xl': ['30px', '36px' ],
        '4xl': ['36px', '40px' ],
        '5xl': ['48px', '1' ],
        '6xl': ['60px', '1' ],
        '7xl': ['72px', '1' ],
        '8xl': ['96px', '1' ],
        '9xl': ['128px', '1' ]
      },
    },
  },
  plugins: [],
}