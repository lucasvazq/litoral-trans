import * as React from "react"

import dynamic from "next/dynamic"

const Card = dynamic(() => import("./Card"))
const Paragraph = dynamic(() => import("../elements/Paragraph"))
const SVGAiOutlineSafety = dynamic(() => import("../svg/SVGAiOutlineSafety"))
const SVGBlob1 = dynamic(() => import("../svg/SVGBlob1"))
const SVGBlob2 = dynamic(() => import("../svg/SVGBlob2"))
const SVGBsHouseDoor = dynamic(() => import("../svg/SVGBsHouseDoor"))
const SVGGoPackage = dynamic(() => import("../svg/SVGGoPackage"))
const SVGFaShippingFast = dynamic(() => import("../svg/SVGFaShippingFast"))
const SVGFaTruckLoading = dynamic(() => import("../svg/SVGFaTruckLoading"))

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
