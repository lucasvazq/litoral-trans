import { NextSeo } from "next-seo"

import * as React from "react"

import { HiPhone } from "react-icons/hi"
import { MdEmail } from "react-icons/md"

import { Base, Clients, H2, H3, Id, LinkButton, Map, Paragraph, Section, Services, Slideshow, SVGLineWave, WavesSeparation } from "../components"

const items = {
  services: { path: "/#", id: "servicios", description: "Servicios" },
  parentCompany: { path: "/#", id: "casa-central", description: "Ubicación" },
  clients: { path: "/#", id: "clientes", description: "Clientes" },
}

const Root = () => {
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
      <Base items={Object.values(items)}>
        {/* Slide */}
        <Slideshow />

        {/* Presentation */}
        <WavesSeparation className="bg-primary">
          <Paragraph className="text-center flex flex-col justify-center h-24 m-auto">
            <span className="sm:block">{`${process.env.name} es una empresa de transporte `}</span>
            <span className="sm:block">familiar con más de 30 años de trayectoria.</span>
          </Paragraph>
        </WavesSeparation>

        {/* Services */}
        <Section>
          <Id id={items.services.id} />
          <H2 className="text-primary">NUESTROS SERVICIOS</H2>
          <Services className="pt-6" />
        </Section>

        {/* Parent Company */}
        <Section className="bg-primary">
          <Id id={items.parentCompany.id} />
          <H2>CASA CENTRAL</H2>
          <div className="text-center sm:flex sm:items-center sm:justify-center pt-8">
            <div className="sm:pr-8">
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

        {/* Map */}
        <Section className="pt-12 pl-4">
          <H2 className="text-primary">LOCALIDADES</H2>
          <div className="overflow-hidden flex justify-center pt-8">
            <iframe src="/map" className="h-340px w-300px" />
          </div>
        </Section>

        {/* Travel frecuency */}
        <Section className="bg-primary">
          <div className="m-4">
            <H3>FRECUENCIA DE VIAJE</H3>
            <Paragraph className="text-center text-sm sm:text-lg pt-6">Rafaela – Reconquista/Avellaneda</Paragraph>
            <Paragraph className="text-center text-sm sm:text-lg">Lunes – Miércoles – Viernes</Paragraph>
          </div>
        </Section>

        {/* Clients */}
        <Section>
          <Id id={items.clients.id} />
          <H2 className="text-secondary-semi-dark">NOS ELIGEN</H2>
          <div className="w-45 m-auto">
            <SVGLineWave color={process.env.colorSecondarySemiDark} />
          </div>
          <Clients className="pt-10" />
        </Section>
      </Base>
    </>
  )
}

export default Root
