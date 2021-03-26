import * as React from "react"

interface WaveProps {
  className?: string;
  fill?: string;
}

class SVGWave extends React.Component<WaveProps> {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" height="100%" width="100%" className={this.props.className}>
        <path fill={this.props.fill} d="M0 64l80 26.7C160 117 320 171 480 176s320-37 480-32 320 59 400 85.3l80 26.7v64H0z" />
      </svg>
    )
  }
}

export default SVGWave
