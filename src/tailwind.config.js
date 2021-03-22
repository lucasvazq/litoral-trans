const config = require("./next.config")

const colors = {
  "primary": config.env.colorPrimary,
  "primary-light": config.env.colorPrimaryLight,
  "primary-semi-light": config.env.colorPrimarySemiLight,
  "primary-semi-dark": config.env.colorPrimarySemiDark,
  "primary-dark": config.env.colorPrimaryDark,
  "secondary": config.env.colorSecondary,
  "secondary-light": config.env.colorSecondaryLight,
  "secondary-semi-light": config.env.colorSecondarySemiLight,
  "secondary-semi-dark": config.env.colorSecondarySemiDark,
  "secondary-dark": config.env.colorSecondaryDark,
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
      fontSize: {
        '32px': ['32px', '32px'],
      },
      height: {
        "20px": "20px",
        "32px": "32px",
        "40px": "40px",
        "340px": "340px",
        "10vh": "10vh",
        "60vh": "60vh",
      },
      width: {
        "300px": "300px",
        "45": "11.25rem",
        "2xs": "16rem",
      },
      minHeight: {
        104: "26rem",
        5: "5rem",
        "48px": "48px",
      },
      minWidth: {
        "48px": "48px",
      },
      maxWidth: {
        "2xs": "16rem",
        "60vh": "60vh",
        "200": "50rem",
      },
      margin: {
        "1px": "1px",
        "8px": "8px",

        "15vh": "15vh",

        "18": "4.5rem",
        "21": "5.25rem",
        "22": "5.5rem",
        "23": "5.75rem",
        "26": "6.5rem",
        "29": "7.25rem",

        "-1px": "-1px",

        "-15vh": "-15vh",

        "-18": "-4.5rem",
        "-21": "-5.25rem",
        "-22": "-5.5rem",
        "-23": "-5.75rem",
        "-26": "-6.5rem",
        "-29": "-7.25rem",
      },
      padding: {
        "8px": "8px",
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
