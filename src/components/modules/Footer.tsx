import Link from "next/link"

import * as React from "react"

import { FaShippingFast } from "react-icons/fa"

import { Paragraph, Section } from ".."

export const Footer = () => (
  <>
    {/* Business information */}
    <Section className="bg-secondary-semi-dark">
      <div className="grid grid-cols-2 grid-rows-1 md:divide-x-2 max-w-200 m-auto">
        <div className="text-center hidden md:flex flex-col items-center justify-center col-start-1 col-end-2 row-start-1 row-end-2">
          <Paragraph className="font-bold text-4xl">
            <FaShippingFast className="inline-block mr-1" /> Litoral Trans
          </Paragraph>
          <Paragraph className="text-base text-lg">{process.env.slogan}</Paragraph>
        </div>
        <div className="flex flex-col items-center col-start-1 md:col-start-2 col-end-3 row-start-1 row-end-1">
          <div>
            <Paragraph className="font-bold text-2xl">CASA CENTRAL</Paragraph>
            <Paragraph className="font-semibold text-lg pt-2">Rafaela, Santa Fe</Paragraph>
            <Paragraph className="text-sm">Calle 14 de Julio, nº 270</Paragraph>
            <Paragraph className="font-semibold text-lg pt-2">Email</Paragraph>
            <Paragraph className="text-sm">{process.env.email}</Paragraph>
            <Paragraph className="font-semibold text-lg pt-2">Teléfono</Paragraph>
            <Paragraph className="text-sm">{`+${process.env.telCountryCode}${process.env.telAreaCode}${process.env.telPhoneNumber}`}</Paragraph>
            <Paragraph className="font-semibold text-lg pt-2">Horarios</Paragraph>
            <Paragraph className="text-sm">Lunes a Viernes de 8hs a 12hs y 16hs a 20hs.</Paragraph>
            <Paragraph className="text-sm">Sábado de 8hs a 12hs.</Paragraph>
          </div>
        </div>
      </div>
    </Section>

    {/* Developer information */}
    <div className="bg-secondary-dark text-center text-sm relative flex flex-col items-center p-6 z-4 sm:z-0">
      <Paragraph>Copyright 2021. Litoral-trans</Paragraph>
      <Paragraph>
        {`Diseñador por: `}
        <span className="border-b border-secondary-light italic">
          <Link href="https://lucasvazq.github.io/">Lucas Vazquez</Link>
        </span>
      </Paragraph>
    </div>
  </>
)
