import * as React from "react"

export const Paragraph = (props: { children: React.ReactNode | React.ReactNode[], className?: string }) => <p className={`break-word max-w-prose ${props.className || ""}`}>{props.children}</p>
