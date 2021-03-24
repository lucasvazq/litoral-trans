import * as React from "react"

import { SVGInvertedWave1, SVGInvertedWave2, SVGInvertedWave3, SVGWave } from ".."

interface SectionProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

export class Section extends React.Component<SectionProps> {
  render() {
    return (
      <div className={`flex flex-col items-center py-12 px-4 ${this.props.className || ""}`}>{this.props.children}</div>
    )
  }
}

interface WaveContainerProps {
  children: React.ReactNode | React.ReactNode[]
  isInverted: boolean
  isMain: boolean
}

interface WavesSeparationProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
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

export class WavesSeparation extends React.Component<WavesSeparationProps> {
  render() {
    return (
      <>
        <WaveContainer isInverted={false} isMain={true}>
          <SVGWave color={process.env.colorPrimary} />
        </WaveContainer>
        <div className={`flex flex-col items-center p-4 ${this.props.className || ""}`}>{this.props.children}</div>
        <div className="h-24">
          <WaveContainer isInverted={true} isMain={false}>
            <SVGInvertedWave1 color={process.env.colorPrimaryLight} />
          </WaveContainer>
          <WaveContainer isInverted={true} isMain={false}>
            <SVGInvertedWave2 color={process.env.colorPrimarySemiLight} />
          </WaveContainer>
          <WaveContainer isInverted={true} isMain={true}>
            <SVGInvertedWave3 color={process.env.colorPrimary} />
          </WaveContainer>
        </div>
      </>
    )
  }
}
