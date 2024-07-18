/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'coffee': {
          50: '#e8d6d0',
          200: '#A56634',
          400: '#A25f4b',
          600: '#744838'
        }
      },
      fontFamily: {
        'Karla': ['Karla', 'sans-serif']
      },
      keyframes: {
        slideDown: {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0)'}
        }
      },
      animation: {
        slideDown: 'slideDown .3s ease-in-out'
      },
      backgroundImage: {
        'slider-bg': 'url("./img/slider.jpg")'
      }
    },
  },
  plugins: [],
}

