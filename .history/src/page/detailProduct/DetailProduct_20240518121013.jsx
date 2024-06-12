import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../../service/ApiService";
import { CarouselProduct } from "../../components/CarouselProduct/CarouselProduct";
import RatingStar from "../../components/RatingStar";
import useAuthen from "../../hook/useRqAuthen";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/feature/cartSlice";
import toast from "react-hot-toast";
import { OtherProducts } from "../../components/OtherProducts";


export const DetailProduct = () => {

    const isCheckAuthen = useAuthen();
    const { id: idProduct } = useParams();
    const dispath = useDispatch();
    
    const listProduct = useSelector((state) => state.productSlice.newProduct)
    console.log(listProduct,"lu2e98ue");

    const [detaiProduct, setDetailProduct] = useState({
        id: null,
        title: "",
        description: "",
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: "",
        category: "",
        thumbnail: "",
        images: [],
    });
    const loadData = async () => {
        const data = await ApiService.ApiDetailProduct(idProduct);
        console.log(data, "data");
        const {
        id,
        title,
        price,
        description,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        images,
        } = data;
        setDetailProduct({
        ...detaiProduct,
        id,
        title,
        price,
        description,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        images,
        });
    };
    const handleAddToCart = () => {
        isCheckAuthen(() =>
        dispath(
            addToCart({
            ...detaiProduct,
            quantity: 1,
            })
        )
        );
    };

    const handleBuyNow = () => {
        
    }
    useEffect(() => {
        if (idProduct) {
        loadData();
        }
    }, []);
    console.log(detaiProduct, "detaiProduct");
    return (
        <div className="container px-10 pt-8 ">
        <div className="grid grid-cols-1 gap-8 px-4 mt-11 md:grid-cols-2 lg:grid-cols-2 font-karla">
            <div className="space-y-1">
                <CarouselProduct detaiProduct={detaiProduct} />
            </div>
            <div className="px-2">
            <h2 className="text-2xl">{detaiProduct.title}</h2>
            <div className="flex items-center mt-3 text-[#ffb21d]">
                <RatingStar rating={detaiProduct.rating} />
                <span className="ml-2 font-semibold text-gray-600">
                {detaiProduct.rating}
                </span>
            </div>
            <div className="mt-1">
                <div className="leading-3">
                <h2 className="mt-3 text-xl font-medium text-blue-500">
                    Price:  $ {detaiProduct.price}
                </h2>
                {/* <span className="mr-2 text-sm line-through opacity-70">$899</span>
                <span className="text-sm font-semibold">-17.94%</span> */}
                </div>
            </div>
            <table className="mt-2 mb-2">
                <tbody>
                <tr>
                    <td className="pr-2 font-bold">Brand</td>
                    <td>{detaiProduct.brand}</td>
                </tr>
                <tr className="mt-3">
                    <td className="pr-2 font-bold">Category</td>
                    <td>{detaiProduct.category}</td>
                </tr>
                <tr className="mt-2">
                    <td className="pr-2 font-bold">Stock</td>
                    <td>{detaiProduct.stock}</td>
                </tr>
                </tbody>
            </table>
            <div className="mt-4">
                <h2 className="font-bold">About the product</h2>
                <p className="mt-2 leading-5">{detaiProduct.description}</p>
            </div>
            <div className="flex flex-wrap items-center mt-4 mb-2 space-x-2">
                <button
                onClick={() => handleAddToCart()}
                type="button"
                className="flex items-center p-2 mb-2 space-x-1 text-white bg-pink-500 rounded hover:bg-pink-700"
                >
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                </svg>
                <span>ADD TO CART</span>
                </button>
                <button
                onClick={handleBuyNow}
                type="button"
                className="flex items-center p-2 mb-2 space-x-1 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"></path>
                </svg>
                <span>BUY NOW</span>
                </button>
                <button
                type="button"
                className="flex items-center p-2 mb-2 space-x-1 text-white bg-yellow-500 rounded hover:bg-yellow-700"
                >
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                </svg>
                <span>ADD TO WISHLIST</span>
                </button>
            </div>
            </div>
            {/* grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 */}
                <div className="container mx-auto mt-8 px-14">
                    <h2 className="text-4xl font-semibold text-green-700"> Trending Products</h2>
                    <div className="">
                        {listProduct.map((item) => (
                        <OtherProducts key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
