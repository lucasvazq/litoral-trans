import * as React from "react"

import Paragraph from "./Paragraph"

interface IframeProps {
  src: string;
  height?: number;
  width?: number;
  className?: string;

  title?: string;
  role?: string;
  "aria-hidden"?: boolean;

  delay?: number;
  delayMessage?: string;
}

interface IframeState {
  render: boolean;
}

class Iframe extends React.Component<IframeProps, IframeState> {
  constructor(props: IframeProps) {
    super(props)
    this.state = {
      render: false,
    }
  }

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ render: true })
      }.bind(this),
      this.props.delay
    )
  }

  render() {
    return (
      <div className={`flex items-center justify-center ${this.props.className || ""}`}>
        {this.props.delay && !this.state.render ? (
          <Paragraph className="font-semibold text-primary">{this.props.delayMessage}</Paragraph>
        ) : (
          <iframe
            src={this.props.src}
            height={this.props.height}
            width={this.props.width}
            className={this.props.className}
            title={this.props.title}
            role={this.props.role}
            aria-hidden={this.props["aria-hidden"]}
            loading="lazy"
            tabIndex={-1}
          />
        )}
      </div>
    )
  }
}

export default Iframe
