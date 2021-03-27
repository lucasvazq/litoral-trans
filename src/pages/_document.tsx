import * as React from "react"

import Document, { Head, Html, Main, NextScript } from "next/document"

import Iframe from "../components/elements/Iframe"
import Script from "../components/elements/Script"

class CustomDocument extends Document {
  googleTagManager = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":
    new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=
    "https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,"script","dataLayer","${process.env.GTM}");
  `

  render() {
    return (
      <Html lang="es-AR">
        <Head>
          <Script data={this.googleTagManager} />
        </Head>
        <body className="bg-semi-primary font-primary text-secondary-light min-h-screen">
          <noscript>
            <Iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM}`} className="hidden" />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
