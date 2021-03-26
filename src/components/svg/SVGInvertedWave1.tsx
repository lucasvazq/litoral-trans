import * as React from "react"

interface WaveProps {
  className?: string;
  fill?: string;
}

class SVGInvertedWave1 extends React.Component<WaveProps> {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" height="100%" width="100%" className={this.props.className}>
        <path fill={this.props.fill} d="M0 320l60-5.3c60-5.7 180-15.7 300-64C480 203 600 117 720 117.3c120-.3 240 85.7 360 90.7s240-69 300-106.7l60-37.3V0H0z" />
      </svg>
    )
  }
}

export default SVGInvertedWave1
