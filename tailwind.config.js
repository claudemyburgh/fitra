const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './assets/*.{liquid,json}',
      './layout/*.liquid',
      './templates/*.liquid',
      './sections/*.liquid',
      './snippets/*.liquid',
  ],
    darkMode: 'class',

  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        gray: colors.zinc
      }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
