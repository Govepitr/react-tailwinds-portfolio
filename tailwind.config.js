// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    screens: {
      SmallPhone: '501px',
      LargePhone: '786px',
      AverageTablet: '976px'
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