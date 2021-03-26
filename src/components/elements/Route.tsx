import * as React from "react"

import dynamic from "next/dynamic"

const Link = dynamic(() => import("next/link"))

interface RouteProps {
  href: string;
  icon?: React.ComponentType<{ className?: string, fill?: string }>;
  className?: string;
  onClick?: React.MouseEventHandler;
  ariaLabel?: string;
  description?: string;
}

class Route extends React.Component<RouteProps> {
  render() {
    return (
      <Link href={this.props.href}>
        <a className={`focus:outline-none font-semibold text-sm sm:text-base break-word ${this.props.className || ""}`} onClick={this.props.onClick} aria-label={this.props.ariaLabel}>
          {this.props.icon ? <this.props.icon className={`inline-block ${this.props.description ? "mr-1" : ""}`} /> : null}
          {this.props.description}
        </a>
      </Link>
    )
  }
}

export default Route
