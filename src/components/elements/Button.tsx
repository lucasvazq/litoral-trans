import * as React from "react"

import { IconType } from "react-icons"

import { Route } from ".."

export const Button = (props: { href: string, icon: IconType, description: React.ReactNode | React.ReactNode[] }) => (
  <div className="bg-secondary rounded-lg max-w-prose m-auto">
    <Route href={props.href} icon={props.icon} description={props.description} className="text-sm sm:text-base flex justify-center w-full p-2" />
  </div>
)
