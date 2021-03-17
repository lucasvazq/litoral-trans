import Document, { Head, Html, Main, NextScript } from "next/document"

import * as React from "react"

export const GoogleTagManager = () => {
  const data = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":
      new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=
      "https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,"script","dataLayer","${process.env.GTM}");
    `
  return <script dangerouslySetInnerHTML={{ __html: data.replace(/\n\s*/g, "") }} />
}

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="es-AR">
        <Head>
          <GoogleTagManager />
        </Head>
        <body className="bg-gray font-main text-dark min-h-screen">
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
