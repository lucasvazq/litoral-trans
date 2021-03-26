import "react-slideshow-image/dist/styles.css"

import * as React from "react"

import dynamic from "next/dynamic"

interface SlideProps {
  arrows: boolean;
  transitionDuration: number;
  indicators: React.ReactNode;
  onChange: (_: number, next: number) => void;
  className: string;
  autoplay: boolean;
  duration: number;
}

const Slide: React.ComponentType<SlideProps> = dynamic(() => import("react-slideshow-image").then((mod) => mod.Slide))

const Card = dynamic(() => import("./Card"))
const Paragraph = dynamic(() => import("../elements/Paragraph"))

interface SlideshowState {
  nextIndex: number;
}

class Slideshow extends React.Component<{}, SlideshowState> {
  heightClasses = "h-60vh min-h-120"
  descriptions = {
    slide_1: ["LA MEJOR MANERA", "PARA ENVIAR TUS PAQUETES"],
    slide_2: ["SOLUCIONES DE LOGÍSTICA", "BRINDADA POR SUS DUEÑOS", "DISFRUTADA POR SUS CLIENTES"],
  }
  slides: {
    slideContent: React.ReactNode | React.ReactNode[],
    className: string,
    description: string,
  }[]

  constructor(props: {}) {
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
            <Paragraph className="font-semibold text-lg sm:text-2xl text-center tracking-tighter">{this.descriptions.slide_2[0]}</Paragraph>
            <Paragraph className="text-sm sm:text-xl text-center tracking-wider pt-4">{this.descriptions.slide_2[1]}</Paragraph>
            <Paragraph className="text-sm sm:text-xl text-center">{this.descriptions.slide_2[2]}</Paragraph>
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
      className={`cursor-pointer rounded-full shadow-strong h-2 w-2 hover:opacity-90 ${
        (!this.state.nextIndex && actualIndex === 0) || this.state.nextIndex === actualIndex ? "bg-primary opacity-100" : "bg-secondary-light opacity-40"
      }`}
      aria-labelledby={this.getId(actualIndex)}
      // Custom styles from react-slideshow-image have more priority than tailwind classes.
      style={{ marginTop: "-8rem", marginLeft: "0.25rem", marginRight: "0.25rem" }}
    />
  )

  render() {

    
    // <div class="each-fade overflow-hidden grid grid-cols-1 grid-rows-1 h-60vh min-h-120">
    return (
      <div className={`each-fade overflow-hidden grid grid-cols-1 grid-rows-1 ${this.heightClasses} w-full max-w-full`}>
        <div className={`bg-center bg-cover col-start-1 col-end-2 row-start-1 row-end-2 ${this.slides[0].className}`}/>
        <div className="flex items-center justify-center col-start-1 col-end-2 row-start-1 row-end-2">
          <div className="bg-dots p-2 sm:p-4">
            <Card className="bg-primary p-4 sm:p-8">{this.slides[0].slideContent}</Card>
          </div>
        </div>
      </div>
    )
    

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
          className={`overflow-hidden ${this.heightClasses}`}
          autoplay={false}
          duration={7500}
        >
          {this.slides.map((slide, index) => (
            <div key={index} className={`each-fade overflow-hidden grid grid-cols-1 grid-rows-1 ${this.heightClasses}`}>
              <div className={`bg-center bg-cover col-start-1 col-end-2 row-start-1 row-end-2 ${slide.className}`} />
              <div className="flex items-center justify-center col-start-1 col-end-2 row-start-1 row-end-2">
                <div className="bg-dots p-2 sm:p-4">
                  <Card className="bg-primary p-4 sm:p-8">{slide.slideContent}</Card>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </>
    )
  }
}

export default Slideshow
