import * as React from "react"

import { FaShippingFast } from "react-icons/fa"

interface SVGFaShippingFastProps {
  className?: string;
  fill?: string;
}

class SVGFaShippingFast extends React.Component<SVGFaShippingFastProps> {
  render() {
    return <FaShippingFast {...this.props} />
  }
}

export default SVGFaShippingFast
