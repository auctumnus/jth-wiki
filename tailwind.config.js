const colors = require('tailwindcss/colors')
module.exports = {
  theme: {
    colors: {
      gray: colors.coolGray,
      accent: colors.red[500],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.gray.800'),
              '&:hover': {
                color: theme('colors.accent'),
              },
            },
            strong: {
              color: theme('colors.gray.800'),
            },
            code: {
              color: theme('colors.gray.800'),
            },
            h1: {
              color: theme('colors.gray.800'),
            },
            h2: {
              color: theme('colors.gray.800'),
            },
            h3: {
              color: theme('colors.gray.800'),
            },
          },
        },

        dark: {
          css: {
            color: theme('colors.gray.100'),
            strong: {
              color: theme('colors.gray.50'),
            },
            code: {
              color: theme('colors.gray.50'),
            },
            a: {
              color: theme('colors.gray.50'),
              '&:hover': {
                color: theme('colors.accent'),
              },
            },
            h1: {
              color: theme('colors.gray.50'),
            },
            h2: {
              color: theme('colors.gray.50'),
            },
            h3: {
              color: theme('colors.gray.50'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
  variants: {
    extend: {
      backgroundColor: ['dark'],
      typography: ['dark'],
      borderWidth: ['focus'],
    },
  },
  purge: {
    options: {
      safelist: ['text-gray-50'],
    },
  },
}
