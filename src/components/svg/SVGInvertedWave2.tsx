import * as React from "react"

interface WaveProps {
  className?: string;
  fill?: string;
}

class SVGInvertedWave2 extends React.Component<WaveProps> {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" height="100%" width="100%" className={this.props.className}>
        <path fill={this.props.fill} d="M0 256l60-16c60-16 180-48 300-53.3 120-5.7 240 16.3 360 42.6 120 26.7 240 58.7 360 69.4 120 10.3 240 .3 300-5.4l60-5.3V0H0z" />
      </svg>
    )
  }
}

export default SVGInvertedWave2
