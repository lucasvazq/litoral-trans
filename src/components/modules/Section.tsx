import * as React from "react"

import { SVGInvertedWave1, SVGInvertedWave2, SVGInvertedWave3, SVGWave } from ".."

export const Section = (props: { children: React.ReactNode | React.ReactNode[], className?: string }) => (
  <div className={`flex flex-col items-center py-12 px-4 ${props.className || ""}`}>{props.children}</div>
)

const WaveContainer = (props: { children: React.ReactNode | React.ReactNode[], isInverted: boolean, isMain: boolean }) => (
  <div className={`relative flex h-24 w-full ${props.isInverted ? "flex-col" : "flex-col-reverse"} ${props.isInverted ? "-mb-24" : "-mt-24"}`}>
    <div
      className={`h-10vh min-h-5 ${
        // If the wave is the main one, we must put it closer to the main container than the rest of them.
        props.isMain ? (props.isInverted ? "-mt-1" : "-mb-1") : ""
      }`}
    >
      {props.children}
    </div>
  </div>
)

export const WavesSeparation = (props: { children: React.ReactNode | React.ReactNode[], className?: string }) => (
  <>
    <WaveContainer isInverted={false} isMain={true}>
      <SVGWave color={process.env.colorPrimary} />
    </WaveContainer>
    <div className={`flex flex-col items-center p-4 ${props.className || ""}`}>{props.children}</div>
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
