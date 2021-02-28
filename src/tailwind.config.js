// console.log(process.env)

const config = require('./next.config');

const colors = {
  primary: config.env.primary,
  secondary: config.env.secondary,
  light: config.env.light,
  gray: config.env.gray,
  dark: config.env.dark,
}

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: colors,
      borderColor: colors,
      textColor: colors,
      gradientColorStops: colors,
      height: {
        '50vh': '50vh',
      },
      minHeight: {
        '64': '16rem',
        'screen': '100vh',
      },
      maxWidth: {
        '2xs': '16rem',
      },
      boxShadow: {
        'strong': '0px 0px 2px 1px rgba(0, 0, 0, 0.4)',
      },
      zIndex: {
        '1': 1,
        '2': 2,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
