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
    if (this.props.delay) {
      setTimeout(
        function () {
          this.setState({ render: true })
        }.bind(this),
        this.props.delay
      )
    }
  }

  render() {
    if (this.props.delay && !this.state.render) {
      return <div className={this.props.className} />
    }
    return <iframe src={this.props.src} title={this.props.title} height={this.props.height} width={this.props.width} className={this.props.className} loading="lazy" />
  }
}

export default Iframe
