
import { Link } from "react-router-dom";
import banner from "../assets/images/banner.jpg"
export const BannerCenter = () => {
    return (
        <div className="container px-4 mx-auto mt-8 md:flex font-lora">
        <img src={banner} alt="banner" className="md:w-1/2" />
        <div className="bg-[#e3edf6] md:w-1/2 flex flex-col items-center text-center justify-center p-4">
            <h1 className="mb-1 text-4xl font-bold">Don't miss the offer</h1>
            <h2 className="mb-4 text-3xl font-semibold">Grab it now</h2>
            <Link
            to="/product/4"
            className="inline-block px-6 py-3 bg-white rounded-md hover:bg-blue-500 hover:text-white"
            data-test="banner-btn"
            >
            Shop Now
            </Link>
        </div>
        </div>
    );
};
