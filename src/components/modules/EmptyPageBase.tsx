import * as React from "react"

import SEO from "./SEO"

interface EmptyPageBaseProps {
  title: string;
  description: string;
  path: string;
  children: React.ReactNode;
}

/**
 * Base component that doesn't index the view and keep it simple.
 */
class EmptyPageBase extends React.Component<EmptyPageBaseProps> {
  render() {
    return (
      <>
        <SEO title={this.props.title} description={this.props.description} path={this.props.path} noindex={true} />
        {this.props.children}
      </>
    )
  }
}

export default EmptyPageBase
