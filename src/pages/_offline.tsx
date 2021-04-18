/* Used for next-pwa */

import * as React from "react"

import Paragraph from "../components/elements/Paragraph"
import BrandPresentation from "../components/modules/BrandPresentation"
import EmptyPageBase from "../components/modules/EmptyPageBase"
import Section from "../components/modules/Section"

class OfflineView extends React.Component {
  render() {
    return (
      <EmptyPageBase title="Problema de Red" description="Ha ocurrido un problema en su conexión" path="_offline" className="bg-primary">
        <Section className="flex flex-col items-center justify-center h-screen w-screen">
          <BrandPresentation className="pb-8" />
          <Paragraph className="text-center">No es posible conectarse a la página.</Paragraph>
          <Paragraph className="text-center">Compruebe su conexión de red.</Paragraph>
        </Section>
      </EmptyPageBase>
    )
  }
}

export default OfflineView
