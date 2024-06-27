/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0',
      },
      margin: {
        DEFAULT: '0',
      },
    },
    extend: {
      fontFamily: {
        'hkgrotesk': ['"Hanken Grotesk"', 'sans-serif'],
        'rubik': ['"Rubik"', 'sans-serif'],
      },
      colors: {
        'customGrey': '#7E858E',
        'customHeadingColor': "#171F46",
        'greyBorder': "#D7DFE9",
        'customBlue': "#0B69FF",
      },
    },
  },
  plugins: [],
}

