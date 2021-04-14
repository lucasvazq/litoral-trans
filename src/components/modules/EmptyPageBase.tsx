import * as React from "react"

import BrandPresentation from "./BrandPresentation"
import Section from "./Section"
import SEO from "./SEO"

interface EmptyPageBaseProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

class EmptyPageBase extends React.Component<EmptyPageBaseProps> {
  render() {
    return (
      <>
        <SEO title={this.props.title} description={this.props.description} noindex={true} />
        <Section className="flex flex-col items-center justify-center h-screen w-screen">
          <BrandPresentation className="pb-8" />
          {this.props.children}
        </Section>
      </>
    )
  }
}

export default EmptyPageBase
