import * as React from "react"

interface CardProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

class Card extends React.Component<CardProps> {
  render() {
    return <div className={`m-4 rounded-md shadow-lg p-4 flex flex-col items-center ${this.props.className || ""}`}>{this.props.children}</div>
  }
}

export default Card
