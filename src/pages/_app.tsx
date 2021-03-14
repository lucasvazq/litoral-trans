import "../styles/styles.sass"

import { AppContext } from "next"
import Head from "next/head"

import { DefaultSeo } from "next-seo"

import React from "react"

const App = ({ Component, initialProps }: AppContext) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      <meta name="referrer" content="origin-when-crossorigin" />
      <link rel="preconnect" href="https://storage.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Lucas Vazquez" />
    </Head>
    <DefaultSeo
      titleTemplate={`${process.env.name} | %s`}
      openGraph={{
        locale: "es_AR",
        type: "website",
        url: process.env.url,
        site_name: "SiteName",
        images: [
          {
            url: "https://www.example.ie/og-image-01.jpg",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
          },
          {
            url: "https://www.example.ie/og-image-02.jpg",
            width: 900,
            height: 800,
            alt: "Og Image Alt Second",
          },
        ],
      }}
      twitter={{
        cardType: "summary",
      }}
    />
    <Component {...initialProps} />
  </>
)

export default App
