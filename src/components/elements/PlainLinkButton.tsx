import * as React from "react"

import Route from "./Route"

interface PlainLinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

class PlainLinkButton extends React.Component<PlainLinkButtonProps> {
  render() {
    return (
      <Route
        href={this.props.href}
        className={`bg-secondary-light hover:bg-primary-dark text-primary hover:text-secondary-light break-all rounded-xl flex items-center justify-center w-full max-w-prose py-2 px-4 ${
          this.props.className || ""
        }`}
      >
        {this.props.children}
      </Route>
    )
  }
}

export default PlainLinkButton
