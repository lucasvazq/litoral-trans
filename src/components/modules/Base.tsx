import * as React from "react"

interface BaseProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Base component that applies some default styles.
 */
class Base extends React.Component<BaseProps> {
  render() {
    return <div className={`font-medium font-primary text-secondary-lighter min-h-screen min-w-full ${this.props.className || ""}`}>{this.props.children}</div>
  }
}

export default Base
