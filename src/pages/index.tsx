import { NextSeo } from 'next-seo';
import {LocalBusiness, Service, WithContext} from 'schema-dts';

const LB: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Litoral Trans",
  "image": "",
  "@id": "https://litoral-trans.com.ar",
  "url": "https://litoral-trans.com.ar",
  "telephone": "",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Rafaela",
    "addressRegion": "AL",
    "postalCode": "S2300",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7590403,
    "longitude": -74.0392709
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Monday",
    "opens": "08:00",
    "closes": "12:00"
  },{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Monday",
    "opens": "08:00",
    "closes": "12:00"
  }]
}

const Servicio: Service = {
  // "@context": "https://schema.org/",
  "@type": "Service",
  "serviceType": "Servicio de Transporte",
  "provider": {
    "@type": "LocalBusiness",
    "name": process.env.TITLE,
  },
  "areaServed": {
    "@type": "State",
    "name": "Área de Servicio",
    "description": "Litoral de Santa Fe",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicio de Transporte",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "House Cleaning",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Apartment light cleaning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "House light cleaning up to 2 bedrooms"
            }
          },
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "One-time services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Window washing"
            }
          },
        ]
      }
    ]
  }
}


// subject="Inicio"

const Root = () => {
  return (
      <>
        <NextSeo
          title='Inicio'
          description={`${process.env.SLOGAN}`}
          openGraph={{
            title: `${process.env.TITLE} | Inicio`,
            site_name: `${process.env.TITLE} | Inicio`,
            description: `${process.env.SLOGAN}`,
          }}
        />
        test
      </>
  );
};

export default Root;
