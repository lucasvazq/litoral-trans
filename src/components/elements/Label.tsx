import * as React from "react"

export const Label = (props: { children: React.ReactNode | React.ReactNode[], className: string }) => (
  <div className="m-4">
    <div className={`rounded-md shadow-md flex items-center justify-center ${props.className}`}>
      <div className="flex flex-col items-center justify-center max-w-prose w-full">{props.children}</div>
    </div>
  </div>
)

export const LabelsContainer = (props: { children: React.ReactNode | React.ReactNode[] }) => <div className="flex flex-wrap justify-center">{props.children}</div>
