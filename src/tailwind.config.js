const config = require("./next.config")

const colors = {
  primary: config.env.colorPrimary,
  secondary: config.env.colorSecondary,
  terciary: config.env.colorTerciary,
  light: config.env.colorLight,
  gray: config.env.colorGray,
  dark: config.env.colorDark,
}

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: colors,
      borderColor: colors,
      textColor: colors,
      gradientColorStops: colors,
      height: {
        "50vh": "50vh",
      },
      minHeight: {
        64: "16rem",
        screen: "100vh",
      },
      maxWidth: {
        "2xs": "16rem",
      },
      boxShadow: {
        strong: "0px 0px 2px 1px rgba(0, 0, 0, 0.4)",
      },
      zIndex: {
        1: 1,
        2: 2,
      },
      borderRadius: {
        16: "4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
