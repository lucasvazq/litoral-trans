const withPWA = require("next-pwa")

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    dynamicStartUrl: false,
  },

  env: {
    GTM: "GTM-5Q6VCXL",
    domain: "litoral-trans.com.ar",
    localeLanguage: "es",
    localeTerritory: "AR",

    name: "Litoral Trans",
    slogan: "Servicio de Transporte",
    email: "cristianwalker2@gmail.com",
    telCountryCode: "54",
    telPrefix: "9",
    telAreaCode: "3492",
    telPhoneNumber: "589638",
    whatsappMessage: "Hola, me gustaría realizar una consulta",

    authorName: "Lucas Vazquez",
    authorURL: "https://lucasvazq.github.io/",

    // Colors in hex mode of pair values.

    colorPrimaryLighter: "#ffeaeb",
    colorPrimaryLight: "#ffc4c6",
    colorPrimarySemiLight: "#e35e63",
    colorPrimary: "#d71920",
    colorPrimarySemiDark: "#ca242b",
    colorPrimaryDark: "#b7191f",
    colorPrimaryDarker: "#90181d",

    colorSecondaryLighter: "#ffffff",
    colorSecondaryLight: "#fafafa",
    colorSecondarySemiLight: "#ebebeb",
    colorSecondary: "#ababab",
    colorSecondarySemiDark: "#989898",
    colorSecondaryDark: "#3e3e3e",
    colorSecondaryDarker: "#000000",
  },
})
