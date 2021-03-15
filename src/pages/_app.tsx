import "../styles/styles.sass"

import { AppContext } from "next"
import Head from "next/head"

import { DefaultSeo } from "next-seo"

import * as React from "react"

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
    <DefaultSeo titleTemplate={`${process.env.name} | %s`} />
    <Component {...initialProps} />
  </>
)

export default App
