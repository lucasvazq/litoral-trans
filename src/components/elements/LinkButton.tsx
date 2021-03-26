import * as React from "react"

import dynamic from "next/dynamic"

const Route = dynamic(() => import("./Route"))

interface LinkButtonProps {
  href: string;
  icon: React.ComponentType<{ className?: string, fill?: string }>;
  description: string;
  className?: string;
}

class LinkButton extends React.Component<LinkButtonProps> {
  render() {
    return (
      <Route
        href={this.props.href}
        icon={this.props.icon}
        description={this.props.description}
        className={`bg-primary-semi-dark hover:bg-primary-dark border-b-4 active:border-b-0 active:border-t-0 break-all border-primary-darker rounded-lg shadow-lg flex items-center justify-center w-full max-w-prose p-2 ${
          this.props.className || ""
        }`}
      />
    )
  }
}

export default LinkButton
