import * as React from "react"

interface SVGBlob1Props {
  className?: string;
  fill?: string;
}

class SVGBlob1 extends React.Component<SVGBlob1Props> {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className={this.props.className}>
        <path fill={this.props.fill} d="M153.9 82.7c7.7 23.7.2 52.5-16.5 63.3-16.6 10.9-42.4 3.6-60.2-10.3-17.9-14-27.7-34.7-22.6-54.7 5.1-20.1 25.3-39.5 46.9-40s44.6 18 52.4 41.7z" />
      </svg>
    )
  }
}

export default SVGBlob1
