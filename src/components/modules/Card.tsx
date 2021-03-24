import * as React from "react"

interface CardProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

interface CardsContainerProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

export class Card extends React.Component<CardProps> {
  render() {
    return <div className={`m-4 rounded-md shadow-lg p-4 flex flex-col items-center ${this.props.className || ""}`}>{this.props.children}</div>
  }
}

// Es realmente necesaria esta clase?
export class CardsContainer extends React.Component<CardsContainerProps> {
  render() {
    return <div className={`flex flex-wrap justify-center text-center ${this.props.className || ""}`}>{this.props.children}</div>
  }
}
