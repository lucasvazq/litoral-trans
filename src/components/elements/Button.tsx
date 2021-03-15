import * as React from "react"

import { IconType } from "react-icons"

import { Route } from ".."

export const Button = (props: { href: string, icon: IconType, description: React.ReactNode[] }) => (
  <div className="bg-secondary rounded-lg m-2">
    <Route href={props.href} icon={props.icon} description={props.description} className="flex justify-center w-full p-2" />
  </div>
)
