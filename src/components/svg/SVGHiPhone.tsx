import * as React from "react"

import { HiPhone } from "react-icons/hi"

interface SVGHiPhoneProps {
  className?: string;
  fill?: string;
}

class SVGHiPhone extends React.Component<SVGHiPhoneProps> {
  render() {
    return <HiPhone {...this.props} />
  }
}

export default SVGHiPhone
