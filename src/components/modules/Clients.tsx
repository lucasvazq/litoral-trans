import * as React from "react"

import Image from "../elements/Image"

interface ClientsProps {
  className?: string;
}

class Clients extends React.Component<ClientsProps> {
  clients: { path: string, name: string }[] = [
    { path: "/images/brands/mega.webp", name: "Laboratorio Mega" },
    { path: "/images/brands/insumet.webp", name: "Insu-Met" },
    { path: "/images/brands/marozzi.webp", name: "Marozzi Baterías" },
    { path: "/images/brands/faben.webp", name: "Faben" },
    { path: "/images/brands/boness.webp", name: "Boness" },
    { path: "/images/brands/andretich.webp", name: "Carlos Andretich" },
    { path: "/images/brands/villanueva.webp", name: "Villanueva" },
    { path: "/images/brands/veterinaria_rafaela.webp", name: "Veterinaria Rafaela" },
    { path: "/images/brands/papeltecnica.webp", name: "Papeltecnica" },
  ]

  render() {
    return (
      <div className={`flex flex-wrap justify-center ${this.props.className || ""}`}>
        {this.clients.map((data, index) => (
          <div key={index} className="filter-greyscale hover:filter-none p-4">
            <Image src={data.path} alt={data.name} height={96} width={96} />
          </div>
        ))}
      </div>
    )
  }
}

export default Clients
