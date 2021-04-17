import * as React from "react"

import Base from "./Base"
import SEO from "./SEO"

interface EmptyPageBaseProps {
  title: string;
  description: string;
  path: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Base page component that doesn't index the view and keep it simple.
 */
class EmptyPageBase extends React.Component<EmptyPageBaseProps> {
  render() {
    return (
      <Base className={this.props.className}>
        <SEO title={this.props.title} description={this.props.description} path={this.props.path} noindex={true} />
        {this.props.children}
      </Base>
    )
  }
}

export default EmptyPageBase
