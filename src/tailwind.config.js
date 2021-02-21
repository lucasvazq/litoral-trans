const colors = {
  primary: '#d71920',
  secondary: '#ffc4c6',
  dark: '#616161',
  light: '#fff',
  gray: '#fafafa',
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
