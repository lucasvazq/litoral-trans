import Link from "next/link"

import * as React from "react"

import { Paragraph } from ".."

export const Footer = () => (
  <>
    {/* Business information */}
    <div className="bg-dark">
      <div className="text-light w-70 right">
        <div className="flex flex-wrap flex-row items-center justify-center p-8">
          <div className="m-2">
            <Paragraph className="font-bold text-2xl mx-4 my-2">CASA CENTRAL</Paragraph>
            <div className="flex flex-row justify-center">
              <div className="mx-4">
                <div className="pt-2">
                  <Paragraph className="font-semibold text-lg">Rafaela, Santa Fe</Paragraph>
                  <Paragraph className="text-sm">Calle 14 de Julio, nº 270</Paragraph>
                </div>
                <div className="pt-2">
                  <Paragraph className="font-semibold text-lg">Email</Paragraph>
                  <Paragraph className="text-sm">{process.env.email}</Paragraph>
                </div>
                <div className="pt-2">
                  <Paragraph className="font-semibold text-lg">Teléfono</Paragraph>
                  <Paragraph className="text-sm">{`+${process.env.telCountryCode}${process.env.telAreaCode}${process.env.telPhoneNumber}`}</Paragraph>
                </div>
                <div className="pt-2">
                  <Paragraph className="font-semibold text-lg">Horarios</Paragraph>
                  <Paragraph className="text-sm">Lunes a Viernes de 8hs a 12hs y 16hs a 20hs.</Paragraph>
                  <Paragraph className="text-sm">Sábado de 8hs a 12hs.</Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Developer information */}
    <div className="text-light text-center text-sm bg-black flex items-center flex-col p-2">
      <Paragraph>Copyright 2021. Litoral-trans</Paragraph>
      <Paragraph>
        Diseñador por:
        <span className="italic ml-1">
          <Link href="https://lucasvazq.github.io/">Lucas Vazquez</Link>
        </span>
      </Paragraph>
    </div>
  </>
)
