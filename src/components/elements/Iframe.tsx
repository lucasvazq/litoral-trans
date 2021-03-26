import * as React from "react"

interface IframeProps {
  src: string;
  title?: string;
  height?: number;
  width?: number;
  className?: string;
  delay?: number;
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
      10000 || this.props.delay
    )
  }

  render() {
    if (this.state.render) {
      return <iframe src={this.props.src} title={this.props.title} height={this.props.height} width={this.props.width} className={this.props.className} loading="lazy" />
    }
    return <div className={this.props.className} />
  }
}

export default Iframe
