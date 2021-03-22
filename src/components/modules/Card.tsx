import * as React from "react"

export const Card = (props: { children: React.ReactNode | React.ReactNode[], className?: string }) => (
  <div className={`m-4 rounded-md shadow-lg p-4 flex flex-col items-center ${props.className || ""}`}>{props.children}</div>
)

export const CardsContainer = (props: { children: React.ReactNode | React.ReactNode[], className?: string }) => (
  <div className={`flex flex-wrap justify-center text-center ${props.className || ""}`}>{props.children}</div>
)
