import "../styles/styles.sass"

import { DefaultSeo } from "next-seo"

import Head from "next/head"

import * as React from "react"

// import { P, AppProps, CP, S} from "next/app"
// App<P = {}, CP = {}, S = {}> extends React.Component<P & AppProps<CP>, S>

const App = ({ Component, props }) => (
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
    <Component {...props} />
  </>
)

export default App
