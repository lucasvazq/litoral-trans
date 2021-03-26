import * as React from "react"

interface H3Props {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

class H3 extends React.Component<H3Props> {
  render() {
    return <h3 className={`font-bold text-2xl sm:text-3xl text-center break-word max-w-prose m-auto ${this.props.className || ""}`}>{this.props.children}</h3>
  }
}

export default H3
