import * as React from "react"

import Head from "next/head"

import { NextSeo } from "next-seo"

import { WithContext, Thing } from "schema-dts"

import Script from "../elements/Script"

interface SEOProps {
  title: string;
  description: string;
  path: string;
  structuredData?: WithContext<Thing>;
  noindex?: boolean;
}

class SEO extends React.Component<SEOProps> {
  render() {
    return (
      <>
        <NextSeo
          title={this.props.title}
          description={this.props.description}
          noindex={this.props.noindex}
          openGraph={{
            type: "website",
            url: `https://${process.env.domain}/${this.props.path}`,
            locale: `${process.env.localeLanguage}_${process.env.localeTerritory}`,
            title: this.props.title,
            site_name: process.env.name,
            description: this.props.description,
            images: [600, 1080].map((size) => {
              return {
                url: `https://${process.env.domain}/static/images/brand/preview-${size}.png`,
                width: size,
                height: size,
                alt: `${process.env.name} | ${process.env.slogan}`,
              }
            }),
          }}
          twitter={{
            cardType: "summary",
          }}
        />

        {this.props.structuredData ? (
          <Head>
            <Script data={JSON.stringify(this.props.structuredData)} type="application/ld+json" />
          </Head>
        ) : null}
      </>
    )
  }
}

export default SEO
