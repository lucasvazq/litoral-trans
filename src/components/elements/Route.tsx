import Link from "next/link"

import * as React from "react"

import { IconType } from "react-icons"

export const Route = (props: { href: string, icon: IconType, className?: string, onClick?: React.MouseEventHandler, ariaLabel?: string, description?: string }) => {
  return (
    <Link href={props.href}>
      <a className={`font-semibold text-sm sm:text-base break-word ${props.className || ""}`} onClick={props.onClick} aria-label={props.ariaLabel}>
        <props.icon className={`inline-block ${props.description ? "mr-1" : ""}`} />
        {props.description}
      </a>
    </Link>
  )
}
