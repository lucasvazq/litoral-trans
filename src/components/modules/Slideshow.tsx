import "react-slideshow-image/dist/styles.css"

import * as React from "react"

import { Slide } from "react-slideshow-image"

import Card from "./Card"
import Paragraph from "../elements/Paragraph"

interface SlideshowProps {
  delay?: number;
}

interface SlideshowState {
  nextIndex: number;
}

class Slideshow extends React.Component<SlideshowProps, SlideshowState> {
  slides: {
    slideContent: React.ReactNode,
    className: string,
    description: string,
  }[]

  heightClasses = "h-80vh min-h-120"
  descriptions = {
    slide_1: ["LA MEJOR MANERA", "PARA ENVIAR TUS PAQUETES"],
    slide_2: ["SOLUCIONES DE LOGÍSTICA", "BRINDADA POR SUS DUEÑOS", "DISFRUTADA POR SUS CLIENTES"],
  }

  constructor(props: SlideshowProps) {
    super(props)

    this.state = {
      nextIndex: 0,
    }

    this.slides = [
      {
        slideContent: (
          <>
            <Paragraph className="font-semibold text-2xl sm:text-3xl text-center">{this.descriptions.slide_1[0]}</Paragraph>
            <Paragraph className="text-center sm:text-xl tracking-thight">{this.descriptions.slide_1[1]}</Paragraph>
          </>
        ),
        className: "slide_1",
        description: this.descriptions.slide_1.join(" "),
      },
      {
        slideContent: (
          <>
            <Paragraph className="font-semibold text-lg sm:text-2xl text-center tracking-tight">{this.descriptions.slide_2[0]}</Paragraph>
            <Paragraph className="text-sm sm:text-xl text-center tracking-wide pt-4">{this.descriptions.slide_2[1]}</Paragraph>
            <Paragraph className="text-sm sm:text-xl text-center tracking-tight">{this.descriptions.slide_2[2]}</Paragraph>
          </>
        ),
        className: "slide_2",
        description: this.descriptions.slide_2.join(" "),
      },
    ]
  }

  getId = (index: number) => {
    return `slide${index}`
  }

  indicators = (actualIndex: number) => (
    <li
      className={`cursor-pointer rounded-full shadow-strong h-2 w-2 hover:opacity-90 ${this.state.nextIndex === actualIndex ? "bg-primary opacity-100" : "bg-secondary-lighter opacity-40"}`}
      aria-labelledby={this.getId(actualIndex)}
      // Custom styles from react-slideshow-image have more priority than tailwind classes.
      style={{ marginTop: "-8rem", marginLeft: "0.25rem", marginRight: "0.25rem" }}
    />
  )

  render() {
    return (
      <>
        <div className="hidden">
          {this.slides.map((slide, index) => (
            <div key={index} id={this.getId(index)} aria-label={`Diapositiva número ${index + 1}: ${slide.description}`} />
          ))}
        </div>

        <Slide
          arrows={false}
          transitionDuration={500}
          indicators={this.indicators}
          onChange={(_: number, next: number) => this.setState({ nextIndex: next })}
          className={`overflow-hidden select-none ${this.heightClasses}`}
          duration={7500}
        >
          {this.slides.map((slide, index) => (
            <div key={index} className={`overflow-hidden bg-center bg-cover flex items-center justify-center w-full ${this.heightClasses} ${slide.className}`}>
              <div className="bg-dots p-2 sm:p-4 -mt-12">
                <Card className="bg-primary p-4 sm:p-8">{slide.slideContent}</Card>
              </div>
            </div>
          ))}
        </Slide>
      </>
    )
  }
}

export default Slideshow
