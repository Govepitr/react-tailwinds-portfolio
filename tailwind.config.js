// tailwind.config.js
const colors = require('tailwindcss/colors')
// const plugin = require('tailwindcss/plugin');

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
      Triforce: ['TriSymbol', 'serif'],
      Overwatch: ['"Typodermic - VipnagorgiallaRg-BoldItalic"']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    aspectRatio: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      9: '22rem',
      16: '44rem',
    },
    plugins: [
      
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/typography')
    ]
  }
}