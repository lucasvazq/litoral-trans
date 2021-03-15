import Link from "next/link"

import * as React from "react"

import { IconType } from "react-icons"

export const Route = (props: { href: string, className?: string, onClick?: React.MouseEventHandler, style?: { [key: string]: any }, description?: React.ReactNode[], icon?: IconType }) => {
  return (
    <div className="flex items-center">
      <Link href={props.href}>
        <a className={`font-sans inline-block ${props.className ? props.className : ""}`} onClick={props.onClick || null} style={props.style || null}>
          <div className="flex items-center">
            {props.icon ? <props.icon className={`inline-block ${props.description ? "mr-1" : ""}`} /> : null}
            {props.description}
          </div>
        </a>
      </Link>
    </div>
  )
}
