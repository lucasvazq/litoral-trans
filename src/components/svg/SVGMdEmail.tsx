import * as React from "react"

import { MdEmail } from "react-icons/md"

interface SVGMdEmailProps {
  className?: string;
  fill?: string;
}

class SVGMdEmail extends React.Component<SVGMdEmailProps> {
  render() {
    return <MdEmail {...this.props} />
  }
}

export default SVGMdEmail
