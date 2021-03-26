import * as React from "react"

interface H2Props {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

class H2 extends React.Component<H2Props> {
  render() {
    return <h2 className={`font-bold text-3xl sm:text-5xl text-center break-word max-w-prose m-auto ${this.props.className || ""}`}>{this.props.children}</h2>
  }
}

export default H2
