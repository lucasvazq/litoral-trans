import "react-slideshow-image/dist/styles.css"

import * as React from "react"

import { Slide } from "react-slideshow-image"

import { Label, Paragraph } from ".."

const slides = [
  {
    slideContent: (
      <>
        <Paragraph className="font-semibold text-2xl sm:text-3xl text-center">LA MEJOR MANERA</Paragraph>
        <Paragraph className="text-center sm:text-xl tracking-thight">PARA ENVIAR TUS PAQUETES</Paragraph>
      </>
    ),
    class: "slide_1",
  },
  {
    slideContent: (
      <>
        <Paragraph className="font-semibold text-lg sm:text-2xl text-center tracking-tighter mb-4">SOLUCIONES DE LOGÍSTICA</Paragraph>
        <Paragraph className="text-sm sm:text-xl text-center tracking-wider">BRINDADA POR SUS DUEÑOS</Paragraph>
        <Paragraph className="text-sm sm:text-xl text-center">DISFRUTADA POR SUS CLIENTES</Paragraph>
      </>
    ),
    class: "slide_2",
  },
]

export const Slideshow = () => {
  const [nextIndex, setNextIndex] = React.useState(null)
  const props = {
    arrows: false,
    transitionDuration: 500,
    indicators: (i: Number) => (
      <div
        className={`cursor-pointer rounded-full shadow-strong mx-1 -mt-15vh mb-15vh p-1 z-1 hover:opacity-90 ${
          (!nextIndex && i === 0) || nextIndex === i ? "bg-primary opacity-100" : "bg-light opacity-40"
        }`}
      />
    ),
    onChange: (_: Number, next: Number) => {
      setNextIndex(next)
    },
  }

  return (
    <Slide {...props}>
      {slides.map((slide, index) => {
        return (
          <div className="each-fade" key={index}>
            <div className="overflow-hidden grid grid-cols-1 grid-rows-1 h-60vh min-h-64">
              <div className={`bg-center bg-cover col-start-1 col-end-1 row-start-1 row-end-1 ${slide.class}`} />
              <div className="flex items-center justify-center col-start-1 col-end-1 row-start-1 row-end-1">
                <div className="bg-dots mb-9">
                  <div className="my-6 mx-2 sm:my-8 sm:mx-4">
                    <Label className="bg-primary select-none text-light p-4">{slide.slideContent}</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </Slide>
  )
}
