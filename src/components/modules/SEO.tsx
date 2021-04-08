import * as React from "react"

import { NextSeo } from "next-seo"

interface SEOProps {
    title: string;
    description: string;
    noindex?: boolean;
}

class SEO extends React.Component<SEOProps> {
    render () {
        return         <NextSeo
          title={this.props.title}
          description={this.props.description}
          openGraph={{
            title: `${process.env.name} | ${this.props.title}`,
            site_name: `${process.env.name} | ${this.props.title}`,
            description: this.props.description,
          }}
          noindex={this.props.noindex}
        />
    }
}

export default SEO
