import * as React from "react"

import { DefaultSeo } from "next-seo"

interface SEOProps {
  titleTemplate: string;
}

class SEO extends React.Component<SEOProps> {
  render() {
    return <DefaultSeo titleTemplate={`${process.env.name} | %s`} />
  }
}

export default SEO
