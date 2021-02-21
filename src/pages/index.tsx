import { NextSeo } from 'next-seo';
import { Base, Slideshow, SlideContent, Services, Paragraph, H2, Locations } from '../components';
import { FaTruckLoading, FaShippingFast } from 'react-icons/fa'
import { GoPackage } from 'react-icons/go'
import { TiMessages } from 'react-icons/ti'
import { BsHouseDoor } from 'react-icons/bs'
import { AiOutlineSafety } from 'react-icons/ai'

const slides = [
  {
    slideContent: (
      <SlideContent>
        <p className="text-2xl font-semibold">LA MEJOR MANERA</p>
        <p className="text tracking-thight">PARA ENVIAR TUS PAQUETES</p>
      </SlideContent>
    ),
    image: 'images/slide/slide_1.jpg',
  },
  {
    slideContent: (
      <SlideContent>
        <p className="text-lg tracking-tighter font-semibold mb-4">SOLUCIONES DE LOGÍSTICA</p>
        <p className="text-sm tracking-wider">BRINDADA POR SUS DUEÑOS</p>
        <p className="text-sm">DISFRUTADA POR SUS CLIENTES</p></SlideContent>
    ),
    image: 'images/slide/slide_2.jpg',
  },
]

const services = [
  {icon: GoPackage, description: 'Encomiendas generales puerta a puerta'},
  {icon: BsHouseDoor, description: 'Retiro de mercadería en domicilio'},
  {icon: AiOutlineSafety, description: 'Gestión de contrareembolsos'},
  {icon: FaShippingFast, description: 'Redespacho a otras localidades'},
  {icon: FaTruckLoading, description: 'Entregas inmediatas una vez llegada a la localidad del destino'},
]

const Root = () => {

  return (
      <>
        <NextSeo
          title='Inicio'
          description={`${process.env.slogan}`}
          openGraph={{
            title: `${process.env.name} | Inicio`,
            site_name: `${process.env.name} | Inicio`,
            description: `${process.env.slogan}`,
          }}
        />
        <Base breadcrumb="home">
          <Slideshow slides={slides}/>
          <div className="bg-gradient-to-r from-primary to-secondary text-light text-lg main-font overflow-hidden p-8">
            <Paragraph className="relative m-auto z-1">{`${process.env.name} es una empresa de transporte familiar con más de 30 años de trayectoria.`}</Paragraph>
            <TiMessages className="text-9xl float-right -mr-4 -mt-8 -mb-28 opacity-30" />
          </div>
          <div className="bg-gray">
            <div className="m-8">
              <H2 className="text-4xl font-semibold text-primary">Servicios</H2>
            </div>
            <div className="m-8">
              <Services services={services}/>
            </div>
            <div className="m-8">
              <H2 className="text-4xl font-semibold text-primary">Ubicación</H2>
            </div>
            <Locations />
          </div>
        </Base>
      </>
  );
};

export default Root;

// ImCalendar
