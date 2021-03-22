import * as React from "react"

export const Image = (props: { src: string, alt: string, height: number, width: number }) => <img src={props.src} alt={props.alt} height={props.height} width={props.width} loading="lazy" />
