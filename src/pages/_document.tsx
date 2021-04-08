import * as React from "react"

import Document, { Head, Html, Main, NextScript } from "next/document"

import Iframe from "../components/elements/Iframe"

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="es-AR">
        <Head />
        <body className="bg-primary font-primary text-secondary-light min-h-screen">
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
