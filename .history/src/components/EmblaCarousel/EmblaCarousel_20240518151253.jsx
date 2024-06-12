import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
    const { listProduct } = props




    return (
        <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
            {listProduct.map((index) => (
                <div className="embla__slide" key={index}>
                <div className="embla__slide__number">{index + 1}</div>
                </div>
            ))}
            </div>
        </div>
{/* 
        <div className="bg-black embla__controls">
            <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>

            <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
                <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                    index === selectedIndex ? ' embla__dot--selected' : ''
                )}
                />
            ))}
            </div>
        </div> */}
        </section>
    )
}

export default EmblaCarousel
