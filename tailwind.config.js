/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/supercool-ui/src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        dark: '#272730',
        light: '#F9F9F9',
      },
    },
  },
  plugins: [],
}
