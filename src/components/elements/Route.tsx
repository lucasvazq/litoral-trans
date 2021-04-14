import * as React from "react"

import Link from "next/link"

interface RouteProps {
  href: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  "aria-label"?: string;
  className?: string;
}

class Route extends React.Component<RouteProps> {
  render() {
    return (
      <Link href={this.props.href}>
        <a className={`focus:outline-none font-sans font-semibold text-sm sm:text-base break-word ${this.props.className || ""}`} onClick={this.props.onClick} aria-label={this.props["aria-label"]} target="_blank" rel="noopener noreferrer">
          <span className="flex items-center">{this.props.children}</span>
        </a>
      </Link>
    )
  }
}

export default Route
