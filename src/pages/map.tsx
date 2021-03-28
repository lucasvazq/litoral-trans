import * as React from "react"

import { Point } from "react-simple-maps"

import { IoLocationSharp } from "react-icons/io5"

import Map from "../components/modules/Map"
import { mixHexColors } from "../components/utils"

class MapView extends React.Component {
  positions: { [key: string]: Point } = {
    Rafaela: [-61.506, -31.264],
    Esperanza: [-60.916, -31.456],
    Nelson: [-60.76, -31.265],
    "Llambi Campbell": [-60.746, -31.191],
    Emilia: [-60.733, -31.069],
    Videla: [-60.653, -30.946],
    "San Justo": [-60.595, -30.794],
    Ramayón: [-60.502, -30.677],
    "Marcelina Escalada": [-60.47, -30.585],
    "Colonia Silva": [-60.432, -30.453],
    "Gobernador Crespo": [-60.402, -30.369],
    "La Criolla": [-60.362, -30.231],
    "Vera y Pintado": [-60.336, -30.148],
    "Pedro Gomez Cello": [-60.317, -30.042],
    Calchaquí: [-60.287, -29.895],
    Margarita: [-60.25, -29.695],
    Vera: [-60.206, -29.471],
    Caraguatay: [-60.131, -29.422],
    Malabrigo: [-59.978, -29.365],
    Berna: [-59.847, -29.281],
    "Reconquista - Avellaneda": [-59.657, -29.156],
  }

  render() {
    return (
      <Map
        initialZoom={45}
        maxZoom={200}
        minZoom={20}
        initialCoordinates={[-60.611, -30.131]}
        layers={[
          { file: "/map/provincial_routes.topojson", size: 0.07, fill: mixHexColors(process.env.colorSecondarySemiDark, process.env.colorSecondary, 0.7) },
          { file: "/map/national_routes.topojson", size: 0.07, fill: mixHexColors(process.env.colorSecondarySemiDark, process.env.colorSecondary, 0.45) },
          { file: "/map/provinces.topojson", size: 0.15, fill: mixHexColors(process.env.colorSecondarySemiDark, process.env.colorSecondary, 0.15) },
        ]}
        limits={{
          top: -26.347,
          bottom: -35.926,
          left: -66.419,
          right: -55.198,
        }}
        markers={{
          fill: process.env.colorPrimary,
          icon: IoLocationSharp,
          fontFamily: "Poppins",
          points: [
            { coordinates: this.positions.Rafaela, iconSize: 0.7, name: "Rafaela", namePosition: "top", fontSizeInit: 0.5, fontSizeEnd: 0.2, maxZoom: 90 },
            { coordinates: this.positions["Reconquista - Avellaneda"], iconSize: 0.7, name: "Reconquista - Avellaneda", namePosition: "top", fontSizeInit: 0.5, fontSizeEnd: 0.2, maxZoom: 90 },
            { coordinates: this.positions.Esperanza, iconSize: 0.7, name: "Esperanza", namePosition: "top", fontSizeInit: 0.5, fontSizeEnd: 0.266, minZoom: 30, maxZoom: 70 },
            { coordinates: this.positions.Esperanza, iconSize: 0.7, name: "Esperanza", namePosition: "left", fontSizeInit: 0.266, fontSizeEnd: 0.2, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions["San Justo"], iconSize: 0.7, name: "San Justo", namePosition: "top", fontSizeInit: 0.5, fontSizeEnd: 0.266, minZoom: 30, maxZoom: 70 },
            { coordinates: this.positions["San Justo"], iconSize: 0.7, name: "San Justo", namePosition: "left", fontSizeInit: 0.266, fontSizeEnd: 0.2, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions.Vera, iconSize: 0.7, name: "Vera", namePosition: "top", fontSizeInit: 0.5, fontSizeEnd: 0.2, minZoom: 30, maxZoom: 90 },

            { coordinates: this.positions.Nelson, iconSize: 0.35, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions["Llambi Campbell"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions.Emilia, iconSize: 0.35, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions.Videla, iconSize: 0.35, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions.Ramayón, iconSize: 0.35, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions["Marcelina Escalada"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions["Colonia Silva"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions["Gobernador Crespo"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions["La Criolla"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions["Vera y Pintado"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions["Pedro Gomez Cello"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions.Calchaquí, iconSize: 0.35, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions.Margarita, iconSize: 0.35, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions.Caraguatay, iconSize: 0.35, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions.Malabrigo, iconSize: 0.35, minZoom: 70, maxZoom: 90 },
            { coordinates: this.positions.Berna, iconSize: 0.35, minZoom: 70, maxZoom: 90 },

            { coordinates: this.positions.Rafaela, iconSize: 0.55, name: "Rafaela", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions.Esperanza, iconSize: 0.55, name: "Esperanza", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions.Nelson, iconSize: 0.55, name: "Nelson", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions["Llambi Campbell"], iconSize: 0.55, name: "Llambi Campbell", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions.Emilia, iconSize: 0.55, name: "Emilia", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions.Videla, iconSize: 0.55, name: "Videla", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions["San Justo"], iconSize: 0.55, name: "San Justo", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions.Ramayón, iconSize: 0.55, name: "Ramayón", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions["Marcelina Escalada"], iconSize: 0.55, name: "Marcelina Escalada", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions["Colonia Silva"], iconSize: 0.55, name: "Colonia Silva", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions["Gobernador Crespo"], iconSize: 0.55, name: "Gobernador Crespo", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions["La Criolla"], iconSize: 0.55, name: "La Criolla", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions["Vera y Pintado"], iconSize: 0.55, name: "Vera y Pintado", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions["Pedro Gomez Cello"], iconSize: 0.55, name: "Pedro Gomez Cello", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions.Calchaquí, iconSize: 0.55, name: "Calchaquí", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions.Margarita, iconSize: 0.55, name: "Margarita", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions.Vera, iconSize: 0.55, name: "Vera", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions.Caraguatay, iconSize: 0.55, name: "Caraguatay", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions.Malabrigo, iconSize: 0.55, name: "Malabrigo", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions.Berna, iconSize: 0.55, name: "Berna", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
            { coordinates: this.positions["Reconquista - Avellaneda"], iconSize: 0.55, name: "Reconquista - Avellaneda", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90 },
          ],
        }}
      />
    )
  }
}

export default MapView
