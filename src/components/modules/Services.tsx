import * as React from "react"

import { IconType } from "react-icons"
import { AiOutlineSafety } from "react-icons/ai"
import { BsHouseDoor } from "react-icons/bs"
import { FaTruckLoading, FaShippingFast } from "react-icons/fa"
import { GoPackage } from "react-icons/go"

import { Blob1, Blob2, Card, CardsContainer, Paragraph } from ".."

interface ServicesProps {
  className?: string
}

export class Services extends React.Component<ServicesProps> {
  readonly services = [
    { icon: GoPackage, description: "Encomiendas generales puerta a puerta" },
    { icon: BsHouseDoor, description: "Retiro de mercadería en domicilio" },
    { icon: AiOutlineSafety, description: "Gestión de contrareembolsos" },
    { icon: FaShippingFast, description: "Redespacho a otras localidades" },
    { icon: FaTruckLoading, description: "Entregas inmediatas una vez llegada a la localidad del destino" },
  ]

  render() {
    return (
      <CardsContainer className={this.props.className}>
        {this.services.map((service, index) => {
          return (
            <Card key={index} className="bg-secondary-light w-64">
              <div className="w-40 -mb-12">
                <Blob1 color={process.env.colorPrimarySemiLight} />
              </div>
              <div className="w-44 -my-28 ml-4">
                <Blob2 color={process.env.colorPrimaryLight} />
              </div>
              <service.icon className="text-5xl text-primary" />
              <Paragraph className="text-secondary-semi-dark pt-12">{service.description}</Paragraph>
            </Card>
          )
        })}
      </CardsContainer>
    )
  }
}
