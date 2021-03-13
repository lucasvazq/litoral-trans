import { useState, memo } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup, Point, Line } from "react-simple-maps";
import { IoLocationSharp } from "react-icons/io5";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

type PointData = { coordinates: Point, iconSize: number, name?: string, namePosition?: string, fontSizeInit?: number, fontSizeEnd?: number, minZoom?: number, maxZoom?: number };

const mixHexColors = (color1: string, color2: string, weight: number) => {
  const valuesColor1 = color1
    .replace("#", "")
    .match(/.{2}/g)
    .map((value) => parseInt(value, 16));
  const valuesColor2 = color2
    .replace("#", "")
    .match(/.{2}/g)
    .map((value) => parseInt(value, 16));
  const mixedValues = valuesColor1.map((value, index) => Math.round(value * (1 - weight) + valuesColor2[index] * weight).toString(16));
  return `#${mixedValues.join("")}`;
};

const initialZoom = 45;
const maxZoom = 200;
const minZoom = 20;
const initialCoordinates: Point = [-60.611, -30.131];
const limits = {
  top: -26.347,
  bottom: -35.926,
  left: -66.419,
  right: -55.198,
};

const positions: { [key: string]: Point } = {
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
};

const lines: { from: Point, to: Point, color: string, width: number }[] = [];

const points: { coordinates: Point, iconSize: number, name?: string, namePosition?: string, fontSizeInit?: number, fontSizeEnd?: number, minZoom?: number, maxZoom?: number }[] = [
  // Manucho ?
  // Cabal ?
  // San Justo: san roque 2144

  { coordinates: positions["Rafaela"], iconSize: 0.7, name: "Rafaela", namePosition: "top", fontSizeInit: 0.5, fontSizeEnd: 0.2, maxZoom: 90 },
  { coordinates: positions["Reconquista - Avellaneda"], iconSize: 0.7, name: "Reconquista - Avellaneda", namePosition: "top", fontSizeInit: 0.5, fontSizeEnd: 0.2, maxZoom: 90 },
  { coordinates: positions["Esperanza"], iconSize: 0.7, name: "Esperanza", namePosition: "top", fontSizeInit: 0.5, fontSizeEnd: 0.266, minZoom: 30, maxZoom: 70 },
  { coordinates: positions["Esperanza"], iconSize: 0.7, name: "Esperanza", namePosition: "left", fontSizeInit: 0.266, fontSizeEnd: 0.2, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["San Justo"], iconSize: 0.7, name: "San Justo", namePosition: "top", fontSizeInit: 0.5, fontSizeEnd: 0.266, minZoom: 30, maxZoom: 70 },
  { coordinates: positions["San Justo"], iconSize: 0.7, name: "San Justo", namePosition: "left", fontSizeInit: 0.266, fontSizeEnd: 0.2, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["Vera"], iconSize: 0.7, name: "Vera", namePosition: "top", fontSizeInit: 0.5, fontSizeEnd: 0.2, minZoom: 30, maxZoom: 90 },

  { coordinates: positions["Nelson"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["Llambi Campbell"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["Emilia"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["Videla"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["Ramayón"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["Marcelina Escalada"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["Colonia Silva"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["Gobernador Crespo"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["La Criolla"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["Vera y Pintado"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["Pedro Gomez Cello"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["Calchaquí"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["Margarita"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["Caraguatay"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["Malabrigo"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },
  { coordinates: positions["Berna"], iconSize: 0.35, minZoom: 70, maxZoom: 90 },

  { coordinates: positions["Rafaela"], iconSize: 0.55, name: "Rafaela", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Esperanza"], iconSize: 0.55, name: "Esperanza", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Nelson"], iconSize: 0.55, name: "Nelson", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Llambi Campbell"], iconSize: 0.55, name: "Llambi Campbell", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Emilia"], iconSize: 0.55, name: "Emilia", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Videla"], iconSize: 0.55, name: "Videla", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["San Justo"], iconSize: 0.55, name: "San Justo", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Ramayón"], iconSize: 0.55, name: "Ramayón", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Marcelina Escalada"], iconSize: 0.55, name: "Marcelina Escalada", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Colonia Silva"], iconSize: 0.55, name: "Colonia Silva", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Gobernador Crespo"], iconSize: 0.55, name: "Gobernador Crespo", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["La Criolla"], iconSize: 0.55, name: "La Criolla", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Vera y Pintado"], iconSize: 0.55, name: "Vera y Pintado", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Pedro Gomez Cello"], iconSize: 0.55, name: "Pedro Gomez Cello", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Calchaquí"], iconSize: 0.55, name: "Calchaquí", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Margarita"], iconSize: 0.55, name: "Margarita", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Vera"], iconSize: 0.55, name: "Vera", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Caraguatay"], iconSize: 0.55, name: "Caraguatay", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Malabrigo"], iconSize: 0.55, name: "Malabrigo", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Berna"], iconSize: 0.55, name: "Berna", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
  { coordinates: positions["Reconquista - Avellaneda"], iconSize: 0.55, name: "Reconquista - Avellaneda", namePosition: "left", fontSizeInit: 0.2, fontSizeEnd: 0.1, minZoom: 90, maxZoom: null },
];
const markers = {
  color: process.env.colorPrimary,
  icon: IoLocationSharp,
  fontFamily: "Poppins",
  points: points,
  lines: lines,
};
const layers = [
  { file: "/map/provincial_routes.topojson", size: 0.07, color: mixHexColors(process.env.colorDark, process.env.colorGray, 0.7) },
  { file: "/map/national_routes.topojson", size: 0.07, color: mixHexColors(process.env.colorDark, process.env.colorGray, 0.45) },
  { file: "/map/provinces.topojson", size: 0.2, color: mixHexColors(process.env.colorDark, process.env.colorGray, 0.15) },
];

const MapClass = () => {
  function handleZoomIn() {
    if (zoom * 1.5 >= maxZoom) return;
    const newZoom = zoom * 1.5;
    setZoom(newZoom);
    handleLimits({ coordinates: coordinates, zoom: newZoom });
  }

  function handleZoomOut() {
    if (zoom / 1.5 <= minZoom) return;
    const newZoom = zoom / 1.5;
    setZoom(newZoom);
    handleLimits({ coordinates: coordinates, zoom: newZoom });
  }

  function handleMoveEnd(config: { coordinates: Point, zoom: number }) {
    console.log(config.coordinates);
    setCoordinates(config.coordinates);
    setZoom(config.zoom);
    handleLimits(config);
  }

  function handleLimits(config: { coordinates: Point, zoom: number }) {
    setCoordinates([
      handleCoordinatess({ start: limits.right, end: limits.left }, { initial: initialCoordinates[0], actual: config.coordinates[0] }, config.zoom),
      handleCoordinatess({ start: limits.top, end: limits.bottom }, { initial: initialCoordinates[1], actual: config.coordinates[1] }, config.zoom),
    ]);
  }

  function handleCoordinatess(interval: { start: number, end: number }, coordinates: { initial: number, actual: number }, actualZoom: number) {
    const areaOfView = (interval.end - coordinates.initial - (interval.start - coordinates.initial)) * (minZoom / actualZoom);
    const limitStart = interval.start + areaOfView / 2;
    const limitEnd = interval.end - areaOfView / 2;
    if (!(limitStart > coordinates.actual)) {
      return limitStart;
    }
    if (!(limitEnd < coordinates.actual)) {
      return limitEnd;
    }
    return coordinates.actual;
  }

  const getFontSize = (pointData: PointData) =>
    (pointData.fontSizeInit || 1) + (pointData.fontSizeEnd - pointData.fontSizeInit) * (((pointData.minZoom || minZoom) - zoom) / ((pointData.minZoom || minZoom) - (pointData.maxZoom || maxZoom)));

  const getIconSize = (pointData: PointData) => pointData.iconSize * (initialZoom / zoom);

  const [coordinates, setCoordinates] = useState(initialCoordinates);
  const [zoom, setZoom] = useState(initialZoom);

  return (
    <>
      <div style={{ backgroundColor: mixHexColors(process.env.colorDark, process.env.colorGray, 0.95) }}>
        <ComposableMap projection="geoMercator" data-tip="" fill="red" width={600} height={600}>
          <ZoomableGroup zoom={zoom} center={coordinates} onMoveEnd={handleMoveEnd} maxZoom={maxZoom} minZoom={minZoom}>
            {layers.map((layer, index) => (
              <Geographies key={index} geography={layer.file} strokeWidth={layer.size * (initialZoom / zoom)} stroke={layer.color ? layer.color : null} style={{ pointerEvents: "none" }}>
                {({ geographies }) =>
                  geographies.map((geo: { [key: string]: string | { [key: string]: string | number } }) => (
                    <Geography
                      key={geo.rsmKey.toString()}
                      geography={geo}
                      style={{
                        default: {
                          fill: "transparent",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>
            ))}
            {markers.points.map((pointData, index) => (
              <Marker key={index} coordinates={pointData.coordinates} opacity={zoom > (pointData.minZoom || zoom - 1) && zoom < (pointData.maxZoom || zoom + 1) ? 1 : 0}>
                <g transform={`translate(${-getIconSize(pointData) / 2}, ${-getIconSize(pointData)})`}>
                  <markers.icon size={getIconSize(pointData)} fill={markers.color} />
                  {pointData.namePosition && pointData.namePosition === "left" && (
                    <text
                      y={getIconSize(pointData) / 1.15}
                      x={getIconSize(pointData)}
                      fontWeight="bold"
                      style={{
                        fontFamily: markers.fontFamily,
                        fill: markers.color,
                        fontSize: getFontSize(pointData),
                      }}
                    >
                      {pointData.name}
                    </text>
                  )}
                </g>
                {pointData.namePosition && pointData.namePosition === "top" && (
                  <>
                    <text
                      textAnchor="middle"
                      y={-getIconSize(pointData) * 1.01}
                      fontWeight="bold"
                      style={{
                        fontFamily: markers.fontFamily,
                        fill: markers.color,
                        fontSize: getFontSize(pointData),
                      }}
                    >
                      {pointData.name}
                    </text>
                  </>
                )}
              </Marker>
            ))}
            {markers.lines.map((lineData, index) => (
              <Line key={index} from={lineData.from} to={lineData.to} stroke={lineData.color} strokeWidth={lineData.width} />
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>
      <div className="text-xl mt-2 text-secondary flex flex-row-reverse">
        <button className="m-1" onClick={handleZoomIn}>
          <FaPlusSquare />
        </button>
        <button className="m-1" onClick={handleZoomOut}>
          <FaMinusSquare />
        </button>
      </div>
    </>
  );
};
export const Map = memo(MapClass);
