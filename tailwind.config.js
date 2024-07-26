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
        },
        'subscribe': '#1d1f2e'
      },
      screens: {
        'xs': '480px'
      },
      fontFamily: {
        'Karla': ['Karla', 'sans-serif']
      },
      keyframes: {
        slideDown: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        fadeIn: {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        }
      },
      animation: {
        slideDown: 'slideDown .3s ease-in-out',
        fadeIn: 'fadeIn .7s ease-in-out'
      },
      backgroundImage: {
        'slider-bg': 'url("./img/slider.jpg")'
      }
    },
  },
  plugins: [],
}

