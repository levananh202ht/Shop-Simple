import { Link } from "react-router-dom"
import hero from "../assets/image/hero.png"

export const Banner = () => {
    return (
        <div className="bg-[#e3edf6] font-lora">
        <div className="container grid py-8 mx-auto px-14 md:grid-cols-2">
            <div className="flex items-center">
                <div className="max-w-[450px] space-y-4">
                    <p className="text-black">
                    Starting At <span className="font-bold">$999</span>
                    </p>
                    <h2 className="text-4xl font-bold text-black md:text-5xl">
                    The best notebook collection 2024
                    </h2>
                    <h3 className="text-2xl">
                    Exclusive offer <span className="text-red-600">-10%</span> off
                    this week
                    </h3>
                    <Link
                    to="/"
                    data-test="hero-btn"
                    className="inline-block px-6 py-3 bg-white rounded-md hover:bg-blue-500 hover:text-white"
                    >
                    Shop Now
                    </Link>
                </div>
            </div>
            <div>
                <img src={hero} alt="hero" className="ml-auto" />
            </div>
        </div>
        </div>
    )
}
