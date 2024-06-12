import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import '../css/embla.css'
const OPTIONS = {}
export const CarouselProduct = ({detaiProduct}) => {
    return (
        <div className="">
            <EmblaCarousel detaiProduct={detaiProduct} options={OPTIONS} />
        </div>
    );
};
