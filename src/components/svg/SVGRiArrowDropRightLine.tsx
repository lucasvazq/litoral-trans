import * as React from "react"

import { RiArrowDropRightLine } from "react-icons/ri"

interface SVGRiArrowDropRightLineProps {
  className?: string;
  fill?: string;
}

class SVGRiArrowDropRightLine extends React.Component<SVGRiArrowDropRightLineProps> {
  render() {
    return <RiArrowDropRightLine {...this.props} />
  }
}

export default SVGRiArrowDropRightLine
