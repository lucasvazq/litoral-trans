const clients: { path: string, name: string }[] = [
  { path: "images/brands/boness.png", name: "Boness" },
  { path: "images/brands/andretich.png", name: "Carlos Andretich" },
  { path: "images/brands/insumet.png", name: "Insu-Met" },
  { path: "images/brands/mega.png", name: "Laboratorio Mega" },
  { path: "images/brands/marozzi.png", name: "Marozzi Baterías" },
  { path: "images/brands/papeltecnica.png", name: "Papeltecnica" },
  { path: "images/brands/faben.png", name: "Faben" },
  { path: "images/brands/villanueva.png", name: "Villanueva" },
  { path: "images/brands/veterinaria_rafaela.png", name: "Veterinaria Rafaela" },
];

export const Clients = () => (
  <div className="flex flex-wrap justify-center">
    {clients.map((data, index) => (
      <div key={index} className="greyscale h-24 w-24 m-4">
        <img src={data.path} alt={data.name} />
      </div>
    ))}
  </div>
);
