// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    screens: {
      xl: '1280px',
      lg: '976px',
      md: '786px',
      sm: '501px',
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}