import * as React from "react"

import { Image } from ".."

const clients: { path: string, name: string }[] = [
  { path: "images/brands/boness.webp", name: "Boness" },
  { path: "images/brands/andretich.webp", name: "Carlos Andretich" },
  { path: "images/brands/insumet.webp", name: "Insu-Met" },
  { path: "images/brands/mega.webp", name: "Laboratorio Mega" },
  { path: "images/brands/marozzi.webp", name: "Marozzi Baterías" },
  { path: "images/brands/papeltecnica.webp", name: "Papeltecnica" },
  { path: "images/brands/faben.webp", name: "Faben" },
  { path: "images/brands/villanueva.webp", name: "Villanueva" },
  { path: "images/brands/veterinaria_rafaela.webp", name: "Veterinaria Rafaela" },
]

export const Clients = (props: { className?: string }) => (
  <div className={`flex flex-wrap justify-center ${props.className || ""}`}>
    {clients.map((data, index) => (
      <div key={index} className="greyscale p-4">
        <Image src={data.path} alt={data.name} height={96} width={96} />
      </div>
    ))}
  </div>
)
