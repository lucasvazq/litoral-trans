import { useState, memo } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup, Point, Line } from "react-simple-maps";
import { IconType } from "react-icons";

type PointData = {coordinates: Point; iconSize: number; name?: string; namePosition?: string; fontSizeInit?: number; fontSizeEnd?: number; minZoom?: number, maxZoom?: number};

const MapClass = (props: {
    initialZoom: number;
    maxZoom: number;
    minZoom: number;
    coordinates: Point;
    limits: {top: number; bottom: number; left: number; right: number};
    layers: {file: string; size: number; color: string}[];
    markers: {
        color: string;
        icon: IconType;
        fontFamily: string;
        points: PointData[];
        lines: {from: Point; to: Point; color: string; width: number}[]
    }
}) => {

    function handleZoomIn() {
        if ((zoom * 1.5) >= props.maxZoom) return;
        const newZoom = zoom * 1.5;
        setZoom(newZoom);
        handleLimits({coordinates: coordinates, zoom: newZoom})
    }

    function handleZoomOut() {
        if ((zoom / 1.5) <= props.minZoom) return;
        const newZoom = zoom / 1.5
        setZoom(newZoom);
        handleLimits({coordinates: coordinates, zoom: newZoom})
    }

    function handleMoveEnd(config: {coordinates: Point; zoom: number}) {
        setCoordinates(config.coordinates);
        setZoom(config.zoom)
        handleLimits(config)
    }

    function handleLimits(config: {coordinates: Point; zoom: number}) {
        setCoordinates([
            handleCoordinatess({start: props.limits.right, end: props.limits.left}, {initial: props.coordinates[0], actual: config.coordinates[0]}, config.zoom),
            handleCoordinatess({start: props.limits.top, end: props.limits.bottom}, {initial: props.coordinates[1], actual: config.coordinates[1]}, config.zoom),
        ])
    }

    function handleCoordinatess(interval: {start: number, end: number}, coordinates: {initial: number, actual: number}, actualZoom: number) {
        const areaOfView = ((interval.end - coordinates.initial) - (interval.start - coordinates.initial)) * (props.minZoom / actualZoom)
        const limitStart = interval.start + (areaOfView / 2);
        const limitEnd = interval.end - (areaOfView / 2);
        if (!(limitStart > coordinates.actual)) {
            return limitStart
        }
        if (!(limitEnd < coordinates.actual)) {
            return limitEnd
        }
        return coordinates.actual
    }

    const getFontSize = (pointData: PointData) => (
        (pointData.fontSizeInit || 1)
        + (
            (pointData.fontSizeEnd - pointData.fontSizeInit)
            * (
                (
                    (pointData.minZoom || props.minZoom)
                    - zoom
                )
                / (
                    (pointData.minZoom || props.minZoom)
                    - (pointData.maxZoom || props.maxZoom)
                )
            )
        )
    )

    const getIconSize = (pointData: PointData) => (pointData.iconSize * (props.initialZoom / zoom))

    const [coordinates, setCoordinates] = useState(props.coordinates);
    const [zoom, setZoom] = useState(props.initialZoom)

    return (
        <>
            <ComposableMap
                projection="geoMercator"
                data-tip=""
                width={600}
                height={600}
            >
                <ZoomableGroup
                    zoom={zoom}
                    center={coordinates}
                    onMoveEnd={handleMoveEnd}
                    maxZoom={props.maxZoom}
                    minZoom={props.minZoom}
                >
                    {props.layers.map((layer, index) => (
                        <Geographies
                            key={index}
                            geography={layer.file}
                            strokeWidth={layer.size * (props.initialZoom / zoom)}
                            stroke={`${layer.color}`}
                            style={{ pointerEvents: "none" }}
                        >
                            {({ geographies }) => geographies.map((geo: {[key: string]: string | {[key: string]: string | number }}) => (
                                <Geography
                                    key={geo.rsmKey.toString()}
                                    geography={geo}
                                    style={{
                                        default: {
                                            fill: "rgba(0, 0, 0, 0)",
                                        },
                                    }}
                                />
                            ))}
                        </Geographies>
                    ))}
                    {props.markers.points.map((pointData, index) => (
                        <Marker key={index} coordinates={pointData.coordinates} opacity={(zoom > (pointData.minZoom || zoom - 1) && zoom < (pointData.maxZoom || zoom + 1)) ? 1 : 0}>
                            <g
                                transform={`translate(${(-getIconSize(pointData)) / 2}, ${-getIconSize(pointData)})`}
                            >
                                <props.markers.icon size={getIconSize(pointData)} fill={props.markers.color}/>
                                {pointData.namePosition && pointData.namePosition === 'left' &&
                                    <text
                                        y={getIconSize(pointData) / 1.15}
                                        x={getIconSize(pointData)}
                                        fontWeight="bold"
                                        style={{
                                            fontFamily: props.markers.fontFamily,
                                            fill: props.markers.color,
                                            fontSize: getFontSize(pointData),
                                        }}
                                    >
                                        {pointData.name}
                                    </text>
                                }
                            </g>
                            {pointData.namePosition && pointData.namePosition === 'top' &&
                                <>
                                    <text
                                        textAnchor="middle"
                                        y={-(getIconSize(pointData)) * 1.01}
                                        fontWeight="bold"
                                        style={{
                                            fontFamily: props.markers.fontFamily,
                                            fill: props.markers.color,
                                            fontSize: getFontSize(pointData),
                                        }}
                                    >
                                        {pointData.name}
                                    </text>
                                </>
                            }
                        </Marker>
                    ))}
                    {props.markers.lines.map((lineData, index) => (
                        <Line key={index} from={lineData.from} to={lineData.to} stroke={lineData.color} strokeWidth={lineData.width}/>
                    ))}
                </ZoomableGroup>
            </ComposableMap>
            <div className="controls">
                <button onClick={handleZoomIn}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                    >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </button>
                <button onClick={handleZoomOut}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </button>
            </div>
        </>
    );
};
export const Map = memo(MapClass)
