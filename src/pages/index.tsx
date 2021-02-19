import { NextSeo, LocalBusinessJsonLd } from 'next-seo';


const Root = () => {
  return (
      <>
        <NextSeo
          title='Inicio'
          description={`${process.env.SLOGAN}`}
          subject="Inicio"
          openGraph={{
            title: `${process.env.TITLE} | Inicio`,
            site_name: `${process.env.TITLE} | Inicio`,
            description: `${process.env.SLOGAN}`,
          }}
        />
        <LocalBusinessJsonLd
          type="Store"
          id="http://davesdeptstore.example.com"
          name="Dave's Department Store"
          description="Dave's latest department store in San Jose, now open"
          url="http://www.example.com/store-locator/sl/San-Jose-Westgate-Store/1427"
          telephone="+14088717984"
          address={{
            streetAddress: '1600 Saratoga Ave',
            addressLocality: 'San Jose',
            addressRegion: 'CA',
            postalCode: '95129',
            addressCountry: 'US',
          }}
          geo={{
            latitude: '37.293058',
            longitude: '-121.988331',
          }}
          images={[
            'https://example.com/photos/1x1/photo.jpg',
            'https://example.com/photos/4x3/photo.jpg',
            'https://example.com/photos/16x9/photo.jpg',
          ]}
          sameAs={[
            'www.company-website-url1.dev',
            'www.company-website-url2.dev',
            'www.company-website-url3.dev',
          ]}
          openingHours={[
            {
              opens: '08:00',
              closes: '23:59',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
              ],
              validFrom: '2019-12-23',
              validThrough: '2020-04-02',
            },
            {
              opens: '14:00',
              closes: '20:00',
              dayOfWeek: 'Sunday',
              validFrom: '2019-12-23',
              validThrough: '2020-04-02',
            },
          ]}
        >
        test
      </>
  );
};

export default Root;
