import * as React from "react"

import { BsHouseDoor } from "react-icons/bs"

interface SVGBsHouseDoorProps {
  className?: string;
  fill?: string;
}

class SVGBsHouseDoor extends React.Component<SVGBsHouseDoorProps> {
  render() {
    return <BsHouseDoor {...this.props} />
  }
}

export default SVGBsHouseDoor
