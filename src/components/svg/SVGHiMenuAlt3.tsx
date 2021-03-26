import * as React from "react"

import { HiMenuAlt3 } from "react-icons/hi"

interface SVGHiMenuAlt3Props {
  className?: string;
  fill?: string;
}

class SVGHiMenuAlt3 extends React.Component<SVGHiMenuAlt3Props> {
  render() {
    return <HiMenuAlt3 {...this.props} />
  }
}

export default SVGHiMenuAlt3
