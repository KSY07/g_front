import {nextui} from '@nextui-org/theme'

const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ["Freesentation-9Black", ...defaultTheme.fontFamily.serif],
        'sans': ["GmarketSansMedium", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
