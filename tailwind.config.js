const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: colors.teal,
      secondary: colors.pink,
    },
    extend: {},
  },
  plugins: [],
}
