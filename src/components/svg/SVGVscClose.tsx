import * as React from "react"

import { VscClose } from "react-icons/vsc"

interface SVGVscCloseProps {
  className?: string;
  fill?: string;
}

class SVGVscClose extends React.Component<SVGVscCloseProps> {
  render() {
    return <VscClose {...this.props} />
  }
}

export default SVGVscClose
