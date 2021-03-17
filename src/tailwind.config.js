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
      boxShadow: {
        strong: "0px 0px 2px 1px rgba(0, 0, 0, 0.4)",
      },
      borderRadius: {
        16: "4rem",
      },
      height: {
        "10vh": "10vh",
        "60vh": "60vh",
      },
      minHeight: {
        64: "16rem",
        5: "5rem",
      },
      maxWidth: {
        "2xs": "16rem",
        "60vh": "60vh",
      },
      margin: {
        "-15vh": "-15vh",
        "15vh": "15vh",
      },
      zIndex: {
        1: 1,
        2: 2,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
