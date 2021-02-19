import Head from "next/head";
import { useEffect } from "react"
import "../styles/styles.sass";
import { DefaultSeo } from 'next-seo';


const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
        <meta name="referrer" content="origin-when-crossorigin" />
        <link rel="preconnect" href="https://storage.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Lucas Vazquez" />
      </Head>
      <DefaultSeo
        titleTemplate={`${process.env.TITLE} | %s`}
        openGraph={{
          locale: 'es_AR',
          type: 'website',
          url: process.env.URL,
          site_name: 'SiteName',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
          ],
        }}
        twitter={{
          cardType: 'summary',
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
