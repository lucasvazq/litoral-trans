import * as React from "react"

import dynamic from "next/dynamic"

import { NextSeo } from "next-seo"

import Base from "../components/modules/Base"

import H2 from "../components/elements/H2"
import H3 from "../components/elements/H3"
import Id from "../components/elements/Id"
import Iframe from "../components/elements/Iframe"
import LinkButton from "../components/elements/LinkButton"
import Paragraph from "../components/elements/Paragraph"
import Clients from "../components/modules/Clients"
import Section from "../components/modules/Section"
import Services from "../components/modules/Services"
import WavesSection from "../components/modules/WavesSection"
import SVGHiPhone from "../components/svg/SVGHiPhone"
import SVGLineWave from "../components/svg/SVGLineWave"
import SVGMdEmail from "../components/svg/SVGMdEmail"

const Slideshow = dynamic(() => import("../components/modules/Slideshow"))

class RootView extends React.Component {
  items = {
    services: { path: "/#", id: "servicios", description: "Servicios" },
    parentCompany: { path: "/#", id: "casa-central", description: "Ubicación" },
    clients: { path: "/#", id: "clientes", description: "Clientes" },
  }

  render() {
    return (
      <>
        <NextSeo
          title="Inicio"
          description={`${process.env.slogan}`}
          openGraph={{
            title: `${process.env.name} | Inicio`,
            site_name: `${process.env.name} | Inicio`,
            description: `${process.env.slogan}`,
          }}
        />
        <Base items={Object.values(this.items)}>
          {/* Slide */}
          <Slideshow />

          {/* Presentation */}
          <WavesSection className="bg-primary">
            <div className="flex items-center justify-center min-h-20">
              <Paragraph className="md:text-lg text-center">
                <span className="sm:block">{`${process.env.name} es una empresa de transporte `}</span>
                <span className="sm:block">familiar con más de 30 años de trayectoria.</span>
              </Paragraph>
            </div>
          </WavesSection>

          {/* Services */}
          <Section>
            <Id id={this.items.services.id} />
            <H2 className="text-primary">NUESTROS SERVICIOS</H2>
            <Services className="pt-6" />
          </Section>

          {/* Parent Company */}
          <Section className="bg-primary">
            <Id id={this.items.parentCompany.id} />
            <H2>CASA CENTRAL</H2>
            <div className="text-center sm:flex sm:items-center sm:justify-center pt-8">
              <div className="flex flex-col items-center sm:pr-8">
                <Paragraph>Rafaela, Santa Fe</Paragraph>
                <Paragraph>Calle 14 de Julio, nº 270</Paragraph>
                <LinkButton
                  href={`tel:+${process.env.telCountryCode}${process.env.telAreaCode}${process.env.telPhoneNumber}`}
                  icon={SVGHiPhone}
                  description={`+${process.env.telCountryCode} ${process.env.telAreaCode} ${process.env.telPhoneNumber}`}
                  className="mt-3"
                />
                <LinkButton href={`mailto:${process.env.email}`} icon={SVGMdEmail} description={process.env.email} className="mt-3" />
              </div>
              <div className="pt-4 sm:pbt-0">
                <Paragraph className="font-bold">LUNES A VIERNES</Paragraph>
                <Paragraph>8 – 12 Hs.</Paragraph>
                <Paragraph>16 - 20 Hs.</Paragraph>
                <Paragraph className="font-bold">SÁBADO</Paragraph>
                <Paragraph>8 – 12 Hs.</Paragraph>
              </div>
            </div>
          </Section>

          {/* Map */}
          <Section>
            <H2 className="text-primary">LOCALIDADES</H2>
            <div className="overflow-hidden flex justify-center max-w-full pt-8">
              <Iframe title="Mapa de localidades" src="/map" className="h-340px sm:h-440px w-300px sm:w-400px" delay={2000} />
            </div>
          </Section>

          {/* Travel frecuency */}
          <Section className="bg-primary">
            <H3>FRECUENCIA DE VIAJE</H3>
            <Paragraph className="text-center pt-6">Rafaela – Reconquista/Avellaneda</Paragraph>
            <Paragraph className="text-center">Lunes – Miércoles – Viernes</Paragraph>
          </Section>

          {/* Clients */}
          <Section>
            <Id id={this.items.clients.id} />
            <H2 className="text-secondary-semi-dark">NOS ELIGEN</H2>
            <div className="w-45">
              <SVGLineWave fill={process.env.colorSecondarySemiDark} />
            </div>
            <Clients className="pt-10" />
          </Section>
        </Base>
      </>
    )
  }
}

export default RootView
