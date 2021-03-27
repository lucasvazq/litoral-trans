import * as React from "react"

interface WaveProps {
  className?: string;
  fill?: string;
}

class SVGLineWave extends React.Component<WaveProps> {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="180" height="20" preserveAspectRatio="none" viewBox="0 0 120 20" className={this.props.className}>
        <g mask="url(#SVGLineWave)" fill="none">
          <path
            stroke={this.props.fill}
            strokeWidth="4"
            d="M-18.644 14c8.004-1.6 24.004-8 40-8 16.004 0 24.004 8 40 8 16.004 0 24.004-7.6 40-8 16.004-.4 36.274 5.4 40 6 3.734.6-17.086-2.4-21.356-3"
          />
        </g>
        <defs>
          <mask id="SVGLineWave">
            <path fill="rgba(0, 0, 0, 0)" d="M0 0h120v20H0z" />
          </mask>
        </defs>
      </svg>
    )
  }
}

export default SVGLineWave
