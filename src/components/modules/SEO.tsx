import * as React from "react"

import { NextSeo } from "next-seo"

interface SEOProps {
  title: string;
  description: string;
  url: string;
  noindex?: boolean;
}

class SEO extends React.Component<SEOProps> {
  render() {
    return (
      <NextSeo
        title={this.props.title}
        description={this.props.description}
        noindex={this.props.noindex}
        openGraph={{
          type: "website",
          url: this.props.url,
          locale: `${process.env.localeLanguage}_${process.env.localeCountry}`,
          title: this.props.title,
          site_name: process.env.name,
          description: this.props.description,
          images: [600, 1080].map((size) => {
            return {
              url: `https://${process.env.domain}/static/images/brand/preview-${size}.png`,
              width: size,
              height: size,
              alt: `${process.env.title} | ${process.env.slogan}`,
            }
          }),
        }}
        twitter={{
          cardType: "summary",
        }}
      />
    )
  }
}

export default SEO
