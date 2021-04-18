import * as React from "react"

import Image from "../elements/Image"

interface ClientsProps {
  className?: string;
}

class Clients extends React.Component<ClientsProps> {
  clients: { path: string, name: string }[] = [
    { path: "/static/images/clients/mega.webp", name: "Laboratorio Mega" },
    { path: "/static/images/clients/insumet.webp", name: "Insu-Met" },
    { path: "/static/images/clients/marozzi.webp", name: "Marozzi Baterías" },
    { path: "/static/images/clients/faben.webp", name: "Faben" },
    { path: "/static/images/clients/boness.webp", name: "Boness" },
    { path: "/static/images/clients/andretich.webp", name: "Carlos Andretich" },
    { path: "/static/images/clients/villanueva.webp", name: "Villanueva" },
    { path: "/static/images/clients/veterinaria_rafaela.webp", name: "Veterinaria Rafaela" },
    { path: "/static/images/clients/papeltecnica.webp", name: "Papeltecnica" },
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
