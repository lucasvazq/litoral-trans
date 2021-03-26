import * as React from "react"

import { FaTruckLoading } from "react-icons/fa"

interface SVGFaTruckLoadingProps {
  className?: string;
  fill?: string;
}

class SVGFaTruckLoading extends React.Component<SVGFaTruckLoadingProps> {
  render() {
    return <FaTruckLoading {...this.props} />
  }
}

export default SVGFaTruckLoading
