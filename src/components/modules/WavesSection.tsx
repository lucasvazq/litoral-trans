import * as React from "react"

import dynamic from "next/dynamic"

const SVGInvertedWave1 = dynamic(() => import("../svg/SVGInvertedWave1"))
const SVGInvertedWave2 = dynamic(() => import("../svg/SVGInvertedWave2"))
const SVGInvertedWave3 = dynamic(() => import("../svg/SVGInvertedWave3"))
const SVGWave = dynamic(() => import("../svg/SVGWave"))

interface WaveContainerProps {
  children: React.ReactNode | React.ReactNode[];
  isInverted: boolean;
  isMain: boolean;
}

interface WavesSectionProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

class WaveContainer extends React.Component<WaveContainerProps> {
  render() {
    return (
      <div className={`relative flex h-24 w-full ${this.props.isInverted ? "flex-col" : "flex-col-reverse"} ${this.props.isInverted ? "-mb-24" : "-mt-24"}`}>
        {/* If the wave is the main one, we must put it closer to the main container than the rest of them. */}
        <div className={`h-10vh min-h-5 ${this.props.isMain ? (this.props.isInverted ? "-mt-1" : "-mb-1") : ""}`}>{this.props.children}</div>
      </div>
    )
  }
}

class WavesSection extends React.Component<WavesSectionProps> {
  render() {
    return (
      <>
        <WaveContainer isInverted={false} isMain={true}>
          <SVGWave fill={process.env.colorPrimary} />
        </WaveContainer>
        <div className={`flex flex-col items-center p-4 ${this.props.className || ""}`}>{this.props.children}</div>
        <div className="h-24">
          <WaveContainer isInverted={true} isMain={false}>
            <SVGInvertedWave1 fill={process.env.colorPrimaryLight} />
          </WaveContainer>
          <WaveContainer isInverted={true} isMain={false}>
            <SVGInvertedWave2 fill={process.env.colorPrimarySemiLight} />
          </WaveContainer>
          <WaveContainer isInverted={true} isMain={true}>
            <SVGInvertedWave3 fill={process.env.colorPrimary} />
          </WaveContainer>
        </div>
      </>
    )
  }
}

export default WavesSection
