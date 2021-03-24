import * as React from "react"

import dynamic from 'next/dynamic'

const Link = dynamic(() => import("next/link"))

import { IconType } from "react-icons"

interface RouteProps {
  href: string
  icon?: IconType | React.ComponentType
  className?: string
  onClick?: React.MouseEventHandler
  ariaLabel?: string
  description?: string
}

export class Route extends React.Component<RouteProps> {
  render() {
    console.log(this.props.icon)
    return (
      <Link {...{href: this.props.href}}>
        <a className={`focus:outline-none font-semibold text-sm sm:text-base break-word ${this.props.className || ""}`} onClick={this.props.onClick} aria-label={this.props.ariaLabel}>
          {this.props.icon ?
            <this.props.icon className={`inline-block ${this.props.description ? "mr-1" : ""}`} />
            : null
          }
          {this.props.description}
        </a>
      </Link>
    )
  }
}
