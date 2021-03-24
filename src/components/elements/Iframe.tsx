import * as React from "react"

interface IframeProps {
    src: string
    title?: string
    height?: number
    width?: number
    className?: string
}

export class Iframe extends React.Component<IframeProps> {
    render() {
        return (
            <iframe loading="lazy" src={this.props.title} title={this.props.title} className={this.props.className} width={this.props.width} height={this.props.height} />
        )
    }
}
