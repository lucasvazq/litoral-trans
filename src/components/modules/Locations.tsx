import { MdEmail } from 'react-icons/md'
import { HiPhone } from 'react-icons/hi'
import { Paragraph, H3, Route } from ".."

export const Locations = () => {
    return (
        <>
            <div className="m-8">mapa</div>
            <div className="m-8">
                <H3 className="text-xl font-semibold">CASA CENTRAL</H3>
                <div className="flex flex-col text-sm text-center">
                    <div className="m-2">
                        <Paragraph className="relative m-auto z-1">Rafaela, Santa Fe</Paragraph>
                        <Paragraph className="relative m-auto z-1">Calle 14 de Julio, nº 270</Paragraph>
                    </div>
                    <div className="m-2">
                        <Paragraph className="relative m-auto z-1">LUNES A VIERNES:</Paragraph>
                        <Paragraph className="relative m-auto z-1">8 – 12 Hs.</Paragraph>
                        <Paragraph className="relative m-auto z-1">16 - 20 Hs.</Paragraph>
                    </div>
                    <div className="m-2">
                        <Paragraph className="relative m-auto z-1">SÁBADO:</Paragraph>
                        <Paragraph className="relative m-auto z-1">8 – 12 Hs.</Paragraph>
                    </div>
                    <div className="m-2">
                        <Route href={`tel:${process.env.telCountryCode}${process.env.telAreaCode}${process.env.telPhoneNumber}`} icon={HiPhone} description={`${process.env.telCountryCode} ${process.env.telAreaCode} ${process.env.telPhoneNumber}`} className="relative z-1 m-auto"/>
                        <Route href={`mailto:${process.env.email}`} icon={MdEmail} description={process.env.email} className="relative z-1 m-auto"/>
                    </div>
                    <div className="h-44 w-16 bg-dots mt-0 right-0 absolute" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 66%, 50% 66%)' }}/>
                </div>
            </div>
        </>
    )
}