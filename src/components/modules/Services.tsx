import * as React from "react"

import { AiOutlineSafety } from "react-icons/ai"
import { BsHouseDoor } from "react-icons/bs"
import { FaTruckLoading, FaShippingFast } from "react-icons/fa"
import { GoPackage } from "react-icons/go"

import { Blob_1, Blob_2, Card, CardsContainer, Paragraph } from ".."

const services = [
  { icon: GoPackage, description: "Encomiendas generales puerta a puerta" },
  { icon: BsHouseDoor, description: "Retiro de mercadería en domicilio" },
  { icon: AiOutlineSafety, description: "Gestión de contrareembolsos" },
  { icon: FaShippingFast, description: "Redespacho a otras localidades" },
  { icon: FaTruckLoading, description: "Entregas inmediatas una vez llegada a la localidad del destino" },
]

export const Services = (props: { className?: string }) => (
  <CardsContainer className={props.className}>
    {services.map((service, index) => {
      return (
        <Card key={index} className="bg-secondary-light w-2xs pt-14">
          <service.icon className="text-5xl text-primary relative" />
          <div className="w-40 -my-28">
            <Blob_1 color={process.env.colorPrimarySemiLight} />
          </div>
          <div className="w-44 -my-12 ml-4">
            <Blob_2 color={process.env.colorPrimaryLight} />
          </div>
          <Paragraph className="relative text-secondary-semi-dark pt-12">{service.description}</Paragraph>
        </Card>
      )
    })}
  </CardsContainer>
)
