import * as React from "react"

import Card from "./Card"
import Paragraph from "../elements/Paragraph"
import SVGAiOutlineSafety from "../svg/SVGAiOutlineSafety"
import SVGBlob1 from "../svg/SVGBlob1"
import SVGBlob2 from "../svg/SVGBlob2"
import SVGBsHouseDoor from "../svg/SVGBsHouseDoor"
import SVGGoPackage from "../svg/SVGGoPackage"
import SVGFaShippingFast from "../svg/SVGFaShippingFast"
import SVGFaTruckLoading from "../svg/SVGFaTruckLoading"

interface ServicesProps {
  className?: string;
}

class Services extends React.Component<ServicesProps> {
  services = [
    { icon: SVGGoPackage, description: "Encomiendas generales puerta a puerta" },
    { icon: SVGBsHouseDoor, description: "Retiro de mercadería en domicilio" },
    { icon: SVGAiOutlineSafety, description: "Gestión de contrareembolsos" },
    { icon: SVGFaShippingFast, description: "Redespacho a otras localidades" },
    { icon: SVGFaTruckLoading, description: "Entregas inmediatas una vez llegada a la localidad del destino" },
  ]

  render() {
    return (
      <div className={`flex flex-wrap justify-center text-center ${this.props.className || ""}`}>
        {this.services.map((service, index) => {
          return (
            <Card key={index} className="bg-secondary-light w-64">
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
