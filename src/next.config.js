const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    dynamicStartUrl: false
  },

  env: {
    GTM: "GTM-5Q6VCXL",
    domain: "litoral-trans.com.ar",
    name: "Litoral Trans",
    slogan: "Servicio de Transporte",
    localeLanguage: "es",
    localeTerritory: "AR",

    email: "cristianwalker2@gmail.com",
    telCountryCode: "54",
    telAreaCode: "3492",
    telPhoneNumber: "589638",
    whatsappMessage: "Hola, me gustaría realizar una consulta",

    authorName: "Lucas Vazquez",
    authorURL: "https://lucasvazq.github.io/",

    // Colors in hex mode of pair values.
    colorPrimary: "#d71920",
    colorPrimaryLight: "#ffc4c6",
    colorPrimarySemiLight: "#e35e63",
    colorPrimarySemiDark: "#ca242b",
    colorPrimaryDark: "#b7191f",
    colorPrimaryDarker: "#90181d",
    colorSecondary: "#f3f3f3",
    colorSecondaryLight: "#ffffff",
    colorSecondarySemiLight: "#fafafa",
    colorSecondarySemiDark: "#686868",
    colorSecondaryDark: "#1c1c1c",
    colorSecondaryDarker: "#000000",
  },
})
