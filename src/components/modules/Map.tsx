import * as React from "react"

import { FaMinusSquare, FaPlusSquare } from "react-icons/fa"

import { ComposableMap, Geographies, Geography, Marker, Point, ZoomableGroup } from "react-simple-maps"

import IconButton from "../elements/IconButton"

interface PointData {
  coordinates: Point;
  iconSize: number;
  name?: string;
  namePosition?: string;
  fontSizeInit?: number;
  fontSizeEnd?: number;
  minZoom?: number;
  maxZoom?: number;
}

interface MapProps {
  initialZoom: number;
  maxZoom: number;
  minZoom: number;
  initialCoordinates: Point;
  layers: { file: string, size: number, fill: string }[];
  limits: { top: number, bottom: number, left: number, right: number };
  markers: { fill: string, icon: React.ComponentType<{ size: number, fill?: string }>, fontFamily: string, points: PointData[] };
}

interface MapState {
  coordinates: Point;
  zoom: number;
}

class Map extends React.Component<MapProps, MapState> {
  constructor(props: MapProps) {
    super(props)
    this.state = {
      coordinates: this.props.initialCoordinates,
      zoom: this.props.initialZoom,
    }
  }

  handleZoomIn = () => {
    if (this.state.zoom * 1.5 >= this.props.maxZoom) return
    this.setState({ zoom: this.state.zoom * 1.5 })
    this.handleLimits()
  }

  handleZoomOut = () => {
    if (this.state.zoom / 1.5 <= this.props.minZoom) return
    this.setState({ zoom: this.state.zoom / 1.5 })
    this.handleLimits()
  }

  handleMoveEnd = (config: { coordinates: Point, zoom: number }) => {
    // improve this
    this.setState({ coordinates: config.coordinates })
    this.setState({ zoom: config.zoom })
    this.handleLimits()
  }

  handleLimits = () => {
    this.setState({
      coordinates: [
        this.handleCoordinatess({ start: this.props.limits.right, end: this.props.limits.left }, { initial: this.props.initialCoordinates[0], actual: this.state.coordinates[0] }),
        this.handleCoordinatess({ start: this.props.limits.top, end: this.props.limits.bottom }, { initial: this.props.initialCoordinates[1], actual: this.state.coordinates[1] }),
      ],
    })
  }

  handleCoordinatess = (interval: { start: number, end: number }, coordinates: { initial: number, actual: number }) => {
    const areaOfView = (interval.end - coordinates.initial - (interval.start - coordinates.initial)) * (this.props.minZoom / this.state.zoom)
    const limitStart = interval.start + areaOfView / 2
    const limitEnd = interval.end - areaOfView / 2
    if (!(limitStart > coordinates.actual)) {
      return limitStart
    }
    if (!(limitEnd < coordinates.actual)) {
      return limitEnd
    }
    return coordinates.actual
  }

  getFontSize = (pointData: PointData) => {
    return (
      (pointData.fontSizeInit || 1) +
      (pointData.fontSizeEnd || 0 - pointData.fontSizeInit || 0) *
        (((pointData.minZoom || this.props.minZoom) - this.state.zoom) / ((pointData.minZoom || this.props.minZoom) - (pointData.maxZoom || this.props.maxZoom)))
    )
  }

  getIconSize = (pointData: PointData) => {
    return pointData.iconSize * (this.props.initialZoom / this.state.zoom)
  }

  render() {
    return (
      <>
        <div className="bg-secondary w-full h-full">
          {/* Main map */}
          <ComposableMap projection="geoMercator" width={600} height={600}>
            <ZoomableGroup
              zoom={this.state.zoom}
              center={this.state.coordinates}
              onMoveEnd={this.handleMoveEnd}
              maxZoom={this.props.maxZoom}
              minZoom={this.props.minZoom}
              // Don't remove this empty className.
              // https://github.com/zcreativelabs/react-simple-maps/issues/253
              className=""
            >
              {/* Geographies */}
              {this.props.layers.map((layer, index) => (
                <Geographies key={index} geography={layer.file} strokeWidth={layer.size * (this.props.initialZoom / this.state.zoom)} stroke={layer.fill} style={{ pointerEvents: "none" }}>
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

              {/* Markers */}
              {this.props.markers.points.map((pointData, index) => (
                <Marker
                  key={index}
                  coordinates={pointData.coordinates}
                  opacity={this.state.zoom > (pointData.minZoom || this.state.zoom - 1) && this.state.zoom < (pointData.maxZoom || this.state.zoom + 1) ? 1 : 0}
                >
                  <g transform={`translate(${-this.getIconSize(pointData) / 2}, ${-this.getIconSize(pointData)})`}>
                    <this.props.markers.icon size={this.getIconSize(pointData)} fill={this.props.markers.fill} />
                    {/* Description at the side of the marker */}
                    {pointData.name && pointData.namePosition === "left" ? (
                      <text
                        y={this.getIconSize(pointData) / 1.15}
                        x={this.getIconSize(pointData)}
                        fontWeight="bold"
                        style={{
                          fontFamily: this.props.markers.fontFamily,
                          fill: this.props.markers.fill,
                          fontSize: this.getFontSize(pointData),
                        }}
                      >
                        {pointData.name}
                      </text>
                    ) : null}
                  </g>
                  {/* Description at the top of the marker */}
                  {pointData.name && pointData.namePosition === "top" ? (
                    <>
                      <text
                        textAnchor="middle"
                        y={-this.getIconSize(pointData) * 1.01}
                        fontWeight="bold"
                        style={{
                          fontFamily: this.props.markers.fontFamily,
                          fill: this.props.markers.fill,
                          fontSize: this.getFontSize(pointData),
                        }}
                      >
                        {pointData.name}
                      </text>
                    </>
                  ) : null}
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
        </div>

        {/* Buttons */}
        <div className="text-32px text-primary flex flex-row justify-center w-full pt-8px">
          <IconButton icon={FaMinusSquare} ariaLabel="Reducir Zoom" onClick={this.handleZoomOut} className="mr-2 hover:text-primary-darker" />
          <IconButton icon={FaPlusSquare} ariaLabel="Aumentar Zoom" onClick={this.handleZoomIn} className="hover:text-primary-darker" />
        </div>
      </>
    )
  }
}

export default Map
