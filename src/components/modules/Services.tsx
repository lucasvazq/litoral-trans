import * as React from "react"

import { AiOutlineSafety } from "react-icons/ai"
import { BsHouseDoor } from "react-icons/bs"
import { FaShippingFast, FaTruckLoading } from "react-icons/fa"
import { GoPackage } from "react-icons/go"

import Card from "./Card"
import Paragraph from "../elements/Paragraph"
import SVGBlob1 from "../svg/SVGBlob1"
import SVGBlob2 from "../svg/SVGBlob2"

interface ServicesProps {
  className?: string;
}

class Services extends React.Component<ServicesProps> {
  services = [
    { icon: GoPackage, description: "Encomiendas generales puerta a puerta" },
    { icon: BsHouseDoor, description: "Retiro de mercadería en domicilio" },
    { icon: AiOutlineSafety, description: "Gestión de contrareembolsos" },
    { icon: FaShippingFast, description: "Redespacho a otras localidades" },
    { icon: FaTruckLoading, description: "Entregas inmediatas una vez llegada a la localidad del destino" },
  ]

  render() {
    return (
      <div className={`flex flex-wrap justify-center text-center ${this.props.className || ""}`}>
        {this.services.map((service, index) => {
          return (
            <Card key={index} className="bg-secondary-light w-60">
              <div className="w-40 -mb-12">
                <SVGBlob1 fill={process.env.colorPrimarySemiLight} />
              </div>
              <div className="w-44 -my-28 ml-4">
                <SVGBlob2 fill={process.env.colorPrimaryLight} />
              </div>
              <service.icon className="text-5xl text-primary" />
              <Paragraph className="text-secondary-semi-dark pt-12">{service.description}</Paragraph>
            </Card>
          )
        })}
      </div>
    )
  }
}

export default Services
