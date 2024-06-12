import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import "../../components/css/arrow.css"
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { OtherProducts } from '../OtherProducts'

const EmblaCarousel = (props) => {
    const { listProduct, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
        <div className="container mx-auto mt-8 px-14">
                    <h2 className="text-4xl font-semibold text-green-700"> Trending Products</h2>
                    <div className="flex">
                        {listProduct.map((item) => (
                        <OtherProducts key={item.id} item={item} />
                        ))}
                    </div>
                </div>
        </div>

        <div className="embla__controls">
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
        </div>
        </section>
    )
}

export default EmblaCarousel
