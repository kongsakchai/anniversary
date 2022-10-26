/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'border-black': '#41444B'
      },
      fontFamily: {
        line: ['lineSeed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
