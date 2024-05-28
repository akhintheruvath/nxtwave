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
      },
    },
  },
  plugins: [],
}

