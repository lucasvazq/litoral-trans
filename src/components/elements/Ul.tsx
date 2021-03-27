import * as React from "react"

interface UlProps {
  children: React.ReactNode;
  className?: string;
}

class Ul extends React.Component<UlProps> {
  render() {
    return <ul className={`list-reset ${this.props.className || ""}`}>{this.props.children}</ul>
  }
}

export default Ul
