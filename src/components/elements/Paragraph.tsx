import * as React from "react"

export const Paragraph = (props: { children: React.ReactNode[], className?: string }) => <p className={`max-w-prose ${props.className || ""}`}>{props.children}</p>
