import { NextSeo } from "next-seo";
import { Route, Base, Slideshow, SlideContent, Services, Paragraph, H2, Locations, Clients, Separation } from "../components";
import { FaTruckLoading, FaShippingFast } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";

const slides = [
  {
    slideContent: (
      <SlideContent>
        <p className="text-2xl font-semibold">LA MEJOR MANERA</p>
        <p className="text tracking-thight">PARA ENVIAR TUS PAQUETES</p>
      </SlideContent>
    ),
    image: "/images/slide/slide_1.jpg",
  },
  {
    slideContent: (
      <SlideContent>
        <p className="text-lg tracking-tighter font-semibold mb-4">SOLUCIONES DE LOGÍSTICA</p>
        <p className="text-sm tracking-wider">BRINDADA POR SUS DUEÑOS</p>
        <p className="text-sm">DISFRUTADA POR SUS CLIENTES</p>
      </SlideContent>
    ),
    image: "/images/slide/slide_2.jpg",
  },
];

const services = [
  { icon: GoPackage, description: "Encomiendas generales puerta a puerta" },
  { icon: BsHouseDoor, description: "Retiro de mercadería en domicilio" },
  { icon: AiOutlineSafety, description: "Gestión de contrareembolsos" },
  { icon: FaShippingFast, description: "Redespacho a otras localidades" },
  { icon: FaTruckLoading, description: "Entregas inmediatas una vez llegada a la localidad del destino" },
];

const items = [
  { href: "/#servicios", description: "Servicios" },
  { href: "/#casa-central", description: "Ubicación" },
  { href: "/#clientes", description: "Clientes" },
];

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
      <Base items={items}>
        <Slideshow slides={slides} />

        <Separation>
          <Paragraph className="relative m-auto z-1 text-center">{`${process.env.name} es una empresa de transporte familiar con más de 30 años de trayectoria.`}</Paragraph>
        </Separation>
        <div id="servicios"></div>
        <div className="h-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill={process.env.colorTerciary}
              fill-opacity="1"
              d="M0,320L60,314.7C120,309,240,299,360,250.7C480,203,600,117,720,117.3C840,117,960,203,1080,208C1200,213,1320,139,1380,101.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </svg>
        </div>
        <div className="h-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill={process.env.colorSecondary}
              fill-opacity="1"
              d="M0,256L60,240C120,224,240,192,360,186.7C480,181,600,203,720,229.3C840,256,960,288,1080,298.7C1200,309,1320,299,1380,293.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="h-14">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill={process.env.colorPrimary}
              fill-opacity="1"
              d="M0,64L80,90.7C160,117,320,171,480,176C640,181,800,139,960,144C1120,149,1280,203,1360,229.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            />
          </svg>
        </div>

        <div className="m-8 pt-8">
          <H2 className="text-6xl handwritten-font text-primary">Nuestros Servicios</H2>
        </div>
        <div className="m-8">
          <Services services={services} />
        </div>

        <div id="casa-central" className="-mt-24 mb-32"></div>
        <Separation>
          <H2 className="text-4xl handwritten-font p-4">Ubicá nuestra Casa Central</H2>
          <div className="flex flex-wrap flex-row justify-center text-center items-center p-2">
            <div className="m-2">
              <div className="m-2">
                <Paragraph className="relative m-auto z-1">Rafaela, Santa Fe</Paragraph>
                <Paragraph className="relative m-auto z-1">Calle 14 de Julio, nº 270</Paragraph>
              </div>
              <div className="m-2">
                <Route
                  href={`tel:+${process.env.telCountryCode}${process.env.telAreaCode}${process.env.telPhoneNumber}`}
                  icon={HiPhone}
                  description={`+${process.env.telCountryCode} ${process.env.telAreaCode} ${process.env.telPhoneNumber}`}
                  className="relative z-1 m-auto"
                />
                <Route href={`mailto:${process.env.email}`} icon={MdEmail} description={process.env.email} className="relative z-1 m-auto" />
              </div>
            </div>
            <div className="m-2">
              <div className="m-2">
                <Paragraph className="relative m-auto z-1">Lunes a Viernes:</Paragraph>
                <Paragraph className="relative m-auto z-1">8 – 12 Hs.</Paragraph>
                <Paragraph className="relative m-auto z-1">16 - 20 Hs.</Paragraph>
              </div>
              <div className="m-2">
                <Paragraph className="relative m-auto z-1">Sábado:</Paragraph>
                <Paragraph className="relative m-auto z-1">8 – 12 Hs.</Paragraph>
              </div>
            </div>
          </div>
        </Separation>

        <div className="m-8">
          <H2 className="text-6xl handwritten-font text-primary">Mirá por donde andamos!</H2>
        </div>
        <Locations />

        <Separation>
          <div className="m-4">
            <Paragraph className="relative text-center m-auto z-1 text-xl font-bold mb-2">Frecuencia de viaje</Paragraph>
            <Paragraph className="relative text-center m-auto z-1 text-sm">Rafaela – Reconquista/Avellaneda</Paragraph>
            <Paragraph className="relative text-center m-auto z-1 text-sm">Lunes – Miércoles – Viernes</Paragraph>
          </div>
        </Separation>

        <div id="clientes" className="-mt-24 mb-32"></div>
        <div className="m-8">
          <H2 className="text-4xl handwritten-font">Nos eligen</H2>
          <div className="m-auto w-0 -mb-4">
            <div className="-ml-16">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="120" height="20" preserveAspectRatio="none" viewBox="0 0 120 20">
                <g mask='url("#SvgjsMask1124")' fill="none">
                  <path
                    d="M -18.643669053451788,14 C -10.64,12.4 5.36,6 21.356330946548212,6 C 37.36,6 45.36,14 61.35633094654821,14 C 77.36,14 85.36,6.4 101.35633094654821,6 C 117.36,5.6 137.63,11.4 141.3563309465482,12 C 145.09,12.6 124.27,9.6 120,9"
                    stroke="rgba(0, 0, 0, 0.58)"
                    stroke-width="2"
                  ></path>
                </g>
                <defs>
                  <mask id="SvgjsMask1124">
                    <rect width="120" height="20" fill="#ffffff"></rect>
                  </mask>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="m-8">
          <Clients />
        </div>
      </Base>
    </>
  );
};

export default Root;
