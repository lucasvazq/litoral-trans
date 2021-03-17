import * as React from "react"

export const Span = (props: { children: React.ReactNode | React.ReactNode[], className?: string }) => <span className={props.className}>{props.children}</span>
