import * as React from "react"

interface ImageProps {
    src: string
    alt: string
    height: number
    width: number
}

export class Image extends React.Component<ImageProps> {
    render() {
        return <img src={this.props.src} alt={this.props.alt} height={this.props.height} width={this.props.width} loading="lazy" />
    }
}