import * as React from "react"

import { IconType } from "react-icons"

import { Route } from ".."

export const IconButton = (props: { icon: IconType, ariaLabel: string, onClick: React.MouseEventHandler, className?: string }) => (
  <button type="button" aria-label={props.ariaLabel} onClick={props.onClick} className={`text-3xl ${props.className || ""}`}>
    <props.icon />
  </button>
)

export const LinkButton = (props: { href: string, icon: IconType, description: string, className?: string }) => (
  <div className={`bg-primary-semi-dark border-b-4 border-primary-dark rounded-lg shadow-lg w-full max-w-prose ${props.className || ""}`}>
    <Route href={props.href} icon={props.icon} description={props.description} className="flex items-center justify-center p-2" />
  </div>
)
