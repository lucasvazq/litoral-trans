import * as React from "react"

import Paragraph from "../components/elements/Paragraph"
import EmptyPageBase from "../components/modules/EmptyPageBase"
import Section from "../components/modules/Section"
import BrandPresentation from "../components/modules/BrandPresentation"

class Response404View extends React.Component {
  render() {
    return (
      <EmptyPageBase title="El contenido no existe" description="El contenido que está buscando no existe" path="404" className="bg-primary">
        <Section className="flex flex-col items-center justify-center h-screen w-screen">
          <BrandPresentation className="pb-8" />
          <Paragraph className="text-center">El contenido que está buscando no existe.</Paragraph>
        </Section>
      </EmptyPageBase>
    )
  }
}

export default Response404View
