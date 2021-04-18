import * as React from "react"

import { FaShippingFast } from "react-icons/fa"

import Paragraph from "../elements/Paragraph"

interface BrandPresentationProps {
  className?: string;
}

class BrandPresentation extends React.Component<BrandPresentationProps> {
  render() {
    return (
      <div className={`flex flex-col items-center justify-center font-primary ${this.props.className || ""}`}>
        <div className="lg:border-b lg:border-secondary-lighter font-bold text-xl sm:text-2xl md:text-3xl flex items-center lg:pb-2">
          <FaShippingFast className="inline-block mr-2" />
          {process.env.name}
        </div>
        <Paragraph className="hidden lg:block text-md pt-1">{process.env.slogan}</Paragraph>
      </div>
    )
  }
}

export default BrandPresentation
