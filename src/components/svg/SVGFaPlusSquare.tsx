import * as React from "react"

import { FaPlusSquare } from "react-icons/fa"

interface SVGFaPlusSquareProps {
  className?: string;
  fill?: string;
}

class SVGFaPlusSquare extends React.Component<SVGFaPlusSquareProps> {
  render() {
    return <FaPlusSquare {...this.props} />
  }
}

export default SVGFaPlusSquare
