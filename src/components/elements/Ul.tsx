import * as React from "react"

interface UlProps {
    children: React.ReactNode | React.ReactNode[]
    className?: string
}

export class Ul extends React.Component<UlProps> {
    render() {
        return <ul className={`list-reset ${this.props.className || ""}`}>{this.props.children}</ul>
    }
}
