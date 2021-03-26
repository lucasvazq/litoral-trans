import * as React from "react"

interface SVGBlob2Props {
  className?: string;
  fill?: string;
}

class SVGBlob2 extends React.Component<SVGBlob2Props> {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className={this.props.className}>
        <path
          fill={this.props.fill}
          d="M127.4 80c5.8 14.1 6.4 27 1 39.5S111.5 144.1 95 147c-16.4 2.9-37.8-3.5-44.4-16.7-6.5-13.1 1.8-33.1 12.5-50 10.7-17 23.8-31.1 35.8-30.4 11.9.6 22.8 16 28.5 30.1z"
        />
      </svg>
    )
  }
}

export default SVGBlob2
