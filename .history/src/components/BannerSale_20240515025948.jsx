
import sale from "../assets/image/sale.jpg"
import flash from "../assets/image/flash.jpg"
export const BannerSale = () => {
    return (
        <div className="container mx-auto mt-8 px-14 md:flex font-lora">
            <img src={flash} alt="banner" className="md:w-1/2" />
            <div className="bg-[#e3edf6] md:w-1/2 flex flex-col items-center text-center justify-center p-4">
            <img src={sale} alt="banner" className="md:w-1/2" />
            </div>
        </div>
    )
}
