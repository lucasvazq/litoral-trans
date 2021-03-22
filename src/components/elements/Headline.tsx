import * as React from "react"

export type HeadlineType = { children: React.ReactNode | React.ReactNode[], className?: string }

const headline = (tag: string, className: string, children: React.ReactNode | React.ReactNode[]) =>
  React.createElement(tag, { className: `font-bold text-center break-word max-w-prose m-auto ${className}` }, children)

export const H2 = (props: HeadlineType) => headline("h2", `text-3xl sm:text-5xl ${props.className || ""}`, props.children)
export const H3 = (props: HeadlineType) => headline("h3", `text-2xl sm:text-3xl ${props.className || ""}`, props.children)
