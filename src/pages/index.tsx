import * as React from "react"

import dynamic from "next/dynamic"

import { HiPhone } from "react-icons/hi"
import { MdEmail } from "react-icons/md"

import H2 from "../components/elements/H2"
import H3 from "../components/elements/H3"
import Id from "../components/elements/Id"
import Iframe from "../components/elements/Iframe"
import LinkButton from "../components/elements/LinkButton"
import Paragraph from "../components/elements/Paragraph"
import Script from "../components/elements/Script"
import Base from "../components/modules/Base"
import Clients from "../components/modules/Clients"
import Section from "../components/modules/Section"
import SEO from "../components/modules/SEO"
import Services from "../components/modules/Services"
import WavesSection from "../components/modules/WavesSection"
import SVGLineWave from "../components/svg/SVGLineWave"

const Slideshow = dynamic(() => import("../components/modules/Slideshow"))

class RootView extends React.Component {
  inlineItems: { path: string, id: string, description: string }[]
  expandableItems: { path: string, id: string, description: string }[]

  ids = {
    services: "servicios",
    parentCompany: "casa-central",
    clients: "clientes",
  }

  constructor(props: {}) {
    super(props)
    this.inlineItems = [
      { path: "/#", id: this.ids.services, description: "Servicios" },
      { path: "/#", id: this.ids.parentCompany, description: "Contacto" },
      { path: "/#", id: this.ids.clients, description: "Clientes" },
    ]
    this.expandableItems = [
      { path: "/#", id: this.ids.services, description: "Servicios" },
      { path: "/#", id: this.ids.parentCompany, description: "Ubicación" },
      { path: "/#", id: this.ids.clients, description: "Clientes" },
    ]
  }

  render() {
    return (
      <>
        <SEO title="Inicio" description={process.env.slogan} />
        <Script
          type="application/ld+json"
          data={JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Service",
            description: "Servicio de transporte",
            logo: `https://${process.env.domain}/static/images/brand/preview-1080.png`,
            provider: {
              "@type": "LocalBusiness",
              "@id": `https://${process.env.domain}`,
              sameAs: `https://${process.env.domain}`,
              url: `https://${process.env.domain}`,
              name: process.env.name,
              description: "Empresa de logística",
              slogan: "La mejor manera para transportar tus productos",
              image: `https://${process.env.domain}/static/images/brand/preview-1080.png`,
              telephone: `+${process.env.telCountryCode}${process.env.telAreaCode}${process.env.telPhoneNumber}`,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle 14 de Julio, 270",
                addressLocality: "Rafaela",
                postalCode: "2300",
                addressCountry: process.env.localeTerritory,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -31.2431136,
                longitude: -61.4863377,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:00",
                  closes: "12:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "16:00",
                  closes: "20:00",
                },
              ],
            },
            areaServed: [
              {
                "@type": "City",
                "@id": "https://es.wikipedia.org/wiki/Rafaela",
                name: "Rafaela",
              },
              {
                "@type": "City",
                "@id": "https://es.wikipedia.org/wiki/Esperanza_(Santa_Fe)",
                name: "Esperanza",
              },
              {
                "@type": "City",
                "@id": "https://es.wikipedia.org/wiki/San_Justo_(Santa_Fe)",
                name: "San Justo",
              },
              {
                "@type": "City",
                "@id": "https://es.wikipedia.org/wiki/Vera_(Santa_Fe)",
                name: "Vera",
              },
              {
                "@type": "City",
                name: "Reconquista",
                "@id": "https://es.wikipedia.org/wiki/Reconquista_(ciudad)",
              },
              {
                "@type": "City",
                "@id": "https://es.wikipedia.org/wiki/Avellaneda_(Santa_Fe)",
                name: "Avellaneda",
              },
            ],
          })}
        />
        <Base inlineItems={this.inlineItems} expandableItems={this.expandableItems}>
          {/* Slide. */}
          <Slideshow />

          {/* Presentation. */}
          <WavesSection bottomClassName="bg-secondary-semi-light">
            <div className="flex items-center justify-center min-h-20">
              <Paragraph className="md:text-lg text-center">
                <span className="sm:block">{`${process.env.name} es una empresa de transporte `}</span>
                <span className="sm:block">familiar con más de 30 años de trayectoria.</span>
              </Paragraph>
            </div>
          </WavesSection>

          {/* Services. */}
          <Section className="bg-secondary-semi-light">
            <Id id={this.ids.services} />
            <H2 className="text-primary">NUESTROS SERVICIOS</H2>
            <Services className="pt-6" />
          </Section>

          {/* Parent Company. */}
          <Section>
            <Id id={this.ids.parentCompany} />
            <H2>CASA CENTRAL</H2>
            <div className="text-center sm:flex sm:items-center sm:justify-center pt-8">
              <div className="flex flex-col items-center sm:pr-8">
                <Paragraph>Rafaela, Santa Fe</Paragraph>
                <Paragraph>Calle 14 de Julio, nº 270</Paragraph>
                <LinkButton
                  href={`tel:+${process.env.telCountryCode}${process.env.telAreaCode}${process.env.telPhoneNumber}`}
                  icon={HiPhone}
                  description={`+${process.env.telCountryCode} ${process.env.telAreaCode} ${process.env.telPhoneNumber}`}
                  className="mt-3"
                />
                <LinkButton href={`mailto:${process.env.email}`} icon={MdEmail} description={process.env.email} className="mt-3" />
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

          {/* Map. */}
          <Section className="bg-secondary-semi-light">
            <H2 className="text-primary">LOCALIDADES</H2>
            <div className="overflow-hidden flex justify-center pt-8" aria-label="Mapa interactivo de localidades">
              <Iframe
                src="/mapa"
                className="bg-secondary h-340px sm:h-440px md:h-540px lg:h-640px w-300px sm:w-400px md:w-500px lg:w-600px"
                role="application"
                aria-hidden={true}
                delay={4000}
                delayMessage="Cargando Mapa"
              />
            </div>
          </Section>

          {/* Travel frecuency. */}
          <Section>
            <H3>FRECUENCIA DE VIAJE</H3>
            <Paragraph className="text-center pt-6">Rafaela – Reconquista/Avellaneda</Paragraph>
            <Paragraph className="text-center">Lunes – Miércoles – Viernes</Paragraph>
          </Section>

          {/* Clients. */}
          <Section className="bg-secondary-semi-light">
            <Id id={this.ids.clients} />
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
