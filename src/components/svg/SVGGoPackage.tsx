import * as React from "react"

import { GoPackage } from "react-icons/go"

interface SVGGoPackageProps {
  className?: string;
  fill?: string;
}

class SVGGoPackage extends React.Component<SVGGoPackageProps> {
  render() {
    return <GoPackage {...this.props} />
  }
}

export default SVGGoPackage
