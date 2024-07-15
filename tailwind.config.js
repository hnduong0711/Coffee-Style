/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-coffee': '#A56634'
      },
      fontFamily: {
        'Karla': ['Karla', 'sans-serif']
      },
      keyframes: {
        slideDown: {
          '0': {transform: 'translateY(-100%)'},
          '1': {transform: 'translateY(0)'}
        }
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out'
      }
    },
  },
  plugins: [],
}

