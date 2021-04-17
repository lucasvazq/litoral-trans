const config = require("./next.config")

const colors = {
  primary: config.env.colorPrimary,
  "primary-light": config.env.colorPrimaryLight,
  "primary-semi-light": config.env.colorPrimarySemiLight,
  "primary-semi-dark": config.env.colorPrimarySemiDark,
  "primary-dark": config.env.colorPrimaryDark,
  "primary-darker": config.env.colorPrimaryDarker,
  secondary: config.env.colorSecondary,
  "secondary-light": config.env.colorSecondaryLight,
  "secondary-semi-light": config.env.colorSecondarySemiLight,
  "secondary-semi-dark": config.env.colorSecondarySemiDark,
  "secondary-dark": config.env.colorSecondaryDark,
  "secondary-darker": config.env.colorSecondaryDarker,
}

module.exports = {
  purge: ["**/*.tsx"],
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
      fontSize: {
        "32px": ["32px", "32px"],
      },
      height: {
        18: "4.5rem",
        "290px": "290px",
        "390px": "390px",
        "465px": "465px",
        "540px": "540px",
        "640px": "640px",
        "10vh": "10vh",
        "60vh": "60vh",
      },
      width: {
        45: "11.25rem",
        "250px": "250px",
        "350px": "350px",
        "425px": "425px",
        "500px": "500px",
        "600px": "600px",
      },
      minHeight: {
        120: "30rem",
        48: "12rem",
        20: "5rem",
        "48px": "48px",
      },
      minWidth: {
        "48px": "48px",
      },
      maxWidth: {
        200: "50rem",
      },
      padding: {
        "8px": "8px",
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
