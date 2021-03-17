import { NextSeo } from "next-seo"

import * as React from "react"

import { HiPhone } from "react-icons/hi"
import { MdEmail } from "react-icons/md"

import { Base, Button, Clients, H2, Id, Map, Paragraph, Separation, Services, Slideshow, Span } from "../components"

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
        <div className="flex flex-col-reverse -mb-7">
          <Slideshow />
          <div className="absolute z-1 w-full mb-7 h-10vh min-h-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" height="100%" width="100%">
              <path
                fill={process.env.colorPrimary}
                fillOpacity="1"
                d="M0,64L80,90.7C160,117,320,171,480,176C640,181,800,139,960,144C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              />
            </svg>
          </div>
        </div>

        {/* Main separator */}
        <Separation>
          <Paragraph className="text-center relative m-auto z-1">
            <Span className="sm:block">{`${process.env.name} es una empresa de transporte ` /* trailing space is necessary */}</Span>
            <Span className="sm:block">familiar con más de 30 años de trayectoria.</Span>
          </Paragraph>
        </Separation>
        <div className="absolute z-1 w-full mb-7 h-10vh min-h-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" height="100%" width="100%">
            <path
              fill={process.env.colorTerciary}
              fillOpacity="1"
              d="M0,320L60,314.7C120,309,240,299,360,250.7C480,203,600,117,720,117.3C840,117,960,203,1080,208C1200,213,1320,139,1380,101.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </svg>
        </div>
        <div className="absolute z-1 w-full mb-7 h-10vh min-h-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" height="100%" width="100%">
            <path
              fill={process.env.colorSecondary}
              fillOpacity="1"
              d="M0,256L60,240C120,224,240,192,360,186.7C480,181,600,203,720,229.3C840,256,960,288,1080,298.7C1200,309,1320,299,1380,293.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="absolute z-1 w-full mb-7 h-10vh min-h-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" height="100%" width="100%">
            <path
              fill={process.env.colorPrimary}
              fillOpacity="1"
              d="M0,64L80,90.7C160,117,320,171,480,176C640,181,800,139,960,144C1120,149,1280,203,1360,229.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            />
          </svg>
        </div>

        {/* Services */}
        <div className="h-10vh min-h-5" />
        <Id id={items.services.id} />
        <div className="m-6 sm:m-8">
          <H2 className="font-bold font-main text-4xl text-primary">NUESTROS SERVICIOS</H2>
        </div>
        <div className="m-6 sm:m-8">
          <Services />
        </div>

        {/* Parent Company */}
        <Id id={items.parentCompany.id} />
        <Separation>
          <H2 className="font-bold font-main text-2xl p-4">CASA CENTRAL</H2>
          <div className="text-center flex flex-wrap flex-row items-center justify-center p-2">
            <div className="m-4">
              <div className="mb-8">
                <Paragraph className="relative m-auto z-1">Rafaela, Santa Fe</Paragraph>
                <Paragraph className="relative m-auto z-1">Calle 14 de Julio, nº 270</Paragraph>
              </div>
              <div className="mb-2">
                <Button
                  href={`tel:+${process.env.telCountryCode}${process.env.telAreaCode}${process.env.telPhoneNumber}`}
                  icon={HiPhone}
                  description={`+${process.env.telCountryCode} ${process.env.telAreaCode} ${process.env.telPhoneNumber}`}
                />
              </div>
              <Button href={`mailto:${process.env.email}`} icon={MdEmail} description={process.env.email} />
            </div>
            <div className="m-4">
              <Paragraph className="font-bold relative m-auto z-1">LUNES A VIERNES</Paragraph>
              <Paragraph className="relative m-auto z-1">8 – 12 Hs.</Paragraph>
              <Paragraph className="relative m-auto mb-2 z-1">16 - 20 Hs.</Paragraph>
              <Paragraph className="font-bold relative m-auto z-1">SÁBADO</Paragraph>
              <Paragraph className="relative m-auto z-1">8 – 12 Hs.</Paragraph>
            </div>
          </div>
        </Separation>

        {/* Map */}
        <div className="m-6 sm:m-8">
          <H2 className="font-bold font-main text-2xl sm:text-4xl text-primary">LOCALIDADES</H2>
        </div>
        <div className="flex flex-wrap justify-center max-w-60vh m-auto">
          <Map />
        </div>

        {/* Travel frecuency */}
        <Separation>
          <div className="m-4">
            <Paragraph className="font-bold text-center text-xl relative m-auto mb-2 z-1">Frecuencia de viaje</Paragraph>
            <Paragraph className="text-center text-sm sm:text-lg relative m-auto z-1">Rafaela – Reconquista/Avellaneda</Paragraph>
            <Paragraph className="text-center text-sm sm:text-lg relative m-auto z-1">Lunes – Miércoles – Viernes</Paragraph>
          </div>
        </Separation>

        {/* Clients */}
        <Id id={items.clients.id} />
        <div className="m-6 sm:m-8">
          <H2 className="font-bold font-main text-4xl">NOS ELIGEN</H2>
          <div className="m-auto w-0 -mb-4">
            <div className="-ml-16">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="120" height="20" preserveAspectRatio="none" viewBox="0 0 120 20">
                <g mask="url(#1)" fill="none">
                  <path
                    d="M -18.643669053451788,14 C -10.64,12.4 5.36,6 21.356330946548212,6 C 37.36,6 45.36,14 61.35633094654821,14 C 77.36,14 85.36,6.4 101.35633094654821,6 C 117.36,5.6 137.63,11.4 141.3563309465482,12 C 145.09,12.6 124.27,9.6 120,9"
                    stroke="rgba(0, 0, 0, 0.58)"
                    strokeWidth="2"
                  ></path>
                </g>
                <defs>
                  <mask id="1">
                    <rect width="120" height="20" fill="#ffffff"></rect>
                  </mask>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="m-6 sm:m-8">
          <Clients />
        </div>
      </Base>
    </>
  )
}

export default Root
