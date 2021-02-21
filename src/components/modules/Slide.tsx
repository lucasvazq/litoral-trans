import { useState } from "react";
import { Slide } from 'react-slideshow-image';
import { Label } from '..'
import 'react-slideshow-image/dist/styles.css'

export const Slideshow = (props: {slides: {slideContent: JSX.Element; image: string}[]}) => {

    const [nextIndex, setNextIndex] = useState(null);
    const properties = {
        arrows: false,
        transitionDuration: 500,
        indicators: (i: Number) => (
            <div className={`cursor-pointer rounded-full shadow-strong p-1 mx-1 mb-12 -mt-12 z-1 hover:opacity-90 ${((!nextIndex && i === 0 ) || nextIndex === i) ? 'bg-primary opacity-100': 'bg-light opacity-40'}`} />
        ),
        onChange: (_: Number, next: Number) => {
            setNextIndex(next);
        }
    };

    return (
        <div className="slide-container -mb-7">
            <Slide {...properties}>
                {props.slides.map((value, index) => {
                    return (
                        <div className="each-fade" key={index}>
                            <div className="bg-center bg-cover h-50vh flex items-center justify-center overflow-hidden" style={{'backgroundImage': `url(${value.image})`}}>
                                <div className="bg-dots">
                                    {value.slideContent}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slide>
        </div>
    )
}

export const SlideContent = (props: {children: JSX.Element | JSX.Element[]}) => {
    return (
        <Label className="bg-primary text-light p-4 select-none">
            {props.children}
        </Label>
    )
}
