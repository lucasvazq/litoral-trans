import * as React from "react"

import { NextSeo } from "next-seo"

interface SEOProps {
    title: string;
    description: string;
    url: string;
    noindex?: boolean;
}

class SEO extends React.Component<SEOProps> {
    render () {
        return         <NextSeo
          title={this.props.title}
          description={this.props.description}
          openGraph={{
            type: 'website',
            url: this.props.url,
            locale: `${process.env.localeLanguage}_${process.env.localeCountry}`,
            title: this.props.title,
            site_name: process.env.name,
            description: this.props.description,
            images: [
              // TODO: generar estas imágenes
              {
                url: 'https://www.example.ie/og-image.jpg',
                width: 1080,
                height: 1080,
                alt: 'Og Image Alt',
              },
              {
                url: 'https://www.example.ie/og-image.jpg',
                width: 600,
                height: 600,
                alt: 'Og Image Alt',
              },
            ]
          }}
          noindex={this.props.noindex}
          twitter={{
            cardType: 'summary'
          }}
          /*
            <meta property="og:image:secure_url" content="/cushead/static/preview-600x600.png">
            <meta property="og:image:type" content="image/png">
            <meta name="twitter:image" content="/cushead/static/preview-600x600.png">
            <meta name="twitter:image:alt" content="cushead - example">

            <meta name='twitter:url' content='https://yourdomain.com' />
          */
        />
    }
}

export default SEO
