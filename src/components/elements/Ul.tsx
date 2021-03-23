import * as React from "react"

export const Ul = (props: { children: React.ReactNode | React.ReactNode[], className?: string }) => <ul className={`list-reset ${props.className || ""}`}>{props.children}</ul>
