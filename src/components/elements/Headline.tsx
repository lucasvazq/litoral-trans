import * as React from "react"

interface HeadlineProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

const basicClasses = 'font-bold text-center break-word max-w-prose m-auto'

export class H2 extends React.Component<HeadlineProps> {
  render() {
    return (
      <h2 className={`text-3xl sm:text-5xl ${basicClasses} ${this.props.className}`}>{this.props.children}</h2>
    )
  }
}

export class H3 extends React.Component<HeadlineProps> {
  render() {
    return (
      <h3 className={`text-2xl sm:text-3xl ${basicClasses} ${this.props.className}`}>{this.props.children}</h3>
    )
  }
}
