import * as React from "react"

import { AiOutlineSafety } from "react-icons/ai"

interface SVGAiOutlineSafetyProps {
  className?: string;
  fill?: string;
}

class SVGAiOutlineSafety extends React.Component<SVGAiOutlineSafetyProps> {
  render() {
    return <AiOutlineSafety {...this.props} />
  }
}

export default SVGAiOutlineSafety
