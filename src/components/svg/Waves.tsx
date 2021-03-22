import * as React from "react"

export const SVGWave = (props: { color: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" height="100%" width="100%">
    <path fill={props.color} d="M0 64l80 26.7C160 117 320 171 480 176s320-37 480-32 320 59 400 85.3l80 26.7v64H0z" />
  </svg>
)

export const SVGInvertedWave_1 = (props: { color: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" height="100%" width="100%">
    <path fill={props.color} d="M0 320l60-5.3c60-5.7 180-15.7 300-64C480 203 600 117 720 117.3c120-.3 240 85.7 360 90.7s240-69 300-106.7l60-37.3V0H0z" />
  </svg>
)

export const SVGInvertedWave_2 = (props: { color: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" height="100%" width="100%">
    <path fill={props.color} d="M0 256l60-16c60-16 180-48 300-53.3 120-5.7 240 16.3 360 42.6 120 26.7 240 58.7 360 69.4 120 10.3 240 .3 300-5.4l60-5.3V0H0z" />
  </svg>
)

export const SVGInvertedWave_3 = (props: { color: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" height="100%" width="100%">
    <path fill={props.color} d="M0 64l80 26.7C160 117 320 171 480 176s320-37 480-32 320 59 400 85.3l80 26.7V0H0z" />
  </svg>
)

export const SVGLineWave = (props: { color: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="180" height="20" preserveAspectRatio="none" viewBox="0 0 120 20">
    <g mask="url(#1)" fill="none">
      <path stroke={props.color} strokeWidth="4" d="M-18.644 14c8.004-1.6 24.004-8 40-8 16.004 0 24.004 8 40 8 16.004 0 24.004-7.6 40-8 16.004-.4 36.274 5.4 40 6 3.734.6-17.086-2.4-21.356-3" />
    </g>
    <defs>
      <mask id="1">
        <path fill="rgba(0, 0, 0, 0)" d="M0 0h120v20H0z" />
      </mask>
    </defs>
  </svg>
)
