import "react-slideshow-image/dist/styles.css"

import * as React from "react"

import { Slide } from "react-slideshow-image"

import { Label } from ".."

const slides = [
  {
    slideContent: (
      <>
        <p className="font-semibold text-2xl">LA MEJOR MANERA</p>
        <p className="text tracking-thight">PARA ENVIAR TUS PAQUETES</p>
      </>
    ),
    class: "slide_1",
  },
  {
    slideContent: (
      <>
        <p className="font-semibold text-lg tracking-tighter mb-4">SOLUCIONES DE LOGÍSTICA</p>
        <p className="text-sm tracking-wider">BRINDADA POR SUS DUEÑOS</p>
        <p className="text-sm">DISFRUTADA POR SUS CLIENTES</p>
      </>
    ),
    class: "slide_2",
  },
]

export const Slideshow = () => {
  const [nextIndex, setNextIndex] = React.useState(null)
  const props = {
    arrows: false,
    autoplay: false,
    transitionDuration: 500,
    indicators: (i: Number) => (
      <div
        className={`cursor-pointer rounded-full shadow-strong mx-1 mb-24 -mt-24 p-1 z-1 hover:opacity-90 ${
          (!nextIndex && i === 0) || nextIndex === i ? "bg-primary opacity-100" : "bg-light opacity-40"
        }`}
      />
    ),
    onChange: (_: Number, next: Number) => {
      setNextIndex(next)
    },
  }

  return (
    <div className="flex flex-col-reverse -mb-7">
      <Slide {...props}>
        {slides.map((slide, index) => {
          return (
            <div className="each-fade" key={index}>
              <div className="overflow-hidden grid grid-cols-1 grid-rows-1 h-50vh">
                <div className={`bg-center bg-cover col-start-1 col-end-1 row-start-1 row-end-1 ${slide.class}`} />
                <div className="flex items-center justify-center col-start-1 col-end-1 row-start-1 row-end-1">
                  <div className="bg-dots">
                    <div className="m-8">
                      <Label className="bg-primary select-none text-light p-4">{slide.slideContent}</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slide>
      <div className="absolute z-1 w-full mb-7">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={process.env.colorPrimary}
            fillOpacity="1"
            d="M0,64L80,90.7C160,117,320,171,480,176C640,181,800,139,960,144C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  )
}
