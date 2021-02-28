import { IoLocationSharp } from 'react-icons/io5'
import { MapClass } from "../components"
import { Point } from "react-simple-maps";

const mixHexColors = (color1: string, color2: string, weight: number) => {
    const valuesColor1 = color1.replace('#', '').match(/.{2}/g).map((value) =>
        parseInt(value, 16)
    )
    const valuesColor2 = color2.replace('#', '').match(/.{2}/g).map((value) =>
        parseInt(value, 16)
    )
    const mixedValues = valuesColor1.map((value, index) =>
        Math.round((value * (1 - weight)) + (valuesColor2[index] * (weight))).toString(16)
    )
    return `#${mixedValues.join('')}`
}

const initialZoom = 45
const maxZoom = 200
const minZoom = 20
const coordinates: Point = [-60.611, -30.131]
const limits = {
    top: -26.347,
    bottom: -35.926,
    left: -66.419,
    right: -55.198,
}

const positions: {[key: string]: Point} = {
    "Rafaela": [-61.506, -31.264],
    "Esperanza": [-60.916, -31.456],
    "Nelson": [-60.760, -31.265],
    "Llambi Campbell": [-60.746, -31.191],
    "Emilia": [-60.733, -31.069],
    "Videla": [-60.653, -30.946],
    "San Justo": [-60.595, -30.794],
    "Ramayón": [-60.502, -30.677],
    "Marcelina Escalada": [-60.470, -30.585],
    "Colonia Silva": [-60.432, -30.453],
    "Gobernador Crespo": [-60.402, -30.369],
    "La Criolla": [-60.362, -30.231],
    "Vera y Pintado": [-60.336, -30.148],
    "Pedro Gomez Cello": [-60.317, -30.042],
    "Calchaquí": [-60.287, -29.895],
    "Margarita": [-60.250, -29.695],
    "Vera": [-60.206, -29.471],
    "Caraguatay": [-60.131, -29.422],
    "Malabrigo": [-59.978, -29.365],
    "Berna": [-59.847, -29.281],
    "Reconquista - Avellaneda": [-59.657, -29.156],
}

const lines: {from: Point; to: Point; color: string; width: number}[] = [
    {from: positions["Rafaela"], to: positions["Esperanza"], color: process.env.primary, width: 0.05},
]

const points: {coordinates: Point; iconSize: number; name?: string; namePosition?: string; fontSizeInit?: number; fontSizeEnd?: number; minZoom?: number, maxZoom?: number}[] = [
    // Manucho ?
    // Cabal ?
    // San Justo: san roque 2144

    {coordinates: positions["Rafaela"], iconSize: 0.7, name: "Rafaela", namePosition: "top", fontSizeInit: 0.5, fontSizeEnd: 0.2, maxZoom: 90},
    {coordinates: positions["Reconquista - Avellaneda"], iconSize: 0.7, name: "Reconquista - Avellaneda", namePosition: "top", fontSizeInit: 0.5, fontSizeEnd: 0.2, maxZoom: 90},
    {coordinates: positions["Esperanza"], iconSize: 0.7, name: "Esperanza", namePosition: "top", fontSizeInit: 0.5, fontSizeEnd: 0.266, minZoom: 30, maxZoom: 70},
    {coordinates: positions["Esperanza"], iconSize: 0.7, name: "Esperanza", namePosition: "left", fontSizeInit: 0.266, fontSizeEnd: 0.2, minZoom: 70, maxZoom: 90},
    {coordinates: positions["San Justo"], iconSize: 0.7, name: "San Justo", namePosition: "top", fontSizeInit: 0.5, fontSizeEnd: 0.266, minZoom: 30, maxZoom: 70},
    {coordinates: positions["San Justo"], iconSize: 0.7, name: "San Justo", namePosition: "left", fontSizeInit: 0.266, fontSizeEnd: 0.2, minZoom: 70, maxZoom: 90},
    {coordinates: positions["Vera"], iconSize: 0.7, name: "Vera", namePosition: "top", fontSizeInit: 0.5, fontSizeEnd: 0.2, minZoom: 30, maxZoom: 90},

    {coordinates: positions["Nelson"], iconSize: 0.35, minZoom: 70, maxZoom: 90},
    {coordinates: positions["Llambi Campbell"], iconSize: 0.35, minZoom: 70, maxZoom: 90},
    {coordinates: positions["Emilia"], iconSize: 0.35, minZoom: 70, maxZoom: 90},
    {coordinates: positions["Videla"], iconSize: 0.35, minZoom: 70, maxZoom: 90},
    {coordinates: positions["Ramayón"], iconSize: 0.35, minZoom: 70, maxZoom: 90},
    {coordinates: positions["Marcelina Escalada"], iconSize: 0.35, minZoom: 70, maxZoom: 90},
    {coordinates: positions["Colonia Silva"], iconSize: 0.35, minZoom: 70, maxZoom: 90},
    {coordinates: positions["Gobernador Crespo"], iconSize: 0.35, minZoom: 70, maxZoom: 90},
    {coordinates: positions["La Criolla"], iconSize: 0.35, minZoom: 70, maxZoom: 90},
    {coordinates: positions["Vera y Pintado"], iconSize: 0.35, minZoom: 70, maxZoom: 90},
    {coordinates: positions["Pedro Gomez Cello"], iconSize: 0.35, minZoom: 70, maxZoom: 90},
    {coordinates: positions["Calchaquí"], iconSize: 0.35, minZoom: 70, maxZoom: 90},
    {coordinates: positions["Margarita"], iconSize: 0.35, minZoom: 70, maxZoom: 90},
    {coordinates: positions["Caraguatay"], iconSize: 0.35, minZoom: 70, maxZoom: 90},
    {coordinates: positions["Malabrigo"], iconSize: 0.35, minZoom: 70, maxZoom: 90},
    {coordinates: positions["Berna"], iconSize: 0.35, minZoom: 70, maxZoom: 90},

    {coordinates: positions["Rafaela"], iconSize: 0.55, name: "Rafaela", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Esperanza"], iconSize: 0.55, name: "Esperanza", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Nelson"], iconSize: 0.55, name: "Nelson", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Llambi Campbell"], iconSize: 0.55, name: "Llambi Campbell", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Emilia"], iconSize: 0.55, name: "Emilia", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Videla"], iconSize: 0.55, name: "Videla", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["San Justo"], iconSize: 0.55, name: "San Justo", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Ramayón"], iconSize: 0.55, name: "Ramayón", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Marcelina Escalada"], iconSize: 0.55, name: "Marcelina Escalada", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Colonia Silva"], iconSize: 0.55, name: "Colonia Silva", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Gobernador Crespo"], iconSize: 0.55, name: "Gobernador Crespo", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["La Criolla"], iconSize: 0.55, name: "La Criolla", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Vera y Pintado"], iconSize: 0.55, name: "Vera y Pintado", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Pedro Gomez Cello"], iconSize: 0.55, name: "Pedro Gomez Cello", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Calchaquí"], iconSize: 0.55, name: "Calchaquí", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Margarita"], iconSize: 0.55, name: "Margarita", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Vera"], iconSize: 0.55, name: "Vera", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Caraguatay"], iconSize: 0.55, name: "Caraguatay", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Malabrigo"], iconSize: 0.55, name: "Malabrigo", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Berna"], iconSize: 0.55, name: "Berna", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
    {coordinates: positions["Reconquista - Avellaneda"], iconSize: 0.55, name: "Reconquista - Avellaneda", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null},
]
const markers = {
    color: process.env.primary,
    icon: IoLocationSharp,
    fontFamily: 'Poppins',
    points: points,
    lines: lines,
}
const layers = [
    {file: '/map/provincial_routes_santa_fe.json', size: 0.07, color: mixHexColors(process.env.dark, process.env.gray, 0.7)},
    {file: '/map/national_routes_2.json', size: 0.07, color: mixHexColors(process.env.dark, process.env.gray, 0.45)},
    {file: '/map/provinces_2.json', size: 0.2, color: mixHexColors(process.env.dark, process.env.gray, 0.15)},
]

const MapApp = () => {
    return (
        <Map
            initialZoom={initialZoom}
            maxZoom={maxZoom}
            minZoom={minZoom}
            coordinates={coordinates}
            limits={limits}
            markers={markers}
            layers={layers}
        />
    )
}
export default MapApp