import * as React from "react"

import { FaMinusSquare } from "react-icons/fa"

interface SVGFaMinusSquareProps {
  className?: string;
  fill?: string;
}

class SVGFaMinusSquare extends React.Component<SVGFaMinusSquareProps> {
  render() {
    return <FaMinusSquare {...this.props} />
  }
}

export default SVGFaMinusSquare
