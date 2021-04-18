import * as React from "react"

import BrandPresentation from "./BrandPresentation"
import Section from "./Section"
import Paragraph from "../elements/Paragraph"
import Route from "../elements/Route"

class Footer extends React.Component {
  render() {
    return (
      <>
        {/* Business information. */}
        <Section className="bg-secondary-dark">
          <div className="grid grid-cols-2 grid-rows-1 md:divide-x-2 w-full max-w-200">
            <div className="text-center hidden md:flex flex-col items-center justify-center col-start-1 col-end-2 row-start-1 row-end-2">
              <BrandPresentation />
            </div>
            <div className="flex flex-col items-center col-start-1 md:col-start-2 col-end-3 row-start-1 row-end-1">
              <div>
                <Paragraph className="font-bold text-3xl">CASA CENTRAL</Paragraph>
                <Paragraph className="font-semibold text-xl pt-4">Rafaela, Santa Fe</Paragraph>
                <Paragraph className="text-sm">Calle 14 de Julio, nº 270</Paragraph>
                <Paragraph className="font-semibold text-xl pt-2">Email</Paragraph>
                <Paragraph className="text-sm">{process.env.email}</Paragraph>
                <Paragraph className="font-semibold text-xl pt-2">Teléfono</Paragraph>
                <Paragraph className="text-sm">{`+${process.env.telCountryCode} ${process.env.telPrefix} ${process.env.telAreaCode} ${process.env.telPhoneNumber}`}</Paragraph>
                <Paragraph className="font-semibold text-xl pt-2">Horarios</Paragraph>
                <Paragraph className="text-sm">Lunes a Viernes de 8hs a 12hs y 16hs a 20hs.</Paragraph>
                <Paragraph className="text-sm">Sábado de 8hs a 12hs.</Paragraph>
              </div>
            </div>
          </div>
        </Section>

        {/* Developer information. */}
        <div className="bg-secondary-darker text-center text-sm relative sm:static flex flex-col items-center p-6 z-1">
          <Paragraph>Copyright 2021. {process.env.name}</Paragraph>
          <Paragraph>
            {`Diseñador por: `}
            <Route href={process.env.authorURL} className="border-b border-secondary-lighter hover:text-primary italic inline-block">
              {process.env.authorName}
            </Route>
          </Paragraph>
        </div>
      </>
    )
  }
}

export default Footer
