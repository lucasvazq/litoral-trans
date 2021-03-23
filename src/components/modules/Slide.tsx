import "react-slideshow-image/dist/styles.css"

import * as React from "react"

import { Slide } from "react-slideshow-image"

import { Card, Paragraph } from ".."

const descriptions = {
  slide1: ["LA MEJOR MANERA", "PARA ENVIAR TUS PAQUETES"],
  slide2: ["SOLUCIONES DE LOGÍSTICA", "BRINDADA POR SUS DUEÑOS", "DISFRUTADA POR SUS CLIENTES"],
}

const slides = [
  {
    slideContent: (
      <>
        <Paragraph className="font-semibold text-2xl sm:text-3xl text-center">{descriptions.slide1[0]}</Paragraph>
        <Paragraph className="text-center sm:text-xl tracking-thight">{descriptions.slide1[1]}</Paragraph>
      </>
    ),
    class: "slide_1",
    description: descriptions.slide1.join(" "),
  },
  {
    slideContent: (
      <>
        <Paragraph className="font-semibold text-lg sm:text-2xl text-center tracking-tighter">{descriptions.slide2[0]}</Paragraph>
        <Paragraph className="text-sm sm:text-xl text-center tracking-wider pt-4">{descriptions.slide2[1]}</Paragraph>
        <Paragraph className="text-sm sm:text-xl text-center">{descriptions.slide2[2]}</Paragraph>
      </>
    ),
    class: "slide_2",
    description: descriptions.slide2.join(" "),
  },
]

export const Slideshow = () => {
  const heightClasses = "h-60vh min-h-120"

  const getId = (index: number) => `slide${index}`

  const [nextIndex, setNextIndex] = React.useState(null)
  const indicators = (actualIndex: number) => (
    <li
      className={`cursor-pointer rounded-full shadow-strong h-2 w-2 hover:opacity-90 ${
        (!nextIndex && actualIndex === 0) || nextIndex === actualIndex ? "bg-primary opacity-100" : "bg-secondary-light opacity-40"
      }`}
      aria-labelledby={getId(actualIndex)}
      // Custom styles from react-slideshow-image have more priority than tailwind classes.
      style={{ marginTop: "-8rem", marginLeft: "0.25rem", marginRight: "0.25rem" }}
    />
  )

  return (
    <Slide arrows={false} transitionDuration={500} indicators={indicators} onChange={(_: number, next: number) => setNextIndex(next)} className={heightClasses}>
      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            className={`each-fade select-none overflow-hidden grid grid-cols-1 grid-rows-1 ${heightClasses}`}
            id={getId(index)}
            aria-label={`Diapositiva número ${index}: ${slide.description}`}
          >
            <div className={`bg-center bg-cover col-start-1 col-end-2 row-start-1 row-end-2 ${slide.class}`} />
            <div className="flex items-center justify-center col-start-1 col-end-2 row-start-1 row-end-2">
              <div className="bg-dots p-2 sm:p-4">
                <Card className="bg-primary p-4 sm:p-8">{slide.slideContent}</Card>
              </div>
            </div>
          </div>
        )
      })}
    </Slide>
  )
}
